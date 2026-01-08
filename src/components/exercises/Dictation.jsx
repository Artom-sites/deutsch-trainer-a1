// src/components/exercises/Dictation.jsx
// Вправа: Диктант (слухай і пиши)
import React, { useState } from 'react';
import { speakSentence } from '../../utils/speech';
import { Volume2, HelpCircle } from 'lucide-react';

const DictationExercise = ({ exercise, onComplete }) => {
    // exercise.text = "Guten Morgen"

    const [input, setInput] = useState('');
    const [status, setStatus] = useState('idle');
    const [hint, setHint] = useState('');

    const handlePlay = () => {
        speakSentence(exercise.text);
    };

    const checkAnswer = () => {
        // Remove punctuation and extra spaces for checking
        const cleanInput = input.trim().toLowerCase().replace(/[.,!?]/g, '');
        const cleanTarget = exercise.text.trim().toLowerCase().replace(/[.,!?]/g, '');

        if (cleanInput === cleanTarget) {
            setStatus('success');
            // Play one last time
            speakSentence("Sehr gut! " + exercise.text);
            setTimeout(() => onComplete(true), 1500);
        } else {
            setStatus('error');
        }
    };

    const showHint = () => {
        // Show first letter or next letter
        if (!hint) {
            setHint(exercise.text[0]);
        } else if (hint.length < exercise.text.length) {
            setHint(exercise.text.slice(0, hint.length + 1));
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: 'var(--space-md)' }}>
            <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                Напишіть те, що почуєте:
            </h3>

            {/* Play Button */}
            <button
                onClick={handlePlay}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-xl)',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                }}
            >
                <Volume2 size={40} color="white" />
            </button>

            {/* Input */}
            <div style={{ marginBottom: 'var(--space-md)' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setStatus('idle');
                    }}
                    placeholder="Введіть текст..."
                    style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '1.1rem',
                        borderRadius: 'var(--radius-md)',
                        border: `2px solid ${status === 'error' ? 'var(--color-error)' :
                                status === 'success' ? 'var(--color-success)' :
                                    'var(--border-color)'
                            }`,
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        textAlign: 'center',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Hint Display */}
            {hint && (
                <div style={{ marginBottom: 'var(--space-md)', color: 'var(--text-muted)', letterSpacing: 2 }}>
                    {hint}...
                </div>
            )}

            {/* Controls */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                <button
                    onClick={showHint}
                    style={{
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        background: 'transparent',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                    title="Підказка"
                >
                    <HelpCircle size={20} />
                </button>

                <button
                    className="btn btn-primary"
                    onClick={checkAnswer}
                    disabled={!input || status === 'success'}
                    style={{ flex: 1, maxWidth: 200 }}
                >
                    Перевірити
                </button>
            </div>
        </div>
    );
};

export default DictationExercise;
