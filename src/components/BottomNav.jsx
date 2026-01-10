// src/components/BottomNav.jsx
// Нижня навігація - Clean Minimal Design
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
        { id: 'home', icon: Home, label: 'Головна' },
        { id: 'verbs', icon: Zap, label: 'Дієслова' },
        { id: 'chat', icon: MessageCircle, label: 'Чат' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            zIndex: 1000,
            background: '#0B0B0F',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '12px 8px 8px'
            }}>
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;
                    const isHome = tab.id === 'home';

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
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px 12px',
                                borderRadius: 12,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                background: isActive
                                    ? (isHome ? '#F26A1B' : 'rgba(242, 106, 27, 0.15)')
                                    : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}>
                                <Icon
                                    size={22}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    color={isActive
                                        ? (isHome ? '#0B0B0F' : '#F26A1B')
                                        : '#7A7D8A'}
                                />
                            </div>
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: isActive ? 600 : 500,
                                color: isActive ? '#E5E7EB' : '#7A7D8A',
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
