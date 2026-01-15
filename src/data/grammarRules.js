// src/data/grammarRules.js
// Граматичні правила та таблиці для рівня A1

/**
 * GRAMATIK REGELN / ПРАВИЛА ГРАМАТИКИ
 * Структуровані правила з таблицями та прикладами
 */

// ==========================================
// PERSONALPRONOMEN / ОСОБОВІ ЗАЙМЕННИКИ
// ==========================================

export const personalPronouns = {
    id: "personalpronomen",
    title: "Personalpronomen",
    titleUa: "Особові займенники",
    description: "Особові займенники у всіх відмінках",

    // Питання до відмінків
    questions: {
        nominativ: { de: "Wer?", ua: "Хто?" },
        akkusativ: { de: "Wen?", ua: "Кого?" },
        dativ: { de: "Wem?", ua: "Кому?" }
    },

    table: [
        { nominativ: "ich", akkusativ: "mich", dativ: "mir", ua: "я / мене / мені" },
        { nominativ: "du", akkusativ: "dich", dativ: "dir", ua: "ти / тебе / тобі" },
        { nominativ: "er", akkusativ: "ihn", dativ: "ihm", ua: "він / його / йому" },
        { nominativ: "sie", akkusativ: "sie", dativ: "ihr", ua: "вона / її / їй" },
        { nominativ: "es", akkusativ: "es", dativ: "ihm", ua: "воно / його / йому" },
        { nominativ: "wir", akkusativ: "uns", dativ: "uns", ua: "ми / нас / нам" },
        { nominativ: "ihr", akkusativ: "euch", dativ: "euch", ua: "ви / вас / вам" },
        { nominativ: "sie/Sie", akkusativ: "sie/Sie", dativ: "ihnen/Ihnen", ua: "вони,Ви / їх,Вас / їм,Вам" }
    ],

    examples: {
        akkusativ: [
            { de: "Er liebt mich.", ua: "Він любить мене." },
            { de: "Ich sehe dich.", ua: "Я бачу тебе." },
            { de: "Sie besucht ihn.", ua: "Вона відвідує його." },
            { de: "Wir kennen sie.", ua: "Ми знаємо її." }
        ],
        dativ: [
            { de: "Gib mir das Buch!", ua: "Дай мені книгу!" },
            { de: "Ich helfe dir.", ua: "Я допомагаю тобі." },
            { de: "Sie schreibt ihm.", ua: "Вона пише йому." },
            { de: "Das gefällt uns.", ua: "Це нам подобається." }
        ]
    }
};

// ==========================================
// ARTIKEL / АРТИКЛІ
// ==========================================

export const articles = {
    id: "artikel",
    title: "Artikel",
    titleUa: "Артиклі",
    description: "Означені та неозначені артиклі у всіх відмінках",

    questions: {
        nominativ: { de: "Wer? Was?", ua: "Хто? Що?" },
        akkusativ: { de: "Wen? Was?", ua: "Кого? Що?" },
        dativ: { de: "Wem?", ua: "Кому? Чому?" }
    },

    // Означені артиклі
    definite: {
        title: "Bestimmter Artikel",
        titleUa: "Означений артикль",
        table: [
            { case: "Nominativ", maskulin: "der", feminin: "die", neutrum: "das", plural: "die" },
            { case: "Akkusativ", maskulin: "den", feminin: "die", neutrum: "das", plural: "die" },
            { case: "Dativ", maskulin: "dem", feminin: "der", neutrum: "dem", plural: "den" }
        ]
    },

    // Неозначені артиклі
    indefinite: {
        title: "Unbestimmter Artikel",
        titleUa: "Неозначений артикль",
        table: [
            { case: "Nominativ", maskulin: "ein", feminin: "eine", neutrum: "ein", plural: "—" },
            { case: "Akkusativ", maskulin: "einen", feminin: "eine", neutrum: "ein", plural: "—" },
            { case: "Dativ", maskulin: "einem", feminin: "einer", neutrum: "einem", plural: "—" }
        ]
    },

    // Заперечний артикль
    negative: {
        title: "Negativartikel",
        titleUa: "Заперечний артикль",
        table: [
            { case: "Nominativ", maskulin: "kein", feminin: "keine", neutrum: "kein", plural: "keine" },
            { case: "Akkusativ", maskulin: "keinen", feminin: "keine", neutrum: "kein", plural: "keine" },
            { case: "Dativ", maskulin: "keinem", feminin: "keiner", neutrum: "keinem", plural: "keinen" }
        ]
    },

    examples: [
        { de: "Der Mann liest.", ua: "Чоловік читає." },
        { de: "Ich sehe den Mann.", ua: "Я бачу чоловіка." },
        { de: "Ich helfe dem Mann.", ua: "Я допомагаю чоловікові." }
    ]
};

