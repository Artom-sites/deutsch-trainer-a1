// src/store/authStore.js
// Zustand store for authentication state
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';

const useAuthStore = create(
    persist(
        (set, get) => ({
            // State
            user: null,
            isLoading: true,
            error: null,

            // Gamification
            streak: 0,
            lastActiveDate: null,
            dailyGoal: 10,
            dailyProgress: 0,
            weeklyActivity: [0, 0, 0, 0, 0, 0, 0], // Mon-Sun

            // Initialize auth listener
            initAuth: () => {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        // Fetch user data from Firestore
                        const userData = await get().fetchUserData(user.uid);
                        set({
                            user: {
                                uid: user.uid,
                                email: user.email,
                                displayName: user.displayName || user.email?.split('@')[0],
                                photoURL: user.photoURL
                            },
                            ...userData,
                            isLoading: false,
                            error: null
                        });
                        // Update streak
                        get().updateStreak();
                    } else {
                        set({ user: null, isLoading: false });
                    }
                });
            },

            // Fetch user data from Firestore
            fetchUserData: async (uid) => {
                try {
                    const docRef = doc(db, 'users', uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        return docSnap.data();
                    }
                    return {};
                } catch (e) {
                    console.error('Error fetching user data:', e);
                    return {};
                }
            },

            // Save user data to Firestore
            saveUserData: async (data) => {
                const { user } = get();
                if (!user) return;
                try {
                    const docRef = doc(db, 'users', user.uid);
                    await setDoc(docRef, {
                        ...data,
                        updatedAt: serverTimestamp()
                    }, { merge: true });
                } catch (e) {
                    console.error('Error saving user data:', e);
                }
            },

            // Register with email
            register: async (email, password, name) => {
                set({ isLoading: true, error: null });
                try {
                    const result = await createUserWithEmailAndPassword(auth, email, password);
                    await updateProfile(result.user, { displayName: name });

                    // Create user document
                    await setDoc(doc(db, 'users', result.user.uid), {
                        email,
                        displayName: name,
                        createdAt: serverTimestamp(),
                        streak: 0,
                        dailyGoal: 10,
                        learnedWords: [],
                        completedLessons: []
                    });

                    set({ isLoading: false });
                    return { success: true };
                } catch (e) {
                    set({ isLoading: false, error: e.message });
                    return { success: false, error: e.message };
                }
            },

            // Login with email
            login: async (email, password) => {
                set({ isLoading: true, error: null });
                try {
                    await signInWithEmailAndPassword(auth, email, password);
                    set({ isLoading: false });
                    return { success: true };
                } catch (e) {
                    set({ isLoading: false, error: e.message });
                    return { success: false, error: e.message };
                }
            },

            // Login with Google
            loginWithGoogle: async () => {
                set({ isLoading: true, error: null });
                try {
                    const result = await signInWithPopup(auth, googleProvider);

                    // Check if user document exists, create if not
                    const docRef = doc(db, 'users', result.user.uid);
                    const docSnap = await getDoc(docRef);
                    if (!docSnap.exists()) {
                        await setDoc(docRef, {
                            email: result.user.email,
                            displayName: result.user.displayName,
                            photoURL: result.user.photoURL,
                            createdAt: serverTimestamp(),
                            streak: 0,
                            dailyGoal: 10,
                            learnedWords: [],
                            completedLessons: []
                        });
                    }

                    set({ isLoading: false });
                    return { success: true };
                } catch (e) {
                    set({ isLoading: false, error: e.message });
                    return { success: false, error: e.message };
                }
            },

            // Logout
            logout: async () => {
                try {
                    await signOut(auth);
                    set({ user: null, streak: 0, dailyProgress: 0 });
                } catch (e) {
                    console.error('Logout error:', e);
                }
            },

            // Update streak
            updateStreak: async () => {
                const { user, lastActiveDate, streak, saveUserData } = get();
                if (!user) return;

                const today = new Date().toDateString();
                const yesterday = new Date(Date.now() - 86400000).toDateString();

                if (lastActiveDate === today) {
                    // Already active today
                    return;
                }

                let newStreak = streak;
                if (lastActiveDate === yesterday) {
                    // Continue streak
                    newStreak = streak + 1;
                } else if (lastActiveDate !== today) {
                    // Streak broken, start new
                    newStreak = 1;
                }

                // Update weekly activity
                const dayOfWeek = new Date().getDay();
                const weekIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Mon=0, Sun=6
                const weeklyActivity = [...get().weeklyActivity];
                weeklyActivity[weekIndex] = (weeklyActivity[weekIndex] || 0) + 1;

                set({
                    streak: newStreak,
                    lastActiveDate: today,
                    weeklyActivity
                });

                await saveUserData({
                    streak: newStreak,
                    lastActiveDate: today,
                    weeklyActivity
                });
            },

            // Increment daily progress
            incrementDailyProgress: async () => {
                const { dailyProgress, dailyGoal, saveUserData, updateStreak } = get();
                const newProgress = dailyProgress + 1;
                set({ dailyProgress: newProgress });

                // Update streak when user is active
                await updateStreak();

                await saveUserData({ dailyProgress: newProgress });
            },

            // Reset daily progress (call at midnight or on new day)
            resetDailyProgress: () => {
                set({ dailyProgress: 0 });
            }
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                streak: state.streak,
                lastActiveDate: state.lastActiveDate,
                dailyProgress: state.dailyProgress,
                weeklyActivity: state.weeklyActivity
            })
        }
    )
);

export default useAuthStore;
