// src/components/ReadingSession.jsx
// Lesen - Interactive reading with word translation on tap + comprehension test
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { getReadingForLesson } from '../data/lessonReadings';
import InteractiveText from './InteractiveText';
import { ArrowLeft, BookOpen, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

const ReadingSession = () => {
    const goBack = useStore(state => state.goBack);
    const activeLessonId = useStore(state => state.activeLessonId);

    const reading = getReadingForLesson(activeLessonId);

    const [mode, setMode] = useState('reading'); // 'reading' | 'quiz' | 'results'
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    if (!reading) {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
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
        setAnswers([...answers, { questionIndex: currentQuestion, selected: selectedOption, correct: isCorrect }]);
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
                minHeight: '100vh', background: '#0B0B0F', paddingBottom: 100
            }}>
                {/* Header */}
                <div style={{
                    position: 'sticky', top: 0, zIndex: 10,
                    background: 'rgba(11, 11, 15, 0.9)', backdropFilter: 'blur(10px)',
                    padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}>
                    <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB', padding: 8 }}>
                        <ArrowLeft size={22} />
                    </button>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>LESEN</div>
                        <div style={{ fontWeight: 600, color: '#E5E7EB' }}>{reading.title}</div>
                    </div>
                    <BookOpen size={20} color="#F26A1B" />
                </div>

                {/* Text Content */}
                <div style={{ padding: '20px 16px' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 20
                    }}>
                        <InteractiveText text={reading.text} />
                    </div>

                    {/* Hint */}
                    <p style={{
                        textAlign: 'center', color: '#7A7D8A', fontSize: '0.85rem',
                        marginTop: 16, marginBottom: 24
                    }}>
                        💡 Натисни на слово щоб побачити переклад
                    </p>

                    {/* Start Quiz Button */}
                    <button
                        onClick={handleStartQuiz}
                        style={{
                            width: '100%', background: '#F26A1B', color: 'white',
                            border: 'none', borderRadius: 14, padding: '16px',
                            fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
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
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex', flexDirection: 'column', background: '#0B0B0F'
            }}>
                {/* Header */}
                <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB', padding: 8 }}>
                        <ArrowLeft size={22} />
                    </button>
                    <span style={{ color: '#7A7D8A', fontWeight: 600 }}>
                        {currentQuestion + 1} / {reading.questions.length}
                    </span>
                    <div style={{ width: 38 }} />
                </div>

                {/* Progress Bar */}
                <div style={{ padding: '0 16px', marginBottom: 20 }}>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                        <div style={{
                            height: '100%', borderRadius: 2, background: '#F26A1B',
                            width: `${((currentQuestion + 1) / reading.questions.length) * 100}%`,
                            transition: 'width 0.3s'
                        }} />
                    </div>
                </div>

                {/* Question */}
                <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{
                        fontSize: '1.2rem', fontWeight: 600, color: '#E5E7EB',
                        marginBottom: 24, lineHeight: 1.4
                    }}>
                        {question.question}
                    </h2>

                    {/* Options */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                                        padding: '14px 16px',
                                        background: showCorrectStyle ? 'rgba(46, 204, 113, 0.15)'
                                            : showWrongStyle ? 'rgba(239, 68, 68, 0.15)'
                                                : isSelected ? 'rgba(242, 106, 27, 0.15)'
                                                    : '#1A1A22',
                                        border: showCorrectStyle ? '2px solid #2ECC71'
                                            : showWrongStyle ? '2px solid #EF4444'
                                                : isSelected ? '2px solid #F26A1B'
                                                    : '2px solid rgba(255,255,255,0.08)',
                                        borderRadius: 12,
                                        color: '#E5E7EB',
                                        fontSize: '1rem',
                                        textAlign: 'left',
                                        cursor: showFeedback ? 'default' : 'pointer',
                                        display: 'flex', alignItems: 'center', gap: 10
                                    }}
                                >
                                    {showCorrectStyle && <CheckCircle2 size={20} color="#2ECC71" />}
                                    {showWrongStyle && <XCircle size={20} color="#EF4444" />}
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Button */}
                <div style={{ padding: '16px' }}>
                    {!showFeedback ? (
                        <button
                            onClick={handleConfirm}
                            disabled={selectedOption === null}
                            style={{
                                width: '100%',
                                background: selectedOption !== null ? '#F26A1B' : 'rgba(255,255,255,0.08)',
                                color: selectedOption !== null ? 'white' : '#7A7D8A',
                                border: 'none', borderRadius: 14, padding: '16px',
                                fontSize: '1rem', fontWeight: 600
                            }}
                        >
                            Перевірити
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            style={{
                                width: '100%', background: '#F26A1B', color: 'white',
                                border: 'none', borderRadius: 14, padding: '16px',
                                fontSize: '1rem', fontWeight: 600
                            }}
                        >
                            {currentQuestion + 1 >= reading.questions.length ? 'Завершити' : 'Далі →'}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // Results Mode
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', background: '#0B0B0F', padding: 20
        }}>
            <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: percentage >= 80 ? 'rgba(46, 204, 113, 0.15)' : percentage >= 50 ? 'rgba(242, 106, 27, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `3px solid ${percentage >= 80 ? '#2ECC71' : percentage >= 50 ? '#F26A1B' : '#EF4444'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24
            }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: '#E5E7EB' }}>{percentage}%</span>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#E5E7EB', marginBottom: 8 }}>
                {percentage >= 80 ? 'Чудово!' : percentage >= 50 ? 'Непогано!' : 'Спробуй ще раз'}
            </h2>
            <p style={{ color: '#7A7D8A', marginBottom: 32 }}>
                {correctCount} з {reading.questions.length} правильних відповідей
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
                <button
                    onClick={() => setMode('reading')}
                    style={{
                        background: 'rgba(255,255,255,0.08)', color: '#E5E7EB',
                        border: 'none', borderRadius: 12, padding: '12px 24px',
                        fontWeight: 600
                    }}
                >
                    Читати знову
                </button>
                <button
                    onClick={goBack}
                    style={{
                        background: '#F26A1B', color: 'white',
                        border: 'none', borderRadius: 12, padding: '12px 24px',
                        fontWeight: 600
                    }}
                >
                    Готово
                </button>
            </div>
        </div>
    );
};

export default ReadingSession;
