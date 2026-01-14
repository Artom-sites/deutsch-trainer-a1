import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import { getAllWords } from '../data/lexicon';
import { Plus, Folder, Trash2, ChevronRight, ArrowLeft, Play, MoreVertical } from 'lucide-react';
import WordSelector from './WordSelector';
import useStore from '../store/useStore';

const CollectionManager = ({ onStartStudy }) => {
    const collections = useAuthStore(state => state.collections);
    const createCollection = useAuthStore(state => state.createCollection);
    const deleteCollection = useAuthStore(state => state.deleteCollection);
    const addToCollection = useAuthStore(state => state.addToCollection);
    const removeFromCollection = useAuthStore(state => state.removeFromCollection);

    const [view, setView] = useState('list'); // 'list' | 'detail' | 'create'
    const [activeCollection, setActiveCollection] = useState(null);
    const [showWordSelector, setShowWordSelector] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');

    const allWords = getAllWords();

    const handleCreate = (e) => {
        e.preventDefault();
        if (newCollectionName.trim()) {
            createCollection(newCollectionName.trim(), '📁');
            setNewCollectionName('');
            setView('list');
        }
    };

    const openCollection = (collection) => {
        setActiveCollection(collection);
        setView('detail');
    };

    const handleAddWord = (wordOrId, isCustom) => {
        if (activeCollection) {
            addToCollection(activeCollection.id, wordOrId, isCustom);
        }
    };

    if (view === 'create') {
        return (
            <div className="fade-in">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <button onClick={() => setView('list')} className="btn-icon">
                        <ArrowLeft size={24} />
                    </button>
                    <h2>Новий набір</h2>
                </div>
                <form onSubmit={handleCreate}>
                    <label style={{ display: 'block', marginBottom: 8, color: 'var(--text-secondary)' }}>Назва папки</label>
                    <input
                        className="input-field"
                        value={newCollectionName}
                        onChange={e => setNewCollectionName(e.target.value)}
                        placeholder="Наприклад: Подорож"
                        autoFocus
                        style={{ width: '100%', padding: 16, marginBottom: 24 }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Створити
                    </button>
                </form>
            </div>
        );
    }

    if (view === 'detail' && activeCollection) {
        // Re-fetch collection from store to get latest updates
        const currentCollection = collections.find(c => c.id === activeCollection.id) || activeCollection;

        // Resolve words - CUSTOM WORDS FIRST
        const resolvedWords = [
            ...currentCollection.customWords,
            ...currentCollection.wordIds.map(id => allWords.find(w => w.id === id)).filter(Boolean)
        ];

        return (
            <div className="fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <button
                            onClick={() => setView('list')}
                            style={{
                                width: 40, height: 40, borderRadius: 12,
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'white', cursor: 'pointer'
                            }}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{currentCollection.name}</h2>
                    </div>
                    <button
                        onClick={() => setShowDeleteConfirm(true)}
                        style={{
                            width: 40, height: 40, borderRadius: 12,
                            background: 'rgba(233, 75, 90, 0.1)',
                            border: '1px solid rgba(233, 75, 90, 0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#E94B5A', cursor: 'pointer'
                        }}
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* Delete Confirmation Modal */}
                {showDeleteConfirm && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.8)', zIndex: 200,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: 20
                    }}>
                        <div style={{
                            background: '#1c1c24', borderRadius: 20, padding: 24,
                            maxWidth: 320, width: '100%', textAlign: 'center',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <Trash2 size={40} color="#E94B5A" style={{ marginBottom: 16 }} />
                            <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Видалити набір?</h3>
                            <p style={{ color: 'var(--text-2)', margin: '0 0 24px', fontSize: '0.9rem' }}>
                                «{currentCollection.name}» буде видалено назавжди
                            </p>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    style={{
                                        flex: 1, padding: 14, borderRadius: 12,
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        color: 'white', fontWeight: 500, cursor: 'pointer'
                                    }}
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={() => {
                                        deleteCollection(currentCollection.id);
                                        setShowDeleteConfirm(false);
                                        setView('list');
                                    }}
                                    style={{
                                        flex: 1, padding: 14, borderRadius: 12,
                                        background: '#E94B5A',
                                        border: 'none',
                                        color: 'white', fontWeight: 600, cursor: 'pointer'
                                    }}
                                >
                                    Видалити
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats & Actions */}
                <div style={{
                    background: 'var(--bg-card)', padding: 16, borderRadius: 16, marginBottom: 24,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{resolvedWords.length}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>слів</div>
                    </div>
                    <button
                        className="btn btn-primary"
                        disabled={resolvedWords.length === 0}
                        onClick={() => onStartStudy && onStartStudy(resolvedWords)}
                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                    >
                        <Play size={16} style={{ marginRight: 6 }} />
                        Вчити
                    </button>
                </div>

                {/* Word List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 80 }}>
                    {resolvedWords.map((word, idx) => (
                        <div key={idx} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '12px 16px', background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12
                        }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>
                                    {word.article && <span style={{ color: '#F26A1B', marginRight: 4 }}>{word.article}</span>}
                                    {word.word}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{word.translation}</div>
                            </div>
                            <button
                                onClick={() => removeFromCollection(currentCollection.id, word.id || word.word, !!word.plural)} // Creating a heuristic for isCustom if needed, but better check ID format
                                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)' }}
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => setShowWordSelector(true)}
                        style={{
                            padding: 16, background: 'rgba(255,255,255,0.05)',
                            border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 12,
                            color: 'var(--text-secondary)', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                        }}
                    >
                        <Plus size={20} />
                        Додати слово
                    </button>
                </div>

                {showWordSelector && (
                    <WordSelector
                        onClose={() => setShowWordSelector(false)}
                        onSelect={handleAddWord}
                        existingWordIds={currentCollection.wordIds}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button
                    onClick={() => setView('create')}
                    style={{
                        padding: 16, background: 'var(--primary)',
                        border: 'none', borderRadius: 16,
                        color: 'white', fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        marginBottom: 12
                    }}
                >
                    <Plus size={20} />
                    Створити набір
                </button>

                {collections.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
                        <Folder size={48} style={{ opacity: 0.2, marginBottom: 16 }} />
                        <p>У вас ще немає власних наборів</p>
                    </div>
                ) : (
                    collections.map(c => (
                        <div
                            key={c.id}
                            onClick={() => openCollection(c)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 16,
                                padding: 16, background: 'var(--bg-card)',
                                borderRadius: 16, cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: 48, height: 48, borderRadius: 12,
                                background: 'rgba(242, 106, 27, 0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>
                                {c.icon || '📁'}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, fontSize: '1rem' }}>{c.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    {c.wordIds.length + c.customWords.length} слів
                                </div>
                            </div>
                            <ChevronRight size={20} color="var(--text-muted)" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// Helper Icon for Remove (reusing X from lucide imported globally or locally)
import { X } from 'lucide-react';

export default CollectionManager;
