import React, { useState } from 'react';
import { getAllWords } from '../data/lexicon';
import { X, Search, Plus, Check } from 'lucide-react';

const WordSelector = ({ onClose, onSelect }) => {
    const [mode, setMode] = useState('search'); // 'search' | 'custom'
    const [search, setSearch] = useState('');

    // Custom word form
    const [customWord, setCustomWord] = useState({
        word: '',
        translation: '',
        article: '',
        plural: ''
    });

    const allWords = getAllWords();
    const filteredWords = allWords.filter(w =>
        w.word.toLowerCase().includes(search.toLowerCase()) ||
        w.translation.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 50); // Limit results

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        if (!customWord.word || !customWord.translation) return;

        onSelect(customWord, true); // true = isCustom
        onClose();
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20
        }}>
            <div className="glass-panel" style={{
                width: '100%', maxWidth: 500, height: '80vh',
                display: 'flex', flexDirection: 'column',
                background: '#1c1c24', borderRadius: 24, overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: 20, borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <button
                            onClick={() => setMode('search')}
                            style={{
                                background: mode === 'search' ? 'var(--primary)' : 'transparent',
                                color: mode === 'search' ? 'white' : 'var(--text-secondary)',
                                border: 'none', padding: '8px 16px', borderRadius: 20,
                                fontWeight: 600, cursor: 'pointer'
                            }}
                        >
                            Пошук
                        </button>
                        <button
                            onClick={() => setMode('custom')}
                            style={{
                                background: mode === 'custom' ? 'var(--primary)' : 'transparent',
                                color: mode === 'custom' ? 'white' : 'var(--text-secondary)',
                                border: 'none', padding: '8px 16px', borderRadius: 20,
                                fontWeight: 600, cursor: 'pointer'
                            }}
                        >
                            Своє слово
                        </button>
                    </div>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
                    {mode === 'search' ? (
                        <>
                            <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 12, padding: '12px 16px',
                                display: 'flex', alignItems: 'center', gap: 12,
                                marginBottom: 20
                            }}>
                                <Search size={20} color="#7A7D8A" />
                                <input
                                    type="text"
                                    placeholder="Пошук слова..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1rem', width: '100%', outline: 'none' }}
                                    autoFocus
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {filteredWords.map(word => (
                                    <button
                                        key={word.id}
                                        onClick={() => { onSelect(word.id, false); onClose(); }}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: 16, background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            borderRadius: 16, cursor: 'pointer', textAlign: 'left'
                                        }}
                                    >
                                        <div>
                                            <div style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>
                                                {word.article && <span style={{ color: '#F26A1B', marginRight: 6 }}>{word.article}</span>}
                                                {word.word}
                                            </div>
                                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{word.translation}</div>
                                        </div>
                                        <Plus size={20} color="#2ECC71" />
                                    </button>
                                ))}
                                {filteredWords.length === 0 && (
                                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 40 }}>
                                        Слів не знайдено
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleCustomSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: 8, fontSize: '0.9rem' }}>Слово (німецькою)</label>
                                <input
                                    required
                                    className="input-field"
                                    value={customWord.word}
                                    onChange={e => setCustomWord({ ...customWord, word: e.target.value })}
                                    placeholder="Tisch"
                                    style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: 8, fontSize: '0.9rem' }}>Артикль</label>
                                    <select
                                        value={customWord.article}
                                        onChange={e => setCustomWord({ ...customWord, article: e.target.value })}
                                        style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                    >
                                        <option value="">-</option>
                                        <option value="der">der</option>
                                        <option value="die">die</option>
                                        <option value="das">das</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: 8, fontSize: '0.9rem' }}>Множина</label>
                                    <input
                                        value={customWord.plural}
                                        onChange={e => setCustomWord({ ...customWord, plural: e.target.value })}
                                        placeholder="die Tische"
                                        style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: 8, fontSize: '0.9rem' }}>Переклад</label>
                                <input
                                    required
                                    className="input-field"
                                    value={customWord.translation}
                                    onChange={e => setCustomWord({ ...customWord, translation: e.target.value })}
                                    placeholder="Стіл"
                                    style={{ width: '100%', padding: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', outline: 'none' }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    marginTop: 20,
                                    background: 'var(--primary)', color: 'white',
                                    border: 'none', padding: 16, borderRadius: 16,
                                    fontWeight: 700, fontSize: '1rem',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                                }}
                            >
                                <Check size={20} />
                                Додати
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WordSelector;
