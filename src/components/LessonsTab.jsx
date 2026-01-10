// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Clean Dark Design
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { ChevronRight, Check } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    return (
        <div className="screen">
            {/* Clean Header */}
            <div style={{
                marginBottom: 24,
                paddingTop: 8
            }}>
                <h1 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#E5E7EB',
                    marginBottom: 4
                }}>
                    Lektionen 📖
                </h1>
                <p style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>
                    14 уроків для рівня A1
                </p>
            </div>

            {/* Lessons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {lessons.map((lesson) => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;
                    const hasProgress = progress.total > 0 && progress.percent > 0;

                    return (
                        <div
                            key={lesson.id}
                            onClick={() => openLesson(lesson.id)}
                            style={{
                                background: '#1A1A22',
                                borderRadius: 16,
                                padding: '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {/* Lesson Number - Orange or Green for complete */}
                            <div style={{
                                width: 44,
                                height: 44,
                                borderRadius: 14,
                                background: isComplete
                                    ? '#2ECC71'
                                    : '#F26A1B',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: '#0B0B0F',
                                flexShrink: 0
                            }}>
                                {isComplete ? <Check size={22} strokeWidth={3} /> : lesson.id}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: '#E5E7EB',
                                    marginBottom: 3
                                }}>
                                    {lesson.title}
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: '#7A7D8A'
                                }}>
                                    {lesson.description}
                                </div>

                                {/* Thin Progress Line */}
                                {hasProgress && (
                                    <div style={{
                                        marginTop: 10,
                                        height: 3,
                                        background: 'rgba(255, 255, 255, 0.06)',
                                        borderRadius: 2,
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${progress.percent}%`,
                                            height: '100%',
                                            background: isComplete ? '#2ECC71' : '#F26A1B',
                                            borderRadius: 2,
                                            transition: 'width 0.3s'
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Arrow */}
                            <ChevronRight
                                size={20}
                                color="#7A7D8A"
                                style={{ flexShrink: 0 }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Bottom spacing */}
            <div style={{ height: 20 }} />
        </div>
    );
};

export default LessonsTab;
