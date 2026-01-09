// src/components/TestSession.jsx
// Повноцінна сесія тестування для перевірки знань після лекції
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { getTestForLesson } from '../data/lessonTests';
import { ArrowLeft, Check, X, ChevronRight, RefreshCw, Trophy, Target } from 'lucide-react';

const TestSession = () => {
    const activeLessonId = useStore(state => state.activeLessonId);
    const goBack = useStore(state => state.goBack);

    const test = getTestForLesson(activeLessonId);
    const questions = test?.questions || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [matchSelections, setMatchSelections] = useState({});

    if (!test) return null;

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    // Handle multiple choice answer
    const handleChoiceAnswer = (optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: optionIndex
        }));
    };

    // Handle fill-blank answer
    const handleFillBlankSubmit = () => {
        if (inputValue.trim()) {
            setAnswers(prev => ({
                ...prev,
                [currentQuestion.id]: inputValue.trim()
            }));
            setInputValue('');
        }
    };

    // Handle match selection
    const handleMatchSelect = (leftIndex, rightValue) => {
        setMatchSelections(prev => ({
            ...prev,
            [leftIndex]: rightValue
        }));
    };

    // Submit match answers
    const handleMatchSubmit = () => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: { ...matchSelections }
        }));
        setMatchSelections({});
    };

    // Go to next question
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    // Calculate results
    const calculateResults = () => {
        let correct = 0;
        questions.forEach(q => {
            const answer = answers[q.id];
            if (q.type === 'multiple-choice' && answer === q.correct) {
                correct++;
            } else if (q.type === 'fill-blank' && answer?.toLowerCase() === q.correct.toLowerCase()) {
                correct++;
            } else if (q.type === 'match' && answer) {
                // For match, check if all pairs are correct
                let allCorrect = true;
                q.pairs.forEach((pair, idx) => {
                    if (answer[idx] !== pair.right) allCorrect = false;
                });
                if (allCorrect) correct++;
            }
        });
        return { correct, total: questions.length, percent: Math.round((correct / questions.length) * 100) };
    };

    // Restart test
    const restartTest = () => {
        setCurrentIndex(0);
        setAnswers({});
        setShowResults(false);
        setInputValue('');
        setMatchSelections({});
    };

    const isAnswered = answers[currentQuestion?.id] !== undefined;

    // Results screen
    if (showResults) {
        const results = calculateResults();
        const emoji = results.percent >= 80 ? '🏆' : results.percent >= 60 ? '👍' : '📚';

        return (
            <div className="screen" style={{ paddingTop: 60, textAlign: 'center' }}>
                <div style={{
                    fontSize: '4rem',
                    marginBottom: 16
                }}>
                    {emoji}
                </div>

                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>
                    {results.percent >= 80 ? 'Чудово!' : results.percent >= 60 ? 'Непогано!' : 'Продовжуй вчитись!'}
                </h1>

                <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
                    {test.title}
                </p>

                {/* Score circle */}
                <div style={{
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: `conic-gradient(
                        ${results.percent >= 80 ? '#2ECC71' : results.percent >= 60 ? '#F26A1B' : '#E94B5A'} ${results.percent}%, 
                        rgba(255,255,255,0.1) ${results.percent}%
                    )`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 32px'
                }}>
                    <div style={{
                        width: 130,
                        height: 130,
                        borderRadius: '50%',
                        background: 'var(--bg-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                            {results.percent}%
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            {results.correct}/{results.total}
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                    <button
                        onClick={restartTest}
                        style={{
                            flex: 1,
                            padding: '16px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: 16,
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                        <RefreshCw size={20} />
                        Ще раз
                    </button>

                    <button
                        onClick={goBack}
                        style={{
                            flex: 1,
                            padding: '16px',
                            background: '#2ECC71',
                            border: 'none',
                            borderRadius: 16,
                            color: '#0d0d0d',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                        <Check size={20} />
                        Готово
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 16,
                paddingTop: 8
            }}>
                <button
                    onClick={goBack}
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <X size={20} />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {test.title}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                        Питання {currentIndex + 1} з {questions.length}
                    </div>
                </div>
                <Target size={20} color="#2ECC71" />
            </div>

            {/* Progress bar */}
            <div style={{
                height: 4,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                marginBottom: 24,
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: '#2ECC71',
                    transition: 'width 0.3s ease'
                }} />
            </div>

            {/* Question content */}
            <div style={{ flex: 1 }}>
                {/* Question text */}
                <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: 24,
                    lineHeight: 1.4
                }}>
                    {currentQuestion.question}
                </div>

                {/* Multiple choice */}
                {currentQuestion.type === 'multiple-choice' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = answers[currentQuestion.id] === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleChoiceAnswer(idx)}
                                    style={{
                                        padding: '16px 20px',
                                        background: isSelected ? 'rgba(46, 204, 113, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                                        border: isSelected ? '2px solid #2ECC71' : '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 14,
                                        color: isSelected ? '#2ECC71' : 'var(--text-primary)',
                                        fontSize: '1rem',
                                        fontWeight: isSelected ? 600 : 400,
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Fill in the blank */}
                {currentQuestion.type === 'fill-blank' && (
                    <div>
                        <input
                            type="text"
                            value={answers[currentQuestion.id] || inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleFillBlankSubmit()}
                            placeholder="Введіть відповідь..."
                            disabled={answers[currentQuestion.id] !== undefined}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: 14,
                                color: 'var(--text-primary)',
                                fontSize: '1.1rem',
                                outline: 'none'
                            }}
                        />
                        {!answers[currentQuestion.id] && (
                            <button
                                onClick={handleFillBlankSubmit}
                                disabled={!inputValue.trim()}
                                style={{
                                    marginTop: 12,
                                    padding: '14px 24px',
                                    background: inputValue.trim() ? '#2ECC71' : 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: 12,
                                    color: inputValue.trim() ? '#0d0d0d' : 'var(--text-muted)',
                                    fontWeight: 600,
                                    cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Відповісти
                            </button>
                        )}
                    </div>
                )}

                {/* Match pairs */}
                {currentQuestion.type === 'match' && (
                    <div>
                        {currentQuestion.pairs.map((pair, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                gap: 12,
                                marginBottom: 12,
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    flex: 1,
                                    padding: '12px 16px',
                                    background: 'rgba(242, 106, 27, 0.1)',
                                    border: '1px solid rgba(242, 106, 27, 0.2)',
                                    borderRadius: 10,
                                    fontSize: '0.9rem'
                                }}>
                                    {pair.left}
                                </div>
                                <ChevronRight size={16} color="var(--text-muted)" />
                                <select
                                    value={matchSelections[idx] || answers[currentQuestion.id]?.[idx] || ''}
                                    onChange={(e) => handleMatchSelect(idx, e.target.value)}
                                    disabled={answers[currentQuestion.id] !== undefined}
                                    style={{
                                        flex: 1,
                                        padding: '12px 16px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: 10,
                                        color: 'var(--text-primary)',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <option value="">Оберіть...</option>
                                    {currentQuestion.pairs.map((p, i) => (
                                        <option key={i} value={p.right}>{p.right}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                        {!answers[currentQuestion.id] && (
                            <button
                                onClick={handleMatchSubmit}
                                disabled={Object.keys(matchSelections).length !== currentQuestion.pairs.length}
                                style={{
                                    marginTop: 12,
                                    padding: '14px 24px',
                                    background: Object.keys(matchSelections).length === currentQuestion.pairs.length ? '#2ECC71' : 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: 12,
                                    color: Object.keys(matchSelections).length === currentQuestion.pairs.length ? '#0d0d0d' : 'var(--text-muted)',
                                    fontWeight: 600,
                                    cursor: Object.keys(matchSelections).length === currentQuestion.pairs.length ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Підтвердити
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Next button */}
            {isAnswered && (
                <button
                    onClick={handleNext}
                    style={{
                        width: '100%',
                        padding: '18px',
                        marginTop: 24,
                        marginBottom: 24,
                        background: '#2ECC71',
                        border: 'none',
                        borderRadius: 16,
                        color: '#0d0d0d',
                        fontWeight: 600,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8
                    }}
                >
                    {currentIndex < questions.length - 1 ? 'Далі' : 'Завершити тест'}
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
};

export default TestSession;
