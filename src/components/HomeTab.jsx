// src/components/HomeTab.jsx
// Dashboard - Violang-inspired Premium Design
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { lessons, exercises } from '../data/lexicon';
import { audioLessons } from '../data/audioLessons';
import { chatScenarios } from '../data/chatScenarios';
import AudioSession from './AudioSession';
import { BookOpen, BookText, Languages, MessageCircle, Flame, Play, ChevronRight, Clock, Sparkles, PenTool, AlertCircle } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const setView = useStore(state => state.setView); // Is this used?

    // New state for Audio Player
    const [activeAudioLesson, setActiveAudioLesson] = useState(null);

    const activeLessonId = useStore(state => state.activeLessonId);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const openLesson = useStore(state => state.openLesson);
    const getOverallProgress = useStore(state => state.getOverallProgress);
    const getWeakWords = useStore(state => state.getWeakWords);
    const getMistakes = useStore(state => state.getMistakes);
    const startChatScenario = useStore(state => state.startChatScenario);
    // Helper to start specific exercises
    const startExerciseSession = useStore(state => (exercisesList) => {
        useStore.setState({
            currentView: 'exercises',
            activeExercises: exercisesList
        });
    });

    // Import exercises data locally to avoid store overhead if possible, 
    // or use a helper. Since exercises are exported from lexicon, we can import them.
    // But we need to make sure we have access to the full list.
    // Let's assume we can get them via a store selector or direct import.
    // For now, I'll use a direct import at top of file, so let's add it.

    // Auth
    const user = useAuthStore(state => state.user);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const dailyProgress = useAuthStore(state => state.dailyProgress);
    const streak = useAuthStore(state => state.streak);
    const weeklyActivity = useAuthStore(state => state.weeklyActivity);

    const userName = user?.displayName?.split(' ')[0] || 'Друже';

    // Last visited lesson (or fall back to first incomplete)
    // Last visited lesson (or fall back to first incomplete)
    const lastVisitedLessonId = useStore(state => state.lastVisitedLessonId);

    // Safety: ensure lessons exist
    const safeLessons = lessons && lessons.length > 0 ? lessons : [];

    const currentLesson = lastVisitedLessonId
        ? (safeLessons.find(l => l.id === lastVisitedLessonId) || safeLessons[0])
        : (safeLessons.find(l => getLessonProgress(l.id).percent < 100) || safeLessons[0]);

    const lessonProgress = currentLesson ? getLessonProgress(currentLesson.id) : { percent: 0, total: 0, learned: 0 };

    if (activeAudioLesson) {
        return <AudioSession lesson={activeAudioLesson} onBack={() => setActiveAudioLesson(null)} />;
    }

    return (
        <div className="app">
            {/* =====================
                HEADER
            ===================== */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                        width: 48, height: 48, borderRadius: 16,
                        background: 'var(--pri-soft)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.4rem'
                    }}>
                        👋
                    </div>
                    <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: 0 }}>Вітаємо,</p>
                        <h1 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--text-0)' }}>{userName}</h1>
                    </div>
                </div>

                {/* Streak Badge */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 14px', borderRadius: 999,
                    background: streak > 0 ? 'var(--pri-soft)' : 'var(--surface)',
                    border: `1px solid ${streak > 0 ? 'rgba(255,107,53,.3)' : 'var(--stroke)'}`,
                    color: streak > 0 ? 'var(--pri)' : 'var(--text-2)',
                    fontWeight: 600, fontSize: '0.9rem'
                }}>
                    <Flame size={16} fill={streak > 0 ? 'var(--pri)' : 'none'} />
                    {streak} {streak === 1 ? 'день' : 'днів'}
                </div>
            </header>

            {/* =====================
                HERO LESSON CARD
            ===================== */}
            {currentLesson ? (
                <div
                    onClick={() => openLesson(currentLesson.id)}
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                        border: '1px solid var(--stroke)',
                        borderRadius: 24,
                        padding: 20,
                        marginBottom: 24,
                        cursor: 'pointer',
                        boxShadow: 'var(--sh-1)'
                    }}
                >
                    <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                        {/* Play Icon */}
                        <div style={{
                            width: 52, height: 52, borderRadius: 14,
                            background: 'linear-gradient(180deg, rgba(255,107,53,0.22), rgba(255,107,53,0.08))',
                            border: '1px solid rgba(255,107,53,0.2)',
                            boxShadow: '0 12px 30px rgba(255,107,53,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
                        </div>

                        <div style={{ flex: 1 }}>
                            {/* Meta */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                marginBottom: 6, flexWrap: 'wrap'
                            }}>
                                <span style={{
                                    background: 'var(--surface)',
                                    padding: '4px 10px', borderRadius: 8,
                                    fontSize: '0.75rem', color: 'var(--text-1)', fontWeight: 500
                                }}>
                                    Урок {currentLesson.id}
                                </span>
                                <span style={{
                                    display: 'flex', alignItems: 'center', gap: 4,
                                    fontSize: '0.75rem', color: 'var(--text-2)'
                                }}>
                                    <Clock size={12} /> ~6 хв
                                </span>
                            </div>

                            {/* Title */}
                            <h2 style={{
                                fontSize: '1.15rem', fontWeight: 700,
                                color: 'var(--text-0)', margin: 0, lineHeight: 1.3,
                                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                            }}>
                                {currentLesson.title}
                            </h2>

                            <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginTop: 4, marginBottom: 0 }}>
                                {currentLesson.description}
                            </p>
                        </div>
                    </div>

                    {/* Progress */}
                    <div style={{ marginBottom: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>Прогрес</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-0)' }}>{lessonProgress.percent}%</span>
                        </div>
                        <div style={{ height: 6, background: 'var(--surface)', borderRadius: 3 }}>
                            <div style={{
                                height: '100%', borderRadius: 3,
                                background: 'linear-gradient(90deg, var(--pri), var(--pri-2))',
                                width: `${lessonProgress.percent}%`
                            }} />
                        </div>
                    </div>

                    {/* Continue Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            background: 'var(--pri)',
                            color: '#0B0B0F',
                            border: 'none', borderRadius: 999,
                            padding: '10px 20px',
                            fontWeight: 600, fontSize: '0.9rem',
                            display: 'flex', alignItems: 'center', gap: 6,
                            boxShadow: '0 8px 24px rgba(255,107,53,.25)'
                        }}>
                            Продовжити <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            ) : (
                <div style={{
                    padding: 24, textAlign: 'center', marginBottom: 24,
                    background: 'var(--surface)', borderRadius: 24, border: '1px solid var(--stroke)'
                }}>
                    <div style={{ fontSize: '2rem', marginBottom: 12 }}>🎉</div>
                    <h3 style={{ color: 'var(--text-0)', marginBottom: 8 }}>Вітаємо!</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>Ви пройшли всі доступні уроки.</p>
                </div>
            )}

            {/* =====================
                ТВІЙ ДЕНЬ (Stats)
            ===================== */}
            <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 12
            }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                    Твій день
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                    Мета без стриків
                </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                {/* Words */}
                <div
                    onClick={() => setTab('dictionary')}
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                        border: '1px solid var(--stroke)',
                        borderRadius: 20, padding: 16,
                        cursor: 'pointer'
                    }}
                >
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '0 0 8px' }}>Слова</p>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 8 }}>
                        {dailyProgress}<span style={{ color: 'var(--text-2)', fontSize: '1.2rem' }}>/{dailyGoal}</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--surface)', borderRadius: 2 }}>
                        <div style={{
                            height: '100%', borderRadius: 2,
                            background: 'var(--pri)',
                            width: `${Math.min((dailyProgress / dailyGoal) * 100, 100)}%`
                        }} />
                    </div>
                </div>

                {/* Learned total */}
                <div
                    onClick={() => setTab('lessons')}
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                        border: '1px solid var(--stroke)',
                        borderRadius: 20, padding: 16,
                        cursor: 'pointer'
                    }}
                >
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '0 0 8px' }}>Граматика</p>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 8 }}>
                        {getLearnedCount()}<span style={{ color: 'var(--text-2)', fontSize: '1.2rem' }}>/100</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-2)', margin: 0 }}>Слів вивчено</p>
                </div>
            </div>

            {/* =====================
                WEEKLY ACTIVITY CHART
            ===================== */}
            <div style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                border: '1px solid var(--stroke)',
                borderRadius: 20, padding: 16, marginBottom: 24
            }}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 16
                }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-0)' }}>
                        Активність за тиждень
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-2)' }}>
                        {(weeklyActivity || []).reduce((a, b) => a + b, 0)} дій
                    </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: 60 }}>
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day, i) => {
                        const value = (weeklyActivity || [])[i] || 0;
                        const maxVal = Math.max(...(weeklyActivity || [1]), 1);
                        const heightPercent = (value / maxVal) * 100;
                        const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
                        const isToday = i === todayIndex;

                        return (
                            <div key={day} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', flex: 1, gap: 4
                            }}>
                                <div style={{
                                    width: '70%',
                                    height: Math.max(heightPercent * 0.5, 4),
                                    borderRadius: 4,
                                    background: isToday
                                        ? 'linear-gradient(180deg, #F26A1B, #E55A0D)'
                                        : value > 0
                                            ? 'linear-gradient(180deg, rgba(87,166,255,0.8), rgba(87,166,255,0.4))'
                                            : 'rgba(255,255,255,0.08)',
                                    transition: 'height 0.3s ease'
                                }} />
                                <span style={{
                                    fontSize: '0.65rem',
                                    color: isToday ? 'var(--text-0)' : 'var(--text-2)',
                                    fontWeight: isToday ? 600 : 400
                                }}>
                                    {day}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* =====================
                ШВИДКИЙ ДОСТУП
            ===================== */}
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: '0 0 12px' }}>
                Швидкий доступ
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {/* Картки */}
                <div
                    onClick={() => currentLesson && useStore.getState().startLessonWords(currentLesson.id)}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(47,230,166,0.25)',
                        borderRadius: 18, padding: 14,
                        cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: 10, textAlign: 'center',
                        boxShadow: '0 0 25px rgba(47,230,166,0.08)',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                >
                    <div style={{
                        width: 50, height: 50, borderRadius: 14,
                        background: 'linear-gradient(180deg, rgba(46,204,113,0.22), rgba(46,204,113,0.08))',
                        border: '1px solid rgba(46,204,113,0.2)',
                        boxShadow: '0 12px 30px rgba(46,204,113,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Sparkles size={24} color="#fff" />
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.9rem' }}>Картки</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-2)' }}>Швидкий старт</div>
                    </div>
                </div>

                {/* Noun Master */}
                <div
                    onClick={() => currentLesson && useStore.getState().startNounMaster(currentLesson.id)}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(87,166,255,0.25)',
                        borderRadius: 18, padding: 14,
                        cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: 10, textAlign: 'center',
                        boxShadow: '0 0 25px rgba(87,166,255,0.08)',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                >
                    <div style={{
                        width: 50, height: 50, borderRadius: 14,
                        background: 'linear-gradient(180deg, rgba(87,166,255,0.22), rgba(87,166,255,0.08))',
                        border: '1px solid rgba(87,166,255,0.2)',
                        boxShadow: '0 12px 30px rgba(87,166,255,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <PenTool size={24} color="#fff" />
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.9rem' }}>Noun Master</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-2)' }}>Швидкий старт</div>
                    </div>
                </div>
            </div>

            {/* =====================
                РЕКОМЕНДОВАНО
            ===================== */}
            <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 12
            }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                    Рекомендовано
                </h3>
                <span
                    onClick={() => setTab('lessons')}
                    style={{ fontSize: '0.8rem', color: 'var(--text-2)', cursor: 'pointer' }}
                >
                    Дивитись все
                </span>
            </div>

            {/* Daily lesson */}
            <div
                onClick={() => setTab('verbs')}
                style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                    border: '1px solid var(--stroke)',
                    borderRadius: 20, padding: 16, marginBottom: 12,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14
                }}
            >
                <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'linear-gradient(180deg, rgba(87,166,255,0.22), rgba(87,166,255,0.08))',
                    border: '1px solid rgba(87,166,255,0.2)',
                    boxShadow: '0 12px 30px rgba(87,166,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Languages size={22} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '1rem', marginBottom: 4 }}>
                        Мікро-урок дня
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: 8 }}>
                        Дієслова + кон'югація
                    </div>
                    <span style={{
                        display: 'inline-block',
                        background: 'var(--surface)',
                        padding: '4px 10px', borderRadius: 8,
                        fontSize: '0.75rem', color: 'var(--text-1)'
                    }}>
                        Тема: Präsens
                    </span>
                </div>
                <ChevronRight size={20} color="var(--text-2)" />
            </div>

            {/* Chat */}
            <div
                onClick={() => setTab('chat')}
                style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                    border: '1px solid var(--stroke)',
                    borderRadius: 20, padding: 16, marginBottom: 24,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14
                }}
            >
                <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'linear-gradient(180deg, rgba(46,204,113,0.22), rgba(46,204,113,0.08))',
                    border: '1px solid rgba(46,204,113,0.2)',
                    boxShadow: '0 12px 30px rgba(46,204,113,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <MessageCircle size={22} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '1rem', marginBottom: 4 }}>
                        Розмовна ситуація
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: 8 }}>
                        Короткий діалог з підказками
                    </div>
                    <span style={{
                        display: 'inline-block',
                        background: 'var(--surface)',
                        padding: '4px 10px', borderRadius: 8,
                        fontSize: '0.75rem', color: 'var(--text-1)'
                    }}>
                        Тема: Im Café
                    </span>
                </div>
                <ChevronRight size={20} color="var(--text-2)" />
            </div>

            {/* =====================
                MISTAKES OF THE DAY
            ===================== */}
            {(() => {
                const rawMistakes = getMistakes();
                const mistakeExercises = rawMistakes
                    .map(m => exercises[m.id]) // Get full exercise object
                    .filter(Boolean)
                    .slice(0, 3);

                if (mistakeExercises.length === 0) return null;

                const handleReviewMistakes = () => {
                    const fullList = rawMistakes.map(m => exercises[m.id]).filter(Boolean);
                    // Shuffle a bit or take top 20
                    startExerciseSession(fullList.slice(0, 20));
                };

                return (
                    <div style={{ marginBottom: 24 }}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', marginBottom: 12
                        }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                                ⚠️ Робота над помилками
                            </h3>
                            <span
                                onClick={handleReviewMistakes}
                                style={{ fontSize: '0.8rem', color: 'var(--pri)', cursor: 'pointer', fontWeight: 600 }}
                            >
                                Повторити ({rawMistakes.length})
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {mistakeExercises.map(ex => (
                                <div key={ex.id} onClick={handleReviewMistakes} style={{
                                    background: 'rgba(233, 75, 90, 0.05)',
                                    border: '1px solid rgba(233, 75, 90, 0.15)',
                                    borderRadius: 14,
                                    padding: '12px 14px',
                                    display: 'flex', alignItems: 'center', gap: 12,
                                    cursor: 'pointer'
                                }}>
                                    <div style={{
                                        width: 36, height: 36, borderRadius: 10,
                                        background: 'rgba(233, 75, 90, 0.15)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <AlertCircle size={18} color="#E94B5A" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-0)', marginBottom: 2 }}>
                                            {ex.question?.replace(/___/g, '...').substring(0, 40) + (ex.question?.length > 40 ? '...' : '')}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-2)' }}>
                                            Тема: {ex.topic}
                                        </div>
                                    </div>
                                    <ChevronRight size={18} color="var(--text-2)" />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })()}

            {/* =====================
                AUDIO LESSONS
            ===================== */}
            <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                        🎧 Міні-подкасти
                    </h3>
                </div>
                <div style={{
                    display: 'flex', gap: 12, overflowX: 'auto',
                    paddingRight: 16, paddingBottom: 8, scrollbarWidth: 'none'
                }}>
                    {audioLessons.map(lesson => (
                        <div
                            key={lesson.id}
                            onClick={() => setActiveAudioLesson(lesson)}
                            style={{
                                minWidth: 140, width: 140,
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                border: '1px solid var(--stroke)',
                                borderRadius: 16, padding: 12,
                                display: 'flex', flexDirection: 'column', gap: 8,
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: 32, height: 32, borderRadius: 10,
                                background: lesson.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Play size={14} fill="white" color="white" />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2, marginBottom: 4 }}>
                                    {lesson.title}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <Clock size={10} /> {lesson.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* =====================
                DIALOGUES
            ===================== */}
            <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                        💬 Інтерактивні діалоги
                    </h3>
                </div>
                <div style={{
                    display: 'flex', gap: 12, overflowX: 'auto',
                    paddingRight: 16, paddingBottom: 8, scrollbarWidth: 'none'
                }}>
                    {chatScenarios.map(scenario => (
                        <div
                            key={scenario.id}
                            onClick={() => startChatScenario(scenario.id)}
                            style={{
                                minWidth: 140, width: 140,
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                border: '1px solid var(--stroke)',
                                borderRadius: 16, padding: 12,
                                display: 'flex', flexDirection: 'column', gap: 8,
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: 32, height: 32, borderRadius: 10,
                                background: 'rgba(242, 106, 27, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                {scenario.icon}
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2, marginBottom: 4 }}>
                                    {scenario.title.split('(')[0]}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-2)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {scenario.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* =====================
                PROGRESS RING
            ===================== */}
            {(() => {
                const progress = getOverallProgress();
                const radius = 40;
                const stroke = 6;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (progress.percent / 100) * circumference;

                return (
                    <div style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                        border: '1px solid var(--stroke)',
                        borderRadius: 20, padding: 16, marginBottom: 24,
                        display: 'flex', alignItems: 'center', gap: 16
                    }}>
                        <svg width={100} height={100} style={{ flexShrink: 0 }}>
                            <circle
                                cx={50} cy={50} r={radius}
                                fill="none"
                                stroke="rgba(255,255,255,0.08)"
                                strokeWidth={stroke}
                            />
                            <circle
                                cx={50} cy={50} r={radius}
                                fill="none"
                                stroke="#2ECC71"
                                strokeWidth={stroke}
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                transform="rotate(-90 50 50)"
                                style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                            />
                            <text x={50} y={50} textAnchor="middle" dy="0.3em"
                                style={{ fontSize: '1.2rem', fontWeight: 700, fill: '#fff' }}>
                                {progress.percent}%
                            </text>
                        </svg>
                        <div>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', marginBottom: 4 }}>
                                Загальний прогрес
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>
                                {progress.learned} з {progress.total} слів
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* =====================
                WEAK WORDS
            ===================== */}
            {(() => {
                const weakWords = getWeakWords(4);
                if (weakWords.length === 0) return null;

                return (
                    <>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', marginBottom: 12
                        }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: 0 }}>
                                🔄 Потрібно повторити
                            </h3>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-2)' }}>
                                {weakWords.length} слів
                            </span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                            {weakWords.map(word => (
                                <div key={word.id} style={{
                                    background: 'rgba(233, 75, 90, 0.1)',
                                    border: '1px solid rgba(233, 75, 90, 0.25)',
                                    borderRadius: 12,
                                    padding: '8px 12px',
                                    fontSize: '0.85rem'
                                }}>
                                    <span style={{ color: 'var(--text-0)', fontWeight: 500 }}>{word.word}</span>
                                    <span style={{ color: 'var(--text-2)', marginLeft: 6 }}>{word.translation}</span>
                                </div>
                            ))}
                        </div>
                    </>
                );
            })()}
        </div>
    );
};

export default HomeTab;
