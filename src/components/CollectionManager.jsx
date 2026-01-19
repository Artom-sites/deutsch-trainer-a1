import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import { getAllWords } from '../data/lexicon';
import { Plus, Folder, Trash2, ChevronRight, ArrowLeft, Play, PenTool } from 'lucide-react';
import WordSelector from './WordSelector';
import useStore from '../store/useStore';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

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
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    const allWords = getAllWords();

    // Swipeable Collection Item Component
    const SwipeableCollectionItem = ({ collection, onOpen, onDelete }) => {
        const x = useMotionValue(0);
        const deleteOpacity = useTransform(x, [-100, -50, 0], [1, 0.5, 0]);
        const controls = useAnimation();
        const [showConfirm, setShowConfirm] = useState(false);

        const handleDragEnd = (e, info) => {
            if (info.offset.x < -50) {
                controls.start({ x: -80 });
            } else {
                controls.start({ x: 0 });
            }
        };

        const handleDeleteClick = () => {
            setShowConfirm(true);
        };

        const handleConfirmDelete = () => {
            onDelete(collection.id);
            setShowConfirm(false);
        };

        const handleCancel = () => {
            setShowConfirm(false);
            controls.start({ x: 0 });
        };

        return (
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
                {/* Delete Button Background - hidden until swiped */}
                <motion.div
                    onClick={handleDeleteClick}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 80,
                        background: '#E94B5A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0 16px 16px 0',
                        cursor: 'pointer',
                        opacity: deleteOpacity
                    }}
                >
                    <Trash2 size={24} color="white" />
                </motion.div>

                {/* Main Card */}
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{ x, background: 'var(--bg-card)', borderRadius: 16, zIndex: 1 }}
                >
                    <div
                        onClick={() => !showConfirm && onOpen(collection)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 16,
                            padding: 16, cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: 48, height: 48, borderRadius: 12,
                            background: 'rgba(242, 106, 27, 0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            {collection.icon || '📁'}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, fontSize: '1rem' }}>{collection.name}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {collection.wordIds.length + collection.customWords.length} слів
                            </div>
                        </div>
                        <ChevronRight size={20} color="var(--text-muted)" />
                    </div>
                </motion.div>

                {/* Confirmation Modal */}
                {showConfirm && (
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
                                «{collection.name}» буде видалено назавжди
                            </p>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <button
                                    onClick={handleCancel}
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
                                    onClick={handleConfirmDelete}
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
            </div>
        );
    };

    // Swipeable Word Item Component (for words in collection)
    const SwipeableWordItem = ({ word, onDelete }) => {
        const x = useMotionValue(0);
        const deleteOpacity = useTransform(x, [-100, -50, 0], [1, 0.5, 0]);
        const controls = useAnimation();

        const handleDragEnd = (e, info) => {
            if (info.offset.x < -60) {
                // Auto-delete on strong swipe
                controls.start({ x: -200, opacity: 0 }).then(() => {
                    onDelete();
                });
            } else if (info.offset.x < -30) {
                controls.start({ x: -70 });
            } else {
                controls.start({ x: 0 });
            }
        };

        const handleDeleteClick = () => {
            controls.start({ x: -200, opacity: 0 }).then(() => {
                onDelete();
            });
        };

        return (
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12 }}>
                {/* Delete Button Background */}
                <motion.div
                    onClick={handleDeleteClick}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 70,
                        background: '#E94B5A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0 12px 12px 0',
                        cursor: 'pointer',
                        opacity: deleteOpacity
                    }}
                >
                    <Trash2 size={20} color="white" />
                </motion.div>

                {/* Main Word Card */}
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{
                        x,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 12,
                        zIndex: 1
                    }}
                >
                    <div>
                        <div style={{ fontWeight: 600 }}>
                            {word.article && <span style={{ color: '#F26A1B', marginRight: 4 }}>{word.article}</span>}
                            {word.word}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{word.translation}</div>
                    </div>
                    <div style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        opacity: 0.5,
                        paddingRight: 8
                    }}>
                        ← свайп
                    </div>
                </motion.div>
            </div>
        );
    };

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
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
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
                    <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Новий набір</h2>
                </div>

                <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 24
                }}>
                    <form onSubmit={handleCreate}>
                        <label style={{
                            display: 'block', marginBottom: 10,
                            color: 'var(--text-2)', fontSize: '0.9rem', fontWeight: 500
                        }}>
                            Назва набору
                        </label>
                        <input
                            value={newCollectionName}
                            onChange={e => setNewCollectionName(e.target.value)}
                            placeholder="Наприклад: Подорож, Їжа, Робота..."
                            autoFocus
                            style={{
                                width: '100%', padding: 16, marginBottom: 24,
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: 14, color: 'white', fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!newCollectionName.trim()}
                            style={{
                                width: '100%', padding: 16, borderRadius: 14,
                                background: newCollectionName.trim()
                                    ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                                    : 'rgba(255,255,255,0.05)',
                                border: 'none',
                                color: newCollectionName.trim() ? 'white' : 'var(--text-2)',
                                fontWeight: 600, fontSize: '1rem',
                                cursor: newCollectionName.trim() ? 'pointer' : 'default',
                                boxShadow: newCollectionName.trim() ? '0 0 20px rgba(139,92,246,0.3)' : 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                            }}
                        >
                            <Plus size={18} />
                            Створити набір
                        </button>
                    </form>
                </div>
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
            <div className="fade-in" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: 0,
                overflow: 'hidden'
            }}>
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
                    {/* Word count badge instead of delete button */}
                    <div style={{
                        padding: '8px 14px',
                        borderRadius: 10,
                        background: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        color: '#a78bfa',
                        fontSize: '0.9rem',
                        fontWeight: 600
                    }}>
                        {resolvedWords.length} слів
                    </div>
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

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                    <button
                        disabled={resolvedWords.length === 0}
                        onClick={() => {
                            // Save as last studied collection
                            useAuthStore.getState().setLastStudiedCollection(currentCollection.id);
                            onStartStudy && onStartStudy(resolvedWords);
                        }}
                        style={{
                            flex: 1, padding: '12px 16px', borderRadius: 12,
                            background: resolvedWords.length > 0 ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.05)',
                            border: resolvedWords.length > 0 ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.1)',
                            color: resolvedWords.length > 0 ? '#a78bfa' : 'var(--text-2)',
                            fontWeight: 500, cursor: resolvedWords.length > 0 ? 'pointer' : 'default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                        }}
                    >
                        <Play size={16} />
                        Картки
                    </button>

                    <button
                        disabled={resolvedWords.length === 0}
                        onClick={() => {
                            // Save as last studied collection
                            useAuthStore.getState().setLastStudiedCollection(currentCollection.id);
                            // Start Noun Master for this collection
                            useStore.getState().setNounMasterWords(resolvedWords);
                        }}
                        style={{
                            flex: 1, padding: '12px 16px', borderRadius: 12,
                            background: resolvedWords.length > 0 ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'rgba(255,255,255,0.05)',
                            border: 'none',
                            color: resolvedWords.length > 0 ? 'white' : 'var(--text-2)',
                            fontWeight: 600, cursor: resolvedWords.length > 0 ? 'pointer' : 'default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                            boxShadow: resolvedWords.length > 0 ? '0 0 20px rgba(139,92,246,0.25)' : 'none'
                        }}
                    >
                        <PenTool size={16} />
                        Noun Master
                    </button>
                </div>

                {/* Quick Add Word Button */}
                <button
                    onClick={() => setShowWordSelector(true)}
                    style={{
                        width: '100%', marginTop: 12, padding: '10px 16px', borderRadius: 10,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px dashed rgba(255,255,255,0.2)',
                        color: 'var(--text-1)', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        fontSize: '0.9rem'
                    }}
                >
                    <Plus size={18} />
                    Додати слово
                </button>

                {/* Word List - Scrollable Container */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    marginTop: 16,
                    paddingBottom: 80,
                    minHeight: 0 // Important for flex overflow
                }}>
                    {resolvedWords.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: 40,
                            color: 'var(--text-muted)'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: 12 }}>📝</div>
                            <p>Додайте слова до цього набору</p>
                        </div>
                    ) : (
                        resolvedWords.map((word, idx) => (
                            <SwipeableWordItem
                                key={word.id || word.word || idx}
                                word={word}
                                onDelete={() => {
                                    // Determine if it's a custom word (has no numeric id or has plural field from custom)
                                    const isCustom = !word.id || typeof word.id === 'string' && word.id.startsWith('custom-');
                                    removeFromCollection(currentCollection.id, word.id || word.word, isCustom);
                                }}
                            />
                        ))
                    )}
                </div>

                {
                    showWordSelector && (
                        <WordSelector
                            onClose={() => setShowWordSelector(false)}
                            onSelect={handleAddWord}
                            existingWordIds={currentCollection.wordIds}
                        />
                    )
                }
            </div >
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
                        <SwipeableCollectionItem
                            key={c.id}
                            collection={c}
                            onOpen={openCollection}
                            onDelete={deleteCollection}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default CollectionManager;
