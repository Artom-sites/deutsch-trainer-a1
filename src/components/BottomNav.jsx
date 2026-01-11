// src/components/BottomNav.jsx
// Premium Glass Pill Navigation with Glow Effects
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
        { id: 'home', icon: Home, label: 'Головна', isCenter: true },
        { id: 'verbs', icon: Sparkles, label: 'Трен' },
        { id: 'chat', icon: MessageCircle, label: 'Чат' },
    ];

    return (
        <nav className="bottomBar">
            <div className="bottomBarNav">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setTab(tab.id)}
                            className={`navItem ${isActive ? 'isActive' : ''}`}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
