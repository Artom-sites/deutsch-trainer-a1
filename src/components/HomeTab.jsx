// src/components/HomeTab.jsx
// Головний екран - Clean Dark Design
import React from 'react';
import useStore from '../store/useStore';
import { words } from '../data/lexicon';
import { BookOpen, BookText, Languages, GraduationCap, MessageCircle, TrendingUp, ChevronRight } from 'lucide-react';

const HomeTab = () => {
    const setTab = useStore(state => state.setTab);
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
        { id: 'lessons', icon: BookOpen, title: 'Lektionen', subtitle: '14 уроків' },
        { id: 'dictionary', icon: BookText, title: 'Wörterbuch', subtitle: 'Словник' },
        { id: 'verbs', icon: Languages, title: 'Verben', subtitle: 'Дієслова' },
        { id: 'exam', icon: GraduationCap, title: 'Prüfung', subtitle: 'Тести A1' }
    ];

    return (
        <div className="screen" style={{ paddingTop: 24 }}>
            {/* Clean Header */}
            <div style={{ marginBottom: 28 }}>
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#E5E7EB',
                    marginBottom: 4
                }}>
                    {getGreeting()}
                </h1>
                <p style={{ color: '#7A7D8A', fontSize: '0.95rem' }}>
                    Вивчай німецьку легко 🇩🇪
                </p>
            </div>

            {/* Progress Card - Clean Dark Style */}
            <div style={{
                background: '#1A1A22',
                borderRadius: 20,
                padding: 20,
                marginBottom: 20,
                border: '1px solid rgba(255, 255, 255, 0.04)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{
                            width: 44,
                            height: 44,
                            borderRadius: 14,
                            background: '#2ECC71',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TrendingUp size={22} color="#0B0B0F" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#E5E7EB' }}>
                                Твій прогрес
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>
                                {learned} з {total} слів
                            </div>
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

                {/* Thin Progress Line */}
                <div style={{
                    height: 4,
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: 2,
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: '#2ECC71',
                        borderRadius: 2,
                        transition: 'width 0.5s'
                    }} />
                </div>
            </div>

            {/* Quick Actions - 2x2 Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 16
            }}>
                {features.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setTab(f.id)}
                        style={{
                            background: '#1A1A22',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: 16,
                            padding: 16,
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            WebkitTapHighlightColor: 'transparent'
                        }}
                    >
                        <div style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: '#F26A1B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 12
                        }}>
                            <f.icon size={20} color="#0B0B0F" strokeWidth={2.5} />
                        </div>
                        <div style={{
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: '#E5E7EB',
                            marginBottom: 2
                        }}>
                            {f.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>
                            {f.subtitle}
                        </div>
                    </button>
                ))}
            </div>

            {/* AI Chat - Full Width Card */}
            <button
                onClick={() => setTab('chat')}
                style={{
                    width: '100%',
                    background: '#1A1A22',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    borderRadius: 16,
                    padding: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    cursor: 'pointer',
                    textAlign: 'left',
                    WebkitTapHighlightColor: 'transparent'
                }}
            >
                <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MessageCircle size={22} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: '#E5E7EB'
                    }}>
                        Голосовий чат з AI
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>
                        Практикуй розмовну німецьку 🎤
                    </div>
                </div>
                <ChevronRight size={20} color="#7A7D8A" />
            </button>

            {/* Bottom spacing */}
            <div style={{ height: 20 }} />
        </div>
    );
};

export default HomeTab;
