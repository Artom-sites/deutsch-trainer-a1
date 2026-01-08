// src/components/ProgressTab.jsx
// Вкладка "Прогрес"
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { TrendingUp, Target, Award } from 'lucide-react';

const ProgressTab = () => {
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getTotalWords = useStore(state => state.getTotalWords);
    const getDueCount = useStore(state => state.getDueCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    const learned = getLearnedCount();
    const total = getTotalWords();
    const dueCount = getDueCount();
    const overallPercent = total > 0 ? Math.round((learned / total) * 100) : 0;

    // Calculate level based on progress
    const getLevel = () => {
        if (overallPercent >= 80) return { name: 'A1+', color: 'var(--color-success)' };
        if (overallPercent >= 50) return { name: 'A1', color: 'var(--color-accent)' };
        if (overallPercent >= 20) return { name: 'A1-', color: 'var(--color-warning)' };
        return { name: 'Start', color: 'var(--text-muted)' };
    };

    const level = getLevel();

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Прогрес</h1>
                <p className="screen-subtitle">Ваша статистика навчання</p>
            </div>

            {/* Overall Progress */}
            <div className="card" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${level.color} 0%, var(--color-accent) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 'var(--space-xs)'
                }}>
                    {overallPercent}%
                </div>
                <div style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                    Загальний прогрес
                </div>

                {/* Progress bar */}
                <div style={{
                    height: 8,
                    background: 'var(--bg-surface)',
                    borderRadius: 4,
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${overallPercent}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${level.color} 0%, var(--color-accent) 100%)`,
                        transition: 'width 0.5s'
                    }} />
                </div>
            </div>

            {/* Level & Stats */}
            <div className="stats-row" style={{ marginBottom: 'var(--space-lg)' }}>
                <div className="stat-card">
                    <Award size={24} color={level.color} style={{ marginBottom: 4 }} />
                    <div className="stat-value" style={{ color: level.color }}>{level.name}</div>
                    <div className="stat-label">Рівень</div>
                </div>
                <div className="stat-card">
                    <Target size={24} color="var(--color-success)" style={{ marginBottom: 4 }} />
                    <div className="stat-value" style={{ color: 'var(--color-success)' }}>{learned}</div>
                    <div className="stat-label">Вивчено</div>
                </div>
                <div className="stat-card">
                    <TrendingUp size={24} color="var(--color-warning)" style={{ marginBottom: 4 }} />
                    <div className="stat-value" style={{ color: 'var(--color-warning)' }}>{dueCount}</div>
                    <div className="stat-label">Повтор</div>
                </div>
            </div>

            {/* Per-Lesson Progress */}
            <div style={{ marginBottom: 'var(--space-md)' }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 'var(--space-sm)'
                }}>
                    По лекціях
                </div>

                {lessons.map(lesson => {
                    const progress = getLessonProgress(lesson.id);
                    return (
                        <div key={lesson.id} className="card" style={{
                            padding: 'var(--space-sm) var(--space-md)',
                            marginBottom: 'var(--space-xs)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-md)'
                        }}>
                            <div style={{
                                width: 32,
                                height: 32,
                                borderRadius: 'var(--radius-sm)',
                                background: progress.percent === 100 ? 'var(--color-success)' : 'var(--bg-surface)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: progress.percent === 100 ? 'white' : 'var(--text-secondary)'
                            }}>
                                {lesson.id}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.85rem', marginBottom: 4 }}>{lesson.title}</div>
                                <div style={{
                                    height: 4,
                                    background: 'var(--bg-surface)',
                                    borderRadius: 2,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${progress.percent}%`,
                                        height: '100%',
                                        background: progress.percent === 100 ? 'var(--color-success)' : 'var(--color-accent)'
                                    }} />
                                </div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                {progress.learned}/{progress.total}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressTab;
