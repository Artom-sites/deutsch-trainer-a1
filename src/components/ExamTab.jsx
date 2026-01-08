// src/components/ExamTab.jsx
// Вкладка "Екзамен" - підготовка до Goethe-Zertifikat A1

import React, { useState } from 'react';
import { BookOpen, Headphones, CheckCircle, XCircle, Play, Pause, ArrowRight } from 'lucide-react';
import { readingTests, listeningTests } from '../data/exam';
import InteractiveText from './InteractiveText';
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
    const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes

    // Timer
    React.useEffect(() => {
        if (submitted) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setSubmitted(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [submitted]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

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

    const score = getScore();
    const passed = score >= test.questions.length * 0.6;

    return (
        <div className="screen fade-in" style={{ paddingBottom: 180 }}>
            {/* Header with Timer */}
            <div className="back-header" style={{ justifyContent: 'space-between' }}>
                <button className="back-btn" onClick={onBack}>
                    ←
                </button>
                <div style={{
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    color: timeLeft < 60 ? 'var(--color-error)' : 'var(--text-primary)'
                }}>
                    ⏱ {formatTime(timeLeft)}
                </div>
            </div>

            <div style={{ marginBottom: 'var(--space-md)' }}>
                <h2 className="screen-title" style={{ fontSize: '1.5rem' }}>{test.title}</h2>
                <div className="progress-bar">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${(Object.keys(answers).length / test.questions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Content (Text or Audio Control) */}
            <div className="card" style={{
                marginBottom: 'var(--space-lg)',
                padding: 'var(--space-lg)',
                background: 'rgba(255, 255, 255, 0.03)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                {type === 'reading' ? (
                    <div style={{ padding: '0 8px' }}>
                        <div style={{ marginBottom: 'var(--space-md)', fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                            💡 Tip: Klicke auf ein Wort für die Übersetzung.
                        </div>
                        <InteractiveText text={test.text} />
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                            Прослухайте текст і дайте відповіді на запитання.
                        </div>
                        <button
                            className="btn"
                            onClick={handlePlay}
                            disabled={isPlaying}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: '16px 32px',
                                background: isPlaying ? 'rgba(204, 255, 0, 0.2)' : 'var(--color-accent)',
                                color: isPlaying ? 'var(--color-accent)' : 'black',
                                transition: 'all 0.3s ease',
                                borderRadius: 100
                            }}
                        >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} fill="black" />}
                            {isPlaying ? 'Hören...' : 'Audio abspielen'}
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
                        <div key={q.id} className="fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div style={{ fontWeight: 600, marginBottom: 'var(--space-md)', fontSize: '1.1rem' }}>
                                <span style={{ color: 'var(--color-accent)', marginRight: 8 }}>{idx + 1}.</span>
                                {q.question}
                            </div>
                            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                                {q.options.map((opt, optIdx) => {
                                    let bg = 'rgba(255, 255, 255, 0.03)';
                                    let border = '1px solid rgba(255, 255, 255, 0.1)';
                                    let color = 'var(--text-primary)';

                                    if (submitted) {
                                        if (optIdx === q.correct) {
                                            bg = 'rgba(34, 197, 94, 0.2)';
                                            border = '1px solid var(--color-success)';
                                            color = '#86efac';
                                        } else if (selected === optIdx) {
                                            bg = 'rgba(239, 68, 68, 0.2)';
                                            border = '1px solid var(--color-error)';
                                            color = '#fca5a5';
                                        }
                                    } else if (selected === optIdx) {
                                        bg = 'rgba(204, 255, 0, 0.15)';
                                        border = '1px solid var(--color-accent)';
                                        color = 'var(--color-accent)';
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => handleSelect(q.id, optIdx)}
                                            disabled={submitted}
                                            style={{
                                                padding: '16px',
                                                borderRadius: '16px',
                                                background: bg,
                                                border: border,
                                                color: color,
                                                textAlign: 'left',
                                                cursor: submitted ? 'default' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                fontSize: '1rem',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <div style={{
                                                width: 24, height: 24, borderRadius: '50%', border: `1px solid ${color}`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '0.8rem', opacity: 0.7
                                            }}>
                                                {String.fromCharCode(65 + optIdx)}
                                            </div>
                                            {opt}
                                            {submitted && optIdx === q.correct && <CheckCircle size={20} color="var(--color-success)" style={{ marginLeft: 'auto' }} />}
                                            {submitted && selected === optIdx && optIdx !== q.correct && <XCircle size={20} color="var(--color-error)" style={{ marginLeft: 'auto' }} />}
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
                    style={{
                        opacity: Object.keys(answers).length < test.questions.length ? 0.5 : 1,
                        width: '100%',
                        maxWidth: 400,
                        margin: '0 auto',
                        display: 'block',
                        marginTop: 'var(--space-xl)',
                        marginBottom: 'var(--space-xl)'
                    }}
                >
                    Перевірити відповіді
                </button>
            ) : (
                <div className="card fade-in" style={{
                    textAlign: 'center',
                    background: passed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${passed ? 'var(--color-success)' : 'var(--color-error)'}`,
                    padding: 'var(--space-xl)'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>
                        {passed ? '🎉' : '📚'}
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8 }}>
                        {passed ? 'Gut gemacht!' : 'Übung macht den Meister!'}
                    </div>
                    <div style={{ fontSize: '1.1rem', marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                        Результат: {score} / {test.questions.length}
                    </div>
                    <button className="btn btn-outline" onClick={onBack} style={{ width: '100%' }}>
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
