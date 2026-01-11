/**
 * Audio Lessons (Mini-Podcasts)
 * Uses Text-to-Speech to simulate audio lessons
 */

export const audioLessons = [
    {
        id: 'audio-1',
        title: 'Знайомство (Kennenlernen)',
        level: 'A1',
        description: 'Як представитися та запитати ім\'я співрозмовника.',
        duration: '1:30',
        color: '#3B82F6',
        transcript: [
            { speaker: 'Narrator', text: 'Lektion 1. Kennenlernen. Hör zu und wiederhole.', de: 'Lektion 1. Kennenlernen. Hör zu und wiederhole.' },
            { speaker: 'Anna', text: 'Hallo! Ich heiße Anna.', de: 'Hallo! Ich heiße Anna.' },
            { speaker: 'Narrator', text: 'Привіт! Мене звати Анна.', de: 'Hallo! Ich heiße Anna.' },
            { speaker: 'Anna', text: 'Wie heißt du?', de: 'Wie heißt du?' },
            { speaker: 'Narrator', text: 'Як тебе звати?', de: 'Wie heißt du?' },
            { speaker: 'Lukas', text: 'Hallo Anna! Ich bin Lukas.', de: 'Hallo Anna! Ich bin Lukas.' },
            { speaker: 'Anna', text: 'Freut mich, Lukas!', de: 'Freut mich, Lukas!' },
            { speaker: 'Narrator', text: 'Приємно познайомитися, Лукас!', de: 'Freut mich, Lukas!' },
            { speaker: 'Lukas', text: 'Woher kommst du, Anna?', de: 'Woher kommst du, Anna?' },
            { speaker: 'Anna', text: 'Ich komme aus der Ukraine. Und du?', de: 'Ich komme aus der Ukraine. Und du?' },
            { speaker: 'Lukas', text: 'Ich komme aus Deutschland.', de: 'Ich komme aus Deutschland.' },
            { speaker: 'Narrator', text: 'Це був короткий діалог. Тепер спробуйте ви.', de: 'Das war ein kurzer Dialog. Jetzt du.' }
        ]
    },
    {
        id: 'audio-2',
        title: 'У кафе (Im Café)',
        level: 'A1',
        description: 'Як замовити каву та десерт.',
        duration: '2:00',
        color: '#F59E0B',
        transcript: [
            { speaker: 'Narrator', text: 'Im Café. Bestellen.', de: 'Im Café. Bestellen.' },
            { speaker: 'Kellner', text: 'Guten Tag! Was möchten Sie trinken?', de: 'Guten Tag! Was möchten Sie trinken?' },
            { speaker: 'Gast', text: 'Ich möchte einen Kaffee, bitte.', de: 'Ich möchte einen Kaffee, bitte.' },
            { speaker: 'Kellner', text: 'Mit Milch und Zucker?', de: 'Mit Milch und Zucker?' },
            { speaker: 'Gast', text: 'Nur mit Milch, bitte.', de: 'Nur mit Milch, bitte.' },
            { speaker: 'Kellner', text: 'Und etwas zu essen?', de: 'Und etwas zu essen?' },
            { speaker: 'Gast', text: 'Ja, einen Apfelkuchen.', de: 'Ja, einen Apfelkuchen.' },
            { speaker: 'Kellner', text: 'Sehr gerne. Kommt sofort.', de: 'Sehr gerne. Kommt sofort.' }
        ]
    },
    {
        id: 'audio-3',
        title: 'Цифри та час (Zahlen und Zeit)',
        level: 'A1',
        description: 'Вчимося рахувати та питати котра година.',
        duration: '1:45',
        color: '#10B981',
        transcript: [
            { speaker: 'Narrator', text: 'Zahlen von 1 bis 10.', de: 'Zahlen von 1 bis 10.' },
            { speaker: 'Lehrer', text: 'Eins, zwei, drei, vier, fünf.', de: 'Eins, zwei, drei, vier, fünf.' },
            { speaker: 'Lehrer', text: 'Sechs, sieben, acht, neun, zehn.', de: 'Sechs, sieben, acht, neun, zehn.' },
            { speaker: 'Narrator', text: 'Wie spät ist es?', de: 'Wie spät ist es?' },
            { speaker: 'Person A', text: 'Entschuldigung, wie spät ist es?', de: 'Entschuldigung, wie spät ist es?' },
            { speaker: 'Person B', text: 'Es ist zwei Uhr.', de: 'Es ist zwei Uhr.' },
            { speaker: 'Person A', text: 'Vielen Dank!', de: 'Vielen Dank!' }
        ]
    }
];
