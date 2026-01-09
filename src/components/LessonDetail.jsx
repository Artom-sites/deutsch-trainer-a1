// src/components/LessonDetail.jsx
// Деталі уроку: Wortschatz, Grammatik, Übungen, Test
import React from 'react';
import useStore from '../store/useStore';
import { getLessonById, getWordsForLesson, getGrammarForLesson, getExercisesForTopic, getGrammarContent, lessons } from '../data/lexicon';
import { getTestForLesson } from '../data/lessonTests';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, ChevronRight, Play, ClipboardCheck } from 'lucide-react';

const LessonDetail = () => {
    const activeLessonId = useStore(state => state.activeLessonId);
    const goBack = useStore(state => state.goBack);
    const startLessonWords = useStore(state => state.startLessonWords);
    const startTopicExercises = useStore(state => state.startTopicExercises);
    const openGrammarTopic = useStore(state => state.openGrammarTopic);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const startLessonTest = useStore(state => state.startLessonTest);

    const lesson = getLessonById(activeLessonId);
    const lessonWords = getWordsForLesson(activeLessonId);
    const grammarTopics = getGrammarForLesson(activeLessonId);
    const progress = getLessonProgress(activeLessonId);
    const lessonTest = getTestForLesson(activeLessonId);

    if (!lesson) return null;

    // Find current lesson index for navigation
    const currentIndex = lessons.findIndex(l => l.id === activeLessonId);
    const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

    const handleLessonChange = (newId) => {
        // We use the same action intended for opening a lesson
        useStore.getState().openLesson(newId);
    };

    return (
        <div className="screen" style={{ paddingTop: '80px' }}>
            {/* Sticky Header */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '70px',
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: 'var(--space-md)',
                paddingRight: 'var(--space-md)',
                background: 'rgba(11, 11, 15, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <button
                        onClick={goBack}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: 'rgba(255, 255, 255, 0.05)',
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
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1 }}>
                            {lesson.number}
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.2 }}>
                            {lesson.title.length > 20 ? lesson.title.substring(0, 20) + '...' : lesson.title}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        onClick={() => prevLesson && handleLessonChange(prevLesson.id)}
                        disabled={!prevLesson}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: prevLesson ? 'var(--text-primary)' : 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: prevLesson ? 'pointer' : 'default'
                        }}
                    >
                        <ChevronRight size={20} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button
                        onClick={() => nextLesson && handleLessonChange(nextLesson.id)}
                        disabled={!nextLesson}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: nextLesson ? 'var(--text-primary)' : 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: nextLesson ? 'pointer' : 'default'
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* ==========================================
                ГРАМАТИКА (Підтягнуто нагору)
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
                        if (activeLessonId === 12) {
                            console.log(`[DEBUG] Topic: ${topic.id}, Content:`, getGrammarContent(topic.id), "HasContent:", hasContent);
                        }

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

            {/* ==========================================
                СЛОВНИК - Головний CTA
            ========================================== */}
            <button
                onClick={() => startLessonWords(activeLessonId)}
                style={{
                    width: '100%',
                    padding: '20px',
                    marginBottom: 'var(--space-md)',
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
                ТЕСТ - Перевірка знань
            ========================================== */}
            {lessonTest && (
                <button
                    onClick={() => startLessonTest && startLessonTest(activeLessonId)}
                    style={{
                        width: '100%',
                        padding: '16px 20px',
                        marginBottom: 'var(--space-lg)',
                        background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(46, 204, 113, 0.05) 100%)',
                        border: '1px solid rgba(46, 204, 113, 0.3)',
                        borderRadius: 16,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)'
                    }}
                >
                    <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(46, 204, 113, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ClipboardCheck size={22} color="#2ECC71" />
                    </div>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                        <div style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#2ECC71',
                            marginBottom: 2
                        }}>
                            Пройти тест
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            {lessonTest.questions.length} питань • Перевірка знань
                        </div>
                    </div>
                    <ChevronRight size={20} color="#2ECC71" />
                </button>
            )}
        </div>
    );
};

export default LessonDetail;
