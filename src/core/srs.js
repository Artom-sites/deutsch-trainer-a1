// src/core/srs.js

/**
 * Calculates the next review date and new interval/ease factor.
 * Based on a simplified SM-2 Algorithm.
 * 
 * @param {object} stats - Current SRS stats for the word { interval: number, repetitions: number, easeFactor: number }
 * @param {number} quality - User grade (0-5). 0-2: Failure, 3: Pass, 4: Good, 5: Perfect.
 */
export function calculateNextReview(stats, quality) {
    // Defaults if new
    const currentInterval = stats?.interval || 0;
    const currentRepetitions = stats?.repetitions || 0;
    const currentEaseFactor = stats?.easeFactor || 2.5;

    let nextInterval;
    let nextRepetitions;
    let nextEaseFactor;

    if (quality < 3) {
        // Failure: Reset repetitions and interval
        nextRepetitions = 0;
        nextInterval = 1; // Review tomorrow
        nextEaseFactor = currentEaseFactor; // Keep ease factor same or slight penalty? SM-2 says same but logic can differ.
    } else {
        // Success
        if (currentRepetitions === 0) {
            nextInterval = 1;
        } else if (currentRepetitions === 1) {
            nextInterval = 3; // Rule: 1 -> 3
        } else {
            // 3 -> 7 -> 14 -> 30 logic as requested
            // The user specified: 1 -> 3 -> 7 -> 14 -> 30
            // We can hardcode this progression for early stages or use EF.
            // Let's use the explicit mapping requested by user for consistency.
            const intervals = [1, 3, 7, 14, 30];
            const currentIndex = intervals.indexOf(currentInterval);
            if (currentIndex !== -1 && currentIndex < intervals.length - 1) {
                nextInterval = intervals[currentIndex + 1];
            } else {
                // Beyond 30, use standard growth
                nextInterval = Math.round(currentInterval * currentEaseFactor);
            }
        }
        nextRepetitions = currentRepetitions + 1;
        nextEaseFactor = currentEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (nextEaseFactor < 1.3) nextEaseFactor = 1.3;
    }

    // Calculate Due Date
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + nextInterval);
    dueDate.setHours(0, 0, 0, 0); // Normalize time

    return {
        interval: nextInterval,
        repetitions: nextRepetitions,
        easeFactor: nextEaseFactor,
        dueDate: dueDate.toISOString()
    };
}

/**
 * Filter words that are due for review.
 */
export function getDueWords(userProgress, lexicon) {
    const now = new Date().toISOString();

    return lexicon.filter(word => {
        const stats = userProgress[word.id];
        if (!stats) return false; // Not learned yet (use separate function for new words)
        return stats.dueDate <= now;
    });
}
