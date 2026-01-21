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
            weeklyActivity: [0, 0, 0, 0, 0, 0, 0], // Mon-Sun (minutes)
            weekStartDate: null, // Track when current week started (Monday)
            sessionStartTime: null, // Track when session started

            // Economy
            coins: 100, // Initial bonus
            inventory: [], // IDs of purchased items
            collections: [], // User custom word collections
            collections: [], // User custom word collections
            lastStudiedCollectionId: null, // Last studied collection for quick access
            pinnedItems: [], // { id, type, name, color? }

            // Set last studied collection
            setLastStudiedCollection: (collectionId) => set({ lastStudiedCollectionId: collectionId }),

            // Pin/Unpin item
            togglePin: async (item) => {
                const { pinnedItems, saveUserData } = get();
                const exists = pinnedItems.find(p => p.id === item.id && p.type === item.type);

                let newPinned;
                if (exists) {
                    newPinned = pinnedItems.filter(p => !(p.id === item.id && p.type === item.type));
                } else {
                    newPinned = [...pinnedItems, item];
                }

                set({ pinnedItems: newPinned });
                await saveUserData({ pinnedItems: newPinned });
            },

            // Check if week has reset (called on init and when updating activity)
            checkWeekReset: () => {
                const { weekStartDate, saveUserData } = get();
                const now = new Date();
                // Get current week's Monday
                const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, etc.
                const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                const currentMonday = new Date(now);
                currentMonday.setDate(now.getDate() - daysToMonday);
                currentMonday.setHours(0, 0, 0, 0);
                const currentMondayStr = currentMonday.toISOString().split('T')[0];

                // If weekStartDate is different from current Monday, reset
                if (weekStartDate !== currentMondayStr) {
                    set({
                        weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
                        weekStartDate: currentMondayStr
                    });
                    saveUserData({
                        weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
                        weekStartDate: currentMondayStr
                    });
                    return true; // Week was reset
                }

                // Sanitize FUTURE days (prevent "time travel" bugs)
                // If today is Tuesday (index 1), indices 2,3,4,5,6 must be 0
                const todayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                const activity = get().weeklyActivity || [0, 0, 0, 0, 0, 0, 0];
                let hasRefreshed = false;
                const sanitized = activity.map((val, idx) => {
                    if (idx > todayIndex && val > 0) {
                        hasRefreshed = true;
                        return 0;
                    }
                    return val;
                });

                if (hasRefreshed) {
                    set({ weeklyActivity: sanitized });
                    saveUserData({ weeklyActivity: sanitized });
                }

                return false;
            },

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

                        // Sync userProgress to main store if exists
                        if (userData.userProgress) {
                            const { default: useStore } = await import('./useStore');
                            useStore.setState({ userProgress: userData.userProgress });
                        }

                        // Update streak
                        get().updateStreak();

                        // Check if week needs to be reset
                        get().checkWeekReset();
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
                        const data = docSnap.data();
                        // Ensure defaults for new fields (Economy)
                        return {
                            coins: 100,
                            inventory: [],
                            collections: [],
                            ...data
                        };
                    }
                    return { coins: 100, inventory: [] };
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
                        coins: 100,
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
                            coins: 100,
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
                    set({ user: null, streak: 0, dailyProgress: 0, coins: 0, inventory: [] });
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

            // Economy Actions
            addCoins: async (amount) => {
                const { coins, saveUserData } = get();
                const newBalance = (coins || 0) + amount;
                set({ coins: newBalance });
                await saveUserData({ coins: newBalance });
            },

            spendCoins: async (amount, itemId) => {
                const { coins, inventory, saveUserData } = get();
                if (coins < amount) return false;

                const newBalance = coins - amount;
                const newInventory = [...(inventory || []), itemId];

                set({ coins: newBalance, inventory: newInventory });
                await saveUserData({ coins: newBalance, inventory: newInventory });
                return true;
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

            // Session time tracking
            startSession: () => {
                set({ sessionStartTime: Date.now() });
            },

            endSession: async () => {
                const { sessionStartTime, weeklyActivity, saveUserData } = get();
                if (!sessionStartTime) return;

                const minutesSpent = Math.round((Date.now() - sessionStartTime) / 60000);
                if (minutesSpent < 1) return; // Ignore very short sessions

                const dayOfWeek = new Date().getDay();
                const weekIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Mon=0, Sun=6
                const updatedActivity = [...(weeklyActivity || [0, 0, 0, 0, 0, 0, 0])];
                updatedActivity[weekIndex] = (updatedActivity[weekIndex] || 0) + minutesSpent;

                set({ weeklyActivity: updatedActivity, sessionStartTime: null });
                await saveUserData({ weeklyActivity: updatedActivity });
            },

            // Collections Actions
            createCollection: async (name, icon) => {
                const { collections, saveUserData } = get();
                const newCollection = {
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                    name,
                    icon,
                    wordIds: [],
                    customWords: [],
                    createdAt: Date.now()
                };
                const updated = [...collections, newCollection];
                set({ collections: updated });
                await saveUserData({ collections: updated });
            },

            deleteCollection: async (id) => {
                const { collections, saveUserData } = get();
                const updated = collections.filter(c => c.id !== id);
                set({ collections: updated });
                await saveUserData({ collections: updated });
            },

            addToCollection: async (collectionId, wordIdOrObj, isCustom = false) => {
                const { collections, saveUserData } = get();
                const updated = collections.map(c => {
                    if (c.id !== collectionId) return c;

                    if (isCustom) {
                        // Custom words go to the BEGINNING of the list
                        return { ...c, customWords: [{ ...wordIdOrObj, id: Date.now().toString() }, ...c.customWords] };
                    } else {
                        // Support bulk add (array of word IDs)
                        if (Array.isArray(wordIdOrObj)) {
                            const newIds = wordIdOrObj.filter(id => !c.wordIds.includes(id));
                            return { ...c, wordIds: [...c.wordIds, ...newIds] };
                        }
                        // Single word add
                        if (c.wordIds.includes(wordIdOrObj)) return c;
                        return { ...c, wordIds: [...c.wordIds, wordIdOrObj] };
                    }
                });

                set({ collections: updated });
                await saveUserData({ collections: updated });
            },

            removeFromCollection: async (collectionId, itemId, isCustom = false) => {
                const { collections, saveUserData } = get();
                const updated = collections.map(c => {
                    if (c.id !== collectionId) return c;

                    if (isCustom) {
                        return { ...c, customWords: c.customWords.filter(w => w.id !== itemId) };
                    } else {
                        return { ...c, wordIds: c.wordIds.filter(id => id !== itemId) };
                    }
                });

                set({ collections: updated });
                await saveUserData({ collections: updated });
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
                coins: state.coins,
                inventory: state.inventory,
                collections: state.collections,
                lastActiveDate: state.lastActiveDate,
                dailyProgress: state.dailyProgress,
                dailyProgress: state.dailyProgress,
                weeklyActivity: state.weeklyActivity,
                weekStartDate: state.weekStartDate,
                pinnedItems: state.pinnedItems
            })
        }
    )
);

export default useAuthStore;
