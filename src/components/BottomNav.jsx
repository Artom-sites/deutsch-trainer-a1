// src/components/BottomNav.jsx
// Glass Pill Navigation - Premium Design
import React from 'react';
import useStore from '../store/useStore';
import { Home, BookOpen, Library, Zap, MessageCircle } from 'lucide-react';

const BottomNav = () => {
    const currentTab = useStore(state => state.currentTab);
    const currentView = useStore(state => state.currentView);
    const setTab = useStore(state => state.setTab);

    // Hide navigation during sessions
    if (['flashcards', 'exercises', 'grammar-detail', 'test', 'reading'].includes(currentView)) {
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
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setTab(tab.id)}
                        className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
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
