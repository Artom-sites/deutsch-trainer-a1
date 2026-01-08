// src/App.jsx
// Main App - Mobile-first structure with all views
import React from 'react';
import useStore from './store/useStore';

// Components
import BottomNav from './components/BottomNav';
import LessonsTab from './components/LessonsTab';
import LessonDetail from './components/LessonDetail';
import DictionaryTab from './components/DictionaryTab';
import VerbsTab from './components/VerbsTab';
import ProgressTab from './components/ProgressTab';
import FlashcardSession from './components/FlashcardSession';
import ExerciseSession from './components/ExerciseSession';
import GrammarDetail from './components/GrammarDetail';

function App() {
  const currentTab = useStore(state => state.currentTab);
  const currentView = useStore(state => state.currentView);

  // Determine what to render based on current view
  const renderContent = () => {
    // Flashcard session (full screen, no tabs)
    if (currentView === 'flashcards') {
      return <FlashcardSession />;
    }

    // Exercise session
    if (currentView === 'exercises') {
      return <ExerciseSession />;
    }

    // Grammar detail
    if (currentView === 'grammar-detail') {
      return <GrammarDetail />;
    }

    // Lesson detail view
    if (currentView === 'lesson-detail') {
      return <LessonDetail />;
    }

    // Main tab views
    switch (currentTab) {
      case 'lessons':
        return <LessonsTab />;
      case 'dictionary':
        return <DictionaryTab />;
      case 'verbs':
        return <VerbsTab />;
      case 'progress':
        return <ProgressTab />;
      default:
        return <LessonsTab />;
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
