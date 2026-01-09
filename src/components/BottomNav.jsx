// src/components/BottomNav.jsx
// Нижня навігація - преміальний дизайн з glass ефектом
import React from 'react';
import useStore from '../store/useStore';
import { Home, BookOpen, Library, Zap, MessageCircle } from 'lucide-react';

const BottomNav = () => {
    const currentTab = useStore(state => state.currentTab);
    const currentView = useStore(state => state.currentView);
    const setTab = useStore(state => state.setTab);

    // Hide navigation during flashcard/exercise sessions
    if (currentView === 'flashcards' || currentView === 'exercises' || currentView === 'grammar-detail') {
        return null;
    }

    const tabs = [
        { id: 'lessons', icon: BookOpen, label: 'Уроки' },
        { id: 'dictionary', icon: Library, label: 'Словник' },
        { id: 'home', icon: Home, label: 'Головна', isCenter: true },
        { id: 'verbs', icon: Zap, label: 'Дієслова' },
        { id: 'chat', icon: MessageCircle, label: 'Чат' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 16px',
            paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none'
        }}>
            <div style={{
                pointerEvents: 'auto',
                background: 'linear-gradient(180deg, rgba(17, 17, 24, 0.95) 0%, rgba(11, 11, 15, 0.98) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 24,
                padding: '8px 12px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                maxWidth: 420,
                boxShadow: `
                    0 0 0 1px rgba(255, 255, 255, 0.08),
                    0 -4px 24px rgba(0, 0, 0, 0.4),
                    0 4px 24px rgba(242, 106, 27, 0.08)
                `,
                border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;

                    if (tab.isCenter) {
                        // Center button - special style
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setTab(tab.id)}
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 16,
                                    background: isActive
                                        ? 'linear-gradient(135deg, #FF6B35 0%, #F26A1B 100%)'
                                        : 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(242, 106, 27, 0.1) 100%)',
                                    border: isActive
                                        ? 'none'
                                        : '1px solid rgba(255, 107, 53, 0.3)',
                                    boxShadow: isActive
                                        ? '0 4px 16px rgba(255, 107, 53, 0.4), 0 0 0 1px rgba(255, 107, 53, 0.5)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                    cursor: 'pointer',
                                    marginTop: -20,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={2.2}
                                    color={isActive ? '#0B0B0F' : '#FF6B35'}
                                />
                                <span style={{
                                    fontSize: '0.55rem',
                                    fontWeight: 600,
                                    color: isActive ? '#0B0B0F' : '#FF6B35',
                                    letterSpacing: '0.02em'
                                }}>
                                    {tab.label}
                                </span>
                            </button>
                        );
                    }

                    // Regular tabs
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setTab(tab.id)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                                padding: '8px 10px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                minWidth: 52,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                background: isActive ? 'rgba(255, 107, 53, 0.12)' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}>
                                <Icon
                                    size={20}
                                    strokeWidth={isActive ? 2.4 : 1.8}
                                    color={isActive ? '#FF6B35' : '#7A7D8A'}
                                />
                            </div>
                            <span style={{
                                fontSize: '0.6rem',
                                fontWeight: isActive ? 600 : 400,
                                color: isActive ? '#FF6B35' : '#7A7D8A',
                                transition: 'all 0.2s ease'
                            }}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
