// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Creative Dynamic Design
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { ChevronRight, Check, Star, Flame, Trophy } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    // Групуємо уроки по темах
    const beginnerLessons = lessons.slice(0, 5);   // 1-5: Основи
    const dailyLessons = lessons.slice(5, 10);     // 6-10: Щоденне життя
    const advancedLessons = lessons.slice(10, 14); // 11-14: Поглиблені

    const renderLessonCard = (lesson, variant = 'default') => {
        const progress = getLessonProgress(lesson.id);
        const isComplete = progress.percent === 100;
        const hasProgress = progress.total > 0 && progress.percent > 0;

        // Різні стилі карток
        const isLarge = variant === 'large';
        const isCompact = variant === 'compact';

        return (
            <div
                key={lesson.id}
                onClick={() => openLesson(lesson.id)}
                style={{
                    background: '#1A1A22',
                    borderRadius: isLarge ? 20 : 14,
                    padding: isLarge ? '20px' : isCompact ? '12px' : '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: isCompact ? 'center' : 'flex-start',
                    flexDirection: isLarge ? 'column' : 'row',
                    gap: isLarge ? 12 : 12,
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    minWidth: isCompact ? 140 : 'auto',
                    flex: isCompact ? '0 0 auto' : 'auto'
                }}
            >
                {/* Number Badge */}
                <div style={{
                    width: isLarge ? 52 : isCompact ? 36 : 40,
                    height: isLarge ? 52 : isCompact ? 36 : 40,
                    borderRadius: isLarge ? 16 : 12,
                    background: isComplete ? '#2ECC71' : '#F26A1B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: isLarge ? '1.3rem' : isCompact ? '0.9rem' : '1rem',
                    color: '#0B0B0F',
                    flexShrink: 0
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
                        textOverflow: 'ellipsis'
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
                                    background: isComplete ? '#2ECC71' : '#F26A1B',
                                    borderRadius: 2
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
            {/* Header */}
            <div style={{ marginBottom: 24, paddingTop: 8 }}>
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

            {/* Section 1: Основи - Featured Cards */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <Flame size={18} color="#F26A1B" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Основи
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>1-5</span>
                </div>

                {/* First lesson - Large featured */}
                <div style={{ marginBottom: 10 }}>
                    {renderLessonCard(beginnerLessons[0], 'large')}
                </div>

                {/* Rest - Horizontal scroll */}
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

            {/* Section 2: Щоденне життя - Grid */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <Star size={18} color="#F1C40F" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Щоденне життя
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>6-10</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {dailyLessons.map(lesson => renderLessonCard(lesson, 'default'))}
                </div>
            </div>

            {/* Section 3: Поглиблені - Standard */}
            <div style={{ marginBottom: 24 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12
                }}>
                    <Trophy size={18} color="#9B59B6" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Поглиблені теми
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>11-14</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {advancedLessons.map(lesson => renderLessonCard(lesson, 'default'))}
                </div>
            </div>

            {/* Bottom spacing */}
            <div style={{ height: 20 }} />
        </div>
    );
};

export default LessonsTab;
