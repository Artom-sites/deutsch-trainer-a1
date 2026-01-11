// src/components/ReadingSession.jsx
// Lesen - Simple reading with translation at top
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { getReadingForLesson } from '../data/lessonReadings';
import { words } from '../data/words';
import { ArrowLeft, Volume2, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import { speakSentence } from '../utils/speech';

const ReadingSession = () => {
    const goBack = useStore(state => state.goBack);
    const activeLessonId = useStore(state => state.activeLessonId);

    const reading = getReadingForLesson(activeLessonId);

    const [mode, setMode] = useState('reading');
    const [selectedWord, setSelectedWord] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    if (!reading) {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 80,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', background: '#0B0B0F', padding: 20
            }}>
                <p style={{ color: '#7A7D8A' }}>Текст для цієї лекції недоступний</p>
                <button onClick={goBack} style={{
                    marginTop: 16, background: '#F26A1B', color: 'white', border: 'none',
                    borderRadius: 12, padding: '12px 24px'
                }}>
                    Назад
                </button>
            </div>
        );
    }

    const handleWordClick = (rawWord) => {
        const cleanWord = rawWord.replace(/[.,!?;:()\"„"»«]/g, '').toLowerCase();
        if (!cleanWord) return;

        const found = words.find(w => w.word.toLowerCase() === cleanWord);

        if (found) {
            setSelectedWord({ word: found.word, translation: found.translation, article: found.article });
            speakSentence(found.word);
        } else {
            setSelectedWord({ word: rawWord.replace(/[.,!?;:()\"„"»«]/g, ''), translation: null });
        }
    };

    const handleStartQuiz = () => {
        setMode('quiz');
        setCurrentQuestion(0);
        setAnswers([]);
        setSelectedOption(null);
        setShowFeedback(false);
    };

    const handleAnswer = (optionIndex) => {
        if (showFeedback) return;
        setSelectedOption(optionIndex);
    };

    const handleConfirm = () => {
        if (selectedOption === null) return;
        const isCorrect = selectedOption === reading.questions[currentQuestion].correct;
        setAnswers([...answers, { correct: isCorrect }]);
        setShowFeedback(true);
    };

    const handleNext = () => {
        if (currentQuestion + 1 >= reading.questions.length) {
            setMode('results');
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setShowFeedback(false);
        }
    };

    const correctCount = answers.filter(a => a.correct).length;
    const percentage = Math.round((correctCount / reading.questions.length) * 100);

    // Reading Mode
    if (mode === 'reading') {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 80,
                display: 'flex', flexDirection: 'column', background: '#0B0B0F',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0
                }}>
                    <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB', padding: 6 }}>
                        <ArrowLeft size={22} />
                    </button>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.7rem', color: '#7A7D8A', textTransform: 'uppercase' }}>LESEN</div>
                        <div style={{ fontWeight: 600, color: '#E5E7EB', fontSize: '0.95rem' }}>{reading.title}</div>
                    </div>
                </div>

                {/* Translation Bar */}
                <div style={{
                    padding: '10px 16px',
                    background: selectedWord ? 'rgba(242, 106, 27, 0.1)' : 'rgba(255,255,255,0.03)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    minHeight: 50, display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0
                }}>
                    {selectedWord ? (
                        <>
                            <button
                                onClick={() => speakSentence(selectedWord.word)}
                                style={{
                                    width: 36, height: 36, borderRadius: '50%',
                                    background: '#F26A1B', border: 'none',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <Volume2 size={18} color="#0B0B0F" />
                            </button>
                            <div>
                                <div style={{ fontWeight: 600, color: '#E5E7EB', fontSize: '1.1rem' }}>
                                    {selectedWord.article && <span style={{ color: '#F26A1B', marginRight: 6 }}>{selectedWord.article}</span>}
                                    {selectedWord.word}
                                </div>
                                <div style={{ color: selectedWord.translation ? '#B0B3C0' : '#7A7D8A', fontSize: '0.9rem' }}>
                                    {selectedWord.translation || 'не в словнику'}
                                </div>
                            </div>
                        </>
                    ) : (
                        <span style={{ color: '#7A7D8A', fontSize: '0.85rem' }}>
                            👆 Натисни на слово щоб побачити переклад
                        </span>
                    )}
                </div>

                {/* Text Content */}
                <div style={{
                    flex: 1, padding: '16px',
                    overflowY: 'auto', overflowX: 'hidden',
                    color: '#E5E7EB', fontSize: '1.05rem'
                }}>
                    {reading.text.split('\n').map((paragraph, pIdx) => (
                        <p key={pIdx} style={{ marginBottom: 16, lineHeight: 1.8 }}>
                            {paragraph.split(' ').map((word, wIdx) => (
                                <span
                                    key={wIdx}
                                    onClick={() => handleWordClick(word)}
                                    style={{
                                        cursor: 'pointer',
                                        borderBottom: '1px dashed rgba(255,255,255,0.2)'
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>

                {/* Quiz Button */}
                <div style={{ padding: '12px 16px', flexShrink: 0 }}>
                    <button
                        onClick={handleStartQuiz}
                        style={{
                            width: '100%', background: '#F26A1B', color: 'white',
                            border: 'none', borderRadius: 12, padding: '14px',
                            fontSize: '1rem', fontWeight: 600,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                        }}
                    >
                        Перевірити розуміння <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        );
    }

    // Quiz Mode
    if (mode === 'quiz') {
        const question = reading.questions[currentQuestion];

        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 80,
                display: 'flex', flexDirection: 'column', background: '#0B0B0F'
            }}>
                <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => setMode('reading')} style={{ background: 'transparent', border: 'none', color: '#E5E7EB', padding: 6 }}>
                        <ArrowLeft size={22} />
                    </button>
                    <span style={{ color: '#7A7D8A', fontWeight: 600 }}>
                        {currentQuestion + 1} / {reading.questions.length}
                    </span>
                    <div style={{ width: 34 }} />
                </div>

                <div style={{ padding: '0 16px 16px' }}>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                        <div style={{
                            height: '100%', borderRadius: 2, background: '#F26A1B',
                            width: `${((currentQuestion + 1) / reading.questions.length) * 100}%`
                        }} />
                    </div>
                </div>

                <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#E5E7EB', marginBottom: 20, lineHeight: 1.4 }}>
                        {question.question}
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {question.options.map((option, idx) => {
                            const isSelected = selectedOption === idx;
                            const isCorrect = idx === question.correct;
                            const showCorrectStyle = showFeedback && isCorrect;
                            const showWrongStyle = showFeedback && isSelected && !isCorrect;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={showFeedback}
                                    style={{
                                        padding: '12px 14px',
                                        background: showCorrectStyle ? 'rgba(46, 204, 113, 0.15)'
                                            : showWrongStyle ? 'rgba(239, 68, 68, 0.15)'
                                                : isSelected ? 'rgba(242, 106, 27, 0.15)'
                                                    : '#1A1A22',
                                        border: showCorrectStyle ? '2px solid #2ECC71'
                                            : showWrongStyle ? '2px solid #EF4444'
                                                : isSelected ? '2px solid #F26A1B'
                                                    : '2px solid rgba(255,255,255,0.08)',
                                        borderRadius: 10,
                                        color: '#E5E7EB',
                                        fontSize: '0.95rem',
                                        textAlign: 'left',
                                        display: 'flex', alignItems: 'center', gap: 8
                                    }}
                                >
                                    {showCorrectStyle && <CheckCircle2 size={18} color="#2ECC71" />}
                                    {showWrongStyle && <XCircle size={18} color="#EF4444" />}
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div style={{ padding: '12px 16px' }}>
                    {!showFeedback ? (
                        <button onClick={handleConfirm} disabled={selectedOption === null} style={{
                            width: '100%',
                            background: selectedOption !== null ? '#F26A1B' : 'rgba(255,255,255,0.08)',
                            color: selectedOption !== null ? 'white' : '#7A7D8A',
                            border: 'none', borderRadius: 12, padding: '14px', fontWeight: 600
                        }}>
                            Перевірити
                        </button>
                    ) : (
                        <button onClick={handleNext} style={{
                            width: '100%', background: '#F26A1B', color: 'white',
                            border: 'none', borderRadius: 12, padding: '14px', fontWeight: 600
                        }}>
                            {currentQuestion + 1 >= reading.questions.length ? 'Результат' : 'Далі →'}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // Results
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 80,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', background: '#0B0B0F', padding: 20
        }}>
            <div style={{
                width: 90, height: 90, borderRadius: '50%',
                background: percentage >= 80 ? 'rgba(46, 204, 113, 0.15)' : percentage >= 50 ? 'rgba(242, 106, 27, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `3px solid ${percentage >= 80 ? '#2ECC71' : percentage >= 50 ? '#F26A1B' : '#EF4444'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20
            }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#E5E7EB' }}>{percentage}%</span>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#E5E7EB', marginBottom: 6 }}>
                {percentage >= 80 ? 'Чудово!' : percentage >= 50 ? 'Непогано!' : 'Спробуй ще'}
            </h2>
            <p style={{ color: '#7A7D8A', marginBottom: 28 }}>
                {correctCount} з {reading.questions.length} правильно
            </p>

            <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setMode('reading')} style={{
                    background: 'rgba(255,255,255,0.08)', color: '#E5E7EB',
                    border: 'none', borderRadius: 10, padding: '10px 20px', fontWeight: 600
                }}>
                    Ще раз
                </button>
                <button onClick={goBack} style={{
                    background: '#F26A1B', color: 'white',
                    border: 'none', borderRadius: 10, padding: '10px 20px', fontWeight: 600
                }}>
                    Готово
                </button>
            </div>
        </div>
    );
};

export default ReadingSession;
