import React, { useState } from 'react';
import { words } from '../data/words';
import { Volume2, X } from 'lucide-react';
import { speakSentence } from '../utils/speech';

const InteractiveText = ({ text }) => {
    const [selectedWord, setSelectedWord] = useState(null);

    // Split text into lines, then words, preserving basic structure
    // This is a naive split; for production might need better tokenization
    const lines = text.split('\n');

    const handleWordClick = (rawWord) => {
        // Remove punctuation for lookup
        const cleanWord = rawWord.replace(/[.,!?;:()"]/g, '');
        if (!cleanWord) return;

        // Find word in dictionary (case-insensitive search)
        const found = words.find(w => w.word.toLowerCase() === cleanWord.toLowerCase());

        if (found) {
            setSelectedWord(found);
            speakSentence(found.word);
        } else {
            // If not found, show a generic "not found" or try to guess
            setSelectedWord({ word: cleanWord, translation: 'Переклад не знайдено', notFound: true });
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                {lines.map((line, lineIdx) => (
                    <div key={lineIdx} style={{ marginBottom: '0.5em', minHeight: '1em' }}>
                        {line.split(' ').map((wordPart, wordIdx) => {
                            // Separate punctuation attached to word if possible, or just click whole thing
                            return (
                                <span
                                    key={wordIdx}
                                    onClick={() => handleWordClick(wordPart)}
                                    style={{
                                        cursor: 'pointer',
                                        marginRight: '0.25em',
                                        display: 'inline-block',
                                        transition: 'color 0.2s',
                                        borderBottom: '1px dotted transparent'
                                    }}
                                    className="interactive-word"
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--color-accent)';
                                        e.target.style.borderBottomColor = 'var(--color-accent)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = 'inherit';
                                        e.target.style.borderBottomColor = 'transparent';
                                    }}
                                >
                                    {wordPart}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Translation Popup / Bottom Sheet */}
            {selectedWord && (
                <div className="fade-in" style={{
                    position: 'fixed',
                    bottom: 90, // Above bottom nav
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    maxWidth: 400,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--color-accent)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-md)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}>
                    <button
                        onClick={() => setSelectedWord(null)}
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={20} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                        <button
                            onClick={() => speakSentence(selectedWord.word)}
                            style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: 'var(--color-accent)',
                                border: 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <Volume2 size={20} color="black" />
                        </button>
                        <div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {selectedWord.word}
                                {selectedWord.article && (
                                    <span style={{
                                        fontSize: '0.9rem',
                                        marginLeft: 8,
                                        color: selectedWord.article === 'der' ? 'var(--color-masculine)' :
                                            selectedWord.article === 'die' ? 'var(--color-feminine)' :
                                                selectedWord.article === 'das' ? 'var(--color-neuter)' : 'var(--color-info)'
                                    }}>
                                        {selectedWord.article}
                                    </span>
                                )}
                            </div>
                            <div style={{ fontSize: '1rem', color: selectedWord.notFound ? 'var(--text-muted)' : 'var(--text-secondary)' }}>
                                <span style={{
                                    color: selectedWord.article === 'der' ? 'var(--color-masculine)' :
                                        selectedWord.article === 'die' ? 'var(--color-feminine)' :
                                            selectedWord.article === 'das' ? 'var(--color-neuter)' : 'var(--text-primary)'
                                }}>
                                    {selectedWord.translation}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteractiveText;
