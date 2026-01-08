// src/components/Flashcard.jsx
// Картка як на прикладі: der Schuh, -e
import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

const Flashcard = ({ word, onResult }) => {
    const [revealed, setRevealed] = useState(false);

    // Reset when word changes
    useEffect(() => {
        setRevealed(false);
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

    return (
        <div className="flashcard-container">
            {/* The Card */}
            <div
                className={`flashcard ${revealed ? 'revealed' : ''}`}
                onClick={() => !revealed && setRevealed(true)}
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
                            Натисніть, щоб побачити
                        </div>
                    </div>
                ) : (
                    // ==========================================
                    // BACK: German word (der Schuh, -e)
                    // ==========================================
                    <div className="fade-in" style={{ textAlign: 'center' }}>
                        {/* Main display: der Schuh, -e */}
                        <div className={`flashcard-back-word ${colorClass}`}>
                            {word.article && <span style={{ opacity: 0.8, marginRight: 8 }}>{word.article}</span>}
                            <span style={{ fontWeight: 800 }}>{word.word}</span>
                            {word.plural && <span style={{ opacity: 0.6, marginLeft: 4 }}>, {word.plural}</span>}
                        </div>

                        {/* Audio icon placeholder */}
                        <div style={{ marginTop: 'var(--space-lg)', opacity: 0.5 }}>
                            <Volume2 size={28} />
                        </div>
                    </div>
                )}
            </div>

            {/* Controls */}
            {!revealed ? (
                <button
                    className="btn btn-primary"
                    onClick={() => setRevealed(true)}
                    style={{ marginTop: 'var(--space-md)' }}
                >
                    Показати
                </button>
            ) : (
                <div className="rating-buttons">
                    <button
                        className="rating-btn rating-btn-fail"
                        onClick={() => onResult(0)}
                    >
                        <span>❌</span>
                        <span>Не знав</span>
                    </button>
                    <button
                        className="rating-btn rating-btn-hard"
                        onClick={() => onResult(3)}
                    >
                        <span>🤔</span>
                        <span>Важко</span>
                    </button>
                    <button
                        className="rating-btn rating-btn-good"
                        onClick={() => onResult(5)}
                    >
                        <span>✅</span>
                        <span>Знав</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Flashcard;
