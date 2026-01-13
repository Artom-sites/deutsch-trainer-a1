// src/components/HomeTab.jsx
// Dashboard - Violang-inspired Premium Design
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { lessons } from '../data/lexicon';
import { BookOpen, BookText, Languages, MessageCircle, Flame, Play, ChevronRight, Clock, Sparkles, PenTool, Bell } from 'lucide-react';
import SRSCalendar from './SRSCalendar';
import SettingsModal from './SettingsModal';
import { requestNotificationPermission, checkPermission, sendNotification } from '../utils/notifications';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const openLesson = useStore(state => state.openLesson);
    const getOverallProgress = useStore(state => state.getOverallProgress);
    const getWeakWords = useStore(state => state.getWeakWords);

    // Auth
    const user = useAuthStore(state => state.user);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const dailyProgress = useAuthStore(state => state.dailyProgress);
    const streak = useAuthStore(state => state.streak);
    const weeklyActivity = useAuthStore(state => state.weeklyActivity);

    const userName = user?.displayName?.split(' ')[0] || 'Друже';

    // Notification & Settings State
    const [notifEnabled, setNotifEnabled] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        setNotifEnabled(checkPermission());
    }, []);

    const handleEnableNotifs = async () => {
        const granted = await requestNotificationPermission();
        if (granted) {
            setNotifEnabled(true);
            sendNotification('Чудово! 🎉', 'Я нагадаю тобі про слова завтра!');
        }
    };

    // Last visited lesson (or fall back to first incomplete)
    const lastVisitedLessonId = useStore(state => state.lastVisitedLessonId);
    const currentLesson = lastVisitedLessonId
        ? (lessons.find(l => l.id === lastVisitedLessonId) || lessons[0])
        : (lessons.find(l => getLessonProgress(l.id).percent < 100) || lessons[0]);
    const lessonProgress = getLessonProgress(currentLesson.id);

    return (
        <div className="app">
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}

            {/* =====================
                HEADER
            ===================== */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24
            }}>
                {/* Left: Avatar (Click for Settings) */}
                <div
                    onClick={() => setShowSettings(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                >
                    <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        aspectRatio: '1 / 1',
                        background: 'var(--pri-soft)',
                        border: '2px solid rgba(255,107,53,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.2rem', color: 'var(--pri)', fontWeight: 700, flexShrink: 0
                    }}>
                        {user ? (
                            (user.displayName?.[0] || 'U').toUpperCase()
                        ) : (
                            '👤'
                        )}
                    </div>
                </div>

                {/* Center (Optional, or removed for cleaner look) */}
                {/* <h1 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Привіт, {userName}!</h1> */}

                {/* Right: Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {!notifEnabled && (
                        <button
                            onClick={handleEnableNotifs}
                            style={{
                                background: 'rgba(255,255,255,0.06)', border: 'none',
                                borderRadius: '50%', width: 40, height: 40,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#F26A1B'
                            }}>
                            <Bell size={20} />
                        </button>
                    )}

                    {/* Streak Badge */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '6px 12px', borderRadius: 999,
                        background: streak > 0 ? 'var(--pri-soft)' : 'var(--surface)',
                        border: `1px solid ${streak > 0 ? 'rgba(255,107,53,.3)' : 'var(--stroke)'}`,
                        color: streak > 0 ? 'var(--pri)' : 'var(--text-2)',
                        fontWeight: 600, fontSize: '0.9rem'
                    }}>
                        <Flame size={16} fill={streak > 0 ? 'var(--pri)' : 'none'} />
                        {streak}
                    </div>
                </div>
            </header>

            <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                    Привіт, {userName}! 👋
                </h1>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', margin: 0 }}>
                    Готовий до нових досягнень?
                </p>
            </div>

            {/* =====================
                HERO LESSON CARD
            ===================== */}
            <div
                onClick={() => openLesson(currentLesson.id)}
                className="card-interactive"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: 24,
                    padding: 20,
                    marginBottom: 24,
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
                    className="card-interactive"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04))',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 20, padding: 16,
                        cursor: 'pointer',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
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
                    className="card-interactive"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04))',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 20, padding: 16,
                        cursor: 'pointer',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
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
                SRS CALENDAR
            ===================== */}
            <SRSCalendar />

            {/* SRSCalendar now includes weekly activity */}

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
                    className="card-interactive"
                    style={{
                        background: 'linear-gradient(135deg, rgba(47, 230, 166, 0.15), rgba(47, 230, 166, 0.05))',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(47, 230, 166, 0.3)',
                        borderRadius: 18, padding: 14,
                        cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: 10, textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        transition: 'transform 0.15s ease'
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
                    className="card-interactive"
                    style={{
                        background: 'linear-gradient(135deg, rgba(87, 166, 255, 0.15), rgba(87, 166, 255, 0.05))',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(87, 166, 255, 0.3)',
                        borderRadius: 18, padding: 14,
                        cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: 10, textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        transition: 'transform 0.15s ease'
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

            {/* Removed placeholder sections (Мікро-урок, Розмовна ситуація) */}

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
                const weakWords = getWeakWords(8);
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
                        <div
                            onClick={() => useStore.getState().startReviewNounMaster(weakWords)}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24, cursor: 'pointer' }}
                        >
                            {weakWords.map(word => (
                                <div key={word.id} style={{
                                    background: 'rgba(233, 75, 90, 0.1)',
                                    border: '1px solid rgba(233, 75, 90, 0.25)',
                                    borderRadius: 12,
                                    padding: '8px 12px',
                                    fontSize: '0.85rem',
                                    pointerEvents: 'none' // Prevent individual clicks from bubbling weirdly if needed, though harmless here
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
