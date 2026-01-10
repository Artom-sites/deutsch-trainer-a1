// src/components/HomeTab.jsx
// Dashboard з streak, daily goal, weekly activity
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { words } from '../data/lexicon';
import { BookOpen, BookText, Languages, GraduationCap, MessageCircle, Flame, Target, LogOut, ChevronRight, Download } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);

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
    const streak = useAuthStore(state => state.streak);
    const dailyProgress = useAuthStore(state => state.dailyProgress);
    const dailyGoal = useAuthStore(state => state.dailyGoal);
    const weeklyActivity = useAuthStore(state => state.weeklyActivity);
    const logout = useAuthStore(state => state.logout);

    const learned = getLearnedCount();
    const total = words.length;
    const progress = Math.round((learned / total) * 100) || 0;
    const dailyPercent = Math.min((dailyProgress / dailyGoal) * 100, 100);

    // Get greeting based on time
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Guten Morgen';
        if (hour < 18) return 'Guten Tag';
        return 'Guten Abend';
    };

    const userName = user?.displayName || 'Друже';

    const features = [
        { id: 'lessons', icon: BookOpen, title: 'Lektionen', subtitle: '14 уроків' },
        { id: 'dictionary', icon: BookText, title: 'Wörterbuch', subtitle: 'Словник' },
        { id: 'verbs', icon: Languages, title: 'Verben', subtitle: 'Дієслова' },
        { id: 'exam', icon: GraduationCap, title: 'Prüfung', subtitle: 'Тести A1' }
    ];

    // Days of week for chart
    const days = ['П', 'В', 'С', 'Ч', 'П', 'С', 'Н'];
    const maxActivity = Math.max(...weeklyActivity, 1);

    return (
        <div className="screen" style={{ paddingTop: 20 }}>
            {/* Header with user */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 24
            }}>
                <div>
                    <p style={{ color: '#7A7D8A', fontSize: '0.85rem', marginBottom: 4 }}>
                        {getGreeting()},
                    </p>
                    <h1 style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: '#E5E7EB',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        {userName} 👋
                    </h1>
                </div>

                {/* Logout button */}
                {user && user.uid !== 'guest' && (
                    <button
                        onClick={logout}
                        style={{
                            background: '#1A1A22',
                            border: '1px solid rgba(255,255,255,0.04)',
                            borderRadius: 10,
                            padding: 10,
                            cursor: 'pointer'
                        }}
                    >
                        <LogOut size={18} color="#7A7D8A" />
                    </button>
                )}
            </div>

            {/* Install App Banner */}
            {installPrompt && (
                <div style={{
                    background: 'linear-gradient(135deg, #F26A1B 0%, #E55A0A 100%)',
                    borderRadius: 16,
                    padding: 16,
                    marginBottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(242, 106, 27, 0.3)'
                }}>
                    <div style={{ color: 'white' }}>
                        <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>
                            Встановити додаток 📲
                        </div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                            Вивчайте німецьку офлайн
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        style={{
                            background: 'white',
                            color: '#F26A1B',
                            border: 'none',
                            borderRadius: 10,
                            padding: '10px 16px',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}
                    >
                        <Download size={16} />
                        Завантажити
                    </button>
                </div>
            )}

            {/* Streak & Daily Goal Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 16
            }}>
                {/* Streak Card */}
                <div style={{
                    background: streak > 0
                        ? 'linear-gradient(135deg, rgba(242, 106, 27, 0.15) 0%, #1A1A22 100%)'
                        : '#1A1A22',
                    border: streak > 0
                        ? '1px solid rgba(242, 106, 27, 0.2)'
                        : '1px solid rgba(255,255,255,0.04)',
                    borderRadius: 16,
                    padding: 16
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8
                    }}>
                        <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: '#F26A1B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Flame size={18} color="#0B0B0F" />
                        </div>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#F26A1B'
                        }}>
                            {streak}
                        </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>
                        днів поспіль
                    </div>
                </div>

                {/* Daily Goal Card */}
                <div style={{
                    background: '#1A1A22',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: 16,
                    padding: 16
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8
                    }}>
                        <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: '#2ECC71',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Target size={18} color="#0B0B0F" />
                        </div>
                        <div style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#E5E7EB'
                        }}>
                            {dailyProgress}/{dailyGoal}
                        </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#7A7D8A', marginBottom: 8 }}>
                        слів сьогодні
                    </div>
                    {/* Progress bar */}
                    <div style={{
                        height: 4,
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 2
                    }}>
                        <div style={{
                            width: `${dailyPercent}%`,
                            height: '100%',
                            background: '#2ECC71',
                            borderRadius: 2,
                            transition: 'width 0.3s'
                        }} />
                    </div>
                </div>
            </div>

            {/* Weekly Activity */}
            <div style={{
                background: '#1A1A22',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#E5E7EB',
                    marginBottom: 12
                }}>
                    Активність за тиждень
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: 60
                }}>
                    {weeklyActivity.map((value, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 6,
                            flex: 1
                        }}>
                            <div style={{
                                width: '70%',
                                height: Math.max((value / maxActivity) * 40, 4),
                                background: value > 0
                                    ? 'linear-gradient(to top, #F26A1B, #E55A0A)'
                                    : 'rgba(255,255,255,0.06)',
                                borderRadius: 4,
                                transition: 'height 0.3s'
                            }} />
                            <span style={{
                                fontSize: '0.65rem',
                                color: '#7A7D8A'
                            }}>
                                {days[i]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total Progress */}
            <div style={{
                background: '#1A1A22',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E5E7EB' }}>
                        Загальний прогрес
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>
                        {learned} з {total} слів
                    </div>
                </div>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#2ECC71'
                }}>
                    {progress}%
                </div>
            </div>

            {/* Quick Actions - 2x2 Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                marginBottom: 12
            }}>
                {features.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setTab(f.id)}
                        style={{
                            background: '#1A1A22',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: 14,
                            padding: 14,
                            textAlign: 'left',
                            cursor: 'pointer',
                            WebkitTapHighlightColor: 'transparent'
                        }}
                    >
                        <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: '#F26A1B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 10
                        }}>
                            <f.icon size={18} color="#0B0B0F" strokeWidth={2.5} />
                        </div>
                        <div style={{
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: '#E5E7EB'
                        }}>
                            {f.title}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#7A7D8A' }}>
                            {f.subtitle}
                        </div>
                    </button>
                ))}
            </div>

            {/* AI Chat */}
            <button
                onClick={() => setTab('chat')}
                style={{
                    width: '100%',
                    background: '#1A1A22',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    borderRadius: 14,
                    padding: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MessageCircle size={20} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#E5E7EB' }}>
                        Голосовий чат з AI
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>
                        Практикуй розмовну 🎤
                    </div>
                </div>
                <ChevronRight size={18} color="#7A7D8A" />
            </button>

            <div style={{ height: 20 }} />
        </div>
    );
};

export default HomeTab;
