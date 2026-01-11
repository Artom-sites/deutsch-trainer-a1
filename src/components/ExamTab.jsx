// src/components/ExamTab.jsx
// Вкладка "Екзамен" - підготовка до Goethe-Zertifikat A1

import React, { useState } from 'react';
import { BookOpen, Headphones, CheckCircle, XCircle, Play, ArrowRight } from 'lucide-react';
import { readingTests, listeningTests } from '../data/exam';
import InteractiveText from './InteractiveText';
import { speakSentence, stopSpeaking } from '../utils/speech';

const ExamCard = ({ test, type, onStart }) => (
    <div
        onClick={() => onStart(test)}
        style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid var(--stroke)',
            borderRadius: 20,
            marginBottom: 12,
            padding: 16,
            cursor: 'pointer',
            boxShadow: 'var(--sh-1)'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: type === 'reading' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: type === 'reading' ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(168, 85, 247, 0.3)'
            }}>
                {type === 'reading' ? (
                    <BookOpen size={24} color="#3b82f6" />
                ) : (
                    <Headphones size={24} color="#a855f7" />
                )}
            </div>
            <div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--text-0)' }}>{test.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>
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
        if (!test || !test.text) return;

        if (isPlaying) {
            stopSpeaking();
            setIsPlaying(false);
            return;
        }

        setIsPlaying(true);
        speakSentence(test.text).then(() => {
            setIsPlaying(false);
        }).catch((e) => {
            console.error("Playback error:", e);
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <button className="v-backBtn" onClick={onBack}>
                    ←
                </button>
                <div style={{
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    color: timeLeft < 60 ? 'var(--bad)' : 'var(--text-0)'
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
                color: 'var(--text-0)',
                border: '1px solid var(--stroke)',
                borderRadius: 20
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
                            {isPlaying ? (
                                <span style={{ fontSize: 24, fontWeight: 900, lineHeight: 1 }}>||</span>
                            ) : (
                                <Play size={24} fill="black" />
                            )}
                            {isPlaying ? 'Stoppen' : 'Audio abspielen'}
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
                        marginTop: 24,
                        marginBottom: 32
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
            <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-0)', margin: '0 0 4px' }}>
                    Prüfung
                </h1>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', margin: 0 }}>
                    Підготовка до екзамену A1
                </p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
                <button
                    onClick={() => setActiveType('reading')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 14,
                        background: activeType === 'reading' ? 'var(--pri)' : 'var(--surface)',
                        color: activeType === 'reading' ? '#0B0B0F' : 'var(--text-2)',
                        border: activeType === 'reading' ? 'none' : '1px solid var(--stroke)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    📖 Lesen
                </button>
                <button
                    onClick={() => setActiveType('listening')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 14,
                        background: activeType === 'listening' ? 'var(--pri)' : 'var(--surface)',
                        color: activeType === 'listening' ? '#0B0B0F' : 'var(--text-2)',
                        border: activeType === 'listening' ? 'none' : '1px solid var(--stroke)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    🎧 Hören
                </button>
            </div>

            {/* List */}
            <div>
                <h3 style={{ marginBottom: 16, fontSize: '1rem', color: 'var(--text-0)' }}>
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
