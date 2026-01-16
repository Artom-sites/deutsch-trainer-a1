// src/components/exercises/WordOrder.jsx
// Вправа: Склади речення (порядок слів)
import React, { useState, useEffect } from 'react';
import { speakSentence, triggerHaptic } from '../../utils/speech';
import { RotateCcw, Check } from 'lucide-react';

const WordOrderExercise = ({ exercise, onComplete }) => {
    // Supports two formats:
    // 1. exercise.sentence = "Ich gehe heute ins Kino" (legacy)
    // 2. exercise.words = ["Ich", "bin", "müde"], exercise.correctOrder = ["Ich", "bin", "müde"] (new)

    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [status, setStatus] = useState('idle'); // idle, error, success

    // Get the correct sentence to build
    const getCorrectSentence = () => {
        if (exercise.correctOrder) {
            return exercise.correctOrder.join(' ');
        }
        return exercise.sentence || '';
    };

    // Get initial words to shuffle
    const getInitialWords = () => {
        if (exercise.words && Array.isArray(exercise.words)) {
            return exercise.words.map((word, index) => ({ id: index, text: word }));
        }
        if (exercise.sentence) {
            return exercise.sentence.split(' ').map((word, index) => ({ id: index, text: word }));
        }
        return [];
    };

    useEffect(() => {
        // Shuffle words
        const parts = getInitialWords().sort(() => Math.random() - 0.5);
        setWords(parts);
        setSelectedWords([]);
        setStatus('idle');
    }, [exercise]);

    const handleWordClick = (word) => {
        if (status === 'success') return;

        // Move from bank to sentence
        const newWords = words.filter(w => w.id !== word.id);
        setWords(newWords);
        setSelectedWords([...selectedWords, word]);
        setStatus('idle');
    };

    const handleSelectedClick = (word) => {
        if (status === 'success') return;

        // Return to bank
        const newSelected = selectedWords.filter(w => w.id !== word.id);
        setSelectedWords(newSelected);
        setWords([...words, word]);
        setStatus('idle');
    };

    const handleCheck = () => {
        const currentSentence = selectedWords.map(w => w.text).join(' ');
        const correctSentence = getCorrectSentence();

        if (currentSentence === correctSentence) {
            setStatus('success');
            triggerHaptic?.('success');
            // Speech disabled per user request
            setTimeout(() => onComplete(true), 1500);
        } else {
            setStatus('error');
            triggerHaptic?.('error');
            setTimeout(() => setStatus('idle'), 1500);
        }
    };

    const handleReset = () => {
        const allWords = [...selectedWords, ...words].sort(() => Math.random() - 0.5);
        setSelectedWords([]);
        setWords(allWords);
        setStatus('idle');
    };

    return (
        <div style={{ padding: 16 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 16, color: 'var(--text-2)', fontSize: '0.9rem' }}>
                Побудуй речення:
            </h3>

            {/* Translation hint */}
            {exercise.translation && (
                <div style={{
                    textAlign: 'center',
                    marginBottom: 20,
                    fontStyle: 'italic',
                    color: 'var(--text-2)',
                    fontSize: '0.85rem'
                }}>
                    "{exercise.translation}"
                </div>
            )}

            {/* Result Area */}
            <div style={{
                minHeight: 52,
                background: 'rgba(255, 255, 255, 0.03)',
                border: `2px ${selectedWords.length ? 'solid' : 'dashed'} ${status === 'success' ? 'var(--ok)' :
                    status === 'error' ? 'var(--pri)' :
                        'var(--stroke)'
                    }`,
                borderRadius: 12,
                padding: 12,
                marginBottom: 16,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {selectedWords.length === 0 ? (
                    <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>
                        Натисни на слова нижче
                    </span>
                ) : (
                    selectedWords.map(word => (
                        <button
                            key={word.id}
                            onClick={() => handleSelectedClick(word)}
                            style={{
                                padding: '6px 12px',
                                background: 'var(--pri)',
                                color: '#0B0B0F',
                                border: 'none',
                                borderRadius: 8,
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: 600
                            }}
                        >
                            {word.text}
                        </button>
                    ))
                )}
            </div>

            {/* Word Bank */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 20
            }}>
                {words.map(word => (
                    <button
                        key={word.id}
                        onClick={() => handleWordClick(word)}
                        style={{
                            padding: '8px 14px',
                            background: 'var(--surface)',
                            border: '1px solid var(--stroke)',
                            borderRadius: 8,
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            color: 'var(--text-0)'
                        }}
                    >
                        {word.text}
                    </button>
                ))}
            </div>

            {/* Explanation on error */}
            {status === 'error' && exercise.explanation && (
                <div style={{
                    background: 'rgba(255, 107, 53, 0.1)',
                    border: '1px solid var(--pri)',
                    borderRadius: 12,
                    padding: 12,
                    marginBottom: 16,
                    fontSize: '0.85rem',
                    textAlign: 'center'
                }}>
                    💡 {exercise.explanation}
                </div>
            )}

            {/* Show correct answer on success */}
            {status === 'success' && (
                <div style={{
                    background: 'rgba(47, 230, 166, 0.1)',
                    border: '1px solid var(--ok)',
                    borderRadius: 12,
                    padding: 12,
                    marginBottom: 16,
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    color: 'var(--ok)'
                }}>
                    ✓ Правильно!
                </div>
            )}

            {/* Controls */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button
                    onClick={handleReset}
                    style={{
                        padding: 12,
                        borderRadius: '50%',
                        border: '1px solid var(--stroke)',
                        background: 'var(--surface)',
                        color: 'var(--text-1)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <RotateCcw size={18} />
                </button>

                <button
                    onClick={handleCheck}
                    disabled={words.length > 0 || status === 'success'}
                    style={{
                        padding: '12px 24px',
                        background: words.length === 0 && status !== 'success' ? 'var(--pri)' : 'var(--surface)',
                        color: words.length === 0 && status !== 'success' ? '#0B0B0F' : 'var(--text-2)',
                        border: 'none',
                        borderRadius: 12,
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: words.length === 0 && status !== 'success' ? 'pointer' : 'default',
                        opacity: words.length === 0 && status !== 'success' ? 1 : 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                    }}
                >
                    {status === 'success' ? <Check size={18} /> : 'Перевірити'}
                </button>
            </div>
        </div>
    );
};

export default WordOrderExercise;
