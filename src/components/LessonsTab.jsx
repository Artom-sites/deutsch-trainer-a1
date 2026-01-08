// src/components/LessonsTab.jsx
// Вкладка "Уроки" - всі 14 лекцій
import React from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { ChevronRight, Check } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Lektionen</h1>
                <p className="screen-subtitle">Schritte plus Neu A1 • 14 уроків</p>
            </div>

            <div>
                {lessons.map(lesson => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;

                    return (
                        <div
                            key={lesson.id}
                            className="card card-clickable"
                            onClick={() => openLesson(lesson.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-md)'
                            }}
                        >
                            {/* Lesson Number */}
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: 'var(--radius-md)',
                                background: isComplete ? 'var(--color-success)' : 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                flexShrink: 0
                            }}>
                                {isComplete ? <Check size={24} /> : lesson.id}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontWeight: 600, marginBottom: 2, fontSize: '0.95rem' }}>
                                    {lesson.title}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                    {lesson.description}
                                </div>

                                {/* Progress bar */}
                                {progress.total > 0 && (
                                    <div style={{
                                        marginTop: 8,
                                        height: 4,
                                        background: 'var(--bg-surface)',
                                        borderRadius: 2,
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${progress.percent}%`,
                                            height: '100%',
                                            background: isComplete ? 'var(--color-success)' : 'var(--color-accent)',
                                            transition: 'width 0.3s'
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Arrow */}
                            <ChevronRight size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LessonsTab;
