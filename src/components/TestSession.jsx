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

    // Check correctness helper
    const checkCorrectness = (qId, answer) => {
        const q = questions.find(question => question.id === qId);
        if (!q) return false;

        if (q.type === 'multiple-choice') {
            return answer === q.correct;
        } else if (q.type === 'fill-blank') {
            return answer?.toLowerCase() === q.correct.toLowerCase();
        } else if (q.type === 'match') {
            if (!answer) return false;
            let allCorrect = true;
            q.pairs.forEach((pair, idx) => {
                if (answer[idx] !== pair.right) allCorrect = false;
            });
            return allCorrect;
        }
        return false;
    };

    const isAnswered = answers[currentQuestion?.id] !== undefined;
    const isCurrentCorrect = isAnswered ? checkCorrectness(currentQuestion.id, answers[currentQuestion.id]) : false;

    // Results screen
    if (showResults) {
        const results = calculateResults();
        const emoji = results.percent >= 80 ? '🏆' : results.percent >= 60 ? '👍' : '📚';

        return (
            <div className="screen" style={{
                paddingTop: 60,
                textAlign: 'center',
                overflowY: 'auto',
                paddingBottom: 40
            }}>
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

                {/* Review Mistakes Section - Only show if there are mistakes */}
                {results.correct < results.total && (
                    <div style={{ textAlign: 'left', padding: '0 20px', marginBottom: 32 }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: 16 }}>Робота над помилками:</h3>
                        {questions.map((q, idx) => {
                            const userAnswer = answers[q.id];
                            const isCorrect = checkCorrectness(q.id, userAnswer);
                            if (isCorrect) return null;

                            return (
                                <div key={q.id} style={{
                                    background: 'rgba(233, 75, 90, 0.1)',
                                    border: '1px solid rgba(233, 75, 90, 0.3)',
                                    borderRadius: 12,
                                    padding: 16,
                                    marginBottom: 12
                                }}>
                                    <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '0.9rem' }}>
                                        {idx + 1}. {q.question}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#E94B5A', marginBottom: 4 }}>
                                        Ваша відповідь: <span style={{ fontWeight: 600 }}>
                                            {q.type === 'multiple-choice' ? q.options[userAnswer] :
                                                q.type === 'match' ? 'Невірно з\'єднано' : userAnswer}
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#2ECC71' }}>
                                        Правильно: <span style={{ fontWeight: 600 }}>
                                            {q.type === 'multiple-choice' ? q.options[q.correct] :
                                                q.type === 'match' ? 'Див. пояснення' : q.correct}
                                        </span>
                                    </div>
                                    {q.explanation && (
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 8, fontStyle: 'italic' }}>
                                            ℹ️ {q.explanation}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 12, padding: '0 20px', marginBottom: 20 }}>
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
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
            {/* Header Row - Back button left, Counter right */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 16
            }}>
                <button className="v-backBtn" onClick={goBack}>
                    <X size={20} color="#fff" />
                </button>

                <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-1)',
                    background: 'var(--surface)',
                    padding: '6px 12px',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid var(--stroke)'
                }}>
                    <Target size={16} color="var(--ok)" />
                    <span>{currentIndex + 1} <span style={{ color: 'var(--text-2)' }}>/ {questions.length}</span></span>
                </div>
            </div>

            {/* Progress bar */}
            <div className="progress-bar" style={{ marginBottom: 20 }}>
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* Question content */}
            <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 120 }}>
                {/* Question text */}
                <div style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    marginBottom: 20,
                    lineHeight: 1.4,
                    color: 'var(--text-0)'
                }}>
                    {currentQuestion.question}
                </div>

                {/* Multiple choice */}
                {currentQuestion.type === 'multiple-choice' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = answers[currentQuestion.id] === idx;
                            const isCorrect = currentQuestion.correct === idx;
                            const showCorrect = isAnswered && isCorrect;
                            const showWrong = isAnswered && isSelected && !isCorrect;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => !isAnswered && handleChoiceAnswer(idx)}
                                    disabled={isAnswered}
                                    style={{
                                        padding: '16px 20px',
                                        background: showCorrect ? 'rgba(46, 204, 113, 0.2)' :
                                            showWrong ? 'rgba(233, 75, 90, 0.2)' :
                                                isSelected ? 'rgba(46, 204, 113, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                                        border: showCorrect ? '2px solid #2ECC71' :
                                            showWrong ? '2px solid #E94B5A' :
                                                isSelected ? '2px solid #2ECC71' : '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: 14,
                                        color: showCorrect ? '#2ECC71' :
                                            showWrong ? '#E94B5A' :
                                                isSelected ? '#2ECC71' : 'var(--text-primary)',
                                        fontSize: '1rem',
                                        fontWeight: (isSelected || showCorrect) ? 600 : 400,
                                        textAlign: 'left',
                                        cursor: isAnswered ? 'default' : 'pointer',
                                        transition: 'all 0.2s ease',
                                        pointerEvents: isAnswered ? 'none' : 'auto'
                                    }}
                                >
                                    {option}
                                    {showCorrect && <Check size={18} style={{ float: 'right' }} />}
                                    {showWrong && <X size={18} style={{ float: 'right' }} />}
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
                            onKeyPress={(e) => e.key === 'Enter' && !isAnswered && handleFillBlankSubmit()}
                            placeholder="Введіть відповідь..."
                            disabled={isAnswered}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                background: isAnswered
                                    ? (isCurrentCorrect ? 'rgba(46, 204, 113, 0.1)' : 'rgba(233, 75, 90, 0.1)')
                                    : 'rgba(255, 255, 255, 0.08)',
                                border: isAnswered
                                    ? (isCurrentCorrect ? '1px solid #2ECC71' : '1px solid #E94B5A')
                                    : '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: 14,
                                color: isAnswered
                                    ? (isCurrentCorrect ? '#2ECC71' : '#E94B5A')
                                    : 'var(--text-primary)',
                                fontSize: '1.1rem',
                                outline: 'none'
                            }}
                        />
                        {!isAnswered && (
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
                        {isAnswered && !isCurrentCorrect && (
                            <div style={{ marginTop: 12, fontSize: '0.95rem', color: '#2ECC71' }}>
                                Правильно: <strong>{currentQuestion.correct}</strong>
                            </div>
                        )}
                    </div>
                )}

                {/* Match pairs */}
                {currentQuestion.type === 'match' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {currentQuestion.pairs.map((pair, idx) => {
                            const userAnswer = answers[currentQuestion.id]?.[idx];
                            const isThisCorrect = userAnswer === pair.right;
                            const selectedValue = matchSelections[idx] || userAnswer || '';

                            return (
                                <div key={idx} style={{
                                    background: 'var(--surface)',
                                    border: isAnswered
                                        ? (isThisCorrect ? '1px solid var(--ok)' : '1px solid var(--bad)')
                                        : '1px solid var(--stroke)',
                                    borderRadius: 16,
                                    padding: 16,
                                    transition: 'border-color 0.2s'
                                }}>
                                    {/* Question label */}
                                    <div style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: 'var(--text-0)',
                                        marginBottom: 12
                                    }}>
                                        {pair.left}
                                    </div>

                                    {/* Dropdown */}
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            value={selectedValue}
                                            onChange={(e) => handleMatchSelect(idx, e.target.value)}
                                            disabled={isAnswered}
                                            style={{
                                                width: '100%',
                                                padding: '12px 40px 12px 14px',
                                                background: isAnswered
                                                    ? (isThisCorrect ? 'rgba(46, 204, 113, 0.15)' : 'rgba(233, 75, 90, 0.15)')
                                                    : 'rgba(255,255,255,0.06)',
                                                border: selectedValue && !isAnswered ? '1px solid var(--pri)' : '1px solid var(--stroke)',
                                                borderRadius: 12,
                                                color: isAnswered
                                                    ? (isThisCorrect ? 'var(--ok)' : 'var(--bad)')
                                                    : selectedValue ? 'var(--text-0)' : 'var(--text-2)',
                                                fontSize: '0.95rem',
                                                fontWeight: selectedValue ? 500 : 400,
                                                cursor: isAnswered ? 'default' : 'pointer',
                                                appearance: 'none',
                                                WebkitAppearance: 'none',
                                                outline: 'none'
                                            }}
                                        >
                                            <option value="">Оберіть відповідь...</option>
                                            {currentQuestion.pairs.map((p, i) => (
                                                <option key={i} value={p.right}>{p.right}</option>
                                            ))}
                                        </select>
                                        {/* Chevron */}
                                        <div style={{
                                            position: 'absolute',
                                            right: 12,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            pointerEvents: 'none',
                                            color: 'var(--text-2)'
                                        }}>
                                            <ChevronRight size={18} style={{ transform: 'rotate(90deg)' }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {!isAnswered && (
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
                        {isAnswered && !isCurrentCorrect && (
                            <div style={{ marginTop: 12, fontSize: '0.9rem', color: '#E94B5A' }}>
                                Є помилки у з'єднаннях. Перевірте правильні відповіді.
                            </div>
                        )}
                    </div>
                )}

                {/* Explanation - Show only after answering */}
                {isAnswered && currentQuestion.explanation && (
                    <div style={{
                        marginTop: 24,
                        padding: 16,
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 12,
                        borderLeft: '4px solid #F26A1B',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)'
                    }}>
                        <strong>Пояснення:</strong> {currentQuestion.explanation}
                    </div>
                )}
            </div>

            {/* Next button */}
            {isAnswered && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '16px 20px',
                    background: 'var(--bg-primary)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 100
                }}>
                    <button
                        onClick={handleNext}
                        style={{
                            width: '100%',
                            padding: '18px',
                            background: isCurrentCorrect ? '#2ECC71' : '#E94B5A', // Status color for button
                            border: 'none',
                            borderRadius: 16,
                            color: '#0d0d0d', // Dark text for contrast
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 12,
                            boxShadow: isCurrentCorrect ? '0 4px 12px rgba(46, 204, 113, 0.3)' : '0 4px 12px rgba(233, 75, 90, 0.3)'
                        }}
                    >
                        {currentIndex < questions.length - 1 ? 'ДАЛІ' : 'ЗАВЕРШИТИ'}
                        <ChevronRight size={24} strokeWidth={3} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestSession;
