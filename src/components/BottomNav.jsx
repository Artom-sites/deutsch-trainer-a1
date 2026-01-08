// src/components/BottomNav.jsx
// Нижня навігація для мобільного - 4 вкладки
import React from 'react';
import useStore from '../store/useStore';
import { Home, BookOpen, Library, Zap, GraduationCap, MessageCircle } from 'lucide-react';

const BottomNav = () => {
    const currentTab = useStore(state => state.currentTab);
    const currentView = useStore(state => state.currentView);
    const setTab = useStore(state => state.setTab);

    // Hide navigation during flashcard/exercise sessions
    if (currentView === 'flashcards' || currentView === 'exercises' || currentView === 'grammar-detail') {
        return null;
    }

    const tabs = [
        { id: 'home', label: 'Дім', icon: Home },
        { id: 'lessons', label: 'Уроки', icon: BookOpen },
        { id: 'dictionary', label: 'Слова', icon: Library },
        { id: 'verbs', label: 'Verben', icon: Zap },
        { id: 'chat', label: 'AI', icon: MessageCircle },
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
                            className={`nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => setTab(tab.id)}
                        >
                            <div className="nav-icon-wrapper">
                                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