// ==========================================
// POSSESSIVPRONOMEN / ПРИСВІЙНІ ЗАЙМЕННИКИ
// ==========================================

export const possessivePronouns = {
    id: "possessivpronomen",
    title: "Possessivpronomen",
    titleUa: "Присвійні займенники",
    description: "Присвійні займенники для кожної особи",

    questions: {
        general: { de: "Wessen?", ua: "Чий? Чия? Чиє?" }
    },

    table: [
        { person: "ich", maskulin: "mein", feminin: "meine", neutrum: "mein", plural: "meine", ua: "мій/моя/моє/мої" },
        { person: "du", maskulin: "dein", feminin: "deine", neutrum: "dein", plural: "deine", ua: "твій/твоя/твоє/твої" },
        { person: "er", maskulin: "sein", feminin: "seine", neutrum: "sein", plural: "seine", ua: "його" },
        { person: "sie", maskulin: "ihr", feminin: "ihre", neutrum: "ihr", plural: "ihre", ua: "її" },
        { person: "es", maskulin: "sein", feminin: "seine", neutrum: "sein", plural: "seine", ua: "його" },
        { person: "wir", maskulin: "unser", feminin: "unsere", neutrum: "unser", plural: "unsere", ua: "наш/наша/наше/наші" },
        { person: "ihr", maskulin: "euer", feminin: "eure", neutrum: "euer", plural: "eure", ua: "ваш/ваша/ваше/ваші" },
        { person: "sie/Sie", maskulin: "ihr/Ihr", feminin: "ihre/Ihre", neutrum: "ihr/Ihr", plural: "ihre/Ihre", ua: "їхній/Ваш" }
    ],

    examples: [
        { de: "Das ist mein Buch.", ua: "Це моя книга." },
        { de: "Wo ist deine Tasche?", ua: "Де твоя сумка?" },
        { de: "Er sucht seinen Schlüssel.", ua: "Він шукає свій ключ." }
    ]
};

// ==========================================
// PRÄPOSITIONEN / ПРИЙМЕННИКИ
// ==========================================

