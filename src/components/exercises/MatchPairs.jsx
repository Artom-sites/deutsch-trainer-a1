// src/components/exercises/MatchPairs.jsx
// Вправа: З'єднай пари (слово - переклад)
import React, { useState, useEffect } from 'react';
import { speakWord } from '../../utils/speech';

const MatchPairsExercise = ({ exercise, onComplete }) => {
    // exercise.pairs = [ { de: 'Tisch', ua: 'Стіл' }, ... ]

    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [selectedRight, setSelectedRight] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]); // Array of IDs

    useEffect(() => {
        // Prepare and shuffle items
        const pairs = exercise.pairs.map((p, i) => ({ ...p, id: i }));

        const left = pairs.map(p => ({ id: p.id, text: p.de, type: 'de' }))
            .sort(() => Math.random() - 0.5);

        const right = pairs.map(p => ({ id: p.id, text: p.ua, type: 'ua' }))
            .sort(() => Math.random() - 0.5);

        setLeftItems(left);
        setRightItems(right);
    }, [exercise]);

    useEffect(() => {
        // Check match
        if (selectedLeft !== null && selectedRight !== null) {
            if (selectedLeft === selectedRight) {
                // Match found!
                // Speak the German word
                const pair = exercise.pairs[selectedLeft];
                speakWord(pair.de);

                setMatchedPairs(prev => [...prev, selectedLeft]);
                setSelectedLeft(null);
                setSelectedRight(null);

                // Check if all matched
                if (matchedPairs.length + 1 === exercise.pairs.length) {
                    setTimeout(() => onComplete(true), 1000);
                }
            } else {
                // No match
                setTimeout(() => {
                    setSelectedLeft(null);
                    setSelectedRight(null);
                }, 500);
            }
        }
    }, [selectedLeft, selectedRight]);

    return (
        <div style={{ padding: 'var(--space-sm)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-md)', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                З'єднайте пари слів
            </h3>

            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'space-between' }}>
                {/* German Column */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    {leftItems.map(item => (
                        <button
                            key={item.id}
                            disabled={matchedPairs.includes(item.id)}
                            onClick={() => setSelectedLeft(item.id)}
                            className="card"
                            style={{
                                padding: '12px',
                                background: matchedPairs.includes(item.id) ? 'transparent' :
                                    selectedLeft === item.id ? 'var(--color-accent)' :
                                        'var(--bg-surface)',
                                color: matchedPairs.includes(item.id) ? 'transparent' :
                                    selectedLeft === item.id ? 'white' :
                                        'var(--text-primary)',
                                border: matchedPairs.includes(item.id) ? '1px dashed var(--bg-surface)' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontWeight: 500
                            }}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>

                {/* Ukrainian Column */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    {rightItems.map(item => (
                        <button
                            key={item.id}
                            disabled={matchedPairs.includes(item.id)}
                            onClick={() => setSelectedRight(item.id)}
                            className="card"
                            style={{
                                padding: '12px',
                                background: matchedPairs.includes(item.id) ? 'transparent' :
                                    selectedRight === item.id ? 'var(--color-accent)' :
                                        'var(--bg-surface)',
                                color: matchedPairs.includes(item.id) ? 'transparent' :
                                    selectedRight === item.id ? 'white' :
                                        'var(--text-primary)',
                                border: matchedPairs.includes(item.id) ? '1px dashed var(--bg-surface)' : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontSize: '0.9rem'
                            }}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchPairsExercise;
