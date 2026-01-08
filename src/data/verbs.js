/**
 * German Verbs Database - A1 (79 Most Important Verbs)
 * Дієслова A1 з відмінюванням: Präsens, Perfekt, Präteritum
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
        lesson: 1
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
        lesson: 2
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
        lesson: 8
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
        lesson: 6
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
        lesson: 7
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
        lesson: 6
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
        lesson: 10
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
        lesson: 7
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
        lesson: 3
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
        lesson: 1
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
        lesson: 5
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
        lesson: 1
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
        lesson: 1
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
        lesson: 6
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
        lesson: 1
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
        lesson: 4
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
        lesson: 9
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
        lesson: 4
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
        lesson: 2
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
        lesson: 4
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
        lesson: 4
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
        lesson: 6
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
        lesson: 7
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
        lesson: 1
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
        lesson: 9
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
        lesson: 3
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
        lesson: 3
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
        lesson: 5
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
        lesson: 8
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
        lesson: 3
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
        lesson: 6
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
        lesson: 7
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
        lesson: 4
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
        lesson: 1
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
        lesson: 5
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
        lesson: 11
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
        lesson: 5
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
        lesson: 4
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
        lesson: 4
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
        lesson: 5
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
        lesson: 5
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
        lesson: 12
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
        lesson: 12
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
        lesson: 11
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
        lesson: 12
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
        lesson: 1
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
        lesson: 6
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
        lesson: 9
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
        lesson: 7
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
        lesson: 9
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
        lesson: 12
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
        lesson: 6
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
        lesson: 6
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
        lesson: 6
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
        lesson: 5
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
        lesson: 13
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
        lesson: 13
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
