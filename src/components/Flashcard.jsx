// src/components/Flashcard.jsx
// Preview-only Flashcard - Swipe navigation on mobile, buttons on desktop
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { speakWord } from '../utils/speech';

const Flashcard = ({ word, onNext, onPrev, canGoPrev, autoFlip = false, isAutoplay = false, speakEnabled = true, onToggleSpeak }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const controls = useAnimation();

    // Motion values for drag
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

    // Reset when word changes
    useEffect(() => {
        setIsFlipped(false);
        x.set(0);
    }, [word.id]);

    // Handle autoFlip from parent
    useEffect(() => {
        setIsFlipped(autoFlip);
    }, [autoFlip]);

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

    // Handle card flip
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleDragEnd = async (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -100 || velocity < -500) {
            // Swipe Left (Next)
            await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } });
            onNext();
            controls.set({ x: 0, opacity: 1 });
        } else if ((offset > 100 || velocity > 500) && canGoPrev) {
            // Swipe Right (Prev)
            await controls.start({ x: 500, opacity: 0, transition: { duration: 0.2 } });
            onPrev();
            controls.set({ x: 0, opacity: 1 });
        } else {
            // Return to center
            controls.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } });
        }
    };

    const hasValidPlural = word.plural &&
        word.plural.trim() !== '' &&
        !word.plural.toLowerCase().includes('sg') &&
        word.plural !== '-';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            height: '100%',
            maxHeight: 500,
            padding: '0 var(--space-md) var(--space-md)',
            gap: 'var(--space-md)',
            perspective: 1000,
            overflow: 'hidden', // Contain swipe
            margin: 'auto 0'
        }}>
            {/* Draggable Card Area */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxHeight: 400 }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{
                        x,
                        rotate,
                        opacity,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        cursor: 'grab',
                        zIndex: 1
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    <motion.div
                        onClick={handleFlip}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* FRONT */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            borderRadius: 28,
                            background: 'rgba(20, 20, 24, 0.85)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 24
                        }}>
                            <div style={{
                                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                                fontWeight: 700,
                                color: 'var(--text-0)',
                                textAlign: 'center',
                                lineHeight: 1.3
                            }}>
                                {word.translation}
                            </div>
                            <div style={{
                                marginTop: 24,
                                fontSize: '0.9rem',
                                color: 'var(--text-2)',
                                opacity: 0.6
                            }}>
                                Торкнись для перевороту
                            </div>
                        </div>

                        {/* BACK */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            borderRadius: 28,
                            background: 'rgba(20, 20, 24, 0.85)',
                            border: '1px solid rgba(255,255,255,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 24
                        }}>
                            <div style={{
                                fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
                                fontWeight: 800,
                                textAlign: 'center',
                                lineHeight: 1.2,
                                marginBottom: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 4
                            }}>
                                <span>
                                    {word.article && (
                                        <span style={{ color: genderColor, marginRight: 8 }}>{word.article}</span>
                                    )}
                                    <span style={{
                                        color: genderColor,
                                        textShadow: `0 0 30px ${genderColor}40`
                                    }}>
                                        {word.word.replace(/^(der|die|das)\s+/i, '')}
                                    </span>
                                    {hasValidPlural && (
                                        <><span style={{ color: genderColor }}>, </span><span style={{ fontWeight: 500, color: '#fbbf24' }}>{word.plural}</span></>
                                    )}
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isAutoplay && onToggleSpeak) {
                                        onToggleSpeak(!speakEnabled);
                                    } else {
                                        handleSpeak(e);
                                    }
                                }}
                                style={{
                                    marginTop: 40,
                                    background: isSpeaking ? genderColor : (isAutoplay && !speakEnabled ? 'rgba(255, 107, 53, 0.2)' : 'rgba(255, 255, 255, 0.05)'),
                                    border: `1px solid ${isSpeaking ? genderColor : (isAutoplay && !speakEnabled ? '#F26A1B' : 'rgba(255, 255, 255, 0.1)')}`,
                                    borderRadius: '50%',
                                    width: 64,
                                    height: 64,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: isSpeaking ? `0 0 30px ${genderColor}60` : 'none'
                                }}
                            >
                                {isAutoplay && !speakEnabled ? (
                                    <VolumeX size={30} color="#F26A1B" />
                                ) : (
                                    <Volume2
                                        size={30}
                                        color={isSpeaking ? '#000' : 'var(--text-1)'}
                                    />
                                )}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Navigation Buttons - Only visual hint on mobile mainly */}
            <div className="flashcard-nav-desktop" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12
            }}>
                <button
                    onClick={onPrev}
                    disabled={!canGoPrev}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        padding: '16px', borderRadius: 16,
                        background: canGoPrev ? 'rgba(255,255,255,0.05)' : 'transparent',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: canGoPrev ? 'var(--text-0)' : 'var(--text-disabled)',
                        cursor: canGoPrev ? 'pointer' : 'default',
                        opacity: canGoPrev ? 1 : 0.5
                    }}
                >
                    <ChevronLeft size={20} />
                    Назад
                </button>

                <button
                    onClick={onNext}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        padding: '16px', borderRadius: 16,
                        background: 'rgba(255,107,53,0.15)',
                        border: '1px solid rgba(255,107,53,0.3)',
                        color: 'var(--orange)',
                        cursor: 'pointer'
                    }}
                >
                    Далі
                    <ChevronRight size={20} />
                </button>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .flashcard-nav-desktop {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Flashcard;

