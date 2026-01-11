// src/components/HomeTab.jsx
// Dashboard - Violang-inspired Premium Design
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { lessons } from '../data/lexicon';
import { BookOpen, BookText, Languages, MessageCircle, Flame, Play, ChevronRight, Clock, Sparkles, PenTool } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const openLesson = useStore(state => state.openLesson);

    // Auth
    const user = useAuthStore(state => state.user);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const dailyProgress = useAuthStore(state => state.dailyProgress);
    const streak = useAuthStore(state => state.streak);

    const userName = user?.displayName?.split(' ')[0] || 'Друже';

    // Current lesson
    const currentLesson = lessons.find(l => getLessonProgress(l.id).percent < 100) || lessons[lessons.length - 1];
    const lessonProgress = getLessonProgress(currentLesson.id);

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
                ШВИДКИЙ ДОСТУП
            ===================== */}
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-0)', margin: '0 0 12px' }}>
                Швидкий доступ
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {/* Картки */}
                <div
                    onClick={() => useStore.getState().startLessonWords(currentLesson.id)}
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
                    onClick={() => useStore.getState().startNounMaster(currentLesson.id)}
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
        </div>
    );
};

export default HomeTab;
