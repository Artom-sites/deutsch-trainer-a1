// src/components/Flashcard.jsx
// Preview-only Flashcard - Swipe navigation on mobile, buttons on desktop
import React, { useState, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { speakWord } from '../utils/speech';

const Flashcard = ({ word, onNext, onPrev, canGoPrev }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Swipe state
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const [swipeOffset, setSwipeOffset] = useState(0);

    const minSwipeDistance = 50;

    // Reset when word changes
    useEffect(() => {
        setIsFlipped(false);
        setSwipeOffset(0);
    }, [word.id]);

    // Get color style based on article
    const getGenderColor = (article) => {
        switch (article) {
            case 'der': return '#4A90E2';
            case 'die': return '#E94B5A';
            case 'das': return '#2ECC71';
            default: return '#E5E7EB';
        }
    };

    const genderColor = getGenderColor(word.article);

    // Handle TTS
    const handleSpeak = (e) => {
        e.stopPropagation();
        setIsSpeaking(true);
        speakWord(word.word, word.article)
            .finally(() => setIsSpeaking(false));
    };

    // Handle card flip (infinite toggle)
    const handleFlip = () => {
        if (!isSwiping) {
            setIsFlipped(!isFlipped);
        }
    };

    // Touch handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsSwiping(false);
    };

    const onTouchMove = (e) => {
        const currentTouch = e.targetTouches[0].clientX;
        setTouchEnd(currentTouch);

        if (touchStart) {
            const offset = currentTouch - touchStart;
            // Limit offset for visual feedback
            setSwipeOffset(Math.max(-100, Math.min(100, offset)));
            if (Math.abs(offset) > 10) {
                setIsSwiping(true);
            }
        }
    };

    const onTouchEnd = () => {
        setSwipeOffset(0);

        if (!touchStart || !touchEnd) {
            setIsSwiping(false);
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            onNext();
        } else if (isRightSwipe && canGoPrev) {
            onPrev();
        }

        setIsSwiping(false);
        setTouchStart(null);
        setTouchEnd(null);
    };

    // Check if plural is valid
    const hasValidPlural = word.plural &&
        word.plural.trim() !== '' &&
        !word.plural.toLowerCase().includes('sg') &&
        word.plural !== '-';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 180px)',
            padding: 'var(--space-md)',
            gap: 'var(--space-md)'
        }}>
            {/* The Card - Click to flip, swipe to navigate */}
            <div
                onClick={handleFlip}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(40, 40, 40, 0.6) 0%, rgba(20, 20, 20, 0.8) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 32,
                    padding: 'var(--space-lg)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    transition: isSwiping ? 'none' : 'transform 0.2s, box-shadow 0.2s',
                    transform: `translateX(${swipeOffset}px)`,
                    userSelect: 'none',
                    overflow: 'hidden'
                }}
            >
                {!isFlipped ? (
                    // FRONT: Ukrainian translation
                    <div className="fade-in" style={{ width: '100%', padding: 'var(--space-md)' }}>
                        <div style={{
                            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: 'var(--space-md)',
                            wordBreak: 'break-word',
                            lineHeight: 1.3
                        }}>
                            {word.translation}
                        </div>
                    </div>
                ) : (
                    // BACK: German word with article, color, plural
                    <div className="fade-in" style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Article */}
                        {word.article && (
                            <div style={{
                                color: genderColor,
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                marginBottom: 4,
                                opacity: 0.8
                            }}>
                                {word.article}
                            </div>
                        )}

                        {/* Word - Colored by gender + inline plural */}
                        <div style={{
                            color: genderColor,
                            fontSize: 'clamp(1.8rem, 7vw, 3rem)',
                            fontWeight: 800,
                            wordBreak: 'break-word',
                            lineHeight: 1.2,
                            marginBottom: 'var(--space-sm)'
                        }}>
                            {word.word}
                            {hasValidPlural && (
                                <span style={{
                                    fontWeight: 500,
                                    opacity: 0.6,
                                    fontSize: '0.6em'
                                }}>, {word.plural}</span>
                            )}
                        </div>

                        {/* Audio button */}
                        <button
                            onClick={handleSpeak}
                            style={{
                                marginTop: 'var(--space-lg)',
                                background: isSpeaking ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '50%',
                                width: 56,
                                height: 56,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Volume2
                                size={28}
                                color={isSpeaking ? 'black' : 'var(--text-primary)'}
                            />
                        </button>
                    </div>
                )}
            </div>

            {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
            <div className="flashcard-nav-desktop" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12
            }}>
                {/* Previous */}
                <button
                    onClick={onPrev}
                    disabled={!canGoPrev}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '16px',
                        background: canGoPrev ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 16,
                        cursor: canGoPrev ? 'pointer' : 'default',
                        transition: 'all 0.2s',
                        opacity: canGoPrev ? 1 : 0.4
                    }}
                >
                    <ChevronLeft size={20} color="#E5E7EB" />
                    <span style={{ color: '#E5E7EB', fontWeight: 600, fontSize: '1rem' }}>Назад</span>
                </button>

                {/* Next */}
                <button
                    onClick={onNext}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '16px',
                        background: 'rgba(242, 106, 27, 0.15)',
                        border: '1px solid rgba(242, 106, 27, 0.3)',
                        borderRadius: 16,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    <span style={{ color: '#F26A1B', fontWeight: 600, fontSize: '1rem' }}>Далі</span>
                    <ChevronRight size={20} color="#F26A1B" />
                </button>
            </div>

            {/* CSS to hide buttons on mobile */}
            <style>{`
                @media (max-width: 768px) {
                    .flashcard-nav-desktop {
                        display: none !important;
                    }
                }
                @media (min-width: 769px) {
                    .swipe-hint {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Flashcard;

