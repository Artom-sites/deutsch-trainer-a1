// src/components/LessonDetail.jsx
// Деталі уроку: Wortschatz, Grammatik, Übungen
import React from 'react';
import useStore from '../store/useStore';
import { getLessonById, getWordsForLesson, getGrammarForLesson, getExercisesForTopic, getGrammarContent } from '../data/lexicon';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, ChevronRight, Play } from 'lucide-react';

const LessonDetail = () => {
    const activeLessonId = useStore(state => state.activeLessonId);
    const goBack = useStore(state => state.goBack);
    const startLessonWords = useStore(state => state.startLessonWords);
    const startTopicExercises = useStore(state => state.startTopicExercises);
    const openGrammarTopic = useStore(state => state.openGrammarTopic);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    const lesson = getLessonById(activeLessonId);
    const lessonWords = getWordsForLesson(activeLessonId);
    const grammarTopics = getGrammarForLesson(activeLessonId);
    const progress = getLessonProgress(activeLessonId);

    if (!lesson) return null;

    return (
        <div className="screen">
            {/* Back Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)',
                paddingTop: 'var(--space-sm)'
            }}>
                <button
                    onClick={goBack}
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {lesson.number}
                    </div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                        {lesson.title}
                    </h1>
                </div>
            </div>

            {/* ==========================================
                СЛОВНИК - Головний CTA
            ========================================== */}
            <button
                onClick={() => startLessonWords(activeLessonId)}
                style={{
                    width: '100%',
                    padding: '20px',
                    marginBottom: 'var(--space-lg)',
                    background: '#FF6B35',
                    border: 'none',
                    borderRadius: 20,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    boxShadow: '0 4px 24px rgba(242, 106, 27, 0.25)'
                }}
            >
                <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: 'rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Play size={28} color="#0d0d0d" />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#0d0d0d',
                        marginBottom: 4
                    }}>
                        Вчити слова
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                        {lessonWords.length} слів • {progress.learned} вивчено
                    </div>
                </div>
                <ChevronRight size={24} color="#0d0d0d" />
            </button>

            {/* ==========================================
                ГРАМАТИКА
            ========================================== */}
            {grammarTopics.length > 0 && (
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <div style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 'var(--space-md)'
                    }}>
                        Граматика
                    </div>

                    {grammarTopics.map(topic => {
                        const topicExercises = getExercisesForTopic(topic.id);
                        const hasContent = getGrammarContent(topic.id) !== null;

                        return (
                            <div
                                key={topic.id}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: 16,
                                    padding: 'var(--space-md)',
                                    marginBottom: 'var(--space-sm)'
                                }}
                            >
                                {/* Topic Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    <div style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 12,
                                        background: 'rgba(242, 106, 27, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.1rem'
                                    }}>
                                        {topic.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                                            {topic.name}
                                        </div>
                                        {topic.shortDescription && (
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                {topic.shortDescription}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div style={{ display: 'flex', gap: 8 }}>
                                    {hasContent && (
                                        <button
                                            onClick={() => openGrammarTopic(topic.id)}
                                            style={{
                                                flex: 1,
                                                padding: '10px 12px',
                                                background: 'rgba(242, 106, 27, 0.15)',
                                                border: '1px solid rgba(242, 106, 27, 0.25)',
                                                borderRadius: 10,
                                                color: '#FF6B35',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 6
                                            }}
                                        >
                                            <Lightbulb size={16} />
                                            Вивчити
                                        </button>
                                    )}

                                    {topicExercises.length > 0 && (
                                        <button
                                            onClick={() => startTopicExercises(topic.id)}
                                            style={{
                                                flex: 1,
                                                padding: '10px 12px',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                                borderRadius: 10,
                                                color: 'var(--text-primary)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 6
                                            }}
                                        >
                                            <PenTool size={16} />
                                            Тренувати
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LessonDetail;
