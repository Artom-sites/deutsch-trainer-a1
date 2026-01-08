// src/components/GrammarExercise.jsx
// Вправа на граматику (Fill in the blank)
import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const GrammarExercise = ({ exercises, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    const currentExercise = exercises[currentIndex];
    const isLastExercise = currentIndex >= exercises.length - 1;
    const isComplete = currentIndex >= exercises.length;

    const handleSelect = (option) => {
        if (showResult) return;
        setSelectedAnswer(option);
    };

    const handleCheck = () => {
        if (!selectedAnswer) return;
        setShowResult(true);
        if (selectedAnswer === currentExercise.answer) {
            setCorrectCount(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (isLastExercise) {
            onComplete({ correct: correctCount + (selectedAnswer === currentExercise.answer ? 1 : 0), total: exercises.length });
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    if (isComplete) return null;

    const isCorrect = selectedAnswer === currentExercise.answer;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Progress */}
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Übung {currentIndex + 1} / {exercises.length}
            </div>

            {/* Question */}
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
                <div style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.6,
                    fontFamily: 'monospace'
                }}>
                    {currentExercise.question.split('___').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: 80,
                                    borderBottom: '2px solid var(--color-accent)',
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: showResult
                                        ? (isCorrect ? 'var(--color-success)' : 'var(--color-error)')
                                        : 'var(--color-accent)',
                                    fontWeight: 700
                                }}>
                                    {showResult ? currentExercise.answer : (selectedAnswer || '?')}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                {currentExercise.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isAnswer = option === currentExercise.answer;

                    let bgColor = 'var(--bg-card)';
                    let borderColor = 'transparent';

                    if (showResult) {
                        if (isAnswer) {
                            bgColor = 'rgba(34, 197, 94, 0.2)';
                            borderColor = 'var(--color-success)';
                        } else if (isSelected && !isAnswer) {
                            bgColor = 'rgba(239, 68, 68, 0.2)';
                            borderColor = 'var(--color-error)';
                        }
                    } else if (isSelected) {
                        bgColor = 'rgba(139, 92, 246, 0.2)';
                        borderColor = 'var(--color-accent)';
                    }

                    return (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            disabled={showResult}
                            style={{
                                padding: 'var(--space-md)',
                                background: bgColor,
                                border: `2px solid ${borderColor}`,
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: 500,
                                cursor: showResult ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--space-sm)'
                            }}
                        >
                            {showResult && isAnswer && <CheckCircle size={18} color="var(--color-success)" />}
                            {showResult && isSelected && !isAnswer && <XCircle size={18} color="var(--color-error)" />}
                            {option}
                        </button>
                    );
                })}
            </div>

            {/* Action Button */}
            {!showResult ? (
                <button
                    className="btn btn-primary"
                    onClick={handleCheck}
                    disabled={!selectedAnswer}
                    style={{ opacity: selectedAnswer ? 1 : 0.5 }}
                >
                    Перевірити
                </button>
            ) : (
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                    {isLastExercise ? 'Завершити' : 'Далі'}
                    <ArrowRight size={18} />
                </button>
            )}
        </div>
    );
};

export default GrammarExercise;
