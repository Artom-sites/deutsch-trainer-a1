// src/firebase.js
// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJE_8NCsJ3pAHCP33MDuDZPRLtHOColtk",
    authDomain: "de-app-98e1a.firebaseapp.com",
    projectId: "de-app-98e1a",
    storageBucket: "de-app-98e1a.firebasestorage.app",
    messagingSenderId: "960950356774",
    appId: "1:960950356774:web:97d4e743eb7398bda48fe7",
    measurementId: "G-9TBL8VE77D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
// Imports handled at top of file
export const auth = getAuth(app);

// Force local persistence for better mobile support
setPersistence(auth, browserLocalPersistence).catch(console.error);

export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

// Enable Offline Persistence
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.
        console.log('Persistence failed: Multiple tabs open');
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the features required to enable persistence
        console.log('Persistence not supported');
    }
});

export default app;
