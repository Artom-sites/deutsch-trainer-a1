// src/components/ExerciseSession.jsx
// Сесія вправ
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { ArrowLeft, Trophy, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import exerciseRegistry from './exercises';

const ExerciseSession = () => {
    const activeExercises = useStore(state => state.activeExercises);
    const goBack = useStore(state => state.goBack);

    const [currentIndex, setCurrentIndex] = useState(0);
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

    const addMistake = useStore(state => state.addMistake);

    const handleExerciseComplete = (isCorrect) => {
        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
        } else {
            // Record mistake
            addMistake(currentExercise.id);
        }

        // Wait a bit before next question
        setTimeout(() => {
            if (currentIndex >= activeExercises.length - 1) {
                setCompleted(true);
            } else {
                setCurrentIndex(prev => prev + 1);
            }
        }, isCorrect ? 500 : 1500);
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

    // Get component for current exercise type
    const ExerciseComponent = exerciseRegistry[currentExercise.type] || exerciseRegistry['multiple-choice'];

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

            {/* Exercise Component */}
            <div className="fade-in" key={currentExercise.id}>
                <ExerciseComponent
                    exercise={currentExercise}
                    onComplete={handleExerciseComplete}
                />
            </div>
        </div>
    );
};

export default ExerciseSession;
