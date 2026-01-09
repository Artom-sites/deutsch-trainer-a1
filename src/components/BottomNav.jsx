// src/components/BottomNav.jsx
// Нижня навігація - 5 вкладок з Home по центру
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
        { id: 'lessons', icon: BookOpen },
        { id: 'dictionary', icon: Library },
        { id: 'home', icon: Home, isCenter: true },
        { id: 'verbs', icon: Zap },
        { id: 'chat', icon: MessageCircle },
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
                            style={tab.isCenter ? {
                                background: isActive ? '#d4a574' : 'rgba(212, 165, 116, 0.2)',
                                borderRadius: '50%',
                                width: 52,
                                height: 52,
                                marginTop: -16,
                                boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)',
                                border: '1px solid rgba(212, 165, 116, 0.3)'
                            } : {}}
                        >
                            <div className="nav-icon-wrapper">
                                <Icon
                                    size={tab.isCenter ? 28 : 24}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    color={tab.isCenter ? 'white' : undefined}
                                />
                            </div>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
