// src/components/DictionaryTab.jsx
// Вкладка "Словник" - тренування всіх слів
import React from 'react';
import useStore from '../store/useStore';
import { words } from '../data/lexicon';
import { BookOpen, Play, RotateCcw, Calendar, Volume2 } from 'lucide-react';
import { speakWord } from '../utils/speech';

const DictionaryTab = () => {
    const startAllWords = useStore(state => state.startAllWords);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getTotalWords = useStore(state => state.getTotalWords);
    const getDueCount = useStore(state => state.getDueCount);

    const learned = getLearnedCount();
    const total = getTotalWords();
    const dueCount = getDueCount();

    // Get Word of the Day (stable for the day)
    const getDailyWord = () => {
        if (!words || words.length === 0) return null;
        const today = new Date().toDateString();
        let hash = 0;
        for (let i = 0; i < today.length; i++) {
            hash = today.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % words.length;
        return words[index];
    };

    const dailyWord = getDailyWord();

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Wörterbuch</h1>
                <p className="screen-subtitle">Тренування словникового запасу</p>
            </div>

            {/* Word of the Day */}
            {dailyWord && (
                <div className="card fade-in" style={{
                    marginBottom: 'var(--space-lg)',
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                    color: 'white',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginBottom: 'var(--space-sm)',
                            opacity: 0.9,
                            fontSize: '0.9rem'
                        }}>
                            <Calendar size={16} />
                            <span>Wort des Tages</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 4 }}>
                                    {dailyWord.word}
                                </div>
                                <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                                    {dailyWord.translation}
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    speakWord(dailyWord.word);
                                }}
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <Volume2 size={24} color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)'
                    }}
                >
                    <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Play size={28} color="var(--color-primary)" />
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Вчити слова</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            Звичайний режим карток
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
                            background: 'rgba(245, 158, 11, 0.1)',
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
        </div>
    );
};

export default DictionaryTab;
