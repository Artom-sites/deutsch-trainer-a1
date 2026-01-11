// src/components/exercises/NounMaster.jsx
// Ultra-compact layout - no labels, no scroll
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

    const [selectedArticle, setSelectedArticle] = useState(null);
    const [wordInput, setWordInput] = useState('');
    const [selectedPlural, setSelectedPlural] = useState(null);
    const [feedback, setFeedback] = useState({ article: null, word: null, plural: null });
    const [showResult, setShowResult] = useState(false);

    const currentWord = words[currentIndex];
    const isFinished = currentIndex >= words.length;

    useEffect(() => {
        setSelectedArticle(null);
        setWordInput('');
        setSelectedPlural(null);
        setFeedback({ article: null, word: null, plural: null });
        setShowResult(false);
    }, [currentIndex]);

    const pluralOptions = useMemo(() => {
        if (!currentWord) return [];
        const endings = ['-', '-e', '-n', '-en', '-s', '-er', '¨-e', '¨-er'];
        const options = new Set([currentWord.plural]);
        while (options.size < 4) {
            options.add(endings[Math.floor(Math.random() * endings.length)]);
        }
        return Array.from(options).sort();
    }, [currentWord]);

    const handleCheck = () => {
        if (!selectedArticle || !wordInput.trim() || !selectedPlural) return;
        const articleCorrect = selectedArticle.toLowerCase() === currentWord.article.toLowerCase();
        const wordCorrect = wordInput.trim().toLowerCase() === currentWord.word.toLowerCase();
        const pluralCorrect = selectedPlural === currentWord.plural;
        setFeedback({ article: articleCorrect, word: wordCorrect, plural: pluralCorrect });
        if (articleCorrect && wordCorrect && pluralCorrect) {
            confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
            submitReview(currentWord.id, 5);
            addCoins(10);
        }
        setShowResult(true);
    };

    const handleNext = () => nextCard();
    const handleSkip = () => nextCard();
    const handleSpeak = () => currentWord && speakWord(currentWord.word, currentWord.article);

    if (!currentWord || isFinished) {
        return (
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', height: 'calc(100dvh - 80px)', padding: 20, background: '#0B0B0F'
            }}>
                <Trophy size={48} color="#F26A1B" style={{ marginBottom: 16 }} />
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#E5E7EB' }}>Вправу завершено!</h2>
                <button onClick={goBack} style={{
                    marginTop: 20, background: '#F26A1B', color: 'white', border: 'none',
                    borderRadius: 12, padding: '12px 24px', fontSize: '1rem', fontWeight: 600
                }}>
                    Готово
                </button>
            </div>
        );
    }

    const getArticleColor = (art) => {
        switch (art) { case 'der': return '#4A90E2'; case 'die': return '#E94B5A'; case 'das': return '#2ECC71'; default: return '#E5E7EB'; }
    };

    const canCheck = selectedArticle && wordInput.trim() && selectedPlural;

    const getBtnStyle = (isSelected, isCorrect, isWrong, showCorrect) => ({
        background: isCorrect ? 'rgba(46, 204, 113, 0.2)' : isWrong ? 'rgba(239, 68, 68, 0.2)' : showCorrect ? 'rgba(46, 204, 113, 0.15)' : isSelected ? 'rgba(242, 106, 27, 0.2)' : '#1A1A22',
        border: isCorrect ? '2px solid #2ECC71' : isWrong ? '2px solid #EF4444' : showCorrect ? '2px solid #2ECC71' : isSelected ? '2px solid #F26A1B' : '2px solid rgba(255,255,255,0.08)',
        borderRadius: 10, cursor: showResult ? 'default' : 'pointer'
    });

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            height: 'calc(100dvh - 80px)', background: '#0B0B0F',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <button onClick={goBack} style={{ background: 'transparent', border: 'none', color: '#E5E7EB', padding: 6 }}>
                    <ArrowLeft size={22} />
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#7A7D8A' }}>
                    {currentIndex + 1} / {words.length}
                </span>
                <button onClick={handleSkip} style={{ background: 'transparent', border: 'none', color: '#7A7D8A', padding: 6 }}>
                    <SkipForward size={20} />
                </button>
            </div>

            {/* Translation */}
            <div style={{ textAlign: 'center', padding: '8px 16px', flexShrink: 0 }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#E5E7EB', margin: 0 }}>
                    {currentWord.translation}
                </h2>
                <button onClick={handleSpeak} style={{
                    marginTop: 8, background: 'rgba(255,255,255,0.08)', border: 'none',
                    borderRadius: 14, padding: '5px 12px', color: '#E5E7EB',
                    display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.8rem'
                }}>
                    <Volume2 size={14} /> Слухати
                </button>
            </div>

            {/* Main Area - Articles + Word + Plurals */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 16px', gap: 12 }}>

                {/* Row: Articles + Word Input */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'stretch' }}>
                    {/* Articles */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 56 }}>
                        {['der', 'die', 'das'].map(art => {
                            const isSelected = selectedArticle === art;
                            const isCorrect = feedback.article === true && isSelected;
                            const isWrong = feedback.article === false && isSelected;
                            const showCorrect = showResult && art === currentWord.article;
                            return (
                                <button key={art} onClick={() => !showResult && setSelectedArticle(art)} disabled={showResult}
                                    style={{ ...getBtnStyle(isSelected, isCorrect, isWrong, showCorrect), padding: '12px 4px', color: getArticleColor(art), fontSize: '0.95rem', fontWeight: 700 }}>
                                    {art}
                                </button>
                            );
                        })}
                    </div>

                    {/* Word Input */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <input
                            value={wordInput}
                            onChange={(e) => !showResult && setWordInput(e.target.value)}
                            disabled={showResult}
                            placeholder="Напиши слово..."
                            autoComplete="off"
                            autoCapitalize="off"
                            style={{
                                flex: 1, background: '#1A1A22',
                                border: feedback.word === true ? '2px solid #2ECC71' : feedback.word === false ? '2px solid #EF4444' : '2px solid rgba(255,255,255,0.08)',
                                borderRadius: 12, padding: '14px 12px', fontSize: '1rem', color: '#E5E7EB', outline: 'none', textAlign: 'center'
                            }}
                        />
                        {feedback.word === false && (
                            <div style={{ marginTop: 4, textAlign: 'center', color: '#2ECC71', fontSize: '0.85rem' }}>
                                {currentWord.word}
                            </div>
                        )}
                    </div>
                </div>

                {/* Plurals - horizontal */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                    {pluralOptions.map(pl => {
                        const isSelected = selectedPlural === pl;
                        const isCorrect = feedback.plural === true && isSelected;
                        const isWrong = feedback.plural === false && isSelected;
                        const showCorrect = showResult && pl === currentWord.plural;
                        return (
                            <button key={pl} onClick={() => !showResult && setSelectedPlural(pl)} disabled={showResult}
                                style={{ ...getBtnStyle(isSelected, isCorrect, isWrong, showCorrect), padding: '12px 4px', color: '#E5E7EB', fontSize: '0.9rem', fontWeight: 600 }}>
                                {pl || '-'}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Button */}
            <div style={{ padding: '10px 16px', flexShrink: 0 }}>
                {!showResult ? (
                    <button onClick={handleCheck} disabled={!canCheck} style={{
                        width: '100%', background: canCheck ? '#F26A1B' : 'rgba(255,255,255,0.08)',
                        color: canCheck ? 'white' : '#7A7D8A', border: 'none', borderRadius: 12,
                        padding: '14px', fontSize: '1rem', fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                    }}>
                        <Check size={18} /> Перевірити
                    </button>
                ) : (
                    <button onClick={handleNext} style={{
                        width: '100%', background: '#F26A1B', color: 'white',
                        border: 'none', borderRadius: 12, padding: '14px', fontSize: '1rem', fontWeight: 600
                    }}>
                        Далі →
                    </button>
                )}
            </div>
        </div>
    );
};

export default NounMaster;
