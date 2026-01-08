/**
 * Exercises Database
 * Вправи різних типів
 */

export const exercises = {
    // === Artikel Exercises ===
    "artikel-1": {
        id: "artikel-1",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Apfel ist rot.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Apfel — чоловічого роду (der Apfel). Запам'ятай: більшість фруктів мають der!"
    },
    "artikel-2": {
        id: "artikel-2",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Milch ist frisch.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Milch — жіночого роду (die Milch)."
    },
    "artikel-3": {
        id: "artikel-3",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Kind spielt im Garten.",
        options: ["Der", "Die", "Das"],
        correct: 2,
        explanation: "Kind — середнього роду (das Kind)."
    },
    "artikel-4": {
        id: "artikel-4",
        type: "fill-blank",
        topic: "artikel",
        question: "Ich kaufe ___ Brot.",
        answer: "das",
        explanation: "Brot — середнього роду (das Brot)."
    },
    "artikel-5": {
        id: "artikel-5",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Wohnung ist groß.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Wohnung закінчується на -ung, тому die Wohnung (жіночий рід)."
    },

    // === Akkusativ Exercises ===
    "akk-1": {
        id: "akk-1",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich kaufe ___ Apfel.",
        options: ["der", "den", "das"],
        correct: 1,
        explanation: "Після kaufen потрібен Akkusativ. Der → den (чоловічий рід)."
    },
    "akk-2": {
        id: "akk-2",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er hat ___ Schwester.",
        options: ["ein", "eine", "einen"],
        correct: 1,
        explanation: "Schwester — жіночого роду. В Akkusativ: eine → eine (без змін)."
    },
    "akk-3": {
        id: "akk-3",
        type: "fill-blank",
        topic: "akkusativ",
        question: "Ich sehe ___ Mann. (der)",
        answer: "den",
        explanation: "Sehen вимагає Akkusativ. Der Mann → den Mann."
    },
    "akk-4": {
        id: "akk-4",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Wir brauchen ___ Tisch.",
        options: ["ein", "eine", "einen"],
        correct: 2,
        explanation: "Tisch — чоловічого роду. В Akkusativ: ein → einen."
    },

    // === Dativ Exercises ===
    "dat-1": {
        id: "dat-1",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich helfe ___ Kind.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Helfen вимагає Dativ. Das Kind → dem Kind."
    },
    "dat-2": {
        id: "dat-2",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er fährt mit ___ Bus.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Mit вимагає Dativ. Der Bus → dem Bus."
    },
    "dat-3": {
        id: "dat-3",
        type: "fill-blank",
        topic: "dativ",
        question: "Ich gebe ___ Frau das Buch. (die)",
        answer: "der",
        explanation: "Geben + Dativ. Die Frau → der Frau."
    },

    // === Modalverben Exercises ===
    "modal-1": {
        id: "modal-1",
        type: "multiple-choice",
        topic: "modalverben",
        question: "Ich ___ Deutsch sprechen.",
        options: ["kann", "können", "kannst"],
        correct: 0,
        explanation: "Ich kann — 1 особа однини дієслова können."
    },
    "modal-2": {
        id: "modal-2",
        type: "multiple-choice",
        topic: "modalverben",
        question: "Er ___ nach Berlin fahren.",
        options: ["wollen", "will", "wollt"],
        correct: 1,
        explanation: "Er/sie/es will — 3 особа однини дієслова wollen."
    },
    "modal-3": {
        id: "modal-3",
        type: "fill-blank",
        topic: "modalverben",
        question: "Wir ___ arbeiten. (müssen)",
        answer: "müssen",
        explanation: "Wir müssen — 1 особа множини дієслова müssen."
    },

    // === Trennbare Verben Exercises ===
    "trenn-1": {
        id: "trenn-1",
        type: "word-order",
        topic: "trennbare-verben",
        question: "Розташуй слова правильно: ich / um 7 Uhr / aufstehen",
        words: ["Ich", "stehe", "um 7 Uhr", "auf"],
        correct: ["Ich", "stehe", "um 7 Uhr", "auf"],
        explanation: "Для відокремлюваних дієслів: префікс йде в кінець речення."
    },
    "trenn-2": {
        id: "trenn-2",
        type: "fill-blank",
        topic: "trennbare-verben",
        question: "Er ___ im Supermarkt ___. (einkaufen)",
        answer: "kauft...ein",
        explanation: "Einkaufen → Er kauft ein. Префікс ein- йде в кінець."
    },

    // === sein & haben Exercises ===
    "sein-haben-1": {
        id: "sein-haben-1",
        type: "multiple-choice",
        topic: "sein-haben",
        question: "Ich ___ Student.",
        options: ["bin", "bist", "ist"],
        correct: 0,
        explanation: "Ich bin — 1 особа однини дієслова sein."
    },
    "sein-haben-2": {
        id: "sein-haben-2",
        type: "multiple-choice",
        topic: "sein-haben",
        question: "Er ___ einen Bruder.",
        options: ["habe", "hast", "hat"],
        correct: 2,
        explanation: "Er hat — 3 особа однини дієслова haben."
    },

    // === Personalpronomen Exercises ===
    "pronomen-1": {
        id: "pronomen-1",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "___ komme aus der Ukraine.",
        options: ["Ich", "Du", "Er"],
        correct: 0,
        explanation: "Ich відповідає закінченню -e в komme."
    },
    "pronomen-2": {
        id: "pronomen-2",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "Wie heißen ___? (ввічлива форма)",
        options: ["du", "Sie", "sie"],
        correct: 1,
        explanation: "Sie з великої літери — ввічлива форма 'Ви'."
    },

    // === Lesson 1 Exercises ===
    "ex-1-1": {
        id: "ex-1-1",
        type: "multiple-choice",
        lesson: 1,
        question: "Wie ___ Sie?",
        options: ["heißen", "heißt", "heiße"],
        correct: 0,
        explanation: "Sie heißen — ввічлива форма дієслова heißen."
    },
    "ex-1-2": {
        id: "ex-1-2",
        type: "fill-blank",
        lesson: 1,
        question: "Guten ___! (день)",
        answer: "Tag",
        explanation: "Guten Tag = Добрий день."
    },
    "ex-1-3": {
        id: "ex-1-3",
        type: "true-false",
        lesson: 1,
        question: "'Tschüss' означає 'Добрий день'.",
        correct: false,
        explanation: "Tschüss = Бувай / Па. Добрий день = Guten Tag."
    },

    // === Общие вправи ===
    "general-1": {
        id: "general-1",
        type: "match",
        topic: "greetings",
        question: "З'єднай привітання з перекладом",
        pairs: [
            { left: "Guten Morgen", right: "Доброго ранку" },
            { left: "Guten Tag", right: "Добрий день" },
            { left: "Guten Abend", right: "Добрий вечір" },
            { left: "Auf Wiedersehen", right: "До побачення" }
        ],
        explanation: "Ці привітання використовуються в різний час доби."
    }
};

export const exerciseTypes = {
    "multiple-choice": "Вибери правильний варіант",
    "fill-blank": "Заповни пропуск",
    "word-order": "Розташуй слова",
    "true-false": "Правда чи ні?",
    "match": "З'єднай пари"
};

export default exercises;
