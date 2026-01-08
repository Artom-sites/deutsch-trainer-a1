// src/components/Flashcard.jsx
// Картка як на прикладі: der Schuh, -e
import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { speakWord } from '../utils/speech';

const Flashcard = ({ word, onResult }) => {
    const [revealed, setRevealed] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Swipe State
    const [touchStart, setTouchStart] = useState(null);
    const [touchY, setTouchY] = useState(null);
    const [swipeResult, setSwipeResult] = useState(null); // 'know' (up) or 'fail' (down)

    // Reset when word changes
    useEffect(() => {
        setRevealed(false);
        setTouchStart(null);
        setTouchY(null);
        setSwipeResult(null);
    }, [word.id]);

    // Get color class based on article
    const getColorClass = (article) => {
        switch (article) {
            case 'der': return 'text-masculine';
            case 'die': return 'text-feminine';
            case 'das': return 'text-neuter';
            default: return '';
        }
    };

    const colorClass = getColorClass(word.article);

    // Handle TTS
    const handleSpeak = (e) => {
        e.stopPropagation(); // Prevent card flip
        setIsSpeaking(true);
        speakWord(word.word, word.article)
            .finally(() => setIsSpeaking(false));
    };

    // Touch Handlers
    const handleTouchStart = (e) => {
        if (!revealed) return;
        setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e) => {
        if (!revealed || touchStart === null) return;
        const currentY = e.targetTouches[0].clientY;
        setTouchY(currentY);

        const deltaY = currentY - touchStart;

        // Visual feedback threshold
        if (deltaY < -50) {
            setSwipeResult('know');
        } else if (deltaY > 50) {
            setSwipeResult('fail');
        } else {
            setSwipeResult(null);
        }
    };

    const handleTouchEnd = () => {
        if (!revealed || touchStart === null || touchY === null) return;

        const deltaY = touchY - touchStart;

        if (deltaY < -100) {
            // Swipe Up - Know
            onResult(5);
        } else if (deltaY > 100) {
            // Swipe Down - Fail
            onResult(0);
        }

        setTouchStart(null);
        setTouchY(null);
        setSwipeResult(null);
    };

    const deltaY = (touchStart !== null && touchY !== null) ? touchY - touchStart : 0;

    // Background color based on swipe
    let cardBg = 'rgba(30, 30, 30, 0.6)'; // default glass
    let activeBorder = '1px solid rgba(255, 255, 255, 0.1)';

    if (swipeResult === 'know') {
        cardBg = 'rgba(34, 197, 94, 0.2)'; // Green
        activeBorder = '1px solid var(--color-success)';
    } else if (swipeResult === 'fail') {
        cardBg = 'rgba(239, 68, 68, 0.2)'; // Red
        activeBorder = '1px solid var(--color-error)';
    }

    return (
        <div className="flashcard-container" style={{ perspective: 1000, position: 'relative', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            {/* Swipe Indicators */}
            {revealed && (
                <>
                    <div className={`fade-in`} style={{
                        position: 'absolute', top: -40, left: 0, right: 0,
                        textAlign: 'center', color: swipeResult === 'know' ? 'var(--color-success)' : 'var(--text-secondary)',
                        fontWeight: swipeResult === 'know' ? 800 : 400,
                        opacity: swipeResult === 'know' ? 1 : 0.5,
                        transition: 'all 0.2s'
                    }}>
                        ⬆️ Знаю
                    </div>
                    <div className={`fade-in`} style={{
                        position: 'absolute', bottom: -40, left: 0, right: 0,
                        textAlign: 'center', color: swipeResult === 'fail' ? 'var(--color-error)' : 'var(--text-secondary)',
                        fontWeight: swipeResult === 'fail' ? 800 : 400,
                        opacity: swipeResult === 'fail' ? 1 : 0.5,
                        transition: 'all 0.2s'
                    }}>
                        ⬇️ Не знаю
                    </div>
                </>
            )}

            {/* The Card */}
            <div
                className={`flashcard ${revealed ? 'revealed' : ''}`}
                onClick={() => !revealed && setRevealed(true)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    transform: revealed ? `translateY(${deltaY}px) rotateX(0deg)` : 'rotateX(0deg)',
                    background: revealed ? cardBg : 'rgba(30, 30, 30, 0.6)',
                    borderColor: revealed ? activeBorder.split(' ')[2] : 'rgba(255, 255, 255, 0.1)',
                    border: revealed ? activeBorder : '1px solid rgba(255, 255, 255, 0.1)',
                    transition: touchStart ? 'none' : 'transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1), background 0.3s',
                    cursor: revealed ? 'grab' : 'pointer'
                }}
            >
                {!revealed ? (
                    // ==========================================
                    // FRONT: Ukrainian translation
                    // ==========================================
                    <div className="fade-in" style={{ textAlign: 'center' }}>
                        <div className="flashcard-front">
                            {word.translation}
                        </div>
                        <div className="flashcard-hint">
                            Натисніть, щоб відкрити
                        </div>
                    </div>
                ) : (
                    // ==========================================
                    // BACK: German word
                    // ==========================================
                    <div className="fade-in" style={{ textAlign: 'center', pointerEvents: 'none' }}>
                        {/* Wrapper for PointerEvents to allow button click but pass swipe */}
                        <div className={`flashcard-back-word ${colorClass}`}>
                            {word.article && <span style={{ marginRight: 8 }}>{word.article}</span>}
                            <span style={{ fontWeight: 800 }}>{word.word}</span>
                            {word.plural && <span style={{ opacity: 0.6, marginLeft: 4 }}>, {word.plural}</span>}
                        </div>

                        {/* Audio button - pointerEvents: auto needed */}
                        <div style={{ pointerEvents: 'auto', display: 'inline-block' }}>
                            <button
                                onClick={handleSpeak}
                                onTouchStart={(e) => e.stopPropagation()}
                                style={{
                                    marginTop: 'var(--space-lg)',
                                    background: isSpeaking ? 'var(--color-accent)' : 'var(--bg-surface)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                }}
                            >
                                <Volume2
                                    size={24}
                                    color={isSpeaking ? 'white' : 'var(--text-secondary)'}
                                />
                            </button>
                        </div>

                        <div style={{ marginTop: 'var(--space-md)', fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7 }}>
                            Свайп вгору — знаю, вниз — вчу
                        </div>
                    </div>
                )}
            </div>

            {/* Controls - ONLY show button when NOT revealed */}
            {!revealed && (
                <button
                    className="btn btn-primary"
                    onClick={() => setRevealed(true)}
                    style={{ marginTop: 'var(--space-md)', width: 'auto', padding: '12px 32px' }}
                >
                    Показати
                </button>
            )}
        </div>
    );
};

export default Flashcard;

