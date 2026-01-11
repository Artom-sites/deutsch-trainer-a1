// src/components/BottomNav.jsx
// Glass Pill Navigation - Violang-style with center highlight
import React from 'react';
import useStore from '../store/useStore';
import { Home, BookOpen, Library, Sparkles, MessageCircle } from 'lucide-react';

const BottomNav = () => {
    const currentTab = useStore(state => state.currentTab);
    const currentView = useStore(state => state.currentView);
    const setTab = useStore(state => state.setTab);

    // Hide during sessions
    if (['flashcards', 'exercises', 'grammar-detail', 'test', 'reading', 'noun-master'].includes(currentView)) {
        return null;
    }

    const tabs = [
        { id: 'lessons', icon: BookOpen, label: 'Уроки' },
        { id: 'dictionary', icon: Library, label: 'Словник' },
        { id: 'home', icon: Sparkles, label: 'Головна', isCenter: true },
        { id: 'verbs', icon: Home, label: 'Трен' },
        { id: 'chat', icon: MessageCircle, label: 'Чат' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(520px, calc(100% - 24px))',
            padding: 8,
            borderRadius: 999,
            background: 'rgba(15,23,34,.75)',
            border: '1px solid var(--stroke)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'var(--sh-2)',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1000
        }}>
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;
                const isCenter = tab.isCenter;

                if (isCenter) {
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setTab(tab.id)}
                            style={{
                                width: 56, height: 56,
                                borderRadius: 16,
                                background: isActive
                                    ? 'linear-gradient(135deg, var(--pri), #ff5a1f)'
                                    : 'var(--surface-2)',
                                border: isActive ? 'none' : '1px solid var(--stroke)',
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center', gap: 2,
                                color: isActive ? '#0B0B0F' : 'var(--text-2)',
                                boxShadow: isActive ? '0 8px 20px rgba(255,107,53,.3)' : 'none',
                                marginTop: -12,
                                cursor: 'pointer'
                            }}
                        >
                            <Icon size={22} strokeWidth={2.5} />
                        </button>
                    );
                }

                return (
                    <button
                        key={tab.id}
                        onClick={() => setTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: '8px 4px',
                            borderRadius: 12,
                            background: isActive ? 'var(--surface)' : 'transparent',
                            border: isActive ? '1px solid var(--stroke)' : '1px solid transparent',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', gap: 4,
                            color: isActive ? 'var(--text-0)' : 'var(--text-2)',
                            fontSize: '0.65rem', fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                        }}
                    >
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
