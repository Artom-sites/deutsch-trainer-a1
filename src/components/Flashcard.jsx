// src/components/Flashcard.jsx
// Картка з нескінченним перевертанням, кнопками "Знаю"/"Вчу", кольорами та множиною
import React, { useState, useEffect } from 'react';
import { Volume2, Check, X } from 'lucide-react';
import { speakWord } from '../utils/speech';

const Flashcard = ({ word, onResult }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Reset when word changes
    useEffect(() => {
        setIsFlipped(false);
    }, [word.id]);

    // Get color style based on article
    const getGenderColor = (article) => {
        switch (article) {
            case 'der': return '#3b82f6'; // Blue
            case 'die': return '#ec4899'; // Pink/Red
            case 'das': return '#10b981'; // Green
            default: return '#ffffff';
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
        setIsFlipped(!isFlipped);
    };

    // Handle result buttons
    const handleKnow = () => {
        onResult(5); // Good score
    };

    const handleLearn = () => {
        onResult(0); // Need to learn more
    };

    // Check if plural is valid (not empty, not just "Sg." or similar)
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
            {/* The Card - Click to flip */}
            <div
                onClick={handleFlip}
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
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    userSelect: 'none',
                    overflow: 'hidden'
                }}
            >
                {!isFlipped ? (
                    // ==========================================
                    // FRONT: Ukrainian translation
                    // ==========================================
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
                        <div style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            opacity: 0.6
                        }}>
                            Натисніть, щоб перевернути
                        </div>
                    </div>
                ) : (
                    // ==========================================
                    // BACK: German word with article, color, plural
                    // ==========================================
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

                        {/* Audio button - CENTERED */}
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

                        {/* Flip hint */}
                        <div style={{
                            marginTop: 'var(--space-md)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            opacity: 0.5
                        }}>
                            Натисніть, щоб перевернути
                        </div>
                    </div>
                )}
            </div>

            {/* Control Buttons - Always visible */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12
            }}>
                {/* Learn / Don't Know */}
                <button
                    onClick={handleLearn}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '16px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        borderRadius: 20,
                        color: '#fca5a5',
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    <X size={20} />
                    Вчу
                </button>

                {/* Know */}
                <button
                    onClick={handleKnow}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '16px',
                        background: 'rgba(34, 197, 94, 0.15)',
                        border: '1px solid rgba(34, 197, 94, 0.4)',
                        borderRadius: 20,
                        color: '#86efac',
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    <Check size={20} />
                    Знаю
                </button>
            </div>
        </div>
    );
};

export default Flashcard;
