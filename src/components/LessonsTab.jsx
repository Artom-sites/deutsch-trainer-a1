// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Clean Professional Card Design
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { Check, ChevronRight, BookOpen } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    const completedCount = lessons.filter(l => getLessonProgress(l.id).percent === 100).length;

    return (
        <div className="screen" style={{ paddingBottom: 100 }}>
            {/* Header */}
            <div className="screen-header" style={{ marginBottom: 24 }}>
                <div>
                    <h1 className="screen-title">Lektionen</h1>
                    <p className="screen-subtitle">
                        Рівень A1 • {completedCount} з {lessons.length} завершено
                    </p>
                </div>
            </div>

            {/* Progress Overview */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: 16,
                padding: 16,
                marginBottom: 24
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 12
                }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Загальний прогрес
                    </span>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                        {Math.round((completedCount / lessons.length) * 100)}%
                    </span>
                </div>
                <div style={{
                    height: 6,
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 3,
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${(completedCount / lessons.length) * 100}%`,
                        background: 'var(--color-accent)',
                        borderRadius: 3,
                        transition: 'width 0.3s ease'
                    }} />
                </div>
            </div>

            {/* Lessons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {lessons.map((lesson, index) => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;
                    const isInProgress = progress.percent > 0 && progress.percent < 100;

                    return (
                        <div
                            key={lesson.id}
                            onClick={() => openLesson(lesson.id)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                borderRadius: 16,
                                padding: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {/* Lesson Number */}
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                background: isComplete
                                    ? 'rgba(46, 204, 113, 0.15)'
                                    : isInProgress
                                        ? 'rgba(242, 106, 27, 0.15)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                border: isComplete
                                    ? '2px solid rgba(46, 204, 113, 0.3)'
                                    : isInProgress
                                        ? '2px solid rgba(242, 106, 27, 0.3)'
                                        : '2px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {isComplete ? (
                                    <Check size={22} color="#2ECC71" strokeWidth={2.5} />
                                ) : (
                                    <span style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        color: isInProgress ? 'var(--color-accent)' : 'var(--text-secondary)'
                                    }}>
                                        {lesson.id}
                                    </span>
                                )}
                            </div>

                            {/* Lesson Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    color: 'var(--text-primary)',
                                    marginBottom: 4
                                }}>
                                    Lektion {lesson.id}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {lesson.title}
                                </div>

                                {/* Progress bar for in-progress lessons */}
                                {isInProgress && (
                                    <div style={{
                                        marginTop: 8,
                                        height: 4,
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: 2,
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${progress.percent}%`,
                                            background: 'var(--color-accent)',
                                            borderRadius: 2
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Progress or Arrow */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                color: 'var(--text-secondary)'
                            }}>
                                {isInProgress && (
                                    <span style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--color-accent)',
                                        fontWeight: 600
                                    }}>
                                        {progress.percent}%
                                    </span>
                                )}
                                <ChevronRight size={20} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LessonsTab;
