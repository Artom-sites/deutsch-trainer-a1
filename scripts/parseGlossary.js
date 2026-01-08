/**
 * Parse Schritte plus Neu Glossar JSON and generate words.js data
 * Run with: node scripts/parseGlossary.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the JSON file
const jsonPath = path.join(__dirname, '..', 'vertopal_com_530_29322_Schritte_plus_Neu_1_2_Glossar_D_Ukrainisch.json');
const rawData = fs.readFileSync(jsonPath, 'utf-8');
const jsonData = JSON.parse(rawData);

// The glossary text is stored as the KEY (not value) in this JSON - value is null
// So we need to get the first key
const keys = Object.keys(jsonData);
const text = keys[0]; // The entire glossary is the key!

// Parse the glossary text
const lines = text.split('\n');

const words = [];
let currentLesson = 0;
const seenIds = new Set();

function generateId(word) {
    return word.toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/·/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function extractPlural(pluralStr) {
    if (!pluralStr) return null;
    const cleaned = pluralStr.trim();
    if (cleaned.includes('Sg.')) return null;
    if (cleaned.includes('Pl.')) return 'Pl.';
    // Extract plural ending like "-n", "-en", "¨-er", " ̈-e"
    const match = cleaned.match(/([¨̈]?-[a-zA-Z]*)/);
    return match ? match[1].replace(' ̈', '¨') : null;
}

// Process lines
for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check for lesson header patterns
    // "1 Guten Tag. Mein Name ist ..."
    // "2 Meine Familie"
    // "3 Einkaufen"
    const lessonMatch = line.match(/^(\d+)\s+(Guten Tag|Meine Familie|Einkaufen|Meine Wohnung|Mein Tag|Freizeit|Kinder und Schule|Beruf und Arbeit|Ämter und Behörden|Gesundheit und Krankheit|In der Stadt|Kundenservice|Neue Kleider|Feste|Unterwegs)/i);
    if (lessonMatch) {
        currentLesson = parseInt(lessonMatch[1]);
        console.log(`Found lesson ${currentLesson}: ${lessonMatch[2]}`);
        continue;
    }

    // Skip section headers and non-vocabulary
    if (line.match(/^(KURSBUCH|ARBEITSBUCH|Foto-Hörgeschichte|Grammatik|Kommunikation|Lernziele|Zwischendurch|Film|Projekt|Comic|Lied|Landeskunde|Test|Fokus|A\d|B\d|C\d|D\d|E\d)/)) {
        continue;
    }

    // Skip pure number lines
    if (/^\d+$/.test(line)) continue;

    // Check if line contains tab (German<tab>Ukrainian)
    if (line.includes('\t')) {
        const parts = line.split('\t');
        if (parts.length >= 2) {
            const german = parts[0].trim();
            const ukrainian = parts[parts.length - 1].trim();

            if (!german || !ukrainian) continue;
            if (german.length < 2 || ukrainian.length < 1) continue;

            // Parse German word with article
            let article = null;
            let word = german;
            let plural = null;

            // Pattern: "der/die/das Word, -plural"
            const nounMatch = german.match(/^(der|die|das)\s+([^,]+),?\s*(.*)$/i);
            if (nounMatch) {
                article = nounMatch[1].toLowerCase();
                word = nounMatch[2].trim();
                plural = extractPlural(nounMatch[3]);
            } else {
                // Just clean the word
                word = german.replace(/\s*\(.*?\)\s*/g, '').trim();
            }

            // Remove verb separators for ID but keep for display
            const cleanWord = word.replace(/·/g, '');

            if (!cleanWord || cleanWord.length < 2) continue;

            const id = generateId(cleanWord);

            // Skip if empty id or already seen
            if (!id || seenIds.has(id)) continue;
            seenIds.add(id);

            // Only add if we have a valid lesson (1-14)
            if (currentLesson >= 1 && currentLesson <= 14) {
                words.push({
                    id,
                    word: word.replace(/·/g, ''), // Remove separator for clean display
                    article: article,
                    plural: plural,
                    translation: ukrainian,
                    lesson: currentLesson
                });
            }
        }
    }
}

// Sort by lesson and then alphabetically
words.sort((a, b) => {
    if (a.lesson !== b.lesson) return a.lesson - b.lesson;
    return a.word.localeCompare(b.word, 'de');
});

// Generate the output with proper formatting
let output = `/**
 * German Vocabulary Database - A1 (Schritte plus Neu 1+2)
 * Автоматично згенеровано з глосарія
 * Всі слова з артиклями, множиною та перекладом
 * Total: ${words.length} words
 */

export const words = [
`;

// Group by lesson for comments
let lastLesson = 0;
for (const w of words) {
    if (w.lesson !== lastLesson) {
        if (lastLesson !== 0) output += '\n';
        output += `    // Lektion ${w.lesson}\n`;
        lastLesson = w.lesson;
    }

    const articleStr = w.article ? `"${w.article}"` : 'null';
    const pluralStr = w.plural ? `"${w.plural}"` : 'null';
    const escapedWord = w.word.replace(/"/g, '\\"');
    const escapedTranslation = w.translation.replace(/"/g, '\\"');

    output += `    { id: "${w.id}", word: "${escapedWord}", article: ${articleStr}, plural: ${pluralStr}, translation: "${escapedTranslation}", lesson: ${w.lesson} },\n`;
}

output += `];

export const lessonNames = {
    1: "Lektion 1: Guten Tag. Mein Name ist...",
    2: "Lektion 2: Meine Familie",
    3: "Lektion 3: Einkaufen",
    4: "Lektion 4: Meine Wohnung",
    5: "Lektion 5: Mein Tag",
    6: "Lektion 6: Freizeit",
    7: "Lektion 7: Kinder und Schule",
    8: "Lektion 8: Beruf und Arbeit",
    9: "Lektion 9: Ämter und Behörden",
    10: "Lektion 10: Gesundheit und Krankheit",
    11: "Lektion 11: In der Stadt",
    12: "Lektion 12: Kundenservice",
    13: "Lektion 13: Neue Kleider",
    14: "Lektion 14: Feste"
};

export default words;
`;

// Write to file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'words.js');
fs.writeFileSync(outputPath, output, 'utf-8');

console.log(`\nGenerated ${words.length} words`);
console.log('\nWords per lesson:');
for (let i = 1; i <= 14; i++) {
    const count = words.filter(w => w.lesson === i).length;
    console.log(`  Lesson ${i}: ${count} words`);
}
console.log(`\nOutput saved to: ${outputPath}`);