export const prepositions = {
    id: "praepositionen",
    title: "Präpositionen",
    titleUa: "Прийменники",
    description: "Прийменники з Akkusativ, Dativ та Wechselpräpositionen",

    // Прийменники з Akkusativ
    akkusativ: {
        title: "Präpositionen mit Akkusativ",
        titleUa: "Прийменники з Akkusativ",
        question: { de: "Wohin?", ua: "Куди?" },
        list: [
            { prep: "durch", ua: "через, крізь", example: "Ich gehe durch den Park." },
            { prep: "für", ua: "для, за", example: "Das ist für dich." },
            { prep: "gegen", ua: "проти", example: "Er ist gegen die Idee." },
            { prep: "ohne", ua: "без", example: "Kaffee ohne Zucker." },
            { prep: "um", ua: "навколо, о (час)", example: "Wir treffen uns um 8 Uhr." },
            { prep: "bis", ua: "до", example: "Bis morgen!" },
            { prep: "entlang", ua: "вздовж", example: "Geh die Straße entlang!" }
        ],
        mnemonic: "FUDGE BuO: Für, Um, Durch, Gegen, Entlang, Bis, Ohne"
    },

    // Прийменники з Dativ
    dativ: {
        title: "Präpositionen mit Dativ",
        titleUa: "Прийменники з Dativ",
        question: { de: "Wo? Wann?", ua: "Де? Коли?" },
        list: [
            { prep: "aus", ua: "з (звідки)", example: "Ich komme aus der Ukraine." },
            { prep: "bei", ua: "у, при, біля", example: "Ich wohne bei meinen Eltern." },
            { prep: "mit", ua: "з (разом)", example: "Ich fahre mit dem Bus." },
            { prep: "nach", ua: "після, до (країни/місто)", example: "Ich fahre nach Berlin." },
            { prep: "seit", ua: "з (часу), протягом", example: "Seit einem Jahr lerne ich Deutsch." },
            { prep: "von", ua: "від, з", example: "Das Geschenk ist von meiner Oma." },
            { prep: "zu", ua: "до (людини/місця)", example: "Ich gehe zu meinem Freund." },
            { prep: "gegenüber", ua: "напроти", example: "Die Bank ist gegenüber dem Hotel." }
        ],
        mnemonic: "BAMSVONZU: Bei, Aus, Mit, Seit, Von, Nach, Zu, Gegenüber"
    },

    // Wechselpräpositionen (змінні прийменники)
    wechsel: {
        title: "Wechselpräpositionen",
        titleUa: "Змінні прийменники (Akkusativ або Dativ)",
        description: "Wohin? → Akkusativ (рух) | Wo? → Dativ (місце)",
        list: [
            { prep: "an", ua: "на, біля (вертикальна поверхня)" },
            { prep: "auf", ua: "на (горизонтальна поверхня)" },
            { prep: "hinter", ua: "за, позаду" },
            { prep: "in", ua: "в, у" },
            { prep: "neben", ua: "поряд, біля" },
            { prep: "über", ua: "над, через" },
            { prep: "unter", ua: "під" },
            { prep: "vor", ua: "перед" },
            { prep: "zwischen", ua: "між" }
        ],
        examples: [
            { akkusativ: "Ich lege das Buch auf den Tisch.", dativ: "Das Buch liegt auf dem Tisch.", ua: "Кладу книгу на стіл / Книга лежить на столі" },
            { akkusativ: "Er geht in die Schule.", dativ: "Er ist in der Schule.", ua: "Він іде в школу / Він у школі" }
        ]
    }
};

// ==========================================
// VERBKONJUGATION / ВІДМІНЮВАННЯ ДІЄСЛІВ
// ==========================================

