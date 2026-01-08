// src/components/HomeTab.jsx
// Головний екран з привітанням та швидким доступом
import React from 'react';
import useStore from '../store/useStore';
import { words } from '../data/lexicon';
import { BookOpen, BookText, Languages, GraduationCap, MessageCircle, Zap } from 'lucide-react';

const HomeTab = () => {
    const setCurrentTab = useStore(state => state.setCurrentTab);
    const getLearnedCount = useStore(state => state.getLearnedCount);

    const learned = getLearnedCount();
    const total = words.length;
    const progress = Math.round((learned / total) * 100) || 0;

    // Get greeting based on time
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Guten Morgen!';
        if (hour < 18) return 'Guten Tag!';
        return 'Guten Abend!';
    };

    const features = [
        {
            id: 'lessons',
            icon: BookOpen,
            title: 'Lektionen',
            subtitle: '14 уроків A1',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
        },
        {
            id: 'dictionary',
            icon: BookText,
            title: 'Wörterbuch',
            subtitle: `${total} слів`,
            gradient: 'linear-gradient(135deg, #2dd4bf 0%, #22d3ee 100%)'
        },
        {
            id: 'verbs',
            icon: Languages,
            title: 'Verben',
            subtitle: 'Дієслова',
            gradient: 'linear-gradient(135deg, #f472b6 0%, #fb7185 100%)'
        },
        {
            id: 'exam',
            icon: GraduationCap,
            title: 'Prüfung',
            subtitle: 'Тести A1',
            gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)'
        }
    ];

    return (
        <div className="screen" style={{ paddingTop: 'var(--space-xl)' }}>
            {/* Logo & Greeting */}
            <div style={{
                textAlign: 'center',
                marginBottom: 'var(--space-xl)'
            }}>
                <img
                    src="/deutsch-trainer-a1/logo.png"
                    alt="Logo"
                    style={{
                        width: 80,
                        height: 80,
                        marginBottom: 'var(--space-md)',
                        filter: 'drop-shadow(0 4px 20px rgba(45, 212, 191, 0.3))'
                    }}
                />
                <h1 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #6366f1 0%, #2dd4bf 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 4
                }}>
                    {getGreeting()}
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem'
                }}>
                    Вивчай німецьку легко 🇩🇪
                </p>
            </div>

            {/* Progress Card */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(45, 212, 191, 0.15) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: 20,
                padding: 'var(--space-lg)',
                marginBottom: 'var(--space-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)'
            }}>
                <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1, #2dd4bf)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Zap size={28} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                        Твій прогрес: {progress}%
                    </div>
                    <div style={{
                        marginTop: 8,
                        height: 8,
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 4,
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #6366f1, #2dd4bf)',
                            borderRadius: 4,
                            transition: 'width 0.5s'
                        }} />
                    </div>
                    <div style={{
                        marginTop: 4,
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                    }}>
                        {learned} з {total} слів вивчено
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 'var(--space-lg)'
            }}>
                {features.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setCurrentTab(f.id)}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 20,
                            padding: 'var(--space-lg)',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: 14,
                            background: f.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 12
                        }}>
                            <f.icon size={24} color="white" />
                        </div>
                        <div style={{
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            marginBottom: 2
                        }}>
                            {f.title}
                        </div>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)'
                        }}>
                            {f.subtitle}
                        </div>
                    </button>
                ))}
            </div>

            {/* AI Chat Card */}
            <button
                onClick={() => setCurrentTab('chat')}
                style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
                    border: '1px solid rgba(45, 212, 191, 0.3)',
                    borderRadius: 20,
                    padding: 'var(--space-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #2dd4bf, #6366f1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MessageCircle size={24} color="white" />
                </div>
                <div>
                    <div style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--text-primary)'
                    }}>
                        Голосовий чат з AI
                    </div>
                    <div style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Практикуй розмовну німецьку 🎤
                    </div>
                </div>
            </button>
        </div>
    );
};

export default HomeTab;
