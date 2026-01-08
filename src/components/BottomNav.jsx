// src/components/BottomNav.jsx
// Нижня навігація для мобільного - 4 вкладки
import React from 'react';
import useStore from '../store/useStore';
import { BookOpen, Library, BarChart2, Zap, GraduationCap } from 'lucide-react';

const BottomNav = () => {
    const currentTab = useStore(state => state.currentTab);
    const currentView = useStore(state => state.currentView);
    const setTab = useStore(state => state.setTab);

    // Hide navigation during flashcard/exercise sessions
    if (currentView === 'flashcards' || currentView === 'exercises' || currentView === 'grammar-detail') {
        return null;
    }

    const tabs = [
        { id: 'lessons', label: 'Уроки', icon: BookOpen },
        { id: 'dictionary', label: 'Слова', icon: Library },
        { id: 'verbs', label: 'Дієслова', icon: Zap },
        { id: 'exam', label: 'Екзамен', icon: GraduationCap },
        { id: 'progress', label: 'Прогрес', icon: BarChart2 },
    ];

    return (
        <nav className="bottom-nav">
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => setTab(tab.id)}
                    >
                        <Icon size={22} />
                        <span>{tab.label}</span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
