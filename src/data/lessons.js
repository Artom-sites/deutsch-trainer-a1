/**
 * Schritte plus Neu A1 — Lessons Data
 * Структура 14 лекцій (Lektion 1-14)
 */

export const lessons = [
    {
        id: 1,
        number: "Lektion 1",
        title: "Guten Tag. Mein Name ist...",
        description: "Знайомство, привітання, представлення себе",
        level: "A1",
        topics: ["Begrüßung", "Vorstellung", "Alphabet"],
        grammar: ["Personalpronomen", "sein (Konjugation)", "W-Fragen"],
        vocabulary: ["greetings", "personal-info"],
        unlocked: true,
        progress: 0
    },
    {
        id: 2,
        number: "Lektion 2",
        title: "Familie und Freunde",
        description: "Сім'я, друзі, опис людей",
        level: "A1",
        topics: ["Familie", "Freunde", "Beschreibung"],
        grammar: ["Possessivartikel", "Negation (nicht/kein)"],
        vocabulary: ["family", "appearance"],
        unlocked: true,
        progress: 0
    },
    {
        id: 3,
        number: "Lektion 3",
        title: "Essen und Trinken",
        description: "Їжа, напої, покупки в супермаркеті",
        level: "A1",
        topics: ["Lebensmittel", "Supermarkt", "Mahlzeiten"],
        grammar: ["Artikel (der, die, das)", "Plural", "Akkusativ"],
        vocabulary: ["food", "drinks", "shopping"],
        unlocked: true,
        progress: 0
    },
    {
        id: 4,
        number: "Lektion 4",
        title: "Meine Wohnung",
        description: "Житло, кімнати, меблі",
        level: "A1",
        topics: ["Wohnung", "Möbel", "Zimmer"],
        grammar: ["Akkusativ (Wiederholung)", "es gibt"],
        vocabulary: ["housing", "furniture"],
        unlocked: true,
        progress: 0
    },
    {
        id: 5,
        number: "Lektion 5",
        title: "Mein Tag",
        description: "Розпорядок дня, час, повсякденні дії",
        level: "A1",
        topics: ["Tagesablauf", "Uhrzeit", "Alltag"],
        grammar: ["Trennbare Verben", "Zeitangaben (am, um, von...bis)"],
        vocabulary: ["daily-routine", "time"],
        unlocked: true,
        progress: 0
    },
    {
        id: 6,
        number: "Lektion 6",
        title: "Freizeit",
        description: "Хобі, вільний час, спорт",
        level: "A1",
        topics: ["Hobbys", "Sport", "Freizeit"],
        grammar: ["Modalverben (können, wollen)", "gern/lieber/am liebsten"],
        vocabulary: ["hobbies", "sports"],
        unlocked: true,
        progress: 0
    },
    {
        id: 7,
        number: "Lektion 7",
        title: "Kinder und Schule",
        description: "Діти, школа, освіта",
        level: "A1",
        topics: ["Schule", "Kinder", "Bildung"],
        grammar: ["Modalverben (müssen, dürfen)", "Imperativ"],
        vocabulary: ["school", "education"],
        unlocked: true,
        progress: 0
    },
    {
        id: 8,
        number: "Lektion 8",
        title: "Beruf und Arbeit",
        description: "Професії, робота, пошук роботи",
        level: "A1",
        topics: ["Berufe", "Arbeit", "Bewerbung"],
        grammar: ["Perfekt (regelmäßige Verben)"],
        vocabulary: ["professions", "work"],
        unlocked: true,
        progress: 0
    },
    {
        id: 9,
        number: "Lektion 9",
        title: "Ämter und Behörden",
        description: "Установи, документи, формуляри",
        level: "A1",
        topics: ["Behörde", "Formulare", "Dokumente"],
        grammar: ["Perfekt (unregelmäßige Verben)", "Ordnungszahlen"],
        vocabulary: ["offices", "documents"],
        unlocked: true,
        progress: 0
    },
    {
        id: 10,
        number: "Lektion 10",
        title: "Gesundheit und Krankheit",
        description: "Здоров'я, лікар, аптека",
        level: "A1",
        topics: ["Arzt", "Apotheke", "Körperteile"],
        grammar: ["Modalverb sollen", "Imperativ (Wiederholung)"],
        vocabulary: ["health", "body-parts"],
        unlocked: true,
        progress: 0
    },
    {
        id: 11,
        number: "Lektion 11",
        title: "In der Stadt",
        description: "Місто, орієнтування, транспорт",
        level: "A1",
        topics: ["Stadt", "Wegbeschreibung", "Verkehrsmittel"],
        grammar: ["Präpositionen mit Dativ (in, an, auf, bei, mit, nach, zu, von)"],
        vocabulary: ["city", "transport"],
        unlocked: true,
        progress: 0
    },
    {
        id: 12,
        number: "Lektion 12",
        title: "Kundenservice",
        description: "Обслуговування, скарги, замовлення",
        level: "A1",
        topics: ["Einkaufen", "Reklamation", "Service"],
        grammar: ["Personalpronomen im Dativ", "Konjunktion wenn"],
        vocabulary: ["customer-service", "shopping"],
        unlocked: true,
        progress: 0
    },
    {
        id: 13,
        number: "Lektion 13",
        title: "Neue Kleider",
        description: "Одяг, розміри, кольори",
        level: "A1",
        topics: ["Kleidung", "Farben", "Größen"],
        grammar: ["Adjektive (prädikativ)", "Demonstrativpronomen (dieser, diese, dieses)"],
        vocabulary: ["clothes", "colors"],
        unlocked: true,
        progress: 0
    },
    {
        id: 14,
        number: "Lektion 14",
        title: "Feste",
        description: "Свята, традиції, запрошення",
        level: "A1",
        topics: ["Feste", "Einladung", "Geschenke"],
        grammar: ["Dativ (Wiederholung)", "Konjunktion dass"],
        vocabulary: ["celebrations", "traditions"],
        unlocked: true,
        progress: 0
    }
];

export const lessonContent = {
    1: {
        sections: [
            {
                type: "intro",
                title: "Вітання та знайомство",
                content: "У цьому уроці ти навчишся вітатися та представлятися німецькою мовою."
            },
            {
                type: "vocabulary",
                title: "Слова для вивчення",
                words: ["hallo", "guten-tag", "guten-morgen", "auf-wiedersehen", "ich", "du", "name", "heißen"]
            },
            {
                type: "grammar",
                title: "Граматика",
                topics: ["sein-konjugation", "personalpronomen"]
            },
            {
                type: "dialogue",
                title: "Діалог",
                content: [
                    { speaker: "A", text: "Guten Tag! Wie heißen Sie?" },
                    { speaker: "B", text: "Ich heiße Anna. Und Sie?" },
                    { speaker: "A", text: "Ich bin Peter. Freut mich!" },
                    { speaker: "B", text: "Freut mich auch!" }
                ]
            },
            {
                type: "exercises",
                title: "Вправи",
                exercises: ["ex-1-1", "ex-1-2", "ex-1-3"]
            }
        ]
    }
    // More lesson content will be added dynamically
};

export default lessons;
