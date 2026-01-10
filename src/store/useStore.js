// src/store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { words, lessons, getWordsForLesson, getAllWords, getLessonById, getExercisesForLesson, getExercisesForTopic, getGrammarForLesson } from '../data/lexicon';
import { calculateNextReview } from '../core/srs';
import useAuthStore from './authStore';

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
            currentTab: 'home',
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
                if (state.currentView === 'flashcards' || state.currentView === 'exercises' || state.currentView === 'test') {
                    // If we have an active lesson, go back to it; otherwise go to main
                    if (state.activeLessonId) {
                        set({
                            currentView: 'lesson-detail',
                            flashcardWords: [],
                            currentCardIndex: 0,
                            activeExercises: []
                        });
                    } else {
                        set({
                            currentView: 'main',
                            flashcardWords: [],
                            currentCardIndex: 0,
                            activeExercises: [],
                            activeLessonId: null
                        });
                    }
                } else if (state.currentView === 'grammar-detail') {
                    set({
                        currentView: 'lesson-detail',
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
                set({
                    currentView: 'flashcards',
                    flashcardWords: sortedWords,
                    currentCardIndex: 0
                });
            },

            // Start Noun Master
            startNounMaster: (lessonId) => {
                const lessonWords = getWordsForLesson(lessonId).filter(w => w.article && w.plural); // Only nouns
                set({
                    currentView: 'noun-master',
                    activeLessonId: lessonId,
                    flashcardWords: lessonWords, // Reuse this for word list
                    currentCardIndex: 0
                });
            },

            // Start lesson test
            startLessonTest: (lessonId) => {
                set({
                    currentView: 'test',
                    activeLessonId: lessonId
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
                const stats = state.userProgress[wordId] || { masteryStage: 0 };
                const currentStage = stats.masteryStage || 0;

                // Calculate SRS
                const newStats = calculateNextReview(stats, quality);

                // MASTERY LOGIC
                let nextStage = currentStage;
                if (quality >= 3) {
                    // Promotion if quality is high enough
                    // Stage 0 -> 1 -> 2 -> 3 -> 4 (Mastered)
                    if (currentStage < 4) {
                        nextStage = currentStage + 1;
                    }
                } else {
                    // Demotion on failure
                    if (currentStage > 0) {
                        nextStage = Math.max(0, currentStage - 1);
                    }
                }

                // Merge SRS stats with Mastery Stage
                const finalStats = { ...newStats, masteryStage: nextStage };

                // AWARD LOGIC: Only when hitting Stage 4 for the first time
                if (currentStage < 4 && nextStage === 4) {
                    useAuthStore.getState().incrementDailyProgress();
                    useAuthStore.getState().addCoins(10); // Award 10 coins for mastery
                }

                return {
                    userProgress: {
                        ...state.userProgress,
                        [wordId]: finalStats
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
                const learned = lessonWords.filter(w => {
                    const prog = state.userProgress[w.id];
                    return prog && prog.masteryStage === 4;
                }).length;
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
