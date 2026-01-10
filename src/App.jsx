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
// Duplicate import removed
import ShopTab from './components/ShopTab';
import NounMaster from './components/exercises/NounMaster';
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
        gap: 32,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(242, 106, 27, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s ease-in-out infinite 1.5s'
        }} />

        {/* Logo Container */}
        <div style={{
          position: 'relative',
          width: 120,
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Orbital Ring 1 */}
          <div style={{
            position: 'absolute',
            width: 120,
            height: 120,
            border: '2px solid transparent',
            borderTopColor: '#F26A1B',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite'
          }} />
          {/* Orbital Ring 2 */}
          <div style={{
            position: 'absolute',
            width: 100,
            height: 100,
            border: '2px solid transparent',
            borderBottomColor: '#2ECC71',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite reverse'
          }} />
          {/* Inner Glow */}
          <div style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #F26A1B, #E55A0A)',
            boxShadow: '0 0 40px rgba(242, 106, 27, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'breathe 2s ease-in-out infinite'
          }}>
            <span style={{ fontSize: '2rem' }}>🇩🇪</span>
          </div>
        </div>

        {/* App Name */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#E5E7EB',
            marginBottom: 8,
            letterSpacing: '0.05em'
          }}>
            Deutsch Trainer
          </div>
          <div style={{
            color: '#7A7D8A',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4
          }}>
            Завантаження
            <span style={{ display: 'inline-flex', gap: 2 }}>
              <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0s' }}>.</span>
              <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.2s' }}>.</span>
              <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.4s' }}>.</span>
            </span>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          @keyframes bounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
            30% { transform: translateY(-4px); opacity: 1; }
          }
        `}</style>
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

    if (currentView === 'noun-master') {
      return <NounMaster />;
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
      case 'shop':
        return <ShopTab />;
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
