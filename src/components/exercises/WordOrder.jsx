// src/components/exercises/WordOrder.jsx
// Вправа: Склади речення (порядок слів)
import React, { useState, useEffect } from 'react';
import { speakSentence } from '../../utils/speech';
import { RotateCcw, Check, MoveRight } from 'lucide-react';

const WordOrderExercise = ({ exercise, onComplete }) => {
    // exercise.sentence = "Ich gehe heute ins Kino"
    // exercise.translation = "Я йду сьогодні в кіно"

    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [status, setStatus] = useState('idle'); // idle, error, success

    useEffect(() => {
        // Shuffle words
        const parts = exercise.sentence.split(' ')
            .map((word, index) => ({ id: index, text: word }))
            .sort(() => Math.random() - 0.5);
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

        // Remove punctuation for easier matching if needed, but usually exact match is better for grammar
        if (currentSentence === exercise.sentence) {
            setStatus('success');
            speakSentence(exercise.sentence);
            setTimeout(() => onComplete(true), 1500);
        } else {
            setStatus('error');
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
        <div style={{ padding: 'var(--space-md)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                Складіть речення:
            </h3>

            {/* Translation hint */}
            <div style={{
                textAlign: 'center',
                marginBottom: 'var(--space-lg)',
                fontStyle: 'italic',
                color: 'var(--text-muted)'
            }}>
                "{exercise.translation}"
            </div>

            {/* Result Area */}
            <div style={{
                minHeight: 60,
                borderBottom: `2px solid ${status === 'success' ? 'var(--color-success)' :
                        status === 'error' ? 'var(--color-error)' :
                            'var(--color-accent)'
                    }`,
                padding: 'var(--space-sm)',
                marginBottom: 'var(--space-lg)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {selectedWords.map(word => (
                    <button
                        key={word.id}
                        onClick={() => handleSelectedClick(word)}
                        className="fade-in"
                        style={{
                            padding: '6px 12px',
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        {word.text}
                    </button>
                ))}
            </div>

            {/* Word Bank */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 'var(--space-xl)'
            }}>
                {words.map(word => (
                    <button
                        key={word.id}
                        onClick={() => handleWordClick(word)}
                        style={{
                            padding: '8px 16px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                    >
                        {word.text}
                    </button>
                ))}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                <button
                    onClick={handleReset}
                    style={{
                        padding: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                >
                    <RotateCcw size={20} />
                </button>

                <button
                    className="btn btn-primary"
                    onClick={handleCheck}
                    disabled={words.length > 0 || status === 'success'}
                    style={{ minWidth: 150 }}
                >
                    {status === 'success' ? <Check /> : 'Перевірити'}
                </button>
            </div>
        </div>
    );
};

export default WordOrderExercise;
