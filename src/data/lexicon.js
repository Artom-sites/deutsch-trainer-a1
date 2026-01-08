// src/data/lexicon.js
// Головний файл даних — імпортує всі дані з окремих модулів
// та експортує уніфікований API

import { words, lessonNames } from './words.js';
import { lessons } from './lessons.js';
import { exercises } from './exercises.js';
import { grammarTopics, grammarContent } from './grammar.js';

// ==========================================
// RE-EXPORT
// ==========================================
export { words, lessonNames };
export { lessons };
export { exercises };
export { grammarTopics, grammarContent };

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Отримати слова для конкретного уроку
 */
export function getWordsForLesson(lessonId) {
  return words.filter(w => w.lesson === lessonId);
}

/**
 * Отримати всі слова
 */
export function getAllWords() {
  return words;
}

/**
 * Отримати урок за ID
 */
export function getLessonById(lessonId) {
  return lessons.find(l => l.id === lessonId);
}

/**
 * Отримати вправи для уроку (за topic або lesson)
 */
export function getExercisesForLesson(lessonId) {
  return Object.values(exercises).filter(e => e.lesson === lessonId);
}

/**
 * Отримати вправи для теми граматики
 */
export function getExercisesForTopic(topicId) {
  return Object.values(exercises).filter(e => e.topic === topicId);
}

/**
 * Отримати граматику для уроку
 */
export function getGrammarForLesson(lessonId) {
  return grammarTopics.filter(g => g.lesson === lessonId);
}

/**
 * Отримати повний контент граматики
 */
export function getGrammarContent(topicId) {
  return grammarContent[topicId] || null;
}

// ==========================================
// STATS
// ==========================================
export const TOTAL_WORDS = words.length;
export const TOTAL_LESSONS = lessons.length;
