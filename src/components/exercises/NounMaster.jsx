// src/components/exercises/NounMaster.jsx
// Adaptive exercise: detects word type (noun/verb/other) and shows appropriate UI
import React, { useState, useEffect, useMemo } from 'react';
import useStore from '../../store/useStore';
import useAuthStore from '../../store/authStore';
import { ArrowLeft, SkipForward, Check, Trophy, Volume2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakWord, triggerHaptic } from '../../utils/speech';

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

    // Determine word type
    const wordType = useMemo(() => {
        if (!currentWord) return 'other';
        // Noun: has article (der/die/das)
        if (currentWord.article) return 'noun';
        // Verb: ends with -en or -n (German infinitive)
        const word = currentWord.word?.toLowerCase() || '';
        if (word.endsWith('en') || word.endsWith('ern') || word.endsWith('eln')) return 'verb';
        return 'other';
    }, [currentWord]);

    useEffect(() => {
        setSelectedArticle(null);
        setWordInput('');
        setSelectedPlural(null);
        setFeedback({ article: null, word: null, plural: null });
        setShowResult(false);
    }, [currentIndex]);

    // Helper to get plural ending
    const getPluralEnding = (word, plural) => {
        if (!plural || plural === '-') return '-';

        // If plural is already in notation format (starts with - or ¨)
        if (plural.startsWith('-') || plural.startsWith('¨')) {
            return plural;
        }

        const baseWord = word.replace(/^(der|die|das)\s+/i, '');
        // Check for umlaut change
        const hasUmlaut = /[äöü]/.test(plural) && !/[äöü]/.test(baseWord);
        // Find the ending difference
        let ending = '';
        if (plural.toLowerCase().startsWith(baseWord.toLowerCase())) {
            const suffix = plural.slice(baseWord.length);
            ending = suffix ? '-' + suffix : '-';
        } else if (hasUmlaut) {
            // Umlaut case - find suffix after base changes
            const pluralLower = plural.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u');
            const baseLower = baseWord.toLowerCase();
            if (pluralLower.startsWith(baseLower)) {
                const suffix = plural.slice(baseWord.length);
                ending = suffix ? '¨-' + suffix : '¨-';
            } else {
                ending = '¨-' + (plural.slice(-1) === 'e' ? 'e' : plural.slice(-2) === 'er' ? 'er' : 'e');
            }
        } else {
            ending = '-' + (plural.slice(-2) === 'en' ? 'en' : plural.slice(-1) === 'e' ? 'e' : plural.slice(-1) === 'n' ? 'n' : plural.slice(-1) === 's' ? 's' : 'e');
        }
        return ending || '-';
    };

    const pluralOptions = useMemo(() => {
        if (!currentWord) return [];
        const correctEnding = getPluralEnding(currentWord.word, currentWord.plural);
        const endings = ['-', '-e', '-n', '-en', '-s', '-er', '¨-e', '¨-er', '¨-'];
        const options = new Set([correctEnding]);
        while (options.size < 4) {
            const randomEnding = endings[Math.floor(Math.random() * endings.length)];
            if (randomEnding !== correctEnding) {
                options.add(randomEnding);
            }
        }
        return Array.from(options).sort();
    }, [currentWord]);

    const handleCheck = () => {
        // For nouns: require article + word + plural
        if (wordType === 'noun') {
            if (!selectedArticle || !wordInput.trim() || !selectedPlural) return;
            const articleCorrect = selectedArticle.toLowerCase() === currentWord.article.toLowerCase();
            const wordCorrect = wordInput.trim().toLowerCase() === currentWord.word.toLowerCase();
            const correctEnding = getPluralEnding(currentWord.word, currentWord.plural);
            const pluralCorrect = selectedPlural === correctEnding;
            setFeedback({ article: articleCorrect, word: wordCorrect, plural: pluralCorrect });

            if (articleCorrect && wordCorrect && pluralCorrect) {
                confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
                triggerHaptic('success');
                submitReview(currentWord.id, 5);
                addCoins(10);
            } else {
                triggerHaptic('error');
            }
        } else {
            // For verbs/other: only check word
            if (!wordInput.trim()) return;
            const wordCorrect = wordInput.trim().toLowerCase() === currentWord.word.toLowerCase();
            setFeedback({ article: null, word: wordCorrect, plural: null });

            if (wordCorrect) {
                confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
                triggerHaptic('success');
                submitReview(currentWord.id, 5);
                addCoins(10);
            } else {
                triggerHaptic('error');
            }
        }
        setShowResult(true);
    };

    const handleNext = () => nextCard();
    const handleSkip = () => nextCard();
    const handleSpeak = () => currentWord && speakWord(currentWord.word, currentWord.article);

    if (!currentWord || isFinished) {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 80,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', background: '#0B0B0F'
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

    // canCheck depends on word type
    const canCheck = wordType === 'noun'
        ? (selectedArticle && wordInput.trim() && selectedPlural)
        : wordInput.trim();

    const getBtnStyle = (isSelected, isCorrect, isWrong, showCorrect) => ({
        background: isCorrect ? 'rgba(46, 204, 113, 0.2)' : isWrong ? 'rgba(239, 68, 68, 0.2)' : showCorrect ? 'rgba(46, 204, 113, 0.15)' : isSelected ? 'rgba(242, 106, 27, 0.2)' : '#1A1A22',
        border: isCorrect ? '2px solid #2ECC71' : isWrong ? '2px solid #EF4444' : showCorrect ? '2px solid #2ECC71' : isSelected ? '2px solid #F26A1B' : '2px solid rgba(255,255,255,0.08)',
        borderRadius: 10, cursor: showResult ? 'default' : 'pointer'
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 80,
            display: 'flex', flexDirection: 'column',
            background: '#0B0B0F',
            overflow: 'hidden'
        }}>
            {/* Floating Back Button - always visible */}
            <button
                onClick={goBack}
                style={{
                    position: 'absolute', top: 12, left: 12, zIndex: 10,
                    background: 'rgba(0,0,0,0.5)', border: 'none',
                    borderRadius: 10, padding: 8, color: '#E5E7EB',
                    backdropFilter: 'blur(8px)'
                }}
            >
                <ArrowLeft size={20} />
            </button>

            {/* Progress + Skip */}
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: '12px 16px', gap: 12
            }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#7A7D8A' }}>
                    {currentIndex + 1} / {words.length}
                </span>
                <button onClick={handleSkip} style={{ background: 'transparent', border: 'none', color: '#7A7D8A', padding: 4 }}>
                    <SkipForward size={18} />
                </button>
            </div>

            {/* Main Area - word and input grouped together */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 16px', gap: 16 }}>

                {/* Translation + Word Type Badge */}
                <div style={{ textAlign: 'center', marginBottom: 8 }}>
                    {/* Word type indicator */}
                    <div style={{ marginBottom: 6 }}>
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: 20,
                            background: wordType === 'noun' ? 'rgba(139, 92, 246, 0.2)' : wordType === 'verb' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(156, 163, 175, 0.2)',
                            color: wordType === 'noun' ? '#A78BFA' : wordType === 'verb' ? '#60A5FA' : '#9CA3AF',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {wordType === 'noun' ? 'Іменник' : wordType === 'verb' ? 'Дієслово' : 'Слово'}
                        </span>
                    </div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#E5E7EB', margin: 0 }}>
                        {currentWord.translation}
                    </h2>
                    <button onClick={handleSpeak} style={{
                        marginTop: 8, background: 'rgba(255,255,255,0.08)', border: 'none',
                        borderRadius: 12, padding: '6px 12px', color: '#E5E7EB',
                        display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.8rem'
                    }}>
                        <Volume2 size={14} /> Слухати
                    </button>
                </div>

                {/* NOUN: Articles + Word Input side by side */}
                {wordType === 'noun' && (
                    <div style={{ display: 'flex', gap: 8, alignItems: 'stretch' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 52 }}>
                            {['der', 'die', 'das'].map(art => {
                                const isSelected = selectedArticle === art;
                                const isCorrect = feedback.article === true && isSelected;
                                const isWrong = feedback.article === false && isSelected;
                                const showCorrect = showResult && art === currentWord.article;
                                return (
                                    <button key={art} onClick={() => !showResult && setSelectedArticle(art)} disabled={showResult}
                                        style={{ ...getBtnStyle(isSelected, isCorrect, isWrong, showCorrect), padding: '10px 2px', color: getArticleColor(art), fontSize: '0.9rem', fontWeight: 700 }}>
                                        {art}
                                    </button>
                                );
                            })}
                        </div>

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
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
                                    borderRadius: 10, padding: '12px 36px 12px 10px', fontSize: '1rem', color: '#E5E7EB', outline: 'none', textAlign: 'center'
                                }}
                            />
                            {wordInput && !showResult && (
                                <button
                                    onClick={() => setWordInput('')}
                                    style={{
                                        position: 'absolute', right: 8, top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.15)',
                                        border: 'none', borderRadius: '50%',
                                        width: 22, height: 22,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', color: '#9CA3AF'
                                    }}
                                >
                                    <X size={12} />
                                </button>
                            )}
                            {feedback.word === false && (
                                <div style={{ marginTop: 3, textAlign: 'center', color: '#2ECC71', fontSize: '0.8rem' }}>
                                    {currentWord.word}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* VERB/OTHER: Just word input, centered */}
                {wordType !== 'noun' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100%' }}>
                        <input
                            value={wordInput}
                            onChange={(e) => !showResult && setWordInput(e.target.value)}
                            disabled={showResult}
                            placeholder={wordType === 'verb' ? "Напиши дієслово..." : "Напиши слово..."}
                            autoComplete="off"
                            autoCapitalize="off"
                            style={{
                                width: '100%', background: '#1A1A22',
                                border: feedback.word === true ? '2px solid #2ECC71' : feedback.word === false ? '2px solid #EF4444' : '2px solid rgba(255,255,255,0.08)',
                                borderRadius: 10, padding: '14px 40px 14px 12px', fontSize: '1.1rem', color: '#E5E7EB', outline: 'none', textAlign: 'center'
                            }}
                        />
                        {wordInput && !showResult && (
                            <button
                                onClick={() => setWordInput('')}
                                style={{
                                    position: 'absolute', right: 10, top: 14,
                                    background: 'rgba(255,255,255,0.15)',
                                    border: 'none', borderRadius: '50%',
                                    width: 24, height: 24,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', color: '#9CA3AF'
                                }}
                            >
                                <X size={14} />
                            </button>
                        )}
                        {feedback.word === false && (
                            <div style={{ marginTop: 6, textAlign: 'center', color: '#2ECC71', fontSize: '0.9rem', fontWeight: 600 }}>
                                {currentWord.word}
                            </div>
                        )}
                    </div>
                )}

                {/* NOUN: Plurals */}
                {wordType === 'noun' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                        {pluralOptions.map(pl => {
                            const isSelected = selectedPlural === pl;
                            const isCorrect = feedback.plural === true && isSelected;
                            const isWrong = feedback.plural === false && isSelected;
                            const correctEnding = getPluralEnding(currentWord.word, currentWord.plural);
                            const showCorrect = showResult && pl === correctEnding;
                            return (
                                <button key={pl} onClick={() => !showResult && setSelectedPlural(pl)} disabled={showResult}
                                    style={{ ...getBtnStyle(isSelected, isCorrect, isWrong, showCorrect), padding: '10px 2px', color: '#E5E7EB', fontSize: '0.85rem', fontWeight: 600 }}>
                                    {pl || '-'}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Bottom Button */}
            <div style={{ padding: '8px 16px 12px' }}>
                {!showResult ? (
                    <button onClick={handleCheck} disabled={!canCheck} style={{
                        width: '100%', background: canCheck ? '#F26A1B' : 'rgba(255,255,255,0.08)',
                        color: canCheck ? 'white' : '#7A7D8A', border: 'none', borderRadius: 12,
                        padding: '12px', fontSize: '1rem', fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                    }}>
                        <Check size={18} /> Перевірити
                    </button>
                ) : (
                    <button onClick={handleNext} style={{
                        width: '100%', background: '#F26A1B', color: 'white',
                        border: 'none', borderRadius: 12, padding: '12px', fontSize: '1rem', fontWeight: 600
                    }}>
                        Далі →
                    </button>
                )}
            </div>
        </div>
    );
};

export default NounMaster;
