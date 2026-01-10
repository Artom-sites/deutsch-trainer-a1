// src/firebase.js
// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

export default app;
