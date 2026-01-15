// src/data/lexicon.js
// Головний файл даних — імпортує всі дані з окремих модулів
// та експортує уніфікований API

import { words, lessonNames } from './words.js';
import { lessons } from './lessons.js';
import { exercises, getExercisesForTopic, getExercisesForLesson } from './exercises.js';
import { grammarTopics, grammarContent } from './grammar.js';
import { verbs as verbsA1 } from './verbs.js';

// A2 Imports
import { lessons as lessonsA2, words as wordsA2, grammar as grammarA2 } from './a2/index.js';

// ==========================================
// RE-EXPORT
// ==========================================
export { words, lessonNames };
export { verbsA1 as verbs };
export { lessons };
export { exercises, getExercisesForTopic, getExercisesForLesson };
export { grammarTopics, grammarContent };

// ==========================================
// LEVEL-AWARE GRAMMAR HELPERS
// ==========================================

export function getGrammarForLesson(lessonId) {
  // Check A1 (Legacy: filtered by lesson property in grammarTopics)
  const tA1 = grammarTopics.filter(t => t.lesson === lessonId);
  if (tA1.length > 0) return tA1;

  // Check A2 (via lesson.topics -> grammarA2 lookup)
  const lesson = lessonsA2.find(l => l.id === lessonId);
  if (lesson && lesson.topics) {
    // Find grammar items that match topic IDs and normalize structure
    return grammarA2
      .filter(g => lesson.topics.includes(g.id))
      .map(g => ({
        ...g,
        name: g.title, // Map title to name for UI compatibility
        icon: '📚', // Default icon for A2 grammar
        shortDescription: g.description
      }));
  }
  return [];
}

export function getGrammarContent(topicId) {
  // A1
  if (grammarContent[topicId]) return grammarContent[topicId];

  // A2
  return grammarA2.find(g => g.id === topicId);
}

// ==========================================
// LEVEL-AWARE HELPERS
// ==========================================

export function getLessonsForLevel(level) {
  if (level === 'A2') return lessonsA2;
  return lessons; // Default A1
}

export function getWordsForLevel(level) {
  if (level === 'A2') return wordsA2;
  return words; // Default A1
}

// ==========================================
// HELPER FUNCTIONS (Legacy / Context Aware)
// ==========================================

/**
 * Отримати слова для конкретного уроку (Level Aware via argument lookup or ID)
 * Ideally components should pass the list, but for backward compat:
 */
export function getWordsForLesson(lessonId) {
  // Check A1
  const wA1 = words.filter(w => w.lesson === lessonId);
  if (wA1.length > 0) return wA1;

  // Check A2
  const wA2 = wordsA2.filter(w => w.lesson === lessonId);
  return wA2;
}

/**
 * Отримати всі слова (Prefer getWordsForLevel)
 */
export function getAllWords() {
  return [...words, ...wordsA2];
}

/**
 * Отримати урок за ID
 */
export function getLessonById(lessonId) {
  const l1 = lessons.find(l => l.id === lessonId);
  if (l1) return l1;
  return lessonsA2.find(l => l.id === lessonId);
}

// ==========================================
// STATS
// ==========================================
export const TOTAL_WORDS = words.length + wordsA2.length;
export const TOTAL_LESSONS = lessons.length + lessonsA2.length;

export function getAllLessons() {
  return [...lessons, ...lessonsA2];
}

export function getAllVerbs() {
  // A1 Verbs (assume they have type='verb')
  // A2 Verbs (filter wordsA2 where type='verb')
  const a2Verbs = wordsA2.filter(w => w.type === 'verb').map(w => ({
    ...w,
    infinitiv: w.word, // VerbCard expects infinitiv
    type: 'regular', // Default to regular for now
    praesens: { ich: '-', du: '-', 'er/sie/es': '-', wir: '-', ihr: '-', 'sie/Sie': '-' },
    praeteritum: { ich: '-', du: '-', 'er/sie/es': '-', wir: '-', ihr: '-', 'sie/Sie': '-' },
    perfekt: w.perfekt ? (w.perfekt.haben ? 'hat ' + w.perfekt.haben : 'ist ' + w.perfekt.sein) : '',
    rotation: 0
  }));
  return [...verbsA1, ...a2Verbs];
}
