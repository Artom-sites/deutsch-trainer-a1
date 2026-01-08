// src/components/LessonDetail.jsx
// Деталі уроку: Wortschatz, Grammatik, Übungen
import React from 'react';
import useStore from '../store/useStore';
import { getLessonById, getWordsForLesson, getGrammarForLesson, getExercisesForLesson } from '../data/lexicon';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, ChevronRight } from 'lucide-react';

const LessonDetail = () => {
    const activeLessonId = useStore(state => state.activeLessonId);
    const goBack = useStore(state => state.goBack);
    const startLessonWords = useStore(state => state.startLessonWords);
    const startLessonExercises = useStore(state => state.startLessonExercises);
    const openGrammarTopic = useStore(state => state.openGrammarTopic);
    const getLessonProgress = useStore(state => state.getLessonProgress);

    const lesson = getLessonById(activeLessonId);
    const lessonWords = getWordsForLesson(activeLessonId);
    const grammarTopics = getGrammarForLesson(activeLessonId);
    const lessonExercises = getExercisesForLesson(activeLessonId);
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

                {/* Tags */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-xs)',
                    justifyContent: 'center',
                    marginTop: 'var(--space-sm)'
                }}>
                    {lesson.topics.map(topic => (
                        <span key={topic} style={{
                            background: 'var(--bg-surface)',
                            padding: '4px 8px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)'
                        }}>
                            {topic}
                        </span>
                    ))}
                </div>
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
          GRAMMATIK (Grammar Rules)
          ========================================== */}
            <div className="lesson-section">
                <div className="lesson-section-title">Grammatik</div>

                {grammarTopics.length > 0 ? (
                    grammarTopics.map(topic => (
                        <div
                            key={topic.id}
                            className="lesson-item"
                            onClick={() => openGrammarTopic(topic.id)}
                        >
                            <div className="lesson-item-icon" style={{ background: 'rgba(168, 85, 247, 0.2)' }}>
                                <span style={{ fontSize: '1.25rem' }}>{topic.icon}</span>
                            </div>
                            <div className="lesson-item-content">
                                <div className="lesson-item-title">{topic.name}</div>
                                <div className="lesson-item-subtitle">{topic.description}</div>
                            </div>
                            <ChevronRight size={18} color="var(--text-muted)" />
                        </div>
                    ))
                ) : (
                    // Show lesson grammar topics from lesson.grammar array
                    lesson.grammar.map((grammarName, index) => (
                        <div key={index} className="card" style={{ marginBottom: 'var(--space-sm)' }}>
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

            {/* ==========================================
          ÜBUNGEN (Exercises)
          ========================================== */}
            <div className="lesson-section">
                <div className="lesson-section-title">Übungen</div>

                {lessonExercises.length > 0 ? (
                    <div
                        className="lesson-item"
                        onClick={() => startLessonExercises(activeLessonId)}
                    >
                        <div className="lesson-item-icon" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
                            <PenTool size={22} color="var(--color-success)" />
                        </div>
                        <div className="lesson-item-content">
                            <div className="lesson-item-title">Тренування</div>
                            <div className="lesson-item-subtitle">
                                {lessonExercises.length} вправ
                            </div>
                        </div>
                        <ChevronRight size={18} color="var(--text-muted)" />
                    </div>
                ) : (
                    <div className="card" style={{ opacity: 0.5, textAlign: 'center', padding: 'var(--space-lg)' }}>
                        <PenTool size={24} color="var(--text-muted)" style={{ marginBottom: 8 }} />
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Вправи для цього уроку з'являться скоро
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonDetail;
