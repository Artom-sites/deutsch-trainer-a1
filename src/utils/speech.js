/**
 * Text-to-Speech utility for German language learning
 * Uses Web Speech API (built into all modern browsers)
 */

// Speech speed setting (stored globally)
let speechSpeed = 1; // 0.75 = slow, 1 = normal, 1.25 = fast

export const getSpeechSpeed = () => speechSpeed;
export const setSpeechSpeed = (speed) => {
    speechSpeed = speed;
    localStorage.setItem('speechSpeed', speed.toString());
};

// Load saved speed on init
if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('speechSpeed');
    if (saved) speechSpeed = parseFloat(saved);
}

// Check if TTS is supported
export const isTTSSupported = () => {
    return 'speechSynthesis' in window;
};

// Get German voice (prefer native German voice)
const getGermanVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.startsWith('de')) ||
        voices.find(v => v.lang === 'de-DE') ||
        voices[0];
    return germanVoice;
};

// Speak text in German
export const speak = (text, options = {}) => {
    if (!isTTSSupported()) {
        console.warn('Text-to-Speech is not supported in this browser');
        return Promise.reject(new Error('TTS not supported'));
    }

    return new Promise((resolve, reject) => {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Settings - use global speechSpeed multiplied by options rate
        const baseRate = options.rate || 0.85;
        utterance.lang = options.lang || 'de-DE';
        utterance.rate = baseRate * speechSpeed;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;

        const voice = getGermanVoice();
        if (voice) {
            utterance.voice = voice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event.error);

        try {
            window.speechSynthesis.speak(utterance);
        } catch (e) {
            console.error("Speech synthesis failed", e);
            reject(e);
        }
    });
};

// Speak a word with article
export const speakWord = (word, article = null) => {
    // Remove text in parentheses (e.g. "Wort (extra info)" → "Wort")
    const cleanWord = word.replace(/\s*\([^)]*\)/g, '').trim();
    const textToSpeak = article ? `${article} ${cleanWord}` : cleanWord;
    return speak(textToSpeak);
};

// Speak a sentence (slower)
export const speakSentence = (sentence) => {
    return speak(sentence, { rate: 0.75 });
};

// Stop speaking
export const stopSpeaking = () => {
    if (isTTSSupported()) {
        window.speechSynthesis.cancel();
    }
};

// Initialize voices (needed for some browsers)
export const initVoices = () => {
    return new Promise((resolve) => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            resolve(voices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                resolve(window.speechSynthesis.getVoices());
            };
        }
    });
};

// ==========================================
// HAPTIC FEEDBACK
// ==========================================
export const triggerHaptic = (type = 'light') => {
    if (!('vibrate' in navigator)) return;

    switch (type) {
        case 'light':
            navigator.vibrate(10);
            break;
        case 'medium':
            navigator.vibrate(25);
            break;
        case 'heavy':
            navigator.vibrate(50);
            break;
        case 'success':
            navigator.vibrate([10, 50, 10]);
            break;
        case 'error':
            navigator.vibrate([50, 30, 50]);
            break;
        default:
            navigator.vibrate(10);
    }
};

export default {
    speak, speakWord, speakSentence, stopSpeaking,
    isTTSSupported, initVoices,
    getSpeechSpeed, setSpeechSpeed, triggerHaptic
};
