// src/components/FlashcardSession.jsx
// Preview session with Autoplay mode
import React, { useState, useEffect, useRef } from 'react';
import useStore from '../store/useStore';
import Flashcard from './Flashcard';
import { ArrowLeft, CheckCircle, Eye, Play, Pause, Settings, SkipForward } from 'lucide-react';
import { speakWord } from '../utils/speech';

const FlashcardSession = () => {
    const flashcardWords = useStore(state => state.flashcardWords);
    const goBack = useStore(state => state.goBack);

    // Local state for navigation
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay state
    const [isAutoplay, setIsAutoplay] = useState(false);
    const [autoplaySpeed, setAutoplaySpeed] = useState(3); // seconds to show front
    const [showSpeedMenu, setShowSpeedMenu] = useState(false);
    const [autoplayPhase, setAutoplayPhase] = useState('front'); // 'front' | 'back' | 'speaking'
    const [speakEnabled, setSpeakEnabled] = useState(true); // Sound toggle
    const autoplayTimerRef = useRef(null);

    const currentWord = flashcardWords[currentIndex];
    const isComplete = currentIndex >= flashcardWords.length;
    const progress = flashcardWords.length > 0
        ? Math.round((currentIndex / flashcardWords.length) * 100)
        : 0;

    // Autoplay logic - separate timing for front (Ukrainian) and back (German)
    const backStudyTime = 4000; // 4 seconds to study German word after speaking

    useEffect(() => {
        if (!isAutoplay || isComplete || !currentWord) {
            if (autoplayTimerRef.current) {
                clearTimeout(autoplayTimerRef.current);
            }
            return;
        }

        if (autoplayPhase === 'front') {
            // Show front (Ukrainian) for X seconds, then flip
            autoplayTimerRef.current = setTimeout(() => {
                setAutoplayPhase('back');
            }, autoplaySpeed * 1000);
        } else if (autoplayPhase === 'back') {
            // Show back, optionally speak
            autoplayTimerRef.current = setTimeout(() => {
                if (speakEnabled) {
                    setAutoplayPhase('speaking');
                    speakWord(currentWord.word, currentWord.article).then(() => {
                        // After speaking, wait to study the word
                        autoplayTimerRef.current = setTimeout(() => {
                            handleNext();
                            setAutoplayPhase('front');
                        }, backStudyTime);
                    });
                } else {
                    // No speech - just wait slightly and advance (shorter delay)
                    setAutoplayPhase('speaking');
                    autoplayTimerRef.current = setTimeout(() => {
                        handleNext();
                        setAutoplayPhase('front');
                    }, 1500); // 1.5s delay when muted
                }
            }, 500); // brief pause before speaking
        }

        return () => {
            if (autoplayTimerRef.current) {
                clearTimeout(autoplayTimerRef.current);
            }
        };
    }, [isAutoplay, autoplayPhase, currentIndex, currentWord, isComplete, autoplaySpeed, speakEnabled]);

    // Reset autoplay phase when word changes
    useEffect(() => {
        if (isAutoplay) {
            setAutoplayPhase('front');
        }
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < flashcardWords.length) {
            setAutoplayPhase('front');
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setAutoplayPhase('front');
            setCurrentIndex(currentIndex - 1);
        }
    };

    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
        if (!isAutoplay) {
            setAutoplayPhase('front');
        }
    };

    return (
        <div className="screen" style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 80,
            overflow: 'hidden',
            background: 'var(--bg-0)',
            padding: '16px'
        }}>
            {/* Header Row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 0 16px 0'
            }}>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        onClick={goBack}
                        style={{
                            width: 40, height: 40, borderRadius: 12,
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', cursor: 'pointer'
                        }}
                    >
                        <ArrowLeft size={20} />
                    </button>

                    {/* Skip forward button */}
                    <button
                        onClick={() => {
                            setAutoplayPhase('front');
                            handleNext();
                        }}
                        disabled={currentIndex >= flashcardWords.length - 1}
                        style={{
                            width: 40, height: 40, borderRadius: 12,
                            background: currentIndex < flashcardWords.length - 1 ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.05)',
                            border: currentIndex < flashcardWords.length - 1 ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.08)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: currentIndex < flashcardWords.length - 1 ? '#a78bfa' : 'var(--text-2)',
                            cursor: currentIndex < flashcardWords.length - 1 ? 'pointer' : 'default'
                        }}
                    >
                        <SkipForward size={18} />
                    </button>
                </div>

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

                {/* Autoplay controls */}
                <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                            style={{
                                width: 40, height: 40, borderRadius: 12,
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--text-2)', cursor: 'pointer'
                            }}
                        >
                            <Settings size={18} />
                        </button>

                        {showSpeedMenu && (
                            <div style={{
                                position: 'absolute', top: '100%', right: 0,
                                marginTop: 8, background: '#252530',
                                borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                                zIndex: 10, padding: 8, minWidth: 120,
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <p style={{ margin: '0 0 8px', padding: '4px 8px', fontSize: '0.75rem', color: 'var(--text-2)' }}>
                                    Швидкість
                                </p>
                                {[2, 3, 5, 7].map(sec => (
                                    <button
                                        key={sec}
                                        onClick={() => { setAutoplaySpeed(sec); setShowSpeedMenu(false); }}
                                        style={{
                                            width: '100%', padding: '8px 12px', textAlign: 'left',
                                            background: autoplaySpeed === sec ? 'rgba(139,92,246,0.2)' : 'transparent',
                                            border: 'none', borderRadius: 8, color: 'white', cursor: 'pointer',
                                            marginBottom: 2
                                        }}
                                    >
                                        {sec} сек
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={toggleAutoplay}
                        style={{
                            width: 40, height: 40, borderRadius: 12,
                            background: isAutoplay ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.08)',
                            border: isAutoplay ? '1px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: isAutoplay ? '#a78bfa' : 'var(--text-2)', cursor: 'pointer'
                        }}
                    >
                        {isAutoplay ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar" style={{ marginBottom: 16 }}>
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* Autoplay indicator */}
            {isAutoplay && !isComplete && (
                <div style={{
                    textAlign: 'center', marginBottom: 8,
                    color: '#a78bfa', fontSize: '0.8rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                }}>
                    <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: '#a78bfa',
                        animation: 'pulse 1s infinite'
                    }} />
                    Автоплей ({autoplaySpeed}с)
                </div>
            )}

            {/* Content */}
            {!isComplete && currentWord ? (
                <Flashcard
                    word={currentWord}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    canGoPrev={currentIndex > 0}
                    autoFlip={isAutoplay && autoplayPhase !== 'front'}
                    isAutoplay={isAutoplay}
                    speakEnabled={speakEnabled}
                    onToggleSpeak={setSpeakEnabled}
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
                    <p style={{ color: '#a78bfa', fontSize: '0.9rem', marginBottom: 24 }}>
                        Готовий запам'ятати? 💪
                    </p>

                    <div style={{ display: 'flex', gap: 12, flexDirection: 'column', width: '100%', maxWidth: 280 }}>
                        <button
                            onClick={() => useStore.getState().setNounMasterWords(flashcardWords)}
                            style={{
                                padding: '14px 24px', borderRadius: 14,
                                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none', color: 'white',
                                fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                                boxShadow: '0 0 20px rgba(139,92,246,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                            }}
                        >
                            🎯 Noun Master
                        </button>

                        <button
                            onClick={goBack}
                            style={{
                                padding: '14px 24px', borderRadius: 14,
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'var(--text-1)',
                                fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer'
                            }}
                        >
                            Повернутися
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default FlashcardSession;
