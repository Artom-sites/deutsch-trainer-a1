// src/components/DictionaryTab.jsx
// Dictionary - Violang-style Design
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { vocabularyThemes, themedWords, getWordsByTheme, getTotalThemedWordCount } from '../data/themedWords';
import { getAllWords, getAllLessons } from '../data/lexicon'; // Updated import
import { Search, Volume2, Eye, Dumbbell } from 'lucide-react';
import { speakWord } from '../utils/speech';
import CollectionManager from './CollectionManager';


const DictionaryTab = () => {
    const setFlashcardWords = useStore(state => state.setFlashcardWords);
    const setCurrentView = useStore(state => state.setCurrentView);
    const setNounMasterWords = useStore(state => state.setNounMasterWords);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getMasteredCount = useStore(state => state.getMasteredCount);

    const [searchQuery, setSearchQuery] = useState('');
    const [filterMode, setFilterMode] = useState('themes'); // 'themes' | 'lessons' | 'collections'
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [visibleCount, setVisibleCount] = useState(50);

    // Get ALL words (A1 + A2)
    const allWords = getAllWords();
    const allLessons = getAllLessons();

    const getAllThemedWords = () => Object.values(themedWords).flat();

    const getFilteredWords = () => {
        // If searching, search EVERYTHING (except custom collections)
        if (searchQuery.trim().length > 0) {
            return allWords.filter(w =>
                w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                w.translation.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // If NOT searching, respect the filter mode
        if (filterMode === 'themes') {
            return selectedTheme ? getWordsByTheme(selectedTheme) : getAllThemedWords();
        } else if (filterMode === 'lessons') {
            return selectedLesson ? allWords.filter(w => w.lesson === selectedLesson) : allWords;

        } else {
            return allWords;
        }
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

    const handleCollectionStudy = (words) => {
        const formattedWords = words.map(w => ({
            id: w.id,
            word: w.word.replace(/^(der|die|das)\s+/, ''),
            article: w.article || null,
            plural: w.plural || null,
            translation: w.translation,
        }));
        setFlashcardWords(formattedWords);
        setCurrentView('flashcards');
    };

    const totalThemedWords = getTotalThemedWordCount();

    return (
        <div className="app">
            {/* Hero Header with Gradient */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.08), transparent)',
                borderRadius: 20,
                padding: '16px 20px',
                marginBottom: 20,
                border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: 'var(--text-0)',
                            margin: 0,
                            letterSpacing: '-0.02em'
                        }}>
                            📚 Словник
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '4px 0 0' }}>
                            {filterMode === 'themes' ? `${totalThemedWords} слів` : `${allWords.length} слів`}
                        </p>
                    </div>
                    {/* Mini Stats */}
                    <div style={{
                        display: 'flex',
                        gap: 12,
                        padding: '10px 16px',
                        background: 'rgba(0,0,0,0.35)',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#a78bfa', lineHeight: 1 }}>
                                {getLearnedCount()}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                ПЕРЕГЛ.
                            </div>
                        </div>
                        <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', lineHeight: 1 }}>
                                {getMasteredCount()}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                ВИВЧ.
                            </div>
                        </div>
                    </div>
                </div>
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
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 14,
                        color: 'var(--text-0)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                    }}
                />
            </div>

            {/* Filter Tabs - Segmented Control */}
            <div style={{
                display: 'flex',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 14,
                padding: 4,
                marginBottom: 16,
                border: '1px solid var(--stroke)'
            }}>
                <button
                    onClick={() => setFilterMode('themes')}
                    style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: 10,
                        border: 'none',
                        background: filterMode === 'themes'
                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.2))'
                            : 'transparent',
                        color: filterMode === 'themes' ? '#a78bfa' : 'var(--text-2)',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        transition: 'all 0.2s',
                        boxShadow: filterMode === 'themes' ? '0 0 12px rgba(139, 92, 246, 0.2)' : 'none'
                    }}
                >
                    🏷️ Теми
                </button>
                <button
                    onClick={() => setFilterMode('lessons')}
                    style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: 10,
                        border: 'none',
                        background: filterMode === 'lessons'
                            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(79, 70, 229, 0.2))'
                            : 'transparent',
                        color: filterMode === 'lessons' ? '#818cf8' : 'var(--text-2)',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        transition: 'all 0.2s',
                        boxShadow: filterMode === 'lessons' ? '0 0 12px rgba(99, 102, 241, 0.2)' : 'none'
                    }}
                >
                    📖 Уроки
                </button>
                <button
                    onClick={() => setFilterMode('collections')}
                    style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: 10,
                        border: 'none',
                        background: filterMode === 'collections'
                            ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.2))'
                            : 'transparent',
                        color: filterMode === 'collections' ? '#fb923c' : 'var(--text-2)',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        transition: 'all 0.2s',
                        boxShadow: filterMode === 'collections' ? '0 0 12px rgba(251, 146, 60, 0.2)' : 'none'
                    }}
                >
                    ⭐ Набори
                </button>
            </div>

            {/* Content */}
            {filterMode === 'collections' ? (
                <CollectionManager onStartStudy={handleCollectionStudy} />
            ) : (
                <>
                    {/* Theme/Lesson Selector */}
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
                                {allLessons.map(l => (
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
                                        L{typeof l.number === 'string' ? l.number.replace('Lektion ', '') : l.number} ({String(l.id).includes('a2') ? 'A2' : 'A1'})
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
                                <div style={{ overflow: 'hidden', marginRight: 10, flex: 1 }}>
                                    <div style={{
                                        color: 'var(--text-0)',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {/* Format: Article Word, Plural */}
                                        <span style={{ color: getGenderColor(word.article) }}>
                                            {word.article ? word.article + ' ' : ''}
                                        </span>
                                        {word.word.replace(/^(der|die|das)\s+/, '')}

                                        {/* Plural suffix only, no 'pl.' label */}
                                        {word.plural && word.plural !== '-' && (
                                            <span style={{ opacity: 0.6, fontWeight: 400 }}>
                                                , {word.plural}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{
                                        color: 'var(--text-2)',
                                        fontSize: '0.8rem',
                                        marginTop: 2,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
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
                                        cursor: 'pointer',
                                        flexShrink: 0
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
                </>
            )}
        </div>
    );
};

export default DictionaryTab;
