// src/store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { words, lessons, getWordsForLesson, getAllWords, getLessonById, getExercisesForLesson, getExercisesForTopic, getGrammarForLesson } from '../data/lexicon';
import { calculateNextReview } from '../core/srs';

const useStore = create(
    persist(
        (set, get) => ({
            // ==========================================
            // USER PROGRESS DATA
            // ==========================================
            userProgress: {}, // wordId -> { interval, repetitions, easeFactor, dueDate }

            // ==========================================
            // NAVIGATION STATE
            // ==========================================
            currentTab: 'lessons',
            currentView: 'main', // 'main' | 'lesson-detail' | 'flashcards' | 'exercises' | 'grammar-detail'

            activeLessonId: null,
            activeGrammarTopicId: null,
            flashcardWords: [],
            currentCardIndex: 0,
            activeExercises: [],

            // ==========================================
            // TAB NAVIGATION
            // ==========================================
            setTab: (tab) => set({
                currentTab: tab,
                currentView: 'main',
                activeLessonId: null,
                activeGrammarTopicId: null,
                flashcardWords: [],
                currentCardIndex: 0,
                activeExercises: []
            }),

            // ==========================================
            // LESSON ACTIONS
            // ==========================================
            openLesson: (lessonId) => set({
                currentView: 'lesson-detail',
                activeLessonId: lessonId
            }),

            goBack: () => {
                const state = get();
                if (state.currentView === 'flashcards' || state.currentView === 'exercises' || state.currentView === 'grammar-detail') {
                    set({
                        currentView: 'lesson-detail',
                        flashcardWords: [],
                        currentCardIndex: 0,
                        activeExercises: [],
                        activeGrammarTopicId: null
                    });
                } else {
                    set({
                        currentView: 'main',
                        activeLessonId: null,
                        activeGrammarTopicId: null,
                        flashcardWords: [],
                        currentCardIndex: 0,
                        activeExercises: []
                    });
                }
            },

            // ==========================================
            // FLASHCARD ACTIONS
            // ==========================================
            startLessonWords: (lessonId) => {
                const lessonWords = getWordsForLesson(lessonId);
                const userProgress = get().userProgress;

                // Sort: unlearned first, then by due date
                const sortedWords = [...lessonWords].sort((a, b) => {
                    const progressA = userProgress[a.id];
                    const progressB = userProgress[b.id];

                    // Unlearned words first
                    if (!progressA && progressB) return -1;
                    if (progressA && !progressB) return 1;

                    // If both learned, sort by due date (earliest first)
                    if (progressA && progressB) {
                        return new Date(progressA.dueDate) - new Date(progressB.dueDate);
                    }

                    return 0;
                });

                set({
                    currentView: 'flashcards',
                    flashcardWords: sortedWords,
                    currentCardIndex: 0,
                    activeLessonId: lessonId
                });
            },

            startAllWords: () => {
                const allWords = getAllWords();
                const userProgress = get().userProgress;

                // Sort: unlearned first, then by due date
                const sortedWords = [...allWords].sort((a, b) => {
                    const progressA = userProgress[a.id];
                    const progressB = userProgress[b.id];

                    // Unlearned words first
                    if (!progressA && progressB) return -1;
                    if (progressA && !progressB) return 1;

                    // If both learned, sort by due date (earliest first)
                    if (progressA && progressB) {
                        return new Date(progressA.dueDate) - new Date(progressB.dueDate);
                    }

                    return 0;
                });

                set({
                    currentView: 'flashcards',
                    flashcardWords: sortedWords,
                    currentCardIndex: 0
                });
            },

            nextCard: () => set((state) => ({
                currentCardIndex: state.currentCardIndex + 1
            })),

            // ==========================================
            // EXERCISE ACTIONS
            // ==========================================
            startLessonExercises: (lessonId) => {
                const lessonExercises = getExercisesForLesson(lessonId);
                set({
                    currentView: 'exercises',
                    activeExercises: lessonExercises,
                    activeLessonId: lessonId
                });
            },

            startTopicExercises: (topicId) => {
                const topicExercises = getExercisesForTopic(topicId);
                set({
                    currentView: 'exercises',
                    activeExercises: topicExercises,
                    activeGrammarTopicId: topicId
                });
            },

            // ==========================================
            // GRAMMAR ACTIONS
            // ==========================================
            openGrammarTopic: (topicId) => set({
                currentView: 'grammar-detail',
                activeGrammarTopicId: topicId
            }),

            // ==========================================
            // SRS ACTIONS
            // ==========================================
            submitReview: (wordId, quality) => set((state) => {
                const stats = state.userProgress[wordId] || {};
                const newStats = calculateNextReview(stats, quality);
                return {
                    userProgress: {
                        ...state.userProgress,
                        [wordId]: newStats
                    }
                };
            }),

            // ==========================================
            // COMPUTED GETTERS
            // ==========================================
            getDueCount: () => {
                const state = get();
                const now = new Date().toISOString();
                return Object.values(state.userProgress).filter(s => s.dueDate <= now).length;
            },

            getLearnedCount: () => {
                return Object.keys(get().userProgress).length;
            },

            getTotalWords: () => {
                return words.length;
            },

            getTotalLessons: () => {
                return lessons.length;
            },

            getLessonProgress: (lessonId) => {
                const state = get();
                const lessonWords = getWordsForLesson(lessonId);
                const learned = lessonWords.filter(w => state.userProgress[w.id]).length;
                return {
                    total: lessonWords.length,
                    learned,
                    percent: lessonWords.length > 0 ? Math.round((learned / lessonWords.length) * 100) : 0
                };
            }
        }),
        {
            name: 'de-app-storage',
        }
    )
);

export default useStore;
