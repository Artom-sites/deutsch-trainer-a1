// src/components/exercises/NounMaster.jsx
import React, { useState, useEffect } from 'react';
import useStore from '../../store/useStore';
import useAuthStore from '../../store/authStore';
import { ArrowLeft, Check, X, HelpCircle, Trophy, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

const NounMaster = () => {
    const goBack = useStore(state => state.goBack);
    const words = useStore(state => state.flashcardWords);
    const nextCard = useStore(state => state.nextCard);
    const currentIndex = useStore(state => state.currentCardIndex);
    const addCoins = useAuthStore(state => state.addCoins);

    const [stage, setStage] = useState(0); // 0: Article, 1: Spelling, 2: Plural
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null); // 'correct', 'error', null
    const [streak, setStreak] = useState(0);

    const currentWord = words[currentIndex];
    const isFinished = currentIndex >= words.length;

    useEffect(() => {
        setStage(0);
        setInput('');
        setFeedback(null);
    }, [currentIndex]);

    if (!currentWord || isFinished) {
        return (
            <div className="screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: 20 }}>
                <Trophy size={64} color="#F26A1B" style={{ marginBottom: 24 }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#E5E7EB', textAlign: 'center' }}>
                    Noun Master Завершено!
                </h2>
                <p style={{ color: '#7A7D8A', marginTop: 8, marginBottom: 32 }}>
                    Ти пройшов всі іменники уроку.
                </p>
                <button
                    onClick={goBack}
                    style={{
                        background: '#F26A1B',
                        color: 'white',
                        border: 'none',
                        borderRadius: 16,
                        padding: '16px 32px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}
                >
                    Повернутися
                </button>
            </div>
        );
    }

    const playSuccessSound = () => {
        // Placeholder for sound
    };

    const handleArticle = (selectedArticle) => {
        if (selectedArticle.toLowerCase() === currentWord.article.toLowerCase()) {
            setFeedback('correct');
            playSuccessSound();
            setTimeout(() => {
                setFeedback(null);
                setStage(1);
            }, 500);
        } else {
            setFeedback('error');
            setStreak(0);
            setTimeout(() => setFeedback(null), 800);
        }
    };

    const handleSpelling = () => {
        if (input.trim().toLowerCase() === currentWord.word.toLowerCase()) {
            setFeedback('correct');
            playSuccessSound();
            setTimeout(() => {
                setFeedback(null);
                setStage(2);
            }, 500);
        } else {
            setFeedback('error');
            setStreak(0);
            setTimeout(() => setFeedback(null), 800);
        }
    };

    const handlePlural = (selectedPlural) => {
        if (selectedPlural === currentWord.plural) {
            setFeedback('correct');
            playSuccessSound();
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 }
            });
            addCoins(5); // Bonus for full word completion
            setTimeout(() => {
                setFeedback(null);
                nextCard();
            }, 800);
        } else {
            setFeedback('error');
            setStreak(0);
            setTimeout(() => setFeedback(null), 800);
        }
    };

    // Plural Options Generator
    const getPluralOptions = (correct) => {
        const connectors = ['-', '-e', '-n', '-en', '-s', '-er', '¨-e', '¨-er', '¨-'];
        const options = new Set([correct]);
        while (options.size < 4) {
            options.add(connectors[Math.floor(Math.random() * connectors.length)]);
        }
        return Array.from(options).sort();
    };

    const pluralOptions = React.useMemo(() => getPluralOptions(currentWord.plural), [currentWord]);

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0B0B0F' }}>
            {/* Header */}
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB' }}>
                    <ArrowLeft size={24} />
                </button>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7A7D8A' }}>
                    Noun Master {currentIndex + 1}/{words.length}
                </div>
                <div style={{ width: 24 }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {/* Prompt */}
                <div style={{ marginBottom: 40, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', color: '#7A7D8A', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                        ПЕРЕКЛАД
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#E5E7EB' }}>
                        {currentWord.translation}
                    </h2>
                </div>

                {/* STAGE 1: ARTICLE */}
                {stage === 0 && (
                    <div style={{ width: '100%', maxWidth: 320 }}>
                        <div style={{ textAlign: 'center', marginBottom: 24, color: '#F26A1B', fontSize: '1.2rem', fontWeight: 600 }}>
                            Обери Артикль
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                            {['der', 'die', 'das'].map(art => (
                                <button
                                    key={art}
                                    onClick={() => handleArticle(art)}
                                    style={{
                                        background: feedback === 'error' ? '#EF4444' : '#1A1A22',
                                        border: '2px solid rgba(255,255,255,0.1)',
                                        borderRadius: 16,
                                        padding: '24px 0',
                                        color: '#E5E7EB',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {art}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STAGE 2: SPELLING */}
                {stage === 1 && (
                    <div style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                            <span style={{
                                background: '#3B82F6', color: 'white', padding: '4px 12px', borderRadius: 8, fontWeight: 700
                            }}>
                                {currentWord.article}
                            </span>
                        </div>

                        <input
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSpelling()}
                            placeholder="Напиши слово..."
                            style={{
                                width: '100%',
                                background: '#1A1A22',
                                border: feedback === 'error' ? '2px solid #EF4444' : '2px solid rgba(255,255,255,0.1)',
                                borderRadius: 16,
                                padding: '16px 20px',
                                fontSize: '1.2rem',
                                color: '#E5E7EB',
                                outline: 'none',
                                textAlign: 'center',
                                marginBottom: 20
                            }}
                        />
                        <button
                            onClick={handleSpelling}
                            style={{
                                background: '#F26A1B',
                                color: 'white',
                                border: 'none',
                                borderRadius: 14,
                                padding: '12px 32px',
                                fontWeight: 700,
                                fontSize: '1rem'
                            }}
                        >
                            Далі
                        </button>
                    </div>
                )}

                {/* STAGE 3: PLURAL */}
                {stage === 2 && (
                    <div style={{ width: '100%', maxWidth: 320, textAlign: 'center' }}>
                        <div style={{ marginBottom: 32, fontSize: '1.5rem', fontWeight: 700, color: '#E5E7EB' }}>
                            <span style={{ color: '#3B82F6' }}>{currentWord.article}</span> {currentWord.word} <span style={{ color: '#7A7D8A' }}>, die ...?</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                            {pluralOptions.map(pl => (
                                <button
                                    key={pl}
                                    onClick={() => handlePlural(pl)}
                                    style={{
                                        background: feedback === 'error' ? '#EF4444' : '#1A1A22',
                                        border: '2px solid rgba(255,255,255,0.1)',
                                        borderRadius: 16,
                                        padding: '20px 0',
                                        color: '#E5E7EB',
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    }}
                                >
                                    {pl || '-'}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NounMaster;
