import React from 'react';
import useStore from '../store/useStore';
import { getLessonById, getWordsForLesson, getGrammarForLesson, getExercisesForTopic, getGrammarContent, lessons } from '../data/lexicon';
import { getTestForLesson } from '../data/lessonTests';
import { getReadingForLesson } from '../data/lessonReadings';
import { ArrowLeft, BookOpen, Lightbulb, PenTool, ChevronRight, Play, ClipboardCheck, BookText, CheckCircle2, MessageSquare, GraduationCap } from 'lucide-react';

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
        useStore.getState().openLesson(newId);
    };

    return (
        <div className="screen" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
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
                TEXTBOOK SECTION (Goals, Communication, Grammar)
            ========================================== */}
            {lesson.textbook && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>

                    {/* 1. GOALS (Lernziele) */}
                    {lesson.textbook.goals && (
                        <div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                marginBottom: 12, color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}>
                                <GraduationCap size={18} />
                                Lernziele (Що ви вивчите)
                            </div>
                            <div style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 16,
                                padding: 16
                            }}>
                                {lesson.textbook.goals.map((goal, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: 12, marginBottom: idx === lesson.textbook.goals.length - 1 ? 0 : 12 }}>
                                        <div style={{ marginTop: 2 }}>
                                            <CheckCircle2 size={18} color="var(--pri)" />
                                        </div>
                                        <div style={{ fontSize: '0.95rem', color: 'var(--text-0)', lineHeight: '1.4' }}>
                                            {goal}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 2. COMMUNICATION (Kommunikation) */}
                    {lesson.textbook.communication && (
                        <div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                marginBottom: 12, color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}>
                                <MessageSquare size={18} />
                                Kommunikation (Спілкування)
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {lesson.textbook.communication.map((item, idx) => (
                                    <div key={idx} style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: 16,
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            padding: '12px 16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            fontWeight: 600,
                                            color: 'var(--text-1)',
                                            fontSize: '0.9rem'
                                        }}>
                                            {item.title}
                                        </div>
                                        <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            {item.phrases.map((phrase, pIdx) => (
                                                <div key={pIdx} style={{
                                                    paddingLeft: 10, borderLeft: '2px solid var(--pri)',
                                                    color: 'var(--text-2)', fontStyle: 'italic', fontSize: '0.9rem'
                                                }}>
                                                    "{phrase}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. GRAMMAR TABLE (Grammatik) */}
                    {lesson.textbook.grammar && (
                        <div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                marginBottom: 12, color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px'
                            }}>
                                <BookOpen size={18} />
                                Grammatik (Граматика)
                            </div>
                            {/* Horizontal Scroll for Grammar Cards */}
                            <div style={{
                                display: 'flex', overflowX: 'auto', gap: 12, paddingBottom: 8,
                                scrollbarWidth: 'none', margin: '0 -16px', padding: '0 16px 8px' // Break out of container
                            }}>
                                {lesson.textbook.grammar.map((g, idx) => (
                                    <div key={idx} style={{
                                        minWidth: 260,
                                        maxWidth: 280,
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: 16,
                                        padding: 16,
                                        display: 'flex', flexDirection: 'column'
                                    }}>
                                        <div style={{ fontWeight: 600, color: 'var(--pri)', marginBottom: 8, fontSize: '0.9rem' }}>
                                            {g.title}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', whiteSpace: 'pre-line', lineHeight: '1.5' }}>
                                            {g.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ==========================================
                STANDARD EXERCISES
            ========================================== */}
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text-0)' }}>
                Практика
            </div>

            {/* Words */}
            <button
                onClick={() => startLessonWords(activeLessonId)}
                style={{
                    width: '100%',
                    padding: 14,
                    marginBottom: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--stroke)',
                    borderRadius: 18,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14
                }}
            >
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'linear-gradient(180deg, rgba(255,107,53,0.20), rgba(255,107,53,0.07))',
                    border: '1px solid rgba(255,107,53,0.19)',
                    boxShadow: '0 12px 34px rgba(255,107,53,0.13)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Play size={22} color="#fff" fill="#fff" />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-0)', marginBottom: 4 }}>
                        Вчити слова
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                        {lessonWords.length} слів • {progress.learned} вивчено
                    </div>
                </div>
                <ChevronRight size={20} color="var(--text-2)" />
            </button>

            {/* Reading  */}
            {getReadingForLesson(activeLessonId) && (
                <button
                    onClick={() => useStore.getState().startReading(activeLessonId)}
                    style={{
                        width: '100%',
                        padding: 14,
                        marginBottom: 12,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 18,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14
                    }}
                >
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: 'linear-gradient(180deg, rgba(59,130,246,0.20), rgba(59,130,246,0.07))',
                        border: '1px solid rgba(59,130,246,0.19)',
                        boxShadow: '0 12px 34px rgba(59,130,246,0.13)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <BookText size={22} color="#fff" />
                    </div>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-0)', marginBottom: 4 }}>
                            Lesen (Читання)
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                            Читання з інтерактивним перекладом
                        </div>
                    </div>
                    <ChevronRight size={20} color="var(--text-2)" />
                </button>
            )}

            {/* Noun Master */}
            <button
                onClick={() => useStore.getState().startNounMaster(activeLessonId)}
                style={{
                    width: '100%',
                    padding: 14,
                    marginBottom: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--stroke)',
                    borderRadius: 18,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14
                }}
            >
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'linear-gradient(180deg, rgba(139,92,246,0.20), rgba(139,92,246,0.07))',
                    border: '1px solid rgba(139,92,246,0.19)',
                    boxShadow: '0 12px 34px rgba(139,92,246,0.13)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <PenTool size={22} color="#fff" />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-0)', marginBottom: 4 }}>
                        Noun Master
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                        Артикль • Слово • Множина
                    </div>
                </div>
                <ChevronRight size={20} color="var(--text-2)" />
            </button>

            {/* Grammar Topics (Interactive) - Only if not fully covered by textbook summary, or as deep dive */}
            {grammarTopics.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase' }}>
                        Інтерактивні вправи (Граматика)
                    </div>
                    {grammarTopics.map(topic => {
                        const topicExercises = getExercisesForTopic(topic.id);
                        const hasContent = getGrammarContent(topic.id) !== null;

                        return (
                            <div key={topic.id} style={{
                                padding: 12,
                                marginBottom: 8,
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 14,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ fontSize: '1.2rem', opacity: 0.8 }}>{topic.icon}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-1)' }}>{topic.name}</div>
                                </div>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    {hasContent && (
                                        <button onClick={() => openGrammarTopic(topic.id)} style={{ padding: '6px 10px', borderRadius: 8, background: 'rgba(242,106,27,0.1)', color: 'var(--pri)', border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>
                                            Теорія
                                        </button>
                                    )}
                                    <button onClick={() => startTopicExercises(topic.id)} style={{ padding: '6px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>
                                        Вправи
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Test (Sticky Bottom or just end list) */}
            {lessonTest && (
                <button
                    onClick={() => startLessonTest && startLessonTest(activeLessonId)}
                    style={{
                        width: '100%',
                        padding: 14,
                        marginTop: 20,
                        background: 'linear-gradient(180deg, rgba(34,197,94,0.20), rgba(34,197,94,0.07))',
                        border: '1px solid rgba(34,197,94,0.19)',
                        borderRadius: 18,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14
                    }}
                >
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: 'rgba(34,197,94,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ClipboardCheck size={22} color="#fff" />
                    </div>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-0)', marginBottom: 4 }}>
                            Фінальний Тест
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                            Перевірити знання ({lessonTest.questions.length} питань)
                        </div>
                    </div>
                    <ChevronRight size={20} color="var(--text-2)" />
                </button>
            )}

        </div>
    );
};

export default LessonDetail;
