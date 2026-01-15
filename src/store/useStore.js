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
            // SOUND SETTINGS
            // ==========================================
            soundEnabled: true, // true | false
            soundMode: 'all', // 'all' | 'effects' | 'none'
            toggleSound: () => set(state => ({ soundEnabled: !state.soundEnabled })),
            setSoundMode: (mode) => set({ soundMode: mode }),

            // ==========================================
            // NAVIGATION STATE
            // ==========================================
            currentTab: 'home',
            currentView: 'main', // 'main' | 'lesson-detail' | 'flashcards' | 'exercises' | 'grammar-detail'

            activeLessonId: null,
            lastVisitedLessonId: null, // Persisted: last lesson user worked on
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

            // Direct setters for themed words
            setFlashcardWords: (words) => set({
                flashcardWords: words,
                currentView: 'flashcards',
                currentCardIndex: 0
            }),
            setCurrentView: (view) => set({ currentView: view }),
            setNounMasterWords: (words) => set({
                currentView: 'noun-master',
                flashcardWords: words,
                currentCardIndex: 0,
                activeLessonId: null
            }),

            // ==========================================
            // LESSON ACTIONS
            // ==========================================
            openLesson: (lessonId) => set({
                currentView: 'lesson-detail',
                activeLessonId: lessonId,
                lastVisitedLessonId: lessonId // Remember last visited
            }),

            goBack: () => {
                const state = get();
                // All session views that should return to lesson-detail if activeLessonId exists
                const sessionViews = ['flashcards', 'exercises', 'test', 'noun-master', 'reading'];

                if (sessionViews.includes(state.currentView)) {
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
                } else if (state.currentView === 'lesson-detail') {
                    set({
                        currentView: 'main',
                        activeLessonId: null,
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
            // START FLASHCARDS with Shuffle
            startLessonWords: (lessonId) => {
                const lessonWords = getWordsForLesson(lessonId);
                const userProgress = get().userProgress;

                // Sort: unlearned first
                // Then Shuffle each group to avoid predictable order
                const unlearned = [];
                const learned = [];

                lessonWords.forEach(w => {
                    if (userProgress[w.id]) learned.push(w);
                    else unlearned.push(w);
                });

                // Simple Fisher-Yates shuffle
                const shuffle = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };

                shuffle(unlearned);

                // For learned words, sort by due date first, but if equal/similar, randomness helps?
                // Actually SRS should be strict on due date. 
                // But for "Review", strict order is fine. 
                // The user complaint "Words in lessons always same order" likely refers to new lessons (unlearned).

                learned.sort((a, b) => {
                    const progressA = userProgress[a.id];
                    const progressB = userProgress[b.id];
                    return new Date(progressA.dueDate) - new Date(progressB.dueDate);
                });

                set({
                    currentView: 'flashcards',
                    flashcardWords: [...unlearned, ...learned],
                    currentCardIndex: 0,
                    activeLessonId: lessonId
                });
            },

            startAllWords: () => {
                const allWords = getAllWords();
                const userProgress = get().userProgress;

                const unlearned = [];
                const learned = [];

                allWords.forEach(w => {
                    if (userProgress[w.id]) learned.push(w);
                    else unlearned.push(w);
                });

                const shuffle = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };

                shuffle(unlearned);

                learned.sort((a, b) => {
                    const progressA = userProgress[a.id];
                    const progressB = userProgress[b.id];
                    return new Date(progressA.dueDate) - new Date(progressB.dueDate);
                });

                set({
                    currentView: 'flashcards',
                    flashcardWords: [...unlearned, ...learned],
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

            // Start Noun Master with custom list (Review)
            startReviewNounMaster: (words) => {
                const nounsOnly = words.filter(w => w.article && w.plural);
                set({
                    currentView: 'noun-master',
                    activeLessonId: null, // No specific lesson
                    flashcardWords: nounsOnly,
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

            // Start reading session (Lesen)
            startReading: (lessonId) => {
                set({
                    currentView: 'reading',
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
            submitReview: (wordId, quality) => {
                const state = get();
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


                // TRACKING PROGRESS:
                // Increment daily goal on any successful review
                if (quality >= 3) {
                    useAuthStore.getState().incrementDailyProgress();
                }

                // AWARD LOGIC: Bonus coins when hitting Stage 4 (Mastery)
                if (currentStage < 4 && nextStage === 4) {
                    useAuthStore.getState().addCoins(10); // Award 10 coins for mastery
                }

                const newProgress = {
                    ...state.userProgress,
                    [wordId]: finalStats
                };

                set({ userProgress: newProgress });

                // Sync to Firestore
                useAuthStore.getState().saveUserData({ userProgress: newProgress });
            },

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
            },

            // Overall progress across all lessons (for progress ring)
            getOverallProgress: () => {
                const state = get();
                let totalLearned = 0;
                let totalWords = 0;
                lessons.forEach(lesson => {
                    const lessonWords = getWordsForLesson(lesson.id);
                    totalWords += lessonWords.length;
                    totalLearned += lessonWords.filter(w => {
                        const prog = state.userProgress[w.id];
                        return prog && prog.masteryStage === 4;
                    }).length;
                });
                return {
                    learned: totalLearned,
                    total: totalWords,
                    percent: totalWords > 0 ? Math.round((totalLearned / totalWords) * 100) : 0
                };
            },

            // Get words that need review (low mastery or due)
            getWeakWords: (limit = 5) => {
                const state = get();
                const allWords = getAllWords();
                const weakList = [];

                allWords.forEach(word => {
                    const prog = state.userProgress[word.id];
                    if (prog) {
                        // Words with low mastery (0-2) or overdue
                        const isWeak = prog.masteryStage <= 2;
                        const isOverdue = prog.dueDate && new Date(prog.dueDate) < new Date();
                        if (isWeak || isOverdue) {
                            weakList.push({ ...word, masteryStage: prog.masteryStage, isOverdue });
                        }
                    }
                });

                // Sort by mastery stage (lowest first), then by overdue
                weakList.sort((a, b) => {
                    if (a.isOverdue && !b.isOverdue) return -1;
                    if (!a.isOverdue && b.isOverdue) return 1;
                    return a.masteryStage - b.masteryStage;
                });

                return weakList.slice(0, limit);
            }
        }),
        {
            name: 'de-app-storage',
            // Don't persist navigation state - always start at home
            partialize: (state) => ({
                userProgress: state.userProgress,
                soundEnabled: state.soundEnabled,
                soundMode: state.soundMode,
                lastVisitedLessonId: state.lastVisitedLessonId,
            }),
        }
    )
);

export default useStore;
