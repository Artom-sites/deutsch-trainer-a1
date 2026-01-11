// src/components/LessonsTab.jsx
// Lessons List - Violang-style Design
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { Check, ChevronRight, BookOpen, Clock } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    const completedCount = lessons.filter(l => getLessonProgress(l.id).percent === 100).length;

    return (
        <div className="app">
            {/* Header */}
            <div style={{ marginBottom: 24 }}>
                <h1 style={{
                    fontSize: '1.6rem', fontWeight: 700,
                    color: 'var(--text-0)', margin: '0 0 4px'
                }}>
                    Lektionen
                </h1>
                <p style={{
                    fontSize: '0.9rem', color: 'var(--text-2)', margin: 0
                }}>
                    Рівень A1 • {completedCount} з {lessons.length} завершено
                </p>
            </div>

            {/* Progress Overview */}
            <div style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                border: '1px solid var(--stroke)',
                borderRadius: 20,
                padding: 16,
                marginBottom: 24
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>
                        Загальний прогрес
                    </span>
                    <span style={{ color: 'var(--pri)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {Math.round((completedCount / lessons.length) * 100)}%
                    </span>
                </div>
                <div style={{
                    height: 6, background: 'var(--surface)', borderRadius: 3
                }}>
                    <div style={{
                        height: '100%',
                        width: `${(completedCount / lessons.length) * 100}%`,
                        background: 'linear-gradient(90deg, var(--pri), var(--pri-2))',
                        borderRadius: 3,
                        transition: 'width 0.3s ease'
                    }} />
                </div>
            </div>

            {/* Lessons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {lessons.map((lesson) => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;
                    const isInProgress = progress.percent > 0 && progress.percent < 100;

                    return (
                        <div
                            key={lesson.id}
                            onClick={() => openLesson(lesson.id)}
                            style={{
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                border: '1px solid var(--stroke)',
                                borderRadius: 18,
                                padding: 14,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                            }}
                        >
                            {/* Lesson Number / Status */}
                            <div style={{
                                width: 46,
                                height: 46,
                                borderRadius: 14,
                                background: isComplete
                                    ? 'var(--ok-soft)'
                                    : isInProgress
                                        ? 'var(--pri-soft)'
                                        : 'var(--surface)',
                                border: isComplete
                                    ? '2px solid rgba(47,230,166,.3)'
                                    : isInProgress
                                        ? '2px solid rgba(255,107,53,.3)'
                                        : '2px solid var(--stroke)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {isComplete ? (
                                    <Check size={22} color="var(--ok)" strokeWidth={2.5} />
                                ) : (
                                    <span style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        color: isInProgress ? 'var(--pri)' : 'var(--text-2)'
                                    }}>
                                        {lesson.id}
                                    </span>
                                )}
                            </div>

                            {/* Lesson Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4
                                }}>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        color: 'var(--text-0)'
                                    }}>
                                        Lektion {lesson.id}
                                    </span>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        color: 'var(--text-2)',
                                        display: 'flex', alignItems: 'center', gap: 3
                                    }}>
                                        <Clock size={10} /> ~6 хв
                                    </span>
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-2)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {lesson.title}
                                </div>

                                {/* Progress bar */}
                                {isInProgress && (
                                    <div style={{
                                        marginTop: 8,
                                        height: 4,
                                        background: 'var(--surface)',
                                        borderRadius: 2
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${progress.percent}%`,
                                            background: 'var(--pri)',
                                            borderRadius: 2
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Progress % or Arrow */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                            }}>
                                {isInProgress && (
                                    <span style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--pri)',
                                        fontWeight: 600
                                    }}>
                                        {progress.percent}%
                                    </span>
                                )}
                                <ChevronRight size={18} color="var(--text-2)" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LessonsTab;
