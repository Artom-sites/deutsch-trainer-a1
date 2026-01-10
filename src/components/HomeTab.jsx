// src/components/HomeTab.jsx
// Dashboard - Premium "Focus" Design
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { words, lessons } from '../data/lexicon';
import { BookOpen, BookText, Languages, GraduationCap, MessageCircle, Flame, Target, LogOut, ChevronRight, Download, Play, Trophy, ShoppingBag } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const openLesson = useStore(state => state.openLesson);

    // PWA Install prompt
    const [installPrompt, setInstallPrompt] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setInstallPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!installPrompt) return;
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        if (outcome === 'accepted') {
            setInstallPrompt(null);
        }
    };

    // Auth store
    const user = useAuthStore(state => state.user);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const coins = useAuthStore(state => state.coins);
    const streak = useAuthStore(state => state.streak);
    const logout = useAuthStore(state => state.logout);

    const userName = user?.displayName || 'Друже';

    // Current Lesson Logic
    const currentLesson = lessons.find(l => getLessonProgress(l.id).percent < 100) || lessons[lessons.length - 1];
    const lessonProgress = getLessonProgress(currentLesson.id);

    // Features Grid
    const features = [
        { id: 'dictionary', icon: BookText, title: 'Словник', color: '#3B82F6' },
        { id: 'verbs', icon: Languages, title: 'Дієслова', color: '#8B5CF6' },
        { id: 'chat', icon: MessageCircle, title: 'AI Чат', color: '#10B981' },
        { id: 'shop', icon: ShoppingBag, title: 'Магазин', color: '#F59E0B' } // Added Shop
    ];

    return (
        <div className="screen" style={{ paddingTop: 20, paddingBottom: 100 }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        background: '#1A1A22',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                    }}>
                        👋
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: '#7A7D8A' }}>Вітаємо,</div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#E5E7EB' }}>{userName}</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                    {/* Coin Badge */}
                    <div
                        onClick={() => setTab('shop')}
                        style={{
                            background: '#1A1A22',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: 12,
                            padding: '6px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            cursor: 'pointer'
                        }}
                    >
                        <span style={{ fontSize: '1.1rem' }}>🪙</span>
                        <span style={{ fontWeight: 700, color: '#E5E7EB' }}>{coins}</span>
                    </div>

                    {/* Streak Badge */}
                    <div style={{
                        background: streak > 0 ? 'rgba(242, 106, 27, 0.1)' : '#1A1A22',
                        border: streak > 0 ? '1px solid rgba(242, 106, 27, 0.2)' : '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 12,
                        padding: '6px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                    }}>
                        <Flame size={18} color={streak > 0 ? '#F26A1B' : '#7A7D8A'} fill={streak > 0 ? '#F26A1B' : 'none'} />
                        <span style={{ fontWeight: 700, color: streak > 0 ? '#F26A1B' : '#7A7D8A' }}>{streak}</span>
                    </div>
                </div>
            </div>

            {/* PWA Install Banner */}
            {installPrompt && (
                <div style={{
                    background: 'linear-gradient(135deg, #F26A1B 0%, #E55A0A 100%)',
                    borderRadius: 20,
                    padding: 20,
                    marginBottom: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 20px rgba(242, 106, 27, 0.25)'
                }}>
                    <div style={{ color: 'white' }}>
                        <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 2 }}>
                            Встановити додаток
                        </div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                            Вивчайте німецьку офлайн ⚡️
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        style={{
                            background: 'white',
                            color: '#F26A1B',
                            border: 'none',
                            borderRadius: 12,
                            padding: '10px 14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <Download size={20} />
                    </button>
                </div>
            )}

            {/* HERO: Current Lesson Focus */}
            <h2 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7A7D8A', marginBottom: 12, marginLeft: 4 }}>
                ПРОДОВЖИТИ НАВЧАННЯ
            </h2>
            <div
                onClick={() => openLesson(currentLesson.id)}
                style={{
                    background: 'linear-gradient(145deg, #1A1A22 0%, #111115 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 24,
                    padding: 24,
                    marginBottom: 32,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
            >
                {/* Background Decor */}
                <div style={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(242,106,27,0.1) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 20
                    }}>
                        <div>
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(242, 106, 27, 0.15)',
                                color: '#F26A1B',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '4px 10px',
                                borderRadius: 8,
                                marginBottom: 10
                            }}>
                                УРОК {currentLesson.id}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#E5E7EB', lineHeight: 1.2 }}>
                                {currentLesson.title}
                            </h3>
                            <p style={{ color: '#7A7D8A', fontSize: '0.9rem', marginTop: 4 }}>
                                {currentLesson.description}
                            </p>
                        </div>

                        {/* Play Button */}
                        <div style={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%',
                            background: '#F26A1B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(242, 106, 27, 0.3)',
                            flexShrink: 0,
                            marginLeft: 16
                        }}>
                            <Play size={24} color="#0B0B0F" fill="#0B0B0F" style={{ marginLeft: 4 }} />
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.8rem' }}>
                            <span style={{ color: '#7A7D8A' }}>Прогрес</span>
                            <span style={{ color: '#E5E7EB', fontWeight: 600 }}>{lessonProgress.percent}%</span>
                        </div>
                        <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}>
                            <div style={{
                                width: `${lessonProgress.percent}%`,
                                height: '100%',
                                background: '#2ECC71',
                                borderRadius: 3,
                                transition: 'width 0.3s'
                            }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Goal & Stats */}
            <h2 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7A7D8A', marginBottom: 12, marginLeft: 4 }}>
                ТВІЙ ДЕНЬ
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 32
            }}>
                {/* Daily Goal */}
                <div style={{
                    background: '#1A1A22',
                    borderRadius: 20,
                    padding: 16,
                    border: '1px solid rgba(255,255,255,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <Target size={20} color="#2ECC71" />
                        <span style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>Ціль</span>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#E5E7EB' }}>
                            {dailyProgress}<span style={{ fontSize: '1rem', color: '#7A7D8A' }}>/{dailyGoal}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>слів вивчено</div>
                    </div>
                </div>

                {/* Total Stats */}
                <div style={{
                    background: '#1A1A22',
                    borderRadius: 20,
                    padding: 16,
                    border: '1px solid rgba(255,255,255,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <Trophy size={20} color="#F59E0B" />
                        <span style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>Всього</span>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#E5E7EB' }}>
                            {getLearnedCount()}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>слів у скарбничці</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <h2 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#7A7D8A', marginBottom: 12, marginLeft: 4 }}>
                ШВИДКИЙ ДОСТУП
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 8
            }}>
                {features.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setTab(f.id)}
                        style={{
                            background: '#1A1A22',
                            border: '1px solid rgba(255,255,255,0.04)',
                            borderRadius: 16,
                            padding: '12px 4px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8,
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: `${f.color}20`, // 20% opacity
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <f.icon size={18} color={f.color} />
                        </div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#E5E7EB' }}>
                            {f.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Logout (Small, at bottom) */}
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={logout}
                    style={{
                        color: '#7A7D8A',
                        fontSize: '0.8rem',
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                    }}
                >
                    <LogOut size={14} /> Вийти з акаунту
                </button>
            </div>
        </div>
    );
};

export default HomeTab;
