// src/components/exercises/MultipleChoice.jsx
// Вправа: Вибір з варіантів
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const MultipleChoiceExercise = ({ exercise, onComplete }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const isCorrect = selectedAnswer === exercise.correct;

    const handleSelect = (index) => {
        if (showResult) return;
        setSelectedAnswer(index);
    };

    const handleCheck = () => {
        if (selectedAnswer === null) return;
        setShowResult(true);
    };

    const handleNext = () => {
        onComplete(isCorrect);
    };

    return (
        <div style={{ padding: 'var(--space-md)' }}>
            {/* Question */}
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    fontFamily: 'monospace'
                }}>
                    {exercise.question}
                </div>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                {exercise.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isAnswer = index === exercise.correct;

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
                            key={index}
                            onClick={() => handleSelect(index)}
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
                                gap: 'var(--space-sm)',
                                minHeight: 56
                            }}
                        >
                            {showResult && isAnswer && <CheckCircle size={18} color="var(--color-success)" />}
                            {showResult && isSelected && !isAnswer && <XCircle size={18} color="var(--color-error)" />}
                            {option}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {showResult && exercise.explanation && (
                <div className="card fade-in" style={{
                    marginBottom: 'var(--space-lg)',
                    padding: 'var(--space-md)',
                    background: isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    borderLeft: `4px solid ${isCorrect ? 'var(--color-success)' : 'var(--color-warning)'}`
                }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {exercise.explanation}
                    </div>
                </div>
            )}

            {/* Action Button */}
            {!showResult ? (
                <button
                    className="btn btn-primary"
                    onClick={handleCheck}
                    disabled={selectedAnswer === null}
                    style={{ opacity: selectedAnswer !== null ? 1 : 0.5 }}
                >
                    Перевірити
                </button>
            ) : (
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                    Далі
                    <ArrowRight size={18} />
                </button>
            )}
        </div>
    );
};

export default MultipleChoiceExercise;
