// src/components/BottomNav.jsx
// Violang Glass Bottom Bar with Glow Effects
import React from 'react';
import useStore from '../store/useStore';
import { Home, BookOpen, Library, Sparkles, GraduationCap } from 'lucide-react';

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
        { id: 'home', icon: Home, label: 'Головна' },
        { id: 'verbs', icon: Sparkles, label: 'Дієслова' },
        { id: 'rules', icon: GraduationCap, label: 'Правила' },
    ];

    return (
        <nav className="v-tabbar" role="navigation" aria-label="Bottom navigation">
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        className="v-tab"
                        data-active={isActive}
                        onClick={() => setTab(tab.id)}
                    >
                        <span className="v-iconBubble">
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className="v-icon" />
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
