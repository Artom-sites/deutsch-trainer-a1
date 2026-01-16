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
    description: "Означені та неозначені артиклі, рід іменників",

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

    // =====================
    // GENUS-TIPPS (підказки щодо роду)
    // =====================
    genusTipps: {
        title: "Genus-Tipps",
        titleUa: "Як визначити рід",
        maskulin: {
            title: "Maskulin (der)",
            endings: ["-er", "-ling", "-ismus", "-or", "-ant", "-ent"],
            categories: ["Дні тижня (der Montag)", "Місяці (der Januar)", "Пори року (der Sommer)", "Погода (der Regen)", "Чоловічі професії (der Lehrer)"],
            examples: ["der Computer", "der Frühling", "der Tourismus", "der Student"]
        },
        feminin: {
            title: "Feminin (die)",
            endings: ["-e", "-ung", "-heit", "-keit", "-schaft", "-ion", "-ik", "-tät", "-ie"],
            categories: ["Числа як іменники (die Eins)", "Більшість квітів (die Rose)", "Жіночі професії (die Lehrerin)"],
            examples: ["die Lampe", "die Wohnung", "die Freiheit", "die Nation", "die Universität"]
        },
        neutrum: {
            title: "Neutrum (das)",
            endings: ["-chen", "-lein", "-ment", "-um", "-tum"],
            categories: ["Інфінітиви як іменники (das Essen)", "Зменшувальні (das Mädchen)", "Кольори (das Blau)", "Метали (das Gold)"],
            examples: ["das Brötchen", "das Dokument", "das Studium", "das Mädchen"]
        }
    },

    examples: [
        { de: "Der Mann liest.", ua: "Чоловік читає." },
        { de: "Ich sehe den Mann.", ua: "Я бачу чоловіка." },
        { de: "Ich helfe dem Mann.", ua: "Я допомагаю чоловікові." },
        { de: "Das ist ein Buch.", ua: "Це книга." },
        { de: "Ich habe keine Zeit.", ua: "У мене немає часу." }
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
    description: "Числівники, дати, роки, порядкові числівники",

    // Кардинальні числа 0-20
    basic: [
        { num: 0, de: "null" }, { num: 1, de: "eins" }, { num: 2, de: "zwei" }, { num: 3, de: "drei" },
        { num: 4, de: "vier" }, { num: 5, de: "fünf" }, { num: 6, de: "sechs" }, { num: 7, de: "sieben" },
        { num: 8, de: "acht" }, { num: 9, de: "neun" }, { num: 10, de: "zehn" }, { num: 11, de: "elf" },
        { num: 12, de: "zwölf" }, { num: 13, de: "dreizehn" }, { num: 14, de: "vierzehn" },
        { num: 15, de: "fünfzehn" }, { num: 16, de: "sechzehn" }, { num: 17, de: "siebzehn" },
        { num: 18, de: "achtzehn" }, { num: 19, de: "neunzehn" }, { num: 20, de: "zwanzig" }
    ],

    // Десятки та великі числа
    tens: [
        { num: 10, de: "zehn" }, { num: 20, de: "zwanzig" }, { num: 30, de: "dreißig" },
        { num: 40, de: "vierzig" }, { num: 50, de: "fünfzig" }, { num: 60, de: "sechzig" },
        { num: 70, de: "siebzig" }, { num: 80, de: "achtzig" }, { num: 90, de: "neunzig" },
        { num: 100, de: "(ein)hundert" }, { num: 1000, de: "(ein)tausend" },
        { num: 1000000, de: "eine Million" }, { num: 1000000000, de: "eine Milliarde" }
    ],

    rule: "21-99: одиниці + und + десятки. Приклад: 25 = fünfundzwanzig (п'ять і двадцять)",

    examples: [
        { num: 21, de: "einundzwanzig" },
        { num: 34, de: "vierunddreißig" },
        { num: 57, de: "siebenundfünfzig" },
        { num: 99, de: "neunundneunzig" },
        { num: 123, de: "einhundertdreiundzwanzig" },
        { num: 2024, de: "zweitausentvierundzwanzig" }
    ],

    // =====================
    // ORDINALZAHLEN (порядкові)
    // =====================
    ordinal: {
        title: "Ordinalzahlen",
        titleUa: "Порядкові числівники",
        description: "1-19: + te, від 20: + ste. Виключення: erste, dritte, siebte, achte",
        table: [
            { num: 1, de: "erste", ua: "перший" },
            { num: 2, de: "zweite", ua: "другий" },
            { num: 3, de: "dritte", ua: "третій" },
            { num: 4, de: "vierte", ua: "четвертий" },
            { num: 5, de: "fünfte", ua: "п'ятий" },
            { num: 6, de: "sechste", ua: "шостий" },
            { num: 7, de: "siebte", ua: "сьомий" },
            { num: 8, de: "achte", ua: "восьмий" },
            { num: 9, de: "neunte", ua: "дев'ятий" },
            { num: 10, de: "zehnte", ua: "десятий" },
            { num: 20, de: "zwanzigste", ua: "двадцятий" },
            { num: 21, de: "einundzwanzigste", ua: "двадцять перший" },
            { num: 100, de: "hundertste", ua: "сотий" }
        ],
        rule: "Порядкові відмінюються як прикметники: der erste Tag, am ersten Tag"
    },

    // =====================
    // DATUM (дати)
    // =====================
    datum: {
        title: "Datum",
        titleUa: "Дати",
        description: "Як називати дату німецькою",
        questions: [
            { de: "Welcher Tag ist heute?", ua: "Який сьогодні день?" },
            { de: "Der Wievielte ist heute?", ua: "Котре сьогодні число?" },
            { de: "Wann hast du Geburtstag?", ua: "Коли у тебе день народження?" }
        ],
        answers: [
            { de: "Heute ist der 15. Januar.", ua: "Сьогодні 15 січня." },
            { de: "Heute ist Mittwoch, der 15. Januar 2025.", ua: "Сьогодні середа, 15 січня 2025." }
        ],
        format: {
            written: "15. Januar 2025 (der fünfzehnte Januar)",
            spoken: "der fünfzehnte Januar zweitausendfünfundzwanzig",
            note: "Дата = порядковий числівник + місяць. Крапка після числа позначає порядковість!"
        },
        prepositions: [
            { de: "am 15. Januar", ua: "15 січня (конкретна дата)", note: "am = an dem (Dativ)" },
            { de: "im Januar", ua: "у січні (місяць)", note: "im = in dem (Dativ)" },
            { de: "2025 / im Jahr 2025", ua: "у 2025 році", note: "без прийменника або 'im Jahr'" }
        ],
        months: [
            { de: "Januar", ua: "січень" }, { de: "Februar", ua: "лютий" },
            { de: "März", ua: "березень" }, { de: "April", ua: "квітень" },
            { de: "Mai", ua: "травень" }, { de: "Juni", ua: "червень" },
            { de: "Juli", ua: "липень" }, { de: "August", ua: "серпень" },
            { de: "September", ua: "вересень" }, { de: "Oktober", ua: "жовтень" },
            { de: "November", ua: "листопад" }, { de: "Dezember", ua: "грудень" }
        ]
    },

    // =====================
    // JAHRE (роки)
    // =====================
    years: {
        title: "Jahreszahlen",
        titleUa: "Роки",
        description: "Як називати роки німецькою",
        examples: [
            { year: 1990, de: "neunzehnhundertneunzig", note: "19-сто-90" },
            { year: 2000, de: "zweitausend", note: "дві тисячі" },
            { year: 2024, de: "zweitausendvierundzwanzig", note: "2000 + 24" },
            { year: 1945, de: "neunzehnhundertfünfundvierzig", note: "19-сто-45" }
        ],
        rule: "До 1999: 19+hundert+XX. Від 2000: zweitausend+XX",
        phrases: [
            { de: "Ich bin 1990 geboren.", ua: "Я народився у 1990." },
            { de: "Er ist im Jahr 2000 geboren.", ua: "Він народився у 2000 році." }
        ]
    },

    // =====================
    // GEBURTSTAG (день народження)
    // =====================
    geburtstag: {
        title: "Geburtstag",
        titleUa: "День народження",
        phrases: [
            { de: "Wann hast du Geburtstag?", ua: "Коли у тебе день народження?" },
            { de: "Ich habe am 15. März Geburtstag.", ua: "У мене день народження 15 березня." },
            { de: "Mein Geburtstag ist am 5. Mai.", ua: "Мій день народження 5 травня." },
            { de: "Wann bist du geboren?", ua: "Коли ти народився?" },
            { de: "Ich bin am 20. Juli 1995 geboren.", ua: "Я народився 20 липня 1995 року." },
            { de: "Alles Gute zum Geburtstag!", ua: "З днем народження!" },
            { de: "Herzlichen Glückwunsch!", ua: "Щиро вітаю!" }
        ]
    },

    // =====================
    // ALTER (вік)
    // =====================
    alter: {
        title: "Alter",
        titleUa: "Вік",
        phrases: [
            { de: "Wie alt bist du?", ua: "Скільки тобі років?" },
            { de: "Ich bin 25 Jahre alt.", ua: "Мені 25 років." },
            { de: "Ich bin 25.", ua: "Мені 25. (коротко)" },
            { de: "Er ist 30 Jahre alt.", ua: "Йому 30 років." },
            { de: "Sie wird nächstes Jahr 40.", ua: "Їй виповниться 40 наступного року." }
        ]
    }
};

