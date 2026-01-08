// src/components/DictionaryTab.jsx
// Вкладка "Словник" - тренування всіх слів
import React from 'react';
import useStore from '../store/useStore';
import { words } from '../data/lexicon';
import { BookOpen, Play, RotateCcw } from 'lucide-react';

const DictionaryTab = () => {
    const startAllWords = useStore(state => state.startAllWords);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getTotalWords = useStore(state => state.getTotalWords);
    const getDueCount = useStore(state => state.getDueCount);

    const learned = getLearnedCount();
    const total = getTotalWords();
    const dueCount = getDueCount();

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Wörterbuch</h1>
                <p className="screen-subtitle">Тренування словникового запасу</p>
            </div>

            {/* Stats */}
            <div className="stats-row">
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--color-accent)' }}>{total}</div>
                    <div className="stat-label">Всього</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--color-success)' }}>{learned}</div>
                    <div className="stat-label">Вивчено</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--color-warning)' }}>{dueCount}</div>
                    <div className="stat-label">Повтор</div>
                </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

                {/* Start All Words */}
                <div
                    className="card card-clickable"
                    onClick={startAllWords}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                        border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}
                >
                    <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Play size={28} color="white" />
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Вчити всі слова</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            {total} слів у словнику
                        </div>
                    </div>
                </div>

                {/* Review Due Words */}
                {dueCount > 0 && (
                    <div
                        className="card card-clickable"
                        onClick={startAllWords}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-md)',
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(239, 68, 68, 0.1) 100%)',
                            border: '1px solid rgba(245, 158, 11, 0.3)'
                        }}
                    >
                        <div style={{
                            width: 56,
                            height: 56,
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--color-warning)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <RotateCcw size={28} color="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Повторення</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {dueCount} слів на повтор
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Info */}
            <div style={{
                marginTop: 'var(--space-xl)',
                padding: 'var(--space-md)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
            }}>
                <BookOpen size={24} color="var(--text-muted)" style={{ marginBottom: 8 }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Картки: спереду 🇺🇦 переклад, ззаду 🇩🇪 слово з артиклем
                </div>
            </div>
        </div>
    );
};

export default DictionaryTab;
