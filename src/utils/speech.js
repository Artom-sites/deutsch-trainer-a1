/**
 * Text-to-Speech utility for German language learning
 * Uses Web Speech API (built into all modern browsers)
 */

// Check if TTS is supported
export const isTTSSupported = () => {
    return 'speechSynthesis' in window;
};

// Get German voice (prefer native German voice)
const getGermanVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    // Prefer German voices
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
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Settings
        utterance.lang = options.lang || 'de-DE';
        utterance.rate = options.rate || 0.85; // Slightly slower for learners
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;

        // Try to use German voice
        const voice = getGermanVoice();
        if (voice) {
            utterance.voice = voice;
        }

        // Events
        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event.error);

        // Speak
        window.speechSynthesis.speak(utterance);
    });
};

// Speak a word with article (e.g., "der Tisch")
export const speakWord = (word, article = null) => {
    const textToSpeak = article ? `${article} ${word}` : word;
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

export default { speak, speakWord, speakSentence, stopSpeaking, isTTSSupported, initVoices };
