import React, { useState, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getAllWords, getWordsForLesson, lessons } from '../data/lexicon';
import { X, Search, Plus, Check, ChevronDown, BookOpen, Filter } from 'lucide-react';

const WordSelector = ({ onClose, onSelect, existingWordIds = [] }) => {
    // 'dictionary' | 'custom'
    const [activeTab, setActiveTab] = useState('dictionary');
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
    const wordInputRef = useRef(null);
    const searchInputRef = useRef(null);

    const allWords = getAllWords();

    // Get words based on filters
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

        // Clear search and keep keyboard open when adding word
        if (!selectedWords.includes(wordId)) {
            setSearch('');
            requestAnimationFrame(() => {
                setTimeout(() => {
                    searchInputRef.current?.focus();
                }, 50);
            });
        }
    };

    const handleDone = () => {
        if (selectedWords.length > 0) {
            onSelect(selectedWords, false);
        }
        onClose();
    };

    const handleCustomSubmit = (e) => {
        if (e) e.preventDefault();
        if (!customWord.word || !customWord.translation) return;

        // Add the word
        onSelect(customWord, true);

        // Reset form
        setCustomWord({ word: '', translation: '', article: '', plural: '' });

        // Keep keyboard open by focusing on word input
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (wordInputRef.current) {
                    wordInputRef.current.focus();
                    wordInputRef.current.scrollIntoView({ block: 'center' });
                }
            }, 100);
        });
    };

    const isWordSelected = (wordId) => selectedWords.includes(wordId);
    const isWordAlreadyInCollection = (wordId) => existingWordIds.includes(wordId);

    return createPortal(
        <div style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)', zIndex: 1100,
            backdropFilter: 'blur(4px)'
        }}>
            {/* Main Panel - Floating Card with Absolute Positioning */}
            <div className="glass-panel" style={{
                position: 'absolute',
                top: 16,
                bottom: 'calc(80px + 16px)', // NavHeight (80) + Margin (16)
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'min(500px, calc(100% - 32px))', // Responsive width with margins
                borderRadius: 24, // All corners rounded
                background: '#131318',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
                overflow: 'hidden'
            }}>

                {/* 1. Header (Fixed) */}
                <div style={{
                    padding: '20px 20px 0',
                    background: 'rgba(19, 19, 24, 0.95)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Додати слова</h3>
                        <button
                            onClick={onClose}
                            style={{
                                width: 36, height: 36, borderRadius: 12,
                                background: 'rgba(255,255,255,0.08)',
                                border: 'none', color: 'var(--text-2)',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* New Tabs Design */}
                    <div style={{
                        display: 'flex',
                        background: 'rgba(255,255,255,0.05)',
                        padding: 4, borderRadius: 14, marginBottom: 16
                    }}>
                        <button
                            onClick={() => setActiveTab('dictionary')}
                            style={{
                                flex: 1, padding: '10px',
                                borderRadius: 12,
                                border: 'none',
                                background: activeTab === 'dictionary' ? 'var(--surface)' : 'transparent',
                                color: activeTab === 'dictionary' ? 'white' : 'var(--text-2)',
                                fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: activeTab === 'dictionary' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                            }}
                        >
                            <BookOpen size={16} />
                            Словник
                        </button>
                        <button
                            onClick={() => setActiveTab('custom')}
                            style={{
                                flex: 1, padding: '10px',
                                borderRadius: 12,
                                border: 'none',
                                background: activeTab === 'custom' ? 'var(--surface)' : 'transparent',
                                color: activeTab === 'custom' ? 'white' : 'var(--text-2)',
                                fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: activeTab === 'custom' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                            }}
                        >
                            <Plus size={16} />
                            Своє
                        </button>
                    </div>

                    {/* Search & Filter Bar (Fixed in Header) */}
                    {activeTab === 'dictionary' && (
                        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                            <div style={{
                                flex: 1,
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 14, padding: '12px 14px',
                                display: 'flex', alignItems: 'center', gap: 10
                            }}>
                                <Search size={18} color="#7A7D8A" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder={selectedLesson ? `Пошук в уроці ${selectedLesson}...` : "Пошук слова..."}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1rem', width: '100%', outline: 'none' }}
                                />
                                {search && (
                                    <button onClick={() => setSearch('')} style={{ background: 'transparent', border: 'none', color: '#7A7D8A' }}>
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setShowLessonDropdown(!showLessonDropdown)}
                                    style={{
                                        height: '100%', aspectRatio: '1/1',
                                        background: selectedLesson ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)',
                                        borderRadius: 14,
                                        border: selectedLesson ? '1px solid rgba(139,92,246,0.5)' : 'none',
                                        color: selectedLesson ? '#a78bfa' : 'var(--text-2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Filter size={20} />
                                    {selectedLesson && (
                                        <div style={{
                                            position: 'absolute', top: -4, right: -4,
                                            background: '#8b5cf6', width: 10, height: 10, borderRadius: '50%',
                                            border: '2px solid #131318'
                                        }} />
                                    )}
                                </button>

                                {/* Dropdown */}
                                {showLessonDropdown && (
                                    <div style={{
                                        position: 'absolute', top: '110%', right: 0,
                                        width: 200, background: '#252530',
                                        borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                        zIndex: 20, maxHeight: 300, overflowY: 'auto',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div
                                            onClick={() => { setSelectedLesson(null); setShowLessonDropdown(false); }}
                                            style={{
                                                padding: '12px 16px', cursor: 'pointer',
                                                background: !selectedLesson ? 'rgba(139,92,246,0.15)' : 'transparent',
                                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            Всі слова
                                        </div>
                                        {lessons.map(l => (
                                            <div
                                                key={l.id}
                                                onClick={() => { setSelectedLesson(l.id); setShowLessonDropdown(false); }}
                                                style={{
                                                    padding: '12px 16px', cursor: 'pointer',
                                                    background: selectedLesson === l.id ? 'rgba(139,92,246,0.15)' : 'transparent',
                                                    fontSize: '0.95rem',
                                                    color: selectedLesson === l.id ? 'white' : 'var(--text-2)'
                                                }}
                                            >
                                                Урок {l.id}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Content Area (Scrollable) */}
                <div style={{
                    flex: '1 1 auto',
                    overflowY: 'auto',
                    padding: '0 20px 20px 20px', // Normal padding
                    minHeight: 150, // Prevent collapse
                    WebkitOverflowScrolling: 'touch'
                }}>

                    {activeTab === 'dictionary' ? (
                        <>
                            {/* Results Count */}
                            <div style={{
                                fontSize: '0.85rem', color: 'var(--text-2)',
                                marginBottom: 12, display: 'flex', justifyContent: 'space-between', padding: '0 4px'
                            }}>
                                <span>{displayWords.length} слів знайдено</span>
                                {selectedWords.length > 0 && <span style={{ color: '#8b5cf6', fontWeight: 600 }}> Обрано: {selectedWords.length}</span>}
                            </div>

                            {/* List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {displayWords.map(word => {
                                    const alreadyAdded = isWordAlreadyInCollection(word.id);
                                    const selected = isWordSelected(word.id);

                                    return (
                                        <button
                                            key={word.id}
                                            onClick={() => !alreadyAdded && toggleWordSelection(word.id)}
                                            disabled={alreadyAdded}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 14,
                                                padding: '14px 16px',
                                                background: selected ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
                                                border: selected ? '1px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.06)',
                                                borderRadius: 16, cursor: alreadyAdded ? 'default' : 'pointer',
                                                textAlign: 'left',
                                                opacity: alreadyAdded ? 0.5 : 1,
                                                transform: selected ? 'scale(0.99)' : 'scale(1)',
                                                transition: 'all 0.1s'
                                            }}
                                        >
                                            <div style={{
                                                width: 24, height: 24, borderRadius: 8,
                                                background: selected ? '#8b5cf6' : 'rgba(255,255,255,0.1)',
                                                border: selected ? 'none' : '1px solid rgba(255,255,255,0.2)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                {selected && <Check size={16} color="white" strokeWidth={3} />}
                                                {alreadyAdded && <Check size={16} color="#aaa" strokeWidth={3} />}
                                            </div>

                                            <div style={{ flex: 1 }}>
                                                <div style={{ color: 'white', fontWeight: 600, fontSize: '1rem', marginBottom: 2 }}>
                                                    {word.article && <span style={{ color: '#a78bfa', marginRight: 6, fontWeight: 500 }}>{word.article}</span>}
                                                    {word.word}
                                                </div>
                                                <div style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>{word.translation}</div>
                                            </div>
                                        </button>
                                    );
                                })}

                                {displayWords.length === 0 && (
                                    <div style={{ textAlign: 'center', color: 'var(--text-2)', marginTop: 40 }}>
                                        Не знайдено слів 🕵️‍♂️
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        /* Custom Word Form */
                        <form onSubmit={handleCustomSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>
                            <div style={{
                                padding: 16, background: 'rgba(255,255,255,0.03)',
                                borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)',
                                marginBottom: 16
                            }}>
                                <p style={{ margin: '0 0 12px', fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                                    💡 Додайте власне слово. Воно збережеться тільки у вашому колекції.
                                </p>
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 8, fontSize: '0.9rem', paddingLeft: 4 }}>Слово (DE) *</label>
                                <input
                                    ref={wordInputRef}
                                    required
                                    value={customWord.word}
                                    onChange={e => setCustomWord({ ...customWord, word: e.target.value })}
                                    placeholder="Наприклад: Tisch"
                                    style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, color: 'white', outline: 'none', fontSize: '1.1rem' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div style={{ position: 'relative' }}>
                                    <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 8, fontSize: '0.9rem', paddingLeft: 4 }}>Артикль</label>
                                    <select
                                        value={customWord.article}
                                        onChange={e => setCustomWord({ ...customWord, article: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            paddingRight: '36px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 14,
                                            color: 'white',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            appearance: 'none',
                                            WebkitAppearance: 'none',
                                            MozAppearance: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option value="" style={{ background: '#252530' }}>(немає)</option>
                                        <option value="der" style={{ background: '#252530', color: '#4A90E2' }}>der</option>
                                        <option value="die" style={{ background: '#252530', color: '#E94B5A' }}>die</option>
                                        <option value="das" style={{ background: '#252530', color: '#2ECC71' }}>das</option>
                                    </select>
                                    <ChevronDown
                                        size={18}
                                        style={{
                                            position: 'absolute',
                                            right: 12,
                                            top: '50%',
                                            marginTop: 4,
                                            color: 'var(--text-2)',
                                            pointerEvents: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 8, fontSize: '0.9rem', paddingLeft: 4 }}>Множина</label>
                                    <input
                                        value={customWord.plural}
                                        onChange={e => setCustomWord({ ...customWord, plural: e.target.value })}
                                        placeholder="die Tische"
                                        style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, color: 'white', outline: 'none', fontSize: '1rem' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-2)', marginBottom: 8, fontSize: '0.9rem', paddingLeft: 4 }}>Переклад (UA) *</label>
                                <input
                                    required
                                    value={customWord.translation}
                                    onChange={e => setCustomWord({ ...customWord, translation: e.target.value })}
                                    placeholder="Наприклад: Стіл"
                                    style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, color: 'white', outline: 'none', fontSize: '1.1rem' }}
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleCustomSubmit}
                                style={{
                                    marginTop: 24,
                                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', color: 'white',
                                    border: 'none', padding: '16px', borderRadius: 16,
                                    fontWeight: 700, fontSize: '1rem',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                    boxShadow: '0 8px 20px rgba(139,92,246,0.3)'
                                }}
                            >
                                <Plus size={20} strokeWidth={3} />
                                Додати слово
                            </button>
                        </form>
                    )}
                </div>

                {/* 3. Footer Actions (Static Flex Item) */}
                {activeTab === 'dictionary' && (
                    <div style={{
                        width: '100%',
                        padding: '16px 20px 20px',
                        background: 'linear-gradient(to top, #131318 80%, rgba(19,19,24,0) 100%)',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex', gap: 12,
                        zIndex: 20,
                        flexShrink: 0
                    }}>
                        <button
                            onClick={onClose}
                            style={{
                                flex: 1, padding: '16px',
                                background: 'rgba(233, 75, 90, 0.1)',
                                border: '1px solid rgba(233, 75, 90, 0.3)',
                                borderRadius: 16, color: '#ff5e6d',
                                fontWeight: 600, cursor: 'pointer', fontSize: '1rem'
                            }}
                        >
                            Скасувати
                        </button>
                        <button
                            onClick={handleDone}
                            disabled={selectedWords.length === 0}
                            style={{
                                flex: 2, padding: '16px',
                                background: selectedWords.length > 0
                                    ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                                    : 'rgba(255,255,255,0.1)',
                                border: 'none', borderRadius: 16,
                                color: selectedWords.length > 0 ? 'white' : 'rgba(255,255,255,0.4)',
                                fontWeight: 700, cursor: selectedWords.length > 0 ? 'pointer' : 'default',
                                fontSize: '1rem',
                                boxShadow: selectedWords.length > 0 ? '0 8px 24px rgba(139,92,246,0.4)' : 'none',
                                opacity: selectedWords.length > 0 ? 1 : 0.6
                            }}
                        >
                            {selectedWords.length > 0
                                ? `Додати ${selectedWords.length}`
                                : 'Виберіть слова'
                            }
                        </button>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default WordSelector;
