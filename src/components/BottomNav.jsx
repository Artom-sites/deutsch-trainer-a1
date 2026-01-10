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
            padding: '12px 24px',
            paddingBottom: 'calc(20px + env(safe-area-inset-bottom, 0px))',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none'
        }}>
            <div style={{
                pointerEvents: 'auto',
                background: 'rgba(23, 23, 28, 0.75)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                borderRadius: 32,
                padding: '16px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: 400,
                boxShadow: `
                    0 20px 40px -10px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
            }}>
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;

                    if (tab.isCenter) {
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setTab(tab.id)}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 20,
                                    background: isActive
                                        ? 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)'
                                        : 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(39, 174, 96, 0.1) 100%)',
                                    border: isActive
                                        ? 'none'
                                        : '1px solid rgba(46, 204, 113, 0.2)',
                                    boxShadow: isActive
                                        ? 'rgba(46, 204, 113, 0.4) 0px 8px 24px -6px'
                                        : '0 2px 8px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 0,
                                    cursor: 'pointer',
                                    marginTop: -25,
                                    transform: isActive ? 'scale(1)' : 'scale(1)',
                                    transition: '0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={2.2}
                                    color={isActive ? '#0B0B0F' : '#2ECC71'}
                                />
                            </button>
                        );
                    }

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setTab(tab.id)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 6,
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                minWidth: 60,
                                opacity: isActive ? 1 : 0.5,
                                transform: isActive ? 'translateY(-2px)' : 'none',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <Icon
                                size={24}
                                strokeWidth={isActive ? 2.5 : 2}
                                color={isActive ? '#FFFFFF' : '#A0A0B0'}
                                style={{
                                    filter: isActive ? 'drop-shadow(0 0 12px rgba(46, 204, 113, 0.4))' : 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
