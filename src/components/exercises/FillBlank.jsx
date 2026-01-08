// src/components/exercises/FillBlank.jsx
// Вправа: Заповни пропуск
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { speakSentence } from '../../utils/speech';

const FillBlankExercise = ({ exercise, onComplete }) => {
    // exercise.question = "Ich ___ (sein) Student."
    // exercise.answer = "bin"

    // Split text by placeholder "___"
    const parts = exercise.question.split('___');
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, success, error

    const checkAnswer = () => {
        const cleanInput = input.trim().toLowerCase();
        const cleanAnswer = exercise.answer.trim().toLowerCase();

        if (cleanInput === cleanAnswer) {
            setStatus('success');
            // Speak the full correct sentence
            const fullSentence = parts[0] + exercise.answer + (parts[1] || '');
            speakSentence(fullSentence);

            setTimeout(() => {
                onComplete(true);
            }, 1500);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 1500);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: 'var(--space-md)' }}>
            <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                Заповніть пропуск:
            </h3>

            <div style={{
                fontSize: '1.2rem',
                marginBottom: 'var(--space-xl)',
                lineHeight: 1.6
            }}>
                {parts[0]}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={status === 'success'}
                    placeholder="..."
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: `2px solid ${status === 'error' ? 'var(--color-error)' :
                                status === 'success' ? 'var(--color-success)' :
                                    'var(--color-accent)'
                            }`,
                        width: '100px',
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)',
                        textAlign: 'center',
                        margin: '0 8px',
                        outline: 'none'
                    }}
                />
                {parts[1]}
            </div>

            <button
                className="btn btn-primary"
                onClick={checkAnswer}
                disabled={!input || status === 'success'}
            >
                {status === 'success' ? (
                    <><Check size={20} style={{ marginRight: 8 }} /> Правильно!</>
                ) : status === 'error' ? (
                    <><X size={20} style={{ marginRight: 8 }} /> Спробуй ще</>
                ) : (
                    'Перевірити'
                )}
            </button>
        </div>
    );
};

export default FillBlankExercise;
