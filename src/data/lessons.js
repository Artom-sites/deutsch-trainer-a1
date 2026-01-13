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
        textbook: {
            goals: [
                "Kleidungsstücke benennen",
                "Sagen: Das gefällt mir (nicht)",
                "Über Vorlieben sprechen und etwas bewerten",
                "Gegenstände auswählen (Welcher Koffer...)",
                "Mich im Kaufhaus orientieren"
            ],
            grammar: [
                {
                    title: "Demonstrativpronomen",
                    content: "Nominativ: der/das/die\nAkkusativ: den/das/die"
                },
                {
                    title: "Frageartikel: welcher?",
                    content: "Welcher Mantel? (Nom) -> Den finde ich toll.\nWelchen Mantel? (Akk) -> Diesen."
                },
                {
                    title: "Personalpronomen im Dativ",
                    content: "ich -> mir\ndu -> dir\ner/es -> ihm\nsie -> ihr\nwir -> uns\nihr -> euch\nsie/Sie -> ihnen/Ihnen"
                },
                {
                    title: "Verben mit Dativ",
                    content: "gefallen, gehören, passen, stehen, schmecken\nBeispiel: Das Hemd steht dir."
                },
                {
                    title: "Komparation",
                    content: "gut -> besser -> am besten\ngern -> lieber -> am liebsten\nviel -> mehr -> am meisten"
                },
                {
                    title: "Verb: mögen",
                    content: "ich mag, du magst, er/es/sie mag\nwir mögen, ihr mögt, sie/Sie mögen"
                }
            ],
            communication: [
                {
                    title: "Etwas bewerten",
                    phrases: [
                        "Die Jacke ist (sehr) schön / super / toll.",
                        "Die Schuhe sind (total) hässlich / langweilig.",
                        "Der Pullover gefällt mir (nicht) gut."
                    ]
                },
                {
                    title: "Vorlieben",
                    phrases: [
                        "Mir gefällt das Hemd.",
                        "Ich finde den Rock gut / besser / am besten.",
                        "Ich mag / esse gern / lieber / am liebsten..."
                    ]
                },
                {
                    title: "Kleidung kaufen",
                    phrases: [
                        "Ist diese Hose nicht zu klein / zu lang?",
                        "Haben Sie den Pullover auch in Rot?",
                        "Was kostet denn das T-Shirt?",
                        "Wo ist denn die Kasse?"
                    ]
                }
            ]
        },
        unlocked: true,
        progress: 0
    },
    {
        id: 14,
        number: "Lektion 14",
        title: "Lieblingsfeste",
        description: "Свята, запрошення, привітання",
        level: "A1",
        topics: ["Feste", "Einladung", "Glückwünsche"],
        grammar: ["Ordinalzahlen", "Personalpronomen (Akkusativ)", "Konjunktion denn", "Verb werden"],
        vocabulary: ["festivals", "congratulations"],
        textbook: {
            goals: [
                "Das (Geburts-)Datum nennen: Ich habe am 4. Mai Geburtstag",
                "Über Personen und Dinge sprechen: Ich habe dich sehr lieb, Opa",
                "Um Hilfe bitten: Kannst Du ihn bitte reparieren?",
                "Eine Einladung zu- oder absagen und einen Grund nennen",
                "Einladungen lesen und schreiben (Mein Lieblingsfest)"
            ],
            grammar: [
                {
                    title: "1. Ordinalzahlen: Datum",
                    content: "1.-19. -> -te (der erste, der zweite)\nab 20. -> -ste (der zwanzigste)\nAm 13. März (am dreizehnten)"
                },
                {
                    title: "2. Personalpronomen im Akkusativ",
                    content: "Nominativ -> Akkusativ\nich -> mich\ndu -> dich\ner/es/sie -> ihn/es/sie\nwir -> uns\nihr -> euch\nsie/Sie -> sie/Sie"
                },
                {
                    title: "3. Konjunktion: denn",
                    content: "Hauptsatz 1, denn Hauptsatz 2.\nPosition 0!\nIch liebe Hunde, denn ich habe einen Hund."
                },
                {
                    title: "4. Verb: Konjugation 'werden'",
                    content: "ich werde\ndu wirst\ner/es/sie wird\nwir werden\nihr werdet\nsie/Sie werden"
                }
            ],
            communication: [
                {
                    title: "Über Jahrestage sprechen",
                    phrases: [
                        "Wann hast du Geburtstag?",
                        "Am 13. März. / Ich habe am 4. Januar Geburtstag.",
                        "Ich bin am 19. Januar geboren."
                    ]
                },
                {
                    title: "Glückwünsche",
                    phrases: [
                        "Alles Liebe/Gute (zum Geburtstag)!",
                        "Herzlichen Glückwunsch!",
                        "Ich wünsche dir viel Glück und Freude.",
                        "Frohe Ostern! / Frohe Weihnachten!",
                        "(Ein) Gutes neues Jahr!"
                    ]
                },
                {
                    title: "Einladen",
                    phrases: [
                        "Ich lade Dich/Sie ein.",
                        "Ich möchte meinen Geburtstag feiern.",
                        "Wir möchten gern zusammen mit Euch/Ihnen feiern.",
                        "Kommt Ihr? / Können Sie kommen?"
                    ]
                },
                {
                    title: "Zu- und Absagen",
                    phrases: [
                        "Vielen Dank für die Einladung.",
                        "Ich komme gern!",
                        "Leider kann ich nicht kommen.",
                        "Tut mir leid, aber ich habe keine Zeit."
                    ]
                }
            ]
        },
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
