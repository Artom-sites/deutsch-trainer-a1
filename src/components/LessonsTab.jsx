// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Premium Design with Special Touches
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { ChevronRight, Check, Star, Flame, Trophy, Sparkles, Target, Zap } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    // Групуємо уроки по темах
    const beginnerLessons = lessons.slice(0, 5);   // 1-5: Основи
    const dailyLessons = lessons.slice(5, 10);     // 6-10: Щоденне життя
    const advancedLessons = lessons.slice(10, 14); // 11-14: Поглиблені

    // Знайти рекомендований урок (перший незавершений)
    const getRecommendedLesson = () => {
        for (let lesson of lessons) {
            const progress = getLessonProgress(lesson.id);
            if (progress.percent < 100) return lesson.id;
        }
        return null;
    };
    const recommendedId = getRecommendedLesson();

    // Підрахунок завершених
    const completedCount = lessons.filter(l => getLessonProgress(l.id).percent === 100).length;

    const renderLessonCard = (lesson, variant = 'default') => {
        const progress = getLessonProgress(lesson.id);
        const isComplete = progress.percent === 100;
        const hasProgress = progress.total > 0 && progress.percent > 0;
        const isRecommended = lesson.id === recommendedId;

        const isLarge = variant === 'large';
        const isCompact = variant === 'compact';

        return (
            <div
                key={lesson.id}
                onClick={() => openLesson(lesson.id)}
                style={{
                    background: isRecommended && !isComplete
                        ? 'linear-gradient(135deg, rgba(242, 106, 27, 0.08) 0%, #1A1A22 100%)'
                        : '#1A1A22',
                    borderRadius: isLarge ? 20 : 14,
                    padding: isLarge ? '20px' : isCompact ? '12px' : '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: isCompact ? 'center' : 'flex-start',
                    flexDirection: isLarge ? 'column' : 'row',
                    gap: isLarge ? 12 : 12,
                    border: isRecommended && !isComplete
                        ? '1px solid rgba(242, 106, 27, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.04)',
                    minWidth: isCompact ? 140 : 'auto',
                    flex: isCompact ? '0 0 auto' : 'auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Recommended badge */}
                {isRecommended && !isComplete && !isCompact && (
                    <div style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        background: 'linear-gradient(135deg, #F26A1B, #E55A0A)',
                        padding: '4px 8px',
                        borderRadius: 8,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: '#0B0B0F',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4
                    }}>
                        <Zap size={10} /> Продовжити
                    </div>
                )}

                {/* Number Badge */}
                <div style={{
                    width: isLarge ? 52 : isCompact ? 36 : 40,
                    height: isLarge ? 52 : isCompact ? 36 : 40,
                    borderRadius: isLarge ? 16 : 12,
                    background: isComplete
                        ? 'linear-gradient(135deg, #2ECC71, #27AE60)'
                        : 'linear-gradient(135deg, #F26A1B, #E55A0A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: isLarge ? '1.3rem' : isCompact ? '0.9rem' : '1rem',
                    color: '#0B0B0F',
                    flexShrink: 0,
                    boxShadow: isComplete
                        ? '0 4px 12px rgba(46, 204, 113, 0.25)'
                        : '0 4px 12px rgba(242, 106, 27, 0.2)'
                }}>
                    {isComplete ? <Check size={isLarge ? 24 : 18} strokeWidth={3} /> : lesson.id}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                        fontWeight: 600,
                        fontSize: isLarge ? '1.05rem' : isCompact ? '0.8rem' : '0.9rem',
                        color: '#E5E7EB',
                        marginBottom: isCompact ? 0 : 2,
                        whiteSpace: isCompact ? 'nowrap' : 'normal',
                        overflow: isCompact ? 'hidden' : 'visible',
                        textOverflow: 'ellipsis',
                        paddingRight: isRecommended && !isComplete && !isCompact ? 80 : 0
                    }}>
                        {lesson.title}
                    </div>
                    {!isCompact && (
                        <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>
                            {lesson.description}
                        </div>
                    )}

                    {/* Progress */}
                    {hasProgress && !isCompact && (
                        <div style={{
                            marginTop: 8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        }}>
                            <div style={{
                                flex: 1,
                                height: 3,
                                background: 'rgba(255, 255, 255, 0.06)',
                                borderRadius: 2
                            }}>
                                <div style={{
                                    width: `${progress.percent}%`,
                                    height: '100%',
                                    background: isComplete
                                        ? 'linear-gradient(90deg, #2ECC71, #27AE60)'
                                        : 'linear-gradient(90deg, #F26A1B, #E55A0A)',
                                    borderRadius: 2,
                                    transition: 'width 0.3s'
                                }} />
                            </div>
                            <span style={{ fontSize: '0.7rem', color: '#7A7D8A' }}>
                                {progress.percent}%
                            </span>
                        </div>
                    )}
                </div>

                {!isLarge && !isCompact && (
                    <ChevronRight size={18} color="#7A7D8A" style={{ flexShrink: 0 }} />
                )}
            </div>
        );
    };

    return (
        <div className="screen">
            {/* Header with Stats */}
            <div style={{ marginBottom: 24, paddingTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            color: '#E5E7EB',
                            marginBottom: 4
                        }}>
                            Lektionen
                        </h1>
                        <p style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>
                            14 уроків • Рівень A1
                        </p>
                    </div>

                    {/* Achievement badge */}
                    <div style={{
                        background: completedCount > 0
                            ? 'linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(39, 174, 96, 0.05))'
                            : '#1A1A22',
                        border: completedCount > 0
                            ? '1px solid rgba(46, 204, 113, 0.2)'
                            : '1px solid rgba(255, 255, 255, 0.04)',
                        borderRadius: 14,
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        <div style={{
                            width: 32,
                            height: 32,
                            borderRadius: 10,
                            background: completedCount > 0 ? '#2ECC71' : '#7A7D8A',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Trophy size={18} color="#0B0B0F" />
                        </div>
                        <div>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: completedCount > 0 ? '#2ECC71' : '#7A7D8A'
                            }}>
                                {completedCount}/14
                            </div>
                            <div style={{ fontSize: '0.65rem', color: '#7A7D8A' }}>
                                завершено
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Основи */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: 'rgba(242, 106, 27, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Flame size={16} color="#F26A1B" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Основи
                    </span>
                    <span style={{
                        fontSize: '0.7rem',
                        color: '#7A7D8A',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '2px 8px',
                        borderRadius: 6
                    }}>1-5</span>
                </div>

                <div style={{ marginBottom: 10 }}>
                    {renderLessonCard(beginnerLessons[0], 'large')}
                </div>

                <div style={{
                    display: 'flex',
                    gap: 10,
                    overflowX: 'auto',
                    paddingBottom: 4,
                    marginRight: -16,
                    paddingRight: 16
                }}>
                    {beginnerLessons.slice(1).map(lesson => renderLessonCard(lesson, 'compact'))}
                </div>
            </div>

            {/* Section 2: Щоденне життя */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: 'rgba(241, 196, 15, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Star size={16} color="#F1C40F" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Щоденне життя
                    </span>
                    <span style={{
                        fontSize: '0.7rem',
                        color: '#7A7D8A',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '2px 8px',
                        borderRadius: 6
                    }}>6-10</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {dailyLessons.map(lesson => renderLessonCard(lesson, 'default'))}
                </div>
            </div>

            {/* Section 3: Поглиблені */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: 'rgba(155, 89, 182, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Sparkles size={16} color="#9B59B6" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Поглиблені теми
                    </span>
                    <span style={{
                        fontSize: '0.7rem',
                        color: '#7A7D8A',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '2px 8px',
                        borderRadius: 6
                    }}>11-14</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {advancedLessons.map(lesson => renderLessonCard(lesson, 'default'))}
                </div>
            </div>

            <div style={{ height: 20 }} />
        </div>
    );
};

export default LessonsTab;
