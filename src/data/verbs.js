/**
 * German Verbs Database - A1 (130+ Most Important Verbs)
 * Дієслова A1 з відмінюванням: Präsens, Perfekt, Präteritum
 * Розширена база даних для вивчення німецької мови
 */

export const verbs = [
    // ==========================================
    // ОСНОВНІ ДІЄСЛОВА
    // ==========================================
    {
        id: "sein",
        infinitiv: "sein",
        translation: "бути",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "bin",
            du: "bist",
            "er/sie/es": "ist",
            wir: "sind",
            ihr: "seid",
            "sie/Sie": "sind"
        },
        perfekt: "ist gewesen",
        praeteritum: {
            ich: "war",
            du: "warst",
            "er/sie/es": "war",
            wir: "waren",
            ihr: "wart",
            "sie/Sie": "waren"
        },
        example: "Ich bin Student.",
        lesson: null
    },
    {
        id: "haben",
        infinitiv: "haben",
        translation: "мати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "habe",
            du: "hast",
            "er/sie/es": "hat",
            wir: "haben",
            ihr: "habt",
            "sie/Sie": "haben"
        },
        perfekt: "hat gehabt",
        praeteritum: {
            ich: "hatte",
            du: "hattest",
            "er/sie/es": "hatte",
            wir: "hatten",
            ihr: "hattet",
            "sie/Sie": "hatten"
        },
        example: "Ich habe einen Bruder.",
        lesson: null
    },
    {
        id: "werden",
        infinitiv: "werden",
        translation: "ставати",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "werde",
            du: "wirst",
            "er/sie/es": "wird",
            wir: "werden",
            ihr: "werdet",
            "sie/Sie": "werden"
        },
        perfekt: "ist geworden",
        praeteritum: {
            ich: "wurde",
            du: "wurdest",
            "er/sie/es": "wurde",
            wir: "wurden",
            ihr: "wurdet",
            "sie/Sie": "wurden"
        },
        example: "Er wird Arzt.",
        lesson: null
    },

    // ==========================================
    // МОДАЛЬНІ ДІЄСЛОВА
    // ==========================================
    {
        id: "koennen",
        infinitiv: "können",
        translation: "могти",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "kann",
            du: "kannst",
            "er/sie/es": "kann",
            wir: "können",
            ihr: "könnt",
            "sie/Sie": "können"
        },
        perfekt: "hat gekonnt",
        praeteritum: {
            ich: "konnte",
            du: "konntest",
            "er/sie/es": "konnte",
            wir: "konnten",
            ihr: "konntet",
            "sie/Sie": "konnten"
        },
        example: "Ich kann Deutsch sprechen.",
        lesson: null
    },
    {
        id: "muessen",
        infinitiv: "müssen",
        translation: "мусити",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "muss",
            du: "musst",
            "er/sie/es": "muss",
            wir: "müssen",
            ihr: "müsst",
            "sie/Sie": "müssen"
        },
        perfekt: "hat gemusst",
        praeteritum: {
            ich: "musste",
            du: "musstest",
            "er/sie/es": "musste",
            wir: "mussten",
            ihr: "musstet",
            "sie/Sie": "mussten"
        },
        example: "Ich muss arbeiten.",
        lesson: null
    },
    {
        id: "wollen",
        infinitiv: "wollen",
        translation: "хотіти",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "will",
            du: "willst",
            "er/sie/es": "will",
            wir: "wollen",
            ihr: "wollt",
            "sie/Sie": "wollen"
        },
        perfekt: "hat gewollt",
        praeteritum: {
            ich: "wollte",
            du: "wolltest",
            "er/sie/es": "wollte",
            wir: "wollten",
            ihr: "wolltet",
            "sie/Sie": "wollten"
        },
        example: "Ich will nach Berlin fahren.",
        lesson: null
    },
    {
        id: "sollen",
        infinitiv: "sollen",
        translation: "повинен",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "soll",
            du: "sollst",
            "er/sie/es": "soll",
            wir: "sollen",
            ihr: "sollt",
            "sie/Sie": "sollen"
        },
        perfekt: "hat gesollt",
        praeteritum: {
            ich: "sollte",
            du: "solltest",
            "er/sie/es": "sollte",
            wir: "sollten",
            ihr: "solltet",
            "sie/Sie": "sollten"
        },
        example: "Du sollst mehr schlafen.",
        lesson: null
    },
    {
        id: "duerfen",
        infinitiv: "dürfen",
        translation: "мати дозвіл",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "darf",
            du: "darfst",
            "er/sie/es": "darf",
            wir: "dürfen",
            ihr: "dürft",
            "sie/Sie": "dürfen"
        },
        perfekt: "hat gedurft",
        praeteritum: {
            ich: "durfte",
            du: "durftest",
            "er/sie/es": "durfte",
            wir: "durften",
            ihr: "durftet",
            "sie/Sie": "durften"
        },
        example: "Hier darf man nicht rauchen.",
        lesson: null
    },
    {
        id: "moegen",
        infinitiv: "mögen",
        translation: "любити, подобатися",
        type: "modal",
        auxiliary: "haben",
        praesens: {
            ich: "mag",
            du: "magst",
            "er/sie/es": "mag",
            wir: "mögen",
            ihr: "mögt",
            "sie/Sie": "mögen"
        },
        perfekt: "hat gemocht",
        praeteritum: {
            ich: "mochte",
            du: "mochtest",
            "er/sie/es": "mochte",
            wir: "mochten",
            ihr: "mochtet",
            "sie/Sie": "mochten"
        },
        example: "Ich mag Kaffee.",
        lesson: null
    },
    {
        id: "moechten",
        infinitiv: "möchten",
        translation: "хотів би, бажати",
        type: "modal",
        auxiliary: "haben",
        note: "Konjunktiv II від mögen, вживається як ввічливе бажання",
        praesens: {
            ich: "möchte",
            du: "möchtest",
            "er/sie/es": "möchte",
            wir: "möchten",
            ihr: "möchtet",
            "sie/Sie": "möchten"
        },
        perfekt: null,
        praeteritum: null,
        example: "Ich möchte einen Kaffee, bitte.",
        lesson: 3
    },
    {
        id: "lassen",
        infinitiv: "lassen",
        translation: "залишати, дозволяти, змусити",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "lasse",
            du: "lässt",
            "er/sie/es": "lässt",
            wir: "lassen",
            ihr: "lasst",
            "sie/Sie": "lassen"
        },
        perfekt: "hat gelassen",
        praeteritum: {
            ich: "ließ",
            du: "ließest",
            "er/sie/es": "ließ",
            wir: "ließen",
            ihr: "ließt",
            "sie/Sie": "ließen"
        },
        example: "Ich lasse meine Tasche hier.",
        lesson: null
    },
    {
        id: "kennenlernen",
        infinitiv: "kennenlernen",
        translation: "знайомитися",
        type: "separable",
        auxiliary: "haben",
        praesens: {
            ich: "lerne kennen",
            du: "lernst kennen",
            "er/sie/es": "lernt kennen",
            wir: "lernen kennen",
            ihr: "lernt kennen",
            "sie/Sie": "lernen kennen"
        },
        perfekt: "hat kennengelernt",
        praeteritum: {
            ich: "lernte kennen",
            du: "lerntest kennen",
            "er/sie/es": "lernte kennen",
            wir: "lernten kennen",
            ihr: "lerntet kennen",
            "sie/Sie": "lernten kennen"
        },
        example: "Ich möchte dich kennenlernen.",
        lesson: 1
    },
    {
        id: "spazieren",
        infinitiv: "spazieren",
        translation: "гуляти, прогулюватися",
        type: "regular",
        auxiliary: "sein",
        note: "Часто вживається з gehen: spazieren gehen",
        praesens: {
            ich: "spaziere",
            du: "spazierst",
            "er/sie/es": "spaziert",
            wir: "spazieren",
            ihr: "spaziert",
            "sie/Sie": "spazieren"
        },
        perfekt: "ist spaziert",
        praeteritum: {
            ich: "spazierte",
            du: "spaziertest",
            "er/sie/es": "spazierte",
            wir: "spazierten",
            ihr: "spaziertet",
            "sie/Sie": "spazierten"
        },
        example: "Wir gehen im Park spazieren.",
        lesson: 5
    },

    // ==========================================
    // РЕГУЛЯРНІ ДІЄСЛОВА
    // ==========================================
    {
        id: "machen",
        infinitiv: "machen",
        translation: "робити",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "mache",
            du: "machst",
            "er/sie/es": "macht",
            wir: "machen",
            ihr: "macht",
            "sie/Sie": "machen"
        },
        perfekt: "hat gemacht",
        praeteritum: {
            ich: "machte",
            du: "machtest",
            "er/sie/es": "machte",
            wir: "machten",
            ihr: "machtet",
            "sie/Sie": "machten"
        },
        example: "Was machst du?",
        lesson: null
    },
    {
        id: "gehen",
        infinitiv: "gehen",
        translation: "йти",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "gehe",
            du: "gehst",
            "er/sie/es": "geht",
            wir: "gehen",
            ihr: "geht",
            "sie/Sie": "gehen"
        },
        perfekt: "ist gegangen",
        praeteritum: {
            ich: "ging",
            du: "gingst",
            "er/sie/es": "ging",
            wir: "gingen",
            ihr: "gingt",
            "sie/Sie": "gingen"
        },
        example: "Ich gehe nach Hause.",
        lesson: null
    },
    {
        id: "kommen",
        infinitiv: "kommen",
        translation: "приходити",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "komme",
            du: "kommst",
            "er/sie/es": "kommt",
            wir: "kommen",
            ihr: "kommt",
            "sie/Sie": "kommen"
        },
        perfekt: "ist gekommen",
        praeteritum: {
            ich: "kam",
            du: "kamst",
            "er/sie/es": "kam",
            wir: "kamen",
            ihr: "kamt",
            "sie/Sie": "kamen"
        },
        example: "Woher kommst du?",
        lesson: null
    },
    {
        id: "sagen",
        infinitiv: "sagen",
        translation: "говорити",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "sage",
            du: "sagst",
            "er/sie/es": "sagt",
            wir: "sagen",
            ihr: "sagt",
            "sie/Sie": "sagen"
        },
        perfekt: "hat gesagt",
        praeteritum: {
            ich: "sagte",
            du: "sagtest",
            "er/sie/es": "sagte",
            wir: "sagten",
            ihr: "sagtet",
            "sie/Sie": "sagten"
        },
        example: "Was sagst du?",
        lesson: null
    },
    {
        id: "sehen",
        infinitiv: "sehen",
        translation: "бачити",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "sehe",
            du: "siehst",
            "er/sie/es": "sieht",
            wir: "sehen",
            ihr: "seht",
            "sie/Sie": "sehen"
        },
        perfekt: "hat gesehen",
        praeteritum: {
            ich: "sah",
            du: "sahst",
            "er/sie/es": "sah",
            wir: "sahen",
            ihr: "saht",
            "sie/Sie": "sahen"
        },
        example: "Ich sehe einen Film.",
        lesson: null
    },
    {
        id: "wissen",
        infinitiv: "wissen",
        translation: "знати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "weiß",
            du: "weißt",
            "er/sie/es": "weiß",
            wir: "wissen",
            ihr: "wisst",
            "sie/Sie": "wissen"
        },
        perfekt: "hat gewusst",
        praeteritum: {
            ich: "wusste",
            du: "wusstest",
            "er/sie/es": "wusste",
            wir: "wussten",
            ihr: "wusstet",
            "sie/Sie": "wussten"
        },
        example: "Ich weiß es nicht.",
        lesson: null
    },
    {
        id: "geben",
        infinitiv: "geben",
        translation: "давати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "gebe",
            du: "gibst",
            "er/sie/es": "gibt",
            wir: "geben",
            ihr: "gebt",
            "sie/Sie": "geben"
        },
        perfekt: "hat gegeben",
        praeteritum: {
            ich: "gab",
            du: "gabst",
            "er/sie/es": "gab",
            wir: "gaben",
            ihr: "gabt",
            "sie/Sie": "gaben"
        },
        example: "Es gibt viel zu tun.",
        lesson: null
    },
    {
        id: "nehmen",
        infinitiv: "nehmen",
        translation: "брати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "nehme",
            du: "nimmst",
            "er/sie/es": "nimmt",
            wir: "nehmen",
            ihr: "nehmt",
            "sie/Sie": "nehmen"
        },
        perfekt: "hat genommen",
        praeteritum: {
            ich: "nahm",
            du: "nahmst",
            "er/sie/es": "nahm",
            wir: "nahmen",
            ihr: "nahmt",
            "sie/Sie": "nahmen"
        },
        example: "Ich nehme den Bus.",
        lesson: null
    },
    {
        id: "finden",
        infinitiv: "finden",
        translation: "знаходити",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "finde",
            du: "findest",
            "er/sie/es": "findet",
            wir: "finden",
            ihr: "findet",
            "sie/Sie": "finden"
        },
        perfekt: "hat gefunden",
        praeteritum: {
            ich: "fand",
            du: "fandest",
            "er/sie/es": "fand",
            wir: "fanden",
            ihr: "fandet",
            "sie/Sie": "fanden"
        },
        example: "Ich finde das gut.",
        lesson: null
    },
    {
        id: "denken",
        infinitiv: "denken",
        translation: "думати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "denke",
            du: "denkst",
            "er/sie/es": "denkt",
            wir: "denken",
            ihr: "denkt",
            "sie/Sie": "denken"
        },
        perfekt: "hat gedacht",
        praeteritum: {
            ich: "dachte",
            du: "dachtest",
            "er/sie/es": "dachte",
            wir: "dachten",
            ihr: "dachtet",
            "sie/Sie": "dachten"
        },
        example: "Ich denke an dich.",
        lesson: null
    },
    {
        id: "bleiben",
        infinitiv: "bleiben",
        translation: "залишатися",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "bleibe",
            du: "bleibst",
            "er/sie/es": "bleibt",
            wir: "bleiben",
            ihr: "bleibt",
            "sie/Sie": "bleiben"
        },
        perfekt: "ist geblieben",
        praeteritum: {
            ich: "blieb",
            du: "bliebst",
            "er/sie/es": "blieb",
            wir: "blieben",
            ihr: "bliebt",
            "sie/Sie": "blieben"
        },
        example: "Ich bleibe zu Hause.",
        lesson: null
    },
    {
        id: "stehen",
        infinitiv: "stehen",
        translation: "стояти",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "stehe",
            du: "stehst",
            "er/sie/es": "steht",
            wir: "stehen",
            ihr: "steht",
            "sie/Sie": "stehen"
        },
        perfekt: "hat gestanden",
        praeteritum: {
            ich: "stand",
            du: "standest",
            "er/sie/es": "stand",
            wir: "standen",
            ihr: "standet",
            "sie/Sie": "standen"
        },
        example: "Der Tisch steht im Zimmer.",
        lesson: null
    },
    {
        id: "lesen",
        infinitiv: "lesen",
        translation: "читати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "lese",
            du: "liest",
            "er/sie/es": "liest",
            wir: "lesen",
            ihr: "lest",
            "sie/Sie": "lesen"
        },
        perfekt: "hat gelesen",
        praeteritum: {
            ich: "las",
            du: "lasest",
            "er/sie/es": "las",
            wir: "lasen",
            ihr: "last",
            "sie/Sie": "lasen"
        },
        example: "Ich lese ein Buch.",
        lesson: null
    },
    {
        id: "schreiben",
        infinitiv: "schreiben",
        translation: "писати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "schreibe",
            du: "schreibst",
            "er/sie/es": "schreibt",
            wir: "schreiben",
            ihr: "schreibt",
            "sie/Sie": "schreiben"
        },
        perfekt: "hat geschrieben",
        praeteritum: {
            ich: "schrieb",
            du: "schriebst",
            "er/sie/es": "schrieb",
            wir: "schrieben",
            ihr: "schriebt",
            "sie/Sie": "schrieben"
        },
        example: "Ich schreibe einen Brief.",
        lesson: null
    },
    {
        id: "sprechen",
        infinitiv: "sprechen",
        translation: "розмовляти",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "spreche",
            du: "sprichst",
            "er/sie/es": "spricht",
            wir: "sprechen",
            ihr: "sprecht",
            "sie/Sie": "sprechen"
        },
        perfekt: "hat gesprochen",
        praeteritum: {
            ich: "sprach",
            du: "sprachst",
            "er/sie/es": "sprach",
            wir: "sprachen",
            ihr: "spracht",
            "sie/Sie": "sprachen"
        },
        example: "Sprichst du Deutsch?",
        lesson: null
    },
    {
        id: "fahren",
        infinitiv: "fahren",
        translation: "їхати",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "fahre",
            du: "fährst",
            "er/sie/es": "fährt",
            wir: "fahren",
            ihr: "fahrt",
            "sie/Sie": "fahren"
        },
        perfekt: "ist gefahren",
        praeteritum: {
            ich: "fuhr",
            du: "fuhrst",
            "er/sie/es": "fuhr",
            wir: "fuhren",
            ihr: "fuhrt",
            "sie/Sie": "fuhren"
        },
        example: "Ich fahre nach Berlin.",
        lesson: null
    },
    {
        id: "essen",
        infinitiv: "essen",
        translation: "їсти",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "esse",
            du: "isst",
            "er/sie/es": "isst",
            wir: "essen",
            ihr: "esst",
            "sie/Sie": "essen"
        },
        perfekt: "hat gegessen",
        praeteritum: {
            ich: "aß",
            du: "aßest",
            "er/sie/es": "aß",
            wir: "aßen",
            ihr: "aßt",
            "sie/Sie": "aßen"
        },
        example: "Was isst du gern?",
        lesson: null
    },
    {
        id: "trinken",
        infinitiv: "trinken",
        translation: "пити",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "trinke",
            du: "trinkst",
            "er/sie/es": "trinkt",
            wir: "trinken",
            ihr: "trinkt",
            "sie/Sie": "trinken"
        },
        perfekt: "hat getrunken",
        praeteritum: {
            ich: "trank",
            du: "trankst",
            "er/sie/es": "trank",
            wir: "tranken",
            ihr: "trankt",
            "sie/Sie": "tranken"
        },
        example: "Ich trinke Kaffee.",
        lesson: null
    },
    {
        id: "schlafen",
        infinitiv: "schlafen",
        translation: "спати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "schlafe",
            du: "schläfst",
            "er/sie/es": "schläft",
            wir: "schlafen",
            ihr: "schlaft",
            "sie/Sie": "schlafen"
        },
        perfekt: "hat geschlafen",
        praeteritum: {
            ich: "schlief",
            du: "schliefst",
            "er/sie/es": "schlief",
            wir: "schliefen",
            ihr: "schlieft",
            "sie/Sie": "schliefen"
        },
        example: "Ich schlafe 8 Stunden.",
        lesson: null
    },
    {
        id: "arbeiten",
        infinitiv: "arbeiten",
        translation: "працювати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "arbeite",
            du: "arbeitest",
            "er/sie/es": "arbeitet",
            wir: "arbeiten",
            ihr: "arbeitet",
            "sie/Sie": "arbeiten"
        },
        perfekt: "hat gearbeitet",
        praeteritum: {
            ich: "arbeitete",
            du: "arbeitetest",
            "er/sie/es": "arbeitete",
            wir: "arbeiteten",
            ihr: "arbeitetet",
            "sie/Sie": "arbeiteten"
        },
        example: "Wo arbeitest du?",
        lesson: null
    },
    {
        id: "kaufen",
        infinitiv: "kaufen",
        translation: "купувати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "kaufe",
            du: "kaufst",
            "er/sie/es": "kauft",
            wir: "kaufen",
            ihr: "kauft",
            "sie/Sie": "kaufen"
        },
        perfekt: "hat gekauft",
        praeteritum: {
            ich: "kaufte",
            du: "kauftest",
            "er/sie/es": "kaufte",
            wir: "kauften",
            ihr: "kauftet",
            "sie/Sie": "kauften"
        },
        example: "Ich kaufe Brot.",
        lesson: null
    },
    {
        id: "spielen",
        infinitiv: "spielen",
        translation: "грати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "spiele",
            du: "spielst",
            "er/sie/es": "spielt",
            wir: "spielen",
            ihr: "spielt",
            "sie/Sie": "spielen"
        },
        perfekt: "hat gespielt",
        praeteritum: {
            ich: "spielte",
            du: "spieltest",
            "er/sie/es": "spielte",
            wir: "spielten",
            ihr: "spieltet",
            "sie/Sie": "spielten"
        },
        example: "Ich spiele Fußball.",
        lesson: null
    },
    {
        id: "lernen",
        infinitiv: "lernen",
        translation: "вчити",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "lerne",
            du: "lernst",
            "er/sie/es": "lernt",
            wir: "lernen",
            ihr: "lernt",
            "sie/Sie": "lernen"
        },
        perfekt: "hat gelernt",
        praeteritum: {
            ich: "lernte",
            du: "lerntest",
            "er/sie/es": "lernte",
            wir: "lernten",
            ihr: "lerntet",
            "sie/Sie": "lernten"
        },
        example: "Ich lerne Deutsch.",
        lesson: null
    },
    {
        id: "wohnen",
        infinitiv: "wohnen",
        translation: "жити",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "wohne",
            du: "wohnst",
            "er/sie/es": "wohnt",
            wir: "wohnen",
            ihr: "wohnt",
            "sie/Sie": "wohnen"
        },
        perfekt: "hat gewohnt",
        praeteritum: {
            ich: "wohnte",
            du: "wohntest",
            "er/sie/es": "wohnte",
            wir: "wohnten",
            ihr: "wohntet",
            "sie/Sie": "wohnten"
        },
        example: "Wo wohnst du?",
        lesson: null
    },
    {
        id: "heissen",
        infinitiv: "heißen",
        translation: "називатися",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "heiße",
            du: "heißt",
            "er/sie/es": "heißt",
            wir: "heißen",
            ihr: "heißt",
            "sie/Sie": "heißen"
        },
        perfekt: "hat geheißen",
        praeteritum: {
            ich: "hieß",
            du: "hießest",
            "er/sie/es": "hieß",
            wir: "hießen",
            ihr: "hießt",
            "sie/Sie": "hießen"
        },
        example: "Wie heißen Sie?",
        lesson: null
    },

    // ==========================================
    // ВІДОКРЕМЛЮВАНІ ДІЄСЛОВА
    // ==========================================
    {
        id: "aufstehen",
        infinitiv: "aufstehen",
        translation: "вставати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: {
            ich: "stehe auf",
            du: "stehst auf",
            "er/sie/es": "steht auf",
            wir: "stehen auf",
            ihr: "steht auf",
            "sie/Sie": "stehen auf"
        },
        perfekt: "ist aufgestanden",
        praeteritum: {
            ich: "stand auf",
            du: "standest auf",
            "er/sie/es": "stand auf",
            wir: "standen auf",
            ihr: "standet auf",
            "sie/Sie": "standen auf"
        },
        example: "Ich stehe um 7 Uhr auf.",
        lesson: null
    },
    {
        id: "einkaufen",
        infinitiv: "einkaufen",
        translation: "робити покупки",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "kaufe ein",
            du: "kaufst ein",
            "er/sie/es": "kauft ein",
            wir: "kaufen ein",
            ihr: "kauft ein",
            "sie/Sie": "kaufen ein"
        },
        perfekt: "hat eingekauft",
        praeteritum: {
            ich: "kaufte ein",
            du: "kauftest ein",
            "er/sie/es": "kaufte ein",
            wir: "kauften ein",
            ihr: "kauftet ein",
            "sie/Sie": "kauften ein"
        },
        example: "Ich kaufe im Supermarkt ein.",
        lesson: null
    },
    {
        id: "anrufen",
        infinitiv: "anrufen",
        translation: "дзвонити",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "rufe an",
            du: "rufst an",
            "er/sie/es": "ruft an",
            wir: "rufen an",
            ihr: "ruft an",
            "sie/Sie": "rufen an"
        },
        perfekt: "hat angerufen",
        praeteritum: {
            ich: "rief an",
            du: "riefst an",
            "er/sie/es": "rief an",
            wir: "riefen an",
            ihr: "rieft an",
            "sie/Sie": "riefen an"
        },
        example: "Ich rufe dich an.",
        lesson: null
    },
    {
        id: "aufmachen",
        infinitiv: "aufmachen",
        translation: "відкривати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "mache auf",
            du: "machst auf",
            "er/sie/es": "macht auf",
            wir: "machen auf",
            ihr: "macht auf",
            "sie/Sie": "machen auf"
        },
        perfekt: "hat aufgemacht",
        praeteritum: {
            ich: "machte auf",
            du: "machtest auf",
            "er/sie/es": "machte auf",
            wir: "machten auf",
            ihr: "machtet auf",
            "sie/Sie": "machten auf"
        },
        example: "Mach bitte das Fenster auf!",
        lesson: null
    },
    {
        id: "zumachen",
        infinitiv: "zumachen",
        translation: "закривати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "mache zu",
            du: "machst zu",
            "er/sie/es": "macht zu",
            wir: "machen zu",
            ihr: "macht zu",
            "sie/Sie": "machen zu"
        },
        perfekt: "hat zugemacht",
        praeteritum: {
            ich: "machte zu",
            du: "machtest zu",
            "er/sie/es": "machte zu",
            wir: "machten zu",
            ihr: "machtet zu",
            "sie/Sie": "machten zu"
        },
        example: "Mach bitte die Tür zu!",
        lesson: null
    },
    {
        id: "anfangen",
        infinitiv: "anfangen",
        translation: "починати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "fange an",
            du: "fängst an",
            "er/sie/es": "fängt an",
            wir: "fangen an",
            ihr: "fangt an",
            "sie/Sie": "fangen an"
        },
        perfekt: "hat angefangen",
        praeteritum: {
            ich: "fing an",
            du: "fingst an",
            "er/sie/es": "fing an",
            wir: "fingen an",
            ihr: "fingt an",
            "sie/Sie": "fingen an"
        },
        example: "Der Kurs fängt um 9 Uhr an.",
        lesson: null
    },
    {
        id: "fernsehen",
        infinitiv: "fernsehen",
        translation: "дивитися ТБ",
        type: "trennbar",
        auxiliary: "haben",
        praesens: {
            ich: "sehe fern",
            du: "siehst fern",
            "er/sie/es": "sieht fern",
            wir: "sehen fern",
            ihr: "seht fern",
            "sie/Sie": "sehen fern"
        },
        perfekt: "hat ferngesehen",
        praeteritum: {
            ich: "sah fern",
            du: "sahst fern",
            "er/sie/es": "sah fern",
            wir: "sahen fern",
            ihr: "saht fern",
            "sie/Sie": "sahen fern"
        },
        example: "Abends sehe ich fern.",
        lesson: null
    },

    // ==========================================
    // ІНШІ ВАЖЛИВІ ДІЄСЛОВА
    // ==========================================
    {
        id: "helfen",
        infinitiv: "helfen",
        translation: "допомагати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "helfe",
            du: "hilfst",
            "er/sie/es": "hilft",
            wir: "helfen",
            ihr: "helft",
            "sie/Sie": "helfen"
        },
        perfekt: "hat geholfen",
        praeteritum: {
            ich: "half",
            du: "halfst",
            "er/sie/es": "half",
            wir: "halfen",
            ihr: "halft",
            "sie/Sie": "halfen"
        },
        example: "Kann ich dir helfen?",
        lesson: null
    },
    {
        id: "brauchen",
        infinitiv: "brauchen",
        translation: "потребувати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "brauche",
            du: "brauchst",
            "er/sie/es": "braucht",
            wir: "brauchen",
            ihr: "braucht",
            "sie/Sie": "brauchen"
        },
        perfekt: "hat gebraucht",
        praeteritum: {
            ich: "brauchte",
            du: "brauchtest",
            "er/sie/es": "brauchte",
            wir: "brauchten",
            ihr: "brauchtet",
            "sie/Sie": "brauchten"
        },
        example: "Ich brauche Hilfe.",
        lesson: null
    },
    {
        id: "kosten",
        infinitiv: "kosten",
        translation: "коштувати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "koste",
            du: "kostest",
            "er/sie/es": "kostet",
            wir: "kosten",
            ihr: "kostet",
            "sie/Sie": "kosten"
        },
        perfekt: "hat gekostet",
        praeteritum: {
            ich: "kostete",
            du: "kostetest",
            "er/sie/es": "kostete",
            wir: "kosteten",
            ihr: "kostetet",
            "sie/Sie": "kosteten"
        },
        example: "Was kostet das?",
        lesson: null
    },
    {
        id: "bezahlen",
        infinitiv: "bezahlen",
        translation: "платити",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "bezahle",
            du: "bezahlst",
            "er/sie/es": "bezahlt",
            wir: "bezahlen",
            ihr: "bezahlt",
            "sie/Sie": "bezahlen"
        },
        perfekt: "hat bezahlt",
        praeteritum: {
            ich: "bezahlte",
            du: "bezahltest",
            "er/sie/es": "bezahlte",
            wir: "bezahlten",
            ihr: "bezahltet",
            "sie/Sie": "bezahlten"
        },
        example: "Ich möchte bitte bezahlen.",
        lesson: null
    },
    {
        id: "verstehen",
        infinitiv: "verstehen",
        translation: "розуміти",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "verstehe",
            du: "verstehst",
            "er/sie/es": "versteht",
            wir: "verstehen",
            ihr: "versteht",
            "sie/Sie": "verstehen"
        },
        perfekt: "hat verstanden",
        praeteritum: {
            ich: "verstand",
            du: "verstandest",
            "er/sie/es": "verstand",
            wir: "verstanden",
            ihr: "verstandet",
            "sie/Sie": "verstanden"
        },
        example: "Verstehst du mich?",
        lesson: null
    },
    {
        id: "hoeren",
        infinitiv: "hören",
        translation: "чути, слухати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "höre",
            du: "hörst",
            "er/sie/es": "hört",
            wir: "hören",
            ihr: "hört",
            "sie/Sie": "hören"
        },
        perfekt: "hat gehört",
        praeteritum: {
            ich: "hörte",
            du: "hörtest",
            "er/sie/es": "hörte",
            wir: "hörten",
            ihr: "hörtet",
            "sie/Sie": "hörten"
        },
        example: "Ich höre Musik.",
        lesson: null
    },
    {
        id: "fragen",
        infinitiv: "fragen",
        translation: "питати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "frage",
            du: "fragst",
            "er/sie/es": "fragt",
            wir: "fragen",
            ihr: "fragt",
            "sie/Sie": "fragen"
        },
        perfekt: "hat gefragt",
        praeteritum: {
            ich: "fragte",
            du: "fragtest",
            "er/sie/es": "fragte",
            wir: "fragten",
            ihr: "fragtet",
            "sie/Sie": "fragten"
        },
        example: "Darf ich fragen?",
        lesson: null
    },
    {
        id: "antworten",
        infinitiv: "antworten",
        translation: "відповідати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "antworte",
            du: "antwortest",
            "er/sie/es": "antwortet",
            wir: "antworten",
            ihr: "antwortet",
            "sie/Sie": "antworten"
        },
        perfekt: "hat geantwortet",
        praeteritum: {
            ich: "antwortete",
            du: "antwortetest",
            "er/sie/es": "antwortete",
            wir: "antworteten",
            ihr: "antwortetet",
            "sie/Sie": "antworteten"
        },
        example: "Antworte bitte!",
        lesson: null
    },
    {
        id: "bekommen",
        infinitiv: "bekommen",
        translation: "отримувати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "bekomme",
            du: "bekommst",
            "er/sie/es": "bekommt",
            wir: "bekommen",
            ihr: "bekommt",
            "sie/Sie": "bekommen"
        },
        perfekt: "hat bekommen",
        praeteritum: {
            ich: "bekam",
            du: "bekamst",
            "er/sie/es": "bekam",
            wir: "bekamen",
            ihr: "bekamt",
            "sie/Sie": "bekamen"
        },
        example: "Ich bekomme einen Brief.",
        lesson: null
    },
    {
        id: "bringen",
        infinitiv: "bringen",
        translation: "приносити",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "bringe",
            du: "bringst",
            "er/sie/es": "bringt",
            wir: "bringen",
            ihr: "bringt",
            "sie/Sie": "bringen"
        },
        perfekt: "hat gebracht",
        praeteritum: {
            ich: "brachte",
            du: "brachtest",
            "er/sie/es": "brachte",
            wir: "brachten",
            ihr: "brachtet",
            "sie/Sie": "brachten"
        },
        example: "Ich bringe dir das Buch.",
        lesson: null
    },
    {
        id: "laufen",
        infinitiv: "laufen",
        translation: "бігти",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "laufe",
            du: "läufst",
            "er/sie/es": "läuft",
            wir: "laufen",
            ihr: "lauft",
            "sie/Sie": "laufen"
        },
        perfekt: "ist gelaufen",
        praeteritum: {
            ich: "lief",
            du: "liefst",
            "er/sie/es": "lief",
            wir: "liefen",
            ihr: "lieft",
            "sie/Sie": "liefen"
        },
        example: "Ich laufe jeden Tag.",
        lesson: null
    },
    {
        id: "schwimmen",
        infinitiv: "schwimmen",
        translation: "плавати",
        type: "irregular",
        auxiliary: "sein",
        praesens: {
            ich: "schwimme",
            du: "schwimmst",
            "er/sie/es": "schwimmt",
            wir: "schwimmen",
            ihr: "schwimmt",
            "sie/Sie": "schwimmen"
        },
        perfekt: "ist geschwommen",
        praeteritum: {
            ich: "schwamm",
            du: "schwammst",
            "er/sie/es": "schwamm",
            wir: "schwammen",
            ihr: "schwammt",
            "sie/Sie": "schwammen"
        },
        example: "Ich schwimme gern.",
        lesson: null
    },
    {
        id: "treffen",
        infinitiv: "treffen",
        translation: "зустрічати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "treffe",
            du: "triffst",
            "er/sie/es": "trifft",
            wir: "treffen",
            ihr: "trefft",
            "sie/Sie": "treffen"
        },
        perfekt: "hat getroffen",
        praeteritum: {
            ich: "traf",
            du: "trafst",
            "er/sie/es": "traf",
            wir: "trafen",
            ihr: "traft",
            "sie/Sie": "trafen"
        },
        example: "Ich treffe meine Freunde.",
        lesson: null
    },
    {
        id: "beginnen",
        infinitiv: "beginnen",
        translation: "починати",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "beginne",
            du: "beginnst",
            "er/sie/es": "beginnt",
            wir: "beginnen",
            ihr: "beginnt",
            "sie/Sie": "beginnen"
        },
        perfekt: "hat begonnen",
        praeteritum: {
            ich: "begann",
            du: "begannst",
            "er/sie/es": "begann",
            wir: "begannen",
            ihr: "begannt",
            "sie/Sie": "begannen"
        },
        example: "Der Film beginnt um 20 Uhr.",
        lesson: null
    },
    {
        id: "gefallen",
        infinitiv: "gefallen",
        translation: "подобатися",
        type: "irregular",
        auxiliary: "haben",
        praesens: {
            ich: "gefalle",
            du: "gefällst",
            "er/sie/es": "gefällt",
            wir: "gefallen",
            ihr: "gefallt",
            "sie/Sie": "gefallen"
        },
        perfekt: "hat gefallen",
        praeteritum: {
            ich: "gefiel",
            du: "gefielst",
            "er/sie/es": "gefiel",
            wir: "gefielen",
            ihr: "gefielt",
            "sie/Sie": "gefielen"
        },
        example: "Das Kleid gefällt mir.",
        lesson: null
    },
    {
        id: "passen",
        infinitiv: "passen",
        translation: "пасувати",
        type: "regular",
        auxiliary: "haben",
        praesens: {
            ich: "passe",
            du: "passt",
            "er/sie/es": "passt",
            wir: "passen",
            ihr: "passt",
            "sie/Sie": "passen"
        },
        perfekt: "hat gepasst",
        praeteritum: {
            ich: "passte",
            du: "passtest",
            "er/sie/es": "passte",
            wir: "passten",
            ihr: "passtet",
            "sie/Sie": "passten"
        },
        example: "Die Hose passt nicht.",
        lesson: null
    },

    // ==========================================
    // НОВІ ДІЄСЛОВА - БАЗОВІ ДІЇ
    // ==========================================
    {
        id: "suchen",
        infinitiv: "suchen",
        translation: "шукати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "suche", du: "suchst", "er/sie/es": "sucht", wir: "suchen", ihr: "sucht", "sie/Sie": "suchen" },
        perfekt: "hat gesucht",
        praeteritum: { ich: "suchte", du: "suchtest", "er/sie/es": "suchte", wir: "suchten", ihr: "suchtet", "sie/Sie": "suchten" },
        example: "Ich suche meine Schlüssel.",
        lesson: null
    },
    {
        id: "buchstabieren",
        infinitiv: "buchstabieren",
        translation: "називати по буквах",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "buchstabiere", du: "buchstabierst", "er/sie/es": "buchstabiert", wir: "buchstabieren", ihr: "buchstabiert", "sie/Sie": "buchstabieren" },
        perfekt: "hat buchstabiert",
        praeteritum: { ich: "buchstabierte", du: "buchstabiertest", "er/sie/es": "buchstabierte", wir: "buchstabierten", ihr: "buchstabiertet", "sie/Sie": "buchstabierten" },
        example: "Können Sie Ihren Namen buchstabieren?",
        lesson: null
    },
    {
        id: "leben",
        infinitiv: "leben",
        translation: "жити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "lebe", du: "lebst", "er/sie/es": "lebt", wir: "leben", ihr: "lebt", "sie/Sie": "leben" },
        perfekt: "hat gelebt",
        praeteritum: { ich: "lebte", du: "lebtest", "er/sie/es": "lebte", wir: "lebten", ihr: "lebtet", "sie/Sie": "lebten" },
        example: "Ich lebe in Deutschland.",
        lesson: null
    },
    {
        id: "mieten",
        infinitiv: "mieten",
        translation: "орендувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "miete", du: "mietest", "er/sie/es": "mietet", wir: "mieten", ihr: "mietet", "sie/Sie": "mieten" },
        perfekt: "hat gemietet",
        praeteritum: { ich: "mietete", du: "mietetest", "er/sie/es": "mietete", wir: "mieteten", ihr: "mietetet", "sie/Sie": "mieteten" },
        example: "Ich miete eine Wohnung.",
        lesson: null
    },
    {
        id: "vermieten",
        infinitiv: "vermieten",
        translation: "здавати в оренду",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "vermiete", du: "vermietest", "er/sie/es": "vermietet", wir: "vermieten", ihr: "vermietet", "sie/Sie": "vermieten" },
        perfekt: "hat vermietet",
        praeteritum: { ich: "vermietete", du: "vermietetest", "er/sie/es": "vermietete", wir: "vermieteten", ihr: "vermietetet", "sie/Sie": "vermieteten" },
        example: "Er vermietet sein Zimmer.",
        lesson: null
    },
    {
        id: "zahlen",
        infinitiv: "zahlen",
        translation: "платити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "zahle", du: "zahlst", "er/sie/es": "zahlt", wir: "zahlen", ihr: "zahlt", "sie/Sie": "zahlen" },
        perfekt: "hat gezahlt",
        praeteritum: { ich: "zahlte", du: "zahltest", "er/sie/es": "zahlte", wir: "zahlten", ihr: "zahltet", "sie/Sie": "zahlten" },
        example: "Ich zahle die Miete.",
        lesson: null
    },
    {
        id: "kassieren",
        infinitiv: "kassieren",
        translation: "брати оплату",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "kassiere", du: "kassierst", "er/sie/es": "kassiert", wir: "kassieren", ihr: "kassiert", "sie/Sie": "kassieren" },
        perfekt: "hat kassiert",
        praeteritum: { ich: "kassierte", du: "kassiertest", "er/sie/es": "kassierte", wir: "kassierten", ihr: "kassiertet", "sie/Sie": "kassierten" },
        example: "Die Kellnerin kassiert.",
        lesson: null
    },
    {
        id: "tanzen",
        infinitiv: "tanzen",
        translation: "танцювати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "tanze", du: "tanzt", "er/sie/es": "tanzt", wir: "tanzen", ihr: "tanzt", "sie/Sie": "tanzen" },
        perfekt: "hat getanzt",
        praeteritum: { ich: "tanzte", du: "tanztest", "er/sie/es": "tanzte", wir: "tanzten", ihr: "tanztet", "sie/Sie": "tanzten" },
        example: "Wir tanzen gern.",
        lesson: null
    },
    {
        id: "putzen",
        infinitiv: "putzen",
        translation: "прибирати, чистити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "putze", du: "putzt", "er/sie/es": "putzt", wir: "putzen", ihr: "putzt", "sie/Sie": "putzen" },
        perfekt: "hat geputzt",
        praeteritum: { ich: "putzte", du: "putztest", "er/sie/es": "putzte", wir: "putzten", ihr: "putztet", "sie/Sie": "putzten" },
        example: "Ich putze die Wohnung.",
        lesson: null
    },
    {
        id: "kochen",
        infinitiv: "kochen",
        translation: "готувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "koche", du: "kochst", "er/sie/es": "kocht", wir: "kochen", ihr: "kocht", "sie/Sie": "kochen" },
        perfekt: "hat gekocht",
        praeteritum: { ich: "kochte", du: "kochtest", "er/sie/es": "kochte", wir: "kochten", ihr: "kochtet", "sie/Sie": "kochten" },
        example: "Ich koche Suppe.",
        lesson: null
    },
    {
        id: "fruehstuecken",
        infinitiv: "frühstücken",
        translation: "снідати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "frühstücke", du: "frühstückst", "er/sie/es": "frühstückt", wir: "frühstücken", ihr: "frühstückt", "sie/Sie": "frühstücken" },
        perfekt: "hat gefrühstückt",
        praeteritum: { ich: "frühstückte", du: "frühstücktest", "er/sie/es": "frühstückte", wir: "frühstückten", ihr: "frühstücktet", "sie/Sie": "frühstückten" },
        example: "Ich frühstücke um 8 Uhr.",
        lesson: null
    },
    {
        id: "backen",
        infinitiv: "backen",
        translation: "пекти",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "backe", du: "bäckst", "er/sie/es": "bäckt", wir: "backen", ihr: "backt", "sie/Sie": "backen" },
        perfekt: "hat gebacken",
        praeteritum: { ich: "backte", du: "backtest", "er/sie/es": "backte", wir: "backten", ihr: "backtet", "sie/Sie": "backten" },
        example: "Ich backe einen Kuchen.",
        lesson: null
    },
    {
        id: "waschen",
        infinitiv: "waschen",
        translation: "мити, прати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "wasche", du: "wäschst", "er/sie/es": "wäscht", wir: "waschen", ihr: "wascht", "sie/Sie": "waschen" },
        perfekt: "hat gewaschen",
        praeteritum: { ich: "wusch", du: "wuschst", "er/sie/es": "wusch", wir: "wuschen", ihr: "wuscht", "sie/Sie": "wuschen" },
        example: "Ich wasche die Wäsche.",
        lesson: null
    },
    {
        id: "oeffnen",
        infinitiv: "öffnen",
        translation: "відчиняти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "öffne", du: "öffnest", "er/sie/es": "öffnet", wir: "öffnen", ihr: "öffnet", "sie/Sie": "öffnen" },
        perfekt: "hat geöffnet",
        praeteritum: { ich: "öffnete", du: "öffnetest", "er/sie/es": "öffnete", wir: "öffneten", ihr: "öffnetet", "sie/Sie": "öffneten" },
        example: "Öffne bitte die Tür!",
        lesson: null
    },
    {
        id: "schliessen",
        infinitiv: "schließen",
        translation: "зачиняти",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "schließe", du: "schließt", "er/sie/es": "schließt", wir: "schließen", ihr: "schließt", "sie/Sie": "schließen" },
        perfekt: "hat geschlossen",
        praeteritum: { ich: "schloss", du: "schlossest", "er/sie/es": "schloss", wir: "schlossen", ihr: "schlosst", "sie/Sie": "schlossen" },
        example: "Schließ bitte das Fenster!",
        lesson: null
    },
    {
        id: "abholen",
        infinitiv: "abholen",
        translation: "забирати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "hole ab", du: "holst ab", "er/sie/es": "holt ab", wir: "holen ab", ihr: "holt ab", "sie/Sie": "holen ab" },
        perfekt: "hat abgeholt",
        praeteritum: { ich: "holte ab", du: "holtest ab", "er/sie/es": "holte ab", wir: "holten ab", ihr: "holtet ab", "sie/Sie": "holten ab" },
        example: "Ich hole dich ab.",
        lesson: null
    },
    {
        id: "frieren",
        infinitiv: "frieren",
        translation: "мерзнути",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "friere", du: "frierst", "er/sie/es": "friert", wir: "frieren", ihr: "friert", "sie/Sie": "frieren" },
        perfekt: "hat gefroren",
        praeteritum: { ich: "fror", du: "frorst", "er/sie/es": "fror", wir: "froren", ihr: "frort", "sie/Sie": "froren" },
        example: "Mir ist kalt, ich friere.",
        lesson: null
    },
    {
        id: "schwitzen",
        infinitiv: "schwitzen",
        translation: "потіти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schwitze", du: "schwitzt", "er/sie/es": "schwitzt", wir: "schwitzen", ihr: "schwitzt", "sie/Sie": "schwitzen" },
        perfekt: "hat geschwitzt",
        praeteritum: { ich: "schwitzte", du: "schwitztest", "er/sie/es": "schwitzte", wir: "schwitzten", ihr: "schwitztet", "sie/Sie": "schwitzten" },
        example: "Im Sommer schwitze ich viel.",
        lesson: null
    },
    {
        id: "wandern",
        infinitiv: "wandern",
        translation: "ходити в похід",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "wandere", du: "wanderst", "er/sie/es": "wandert", wir: "wandern", ihr: "wandert", "sie/Sie": "wandern" },
        perfekt: "ist gewandert",
        praeteritum: { ich: "wanderte", du: "wandertest", "er/sie/es": "wanderte", wir: "wanderten", ihr: "wandertet", "sie/Sie": "wanderten" },
        example: "Wir wandern in den Bergen.",
        lesson: null
    },
    {
        id: "stricken",
        infinitiv: "stricken",
        translation: "в'язати (спицями)",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "stricke", du: "strickst", "er/sie/es": "strickt", wir: "stricken", ihr: "strickt", "sie/Sie": "stricken" },
        perfekt: "hat gestrickt",
        praeteritum: { ich: "strickte", du: "stricktest", "er/sie/es": "strickte", wir: "strickten", ihr: "stricktet", "sie/Sie": "strickten" },
        example: "Oma strickt einen Pullover.",
        lesson: null
    },
    {
        id: "haekeln",
        infinitiv: "häkeln",
        translation: "в'язати гачком",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "häkle", du: "häkelst", "er/sie/es": "häkelt", wir: "häkeln", ihr: "häkelt", "sie/Sie": "häkeln" },
        perfekt: "hat gehäkelt",
        praeteritum: { ich: "häkelte", du: "häkeltest", "er/sie/es": "häkelte", wir: "häkelten", ihr: "häkeltet", "sie/Sie": "häkelten" },
        example: "Sie häkelt eine Decke.",
        lesson: null
    },
    {
        id: "reiten",
        infinitiv: "reiten",
        translation: "їздити верхи",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "reite", du: "reitest", "er/sie/es": "reitet", wir: "reiten", ihr: "reitet", "sie/Sie": "reiten" },
        perfekt: "ist geritten",
        praeteritum: { ich: "ritt", du: "rittest", "er/sie/es": "ritt", wir: "ritten", ihr: "rittet", "sie/Sie": "ritten" },
        example: "Sie reitet gern.",
        lesson: null
    },
    {
        id: "sammeln",
        infinitiv: "sammeln",
        translation: "збирати, колекціонувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "sammle", du: "sammelst", "er/sie/es": "sammelt", wir: "sammeln", ihr: "sammelt", "sie/Sie": "sammeln" },
        perfekt: "hat gesammelt",
        praeteritum: { ich: "sammelte", du: "sammeltest", "er/sie/es": "sammelte", wir: "sammelten", ihr: "sammeltet", "sie/Sie": "sammelten" },
        example: "Er sammelt Briefmarken.",
        lesson: null
    },
    {
        id: "wecken",
        infinitiv: "wecken",
        translation: "будити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "wecke", du: "weckst", "er/sie/es": "weckt", wir: "wecken", ihr: "weckt", "sie/Sie": "wecken" },
        perfekt: "hat geweckt",
        praeteritum: { ich: "weckte", du: "wecktest", "er/sie/es": "weckte", wir: "weckten", ihr: "wecktet", "sie/Sie": "weckten" },
        example: "Der Wecker weckt mich.",
        lesson: null
    },
    {
        id: "singen",
        infinitiv: "singen",
        translation: "співати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "singe", du: "singst", "er/sie/es": "singt", wir: "singen", ihr: "singt", "sie/Sie": "singen" },
        perfekt: "hat gesungen",
        praeteritum: { ich: "sang", du: "sangst", "er/sie/es": "sang", wir: "sangen", ihr: "sangt", "sie/Sie": "sangen" },
        example: "Sie singt ein Lied.",
        lesson: null
    },
    {
        id: "fallen",
        infinitiv: "fallen",
        translation: "падати",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "falle", du: "fällst", "er/sie/es": "fällt", wir: "fallen", ihr: "fallt", "sie/Sie": "fallen" },
        perfekt: "ist gefallen",
        praeteritum: { ich: "fiel", du: "fielst", "er/sie/es": "fiel", wir: "fielen", ihr: "fielt", "sie/Sie": "fielen" },
        example: "Die Blätter fallen.",
        lesson: null
    },
    {
        id: "springen",
        infinitiv: "springen",
        translation: "стрибати",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "springe", du: "springst", "er/sie/es": "springt", wir: "springen", ihr: "springt", "sie/Sie": "springen" },
        perfekt: "ist gesprungen",
        praeteritum: { ich: "sprang", du: "sprangst", "er/sie/es": "sprang", wir: "sprangen", ihr: "sprangt", "sie/Sie": "sprangen" },
        example: "Das Kind springt hoch.",
        lesson: null
    },
    {
        id: "klettern",
        infinitiv: "klettern",
        translation: "лазити, підійматися",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "klettere", du: "kletterst", "er/sie/es": "klettert", wir: "klettern", ihr: "klettert", "sie/Sie": "klettern" },
        perfekt: "ist geklettert",
        praeteritum: { ich: "kletterte", du: "klettertest", "er/sie/es": "kletterte", wir: "kletterten", ihr: "klettertet", "sie/Sie": "kletterten" },
        example: "Das Kind klettert auf den Baum.",
        lesson: null
    },
    {
        id: "krabbeln",
        infinitiv: "krabbeln",
        translation: "повзати",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "krabble", du: "krabbelst", "er/sie/es": "krabbelt", wir: "krabbeln", ihr: "krabbelt", "sie/Sie": "krabbeln" },
        perfekt: "ist gekrabbelt",
        praeteritum: { ich: "krabbelte", du: "krabbeltest", "er/sie/es": "krabbelte", wir: "krabbelten", ihr: "krabbeltet", "sie/Sie": "krabbelten" },
        example: "Das Baby krabbelt.",
        lesson: null
    },
    {
        id: "reisen",
        infinitiv: "reisen",
        translation: "подорожувати",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "reise", du: "reist", "er/sie/es": "reist", wir: "reisen", ihr: "reist", "sie/Sie": "reisen" },
        perfekt: "ist gereist",
        praeteritum: { ich: "reiste", du: "reistest", "er/sie/es": "reiste", wir: "reisten", ihr: "reistet", "sie/Sie": "reisten" },
        example: "Ich reise gern.",
        lesson: null
    },
    {
        id: "steigen",
        infinitiv: "steigen",
        translation: "підніматися",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "steige", du: "steigst", "er/sie/es": "steigt", wir: "steigen", ihr: "steigt", "sie/Sie": "steigen" },
        perfekt: "ist gestiegen",
        praeteritum: { ich: "stieg", du: "stiegst", "er/sie/es": "stieg", wir: "stiegen", ihr: "stiegt", "sie/Sie": "stiegen" },
        example: "Die Preise steigen.",
        lesson: null
    },
    {
        id: "sinken",
        infinitiv: "sinken",
        translation: "опускатися, тонути",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "sinke", du: "sinkst", "er/sie/es": "sinkt", wir: "sinken", ihr: "sinkt", "sie/Sie": "sinken" },
        perfekt: "ist gesunken",
        praeteritum: { ich: "sank", du: "sankst", "er/sie/es": "sank", wir: "sanken", ihr: "sankt", "sie/Sie": "sanken" },
        example: "Das Schiff sinkt.",
        lesson: null
    },
    {
        id: "stuerzen",
        infinitiv: "stürzen",
        translation: "падати, зриватися",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "stürze", du: "stürzt", "er/sie/es": "stürzt", wir: "stürzen", ihr: "stürzt", "sie/Sie": "stürzen" },
        perfekt: "ist gestürzt",
        praeteritum: { ich: "stürzte", du: "stürztest", "er/sie/es": "stürzte", wir: "stürzten", ihr: "stürztet", "sie/Sie": "stürzten" },
        example: "Er ist vom Fahrrad gestürzt.",
        lesson: null
    },
    {
        id: "einschlafen",
        infinitiv: "einschlafen",
        translation: "засинати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "schlafe ein", du: "schläfst ein", "er/sie/es": "schläft ein", wir: "schlafen ein", ihr: "schlaft ein", "sie/Sie": "schlafen ein" },
        perfekt: "ist eingeschlafen",
        praeteritum: { ich: "schlief ein", du: "schliefst ein", "er/sie/es": "schlief ein", wir: "schliefen ein", ihr: "schlieft ein", "sie/Sie": "schliefen ein" },
        example: "Ich schlafe schnell ein.",
        lesson: null
    },
    {
        id: "einsteigen",
        infinitiv: "einsteigen",
        translation: "сісти (у транспорт)",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "steige ein", du: "steigst ein", "er/sie/es": "steigt ein", wir: "steigen ein", ihr: "steigt ein", "sie/Sie": "steigen ein" },
        perfekt: "ist eingestiegen",
        praeteritum: { ich: "stieg ein", du: "stiegst ein", "er/sie/es": "stieg ein", wir: "stiegen ein", ihr: "stiegt ein", "sie/Sie": "stiegen ein" },
        example: "Bitte einsteigen!",
        lesson: null
    },
    {
        id: "aussteigen",
        infinitiv: "aussteigen",
        translation: "вийти (з транспорту)",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "steige aus", du: "steigst aus", "er/sie/es": "steigt aus", wir: "steigen aus", ihr: "steigt aus", "sie/Sie": "steigen aus" },
        perfekt: "ist ausgestiegen",
        praeteritum: { ich: "stieg aus", du: "stiegst aus", "er/sie/es": "stieg aus", wir: "stiegen aus", ihr: "stiegt aus", "sie/Sie": "stiegen aus" },
        example: "Ich steige am Hauptbahnhof aus.",
        lesson: null
    },
    {
        id: "einladen",
        infinitiv: "einladen",
        translation: "запрошувати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "lade ein", du: "lädst ein", "er/sie/es": "lädt ein", wir: "laden ein", ihr: "ladet ein", "sie/Sie": "laden ein" },
        perfekt: "hat eingeladen",
        praeteritum: { ich: "lud ein", du: "ludst ein", "er/sie/es": "lud ein", wir: "luden ein", ihr: "ludet ein", "sie/Sie": "luden ein" },
        example: "Ich lade dich zur Party ein.",
        lesson: null
    },
    {
        id: "chatten",
        infinitiv: "chatten",
        translation: "листуватися в чаті",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "chatte", du: "chattest", "er/sie/es": "chattet", wir: "chatten", ihr: "chattet", "sie/Sie": "chatten" },
        perfekt: "hat gechattet",
        praeteritum: { ich: "chattete", du: "chattetest", "er/sie/es": "chattete", wir: "chatteten", ihr: "chattetet", "sie/Sie": "chatteten" },
        example: "Ich chatte mit Freunden.",
        lesson: null
    },
    {
        id: "skilaufen",
        infinitiv: "Ski laufen",
        translation: "ходити на лижах",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "laufe Ski", du: "läufst Ski", "er/sie/es": "läuft Ski", wir: "laufen Ski", ihr: "lauft Ski", "sie/Sie": "laufen Ski" },
        perfekt: "ist Ski gelaufen",
        praeteritum: { ich: "lief Ski", du: "liefst Ski", "er/sie/es": "lief Ski", wir: "liefen Ski", ihr: "lieft Ski", "sie/Sie": "liefen Ski" },
        example: "Im Winter laufen wir Ski.",
        lesson: null
    },

    // ==========================================
    // НОВІ ДІЄСЛОВА - РОБОТА ТА ПОСЛУГИ
    // ==========================================
    {
        id: "reparieren",
        infinitiv: "reparieren",
        translation: "ремонтувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "repariere", du: "reparierst", "er/sie/es": "repariert", wir: "reparieren", ihr: "repariert", "sie/Sie": "reparieren" },
        perfekt: "hat repariert",
        praeteritum: { ich: "reparierte", du: "repariertest", "er/sie/es": "reparierte", wir: "reparierten", ihr: "repariertet", "sie/Sie": "reparierten" },
        example: "Er repariert das Auto.",
        lesson: null
    },
    {
        id: "naehen",
        infinitiv: "nähen",
        translation: "шити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "nähe", du: "nähst", "er/sie/es": "näht", wir: "nähen", ihr: "näht", "sie/Sie": "nähen" },
        perfekt: "hat genäht",
        praeteritum: { ich: "nähte", du: "nähtest", "er/sie/es": "nähte", wir: "nähten", ihr: "nähtet", "sie/Sie": "nähten" },
        example: "Sie näht ein Kleid.",
        lesson: null
    },
    {
        id: "drucken",
        infinitiv: "drucken",
        translation: "друкувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "drucke", du: "druckst", "er/sie/es": "druckt", wir: "drucken", ihr: "druckt", "sie/Sie": "drucken" },
        perfekt: "hat gedruckt",
        praeteritum: { ich: "druckte", du: "drucktest", "er/sie/es": "druckte", wir: "druckten", ihr: "drucktet", "sie/Sie": "druckten" },
        example: "Ich drucke das Dokument.",
        lesson: null
    },
    {
        id: "kopieren",
        infinitiv: "kopieren",
        translation: "копіювати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "kopiere", du: "kopierst", "er/sie/es": "kopiert", wir: "kopieren", ihr: "kopiert", "sie/Sie": "kopieren" },
        perfekt: "hat kopiert",
        praeteritum: { ich: "kopierte", du: "kopiertest", "er/sie/es": "kopierte", wir: "kopierten", ihr: "kopiertet", "sie/Sie": "kopierten" },
        example: "Kopieren Sie bitte diese Seite.",
        lesson: null
    },
    {
        id: "vorbereiten",
        infinitiv: "vorbereiten",
        translation: "готувати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "bereite vor", du: "bereitest vor", "er/sie/es": "bereitet vor", wir: "bereiten vor", ihr: "bereitet vor", "sie/Sie": "bereiten vor" },
        perfekt: "hat vorbereitet",
        praeteritum: { ich: "bereitete vor", du: "bereitetest vor", "er/sie/es": "bereitete vor", wir: "bereiteten vor", ihr: "bereitetet vor", "sie/Sie": "bereiteten vor" },
        example: "Ich bereite das Essen vor.",
        lesson: null
    },
    {
        id: "empfehlen",
        infinitiv: "empfehlen",
        translation: "рекомендувати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "empfehle", du: "empfiehlst", "er/sie/es": "empfiehlt", wir: "empfehlen", ihr: "empfehlt", "sie/Sie": "empfehlen" },
        perfekt: "hat empfohlen",
        praeteritum: { ich: "empfahl", du: "empfahlst", "er/sie/es": "empfahl", wir: "empfahlen", ihr: "empfahlt", "sie/Sie": "empfahlen" },
        example: "Ich empfehle dieses Restaurant.",
        lesson: null
    },
    {
        id: "reservieren",
        infinitiv: "reservieren",
        translation: "резервувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "reserviere", du: "reservierst", "er/sie/es": "reserviert", wir: "reservieren", ihr: "reserviert", "sie/Sie": "reservieren" },
        perfekt: "hat reserviert",
        praeteritum: { ich: "reservierte", du: "reserviertest", "er/sie/es": "reservierte", wir: "reservierten", ihr: "reserviertet", "sie/Sie": "reservierten" },
        example: "Ich möchte einen Tisch reservieren.",
        lesson: null
    },
    {
        id: "druecken",
        infinitiv: "drücken",
        translation: "натискати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "drücke", du: "drückst", "er/sie/es": "drückt", wir: "drücken", ihr: "drückt", "sie/Sie": "drücken" },
        perfekt: "hat gedrückt",
        praeteritum: { ich: "drückte", du: "drücktest", "er/sie/es": "drückte", wir: "drückten", ihr: "drücktet", "sie/Sie": "drückten" },
        example: "Drücken Sie den Knopf.",
        lesson: null
    },
    {
        id: "verbinden",
        infinitiv: "verbinden",
        translation: "з'єднувати, конектити",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "verbinde", du: "verbindest", "er/sie/es": "verbindet", wir: "verbinden", ihr: "verbindet", "sie/Sie": "verbinden" },
        perfekt: "hat verbunden",
        praeteritum: { ich: "verband", du: "verbandest", "er/sie/es": "verband", wir: "verbanden", ihr: "verbandet", "sie/Sie": "verbanden" },
        example: "Ich verbinde Sie mit dem Chef.",
        lesson: null
    },
    {
        id: "hinterlassen",
        infinitiv: "hinterlassen",
        translation: "залишати (повідомлення)",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "hinterlasse", du: "hinterlässt", "er/sie/es": "hinterlässt", wir: "hinterlassen", ihr: "hinterlasst", "sie/Sie": "hinterlassen" },
        perfekt: "hat hinterlassen",
        praeteritum: { ich: "hinterließ", du: "hinterließest", "er/sie/es": "hinterließ", wir: "hinterließen", ihr: "hinterließt", "sie/Sie": "hinterließen" },
        example: "Möchten Sie eine Nachricht hinterlassen?",
        lesson: null
    },
    {
        id: "zurueckrufen",
        infinitiv: "zurückrufen",
        translation: "передзвонювати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "rufe zurück", du: "rufst zurück", "er/sie/es": "ruft zurück", wir: "rufen zurück", ihr: "ruft zurück", "sie/Sie": "rufen zurück" },
        perfekt: "hat zurückgerufen",
        praeteritum: { ich: "rief zurück", du: "riefst zurück", "er/sie/es": "rief zurück", wir: "riefen zurück", ihr: "rieft zurück", "sie/Sie": "riefen zurück" },
        example: "Ich rufe Sie später zurück.",
        lesson: null
    },
    {
        id: "ansehen",
        infinitiv: "ansehen",
        translation: "дивитися на",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "sehe an", du: "siehst an", "er/sie/es": "sieht an", wir: "sehen an", ihr: "seht an", "sie/Sie": "sehen an" },
        perfekt: "hat angesehen",
        praeteritum: { ich: "sah an", du: "sahst an", "er/sie/es": "sah an", wir: "sahen an", ihr: "saht an", "sie/Sie": "sahen an" },
        example: "Ich sehe mir den Film an.",
        lesson: null
    },
    {
        id: "bestellen",
        infinitiv: "bestellen",
        translation: "замовляти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "bestelle", du: "bestellst", "er/sie/es": "bestellt", wir: "bestellen", ihr: "bestellt", "sie/Sie": "bestellen" },
        perfekt: "hat bestellt",
        praeteritum: { ich: "bestellte", du: "bestelltest", "er/sie/es": "bestellte", wir: "bestellten", ihr: "bestelltet", "sie/Sie": "bestellten" },
        example: "Ich bestelle eine Pizza.",
        lesson: null
    },
    {
        id: "anbieten",
        infinitiv: "anbieten",
        translation: "пропонувати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "biete an", du: "bietest an", "er/sie/es": "bietet an", wir: "bieten an", ihr: "bietet an", "sie/Sie": "bieten an" },
        perfekt: "hat angeboten",
        praeteritum: { ich: "bot an", du: "botest an", "er/sie/es": "bot an", wir: "boten an", ihr: "botet an", "sie/Sie": "boten an" },
        example: "Kann ich Ihnen etwas anbieten?",
        lesson: null
    },
    {
        id: "ziehen",
        infinitiv: "ziehen",
        translation: "тягнути",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "ziehe", du: "ziehst", "er/sie/es": "zieht", wir: "ziehen", ihr: "zieht", "sie/Sie": "ziehen" },
        perfekt: "hat gezogen",
        praeteritum: { ich: "zog", du: "zogst", "er/sie/es": "zog", wir: "zogen", ihr: "zogt", "sie/Sie": "zogen" },
        example: "Ziehen Sie die Tür!",
        lesson: null
    },
    {
        id: "aufraumen",
        infinitiv: "aufräumen",
        translation: "наводити лад",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "räume auf", du: "räumst auf", "er/sie/es": "räumt auf", wir: "räumen auf", ihr: "räumt auf", "sie/Sie": "räumen auf" },
        perfekt: "hat aufgeräumt",
        praeteritum: { ich: "räumte auf", du: "räumtest auf", "er/sie/es": "räumte auf", wir: "räumten auf", ihr: "räumtet auf", "sie/Sie": "räumten auf" },
        example: "Ich räume mein Zimmer auf.",
        lesson: null
    },
    {
        id: "rufen",
        infinitiv: "rufen",
        translation: "кликати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "rufe", du: "rufst", "er/sie/es": "ruft", wir: "rufen", ihr: "ruft", "sie/Sie": "rufen" },
        perfekt: "hat gerufen",
        praeteritum: { ich: "rief", du: "riefst", "er/sie/es": "rief", wir: "riefen", ihr: "rieft", "sie/Sie": "riefen" },
        example: "Sie ruft den Arzt.",
        lesson: null
    },
    {
        id: "liegen",
        infinitiv: "liegen",
        translation: "лежати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "liege", du: "liegst", "er/sie/es": "liegt", wir: "liegen", ihr: "liegt", "sie/Sie": "liegen" },
        perfekt: "hat gelegen",
        praeteritum: { ich: "lag", du: "lagst", "er/sie/es": "lag", wir: "lagen", ihr: "lagt", "sie/Sie": "lagen" },
        example: "Das Buch liegt auf dem Tisch.",
        lesson: null
    },
    {
        id: "sitzen",
        infinitiv: "sitzen",
        translation: "сидіти",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "sitze", du: "sitzt", "er/sie/es": "sitzt", wir: "sitzen", ihr: "sitzt", "sie/Sie": "sitzen" },
        perfekt: "hat gesessen",
        praeteritum: { ich: "saß", du: "saßest", "er/sie/es": "saß", wir: "saßen", ihr: "saßt", "sie/Sie": "saßen" },
        example: "Ich sitze auf dem Sofa.",
        lesson: null
    },
    {
        id: "legen",
        infinitiv: "legen",
        translation: "класти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "lege", du: "legst", "er/sie/es": "legt", wir: "legen", ihr: "legt", "sie/Sie": "legen" },
        perfekt: "hat gelegt",
        praeteritum: { ich: "legte", du: "legtest", "er/sie/es": "legte", wir: "legten", ihr: "legtet", "sie/Sie": "legten" },
        example: "Leg das Buch auf den Tisch!",
        lesson: null
    },
    {
        id: "setzen",
        infinitiv: "setzen",
        translation: "садити, ставити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "setze", du: "setzt", "er/sie/es": "setzt", wir: "setzen", ihr: "setzt", "sie/Sie": "setzen" },
        perfekt: "hat gesetzt",
        praeteritum: { ich: "setzte", du: "setztest", "er/sie/es": "setzte", wir: "setzten", ihr: "setztet", "sie/Sie": "setzten" },
        example: "Setzen Sie sich bitte!",
        lesson: null
    },
    {
        id: "haengen",
        infinitiv: "hängen",
        translation: "висіти",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "hänge", du: "hängst", "er/sie/es": "hängt", wir: "hängen", ihr: "hängt", "sie/Sie": "hängen" },
        perfekt: "hat gehangen",
        praeteritum: { ich: "hing", du: "hingst", "er/sie/es": "hing", wir: "hingen", ihr: "hingt", "sie/Sie": "hingen" },
        example: "Das Bild hängt an der Wand.",
        lesson: null
    },
    {
        id: "zeigen",
        infinitiv: "zeigen",
        translation: "показувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "zeige", du: "zeigst", "er/sie/es": "zeigt", wir: "zeigen", ihr: "zeigt", "sie/Sie": "zeigen" },
        perfekt: "hat gezeigt",
        praeteritum: { ich: "zeigte", du: "zeigtest", "er/sie/es": "zeigte", wir: "zeigten", ihr: "zeigtet", "sie/Sie": "zeigten" },
        example: "Zeigen Sie mir bitte!",
        lesson: null
    },
    {
        id: "warten",
        infinitiv: "warten",
        translation: "чекати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "warte", du: "wartest", "er/sie/es": "wartet", wir: "warten", ihr: "wartet", "sie/Sie": "warten" },
        perfekt: "hat gewartet",
        praeteritum: { ich: "wartete", du: "wartetest", "er/sie/es": "wartete", wir: "warteten", ihr: "wartetet", "sie/Sie": "warteten" },
        example: "Warten Sie bitte!",
        lesson: null
    },
    {
        id: "besuchen",
        infinitiv: "besuchen",
        translation: "відвідувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "besuche", du: "besuchst", "er/sie/es": "besucht", wir: "besuchen", ihr: "besucht", "sie/Sie": "besuchen" },
        perfekt: "hat besucht",
        praeteritum: { ich: "besuchte", du: "besuchtest", "er/sie/es": "besuchte", wir: "besuchten", ihr: "besuchtet", "sie/Sie": "besuchten" },
        example: "Ich besuche meine Großeltern.",
        lesson: null
    },
    {
        id: "dauern",
        infinitiv: "dauern",
        translation: "тривати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "dauere", du: "dauerst", "er/sie/es": "dauert", wir: "dauern", ihr: "dauert", "sie/Sie": "dauern" },
        perfekt: "hat gedauert",
        praeteritum: { ich: "dauerte", du: "dauertest", "er/sie/es": "dauerte", wir: "dauerten", ihr: "dauertet", "sie/Sie": "dauerten" },
        example: "Der Film dauert zwei Stunden.",
        lesson: null
    },
    {
        id: "vergessen",
        infinitiv: "vergessen",
        translation: "забувати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "vergesse", du: "vergisst", "er/sie/es": "vergisst", wir: "vergessen", ihr: "vergesst", "sie/Sie": "vergessen" },
        perfekt: "hat vergessen",
        praeteritum: { ich: "vergaß", du: "vergaßest", "er/sie/es": "vergaß", wir: "vergaßen", ihr: "vergaßt", "sie/Sie": "vergaßen" },
        example: "Ich vergesse nie meine Schlüssel.",
        lesson: null
    },
    {
        id: "erinnern",
        infinitiv: "erinnern",
        translation: "нагадувати, пам'ятати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "erinnere", du: "erinnerst", "er/sie/es": "erinnert", wir: "erinnern", ihr: "erinnert", "sie/Sie": "erinnern" },
        perfekt: "hat erinnert",
        praeteritum: { ich: "erinnerte", du: "erinnertest", "er/sie/es": "erinnerte", wir: "erinnerten", ihr: "erinnertet", "sie/Sie": "erinnerten" },
        example: "Erinnerst du dich an mich?",
        lesson: null
    },
    {
        id: "hoffen",
        infinitiv: "hoffen",
        translation: "сподіватися",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "hoffe", du: "hoffst", "er/sie/es": "hofft", wir: "hoffen", ihr: "hofft", "sie/Sie": "hoffen" },
        perfekt: "hat gehofft",
        praeteritum: { ich: "hoffte", du: "hofftest", "er/sie/es": "hoffte", wir: "hofften", ihr: "hofftet", "sie/Sie": "hofften" },
        example: "Ich hoffe, dass alles gut wird.",
        lesson: null
    },
    {
        id: "freuen",
        infinitiv: "freuen",
        translation: "радіти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "freue", du: "freust", "er/sie/es": "freut", wir: "freuen", ihr: "freut", "sie/Sie": "freuen" },
        perfekt: "hat gefreut",
        praeteritum: { ich: "freute", du: "freutest", "er/sie/es": "freute", wir: "freuten", ihr: "freutet", "sie/Sie": "freuten" },
        example: "Ich freue mich auf dich!",
        lesson: null
    },
    {
        id: "aergern",
        infinitiv: "ärgern",
        translation: "дратувати, злити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "ärgere", du: "ärgerst", "er/sie/es": "ärgert", wir: "ärgern", ihr: "ärgert", "sie/Sie": "ärgern" },
        perfekt: "hat geärgert",
        praeteritum: { ich: "ärgerte", du: "ärgertest", "er/sie/es": "ärgerte", wir: "ärgerten", ihr: "ärgertet", "sie/Sie": "ärgerten" },
        example: "Das ärgert mich!",
        lesson: null
    },
    {
        id: "langweilen",
        infinitiv: "langweilen",
        translation: "нудьгувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "langweile", du: "langweilst", "er/sie/es": "langweilt", wir: "langweilen", ihr: "langweilt", "sie/Sie": "langweilen" },
        perfekt: "hat gelangweilt",
        praeteritum: { ich: "langweilte", du: "langweiltest", "er/sie/es": "langweilte", wir: "langweilten", ihr: "langweiltet", "sie/Sie": "langweilten" },
        example: "Ich langweile mich nie.",
        lesson: null
    },
    {
        id: "abgeben",
        infinitiv: "abgeben",
        translation: "здавати, віддавати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "gebe ab", du: "gibst ab", "er/sie/es": "gibt ab", wir: "geben ab", ihr: "gebt ab", "sie/Sie": "geben ab" },
        perfekt: "hat abgegeben",
        praeteritum: { ich: "gab ab", du: "gabst ab", "er/sie/es": "gab ab", wir: "gaben ab", ihr: "gabt ab", "sie/Sie": "gaben ab" },
        example: "Ich gebe die Hausaufgabe ab.",
        lesson: null
    },
    {
        id: "ausgeben",
        infinitiv: "ausgeben",
        translation: "витрачати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "gebe aus", du: "gibst aus", "er/sie/es": "gibt aus", wir: "geben aus", ihr: "gebt aus", "sie/Sie": "geben aus" },
        perfekt: "hat ausgegeben",
        praeteritum: { ich: "gab aus", du: "gabst aus", "er/sie/es": "gab aus", wir: "gaben aus", ihr: "gabt aus", "sie/Sie": "gaben aus" },
        example: "Ich gebe viel Geld aus.",
        lesson: null
    },
    // ==========================================
    // НОВІ ДІЄСЛОВА - ЕМОЦІЇ ТА СПІЛКУВАННЯ
    // ==========================================
    {
        id: "lieben",
        infinitiv: "lieben",
        translation: "любити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "liebe", du: "liebst", "er/sie/es": "liebt", wir: "lieben", ihr: "liebt", "sie/Sie": "lieben" },
        perfekt: "hat geliebt",
        praeteritum: { ich: "liebte", du: "liebtest", "er/sie/es": "liebte", wir: "liebten", ihr: "liebtet", "sie/Sie": "liebten" },
        example: "Ich liebe dich.",
        lesson: null
    },
    {
        id: "hassen",
        infinitiv: "hassen",
        translation: "ненавидіти",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "hasse", du: "hasst", "er/sie/es": "hasst", wir: "hassen", ihr: "hasst", "sie/Sie": "hassen" },
        perfekt: "hat gehasst",
        praeteritum: { ich: "hasste", du: "hasstest", "er/sie/es": "hasste", wir: "hassten", ihr: "hasstet", "sie/Sie": "hassten" },
        example: "Ich hasse Regen.",
        lesson: null
    },
    {
        id: "lachen",
        infinitiv: "lachen",
        translation: "сміятися",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "lache", du: "lachst", "er/sie/es": "lacht", wir: "lachen", ihr: "lacht", "sie/Sie": "lachen" },
        perfekt: "hat gelacht",
        praeteritum: { ich: "lachte", du: "lachtest", "er/sie/es": "lachte", wir: "lachten", ihr: "lachtet", "sie/Sie": "lachten" },
        example: "Wir lachen viel.",
        lesson: null
    },
    {
        id: "weinen",
        infinitiv: "weinen",
        translation: "плакати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "weine", du: "weinst", "er/sie/es": "weint", wir: "weinen", ihr: "weint", "sie/Sie": "weinen" },
        perfekt: "hat geweint",
        praeteritum: { ich: "weinte", du: "weintest", "er/sie/es": "weinte", wir: "weinten", ihr: "weintet", "sie/Sie": "weinten" },
        example: "Warum weinst du?",
        lesson: null
    },
    {
        id: "erzaehlen",
        infinitiv: "erzählen",
        translation: "розповідати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "erzähle", du: "erzählst", "er/sie/es": "erzählt", wir: "erzählen", ihr: "erzählt", "sie/Sie": "erzählen" },
        perfekt: "hat erzählt",
        praeteritum: { ich: "erzählte", du: "erzähltest", "er/sie/es": "erzählte", wir: "erzählten", ihr: "erzähltet", "sie/Sie": "erzählten" },
        example: "Erzähl mir was!",
        lesson: null
    },
    {
        id: "erklaeren",
        infinitiv: "erklären",
        translation: "пояснювати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "erkläre", du: "erklärst", "er/sie/es": "erklärt", wir: "erklären", ihr: "erklärt", "sie/Sie": "erklären" },
        perfekt: "hat erklärt",
        praeteritum: { ich: "erklärte", du: "erklärtest", "er/sie/es": "erklärte", wir: "erklärten", ihr: "erklärtet", "sie/Sie": "erklärten" },
        example: "Kannst du das erklären?",
        lesson: null
    },
    {
        id: "wiederholen",
        infinitiv: "wiederholen",
        translation: "повторювати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "wiederhole", du: "wiederholst", "er/sie/es": "wiederholt", wir: "wiederholen", ihr: "wiederholt", "sie/Sie": "wiederholen" },
        perfekt: "hat wiederholt",
        praeteritum: { ich: "wiederholte", du: "wiederholtest", "er/sie/es": "wiederholte", wir: "wiederholten", ihr: "wiederholtet", "sie/Sie": "wiederholten" },
        example: "Wiederholen Sie bitte!",
        lesson: null
    },
    {
        id: "glauben",
        infinitiv: "glauben",
        translation: "вірити, вважати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "glaube", du: "glaubst", "er/sie/es": "glaubt", wir: "glauben", ihr: "glaubt", "sie/Sie": "glauben" },
        perfekt: "hat geglaubt",
        praeteritum: { ich: "glaubte", du: "glaubtest", "er/sie/es": "glaubte", wir: "glaubten", ihr: "glaubtet", "sie/Sie": "glaubten" },
        example: "Ich glaube dir.",
        lesson: null
    },
    {
        id: "wuenschen",
        infinitiv: "wünschen",
        translation: "бажати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "wünsche", du: "wünschst", "er/sie/es": "wünscht", wir: "wünschen", ihr: "wünscht", "sie/Sie": "wünschen" },
        perfekt: "hat gewünscht",
        praeteritum: { ich: "wünschte", du: "wünschtest", "er/sie/es": "wünschte", wir: "wünschten", ihr: "wünschtet", "sie/Sie": "wünschten" },
        example: "Ich wünsche dir alles Gute.",
        lesson: null
    },
    {
        id: "kennen",
        infinitiv: "kennen",
        translation: "знати (когось)",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "kenne", du: "kennst", "er/sie/es": "kennt", wir: "kennen", ihr: "kennt", "sie/Sie": "kennen" },
        perfekt: "hat gekannt",
        praeteritum: { ich: "kannte", du: "kanntest", "er/sie/es": "kannte", wir: "kannten", ihr: "kanntet", "sie/Sie": "kannten" },
        example: "Ich kenne ihn gut.",
        lesson: null
    },
    {
        id: "danken",
        infinitiv: "danken",
        translation: "дякувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "danke", du: "dankst", "er/sie/es": "dankt", wir: "danken", ihr: "dankt", "sie/Sie": "danken" },
        perfekt: "hat gedankt",
        praeteritum: { ich: "dankte", du: "danktest", "er/sie/es": "dankte", wir: "dankten", ihr: "danktet", "sie/Sie": "dankten" },
        example: "Ich danke Ihnen.",
        lesson: null
    },
    {
        id: "entschuldigen",
        infinitiv: "entschuldigen",
        translation: "вибачатися",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "entschuldige", du: "entschuldigst", "er/sie/es": "entschuldigt", wir: "entschuldigen", ihr: "entschuldigt", "sie/Sie": "entschuldigen" },
        perfekt: "hat entschuldigt",
        praeteritum: { ich: "entschuldigte", du: "entschuldigtest", "er/sie/es": "entschuldigte", wir: "entschuldigten", ihr: "entschuldigtet", "sie/Sie": "entschuldigten" },
        example: "Entschuldigen Sie bitte.",
        lesson: null
    },
    {
        id: "gratulieren",
        infinitiv: "gratulieren",
        translation: "вітати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "gratuliere", du: "gratulierst", "er/sie/es": "gratuliert", wir: "gratulieren", ihr: "gratuliert", "sie/Sie": "gratulieren" },
        perfekt: "hat gratuliert",
        praeteritum: { ich: "gratulierte", du: "gratuliertest", "er/sie/es": "gratulierte", wir: "gratulierten", ihr: "gratuliertet", "sie/Sie": "gratulierten" },
        example: "Ich gratuliere dir zum Geburtstag.",
        lesson: null
    },
    {
        id: "feiern",
        infinitiv: "feiern",
        translation: "святкувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "feiere", du: "feierst", "er/sie/es": "feiert", wir: "feiern", ihr: "feiert", "sie/Sie": "feiern" },
        perfekt: "hat gefeiert",
        praeteritum: { ich: "feierte", du: "feiertest", "er/sie/es": "feierte", wir: "feierten", ihr: "feiertet", "sie/Sie": "feierten" },
        example: "Wir feiern heute.",
        lesson: null
    },
    {
        id: "passieren",
        infinitiv: "passieren",
        translation: "траплятися",
        type: "regular",
        auxiliary: "sein",
        praesens: { ich: "passiere", du: "passierst", "er/sie/es": "passiert", wir: "passieren", ihr: "passiert", "sie/Sie": "passieren" },
        perfekt: "ist passiert",
        praeteritum: { ich: "passierte", du: "passiertest", "er/sie/es": "passierte", wir: "passierten", ihr: "passiertet", "sie/Sie": "passierten" },
        example: "Was ist passiert?",
        lesson: null
    },
    {
        id: "gehoeren",
        infinitiv: "gehören",
        translation: "належати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "gehöre", du: "gehörst", "er/sie/es": "gehört", wir: "gehören", ihr: "gehört", "sie/Sie": "gehören" },
        perfekt: "hat gehört",
        praeteritum: { ich: "gehörte", du: "gehörtest", "er/sie/es": "gehörte", wir: "gehörten", ihr: "gehörtet", "sie/Sie": "gehörten" },
        example: "Das Buch gehört mir.",
        lesson: null
    },

    // ==========================================
    // НОВІ ДІЄСЛОВА - ПОБУТ ТА ОДЯГ
    // ==========================================
    {
        id: "anziehen",
        infinitiv: "anziehen",
        translation: "одягати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "ziehe an", du: "ziehst an", "er/sie/es": "zieht an", wir: "ziehen an", ihr: "zieht an", "sie/Sie": "ziehen an" },
        perfekt: "hat angezogen",
        praeteritum: { ich: "zog an", du: "zogst an", "er/sie/es": "zog an", wir: "zogen an", ihr: "zogt an", "sie/Sie": "zogen an" },
        example: "Ich ziehe den Mantel an.",
        lesson: null
    },
    {
        id: "ausziehen",
        infinitiv: "ausziehen",
        translation: "роздягати, знімати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "ziehe aus", du: "ziehst aus", "er/sie/es": "zieht aus", wir: "ziehen aus", ihr: "zieht aus", "sie/Sie": "ziehen aus" },
        perfekt: "hat ausgezogen",
        praeteritum: { ich: "zog aus", du: "zogst aus", "er/sie/es": "zog aus", wir: "zogen aus", ihr: "zogt aus", "sie/Sie": "zogen aus" },
        example: "Er zieht die Schuhe aus.",
        lesson: null
    },
    {
        id: "umziehen",
        infinitiv: "umziehen",
        translation: "переодягати, переїжджати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "ziehe um", du: "ziehst um", "er/sie/es": "zieht um", wir: "ziehen um", ihr: "zieht um", "sie/Sie": "ziehen um" },
        perfekt: "ist umgezogen",
        praeteritum: { ich: "zog um", du: "zogst um", "er/sie/es": "zog um", wir: "zogen um", ihr: "zogt um", "sie/Sie": "zogen um" },
        example: "Wir ziehen nach Berlin um.",
        lesson: null
    },
    {
        id: "duschen",
        infinitiv: "duschen",
        translation: "приймати душ",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "dusche", du: "duschst", "er/sie/es": "duscht", wir: "duschen", ihr: "duscht", "sie/Sie": "duschen" },
        perfekt: "hat geduscht",
        praeteritum: { ich: "duschte", du: "duschtest", "er/sie/es": "duschte", wir: "duschten", ihr: "duschtet", "sie/Sie": "duschten" },
        example: "Ich dusche jeden Morgen.",
        lesson: null
    },
    {
        id: "baden",
        infinitiv: "baden",
        translation: "купатися, приймати ванну",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "bade", du: "badest", "er/sie/es": "badet", wir: "baden", ihr: "badet", "sie/Sie": "baden" },
        perfekt: "hat gebadet",
        praeteritum: { ich: "badete", du: "badetest", "er/sie/es": "badete", wir: "badeten", ihr: "badetet", "sie/Sie": "badeten" },
        example: "Das Kind badet gern.",
        lesson: null
    },
    {
        id: "rasieren",
        infinitiv: "rasieren",
        translation: "голити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "rasiere", du: "rasierst", "er/sie/es": "rasiert", wir: "rasieren", ihr: "rasiert", "sie/Sie": "rasieren" },
        perfekt: "hat rasiert",
        praeteritum: { ich: "rasierte", du: "rasiertest", "er/sie/es": "rasierte", wir: "rasierten", ihr: "rasiertet", "sie/Sie": "rasierten" },
        example: "Er rasiert sich.",
        lesson: null
    },
    {
        id: "schminken",
        infinitiv: "schminken",
        translation: "фарбуватися",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schminke", du: "schminkst", "er/sie/es": "schminkt", wir: "schminken", ihr: "schminkt", "sie/Sie": "schminken" },
        perfekt: "hat geschminkt",
        praeteritum: { ich: "schminkte", du: "schminktest", "er/sie/es": "schminkte", wir: "schminkten", ihr: "schminktet", "sie/Sie": "schminkten" },
        example: "Sie schminkt sich dezent.",
        lesson: null
    },

    // ==========================================
    // НОВІ ДІЄСЛОВА - ІНШЕ
    // ==========================================
    {
        id: "verkaufen",
        infinitiv: "verkaufen",
        translation: "продавати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "verkaufe", du: "verkaufst", "er/sie/es": "verkauft", wir: "verkaufen", ihr: "verkauft", "sie/Sie": "verkaufen" },
        perfekt: "hat verkauft",
        praeteritum: { ich: "verkaufte", du: "verkauftest", "er/sie/es": "verkaufte", wir: "verkauften", ihr: "verkauftet", "sie/Sie": "verkauften" },
        example: "Er verkauft sein Auto.",
        lesson: null
    },
    {
        id: "gewinnen",
        infinitiv: "gewinnen",
        translation: "вигравати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "gewinne", du: "gewinnst", "er/sie/es": "gewinnt", wir: "gewinnen", ihr: "gewinnt", "sie/Sie": "gewinnen" },
        perfekt: "hat gewonnen",
        praeteritum: { ich: "gewann", du: "gewannst", "er/sie/es": "gewann", wir: "gewannen", ihr: "gewannt", "sie/Sie": "gewannen" },
        example: "Wir haben das Spiel gewonnen.",
        lesson: null
    },
    {
        id: "verlieren",
        infinitiv: "verlieren",
        translation: "губити, програвати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "verliere", du: "verlierst", "er/sie/es": "verliert", wir: "verlieren", ihr: "verliert", "sie/Sie": "verlieren" },
        perfekt: "hat verloren",
        praeteritum: { ich: "verlor", du: "verlorst", "er/sie/es": "verlor", wir: "verloren", ihr: "verlort", "sie/Sie": "verloren" },
        example: "Ich habe meinen Schlüssel verloren.",
        lesson: null
    },
    {
        id: "versuchen",
        infinitiv: "versuchen",
        translation: "спробувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "versuche", du: "versuchst", "er/sie/es": "versucht", wir: "versuchen", ihr: "versucht", "sie/Sie": "versuchen" },
        perfekt: "hat versucht",
        praeteritum: { ich: "versuchte", du: "versuchtest", "er/sie/es": "versuchte", wir: "versuchten", ihr: "versuchtet", "sie/Sie": "versuchten" },
        example: "Ich versuche es noch einmal.",
        lesson: null
    },
    {
        id: "benutzen",
        infinitiv: "benutzen",
        translation: "використовувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "benutze", du: "benutzt", "er/sie/es": "benutzt", wir: "benutzen", ihr: "benutzt", "sie/Sie": "benutzen" },
        perfekt: "hat benutzt",
        praeteritum: { ich: "benutzte", du: "benutztest", "er/sie/es": "benutzte", wir: "benutzten", ihr: "benutztet", "sie/Sie": "benutzten" },
        example: "Darf ich dein Telefon benutzen?",
        lesson: null
    },
    {
        id: "schauen",
        infinitiv: "schauen",
        translation: "дивитися",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schaue", du: "schaust", "er/sie/es": "schaut", wir: "schauen", ihr: "schaut", "sie/Sie": "schauen" },
        perfekt: "hat geschaut",
        praeteritum: { ich: "schaute", du: "schautest", "er/sie/es": "schaute", wir: "schauten", ihr: "schautet", "sie/Sie": "schauten" },
        example: "Schau mal!",
        lesson: null
    },
    {
        id: "zuhoeren",
        infinitiv: "zuhören",
        translation: "слухати (уважно)",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "höre zu", du: "hörst zu", "er/sie/es": "hört zu", wir: "hören zu", ihr: "hört zu", "sie/Sie": "hören zu" },
        perfekt: "hat zugehört",
        praeteritum: { ich: "hörte zu", du: "hörtest zu", "er/sie/es": "hörte zu", wir: "hörten zu", ihr: "hörtet zu", "sie/Sie": "hörten zu" },
        example: "Hör mir bitte zu!",
        lesson: null
    },
    {
        id: "schmecken",
        infinitiv: "schmecken",
        translation: "смакувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schmecke", du: "schmeckst", "er/sie/es": "schmeckt", wir: "schmecken", ihr: "schmeckt", "sie/Sie": "schmecken" },
        perfekt: "hat geschmeckt",
        praeteritum: { ich: "schmeckte", du: "schmecktest", "er/sie/es": "schmeckte", wir: "schmeckten", ihr: "schmecktet", "sie/Sie": "schmeckten" },
        example: "Das Essen schmeckt gut.",
        lesson: null
    },
    {
        id: "riechen",
        infinitiv: "riechen",
        translation: "нюхати, пахнути",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "rieche", du: "riechst", "er/sie/es": "riecht", wir: "riechen", ihr: "riecht", "sie/Sie": "riechen" },
        perfekt: "hat gerochen",
        praeteritum: { ich: "roch", du: "rochst", "er/sie/es": "roch", wir: "rochen", ihr: "rocht", "sie/Sie": "rochen" },
        example: "Es riecht nach Kaffee.",
        lesson: null
    },
    {
        id: "fuehlen",
        infinitiv: "fühlen",
        translation: "відчувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "fühle", du: "fühlst", "er/sie/es": "fühlt", wir: "fühlen", ihr: "fühlt", "sie/Sie": "fühlen" },
        perfekt: "hat gefühlt",
        praeteritum: { ich: "fühlte", du: "fühltest", "er/sie/es": "fühlte", wir: "fühlten", ihr: "fühltet", "sie/Sie": "fühlten" },
        example: "Ich fühle mich gut.",
        lesson: null
    },
    {
        id: "verdienen",
        infinitiv: "verdienen",
        translation: "заробляти, заслуговувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "verdiene", du: "verdienst", "er/sie/es": "verdient", wir: "verdienen", ihr: "verdient", "sie/Sie": "verdienen" },
        perfekt: "hat verdient",
        praeteritum: { ich: "verdiente", du: "verdientest", "er/sie/es": "verdiente", wir: "verdienten", ihr: "verdientet", "sie/Sie": "verdienten" },
        example: "Er verdient gut.",
        lesson: null
    },
    {
        id: "sparen",
        infinitiv: "sparen",
        translation: "заощаджувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "spare", du: "sparst", "er/sie/es": "spart", wir: "sparen", ihr: "spart", "sie/Sie": "sparen" },
        perfekt: "hat gespart",
        praeteritum: { ich: "sparte", du: "spartest", "er/sie/es": "sparte", wir: "sparten", ihr: "spartet", "sie/Sie": "sparten" },
        example: "Ich spare für ein Auto.",
        lesson: null
    },
    {
        id: "schenken",
        infinitiv: "schenken",
        translation: "дарувати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schenke", du: "schenkst", "er/sie/es": "schenkt", wir: "schenken", ihr: "schenkt", "sie/Sie": "schenken" },
        perfekt: "hat geschenkt",
        praeteritum: { ich: "schenkte", du: "schenktest", "er/sie/es": "schenkte", wir: "schenkten", ihr: "schenktet", "sie/Sie": "schenkten" },
        example: "Ich schenke dir ein Buch.",
        lesson: null
    },
    {
        id: "schicken",
        infinitiv: "schicken",
        translation: "надсилати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "schicke", du: "schickst", "er/sie/es": "schickt", wir: "schicken", ihr: "schickt", "sie/Sie": "schicken" },
        perfekt: "hat geschickt",
        praeteritum: { ich: "schickte", du: "schicktest", "er/sie/es": "schickte", wir: "schickten", ihr: "schicktet", "sie/Sie": "schickten" },
        example: "Ich schicke dir eine E-Mail.",
        lesson: null
    },
    {
        id: "studieren",
        infinitiv: "studieren",
        translation: "навчатися (у ВНЗ)",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "studiere", du: "studierst", "er/sie/es": "studiert", wir: "studieren", ihr: "studiert", "sie/Sie": "studieren" },
        perfekt: "hat studiert",
        praeteritum: { ich: "studierte", du: "studiertest", "er/sie/es": "studierte", wir: "studierten", ihr: "studiertet", "sie/Sie": "studierten" },
        example: "Er studiert Medizin.",
        lesson: null
    },
    {
        id: "fliegen",
        infinitiv: "fliegen",
        translation: "літати",
        type: "irregular",
        auxiliary: "sein",
        praesens: { ich: "fliege", du: "fliegst", "er/sie/es": "fliegt", wir: "fliegen", ihr: "fliegt", "sie/Sie": "fliegen" },
        perfekt: "ist geflogen",
        praeteritum: { ich: "flog", du: "flogst", "er/sie/es": "flog", wir: "flogen", ihr: "flogt", "sie/Sie": "flogen" },
        example: "Wir fliegen nach Spanien.",
        lesson: null
    },
    {
        id: "ankommen",
        infinitiv: "ankommen",
        translation: "прибувати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "komme an", du: "kommst an", "er/sie/es": "kommt an", wir: "kommen an", ihr: "kommt an", "sie/Sie": "kommen an" },
        perfekt: "ist angekommen",
        praeteritum: { ich: "kam an", du: "kamst an", "er/sie/es": "kam an", wir: "kamen an", ihr: "kamt an", "sie/Sie": "kamen an" },
        example: "Der Zug kommt pünktlich an.",
        lesson: null
    },
    {
        id: "abfahren",
        infinitiv: "abfahren",
        translation: "від'їжджати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "fahre ab", du: "fährst ab", "er/sie/es": "fährt ab", wir: "fahren ab", ihr: "fahrt ab", "sie/Sie": "fahren ab" },
        perfekt: "ist abgefahren",
        praeteritum: { ich: "fuhr ab", du: "fuhrst ab", "er/sie/es": "fuhr ab", wir: "fuhren ab", ihr: "fuhrt ab", "sie/Sie": "fuhren ab" },
        example: "Der Bus fährt um 8 Uhr ab.",
        lesson: null
    },
    {
        id: "umsteigen",
        infinitiv: "umsteigen",
        translation: "пересідати",
        type: "trennbar",
        auxiliary: "sein",
        praesens: { ich: "steige um", du: "steigst um", "er/sie/es": "steigt um", wir: "steigen um", ihr: "steigt um", "sie/Sie": "steigen um" },
        perfekt: "ist umgestiegen",
        praeteritum: { ich: "stieg um", du: "stiegst um", "er/sie/es": "stieg um", wir: "stiegen um", ihr: "stiegt um", "sie/Sie": "stiegen um" },
        example: "Wir müssen in Köln umsteigen.",
        lesson: null
    },
    {
        id: "rauchen",
        infinitiv: "rauchen",
        translation: "палити",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "rauche", du: "rauchst", "er/sie/es": "raucht", wir: "rauchen", ihr: "raucht", "sie/Sie": "rauchen" },
        perfekt: "hat geraucht",
        praeteritum: { ich: "rauchte", du: "rauchtest", "er/sie/es": "rauchte", wir: "rauchten", ihr: "rauchtet", "sie/Sie": "rauchten" },
        example: "Rauchen ist ungesund.",
        lesson: null
    },
    {
        id: "telefonieren",
        infinitiv: "telefonieren",
        translation: "говорити по телефону",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "telefoniere", du: "telefonierst", "er/sie/es": "telefoniert", wir: "telefonieren", ihr: "telefoniert", "sie/Sie": "telefonieren" },
        perfekt: "hat telefoniert",
        praeteritum: { ich: "telefonierte", du: "telefoniertest", "er/sie/es": "telefonierte", wir: "telefonierten", ihr: "telefoniertet", "sie/Sie": "telefonierten" },
        example: "Er telefoniert gerade.",
        lesson: null
    },
    {
        id: "funktionieren",
        infinitiv: "funktionieren",
        translation: "працювати (про техніку)",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "funktioniere", du: "funktionierst", "er/sie/es": "funktioniert", wir: "funktionieren", ihr: "funktioniert", "sie/Sie": "funktionieren" },
        perfekt: "hat funktioniert",
        praeteritum: { ich: "funktionierte", du: "funktioniertest", "er/sie/es": "funktionierte", wir: "funktionierten", ihr: "funktioniertet", "sie/Sie": "funktionierten" },
        example: "Das Handy funktioniert nicht.",
        lesson: null
    },
    {
        id: "renovieren",
        infinitiv: "renovieren",
        translation: "робити ремонт",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "renoviere", du: "renovierst", "er/sie/es": "renoviert", wir: "renovieren", ihr: "renoviert", "sie/Sie": "renovieren" },
        perfekt: "hat renoviert",
        praeteritum: { ich: "renovierte", du: "renoviertest", "er/sie/es": "renovierte", wir: "renovierten", ihr: "renoviertet", "sie/Sie": "renovierten" },
        example: "Wir renovieren die Küche.",
        lesson: null
    },
    {
        id: "ausfuellen",
        infinitiv: "ausfüllen",
        translation: "заповнювати",
        type: "trennbar",
        auxiliary: "haben",
        praesens: { ich: "fülle aus", du: "füllst aus", "er/sie/es": "füllt aus", wir: "füllen aus", ihr: "füllt aus", "sie/Sie": "füllen aus" },
        perfekt: "hat ausgefüllt",
        praeteritum: { ich: "füllte aus", du: "fülltest aus", "er/sie/es": "füllte aus", wir: "füllten aus", ihr: "fülltet aus", "sie/Sie": "füllten aus" },
        example: "Füllen Sie das Formular aus.",
        lesson: null
    },
    {
        id: "unterschreiben",
        infinitiv: "unterschreiben",
        translation: "підписувати",
        type: "irregular",
        auxiliary: "haben",
        praesens: { ich: "unterschreibe", du: "unterschreibst", "er/sie/es": "unterschreibt", wir: "unterschreiben", ihr: "unterschreibt", "sie/Sie": "unterschreiben" },
        perfekt: "hat unterschrieben",
        praeteritum: { ich: "unterschrieb", du: "unterschriebst", "er/sie/es": "unterschrieb", wir: "unterschrieben", ihr: "unterschriebt", "sie/Sie": "unterschrieben" },
        example: "Bitte hier unterschreiben.",
        lesson: null
    },
    {
        id: "bedeuten",
        infinitiv: "bedeuten",
        translation: "означати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "bedeute", du: "bedeutest", "er/sie/es": "bedeutet", wir: "bedeuten", ihr: "bedeutet", "sie/Sie": "bedeuten" },
        perfekt: "hat bedeutet",
        praeteritum: { ich: "bedeutete", du: "bedeutetest", "er/sie/es": "bedeutete", wir: "bedeuteten", ihr: "bedeutetet", "sie/Sie": "bedeuteten" },
        example: "Was bedeutet das?",
        lesson: null
    },
    {
        id: "uebersetzen",
        infinitiv: "übersetzen",
        translation: "перекладати",
        type: "regular",
        auxiliary: "haben",
        praesens: { ich: "übersetze", du: "übersetzt", "er/sie/es": "übersetzt", wir: "übersetzen", ihr: "übersetzt", "sie/Sie": "übersetzen" },
        perfekt: "hat übersetzt",
        praeteritum: { ich: "übersetzte", du: "übersetztest", "er/sie/es": "übersetzte", wir: "übersetzten", ihr: "übersetztet", "sie/Sie": "übersetzten" },
        example: "Ich übersetze den Text.",
        lesson: null
    }
];


// ==========================================
// HELPER FUNCTIONS
// ==========================================
export function getVerbById(id) {
    return verbs.find(v => v.id === id);
}

export function getVerbsByType(type) {
    return verbs.filter(v => v.type === type);
}

export function getVerbsByLesson(lessonId) {
    return verbs.filter(v => v.lesson === lessonId);
}

export function getAllVerbs() {
    return verbs;
}

export const VERB_TYPES = {
    regular: "Regelmäßige",
    irregular: "Unregelmäßige",
    modal: "Modalverben",
    trennbar: "Trennbare"
};

export default verbs;
