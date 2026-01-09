// src/components/BottomNav.jsx
// Нижня навігація - 5 вкладок з однаковим стилем
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
        <nav className="bottom-nav">
            <div className="bottom-nav-inner">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;

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
                                padding: '8px 12px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                minWidth: 56,
                                borderRadius: 12,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {/* Icon container */}
                            <div style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                background: isActive ? 'rgba(255, 107, 53, 0.15)' : 'transparent',
                                border: isActive ? '1px solid rgba(255, 107, 53, 0.3)' : '1px solid transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}>
                                <Icon
                                    size={22}
                                    strokeWidth={isActive ? 2.5 : 1.8}
                                    color={isActive ? '#FF6B35' : '#7A7D8A'}
                                />
                            </div>
                            {/* Label */}
                            <span style={{
                                fontSize: '0.65rem',
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
