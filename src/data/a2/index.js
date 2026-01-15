import { lessonsA2 } from './lessons';
import { wordsA2 } from './words';
import { grammarA2 } from './grammar';

export { lessonsA2 as lessons, wordsA2 as words, grammarA2 as grammar };

export const getWordsForLessonA2 = (lessonId) => {
    return wordsA2.filter(w => w.lesson === lessonId);
};