// ==========================================
// UHRZEIT / ЧАС
// ==========================================

export const time = {
    id: "uhrzeit",
    title: "Uhrzeit",
    titleUa: "Час",
    description: "Як називати час, частини дня та розклад",

    official: {
        title: "Offizielle Uhrzeit",
        titleUa: "Офіційний час",
        examples: [
            { time: "8:00", de: "acht Uhr" },
            { time: "8:15", de: "acht Uhr fünfzehn" },
            { time: "8:30", de: "acht Uhr dreißig" },
            { time: "8:45", de: "acht Uhr fünfundvierzig" },
            { time: "14:30", de: "vierzehn Uhr dreißig" },
            { time: "20:00", de: "zwanzig Uhr" }
        ]
    },

    informal: {
        title: "Umgangssprachlich",
        titleUa: "Розмовний час",
        examples: [
            { time: "8:00", de: "acht Uhr", ua: "восьма година" },
            { time: "8:15", de: "Viertel nach acht", ua: "чверть на дев'яту" },
            { time: "8:30", de: "halb neun", ua: "пів на дев'яту" },
            { time: "8:45", de: "Viertel vor neun", ua: "за чверть дев'ята" },
            { time: "8:05", de: "fünf nach acht", ua: "п'ять хвилин по восьмій" },
            { time: "8:55", de: "fünf vor neun", ua: "за п'ять дев'ята" }
        ],
        note: "halb + наступна година! halb neun = 8:30 (НЕ 9:30)"
    },

    questions: [
        { de: "Wie spät ist es?", ua: "Котра година?" },
        { de: "Wie viel Uhr ist es?", ua: "Котра година?" },
        { de: "Um wie viel Uhr...?", ua: "О котрій годині...?" },
        { de: "Wann beginnt der Film?", ua: "Коли починається фільм?" },
        { de: "Bis wann hast du Zeit?", ua: "До котрої у тебе є час?" }
    ],

    // =====================
    // TAGESZEITEN (частини дня)
    // =====================
    tageszeiten: {
        title: "Tageszeiten",
        titleUa: "Частини дня",
        parts: [
            { de: "der Morgen", time: "6-10", ua: "ранок", prep: "am Morgen / morgens" },
            { de: "der Vormittag", time: "10-12", ua: "перша половина дня", prep: "am Vormittag / vormittags" },
            { de: "der Mittag", time: "12-14", ua: "полудень", prep: "am Mittag / mittags" },
            { de: "der Nachmittag", time: "14-18", ua: "друга половина дня", prep: "am Nachmittag / nachmittags" },
            { de: "der Abend", time: "18-22", ua: "вечір", prep: "am Abend / abends" },
            { de: "die Nacht", time: "22-6", ua: "ніч", prep: "in der Nacht / nachts" }
        ],
        examples: [
            { de: "Am Morgen trinke ich Kaffee.", ua: "Вранці я п'ю каву." },
            { de: "Abends sehe ich fern.", ua: "Увечері я дивлюся телевізор." },
            { de: "Morgen Abend bin ich frei.", ua: "Завтра ввечері я вільний." }
        ]
    },

    // =====================
    // WOCHENTAGE (дні тижня)
    // =====================
    wochentage: {
        title: "Wochentage",
        titleUa: "Дні тижня",
        days: [
            { de: "Montag", ua: "понеділок", short: "Mo" },
            { de: "Dienstag", ua: "вівторок", short: "Di" },
            { de: "Mittwoch", ua: "середа", short: "Mi" },
            { de: "Donnerstag", ua: "четвер", short: "Do" },
            { de: "Freitag", ua: "п'ятниця", short: "Fr" },
            { de: "Samstag", ua: "субота", short: "Sa" },
            { de: "Sonntag", ua: "неділя", short: "So" }
        ],
        prepositions: [
            { de: "am Montag", ua: "у понеділок" },
            { de: "am Wochenende", ua: "на вихідних" },
            { de: "jeden Montag", ua: "щопонеділка" },
            { de: "montags", ua: "по понеділках" }
        ]
    },

    // =====================
    // ZEITAUSDRÜCKE (вирази часу)
    // =====================
    expressions: {
        title: "Zeitausdrücke",
        titleUa: "Вирази часу",
        phrases: [
            { de: "heute", ua: "сьогодні" },
            { de: "morgen", ua: "завтра" },
            { de: "übermorgen", ua: "післязавтра" },
            { de: "gestern", ua: "вчора" },
            { de: "vorgestern", ua: "позавчора" },
            { de: "jetzt", ua: "зараз" },
            { de: "später", ua: "пізніше" },
            { de: "früher", ua: "раніше" },
            { de: "bald", ua: "скоро" },
            { de: "gleich", ua: "зараз, відразу" },
            { de: "sofort", ua: "негайно" },
            { de: "immer", ua: "завжди" },
            { de: "nie / niemals", ua: "ніколи" },
            { de: "manchmal", ua: "іноді" },
            { de: "oft", ua: "часто" },
            { de: "selten", ua: "рідко" }
        ]
    }
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
