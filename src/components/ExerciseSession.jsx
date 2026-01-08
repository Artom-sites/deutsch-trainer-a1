// src/components/ExerciseSession.jsx
// Сесія вправ
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { ArrowLeft, Trophy, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const ExerciseSession = () => {
    const activeExercises = useStore(state => state.activeExercises);
    const goBack = useStore(state => state.goBack);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [completed, setCompleted] = useState(false);

    if (!activeExercises || activeExercises.length === 0) {
        return (
            <div className="screen" style={{ textAlign: 'center', paddingTop: '20vh' }}>
                <div style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)' }}>
                    Немає вправ для цього розділу
                </div>
                <button className="btn btn-primary" onClick={goBack}>
                    Назад
                </button>
            </div>
        );
    }

    const currentExercise = activeExercises[currentIndex];
    const isLastExercise = currentIndex >= activeExercises.length - 1;

    const handleSelect = (optionIndex) => {
        if (showResult) return;
        setSelectedAnswer(optionIndex);
    };

    const handleCheck = () => {
        if (selectedAnswer === null) return;
        setShowResult(true);
        if (selectedAnswer === currentExercise.correct) {
            setCorrectCount(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (isLastExercise) {
            setCompleted(true);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    // Completion screen
    if (completed) {
        const percent = Math.round((correctCount / activeExercises.length) * 100);

        return (
            <div className="screen" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 150px)'
            }}>
                <div style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: percent >= 70 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-lg)'
                }}>
                    <Trophy size={48} color={percent >= 70 ? 'var(--color-success)' : 'var(--color-warning)'} />
                </div>

                <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>
                    {percent >= 70 ? 'Gut gemacht! 🎉' : 'Weiter üben! 💪'}
                </h2>

                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: percent >= 70 ? 'var(--color-success)' : 'var(--color-warning)',
                    marginBottom: 'var(--space-sm)'
                }}>
                    {correctCount} / {activeExercises.length}
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                    {percent}% правильних відповідей
                </p>

                <button className="btn btn-primary" onClick={goBack} style={{ width: '100%', maxWidth: 300 }}>
                    Повернутися
                </button>
            </div>
        );
    }

    const isCorrect = selectedAnswer === currentExercise.correct;

    return (
        <div className="screen">
            {/* Header */}
            <div className="back-header">
                <button className="back-btn" onClick={goBack}>
                    <ArrowLeft size={20} />
                </button>
                <div style={{ flex: 1 }}>
                    <div className="progress-bar">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${((currentIndex + 1) / activeExercises.length) * 100}%` }}
                        />
                    </div>
                </div>
                <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginLeft: 'var(--space-md)',
                    whiteSpace: 'nowrap'
                }}>
                    {currentIndex + 1} / {activeExercises.length}
                </div>
            </div>

            {/* Question */}
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    fontFamily: 'monospace'
                }}>
                    {currentExercise.question}
                </div>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                {currentExercise.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isAnswer = index === currentExercise.correct;

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
            {showResult && currentExercise.explanation && (
                <div className="card fade-in" style={{
                    marginBottom: 'var(--space-lg)',
                    padding: 'var(--space-md)',
                    background: isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    borderLeft: `4px solid ${isCorrect ? 'var(--color-success)' : 'var(--color-warning)'}`
                }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {currentExercise.explanation}
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
                    {isLastExercise ? 'Завершити' : 'Далі'}
                    <ArrowRight size={18} />
                </button>
            )}
        </div>
    );
};

export default ExerciseSession;
