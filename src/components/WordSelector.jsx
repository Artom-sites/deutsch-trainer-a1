import React, { useState, useMemo } from 'react';
import { getAllWords, getWordsForLesson, lessons } from '../data/lexicon';
import { X, Search, Plus, Check, ChevronDown, BookOpen } from 'lucide-react';

const WordSelector = ({ onClose, onSelect, existingWordIds = [] }) => {
    const [mode, setMode] = useState('search'); // 'search' | 'lesson' | 'custom'
    const [search, setSearch] = useState('');
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [showLessonDropdown, setShowLessonDropdown] = useState(false);

    // Multi-select state
    const [selectedWords, setSelectedWords] = useState([]);

    // Custom word form
    const [customWord, setCustomWord] = useState({
        word: '',
        translation: '',
        article: '',
        plural: ''
    });

    const allWords = getAllWords();

    // Get words based on mode
    const displayWords = useMemo(() => {
        let words = selectedLesson
            ? getWordsForLesson(selectedLesson)
            : allWords;

        if (search) {
            words = words.filter(w =>
                w.word.toLowerCase().includes(search.toLowerCase()) ||
                w.translation.toLowerCase().includes(search.toLowerCase())
            );
        }

        return words.slice(0, 100); // Limit results
    }, [selectedLesson, search, allWords]);

    const toggleWordSelection = (wordId) => {
        setSelectedWords(prev =>
            prev.includes(wordId)
                ? prev.filter(id => id !== wordId)
                : [...prev, wordId]
        );
    };

    const handleDone = () => {
        if (selectedWords.length > 0) {
            // Pass all selected words at once
            onSelect(selectedWords, false);
        }
        onClose();
    };

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        if (!customWord.word || !customWord.translation) return;

        onSelect(customWord, true); // true = isCustom
        // Reset form but stay open for more
        setCustomWord({ word: '', translation: '', article: '', plural: '' });
    };

    const isWordSelected = (wordId) => selectedWords.includes(wordId);
    const isWordAlreadyInCollection = (wordId) => existingWordIds.includes(wordId);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.85)', zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16
        }}>
            <div className="glass-panel" style={{
                width: '100%', maxWidth: 500, height: '85vh',
                display: 'flex', flexDirection: 'column',
                background: '#1a1a22', borderRadius: 24, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                {/* Header with tabs */}
                <div style={{
                    padding: '16px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                        <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600 }}>Додати слова</h3>
                        <button
                            onClick={onClose}
                            style={{
                                width: 32, height: 32, borderRadius: 8,
                                background: 'rgba(255,255,255,0.06)',
                                border: 'none', color: 'var(--text-2)',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Mode tabs - pill style */}
                    <div style={{
                        display: 'flex', gap: 6,
                        background: 'rgba(255,255,255,0.04)',
                        padding: 4, borderRadius: 14
                    }}>
                        <button
                            onClick={() => { setMode('search'); setSelectedLesson(null); }}
                            style={{
                                flex: 1,
                                background: mode === 'search' && !selectedLesson ? 'rgba(139,92,246,0.25)' : 'transparent',
                                color: mode === 'search' && !selectedLesson ? 'white' : 'var(--text-2)',
                                border: 'none',
                                padding: '10px 12px', borderRadius: 10,
                                fontWeight: 500, cursor: 'pointer', fontSize: '0.85rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                            }}
                        >
                            <Search size={14} />
                            Пошук
                        </button>

                        {/* Lesson dropdown */}
                        <div style={{ flex: 1, position: 'relative' }}>
                            <button
                                onClick={() => setShowLessonDropdown(!showLessonDropdown)}
                                style={{
                                    width: '100%',
                                    background: selectedLesson ? 'rgba(139,92,246,0.25)' : 'transparent',
                                    color: selectedLesson ? 'white' : 'var(--text-2)',
                                    border: 'none',
                                    padding: '10px 12px', borderRadius: 10,
                                    fontWeight: 500, cursor: 'pointer', fontSize: '0.85rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                                }}
                            >
                                <BookOpen size={14} />
                                {selectedLesson ? `Урок ${selectedLesson}` : 'Лекція'}
                                <ChevronDown size={12} />
                            </button>

                            {showLessonDropdown && (
                                <div style={{
                                    position: 'absolute', top: '100%', left: '50%',
                                    transform: 'translateX(-50%)',
                                    marginTop: 6, background: '#252530',
                                    borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                                    zIndex: 10, maxHeight: 280, overflowY: 'auto',
                                    minWidth: 140, border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div
                                        onClick={() => { setSelectedLesson(null); setShowLessonDropdown(false); setMode('search'); }}
                                        style={{
                                            padding: '10px 14px', cursor: 'pointer',
                                            background: !selectedLesson ? 'rgba(139,92,246,0.15)' : 'transparent',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Всі слова
                                    </div>
                                    {lessons.map(l => (
                                        <div
                                            key={l.id}
                                            onClick={() => { setSelectedLesson(l.id); setShowLessonDropdown(false); setMode('search'); }}
                                            style={{
                                                padding: '10px 14px', cursor: 'pointer',
                                                background: selectedLesson === l.id ? 'rgba(139,92,246,0.15)' : 'transparent',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            Урок {l.id}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setMode('custom')}
                            style={{
                                flex: 1,
                                background: mode === 'custom' ? 'rgba(139,92,246,0.25)' : 'transparent',
                                color: mode === 'custom' ? 'white' : 'var(--text-2)',
                                border: 'none',
                                padding: '10px 12px', borderRadius: 10,
                                fontWeight: 500, cursor: 'pointer', fontSize: '0.85rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                            }}
                        >
                            <Plus size={14} />
                            Своє
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
                    {mode !== 'custom' ? (
                        <>
                            {/* Search input */}
                            <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 12, padding: '10px 14px',
                                display: 'flex', alignItems: 'center', gap: 10,
                                marginBottom: 16
                            }}>
                                <Search size={18} color="#7A7D8A" />
                                <input
                                    type="text"
                                    placeholder={selectedLesson ? `Пошук в уроці ${selectedLesson}...` : "Пошук слова..."}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '0.95rem', width: '100%', outline: 'none' }}
                                    autoFocus
                                />
                                {search && (
                                    <button onClick={() => setSearch('')} style={{ background: 'transparent', border: 'none', color: '#7A7D8A', cursor: 'pointer' }}>
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            {/* Word count info */}
                            <div style={{
                                fontSize: '0.8rem', color: 'var(--text-2)',
                                marginBottom: 12, display: 'flex', justifyContent: 'space-between'
                            }}>
                                <span>{displayWords.length} слів{selectedLesson ? ` в уроці ${selectedLesson}` : ''}</span>
                                {selectedWords.length > 0 && (
                                    <span style={{ color: '#8b5cf6' }}>Вибрано: {selectedWords.length}</span>
                                )}
                            </div>

                            {/* Word list with checkboxes */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {displayWords.map(word => {
                                    const alreadyAdded = isWordAlreadyInCollection(word.id);
                                    const selected = isWordSelected(word.id);

                                    return (
                                        <button
                                            key={word.id}
                                            onClick={() => !alreadyAdded && toggleWordSelection(word.id)}
                                            disabled={alreadyAdded}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 12,
                                                padding: '12px 14px',
                                                background: selected ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.02)',
                                                border: selected ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.05)',
                                                borderRadius: 14, cursor: alreadyAdded ? 'default' : 'pointer',
                                                textAlign: 'left',
                                                opacity: alreadyAdded ? 0.4 : 1
                                            }}
                                        >
                                            {/* Checkbox */}
                                            <div style={{
                                                width: 22, height: 22, borderRadius: 6,
                                                background: selected ? '#8b5cf6' : 'rgba(255,255,255,0.1)',
                                                border: selected ? 'none' : '1px solid rgba(255,255,255,0.2)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                {selected && <Check size={14} color="white" strokeWidth={3} />}
                                                {alreadyAdded && <Check size={14} color="#666" strokeWidth={3} />}
                                            </div>

                                            <div style={{ flex: 1 }}>
                                                <div style={{ color: 'white', fontWeight: 500, fontSize: '0.95rem' }}>
                                                    {word.article && <span style={{ color: '#8b5cf6', marginRight: 6 }}>{word.article}</span>}
                                                    {word.word}
                                                </div>
                                                <div style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{word.translation}</div>
                                            </div>

                                            {alreadyAdded && (
                                                <span style={{ fontSize: '0.75rem', color: '#666' }}>Додано</span>
                                            )}
                                        </button>
                                    );
                                })}

                                {displayWords.length === 0 && (
                                    <div style={{ textAlign: 'center', color: 'var(--text-2)', marginTop: 40, padding: 20 }}>
                                        {search ? 'Слів не знайдено' : 'Немає слів'}
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        /* Custom word form */
                        <form onSubmit={handleCustomSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <p style={{ color: 'var(--text-2)', fontSize: '0.85rem', margin: '0 0 8px' }}>
                                Додайте своє слово. Форма залишиться відкритою для наступного.
                            </p>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 6, fontSize: '0.85rem' }}>Слово (німецькою) *</label>
                                <input
                                    required
                                    value={customWord.word}
                                    onChange={e => setCustomWord({ ...customWord, word: e.target.value })}
                                    placeholder="Tisch"
                                    style={{ width: '100%', padding: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none', fontSize: '1rem' }}
                                    autoFocus
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 6, fontSize: '0.85rem' }}>Артикль</label>
                                    <select
                                        value={customWord.article}
                                        onChange={e => setCustomWord({ ...customWord, article: e.target.value })}
                                        style={{ width: '100%', padding: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                    >
                                        <option value="">-</option>
                                        <option value="der">der</option>
                                        <option value="die">die</option>
                                        <option value="das">das</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 6, fontSize: '0.85rem' }}>Множина</label>
                                    <input
                                        value={customWord.plural}
                                        onChange={e => setCustomWord({ ...customWord, plural: e.target.value })}
                                        placeholder="die Tische"
                                        style={{ width: '100%', padding: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 6, fontSize: '0.85rem' }}>Переклад *</label>
                                <input
                                    required
                                    value={customWord.translation}
                                    onChange={e => setCustomWord({ ...customWord, translation: e.target.value })}
                                    placeholder="Стіл"
                                    style={{ width: '100%', padding: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none', fontSize: '1rem' }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    marginTop: 8,
                                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', color: 'white',
                                    border: 'none', padding: 14, borderRadius: 14,
                                    fontWeight: 600, fontSize: '0.95rem',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                    boxShadow: '0 0 20px rgba(139,92,246,0.3)'
                                }}
                            >
                                <Plus size={18} />
                                Додати слово
                            </button>
                        </form>
                    )}
                </div>

                {/* Bottom action bar - only show for search/lesson mode */}
                {mode !== 'custom' && (
                    <div style={{
                        padding: 16, borderTop: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', gap: 12
                    }}>
                        <button
                            onClick={onClose}
                            style={{
                                flex: 1, padding: 14,
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 14, color: 'var(--text-2)',
                                fontWeight: 500, cursor: 'pointer', fontSize: '0.95rem'
                            }}
                        >
                            Скасувати
                        </button>
                        <button
                            onClick={handleDone}
                            disabled={selectedWords.length === 0}
                            style={{
                                flex: 2, padding: 14,
                                background: selectedWords.length > 0
                                    ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                                    : 'rgba(255,255,255,0.05)',
                                border: 'none', borderRadius: 14,
                                color: selectedWords.length > 0 ? 'white' : 'var(--text-2)',
                                fontWeight: 600, cursor: selectedWords.length > 0 ? 'pointer' : 'default',
                                fontSize: '0.95rem',
                                boxShadow: selectedWords.length > 0 ? '0 0 20px rgba(139,92,246,0.3)' : 'none'
                            }}
                        >
                            {selectedWords.length > 0
                                ? `Додати ${selectedWords.length} ${selectedWords.length === 1 ? 'слово' : 'слів'}`
                                : 'Виберіть слова'
                            }
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WordSelector;
