// src/components/HomeTab.jsx
// Dashboard - Premium Design with Design System
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { lessons } from '../data/lexicon';
import { BookOpen, BookText, Languages, MessageCircle, Flame, Play, ChevronRight, Download } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const openLesson = useStore(state => state.openLesson);

    // PWA Install
    const [installPrompt, setInstallPrompt] = useState(null);
    useEffect(() => {
        const handler = (e) => { e.preventDefault(); setInstallPrompt(e); };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!installPrompt) return;
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        if (outcome === 'accepted') setInstallPrompt(null);
    };

    // Auth
    const user = useAuthStore(state => state.user);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const dailyProgress = useAuthStore(state => state.dailyProgress);
    const streak = useAuthStore(state => state.streak);

    const userName = user?.displayName?.split(' ')[0] || 'Друже';

    // Current lesson
    const currentLesson = lessons.find(l => getLessonProgress(l.id).percent < 100) || lessons[lessons.length - 1];
    const lessonProgress = getLessonProgress(currentLesson.id);

    // Quick actions
    const features = [
        { id: 'lessons', icon: BookOpen, title: 'Уроки', color: 'var(--der)' },
        { id: 'dictionary', icon: BookText, title: 'Словник', color: 'var(--die)' },
        { id: 'verbs', icon: Languages, title: 'Дієслова', color: 'var(--das)' },
        { id: 'chat', icon: MessageCircle, title: 'AI Чат', color: 'var(--warn)' }
    ];

    return (
        <div className="app">
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <div>
                    <p className="muted small" style={{ marginBottom: 2 }}>Привіт,</p>
                    <h1 style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0, color: 'var(--text-0)' }}>{userName} 👋</h1>
                </div>

                {/* Streak Badge */}
                <div className={`badge ${streak > 0 ? 'badge--pri' : ''}`}>
                    <Flame size={16} />
                    <span>{streak} {streak === 1 ? 'день' : streak > 1 && streak < 5 ? 'дні' : 'днів'}</span>
                </div>
            </header>

            {/* PWA Install */}
            {installPrompt && (
                <div
                    onClick={handleInstall}
                    className="card card-pad card-interactive"
                    style={{ marginBottom: 20, background: 'linear-gradient(135deg, var(--pri), #ff5a1f)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>Встановити додаток</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>Вивчайте офлайн ⚡️</div>
                        </div>
                        <Download size={24} color="#fff" />
                    </div>
                </div>
            )}

            {/* Hero Card - Continue Learning */}
            <p className="label mb-2">ПРОДОВЖИТИ</p>
            <div
                onClick={() => openLesson(currentLesson.id)}
                className="card card-pad card-interactive"
                style={{ marginBottom: 28 }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                        <span className="badge badge--pri" style={{ marginBottom: 10 }}>
                            Урок {currentLesson.id}
                        </span>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-0)', margin: 0, lineHeight: 1.3 }}>
                            {currentLesson.title}
                        </h2>
                        <p className="muted small" style={{ marginTop: 4 }}>{currentLesson.description}</p>
                    </div>

                    <div className="icon-box icon-box--pri" style={{ borderRadius: '50%', width: 52, height: 52 }}>
                        <Play size={24} color="#0B0B0F" fill="#0B0B0F" style={{ marginLeft: 3 }} />
                    </div>
                </div>

                {/* Progress */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span className="muted small">Прогрес</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.9rem' }}>{lessonProgress.percent}%</span>
                </div>
                <div className="progress">
                    <div className="progress-fill" style={{ width: `${lessonProgress.percent}%` }} />
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid-2 mb-4">
                <div className="card card-pad card-sm">
                    <p className="muted small mb-1">Сьогодні</p>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-0)' }}>
                        {dailyProgress}<span className="muted" style={{ fontSize: '1rem' }}>/{dailyGoal}</span>
                    </div>
                    <p className="muted small">слів</p>
                </div>
                <div className="card card-pad card-sm">
                    <p className="muted small mb-1">Всього вивчено</p>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ok)' }}>
                        {getLearnedCount()}
                    </div>
                    <p className="muted small">слів</p>
                </div>
            </div>

            {/* Quick Actions */}
            <p className="label mb-2">ШВИДКИЙ ДОСТУП</p>
            <div className="grid-4">
                {features.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setTab(f.id)}
                        className="card card-interactive"
                        style={{
                            padding: '14px 8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8,
                            border: 'none'
                        }}
                    >
                        <div
                            className="icon-box"
                            style={{
                                background: `${f.color}20`,
                                color: f.color,
                                width: 40,
                                height: 40,
                                borderRadius: 12
                            }}
                        >
                            <f.icon size={20} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-1)' }}>
                            {f.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomeTab;
