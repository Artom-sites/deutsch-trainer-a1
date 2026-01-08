// src/components/ExamTab.jsx
// Вкладка "Екзамен" - підготовка до Goethe-Zertifikat A1

import React, { useState } from 'react';
import { BookOpen, Headphones, CheckCircle, XCircle, Play, Pause, ArrowRight } from 'lucide-react';
import { readingTests, listeningTests } from '../data/exam';
import { speakSentence } from '../utils/speech';

const ExamCard = ({ test, type, onStart }) => (
    <div
        className="card card-clickable"
        onClick={() => onStart(test)}
        style={{ marginBottom: 'var(--space-md)' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <div style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-md)',
                background: type === 'reading' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {type === 'reading' ? (
                    <BookOpen size={24} color="var(--color-info)" />
                ) : (
                    <Headphones size={24} color="var(--color-accent)" />
                )}
            </div>
            <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{test.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {test.questions.length} завдань
                </div>
            </div>
        </div>
    </div>
);

const TestSession = ({ test, type, onBack }) => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSelect = (qId, optionIdx) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handlePlay = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        speakSentence(test.text).then(() => {
            setIsPlaying(false);
        }).catch(() => {
            setIsPlaying(false);
        });
    };

    const getScore = () => {
        let correct = 0;
        test.questions.forEach(q => {
            if (answers[q.id] === q.correct) correct++;
        });
        return correct;
    };

    return (
        <div className="screen fade-in">
            {/* Header */}
            <div className="back-header">
                <button className="back-btn" onClick={onBack}>
                    ← Назад
                </button>
                <div style={{ fontWeight: 600 }}>{test.title}</div>
            </div>

            {/* Content (Text or Audio Control) */}
            <div className="card" style={{
                marginBottom: 'var(--space-lg)',
                padding: 'var(--space-lg)',
                background: 'var(--bg-surface)', // Ensure explicit background
                color: 'var(--text-primary)' // Ensure explicit text color
            }}>
                {type === 'reading' ? (
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, fontSize: '1rem' }}>
                        {test.text}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                            Прослухайте текст і дайте відповіді на запитання.
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={handlePlay}
                            disabled={isPlaying}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '12px 24px',
                                background: isPlaying ? 'var(--color-accent)' : 'var(--color-primary)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isPlaying ? <Pause size={20} className="pulse" /> : <Play size={20} />}
                            {isPlaying ? 'Відтворюється...' : 'Прослухати'}
                        </button>
                    </div>
                )}
            </div>

            {/* Questions */}
            <div style={{ display: 'grid', gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
                {test.questions.map((q, idx) => {
                    const selected = answers[q.id];
                    const isCorrect = submitted && selected === q.correct;
                    const isWrong = submitted && selected !== q.correct && selected !== undefined;

                    return (
                        <div key={q.id}>
                            <div style={{ fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                                {idx + 1}. {q.question}
                            </div>
                            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                                {q.options.map((opt, optIdx) => {
                                    let bg = 'var(--bg-card)';
                                    let border = '1px solid var(--border-color)';

                                    if (submitted) {
                                        if (optIdx === q.correct) {
                                            bg = 'rgba(34, 197, 94, 0.1)';
                                            border = '1px solid var(--color-success)';
                                        } else if (selected === optIdx) {
                                            bg = 'rgba(239, 68, 68, 0.1)';
                                            border = '1px solid var(--color-error)';
                                        }
                                    } else if (selected === optIdx) {
                                        bg = 'rgba(59, 130, 246, 0.1)';
                                        border = '1px solid var(--color-info)';
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => handleSelect(q.id, optIdx)}
                                            disabled={submitted}
                                            style={{
                                                padding: '12px',
                                                borderRadius: 'var(--radius-sm)',
                                                background: bg,
                                                border: border,
                                                textAlign: 'left',
                                                cursor: submitted ? 'default' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8
                                            }}
                                        >
                                            {submitted && optIdx === q.correct && <CheckCircle size={16} color="var(--color-success)" />}
                                            {submitted && selected === optIdx && optIdx !== q.correct && <XCircle size={16} color="var(--color-error)" />}
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Check Button */}
            {!submitted ? (
                <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length < test.questions.length}
                    style={{ opacity: Object.keys(answers).length < test.questions.length ? 0.5 : 1 }}
                >
                    Перевірити відповіді
                </button>
            ) : (
                <div className="card" style={{
                    textAlign: 'center',
                    background: getScore() === test.questions.length ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    border: `1px solid ${getScore() === test.questions.length ? 'var(--color-success)' : 'var(--color-warning)'}`
                }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>
                        Результат: {getScore()} / {test.questions.length}
                    </div>
                    <button className="btn btn-outline" onClick={onBack} style={{ marginTop: 'var(--space-md)' }}>
                        Інший тест
                    </button>
                </div>
            )}
        </div>
    );
};

const ExamTab = () => {
    const [activeTest, setActiveTest] = useState(null);
    const [activeType, setActiveType] = useState('reading'); // 'reading' or 'listening'

    if (activeTest) {
        return <TestSession test={activeTest} type={activeType} onBack={() => setActiveTest(null)} />;
    }

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Prüfung</h1>
                <p className="screen-subtitle">Підготовка до екзамену A1</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <button
                    onClick={() => setActiveType('reading')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        background: activeType === 'reading' ? 'var(--color-primary)' : 'var(--bg-card)',
                        color: activeType === 'reading' ? 'white' : 'var(--text-secondary)',
                        border: 'none',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    📖 Lesen
                </button>
                <button
                    onClick={() => setActiveType('listening')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        background: activeType === 'listening' ? 'var(--color-primary)' : 'var(--bg-card)',
                        color: activeType === 'listening' ? 'white' : 'var(--text-secondary)',
                        border: 'none',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    🎧 Hören
                </button>
            </div>

            {/* List */}
            <div>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>
                    {activeType === 'reading' ? 'Читання' : 'Аудіювання'}
                </h3>

                {activeType === 'reading' ? (
                    readingTests.map(test => (
                        <ExamCard
                            key={test.id}
                            test={test}
                            type="reading"
                            onStart={(t) => setActiveTest(t)}
                        />
                    ))
                ) : (
                    listeningTests.map(test => (
                        <ExamCard
                            key={test.id}
                            test={test}
                            type="listening"
                            onStart={(t) => setActiveTest(t)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ExamTab;
