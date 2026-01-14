// src/components/FlashcardSession.jsx
// Preview session with Autoplay mode
import React, { useState, useEffect, useRef } from 'react';
import useStore from '../store/useStore';
import Flashcard from './Flashcard';
import { ArrowLeft, CheckCircle, Eye, Play, Pause, Settings } from 'lucide-react';
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
    const autoplayTimerRef = useRef(null);

    const currentWord = flashcardWords[currentIndex];
    const isComplete = currentIndex >= flashcardWords.length;
    const progress = flashcardWords.length > 0
        ? Math.round((currentIndex / flashcardWords.length) * 100)
        : 0;

    // Autoplay logic
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
            // Show back briefly, then speak
            autoplayTimerRef.current = setTimeout(() => {
                setAutoplayPhase('speaking');
                speakWord(currentWord.word, currentWord.article).then(() => {
                    // After speaking, wait a bit and go to next
                    setTimeout(() => {
                        handleNext();
                        setAutoplayPhase('front');
                    }, 500);
                });
            }, 800); // show back for 0.8s before speaking
        }

        return () => {
            if (autoplayTimerRef.current) {
                clearTimeout(autoplayTimerRef.current);
            }
        };
    }, [isAutoplay, autoplayPhase, currentIndex, currentWord, isComplete, autoplaySpeed]);

    // Reset autoplay phase when word changes
    useEffect(() => {
        if (isAutoplay) {
            setAutoplayPhase('front');
        }
    }, [currentIndex]);

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

    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
        if (!isAutoplay) {
            setAutoplayPhase('front');
        }
    };

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
            {/* Header Row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 0 16px 0'
            }}>
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
