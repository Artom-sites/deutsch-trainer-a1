// src/components/exercises/NounMaster.jsx
// All-in-One Layout: Article + Word + Plural on single screen
import React, { useState, useEffect, useMemo } from 'react';
import useStore from '../../store/useStore';
import useAuthStore from '../../store/authStore';
import { ArrowLeft, SkipForward, Check, Trophy, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakWord } from '../../utils/speech';

const NounMaster = () => {
    const goBack = useStore(state => state.goBack);
    const words = useStore(state => state.flashcardWords);
    const nextCard = useStore(state => state.nextCard);
    const currentIndex = useStore(state => state.currentCardIndex);
    const submitReview = useStore(state => state.submitReview);
    const addCoins = useAuthStore(state => state.addCoins);

    // State for current word
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [wordInput, setWordInput] = useState('');
    const [selectedPlural, setSelectedPlural] = useState(null);
    const [feedback, setFeedback] = useState({ article: null, word: null, plural: null });
    const [isChecking, setIsChecking] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const currentWord = words[currentIndex];
    const isFinished = currentIndex >= words.length;

    // Reset state when word changes
    useEffect(() => {
        setSelectedArticle(null);
        setWordInput('');
        setSelectedPlural(null);
        setFeedback({ article: null, word: null, plural: null });
        setShowResult(false);
        setIsChecking(false);
    }, [currentIndex]);

    // Generate plural options
    const pluralOptions = useMemo(() => {
        if (!currentWord) return [];
        const endings = ['-', '-e', '-n', '-en', '-s', '-er', '¨-e', '¨-er', '¨-'];
        const options = new Set([currentWord.plural]);
        while (options.size < 6) {
            options.add(endings[Math.floor(Math.random() * endings.length)]);
        }
        return Array.from(options).sort();
    }, [currentWord]);

    // Handle Check button
    const handleCheck = () => {
        if (!selectedArticle || !wordInput.trim() || !selectedPlural) return;

        setIsChecking(true);

        const articleCorrect = selectedArticle.toLowerCase() === currentWord.article.toLowerCase();
        const wordCorrect = wordInput.trim().toLowerCase() === currentWord.word.toLowerCase();
        const pluralCorrect = selectedPlural === currentWord.plural;

        setFeedback({
            article: articleCorrect,
            word: wordCorrect,
            plural: pluralCorrect
        });

        const allCorrect = articleCorrect && wordCorrect && pluralCorrect;

        if (allCorrect) {
            // Success!
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
            submitReview(currentWord.id, 5); // Full mastery quality
            addCoins(10);
        }

        setShowResult(true);
    };

    // Handle Next/Skip
    const handleNext = () => {
        nextCard();
    };

    const handleSkip = () => {
        // Skipping doesn't count as learned
        nextCard();
    };

    // Speech
    const handleSpeak = () => {
        if (currentWord) {
            speakWord(currentWord.word, currentWord.article);
        }
    };

    // Finished screen
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

    const getArticleColor = (article) => {
        switch (article) {
            case 'der': return '#4A90E2';
            case 'die': return '#E94B5A';
            case 'das': return '#2ECC71';
            default: return '#E5E7EB';
        }
    };

    const canCheck = selectedArticle && wordInput.trim() && selectedPlural;

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0B0B0F' }}>
            {/* Header */}
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB' }}>
                    <ArrowLeft size={24} />
                </button>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7A7D8A' }}>
                    {currentIndex + 1} / {words.length}
                </div>
                <button onClick={handleSkip} style={{ background: 'transparent', border: 'none', color: '#7A7D8A', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <SkipForward size={20} />
                </button>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 20, overflow: 'auto' }}>

                {/* Translation Prompt */}
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                    <div style={{ fontSize: '0.75rem', color: '#7A7D8A', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                        ПЕРЕКЛАД
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#E5E7EB' }}>
                        {currentWord.translation}
                    </h2>
                    <button onClick={handleSpeak} style={{ marginTop: 12, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 20, padding: '8px 16px', color: '#E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Volume2 size={16} /> Слухати
                    </button>
                </div>

                {/* All-in-One Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 12, alignItems: 'start' }}>

                    {/* Article Selection */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ fontSize: '0.7rem', color: '#7A7D8A', textAlign: 'center', marginBottom: 4 }}>АРТИКЛЬ</div>
                        {['der', 'die', 'das'].map(art => {
                            const isSelected = selectedArticle === art;
                            const isCorrect = feedback.article === true && isSelected;
                            const isWrong = feedback.article === false && isSelected;
                            const showCorrectAnswer = showResult && art.toLowerCase() === currentWord.article.toLowerCase();

                            return (
                                <button
                                    key={art}
                                    onClick={() => !showResult && setSelectedArticle(art)}
                                    disabled={showResult}
                                    style={{
                                        background: isCorrect ? 'rgba(46, 204, 113, 0.2)'
                                            : isWrong ? 'rgba(239, 68, 68, 0.2)'
                                                : showCorrectAnswer ? 'rgba(46, 204, 113, 0.15)'
                                                    : isSelected ? 'rgba(242, 106, 27, 0.2)'
                                                        : '#1A1A22',
                                        border: isCorrect ? '2px solid #2ECC71'
                                            : isWrong ? '2px solid #EF4444'
                                                : showCorrectAnswer ? '2px solid #2ECC71'
                                                    : isSelected ? '2px solid #F26A1B'
                                                        : '2px solid rgba(255,255,255,0.1)',
                                        borderRadius: 12,
                                        padding: '14px 8px',
                                        color: getArticleColor(art),
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        cursor: showResult ? 'default' : 'pointer'
                                    }}
                                >
                                    {art}
                                </button>
                            );
                        })}
                    </div>

                    {/* Word Input */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '0.7rem', color: '#7A7D8A', textAlign: 'center', marginBottom: 8 }}>СЛОВО</div>
                        <input
                            value={wordInput}
                            onChange={(e) => !showResult && setWordInput(e.target.value)}
                            disabled={showResult}
                            placeholder="Напиши..."
                            autoComplete="off"
                            autoCapitalize="off"
                            style={{
                                background: '#1A1A22',
                                border: feedback.word === true ? '2px solid #2ECC71'
                                    : feedback.word === false ? '2px solid #EF4444'
                                        : '2px solid rgba(255,255,255,0.1)',
                                borderRadius: 12,
                                padding: '16px 12px',
                                fontSize: '1.1rem',
                                color: '#E5E7EB',
                                outline: 'none',
                                textAlign: 'center'
                            }}
                        />
                        {feedback.word === false && (
                            <div style={{ marginTop: 8, textAlign: 'center', color: '#2ECC71', fontSize: '0.9rem' }}>
                                {currentWord.word}
                            </div>
                        )}
                    </div>

                    {/* Plural Selection */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div style={{ fontSize: '0.7rem', color: '#7A7D8A', textAlign: 'center', marginBottom: 4 }}>МНОЖИНА</div>
                        {pluralOptions.map(pl => {
                            const isSelected = selectedPlural === pl;
                            const isCorrect = feedback.plural === true && isSelected;
                            const isWrong = feedback.plural === false && isSelected;
                            const showCorrectAnswer = showResult && pl === currentWord.plural;

                            return (
                                <button
                                    key={pl}
                                    onClick={() => !showResult && setSelectedPlural(pl)}
                                    disabled={showResult}
                                    style={{
                                        background: isCorrect ? 'rgba(46, 204, 113, 0.2)'
                                            : isWrong ? 'rgba(239, 68, 68, 0.2)'
                                                : showCorrectAnswer ? 'rgba(46, 204, 113, 0.15)'
                                                    : isSelected ? 'rgba(242, 106, 27, 0.2)'
                                                        : '#1A1A22',
                                        border: isCorrect ? '2px solid #2ECC71'
                                            : isWrong ? '2px solid #EF4444'
                                                : showCorrectAnswer ? '2px solid #2ECC71'
                                                    : isSelected ? '2px solid #F26A1B'
                                                        : '2px solid rgba(255,255,255,0.1)',
                                        borderRadius: 10,
                                        padding: '10px 6px',
                                        color: '#E5E7EB',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        cursor: showResult ? 'default' : 'pointer'
                                    }}
                                >
                                    {pl || '-'}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ padding: '16px 20px 32px', display: 'flex', gap: 12 }}>
                {!showResult ? (
                    <button
                        onClick={handleCheck}
                        disabled={!canCheck}
                        style={{
                            flex: 1,
                            background: canCheck ? '#F26A1B' : 'rgba(255,255,255,0.1)',
                            color: canCheck ? 'white' : '#7A7D8A',
                            border: 'none',
                            borderRadius: 16,
                            padding: '18px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            cursor: canCheck ? 'pointer' : 'default',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                        <Check size={20} /> Перевірити
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        style={{
                            flex: 1,
                            background: '#F26A1B',
                            color: 'white',
                            border: 'none',
                            borderRadius: 16,
                            padding: '18px',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        Далі →
                    </button>
                )}
            </div>
        </div>
    );
};

export default NounMaster;
