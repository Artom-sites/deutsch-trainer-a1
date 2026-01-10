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
            <div className="back-header">
                <button className="back-btn" onClick={goBack}>
                    <ArrowLeft size={20} />
                </button>
                <div style={{ flex: 1 }}>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>
                <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginLeft: 'var(--space-md)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                }}>
                    <Eye size={16} color="#7A7D8A" />
                    <span>{currentIndex + 1}/{flashcardWords.length}</span>
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