export const verbConjugation = {
    id: "verbkonjugation",
    title: "Verbkonjugation",
    titleUa: "Відмінювання дієслів",
    description: "Правила відмінювання дієслів у Präsens",

    // Регулярні закінчення
    regularEndings: {
        title: "Regelmäßige Verben",
        titleUa: "Регулярні дієслова",
        description: "Закінчення для регулярних дієслів",
        table: [
            { person: "ich", ending: "-e", example: "mache" },
            { person: "du", ending: "-st", example: "machst" },
            { person: "er/sie/es", ending: "-t", example: "macht" },
            { person: "wir", ending: "-en", example: "machen" },
            { person: "ihr", ending: "-t", example: "macht" },
            { person: "sie/Sie", ending: "-en", example: "machen" }
        ]
    },

    // Дієслова зі зміною голосної
    stemChange: {
        title: "Verben mit Vokalwechsel",
        titleUa: "Дієслова зі зміною голосної",
        types: [
            {
                change: "e → i",
                verbs: ["sprechen → spricht", "helfen → hilft", "nehmen → nimmt", "geben → gibt", "essen → isst"],
                note: "Зміна відбувається у du та er/sie/es"
            },
            {
                change: "e → ie",
                verbs: ["sehen → sieht", "lesen → liest", "empfehlen → empfiehlt"],
                note: "Зміна відбувається у du та er/sie/es"
            },
            {
                change: "a → ä",
                verbs: ["fahren → fährt", "schlafen → schläft", "tragen → trägt", "fallen → fällt"],
                note: "Зміна відбувається у du та er/sie/es"
            },
            {
                change: "au → äu",
                verbs: ["laufen → läuft"],
                note: "Зміна відбувається у du та er/sie/es"
            }
        ]
    },

    // Модальні дієслова
    modalVerbs: {
        title: "Modalverben",
        titleUa: "Модальні дієслова",
        description: "Особливості відмінювання модальних дієслів",
        table: [
            { verb: "können", ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können", ua: "могти" },
            { verb: "müssen", ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen", ua: "мусити" },
            { verb: "wollen", ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen", ua: "хотіти" },
            { verb: "sollen", ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen", ua: "повинен" },
            { verb: "dürfen", ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen", ua: "мати дозвіл" },
            { verb: "mögen", ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen", ua: "любити" }
        ],
        rule: "Модальне дієслово на 2-му місці, основне дієслово в інфінітиві в кінці речення.",
        examples: [
            { de: "Ich kann Deutsch sprechen.", ua: "Я можу говорити німецькою." },
            { de: "Du musst mehr lernen.", ua: "Ти мусиш більше вчитися." }
        ]
    },

    // Відокремлювані дієслова
    trennbar: {
        title: "Trennbare Verben",
        titleUa: "Відокремлювані дієслова",
        description: "Префікс відокремлюється і йде в кінець речення",
        prefixes: ["ab-", "an-", "auf-", "aus-", "bei-", "ein-", "mit-", "vor-", "zu-", "zurück-"],
        examples: [
            { infinitiv: "aufstehen", conjugated: "Ich stehe um 7 Uhr auf.", ua: "Я встаю о 7 годині." },
            { infinitiv: "anrufen", conjugated: "Er ruft mich an.", ua: "Він мені дзвонить." },
            { infinitiv: "einkaufen", conjugated: "Wir kaufen im Supermarkt ein.", ua: "Ми робимо покупки в супермаркеті." }
        ]
    }
};

// ==========================================
// SATZBAU / БУДОВА РЕЧЕННЯ
// ==========================================

export const sentenceStructure = {
    id: "satzbau",
    title: "Satzbau",
    titleUa: "Будова речення",
    description: "Порядок слів у німецькому реченні",

    rules: [
        {
            title: "Aussagesatz",
            titleUa: "Розповідне речення",
            rule: "Дієслово завжди на 2-му місці",
            examples: [
                { de: "Ich lerne Deutsch.", structure: "Subjekt + Verb + Objekt" },
                { de: "Heute lerne ich Deutsch.", structure: "Adverb + Verb + Subjekt + Objekt" }
            ]
        },
        {
            title: "Fragesatz mit Fragewort",
            titleUa: "Питання з питальним словом",
            rule: "Питальне слово на 1-му місці, дієслово на 2-му",
            examples: [
                { de: "Woher kommst du?", structure: "Fragewort + Verb + Subjekt" },
                { de: "Was machst du?", structure: "Fragewort + Verb + Subjekt" }
            ]
        },
        {
            title: "Ja/Nein-Frage",
            titleUa: "Так/Ні питання",
            rule: "Дієслово на 1-му місці",
            examples: [
                { de: "Kommst du aus der Ukraine?", structure: "Verb + Subjekt + ..." },
                { de: "Sprichst du Deutsch?", structure: "Verb + Subjekt + Objekt" }
            ]
        }
    ],

    fragewörter: [
        { word: "Wer?", ua: "Хто?" },
        { word: "Was?", ua: "Що?" },
        { word: "Wo?", ua: "Де?" },
        { word: "Woher?", ua: "Звідки?" },
        { word: "Wohin?", ua: "Куди?" },
        { word: "Wann?", ua: "Коли?" },
        { word: "Wie?", ua: "Як?" },
        { word: "Warum?", ua: "Чому?" },
        { word: "Wie viel?", ua: "Скільки?" },
        { word: "Welche/r/s?", ua: "Який/яка/яке?" }
    ]
};

// ==========================================
// ZAHLEN / ЧИСЛА
// ==========================================

export const numbers = {
    id: "zahlen",
    title: "Zahlen",
    titleUa: "Числа",
    description: "Числівники від 0 до 1000+",

    basic: [
        { num: 0, de: "null" }, { num: 1, de: "eins" }, { num: 2, de: "zwei" }, { num: 3, de: "drei" },
        { num: 4, de: "vier" }, { num: 5, de: "fünf" }, { num: 6, de: "sechs" }, { num: 7, de: "sieben" },
        { num: 8, de: "acht" }, { num: 9, de: "neun" }, { num: 10, de: "zehn" }, { num: 11, de: "elf" },
        { num: 12, de: "zwölf" }, { num: 13, de: "dreizehn" }, { num: 14, de: "vierzehn" },
        { num: 15, de: "fünfzehn" }, { num: 16, de: "sechzehn" }, { num: 17, de: "siebzehn" },
        { num: 18, de: "achtzehn" }, { num: 19, de: "neunzehn" }, { num: 20, de: "zwanzig" }
    ],

    tens: [
        { num: 10, de: "zehn" }, { num: 20, de: "zwanzig" }, { num: 30, de: "dreißig" },
        { num: 40, de: "vierzig" }, { num: 50, de: "fünfzig" }, { num: 60, de: "sechzig" },
        { num: 70, de: "siebzig" }, { num: 80, de: "achtzig" }, { num: 90, de: "neunzig" },
        { num: 100, de: "(ein)hundert" }, { num: 1000, de: "(ein)tausend" }
    ],

    rule: "21-99: одиниці + und + десятки. Приклад: 25 = fünfundzwanzig (п'ять і двадцять)",

    examples: [
        { num: 21, de: "einundzwanzig" },
        { num: 34, de: "vierunddreißig" },
        { num: 57, de: "siebenundfünfzig" },
        { num: 99, de: "neunundneunzig" },
        { num: 123, de: "einhundertdreiundzwanzig" }
    ]
};

// ==========================================
// UHRZEIT / ЧАС
// ==========================================

export const time = {
    id: "uhrzeit",
    title: "Uhrzeit",
    titleUa: "Час",
    description: "Як називати час німецькою",

    official: {
        title: "Offizielle Uhrzeit",
        titleUa: "Офіційний час",
        examples: [
            { time: "8:00", de: "acht Uhr" },
            { time: "8:15", de: "acht Uhr fünfzehn" },
            { time: "8:30", de: "acht Uhr dreißig" },
            { time: "8:45", de: "acht Uhr fünfundvierzig" },
            { time: "14:30", de: "vierzehn Uhr dreißig" }
        ]
    },

    informal: {
        title: "Umgangssprachlich",
        titleUa: "Розмовний час",
        examples: [
            { time: "8:00", de: "acht Uhr", ua: "восьма година" },
            { time: "8:15", de: "Viertel nach acht", ua: "чверть на дев'яту" },
            { time: "8:30", de: "halb neun", ua: "пів на дев'яту" },
            { time: "8:45", de: "Viertel vor neun", ua: "за чверть дев'ята" }
        ],
        note: "halb + наступна година! halb neun = 8:30 (НЕ 9:30)"
    },

    questions: [
        { de: "Wie spät ist es?", ua: "Котра година?" },
        { de: "Wie viel Uhr ist es?", ua: "Котра година?" },
        { de: "Um wie viel Uhr...?", ua: "О котрій годині...?" }
    ]
};

// ==========================================
// EXPORT ALL RULES
// ==========================================

export const allRules = [
    personalPronouns,
    articles,
    possessivePronouns,
    prepositions,
    verbConjugation,
    sentenceStructure,
    numbers,
    time
];

export function getRuleById(id) {
    return allRules.find(rule => rule.id === id);
}

export function getAllRules() {
    return allRules;
}

export default allRules;
