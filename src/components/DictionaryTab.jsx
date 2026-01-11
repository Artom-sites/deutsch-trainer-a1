// src/components/DictionaryTab.jsx
// "Словник" tab - Filter by themes OR lessons
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
    const [filterMode, setFilterMode] = useState('themes'); // 'themes' | 'lessons'
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [visibleCount, setVisibleCount] = useState(50);

    // Get all themed words flattened
    const getAllThemedWords = () => Object.values(themedWords).flat();

    // Get filtered words based on mode
    const getFilteredWords = () => {
        let wordsToFilter;

        if (filterMode === 'themes') {
            wordsToFilter = selectedTheme
                ? getWordsByTheme(selectedTheme)
                : getAllThemedWords();
        } else {
            wordsToFilter = selectedLesson
                ? words.filter(w => w.lesson === selectedLesson)
                : words;
        }

        if (searchQuery === '') return wordsToFilter;

        return wordsToFilter.filter(w =>
            w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
            w.translation.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredWords = getFilteredWords();

    // Get gender color
    const getGenderColor = (article) => {
        switch (article) {
            case 'der': return '#4A90E2';
            case 'die': return '#E94B5A';
            case 'das': return '#2ECC71';
            default: return '#E5E7EB';
        }
    };

    // Start flashcards
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

    // Start NounMaster
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
        <div className="screen">
            <div className="screen-header">
                <div>
                    <h1 className="screen-title">Wörterbuch</h1>
                    <p className="screen-subtitle">
                        {filterMode === 'themes' ? `${totalThemedWords} слів за темами` : `${words.length} слів з лекцій`}
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div style={{
                position: 'relative',
                marginBottom: 'var(--space-md)'
            }}>
                <Search
                    size={20}
                    style={{
                        position: 'absolute',
                        left: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--text-secondary)'
                    }}
                />
                <input
                    type="text"
                    placeholder="Пошук слова..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '14px 16px 14px 48px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 16,
                        color: 'white',
                        fontSize: '1rem'
                    }}
                />
            </div>

            {/* Mode Toggle: Themes vs Lessons */}
            <div style={{
                display: 'flex',
                gap: 8,
                marginBottom: 'var(--space-md)'
            }}>
                <button
                    onClick={() => { setFilterMode('themes'); setSelectedLesson(null); }}
                    style={{
                        flex: 1,
                        padding: '10px 16px',
                        borderRadius: 12,
                        border: 'none',
                        background: filterMode === 'themes' ? 'var(--color-accent)' : 'rgba(255,255,255,0.08)',
                        color: filterMode === 'themes' ? 'black' : 'white',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                    }}
                >
                    За темами
                </button>
                <button
                    onClick={() => { setFilterMode('lessons'); setSelectedTheme(null); }}
                    style={{
                        flex: 1,
                        padding: '10px 16px',
                        borderRadius: 12,
                        border: 'none',
                        background: filterMode === 'lessons' ? 'var(--color-accent)' : 'rgba(255,255,255,0.08)',
                        color: filterMode === 'lessons' ? 'black' : 'white',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                    }}
                >
                    За лекціями
                </button>
            </div>

            {/* Filter Pills */}
            <div style={{
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
                paddingBottom: 'var(--space-sm)',
                marginBottom: 'var(--space-md)',
                scrollbarWidth: 'none'
            }}>
                {filterMode === 'themes' ? (
                    <>
                        <button
                            onClick={() => setSelectedTheme(null)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: 20,
                                border: 'none',
                                background: selectedTheme === null ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: selectedTheme === null ? 'black' : 'white',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer'
                            }}
                        >
                            Всі
                        </button>
                        {vocabularyThemes.map(theme => (
                            <button
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: 20,
                                    border: 'none',
                                    background: selectedTheme === theme.id ? theme.color : 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer'
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
                                padding: '8px 16px',
                                borderRadius: 20,
                                border: 'none',
                                background: selectedLesson === null ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: selectedLesson === null ? 'black' : 'white',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer'
                            }}
                        >
                            Всі
                        </button>
                        {lessons.map(l => (
                            <button
                                key={l.id}
                                onClick={() => setSelectedLesson(l.id)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: 20,
                                    border: 'none',
                                    background: selectedLesson === l.id ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                    color: selectedLesson === l.id ? 'black' : 'white',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer'
                                }}
                            >
                                L{l.id}
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 'var(--space-md)'
            }}>
                <button
                    onClick={startFlashcards}
                    style={{
                        padding: '14px 16px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 16,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        cursor: 'pointer'
                    }}
                >
                    <Eye size={18} />
                    Переглянути
                </button>
                <button
                    onClick={startNounMaster}
                    style={{
                        padding: '14px 16px',
                        background: 'rgba(242, 106, 27, 0.15)',
                        border: '1px solid rgba(242, 106, 27, 0.3)',
                        borderRadius: 16,
                        color: '#F26A1B',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        cursor: 'pointer'
                    }}
                >
                    <Dumbbell size={18} />
                    Вивчати
                </button>
            </div>

            {/* Words Count */}
            <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-sm)'
            }}>
                {filteredWords.length} слів
            </div>

            {/* Words List */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            }}>
                {filteredWords.slice(0, visibleCount).map(word => (
                    <div
                        key={word.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: 12
                        }}
                    >
                        <div>
                            <div style={{
                                color: getGenderColor(word.article),
                                fontWeight: 600,
                                fontSize: '1rem'
                            }}>
                                {word.article && <span style={{ opacity: 0.7, marginRight: 4 }}>{word.article}</span>}
                                {word.word.replace(/^(der|die|das)\s+/, '')}
                                {word.plural && <span style={{ opacity: 0.5, marginLeft: 4 }}>, {word.plural}</span>}
                            </div>
                            <div style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.85rem',
                                marginTop: 2
                            }}>
                                {word.translation}
                            </div>
                        </div>

                        <button
                            onClick={() => speakWord(word.word.replace(/^(der|die|das)\s+/, ''), word.article)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: 'none',
                                borderRadius: '50%',
                                width: 36,
                                height: 36,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <Volume2 size={18} color="var(--text-secondary)" />
                        </button>
                    </div>
                ))}

                {filteredWords.length > visibleCount && (
                    <button
                        onClick={() => setVisibleCount(prev => prev + 50)}
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            padding: 'var(--space-md)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 12,
                            color: 'var(--color-accent)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer'
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
