// src/components/DictionaryTab.jsx
// Redesigned "Словник" tab - Clean, minimal with lesson filters
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { words } from '../data/lexicon';
import { lessons } from '../data/lessons';
import { Play, Search, BookOpen, ChevronRight, Volume2 } from 'lucide-react';
import { speakWord } from '../utils/speech';

const DictionaryTab = () => {
    const startAllWords = useStore(state => state.startAllWords);
    const startLessonWords = useStore(state => state.startLessonWords);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLesson, setSelectedLesson] = useState(null);

    // Filter words
    const filteredWords = words.filter(w => {
        const matchesSearch = searchQuery === '' ||
            w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
            w.translation.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLesson = selectedLesson === null || w.lesson === selectedLesson;
        return matchesSearch && matchesLesson;
    });

    // Get gender color
    const getGenderColor = (article) => {
        switch (article) {
            case 'der': return '#3b82f6';
            case 'die': return '#ec4899';
            case 'das': return '#10b981';
            default: return '#ffffff';
        }
    };

    return (
        <div className="screen">
            <div className="screen-header">
                <div>
                    <h1 className="screen-title">Wörterbuch</h1>
                    <p className="screen-subtitle">{words.length} слів • A1</p>
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

            {/* Lesson Filter Pills */}
            <div style={{
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
                paddingBottom: 'var(--space-sm)',
                marginBottom: 'var(--space-md)',
                scrollbarWidth: 'none'
            }}>
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
            </div>

            {/* Start Training Button */}
            <button
                onClick={() => selectedLesson ? startLessonWords(selectedLesson) : startAllWords()}
                style={{
                    width: '100%',
                    padding: '16px',
                    marginBottom: 'var(--space-lg)',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, #a3e635 100%)',
                    border: 'none',
                    borderRadius: 16,
                    color: 'black',
                    fontWeight: 700,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(204, 255, 0, 0.3)'
                }}
            >
                <Play size={20} />
                Вчити {selectedLesson ? `Lektion ${selectedLesson}` : 'всі слова'} ({filteredWords.length})
            </button>

            {/* Words List */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            }}>
                {filteredWords.slice(0, 50).map(word => (
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
                            {/* German word with article */}
                            <div style={{
                                color: getGenderColor(word.article),
                                fontWeight: 600,
                                fontSize: '1rem'
                            }}>
                                {word.article && <span style={{ opacity: 0.7, marginRight: 4 }}>{word.article}</span>}
                                {word.word}
                                {word.plural && <span style={{ opacity: 0.5, marginLeft: 4 }}>, {word.plural}</span>}
                            </div>
                            {/* Translation */}
                            <div style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.85rem',
                                marginTop: 2
                            }}>
                                {word.translation}
                            </div>
                        </div>

                        {/* Audio button */}
                        <button
                            onClick={() => speakWord(word.word, word.article)}
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

                {filteredWords.length > 50 && (
                    <div style={{
                        textAlign: 'center',
                        padding: 'var(--space-md)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem'
                    }}>
                        + ще {filteredWords.length - 50} слів...
                    </div>
                )}
            </div>
        </div>
    );
};

export default DictionaryTab;
