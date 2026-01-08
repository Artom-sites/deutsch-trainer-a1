// src/components/LessonDetail.jsx
// Деталі уроку: Wortschatz, окремі Grammatik теми, Übungen
import React from 'react';
import useStore from '../store/useStore';
import { getLessonById, getWordsForLesson, getGrammarForLesson, getExercisesForTopic, getGrammarContent } from '../data/lexicon';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, ChevronRight, CheckCircle } from 'lucide-react';

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
            {/* Header */}
            <div className="back-header">
                <button className="back-btn" onClick={goBack}>
                    <ArrowLeft size={20} />
                </button>
                <div className="back-title">{lesson.number}</div>
            </div>

            {/* Lesson Title */}
            <div style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4 }}>
                    {lesson.title}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {lesson.description}
                </p>
            </div>

            {/* ==========================================
          WORTSCHATZ (Vocabulary)
          ========================================== */}
            <div className="lesson-section">
                <div className="lesson-section-title">Wortschatz</div>

                <div
                    className="lesson-item"
                    onClick={() => startLessonWords(activeLessonId)}
                >
                    <div className="lesson-item-icon" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                        <BookOpen size={22} color="var(--color-masculine)" />
                    </div>
                    <div className="lesson-item-content">
                        <div className="lesson-item-title">Картки слів ({lessonWords.length})</div>
                        <div className="lesson-item-subtitle">
                            {progress.percent === 100 ? (
                                <span style={{ color: 'var(--color-success)' }}>✓ Всі вивчено</span>
                            ) : (
                                `Вивчено: ${progress.learned} / ${progress.total}`
                            )}
                        </div>
                    </div>
                    <ChevronRight size={18} color="var(--text-muted)" />
                </div>
            </div>

            {/* ==========================================
          GRAMMATIK (Individual Grammar Topics)
          Кожну тему можна вивчити + тренувати окремо
          ========================================== */}
            <div className="lesson-section">
                <div className="lesson-section-title">Grammatik</div>

                {grammarTopics.length > 0 ? (
                    grammarTopics.map(topic => {
                        const topicExercises = getExercisesForTopic(topic.id);
                        const hasContent = getGrammarContent(topic.id) !== null;

                        return (
                            <div key={topic.id} className="card" style={{ marginBottom: 'var(--space-sm)' }}>
                                {/* Topic Header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                                    <div style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'rgba(168, 85, 247, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        fontSize: '1.25rem'
                                    }}>
                                        {topic.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{topic.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{topic.description}</div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                                    {/* Learn Button */}
                                    {hasContent && (
                                        <button
                                            onClick={() => openGrammarTopic(topic.id)}
                                            style={{
                                                flex: 1,
                                                padding: 'var(--space-sm)',
                                                background: 'var(--bg-surface)',
                                                border: 'none',
                                                borderRadius: 'var(--radius-sm)',
                                                color: 'var(--text-primary)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 'var(--space-xs)'
                                            }}
                                        >
                                            <Lightbulb size={16} />
                                            Вивчити
                                        </button>
                                    )}

                                    {/* Practice Button */}
                                    {topicExercises.length > 0 && (
                                        <button
                                            onClick={() => startTopicExercises(topic.id)}
                                            style={{
                                                flex: 1,
                                                padding: 'var(--space-sm)',
                                                background: 'rgba(34, 197, 94, 0.2)',
                                                border: 'none',
                                                borderRadius: 'var(--radius-sm)',
                                                color: 'var(--color-success)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 'var(--space-xs)'
                                            }}
                                        >
                                            <PenTool size={16} />
                                            Тренувати ({topicExercises.length})
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    // Show lesson grammar array if no detailed topics
                    lesson.grammar && lesson.grammar.map((grammarName, index) => (
                        <div key={index} className="card" style={{ marginBottom: 'var(--space-sm)', opacity: 0.7 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                <div style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'rgba(168, 85, 247, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Lightbulb size={18} color="var(--color-accent)" />
                                </div>
                                <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>{grammarName}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Info card at bottom */}
            <div style={{
                marginTop: 'var(--space-lg)',
                padding: 'var(--space-md)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                opacity: 0.7
            }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    💡 Натисни "Вивчити" щоб подивитися правила, або "Тренувати" для вправ
                </div>
            </div>
        </div>
    );
};

export default LessonDetail;
