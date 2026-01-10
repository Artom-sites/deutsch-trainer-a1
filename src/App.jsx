// src/App.jsx
// Main App with Auth integration
import React, { useEffect } from 'react';
import useStore from './store/useStore';
import useAuthStore from './store/authStore';

// Components
import BottomNav from './components/BottomNav';
import HomeTab from './components/HomeTab';
import LessonsTab from './components/LessonsTab';
import LessonDetail from './components/LessonDetail';
import GrammarDetail from './components/GrammarDetail';
import DictionaryTab from './components/DictionaryTab';
import VerbsTab from './components/VerbsTab';
import ProgressTab from './components/ProgressTab';
import FlashcardSession from './components/FlashcardSession';
import ExerciseSession from './components/ExerciseSession';
import TestSession from './components/TestSession';
import ExamTab from './components/ExamTab';
import AIChatTab from './components/AIChatTab';
import AuthScreen from './components/AuthScreen';

function App() {
  const currentTab = useStore(state => state.currentTab);
  const currentView = useStore(state => state.currentView);
  const goBack = useStore(state => state.goBack);

  // Auth
  const user = useAuthStore(state => state.user);
  const isLoading = useAuthStore(state => state.isLoading);
  const initAuth = useAuthStore(state => state.initAuth);

  // Initialize auth listener on mount
  useEffect(() => {
    initAuth();
  }, [initAuth]);

  // Handle browser back button / swipe back
  useEffect(() => {
    if (window.history.state === null) {
      window.history.replaceState({ view: currentView, tab: currentTab }, '');
    }

    const handlePopState = () => {
      if (currentView !== 'main') {
        goBack();
        window.history.pushState({ view: currentView, tab: currentTab }, '');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView, currentTab, goBack]);

  useEffect(() => {
    if (currentView !== 'main' || currentTab !== 'home') {
      window.history.pushState({ view: currentView, tab: currentTab }, '');
    }
  }, [currentView, currentTab]);

  // Loading state
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0B0B0F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16
      }}>
        <div style={{ fontSize: '3rem' }}>🇩🇪</div>
        <div style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>Завантаження...</div>
      </div>
    );
  }

  // Show auth screen if not logged in
  if (!user) {
    return <AuthScreen />;
  }

  const renderContent = () => {
    if (currentView === 'flashcards') {
      return <FlashcardSession />;
    }

    if (currentView === 'exercises') {
      return <ExerciseSession />;
    }

    if (currentView === 'test') {
      return <TestSession />;
    }

    if (currentView === 'lesson-detail') {
      return <LessonDetail />;
    }

    if (currentView === 'grammar-detail') {
      return <GrammarDetail />;
    }

    switch (currentTab) {
      case 'home':
        return <HomeTab />;
      case 'lessons':
        return <LessonsTab />;
      case 'dictionary':
        return <DictionaryTab />;
      case 'verbs':
        return <VerbsTab />;
      case 'exam':
        return <ExamTab />;
      case 'chat':
        return <AIChatTab />;
      case 'progress':
        return <ProgressTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="app">
      {renderContent()}
      <BottomNav />
    </div>
  );
}

export default App;
