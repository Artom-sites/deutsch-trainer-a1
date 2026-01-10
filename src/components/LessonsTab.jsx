// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Premium Design з різноманітними картками
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { ChevronRight, Check, BookOpen, Star, Sparkles } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    // Різні стилі для карток (чергування для візуального різноманіття)
    const getCardStyle = (index, isComplete) => {
        const styles = [
            // Style 1: Glass with orange glow
            {
                background: 'linear-gradient(145deg, rgba(242, 106, 27, 0.08) 0%, rgba(17, 17, 24, 0.9) 100%)',
                border: '1px solid rgba(242, 106, 27, 0.15)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
            },
            // Style 2: Clean dark glass
            {
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(17, 17, 24, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            },
            // Style 3: Subtle green tint (for progress feeling)
            {
                background: 'linear-gradient(145deg, rgba(46, 204, 113, 0.05) 0%, rgba(17, 17, 24, 0.9) 100%)',
                border: '1px solid rgba(46, 204, 113, 0.1)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)'
            }
        ];

        if (isComplete) {
            return {
                background: 'linear-gradient(145deg, rgba(46, 204, 113, 0.12) 0%, rgba(17, 17, 24, 0.95) 100%)',
                border: '1px solid rgba(46, 204, 113, 0.25)',
                boxShadow: '0 4px 24px rgba(46, 204, 113, 0.1)'
            };
        }

        return styles[index % 3];
    };

    // Іконки для уроків (чергування)
    const lessonIcons = ['📖', '🎯', '💬', '🏠', '🍽️', '⏰', '🎉', '🏙️', '✈️', '🛒', '👔', '🏥', '🎓', '📝'];

    return (
        <div className="screen">
            {/* Premium Header */}
            <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(242, 106, 27, 0.15) 0%, rgba(242, 106, 27, 0.02) 100%)',
                borderRadius: 24,
                padding: 24,
                marginBottom: 20,
                border: '1px solid rgba(242, 106, 27, 0.2)',
                overflow: 'hidden'
            }}>
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    background: 'radial-gradient(circle, rgba(242, 106, 27, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: -30,
                    left: '30%',
                    width: 80,
                    height: 80,
                    background: 'radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                        <div style={{
                            width: 44,
                            height: 44,
                            borderRadius: 14,
                            background: 'linear-gradient(135deg, #F26A1B 0%, #E55A0A 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <BookOpen size={24} color="white" />
                        </div>
                        <div>
                            <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#E5E7EB', margin: 0 }}>
                                Lektionen
                            </h1>
                            <p style={{ color: '#B0B3C0', fontSize: '0.85rem', margin: 0 }}>
                                14 уроків • Рівень A1
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lessons Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {lessons.map((lesson, index) => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;
                    const cardStyle = getCardStyle(index, isComplete);
                    const icon = lessonIcons[index] || '📚';

                    // Featured lesson (перший незавершений або перший)
                    const isFeatured = index === 0 || (index < 3 && progress.percent > 0 && progress.percent < 100);

                    return (
                        <div
                            key={lesson.id}
                            onClick={() => openLesson(lesson.id)}
                            style={{
                                ...cardStyle,
                                borderRadius: isFeatured ? 20 : 16,
                                padding: isFeatured ? '20px' : '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                transition: 'all 0.2s ease',
                                transform: 'scale(1)'
                            }}
                        >
                            {/* Lesson Icon/Number */}
                            <div style={{
                                width: isFeatured ? 56 : 48,
                                height: isFeatured ? 56 : 48,
                                borderRadius: isFeatured ? 18 : 14,
                                background: isComplete
                                    ? 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)'
                                    : 'linear-gradient(135deg, #F26A1B 0%, #E55A0A 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: isFeatured ? '1.5rem' : '1.25rem',
                                flexShrink: 0,
                                boxShadow: isComplete
                                    ? '0 4px 16px rgba(46, 204, 113, 0.3)'
                                    : '0 4px 16px rgba(242, 106, 27, 0.25)'
                            }}>
                                {isComplete ? <Check size={24} color="white" /> : lesson.id}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: isFeatured ? '1.05rem' : '0.95rem',
                                        color: '#E5E7EB'
                                    }}>
                                        {lesson.title}
                                    </span>
                                    {isFeatured && progress.percent > 0 && (
                                        <Sparkles size={14} color="#F26A1B" />
                                    )}
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: '#7A7D8A',
                                    marginBottom: progress.total > 0 ? 8 : 0
                                }}>
                                    {lesson.description}
                                </div>

                                {/* Progress bar */}
                                {progress.total > 0 && (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    }}>
                                        <div style={{
                                            flex: 1,
                                            height: 5,
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            borderRadius: 3,
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                width: `${progress.percent}%`,
                                                height: '100%',
                                                background: isComplete
                                                    ? 'linear-gradient(90deg, #2ECC71, #27AE60)'
                                                    : 'linear-gradient(90deg, #F26A1B, #E55A0A)',
                                                borderRadius: 3,
                                                transition: 'width 0.3s'
                                            }} />
                                        </div>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            color: isComplete ? '#2ECC71' : '#F26A1B',
                                            fontWeight: 600,
                                            minWidth: 32
                                        }}>
                                            {progress.percent}%
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Arrow or Star */}
                            <div style={{ flexShrink: 0 }}>
                                {isComplete ? (
                                    <Star size={18} color="#2ECC71" fill="#2ECC71" />
                                ) : (
                                    <ChevronRight size={20} color="#7A7D8A" />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom spacing for nav */}
            <div style={{ height: 20 }} />
        </div>
    );
};

export default LessonsTab;
