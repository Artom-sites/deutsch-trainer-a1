// src/data/lexicon.js
// Головний файл даних — імпортує всі дані з окремих модулів
// та експортує уніфікований API

import { words, lessonNames } from './words.js';
import { lessons } from './lessons.js';
import { exercises, getExercisesForTopic, getExercisesForLesson } from './exercises.js';
import { grammarTopics, grammarContent, getGrammarForLesson, getGrammarContent } from './grammar.js';

// ==========================================
// RE-EXPORT
// ==========================================
export { words, lessonNames };
export { lessons };
export { exercises, getExercisesForTopic, getExercisesForLesson };
export { grammarTopics, grammarContent, getGrammarForLesson, getGrammarContent };

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

// ==========================================
// STATS
// ==========================================
export const TOTAL_WORDS = words.length;
export const TOTAL_LESSONS = lessons.length;
