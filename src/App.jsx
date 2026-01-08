import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useStore from './store/useStore';

// Components
import BottomNav from './components/BottomNav';
import DictionaryTab from './components/DictionaryTab';
import VerbsTab from './components/VerbsTab';
import ExamTab from './components/ExamTab';
import AIChatTab from './components/AIChatTab';
import TopicList from './components/TopicList';
import TrainingScreen from './components/TrainingScreen';

// Full Screen Components
import FlashcardSession from './components/FlashcardSession';
import ExerciseSession from './components/ExerciseSession';
import LessonDetail from './components/LessonDetail';

const App = () => {
  const [activeTab, setActiveTab] = useState('topics');
  const currentView = useStore(state => state.currentView);
  const location = useLocation();

  // Full Screen Overrides (controlled by Zustand store for specific legacy flows)
  if (currentView === 'flashcards') return <FlashcardSession />;
  if (currentView === 'exercises') return <ExerciseSession />;
  if (currentView === 'lesson-detail') return <LessonDetail />;

  // Hide BottomNav on Training Screen
  const showNav = !location.pathname.startsWith('/training');

  return (
    <div className="app flex flex-col min-h-screen">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/training/:topicId" element={<TrainingScreen />} />

          {/* Legacy/Secondary Tabs */}
          <Route path="/dictionary" element={<DictionaryTab />} />
          <Route path="/verbs" element={<VerbsTab />} />
          <Route path="/exam" element={<ExamTab />} />
          <Route path="/chat" element={<AIChatTab />} />
        </Routes>
      </div>

      {showNav && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
    </div>
  );
};

export default App;
