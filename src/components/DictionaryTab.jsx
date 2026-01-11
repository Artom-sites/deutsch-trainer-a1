// src/components/DictionaryTab.jsx
// Dictionary - Violang-style Design
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { vocabularyThemes, themedWords, getWordsByTheme, getTotalThemedWordCount } from '../data/themedWords';
import { words } from '../data/lexicon';
import { lessons } from '../data/lessons';
import { Search, Volume2, Eye, Dumbbell } from 'lucide-react';
import { speakWord } from '../utils/speech';

const DictionaryTab = () => {
    const setFlashcardWords = useStore(state => state.setFlashcardWords);
    const setCurrentView = useStore(state => state.setCurrentView);
    const setNounMasterWords = useStore(state => state.setNounMasterWords);

    const [searchQuery, setSearchQuery] = useState('');
    const [filterMode, setFilterMode] = useState('themes');
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [visibleCount, setVisibleCount] = useState(50);

    const getAllThemedWords = () => Object.values(themedWords).flat();

    const getFilteredWords = () => {
        let wordsToFilter;
        if (filterMode === 'themes') {
            wordsToFilter = selectedTheme ? getWordsByTheme(selectedTheme) : getAllThemedWords();
        } else {
            wordsToFilter = selectedLesson ? words.filter(w => w.lesson === selectedLesson) : words;
        }
        if (searchQuery === '') return wordsToFilter;
        return wordsToFilter.filter(w =>
            w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
            w.translation.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredWords = getFilteredWords();

    // Get gender color using new tokens
    const getGenderColor = (article) => {
        switch (article) {
            case 'der': return 'var(--der)';
            case 'die': return 'var(--die)';
            case 'das': return 'var(--das)';
            default: return 'var(--text-0)';
        }
    };

    const startFlashcards = () => {
        const formattedWords = filteredWords.map(w => ({
            id: w.id,
            word: w.word.replace(/^(der|die|das)\s+/, ''),
            article: w.article || null,
            plural: w.plural || null,
            translation: w.translation,
        }));
        setFlashcardWords(formattedWords);
        setCurrentView('flashcards');
    };

    const startNounMaster = () => {
        const nouns = filteredWords.filter(w => w.article);
        if (nouns.length === 0) {
            alert('Не знайдено іменників для тренування');
            return;
        }
        const formattedNouns = nouns.map(w => ({
            id: w.id,
            word: w.word.replace(/^(der|die|das)\s+/, ''),
            article: w.article,
            plural: w.plural || '-',
            translation: w.translation
        }));
        setNounMasterWords(formattedNouns);
    };

    const totalThemedWords = getTotalThemedWordCount();

    return (
        <div className="app">
            {/* Header */}
            <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-0)', margin: '0 0 4px' }}>
                    Wörterbuch
                </h1>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', margin: 0 }}>
                    {filterMode === 'themes' ? `${totalThemedWords} слів за темами` : `${words.length} слів з лекцій`}
                </p>
            </div>

            {/* Search */}
            <div style={{ position: 'relative', marginBottom: 16 }}>
                <Search size={18} style={{
                    position: 'absolute', left: 14, top: '50%',
                    transform: 'translateY(-50%)', color: 'var(--text-2)'
                }} />
                <input
                    type="text"
                    placeholder="Пошук слова..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 14px 12px 44px',
                        background: 'var(--bg-2)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 14,
                        color: 'var(--text-0)',
                        fontSize: '0.95rem',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Mode Toggle */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                <button
                    onClick={() => { setFilterMode('themes'); setSelectedLesson(null); }}
                    style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: 12,
                        border: 'none',
                        background: filterMode === 'themes'
                            ? 'linear-gradient(135deg, var(--pri), #ff5a1f)'
                            : 'var(--surface)',
                        color: filterMode === 'themes' ? '#0B0B0F' : 'var(--text-1)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                    }}
                >
                    За темами
                </button>
                <button
                    onClick={() => { setFilterMode('lessons'); setSelectedTheme(null); }}
                    style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: 12,
                        border: 'none',
                        background: filterMode === 'lessons'
                            ? 'linear-gradient(135deg, var(--pri), #ff5a1f)'
                            : 'var(--surface)',
                        color: filterMode === 'lessons' ? '#0B0B0F' : 'var(--text-1)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                    }}
                >
                    За лекціями
                </button>
            </div>

            {/* Filter Pills */}
            <div style={{
                display: 'flex', gap: 6, overflowX: 'auto',
                paddingBottom: 8, marginBottom: 16, scrollbarWidth: 'none'
            }}>
                {filterMode === 'themes' ? (
                    <>
                        <button
                            onClick={() => setSelectedTheme(null)}
                            style={{
                                padding: '8px 14px', borderRadius: 999,
                                border: selectedTheme === null ? 'none' : '1px solid var(--stroke)',
                                background: selectedTheme === null ? 'var(--pri)' : 'var(--surface)',
                                color: selectedTheme === null ? '#0B0B0F' : 'var(--text-1)',
                                fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer'
                            }}
                        >
                            Всі
                        </button>
                        {vocabularyThemes.map(theme => (
                            <button
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                style={{
                                    padding: '8px 14px', borderRadius: 999,
                                    border: selectedTheme === theme.id ? 'none' : '1px solid var(--stroke)',
                                    background: selectedTheme === theme.id ? theme.color : 'var(--surface)',
                                    color: selectedTheme === theme.id ? '#0B0B0F' : 'var(--text-1)',
                                    fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer'
                                }}
                            >
                                {theme.name}
                            </button>
                        ))}
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setSelectedLesson(null)}
                            style={{
                                padding: '8px 14px', borderRadius: 999,
                                border: selectedLesson === null ? 'none' : '1px solid var(--stroke)',
                                background: selectedLesson === null ? 'var(--pri)' : 'var(--surface)',
                                color: selectedLesson === null ? '#0B0B0F' : 'var(--text-1)',
                                fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer'
                            }}
                        >
                            Всі
                        </button>
                        {lessons.map(l => (
                            <button
                                key={l.id}
                                onClick={() => setSelectedLesson(l.id)}
                                style={{
                                    padding: '8px 14px', borderRadius: 999,
                                    border: selectedLesson === l.id ? 'none' : '1px solid var(--stroke)',
                                    background: selectedLesson === l.id ? 'var(--pri)' : 'var(--surface)',
                                    color: selectedLesson === l.id ? '#0B0B0F' : 'var(--text-1)',
                                    fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer'
                                }}
                            >
                                L{l.id}
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                <button
                    onClick={startFlashcards}
                    style={{
                        padding: '12px 14px',
                        background: 'var(--surface)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 14,
                        color: 'var(--text-0)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        cursor: 'pointer'
                    }}
                >
                    <Eye size={16} />
                    Переглянути
                </button>
                <button
                    onClick={startNounMaster}
                    style={{
                        padding: '12px 14px',
                        background: 'var(--pri-soft)',
                        border: '1px solid rgba(255,107,53,.3)',
                        borderRadius: 14,
                        color: 'var(--pri)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        cursor: 'pointer'
                    }}
                >
                    <Dumbbell size={16} />
                    Вивчати
                </button>
            </div>

            {/* Words Count */}
            <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: 10 }}>
                {filteredWords.length} слів
            </div>

            {/* Words List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {filteredWords.slice(0, visibleCount).map(word => (
                    <div
                        key={word.id}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '10px 14px',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                            border: '1px solid var(--stroke)',
                            borderRadius: 12
                        }}
                    >
                        <div>
                            <div style={{ color: getGenderColor(word.article), fontWeight: 600, fontSize: '0.95rem' }}>
                                {word.article && <span style={{ opacity: 0.7, marginRight: 4 }}>{word.article}</span>}
                                {word.word.replace(/^(der|die|das)\s+/, '')}
                                {word.plural && <span style={{ opacity: 0.5, marginLeft: 4 }}>, {word.plural}</span>}
                            </div>
                            <div style={{ color: 'var(--text-2)', fontSize: '0.8rem', marginTop: 2 }}>
                                {word.translation}
                            </div>
                        </div>
                        <button
                            onClick={() => speakWord(word.word.replace(/^(der|die|das)\s+/, ''), word.article)}
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--stroke)',
                                borderRadius: '50%',
                                width: 34, height: 34,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <Volume2 size={16} color="var(--text-2)" />
                        </button>
                    </div>
                ))}

                {filteredWords.length > visibleCount && (
                    <button
                        onClick={() => setVisibleCount(prev => prev + 50)}
                        style={{
                            width: '100%', textAlign: 'center', padding: 14,
                            background: 'var(--surface)', border: '1px solid var(--stroke)',
                            borderRadius: 12, color: 'var(--pri)',
                            fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer'
                        }}
                    >
                        + Ще {Math.min(50, filteredWords.length - visibleCount)} слів
                    </button>
                )}
            </div>
        </div>
    );
};

export default DictionaryTab;
