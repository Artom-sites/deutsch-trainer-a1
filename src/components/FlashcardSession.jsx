// src/components/FlashcardSession.jsx
// Сесія карток
import React from 'react';
import useStore from '../store/useStore';
import Flashcard from './Flashcard';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FlashcardSession = () => {
    const flashcardWords = useStore(state => state.flashcardWords);
    const currentCardIndex = useStore(state => state.currentCardIndex);
    const nextCard = useStore(state => state.nextCard);
    const submitReview = useStore(state => state.submitReview);
    const userProgress = useStore(state => state.userProgress);
    const goBack = useStore(state => state.goBack);

    const currentWordRaw = flashcardWords[currentCardIndex];
    const currentWord = currentWordRaw ? {
        ...currentWordRaw,
        masteryStage: userProgress[currentWordRaw.id]?.masteryStage || 0
    } : null;
    const isComplete = currentCardIndex >= flashcardWords.length;
    const progress = flashcardWords.length > 0
        ? Math.round((currentCardIndex / flashcardWords.length) * 100)
        : 0;

    const handleResult = (quality) => {
        if (currentWord) {
            submitReview(currentWord.id, quality);
            nextCard();
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
                    gap: 8
                }}>
                    <div style={{ display: 'flex', gap: 2 }}>
                        {[0, 1, 2, 3, 4].slice(0, 4).map(i => {
                            const stage = currentWord?.masteryStage || 0;
                            return (
                                <div key={i} style={{
                                    width: 8,
                                    height: 4,
                                    borderRadius: 2,
                                    background: i < stage ? '#F26A1B' : 'rgba(255,255,255,0.1)'
                                }} />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            {!isComplete && currentWord ? (
                <Flashcard word={currentWord} onResult={handleResult} />
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
                        Fertig! 🎉
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                        Ви переглянули {flashcardWords.length} слів
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
