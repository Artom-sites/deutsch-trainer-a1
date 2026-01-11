// src/components/FlashcardSession.jsx
// Preview session - no mastery tracking here
import React, { useState } from 'react';
import useStore from '../store/useStore';
import Flashcard from './Flashcard';
import { ArrowLeft, CheckCircle, Eye } from 'lucide-react';

const FlashcardSession = () => {
    const flashcardWords = useStore(state => state.flashcardWords);
    const goBack = useStore(state => state.goBack);

    // Local state for navigation (no longer using store's currentCardIndex for mastery)
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentWord = flashcardWords[currentIndex];
    const isComplete = currentIndex >= flashcardWords.length;
    const progress = flashcardWords.length > 0
        ? Math.round((currentIndex / flashcardWords.length) * 100)
        : 0;

    const handleNext = () => {
        if (currentIndex < flashcardWords.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
            {/* Header */}
            {/* Header */}
            <div style={{ padding: 'var(--space-md) var(--space-md) 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <button className="v-backBtn" onClick={goBack}>
                        <ArrowLeft size={20} color="#fff" />
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
                        <Eye size={16} color="var(--text-2)" />
                        <span>{currentIndex + 1} <span style={{ color: 'var(--text-2)' }}>/ {flashcardWords.length}</span></span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="progress-bar" style={{ marginBottom: 0 }}>
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Content */}
            {!isComplete && currentWord ? (
                <Flashcard
                    word={currentWord}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    canGoPrev={currentIndex > 0}
                />
            ) : (
                // Completion Screen
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 'var(--space-xl)'
                }}>
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-lg)'
                    }}>
                        <CheckCircle size={40} color="var(--color-success)" />
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>
                        Перегляд завершено! 👀
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                        Ви переглянули {flashcardWords.length} слів
                    </p>
                    <p style={{ color: '#F26A1B', fontSize: '0.9rem', marginBottom: 'var(--space-xl)' }}>
                        Для вивчення пройди "Noun Master" 💪
                    </p>

                    <button className="btn btn-primary" onClick={goBack}>
                        Повернутися
                    </button>
                </div>
            )}
        </div>
    );
};

export default FlashcardSession;
