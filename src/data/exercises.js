/**
 * Exercises Database - Expanded
 * 15-30 вправ для кожної граматичної теми
 */

export const exercises = {
    // ==========================================
    // TEMPORALE PRÄPOSITIONEN (vor, nach, bis, seit, in, ab)
    // Lektion 12 - 25 вправ
    // ==========================================
    "temp-1": {
        id: "temp-1",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ 3 Jahren bin ich nach Deutschland gekommen.",
        options: ["Vor", "Nach", "Seit"],
        correct: 0,
        explanation: "VOR + Zeitangabe = 'тому'. Vor 3 Jahren = 3 роки тому."
    },
    "temp-2": {
        id: "temp-2",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ dem Kurs gehe ich einkaufen.",
        options: ["Vor", "Nach", "Bis"],
        correct: 1,
        explanation: "NACH = 'після'. Nach dem Kurs = після курсу."
    },
    "temp-3": {
        id: "temp-3",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich arbeite ___ 17 Uhr.",
        options: ["vor", "bis", "seit"],
        correct: 1,
        explanation: "BIS = 'до' (кінцева точка). Bis 17 Uhr = до 17:00."
    },
    "temp-4": {
        id: "temp-4",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ September lerne ich Deutsch.",
        options: ["Vor", "Seit", "Nach"],
        correct: 1,
        explanation: "SEIT = 'з' (тривалість). Seit September = з вересня (і досі)."
    },
    "temp-5": {
        id: "temp-5",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ einer Woche habe ich Urlaub.",
        options: ["Vor", "In", "Seit"],
        correct: 1,
        explanation: "IN + Zeitangabe = 'через' (майбутнє). In einer Woche = через тиждень."
    },
    "temp-6": {
        id: "temp-6",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ morgen mache ich Sport.",
        options: ["Ab", "Bis", "Vor"],
        correct: 0,
        explanation: "AB = 'починаючи з'. Ab morgen = з завтра."
    },
    "temp-7": {
        id: "temp-7",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich wohne ___ 2020 in Berlin.",
        options: ["vor", "seit", "nach"],
        correct: 1,
        explanation: "SEIT + рік = 'з ... року'. Seit 2020 = з 2020 року (і досі)."
    },
    "temp-8": {
        id: "temp-8",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ dem Essen gehen wir spazieren.",
        options: ["Vor", "Nach", "Seit"],
        correct: 1,
        explanation: "NACH dem Essen = після їжі."
    },
    "temp-9": {
        id: "temp-9",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Der Kurs dauert ___ 18 Uhr.",
        options: ["bis", "ab", "nach"],
        correct: 0,
        explanation: "BIS = 'до'. Dauert bis 18 Uhr = триває до 18:00."
    },
    "temp-10": {
        id: "temp-10",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ einer Stunde bin ich fertig.",
        options: ["Vor", "In", "Seit"],
        correct: 1,
        explanation: "IN einer Stunde = через годину."
    },
    "temp-11": {
        id: "temp-11",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Das Geschäft ist ___ 9 Uhr geöffnet.",
        options: ["ab", "bis", "vor"],
        correct: 0,
        explanation: "AB 9 Uhr = з 9:00 (і далі)."
    },
    "temp-12": {
        id: "temp-12",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ dem Film gehen wir in ein Restaurant.",
        options: ["Vor", "Nach", "Bis"],
        correct: 1,
        explanation: "NACH dem Film = після фільму."
    },
    "temp-13": {
        id: "temp-13",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich habe ___ 2 Monaten Deutsch gelernt.",
        options: ["vor", "seit", "in"],
        correct: 1,
        explanation: "SEIT 2 Monaten = вже 2 місяці (і продовжую)."
    },
    "temp-14": {
        id: "temp-14",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich war ___ 5 Jahren in Paris.",
        options: ["vor", "seit", "nach"],
        correct: 0,
        explanation: "VOR 5 Jahren = 5 років тому (в минулому)."
    },
    "temp-15": {
        id: "temp-15",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Der Zug fährt ___ 10 Minuten.",
        options: ["vor", "in", "seit"],
        correct: 1,
        explanation: "IN 10 Minuten = через 10 хвилин."
    },
    "temp-16": {
        id: "temp-16",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Wir warten ___ 8 Uhr.",
        options: ["bis", "ab", "vor"],
        correct: 0,
        explanation: "Warten BIS = чекати до."
    },
    "temp-17": {
        id: "temp-17",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ dem Frühstück dusche ich.",
        options: ["Nach", "Vor", "Seit"],
        correct: 1,
        explanation: "VOR dem Frühstück = перед сніданком."
    },
    "temp-18": {
        id: "temp-18",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich bin ___ gestern krank.",
        options: ["vor", "seit", "bis"],
        correct: 1,
        explanation: "SEIT gestern = з учора (і досі)."
    },
    "temp-19": {
        id: "temp-19",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ nächster Woche habe ich frei.",
        options: ["Vor", "Ab", "Seit"],
        correct: 1,
        explanation: "AB nächster Woche = з наступного тижня."
    },
    "temp-20": {
        id: "temp-20",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Der Bus kommt ___ 5 Minuten.",
        options: ["vor", "in", "nach"],
        correct: 1,
        explanation: "IN 5 Minuten = через 5 хвилин."
    },
    "temp-21": {
        id: "temp-21",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ der Arbeit bin ich müde.",
        options: ["Vor", "Nach", "Bis"],
        correct: 1,
        explanation: "NACH der Arbeit = після роботи."
    },
    "temp-22": {
        id: "temp-22",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Der Laden ist ___ 20 Uhr geöffnet.",
        options: ["ab", "bis", "seit"],
        correct: 1,
        explanation: "BIS 20 Uhr = до 20:00."
    },
    "temp-23": {
        id: "temp-23",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "Ich kenne ihn ___ 10 Jahren.",
        options: ["vor", "seit", "nach"],
        correct: 1,
        explanation: "SEIT 10 Jahren = вже 10 років."
    },
    "temp-24": {
        id: "temp-24",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ dem Unterricht machen wir Pause.",
        options: ["Nach", "Vor", "Bis"],
        correct: 0,
        explanation: "NACH dem Unterricht = після уроку."
    },
    "temp-25": {
        id: "temp-25",
        type: "multiple-choice",
        topic: "temporale-praepositionen",
        question: "___ sofort gilt die neue Regel.",
        options: ["Ab", "Bis", "Vor"],
        correct: 0,
        explanation: "AB sofort = негайно, з цього моменту."
    },

    // ==========================================
    // AKKUSATIV - 20 вправ
    // Lektion 3
    // ==========================================
    "akk-1": {
        id: "akk-1",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich kaufe ___ Apfel.",
        options: ["der", "den", "dem"],
        correct: 1,
        explanation: "Kaufen + Akkusativ. Der → den (чоловічий рід)."
    },
    "akk-2": {
        id: "akk-2",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er hat ___ Schwester.",
        options: ["ein", "eine", "einen"],
        correct: 1,
        explanation: "Schwester — жіночого роду. Eine → eine (без змін)."
    },
    "akk-3": {
        id: "akk-3",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich sehe ___ Mann.",
        options: ["der", "den", "dem"],
        correct: 1,
        explanation: "Sehen + Akkusativ. Der Mann → den Mann."
    },
    "akk-4": {
        id: "akk-4",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Wir brauchen ___ Tisch.",
        options: ["ein", "eine", "einen"],
        correct: 2,
        explanation: "Tisch — чоловічого роду. Ein → einen."
    },
    "akk-5": {
        id: "akk-5",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Sie trinkt ___ Kaffee.",
        options: ["der", "den", "das"],
        correct: 1,
        explanation: "Trinken + Akkusativ. Der Kaffee → den Kaffee."
    },
    "akk-6": {
        id: "akk-6",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich esse ___ Brot.",
        options: ["der", "die", "das"],
        correct: 2,
        explanation: "Brot — середнього роду. Das → das (без змін)."
    },
    "akk-7": {
        id: "akk-7",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er liest ___ Buch.",
        options: ["der", "ein", "einen"],
        correct: 1,
        explanation: "Buch — середнього роду. Ein → ein (без змін)."
    },
    "akk-8": {
        id: "akk-8",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Wir suchen ___ Wohnung.",
        options: ["ein", "eine", "einen"],
        correct: 1,
        explanation: "Wohnung — жіночого роду. Eine → eine."
    },
    "akk-9": {
        id: "akk-9",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich möchte ___ Tee.",
        options: ["der", "den", "das"],
        correct: 1,
        explanation: "Möchten + Akkusativ. Der Tee → den Tee."
    },
    "akk-10": {
        id: "akk-10",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Sie hat ___ Bruder.",
        options: ["ein", "eine", "einen"],
        correct: 2,
        explanation: "Bruder — чоловічого роду. Ein → einen."
    },
    "akk-11": {
        id: "akk-11",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er kauft ___ Auto.",
        options: ["der", "die", "das"],
        correct: 2,
        explanation: "Auto — середнього роду. Das → das."
    },
    "akk-12": {
        id: "akk-12",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich nehme ___ Bus.",
        options: ["der", "den", "dem"],
        correct: 1,
        explanation: "Nehmen + Akkusativ. Der Bus → den Bus."
    },
    "akk-13": {
        id: "akk-13",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Wir sehen ___ Film.",
        options: ["der", "den", "einen"],
        correct: 1,
        explanation: "Sehen + Akkusativ. Der Film → den Film."
    },
    "akk-14": {
        id: "akk-14",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Sie isst ___ Banane.",
        options: ["der", "die", "das"],
        correct: 1,
        explanation: "Banane — жіночого роду. Die → die."
    },
    "akk-15": {
        id: "akk-15",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich habe ___ Computer.",
        options: ["ein", "eine", "einen"],
        correct: 2,
        explanation: "Computer — чоловічого роду. Ein → einen."
    },
    "akk-16": {
        id: "akk-16",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er sucht ___ Schlüssel.",
        options: ["der", "den", "das"],
        correct: 1,
        explanation: "Suchen + Akkusativ. Der Schlüssel → den Schlüssel."
    },
    "akk-17": {
        id: "akk-17",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Wir trinken ___ Milch.",
        options: ["der", "die", "das"],
        correct: 1,
        explanation: "Milch — жіночого роду. Die → die."
    },
    "akk-18": {
        id: "akk-18",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Ich brauche ___ Stift.",
        options: ["ein", "eine", "einen"],
        correct: 2,
        explanation: "Stift — чоловічого роду. Ein → einen."
    },
    "akk-19": {
        id: "akk-19",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Sie liest ___ Zeitung.",
        options: ["der", "die", "das"],
        correct: 1,
        explanation: "Zeitung — жіночого роду. Die → die."
    },
    "akk-20": {
        id: "akk-20",
        type: "multiple-choice",
        topic: "akkusativ",
        question: "Er hat ___ Freundin.",
        options: ["ein", "eine", "einen"],
        correct: 1,
        explanation: "Freundin — жіночого роду. Eine → eine."
    },

    // ==========================================
    // DATIV - 20 вправ
    // Lektion 11
    // ==========================================
    "dat-1": {
        id: "dat-1",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich helfe ___ Kind.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Helfen + Dativ. Das Kind → dem Kind."
    },
    "dat-2": {
        id: "dat-2",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er fährt mit ___ Bus.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Mit + Dativ. Der Bus → dem Bus."
    },
    "dat-3": {
        id: "dat-3",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich gebe ___ Frau das Buch.",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Geben + Dativ (кому?). Die Frau → der Frau."
    },
    "dat-4": {
        id: "dat-4",
        type: "multiple-choice",
        topic: "dativ",
        question: "Sie wohnt bei ___ Mutter.",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Bei + Dativ. Die Mutter → der Mutter."
    },
    "dat-5": {
        id: "dat-5",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich gehe zu ___ Arzt.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Zu + Dativ. Der Arzt → dem Arzt."
    },
    "dat-6": {
        id: "dat-6",
        type: "multiple-choice",
        topic: "dativ",
        question: "Das Buch gehört ___ Lehrer.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Gehören + Dativ. Der Lehrer → dem Lehrer."
    },
    "dat-7": {
        id: "dat-7",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich komme von ___ Arbeit.",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Von + Dativ. Die Arbeit → der Arbeit."
    },
    "dat-8": {
        id: "dat-8",
        type: "multiple-choice",
        topic: "dativ",
        question: "Sie dankt ___ Freund.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Danken + Dativ. Der Freund → dem Freund."
    },
    "dat-9": {
        id: "dat-9",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er fährt mit ___ U-Bahn.",
        options: ["die", "der", "dem"],
        correct: 1,
        explanation: "Mit + Dativ. Die U-Bahn → der U-Bahn."
    },
    "dat-10": {
        id: "dat-10",
        type: "multiple-choice",
        topic: "dativ",
        question: "Das gefällt ___ Kindern.",
        options: ["die", "den", "der"],
        correct: 1,
        explanation: "Gefallen + Dativ. Die Kinder (Plural) → den Kindern."
    },
    "dat-11": {
        id: "dat-11",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich helfe ___ Mann.",
        options: ["der", "dem", "den"],
        correct: 1,
        explanation: "Helfen + Dativ. Der Mann → dem Mann."
    },
    "dat-12": {
        id: "dat-12",
        type: "multiple-choice",
        topic: "dativ",
        question: "Sie geht zu ___ Schule.",
        options: ["die", "der", "dem"],
        correct: 1,
        explanation: "Zu + Dativ. Die Schule → der Schule."
    },
    "dat-13": {
        id: "dat-13",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er antwortet ___ Lehrerin.",
        options: ["die", "der", "dem"],
        correct: 1,
        explanation: "Antworten + Dativ. Die Lehrerin → der Lehrerin."
    },
    "dat-14": {
        id: "dat-14",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich fahre mit ___ Fahrrad.",
        options: ["das", "dem", "den"],
        correct: 1,
        explanation: "Mit + Dativ. Das Fahrrad → dem Fahrrad."
    },
    "dat-15": {
        id: "dat-15",
        type: "multiple-choice",
        topic: "dativ",
        question: "Das Kleid passt ___ Mädchen.",
        options: ["das", "dem", "der"],
        correct: 1,
        explanation: "Passen + Dativ. Das Mädchen → dem Mädchen."
    },
    "dat-16": {
        id: "dat-16",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er kommt aus ___ Ukraine.",
        options: ["die", "der", "dem"],
        correct: 1,
        explanation: "Aus + Dativ. Die Ukraine → der Ukraine."
    },
    "dat-17": {
        id: "dat-17",
        type: "multiple-choice",
        topic: "dativ",
        question: "Sie gibt ___ Baby die Milch.",
        options: ["das", "dem", "der"],
        correct: 1,
        explanation: "Geben + Dativ. Das Baby → dem Baby."
    },
    "dat-18": {
        id: "dat-18",
        type: "multiple-choice",
        topic: "dativ",
        question: "Ich gehe nach ___ Hause.",
        options: ["das", "dem", "-"],
        correct: 2,
        explanation: "Nach Hause = додому (без артикля)."
    },
    "dat-19": {
        id: "dat-19",
        type: "multiple-choice",
        topic: "dativ",
        question: "Das schmeckt ___ Gästen.",
        options: ["die", "den", "der"],
        correct: 1,
        explanation: "Schmecken + Dativ. Die Gäste → den Gästen (Plural)."
    },
    "dat-20": {
        id: "dat-20",
        type: "multiple-choice",
        topic: "dativ",
        question: "Er zeigt ___ Freundin die Stadt.",
        options: ["die", "der", "dem"],
        correct: 1,
        explanation: "Zeigen + Dativ (кому?). Die Freundin → der Freundin."
    },

    // ==========================================
    // TRENNBARE VERBEN - 20 вправ
    // Lektion 5
    // ==========================================
    "trenn-1": {
        id: "trenn-1",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Ich ___ um 7 Uhr ___. (aufstehen)",
        options: ["stehe...auf", "aufstehe", "stehe auf..."],
        correct: 0,
        explanation: "Trennbar: Ich stehe um 7 Uhr auf."
    },
    "trenn-2": {
        id: "trenn-2",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Er ___ im Supermarkt ___. (einkaufen)",
        options: ["kauft...ein", "einkauft", "kauft ein..."],
        correct: 0,
        explanation: "Trennbar: Er kauft im Supermarkt ein."
    },
    "trenn-3": {
        id: "trenn-3",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Wann ___ der Film ___? (anfangen)",
        options: ["fängt...an", "anfängt", "anfangen"],
        correct: 0,
        explanation: "Trennbar: Wann fängt der Film an?"
    },
    "trenn-4": {
        id: "trenn-4",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Sie ___ ihre Mutter ___. (anrufen)",
        options: ["ruft...an", "anruft", "ruft an..."],
        correct: 0,
        explanation: "Trennbar: Sie ruft ihre Mutter an."
    },
    "trenn-5": {
        id: "trenn-5",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Ich ___ jeden Abend ___. (fernsehen)",
        options: ["sehe...fern", "fernsehe", "sehe fern..."],
        correct: 0,
        explanation: "Trennbar: Ich sehe jeden Abend fern."
    },
    "trenn-6": {
        id: "trenn-6",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "___ bitte das Fenster ___! (aufmachen)",
        options: ["Mach...auf", "Aufmach", "Mache auf..."],
        correct: 0,
        explanation: "Imperativ trennbar: Mach bitte das Fenster auf!"
    },
    "trenn-7": {
        id: "trenn-7",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Er ___ die Tür ___. (zumachen)",
        options: ["macht...zu", "zumacht", "macht zu..."],
        correct: 0,
        explanation: "Trennbar: Er macht die Tür zu."
    },
    "trenn-8": {
        id: "trenn-8",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Wir ___ um 9 Uhr ___. (abfahren)",
        options: ["fahren...ab", "abfahren", "fahren ab..."],
        correct: 0,
        explanation: "Trennbar: Wir fahren um 9 Uhr ab."
    },
    "trenn-9": {
        id: "trenn-9",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Er ___ das Licht ___. (anmachen)",
        options: ["macht...an", "anmacht", "macht an..."],
        correct: 0,
        explanation: "Trennbar: Er macht das Licht an."
    },
    "trenn-10": {
        id: "trenn-10",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Sie ___ morgen ___. (zurückkommen)",
        options: ["kommt...zurück", "zurückkommt", "kommst zurück"],
        correct: 0,
        explanation: "Trennbar: Sie kommt morgen zurück."
    },
    "trenn-11": {
        id: "trenn-11",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Ich ___ heute spät ___. (aufstehen)",
        options: ["stehe...auf", "aufstehe", "stehen auf"],
        correct: 0,
        explanation: "Trennbar: Ich stehe heute spät auf."
    },
    "trenn-12": {
        id: "trenn-12",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "___ du mich bitte ___? (anrufen)",
        options: ["Rufst...an", "Anrufst", "Rufen...an"],
        correct: 0,
        explanation: "Trennbar: Rufst du mich bitte an?"
    },
    "trenn-13": {
        id: "trenn-13",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Der Kurs ___ um 18 Uhr ___. (aufhören)",
        options: ["hört...auf", "aufhört", "hören auf"],
        correct: 0,
        explanation: "Trennbar: Der Kurs hört um 18 Uhr auf."
    },
    "trenn-14": {
        id: "trenn-14",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "___ bitte das Radio ___! (ausmachen)",
        options: ["Mach...aus", "Ausmach", "Mache aus"],
        correct: 0,
        explanation: "Imperativ trennbar: Mach bitte das Radio aus!"
    },
    "trenn-15": {
        id: "trenn-15",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Er ___ seine Jacke ___. (anziehen)",
        options: ["zieht...an", "anzieht", "zieht an..."],
        correct: 0,
        explanation: "Trennbar: Er zieht seine Jacke an."
    },
    "trenn-16": {
        id: "trenn-16",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Sie ___ heute Abend ___. (ausgehen)",
        options: ["geht...aus", "ausgeht", "gehen aus"],
        correct: 0,
        explanation: "Trennbar: Sie geht heute Abend aus."
    },
    "trenn-17": {
        id: "trenn-17",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Ich ___ dich zum Bahnhof ___. (mitnehmen)",
        options: ["nehme...mit", "mitnehme", "nehmen mit"],
        correct: 0,
        explanation: "Trennbar: Ich nehme dich zum Bahnhof mit."
    },
    "trenn-18": {
        id: "trenn-18",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "___ du Geld ___? (abheben)",
        options: ["Hebst...ab", "Abhebst", "Heben ab"],
        correct: 0,
        explanation: "Trennbar: Hebst du Geld ab?"
    },
    "trenn-19": {
        id: "trenn-19",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Er ___ am Bahnhof ___. (einsteigen)",
        options: ["steigt...ein", "einsteigt", "steigen ein"],
        correct: 0,
        explanation: "Trennbar: Er steigt am Bahnhof ein."
    },
    "trenn-20": {
        id: "trenn-20",
        type: "multiple-choice",
        topic: "trennbare-verben",
        question: "Wir ___ an der nächsten Haltestelle ___. (aussteigen)",
        options: ["steigen...aus", "aussteigen", "steigt aus"],
        correct: 0,
        explanation: "Trennbar: Wir steigen an der nächsten Haltestelle aus."
    },

    // ==========================================
    // ARTIKEL - 15 вправ
    // Lektion 3
    // ==========================================
    "artikel-1": {
        id: "artikel-1",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Apfel ist rot.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Apfel — чоловічого роду (der Apfel)."
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
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Wohnung ist groß.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Wohnung закінчується на -ung → die (жіночий рід)."
    },
    "artikel-5": {
        id: "artikel-5",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Mädchen ist nett.",
        options: ["Der", "Die", "Das"],
        correct: 2,
        explanation: "Mädchen закінчується на -chen → das (середній рід)."
    },
    "artikel-6": {
        id: "artikel-6",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Tisch steht im Zimmer.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Tisch — чоловічого роду (der Tisch)."
    },
    "artikel-7": {
        id: "artikel-7",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Buch ist interessant.",
        options: ["Der", "Die", "Das"],
        correct: 2,
        explanation: "Buch — середнього роду (das Buch)."
    },
    "artikel-8": {
        id: "artikel-8",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Zeitung liegt auf dem Tisch.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Zeitung закінчується на -ung → die (жіночий рід)."
    },
    "artikel-9": {
        id: "artikel-9",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Montag ist mein freier Tag.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Дні тижня — завжди der (чоловічий рід)."
    },
    "artikel-10": {
        id: "artikel-10",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Freiheit ist wichtig.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Freiheit закінчується на -heit → die (жіночий рід)."
    },
    "artikel-11": {
        id: "artikel-11",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Brötchen ist lecker.",
        options: ["Der", "Die", "Das"],
        correct: 2,
        explanation: "Brötchen закінчується на -chen → das (середній рід)."
    },
    "artikel-12": {
        id: "artikel-12",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Januar ist kalt.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Місяці — завжди der (чоловічий рід)."
    },
    "artikel-13": {
        id: "artikel-13",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Universität ist groß.",
        options: ["Der", "Die", "Das"],
        correct: 1,
        explanation: "Universität закінчується на -ät → die (жіночий рід)."
    },
    "artikel-14": {
        id: "artikel-14",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Sommer ist warm.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Пори року — завжди der (чоловічий рід)."
    },
    "artikel-15": {
        id: "artikel-15",
        type: "multiple-choice",
        topic: "artikel",
        question: "___ Computer ist neu.",
        options: ["Der", "Die", "Das"],
        correct: 0,
        explanation: "Computer — чоловічого роду (der Computer)."
    },

    // ==========================================
    // MODALVERBEN (können, wollen) - 15 вправ
    // Lektion 6
    // ==========================================
    "modal-1": {
        id: "modal-1",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Ich ___ Deutsch sprechen.",
        options: ["kann", "können", "kannst"],
        correct: 0,
        explanation: "Ich kann — 1 особа однини."
    },
    "modal-2": {
        id: "modal-2",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Er ___ nach Berlin fahren.",
        options: ["wollen", "will", "wollt"],
        correct: 1,
        explanation: "Er/sie/es will — 3 особа однини."
    },
    "modal-3": {
        id: "modal-3",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "___ du schwimmen?",
        options: ["Kann", "Kannst", "Können"],
        correct: 1,
        explanation: "Du kannst — 2 особа однини."
    },
    "modal-4": {
        id: "modal-4",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Wir ___ ins Kino gehen.",
        options: ["will", "wollen", "wollt"],
        correct: 1,
        explanation: "Wir wollen — 1 особа множини."
    },
    "modal-5": {
        id: "modal-5",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "___ Sie mir helfen?",
        options: ["Kann", "Können", "Kannst"],
        correct: 1,
        explanation: "Sie können — ввічлива форма."
    },
    "modal-6": {
        id: "modal-6",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Sie (вона) ___ Klavier spielen.",
        options: ["kann", "können", "kannst"],
        correct: 0,
        explanation: "Sie (вона) kann — 3 особа однини."
    },
    "modal-7": {
        id: "modal-7",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Ihr ___ morgen kommen.",
        options: ["könnt", "können", "kann"],
        correct: 0,
        explanation: "Ihr könnt — 2 особа множини."
    },
    "modal-8": {
        id: "modal-8",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Ich ___ Pizza essen.",
        options: ["will", "wollen", "willst"],
        correct: 0,
        explanation: "Ich will — 1 особа однини."
    },
    "modal-9": {
        id: "modal-9",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "___ du mir das Buch geben?",
        options: ["Willst", "Will", "Wollen"],
        correct: 0,
        explanation: "Du willst — 2 особа однини."
    },
    "modal-10": {
        id: "modal-10",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Die Kinder ___ spielen.",
        options: ["will", "wollen", "wollt"],
        correct: 1,
        explanation: "Sie (вони) wollen — 3 особа множини."
    },
    "modal-11": {
        id: "modal-11",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Er ___ gut kochen.",
        options: ["kann", "können", "kannst"],
        correct: 0,
        explanation: "Er kann — 3 особа однини."
    },
    "modal-12": {
        id: "modal-12",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Wir ___ heute nicht arbeiten.",
        options: ["kann", "können", "könnt"],
        correct: 1,
        explanation: "Wir können — 1 особа множини."
    },
    "modal-13": {
        id: "modal-13",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "___ ihr mitkommen?",
        options: ["Wollt", "Wollen", "Will"],
        correct: 0,
        explanation: "Ihr wollt — 2 особа множини."
    },
    "modal-14": {
        id: "modal-14",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "Ich ___ nicht mehr warten.",
        options: ["will", "wollen", "wollt"],
        correct: 0,
        explanation: "Ich will — 1 особа однини."
    },
    "modal-15": {
        id: "modal-15",
        type: "multiple-choice",
        topic: "modalverben-koennen-wollen",
        question: "___ Sie Deutsch?",
        options: ["Kann", "Können", "Kannst"],
        correct: 1,
        explanation: "Sie können — ввічлива форма (Чи Ви можете?)."
    },

    // ==========================================
    // SEIN CONJUGATION (New Types)
    // ==========================================
    "sein-1": {
        id: "sein-1",
        type: "fill-blank",
        topic: "sein-konjugation",
        question: "Ich ___ Student.",
        answer: "bin",
        explanation: "Ich + sein = bin"
    },
    "sein-2": {
        id: "sein-2",
        type: "fill-blank",
        topic: "sein-konjugation",
        question: "Das ___ mein Buch.",
        answer: "ist",
        explanation: "Das (es) + sein = ist"
    },
    "sein-3": {
        id: "sein-3",
        type: "match-pairs",
        topic: "sein-konjugation",
        pairs: [
            { de: "ich", ua: "bin" },
            { de: "du", ua: "bist" },
            { de: "er/sie/es", ua: "ist" },
            { de: "wir", ua: "sind" }
        ],
        explanation: "Форми дієслова sein"
    },
    "sein-4": {
        id: "sein-4",
        type: "word-order",
        topic: "sein-konjugation",
        sentence: "Wir sind zu Hause",
        translation: "Ми вдома",
        explanation: "Суб'єкт (Wir) -> Дієслово (sind) -> Інше"
    },
    "sein-5": {
        id: "sein-5",
        type: "dictation",
        topic: "sein-konjugation",
        text: "Das ist meine Mutter",
        explanation: "Слухай уважно і пиши те, що чуєш."
    },

    // ==========================================
    // W-FRAGEN (New Types)
    // ==========================================
    "w-1": {
        id: "w-1",
        type: "fill-blank",
        topic: "w-fragen",
        question: "___ kommst du? - Aus der Ukraine.",
        answer: "woher",
        explanation: "Звідки = Woher"
    },
    "w-2": {
        id: "w-2",
        type: "match-pairs",
        topic: "w-fragen",
        pairs: [
            { de: "Wo", ua: "Де" },
            { de: "Woher", ua: "Звідки" },
            { de: "Was", ua: "Що" },
            { de: "Wer", ua: "Хто" }
        ],
        explanation: "Питальні слова"
    },
    "w-3": {
        id: "w-3",
        type: "word-order",
        topic: "w-fragen",
        sentence: "Was machst du heute",
        translation: "Що ти робиш сьогодні?",
        explanation: "W-слово -> Дієслово -> Суб'єкт"
    },
    // ==========================================
    // NEGATION: nicht / kein
    // Lektion 2 - 15 вправ
    // ==========================================
    "neg-1": {
        id: "neg-1",
        type: "multiple-choice",
        topic: "negation",
        question: "Ich habe ___ Zeit.",
        options: ["nicht", "keine", "kein"],
        correct: 1,
        explanation: "Zeit = die (жіночий рід). keine Zeit = немає часу."
    },
    "neg-2": {
        id: "neg-2",
        type: "multiple-choice",
        topic: "negation",
        question: "Das ist ___ gut.",
        options: ["nicht", "kein", "keine"],
        correct: 0,
        explanation: "Заперечуємо прикметник → nicht. Das ist nicht gut."
    },
    "neg-3": {
        id: "neg-3",
        type: "multiple-choice",
        topic: "negation",
        question: "Ich habe ___ Bruder.",
        options: ["nicht", "keinen", "keine"],
        correct: 1,
        explanation: "Bruder = der (чоловічий), Akkusativ → keinen Bruder."
    },
    "neg-4": {
        id: "neg-4",
        type: "multiple-choice",
        topic: "negation",
        question: "Er kommt heute ___.",
        options: ["nicht", "kein", "keine"],
        correct: 0,
        explanation: "Заперечуємо дієслово → nicht в кінці. Er kommt nicht."
    },
    "neg-5": {
        id: "neg-5",
        type: "multiple-choice",
        topic: "negation",
        question: "Das ist ___ Problem.",
        options: ["nicht", "keine", "kein"],
        correct: 2,
        explanation: "Problem = das (середній рід) → kein Problem."
    },
    "neg-6": {
        id: "neg-6",
        type: "fill-blank",
        topic: "negation",
        question: "Ich spreche ___ Französisch.",
        correct: "nicht",
        explanation: "Заперечуємо дієслово → nicht."
    },
    "neg-7": {
        id: "neg-7",
        type: "fill-blank",
        topic: "negation",
        question: "Sie hat ___ Kinder.",
        correct: "keine",
        explanation: "Kinder = множина → keine Kinder."
    },
    "neg-8": {
        id: "neg-8",
        type: "multiple-choice",
        topic: "negation",
        question: "Wir haben ___ Auto.",
        options: ["nicht", "kein", "keine"],
        correct: 1,
        explanation: "Auto = das (середній рід) → kein Auto."
    },
    "neg-9": {
        id: "neg-9",
        type: "multiple-choice",
        topic: "negation",
        question: "Ich verstehe das ___.",
        options: ["nicht", "kein", "keine"],
        correct: 0,
        explanation: "Заперечуємо дієслово → nicht в кінці."
    },
    "neg-10": {
        id: "neg-10",
        type: "fill-blank",
        topic: "negation",
        question: "Das ist ___ Katze, das ist ein Hund.",
        correct: "keine",
        explanation: "Katze = die (жіночий рід) → keine Katze."
    },

    // ==========================================
    // PLURAL DER NOMEN
    // Lektion 3 - 12 вправ
    // ==========================================
    "pl-1": {
        id: "pl-1",
        type: "multiple-choice",
        topic: "plural",
        question: "der Tisch → die ___",
        options: ["Tischen", "Tische", "Tischs"],
        correct: 1,
        explanation: "der Tisch → die Tische (-e)"
    },
    "pl-2": {
        id: "pl-2",
        type: "multiple-choice",
        topic: "plural",
        question: "das Kind → die ___",
        options: ["Kinde", "Kindes", "Kinder"],
        correct: 2,
        explanation: "das Kind → die Kinder (-er)"
    },
    "pl-3": {
        id: "pl-3",
        type: "multiple-choice",
        topic: "plural",
        question: "die Lampe → die ___",
        options: ["Lampen", "Lampes", "Lampeen"],
        correct: 0,
        explanation: "die Lampe → die Lampen (-en)"
    },
    "pl-4": {
        id: "pl-4",
        type: "multiple-choice",
        topic: "plural",
        question: "das Auto → die ___",
        options: ["Autoen", "Autos", "Auten"],
        correct: 1,
        explanation: "das Auto → die Autos (-s для іноземних слів)"
    },
    "pl-5": {
        id: "pl-5",
        type: "multiple-choice",
        topic: "plural",
        question: "der Mann → die ___",
        options: ["Manns", "Männe", "Männer"],
        correct: 2,
        explanation: "der Mann → die Männer (Umlaut + er)"
    },
    "pl-6": {
        id: "pl-6",
        type: "fill-blank",
        topic: "plural",
        question: "die Frau → die ___",
        correct: "Frauen",
        explanation: "die Frau → die Frauen (-en)"
    },
    "pl-7": {
        id: "pl-7",
        type: "fill-blank",
        topic: "plural",
        question: "das Buch → die ___",
        correct: "Bücher",
        explanation: "das Buch → die Bücher (Umlaut + er)"
    },
    "pl-8": {
        id: "pl-8",
        type: "multiple-choice",
        topic: "plural",
        question: "der Stuhl → die ___",
        options: ["Stuhle", "Stühle", "Stuhlen"],
        correct: 1,
        explanation: "der Stuhl → die Stühle (Umlaut + e)"
    },

    // ==========================================
    // ES GIBT + AKKUSATIV
    // Lektion 4 - 10 вправ
    // ==========================================
    "esgibt-1": {
        id: "esgibt-1",
        type: "multiple-choice",
        topic: "es-gibt",
        question: "Es gibt ___ Tisch im Zimmer.",
        options: ["ein", "einen", "einer"],
        correct: 1,
        explanation: "Tisch = der (чоловічий), Akkusativ → einen Tisch."
    },
    "esgibt-2": {
        id: "esgibt-2",
        type: "multiple-choice",
        topic: "es-gibt",
        question: "Es gibt ___ Lampe hier.",
        options: ["ein", "eine", "einen"],
        correct: 1,
        explanation: "Lampe = die (жіночий), Akkusativ → eine Lampe."
    },
    "esgibt-3": {
        id: "esgibt-3",
        type: "multiple-choice",
        topic: "es-gibt",
        question: "Gibt es hier ___ Supermarkt?",
        options: ["ein", "einen", "eine"],
        correct: 1,
        explanation: "Supermarkt = der (чоловічий), Akkusativ → einen Supermarkt."
    },
    "esgibt-4": {
        id: "esgibt-4",
        type: "fill-blank",
        topic: "es-gibt",
        question: "Es gibt ___ Probleme.",
        correct: "keine",
        explanation: "Probleme = множина, заперечення → keine Probleme."
    },
    "esgibt-5": {
        id: "esgibt-5",
        type: "multiple-choice",
        topic: "es-gibt",
        question: "Im Wohnzimmer gibt es ___ Sofa.",
        options: ["ein", "einen", "eine"],
        correct: 0,
        explanation: "Sofa = das (середній), Akkusativ → ein Sofa."
    },
    "esgibt-6": {
        id: "esgibt-6",
        type: "fill-blank",
        topic: "es-gibt",
        question: "In der Küche ___ es einen Kühlschrank.",
        correct: "gibt",
        explanation: "Es gibt = є, існує."
    },

    // ==========================================
    // LOKALE PRÄPOSITIONEN
    // Lektion 4 - 10 вправ
    // ==========================================
    "lokal-1": {
        id: "lokal-1",
        type: "multiple-choice",
        topic: "lokale-praepositionen",
        question: "Das Buch liegt ___ dem Tisch.",
        options: ["in", "auf", "an"],
        correct: 1,
        explanation: "auf = на (горизонтальній поверхні). Auf dem Tisch."
    },
    "lokal-2": {
        id: "lokal-2",
        type: "multiple-choice",
        topic: "lokale-praepositionen",
        question: "Das Bild hängt ___ der Wand.",
        options: ["auf", "in", "an"],
        correct: 2,
        explanation: "an = на (вертикальній поверхні). An der Wand."
    },
    "lokal-3": {
        id: "lokal-3",
        type: "multiple-choice",
        topic: "lokale-praepositionen",
        question: "Die Katze ist ___ dem Bett.",
        options: ["auf", "unter", "über"],
        correct: 1,
        explanation: "unter = під. Unter dem Bett."
    },
    "lokal-4": {
        id: "lokal-4",
        type: "fill-blank",
        topic: "lokale-praepositionen",
        question: "Der Stuhl steht ___ dem Schrank.",
        correct: "neben",
        explanation: "neben = поруч. Neben dem Schrank."
    },
    "lokal-5": {
        id: "lokal-5",
        type: "multiple-choice",
        topic: "lokale-praepositionen",
        question: "Die Lampe hängt ___ dem Tisch.",
        options: ["unter", "über", "neben"],
        correct: 1,
        explanation: "über = над. Über dem Tisch."
    },
    "lokal-6": {
        id: "lokal-6",
        type: "fill-blank",
        topic: "lokale-praepositionen",
        question: "Wir wohnen ___ Zimmer.",
        correct: "im",
        explanation: "in + dem = im. Im Zimmer."
    },
    "lokal-7": {
        id: "lokal-7",
        type: "multiple-choice",
        topic: "lokale-praepositionen",
        question: "Der Hund liegt ___ der Tür.",
        options: ["vor", "hinter", "zwischen"],
        correct: 0,
        explanation: "vor = перед. Vor der Tür."
    },

    // ==========================================
    // LEKTION 13: Demonstrativpronomen
    // ==========================================
    "dem-1": {
        id: "dem-1",
        type: "multiple-choice",
        topic: "demonstrativpronomen",
        question: "Ich kaufe ___ Mantel. Der gefällt mir.",
        options: ["dieser", "diesen", "dieses"],
        correct: 1,
        explanation: "Mantel ist maskulin (der). Hier Akkusativ (kaufen + wen/was?) -> diesen."
    },
    "dem-2": {
        id: "dem-2",
        type: "multiple-choice",
        topic: "demonstrativpronomen",
        question: "Wie findest du ___ Jacke?",
        options: ["diese", "dieser", "dieses"],
        correct: 0,
        explanation: "Jacke ist feminin (die). Akkusativ -> diese."
    },
    "dem-3": {
        id: "dem-3",
        type: "multiple-choice",
        topic: "demonstrativpronomen",
        question: "___ Hemd ist zu groß.",
        options: ["Dieser", "Diese", "Dieses"],
        correct: 2,
        explanation: "Hemd ist neutral (das). Nominativ -> Dieses."
    },
    "dem-4": {
        id: "dem-4",
        type: "multiple-choice",
        topic: "demonstrativpronomen",
        question: "Gefallen dir ___ Schuhe?",
        options: ["diese", "dieser", "dieses"],
        correct: 0,
        explanation: "Schuhe sind Plural. Nominativ -> diese."
    },
    "dem-5": {
        id: "dem-5",
        type: "match",
        topic: "demonstrativpronomen",
        question: "Welcher Rock? -> ___ Rock.",
        options: ["Dieser", "Diese", "Dieses"],
        correct: 0,
        explanation: "Welcher (m) -> Dieser (m)."
    },

    // ==========================================
    // LEKTION 13: Adjektive (prädikativ)
    // ==========================================
    "adj-1": {
        id: "adj-1",
        type: "multiple-choice",
        topic: "adjektive-praedikativ",
        question: "Der Anzug ist ___.",
        options: ["elegant", "elegante", "eleganter"],
        correct: 0,
        explanation: "Prädikativ (nach sein) haben Adjektive keine Endung! -> elegant."
    },
    "adj-2": {
        id: "adj-2",
        type: "multiple-choice",
        topic: "adjektive-praedikativ",
        question: "Die Hose ist zu ___.",
        options: ["kurz", "kurze", "kurzes"],
        correct: 0,
        explanation: "Adjektiv nach 'ist' -> keine Endung -> kurz."
    },
    "adj-3": {
        id: "adj-3",
        type: "multiple-choice",
        topic: "adjektive-praedikativ",
        question: "Findest du die Bluse ___?",
        options: ["schön", "schöne", "schönen"],
        correct: 0,
        explanation: "Nach 'finden' + Objekt ist das Adjektiv prädikativ -> keine Endung -> schön."
    },
    "adj-4": {
        id: "adj-4",
        type: "multiple-choice",
        topic: "adjektive-praedikativ",
        question: "Das T-Shirt kostet 5 Euro. Das ist ___.",
        options: ["billig", "billige", "billiges"],
        correct: 0,
        explanation: "Keine Endung."
    },
    "adj-5": {
        id: "adj-5",
        type: "multiple-choice",
        topic: "adjektive-praedikativ",
        question: "Welche Jacke ist ___? Die Rote.",
        options: ["besser", "gut", "gute"],
        correct: 0,
        explanation: "Komparativ von gut ist besser."
    },

    // ==========================================
    // LEKTION 13: Farben
    // ==========================================
    "farb-1": {
        id: "farb-1",
        type: "multiple-choice",
        topic: "farben",
        question: "Wie ist die Tomate?",
        options: ["Rot", "Blau", "Grün"],
        correct: 0,
        explanation: "Tomaten sind rot."
    },
    "farb-2": {
        id: "farb-2",
        type: "multiple-choice",
        topic: "farben",
        question: "Wie ist der Schnee?",
        options: ["Weiß", "Schwarz", "Gelb"],
        correct: 0,
        explanation: "Schnee ist weiß."
    },
    "farb-3": {
        id: "farb-3",
        type: "multiple-choice",
        topic: "farben",
        question: "Wie ist die Sonne?",
        options: ["Gelb", "Lila", "Grau"],
        correct: 0,
        explanation: "Die Sonne ist gelb."
    },
    "farb-4": {
        id: "farb-4",
        type: "multiple-choice",
        topic: "farben",
        question: "Mischung: Rot + Weiß = ?",
        options: ["Rosa", "Grün", "Schwarz"],
        correct: 0,
        explanation: "Rot und Weiß gibt Rosa."
    },
    "farb-5": {
        id: "farb-5",
        type: "multiple-choice",
        topic: "farben",
        question: "Was ist keine Farbe?",
        options: ["Tisch", "Blau", "Grün"],
        correct: 0,
        explanation: "Tisch ist ein Nomen (Möbel)."
    },

    // ==========================================
    // LEKTION 14: Feste
    // ==========================================
    // --- Ordinalzahlen (Datum) ---
    "ord-1": {
        id: "ord-1",
        type: "multiple-choice",
        topic: "ordnungszahlen-14",
        question: "1. Mai -> Der ___ Mai.",
        options: ["erste", "eins", "ersten"],
        correct: 0,
        explanation: "1-19: -te. Der erste."
    },
    "ord-2": {
        id: "ord-2",
        type: "multiple-choice",
        topic: "ordnungszahlen-14",
        question: "20. April -> Der ___ April.",
        options: ["zwanzigste", "zwanzig", "zwanzigsten"],
        correct: 0,
        explanation: "Ab 20: -ste. Der zwanzigste."
    },
    "ord-3": {
        id: "ord-3",
        type: "multiple-choice",
        topic: "ordnungszahlen-14",
        question: "Am 3. März -> Am ___ März.",
        options: ["dritten", "dritte", "drei"],
        correct: 0,
        explanation: "Am + Dativ (-n). Am dritten."
    },
    "ord-4": {
        id: "ord-4",
        type: "multiple-choice",
        topic: "ordnungszahlen-14",
        question: "Heute ist der 7. Juli. (___)",
        options: ["siebte", "sieben", "siebten"],
        correct: 0,
        explanation: "Nominativ: der siebte."
    },
    "ord-5": {
        id: "ord-5",
        type: "match",
        topic: "ordnungszahlen-14",
        question: "1. -> ?",
        options: ["erste", "eins", "einste"],
        correct: 0,
        explanation: "1 = erste."
    },

    // --- Personalpronomen (Akkusativ) ---
    "akk-pron-1": {
        id: "akk-pron-1",
        type: "multiple-choice",
        topic: "personalpronomen-akkusativ",
        question: "Ich liebe ___ (du).",
        options: ["dich", "dir", "du"],
        correct: 0,
        explanation: "lieben + Akkusativ. du -> dich."
    },
    "akk-pron-2": {
        id: "akk-pron-2",
        type: "multiple-choice",
        topic: "personalpronomen-akkusativ",
        question: "Er sieht ___ (wir).",
        options: ["uns", "wir", "euch"],
        correct: 0,
        explanation: "sehen + Akkusativ. wir -> uns."
    },
    "akk-pron-3": {
        id: "akk-pron-3",
        type: "multiple-choice",
        topic: "personalpronomen-akkusativ",
        question: "Für ___ (ich)?",
        options: ["mich", "mir", "ich"],
        correct: 0,
        explanation: "für + Akkusativ. ich -> mich."
    },
    "akk-pron-4": {
        id: "akk-pron-4",
        type: "multiple-choice",
        topic: "personalpronomen-akkusativ",
        question: "Ich lade ___ (ihr) ein.",
        options: ["euch", "ihr", "uns"],
        correct: 0,
        explanation: "einladen + Akkusativ. ihr -> euch."
    },
    "akk-pron-5": {
        id: "akk-pron-5",
        type: "match",
        topic: "personalpronomen-akkusativ",
        question: "er (Akkusativ) -> ?",
        options: ["ihn", "ihm", "er"],
        correct: 0,
        explanation: "er -> ihn."
    },

    // --- Konjunktion denn ---
    "denn-1": {
        id: "denn-1",
        type: "multiple-choice",
        topic: "konjunktion-denn",
        question: "Ich komme nicht, ___ ich bin krank.",
        options: ["denn", "aber", "und"],
        correct: 0,
        explanation: "Причина (Grund) -> denn."
    },
    "denn-2": {
        id: "denn-2",
        type: "word-order",
        topic: "konjunktion-denn",
        question: "denn / Hunger / habe / ich",
        options: ["denn ich habe Hunger", "denn habe ich Hunger"],
        correct: 0,
        explanation: "denn + Subject + Verb (Position 0)."
    },
    "denn-3": {
        id: "denn-3",
        type: "multiple-choice",
        topic: "konjunktion-denn",
        question: "Wir lernen, denn wir ___ einen Test.",
        options: ["haben", "hat", "hast"],
        correct: 0,
        explanation: "wir haben."
    },
    "denn-4": {
        id: "denn-4",
        type: "multiple-choice",
        topic: "konjunktion-denn",
        question: "Er isst Pizza, ___ er mag Pizza.",
        options: ["denn", "oder", "aber"],
        correct: 0,
        explanation: "denn (причина)."
    },
    "denn-5": {
        id: "denn-5",
        type: "multiple-choice",
        topic: "konjunktion-denn",
        question: "Position von 'denn'?",
        options: ["Position 0", "Position 1", "Ende"],
        correct: 0,
        explanation: "denn ist Position 0."
    },

    // --- Werden ---
    "werden-1": {
        id: "werden-1",
        type: "multiple-choice",
        topic: "werden-konjugation",
        question: "Du ___ Arzt.",
        options: ["wirst", "werdest", "wird"],
        correct: 0,
        explanation: "du wirst."
    },
    "werden-2": {
        id: "werden-2",
        type: "multiple-choice",
        topic: "werden-konjugation",
        question: "Er ___ 30 Jahre alt.",
        options: ["wird", "werdet", "wirst"],
        correct: 0,
        explanation: "er wird."
    },
    "werden-3": {
        id: "werden-3",
        type: "multiple-choice",
        topic: "werden-konjugation",
        question: "Wir ___ alt.",
        options: ["werden", "wird", "werdet"],
        correct: 0,
        explanation: "wir werden."
    },
    "werden-4": {
        id: "werden-4",
        type: "multiple-choice",
        topic: "werden-konjugation",
        question: "Ihr ___ müde.",
        options: ["werdet", "werden", "wirst"],
        correct: 0,
        explanation: "ihr werdet."
    },
    "werden-5": {
        id: "werden-5",
        type: "multiple-choice",
        topic: "werden-konjugation",
        question: "Ich ___ Kochen.",
        options: ["werde", "wird", "wirst"],
        correct: 0,
        explanation: "ich werde."
    },

    // ==========================================
    // Konjunktion dass
    // ==========================================
    "dass-1": {
        id: "dass-1",
        type: "multiple-choice",
        topic: "konjunktion-dass",
        question: "Ich denke, ___ er kommt.",
        options: ["dass", "das", "denn"],
        correct: 0,
        explanation: "dass (з подвійним s) — сполучник!"
    },
    "dass-2": {
        id: "dass-2",
        type: "multiple-choice",
        topic: "konjunktion-dass",
        question: "In einem dass-Satz steht das Verb am ___.",
        options: ["Ende", "Anfang", "Mitte"],
        correct: 0,
        explanation: "dass → Verb am Ende!"
    },
    "dass-3": {
        id: "dass-3",
        type: "multiple-choice",
        topic: "konjunktion-dass",
        question: "Er sagt, dass er müde ___.",
        options: ["ist", "bin", "sein"],
        correct: 0,
        explanation: "dass → Verb (ist) am Ende."
    },
    "dass-4": {
        id: "dass-4",
        type: "multiple-choice",
        topic: "konjunktion-dass",
        question: "Ich hoffe, ___ du kommst.",
        options: ["dass", "wenn", "weil"],
        correct: 0,
        explanation: "hoffen + dass."
    },
    "dass-5": {
        id: "dass-5",
        type: "multiple-choice",
        topic: "konjunktion-dass",
        question: "Sie denkt, dass er Arzt ___.",
        options: ["wird", "werde", "werden"],
        correct: 0,
        explanation: "er wird (Verb am Ende)."
    },

    // ==========================================
    // Einladung & Gratulation
    // ==========================================
    "einladung-1": {
        id: "einladung-1",
        type: "multiple-choice",
        topic: "einladung-gratulation",
        question: "Herzlichen ___ zum Geburtstag!",
        options: ["Glückwunsch", "Dank", "Gruß"],
        correct: 0,
        explanation: "Herzlichen Glückwunsch = Вітаю!"
    },
    "einladung-2": {
        id: "einladung-2",
        type: "multiple-choice",
        topic: "einladung-gratulation",
        question: "___ Weihnachten!",
        options: ["Frohe", "Gute", "Schöne"],
        correct: 0,
        explanation: "Frohe Weihnachten = Веселого Різдва!"
    },
    "einladung-3": {
        id: "einladung-3",
        type: "multiple-choice",
        topic: "einladung-gratulation",
        question: "Ich ___ dich herzlich ein.",
        options: ["lade", "laden", "lädst"],
        correct: 0,
        explanation: "ich lade ein."
    },
    "einladung-4": {
        id: "einladung-4",
        type: "multiple-choice",
        topic: "einladung-gratulation",
        question: "Alles ___ zum Geburtstag!",
        options: ["Gute", "Gut", "Guten"],
        correct: 0,
        explanation: "Alles Gute!"
    },
    "einladung-5": {
        id: "einladung-5",
        type: "multiple-choice",
        topic: "einladung-gratulation",
        question: "Vielen ___ für die Einladung!",
        options: ["Dank", "Danke", "danken"],
        correct: 0,
        explanation: "Vielen Dank!"
    },

    // ==========================================
    // Konjunktion wenn
    // ==========================================
    "wenn-1": {
        id: "wenn-1",
        type: "multiple-choice",
        topic: "konjunktion-wenn",
        question: "___ es regnet, bleibe ich zu Hause.",
        options: ["Wenn", "Weil", "Denn"],
        correct: 0,
        explanation: "Wenn = якщо/коли (умова)"
    },
    "wenn-2": {
        id: "wenn-2",
        type: "multiple-choice",
        topic: "konjunktion-wenn",
        question: "Verb steht bei 'wenn' am ___.",
        options: ["Ende", "Anfang", "Mitte"],
        correct: 0,
        explanation: "wenn → Verb am Ende!"
    },
    "wenn-3": {
        id: "wenn-3",
        type: "multiple-choice",
        topic: "konjunktion-wenn",
        question: "Wenn du Zeit ___, ruf mich an.",
        options: ["hast", "hat", "haben"],
        correct: 0,
        explanation: "du hast (Verb am Ende)"
    },
    "wenn-4": {
        id: "wenn-4",
        type: "multiple-choice",
        topic: "konjunktion-wenn",
        question: "Ich freue mich, ___ du kommst.",
        options: ["wenn", "denn", "aber"],
        correct: 0,
        explanation: "wenn = коли"
    },
    "wenn-5": {
        id: "wenn-5",
        type: "multiple-choice",
        topic: "konjunktion-wenn",
        question: "Wenn ich müde ___, schlafe ich.",
        options: ["bin", "bist", "ist"],
        correct: 0,
        explanation: "ich bin"
    },

    // ==========================================
    // Personalpronomen Dativ
    // ==========================================
    "dativ-pron-1": {
        id: "dativ-pron-1",
        type: "multiple-choice",
        topic: "personalpronomen-dativ",
        question: "Ich gebe ___ (du) das Buch.",
        options: ["dir", "dich", "du"],
        correct: 0,
        explanation: "geben + Dativ. du → dir"
    },
    "dativ-pron-2": {
        id: "dativ-pron-2",
        type: "multiple-choice",
        topic: "personalpronomen-dativ",
        question: "Er hilft ___ (ich).",
        options: ["mir", "mich", "ich"],
        correct: 0,
        explanation: "helfen + Dativ. ich → mir"
    },
    "dativ-pron-3": {
        id: "dativ-pron-3",
        type: "multiple-choice",
        topic: "personalpronomen-dativ",
        question: "Wir danken ___ (ihr).",
        options: ["euch", "ihr", "euer"],
        correct: 0,
        explanation: "danken + Dativ. ihr → euch"
    },
    "dativ-pron-4": {
        id: "dativ-pron-4",
        type: "multiple-choice",
        topic: "personalpronomen-dativ",
        question: "Das gefällt ___ (wir).",
        options: ["uns", "wir", "unser"],
        correct: 0,
        explanation: "gefallen + Dativ. wir → uns"
    },
    "dativ-pron-5": {
        id: "dativ-pron-5",
        type: "multiple-choice",
        topic: "personalpronomen-dativ",
        question: "Ich sage ___ (er) die Wahrheit.",
        options: ["ihm", "ihn", "er"],
        correct: 0,
        explanation: "sagen + Dativ. er → ihm"
    },

    // ==========================================
    // Gern / Lieber / Am liebsten
    // ==========================================
    "gern-1": {
        id: "gern-1",
        type: "multiple-choice",
        topic: "gern-lieber-am-liebsten",
        question: "Ich lese ___. (I like reading)",
        options: ["gern", "lieber", "am liebsten"],
        correct: 0,
        explanation: "gern = охоче/подобається"
    },
    "gern-2": {
        id: "gern-2",
        type: "multiple-choice",
        topic: "gern-lieber-am-liebsten",
        question: "Ich spiele ___ Fußball als Tennis.",
        options: ["lieber", "gern", "am liebsten"],
        correct: 0,
        explanation: "lieber = порівняння (більше подобається)"
    },
    "gern-3": {
        id: "gern-3",
        type: "multiple-choice",
        topic: "gern-lieber-am-liebsten",
        question: "___ esse ich Pizza. (Most of all)",
        options: ["Am liebsten", "Lieber", "Gern"],
        correct: 0,
        explanation: "am liebsten = найбільше"
    },
    "gern-4": {
        id: "gern-4",
        type: "multiple-choice",
        topic: "gern-lieber-am-liebsten",
        question: "gern → ___ → am liebsten",
        options: ["lieber", "mehr", "besser"],
        correct: 0,
        explanation: "gern → lieber → am liebsten"
    },
    "gern-5": {
        id: "gern-5",
        type: "multiple-choice",
        topic: "gern-lieber-am-liebsten",
        question: "Sie tanzt ___.",
        options: ["gern", "gerne", "beide richtig"],
        correct: 2,
        explanation: "gern і gerne обидва правильні!"
    },

    // ==========================================
    // Imperativ
    // ==========================================
    "imperativ-1": {
        id: "imperativ-1",
        type: "multiple-choice",
        topic: "imperativ",
        question: "___ das Buch! (du, lesen)",
        options: ["Lies", "Lese", "Liest"],
        correct: 0,
        explanation: "lesen → Lies! (du)"
    },
    "imperativ-2": {
        id: "imperativ-2",
        type: "multiple-choice",
        topic: "imperativ",
        question: "___ bitte ruhig! (ihr, sein)",
        options: ["Seid", "Sei", "Sind"],
        correct: 0,
        explanation: "sein → Seid! (ihr)"
    },
    "imperativ-3": {
        id: "imperativ-3",
        type: "multiple-choice",
        topic: "imperativ",
        question: "___ Sie bitte hier! (warten)",
        options: ["Warten", "Warte", "Wartet"],
        correct: 0,
        explanation: "Sie-form: Warten Sie!"
    },
    "imperativ-4": {
        id: "imperativ-4",
        type: "multiple-choice",
        topic: "imperativ",
        question: "___ schneller! (du, laufen)",
        options: ["Lauf", "Läufst", "Laufe"],
        correct: 0,
        explanation: "laufen → Lauf!"
    },
    "imperativ-5": {
        id: "imperativ-5",
        type: "multiple-choice",
        topic: "imperativ",
        question: "___ das Fenster! (du, öffnen)",
        options: ["Öffne", "Öffnest", "Öffnet"],
        correct: 0,
        explanation: "öffnen → Öffne!"
    },

    // ==========================================
    // Körperteile
    // ==========================================
    "koerper-1": {
        id: "koerper-1",
        type: "multiple-choice",
        topic: "koerperteile",
        question: "der Kopf = ?",
        options: ["голова", "рука", "нога"],
        correct: 0,
        explanation: "der Kopf = голова"
    },
    "koerper-2": {
        id: "koerper-2",
        type: "multiple-choice",
        topic: "koerperteile",
        question: "die Hand = ?",
        options: ["рука (кисть)", "нога", "палець"],
        correct: 0,
        explanation: "die Hand = рука (кисть)"
    },
    "koerper-3": {
        id: "koerper-3",
        type: "multiple-choice",
        topic: "koerperteile",
        question: "das Auge = ?",
        options: ["око", "вухо", "ніс"],
        correct: 0,
        explanation: "das Auge = око"
    },
    "koerper-4": {
        id: "koerper-4",
        type: "multiple-choice",
        topic: "koerperteile",
        question: "der Bauch = ?",
        options: ["живіт", "спина", "груди"],
        correct: 0,
        explanation: "der Bauch = живіт"
    },
    "koerper-5": {
        id: "koerper-5",
        type: "multiple-choice",
        topic: "koerperteile",
        question: "Mein ___ tut weh. (My head hurts)",
        options: ["Kopf", "Bein", "Arm"],
        correct: 0,
        explanation: "der Kopf = голова"
    },

    // ==========================================
    // Modalverb müssen/dürfen
    // ==========================================
    "muss-durf-1": {
        id: "muss-durf-1",
        type: "multiple-choice",
        topic: "modalverben-muessen-duerfen",
        question: "Ich ___ zum Arzt gehen. (must)",
        options: ["muss", "darf", "kann"],
        correct: 0,
        explanation: "müssen = мусити"
    },
    "muss-durf-2": {
        id: "muss-durf-2",
        type: "multiple-choice",
        topic: "modalverben-muessen-duerfen",
        question: "Du ___ hier nicht rauchen.",
        options: ["darfst", "musst", "kannst"],
        correct: 0,
        explanation: "dürfen = мати дозвіл (nicht = заборонено)"
    },
    "muss-durf-3": {
        id: "muss-durf-3",
        type: "multiple-choice",
        topic: "modalverben-muessen-duerfen",
        question: "Wir ___ früh aufstehen.",
        options: ["müssen", "dürfen", "sollen"],
        correct: 0,
        explanation: "müssen = мусимо"
    },
    "muss-durf-4": {
        id: "muss-durf-4",
        type: "multiple-choice",
        topic: "modalverben-muessen-duerfen",
        question: "___ ich hier parken?",
        options: ["Darf", "Muss", "Will"],
        correct: 0,
        explanation: "dürfen = чи можна (дозвіл)?"
    },
    "muss-durf-5": {
        id: "muss-durf-5",
        type: "multiple-choice",
        topic: "modalverben-muessen-duerfen",
        question: "Er ___ nicht allein gehen.",
        options: ["darf", "muss", "will"],
        correct: 0,
        explanation: "er darf nicht = йому не можна"
    },

    // ==========================================
    // Modalverb sollen
    // ==========================================
    "sollen-1": {
        id: "sollen-1",
        type: "multiple-choice",
        topic: "modalverb-sollen",
        question: "Du ___ mehr Wasser trinken. (should)",
        options: ["sollst", "sollte", "soll"],
        correct: 0,
        explanation: "du sollst = ти повинен"
    },
    "sollen-2": {
        id: "sollen-2",
        type: "multiple-choice",
        topic: "modalverb-sollen",
        question: "Was ___ ich tun?",
        options: ["soll", "sollst", "sollt"],
        correct: 0,
        explanation: "ich soll"
    },
    "sollen-3": {
        id: "sollen-3",
        type: "multiple-choice",
        topic: "modalverb-sollen",
        question: "Wir ___ pünktlich sein.",
        options: ["sollen", "sollt", "sollst"],
        correct: 0,
        explanation: "wir sollen"
    },
    "sollen-4": {
        id: "sollen-4",
        type: "multiple-choice",
        topic: "modalverb-sollen",
        question: "Der Arzt sagt, ich ___ Sport machen.",
        options: ["soll", "muss", "darf"],
        correct: 0,
        explanation: "sollen = рекомендація"
    },
    "sollen-5": {
        id: "sollen-5",
        type: "multiple-choice",
        topic: "modalverb-sollen",
        question: "___ ich das Fenster öffnen?",
        options: ["Soll", "Muss", "Darf"],
        correct: 0,
        explanation: "Soll ich...? = Чи мені...?"
    },

    // ==========================================
    // Ordnungszahlen (general)
    // ==========================================
    "ordnung-1": {
        id: "ordnung-1",
        type: "multiple-choice",
        topic: "ordnungszahlen",
        question: "1. = der ___",
        options: ["erste", "eins", "einste"],
        correct: 0,
        explanation: "1. = erste"
    },
    "ordnung-2": {
        id: "ordnung-2",
        type: "multiple-choice",
        topic: "ordnungszahlen",
        question: "3. = der ___",
        options: ["dritte", "drei", "dreite"],
        correct: 0,
        explanation: "3. = dritte"
    },
    "ordnung-3": {
        id: "ordnung-3",
        type: "multiple-choice",
        topic: "ordnungszahlen",
        question: "7. = der ___",
        options: ["siebte", "sieben", "siebente"],
        correct: 0,
        explanation: "7. = siebte"
    },
    "ordnung-4": {
        id: "ordnung-4",
        type: "multiple-choice",
        topic: "ordnungszahlen",
        question: "20. = der ___",
        options: ["zwanzigste", "zwanzig", "zwanzigete"],
        correct: 0,
        explanation: "ab 20: -ste"
    },
    "ordnung-5": {
        id: "ordnung-5",
        type: "multiple-choice",
        topic: "ordnungszahlen",
        question: "1-19: -___ / 20+: -___",
        options: ["te / ste", "ste / te", "e / ste"],
        correct: 0,
        explanation: "1-19: -te, 20+: -ste"
    },

    // ==========================================
    // Perfekt (regelmäßig)
    // ==========================================
    "perfekt-reg-1": {
        id: "perfekt-reg-1",
        type: "multiple-choice",
        topic: "perfekt-regelmaessig",
        question: "machen → ge___t",
        options: ["mach", "macht", "machen"],
        correct: 0,
        explanation: "machen → gemacht"
    },
    "perfekt-reg-2": {
        id: "perfekt-reg-2",
        type: "multiple-choice",
        topic: "perfekt-regelmaessig",
        question: "Ich ___ gestern gearbeitet.",
        options: ["habe", "bin", "hat"],
        correct: 0,
        explanation: "arbeiten → haben + gearbeitet"
    },
    "perfekt-reg-3": {
        id: "perfekt-reg-3",
        type: "multiple-choice",
        topic: "perfekt-regelmaessig",
        question: "spielen → ge___",
        options: ["spielt", "spielen", "spiel"],
        correct: 0,
        explanation: "spielen → gespielt"
    },
    "perfekt-reg-4": {
        id: "perfekt-reg-4",
        type: "multiple-choice",
        topic: "perfekt-regelmaessig",
        question: "Er hat gut ___.",
        options: ["gekocht", "kochen", "kocht"],
        correct: 0,
        explanation: "kochen → gekocht"
    },
    "perfekt-reg-5": {
        id: "perfekt-reg-5",
        type: "multiple-choice",
        topic: "perfekt-regelmaessig",
        question: "Wir ___ das Auto gewaschen.",
        options: ["haben", "sind", "hat"],
        correct: 0,
        explanation: "waschen → haben gewaschen"
    },

    // ==========================================
    // Perfekt (unregelmäßig)
    // ==========================================
    "perfekt-unreg-1": {
        id: "perfekt-unreg-1",
        type: "multiple-choice",
        topic: "perfekt-unregelmaessig",
        question: "gehen → ge___",
        options: ["gangen", "geht", "gehn"],
        correct: 0,
        explanation: "gehen → gegangen"
    },
    "perfekt-unreg-2": {
        id: "perfekt-unreg-2",
        type: "multiple-choice",
        topic: "perfekt-unregelmaessig",
        question: "Ich ___ nach Hause gegangen.",
        options: ["bin", "habe", "hat"],
        correct: 0,
        explanation: "gehen → sein + gegangen"
    },
    "perfekt-unreg-3": {
        id: "perfekt-unreg-3",
        type: "multiple-choice",
        topic: "perfekt-unregelmaessig",
        question: "essen → ge___",
        options: ["gessen", "esst", "essen"],
        correct: 0,
        explanation: "essen → gegessen"
    },
    "perfekt-unreg-4": {
        id: "perfekt-unreg-4",
        type: "multiple-choice",
        topic: "perfekt-unregelmaessig",
        question: "schreiben → ge___",
        options: ["schrieben", "schreibt", "schreib"],
        correct: 0,
        explanation: "schreiben → geschrieben"
    },
    "perfekt-unreg-5": {
        id: "perfekt-unreg-5",
        type: "multiple-choice",
        topic: "perfekt-unregelmaessig",
        question: "Er ___ viel getrunken.",
        options: ["hat", "ist", "hatte"],
        correct: 0,
        explanation: "trinken → haben + getrunken"
    },

    // ==========================================
    // Personalpronomen (general)
    // ==========================================
    "pronomen-1": {
        id: "pronomen-1",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "ich, du, ___, sie, es",
        options: ["er", "wir", "ihr"],
        correct: 0,
        explanation: "ich, du, er, sie, es"
    },
    "pronomen-2": {
        id: "pronomen-2",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "___ sind Studenten. (ми)",
        options: ["Wir", "Ihr", "Sie"],
        correct: 0,
        explanation: "Wir = ми"
    },
    "pronomen-3": {
        id: "pronomen-3",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "___ kommst aus Berlin. (ти)",
        options: ["Du", "Sie", "Er"],
        correct: 0,
        explanation: "Du = ти"
    },
    "pronomen-4": {
        id: "pronomen-4",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "___ sind nett. (вони)",
        options: ["Sie", "Wir", "Ihr"],
        correct: 0,
        explanation: "Sie (малі) = вони"
    },
    "pronomen-5": {
        id: "pronomen-5",
        type: "multiple-choice",
        topic: "personalpronomen",
        question: "___ seid müde. (ви, informal)",
        options: ["Ihr", "Sie", "Wir"],
        correct: 0,
        explanation: "Ihr = ви (informal)"
    },

    // ==========================================
    // Possessivartikel
    // ==========================================
    "possessiv-1": {
        id: "possessiv-1",
        type: "multiple-choice",
        topic: "possessivartikel",
        question: "Das ist ___ Buch. (ich)",
        options: ["mein", "dein", "sein"],
        correct: 0,
        explanation: "ich → mein"
    },
    "possessiv-2": {
        id: "possessiv-2",
        type: "multiple-choice",
        topic: "possessivartikel",
        question: "Wo ist ___ Tasche? (du)",
        options: ["deine", "meine", "seine"],
        correct: 0,
        explanation: "du → dein/deine"
    },
    "possessiv-3": {
        id: "possessiv-3",
        type: "multiple-choice",
        topic: "possessivartikel",
        question: "Er liebt ___ Frau. (він)",
        options: ["seine", "ihre", "unsere"],
        correct: 0,
        explanation: "er → sein/seine"
    },
    "possessiv-4": {
        id: "possessiv-4",
        type: "multiple-choice",
        topic: "possessivartikel",
        question: "Das ist ___ Auto. (wir)",
        options: ["unser", "euer", "ihr"],
        correct: 0,
        explanation: "wir → unser"
    },
    "possessiv-5": {
        id: "possessiv-5",
        type: "multiple-choice",
        topic: "possessivartikel",
        question: "Wo sind ___ Schlüssel? (ihr)",
        options: ["eure", "unsere", "ihre"],
        correct: 0,
        explanation: "ihr → euer/eure"
    },

    // ==========================================
    // Lokale Präpositionen Dativ
    // ==========================================
    "lok-dativ-1": {
        id: "lok-dativ-1",
        type: "multiple-choice",
        topic: "lokale-praepositionen-dativ",
        question: "Ich komme aus ___ Ukraine.",
        options: ["der", "die", "dem"],
        correct: 0,
        explanation: "aus + Dativ: die → der"
    },
    "lok-dativ-2": {
        id: "lok-dativ-2",
        type: "multiple-choice",
        topic: "lokale-praepositionen-dativ",
        question: "Ich wohne bei ___ Freund.",
        options: ["meinem", "mein", "meinen"],
        correct: 0,
        explanation: "bei + Dativ: mein → meinem"
    },
    "lok-dativ-3": {
        id: "lok-dativ-3",
        type: "multiple-choice",
        topic: "lokale-praepositionen-dativ",
        question: "Nach ___ Arbeit gehe ich nach Hause.",
        options: ["der", "die", "dem"],
        correct: 0,
        explanation: "nach + Dativ"
    },
    "lok-dativ-4": {
        id: "lok-dativ-4",
        type: "multiple-choice",
        topic: "lokale-praepositionen-dativ",
        question: "Er geht zu ___ Schule.",
        options: ["der", "die", "dem"],
        correct: 0,
        explanation: "zu + Dativ: die → der"
    },
    "lok-dativ-5": {
        id: "lok-dativ-5",
        type: "multiple-choice",
        topic: "lokale-praepositionen-dativ",
        question: "Das Buch ist von ___ Lehrer.",
        options: ["dem", "der", "den"],
        correct: 0,
        explanation: "von + Dativ: der → dem"
    },

    // ==========================================
    // Uhrzeit
    // ==========================================
    "uhrzeit-1": {
        id: "uhrzeit-1",
        type: "multiple-choice",
        topic: "uhrzeit",
        question: "8:00 = Es ist ___ Uhr.",
        options: ["acht", "achte", "achten"],
        correct: 0,
        explanation: "acht Uhr"
    },
    "uhrzeit-2": {
        id: "uhrzeit-2",
        type: "multiple-choice",
        topic: "uhrzeit",
        question: "8:30 = halb ___",
        options: ["neun", "acht", "zehn"],
        correct: 0,
        explanation: "halb neun = 8:30"
    },
    "uhrzeit-3": {
        id: "uhrzeit-3",
        type: "multiple-choice",
        topic: "uhrzeit",
        question: "8:15 = ___ nach acht",
        options: ["Viertel", "Halb", "Zehn"],
        correct: 0,
        explanation: "Viertel nach = :15"
    },
    "uhrzeit-4": {
        id: "uhrzeit-4",
        type: "multiple-choice",
        topic: "uhrzeit",
        question: "8:45 = ___ vor neun",
        options: ["Viertel", "Halb", "Zehn"],
        correct: 0,
        explanation: "Viertel vor = :45"
    },
    "uhrzeit-5": {
        id: "uhrzeit-5",
        type: "multiple-choice",
        topic: "uhrzeit",
        question: "14:00 = ___ Uhr (formal)",
        options: ["vierzehn", "zwei", "vier"],
        correct: 0,
        explanation: "14:00 = vierzehn Uhr (formal)"
    },

    // ==========================================
    // Datum
    // ==========================================
    "datum-1": {
        id: "datum-1",
        type: "multiple-choice",
        topic: "datum",
        question: "Am ___ Mai. (1.)",
        options: ["ersten", "erste", "eins"],
        correct: 0,
        explanation: "am + Dativ: erste → ersten"
    },
    "datum-2": {
        id: "datum-2",
        type: "multiple-choice",
        topic: "datum",
        question: "Heute ist der ___ Juli. (3.)",
        options: ["dritte", "dritten", "drei"],
        correct: 0,
        explanation: "Nom: der dritte"
    },
    "datum-3": {
        id: "datum-3",
        type: "multiple-choice",
        topic: "datum",
        question: "Wann hast du Geburtstag? Am ___ August.",
        options: ["fünfzehnten", "fünfzehn", "fünfzehnte"],
        correct: 0,
        explanation: "am + -ten/-sten"
    },
    "datum-4": {
        id: "datum-4",
        type: "multiple-choice",
        topic: "datum",
        question: "Der ___ Dezember ist Heiligabend. (24.)",
        options: ["vierundzwanzigste", "vierundzwanzig", "vierundzwanzigsten"],
        correct: 0,
        explanation: "Nom: der + -ste"
    },
    "datum-5": {
        id: "datum-5",
        type: "multiple-choice",
        topic: "datum",
        question: "Welches Datum ist heute? Der ___.",
        options: ["zehnte Januar", "zehnten Januar", "zehn Januar"],
        correct: 0,
        explanation: "Der + Ordinalzahl"
    },

    // ==========================================
    // Zeitangaben
    // ==========================================
    "zeit-1": {
        id: "zeit-1",
        type: "multiple-choice",
        topic: "zeitangaben",
        question: "___ Morgen habe ich frei.",
        options: ["Am", "Im", "Um"],
        correct: 0,
        explanation: "am Morgen"
    },
    "zeit-2": {
        id: "zeit-2",
        type: "multiple-choice",
        topic: "zeitangaben",
        question: "___ 8 Uhr beginnt der Unterricht.",
        options: ["Um", "Am", "Im"],
        correct: 0,
        explanation: "um + Uhrzeit"
    },
    "zeit-3": {
        id: "zeit-3",
        type: "multiple-choice",
        topic: "zeitangaben",
        question: "___ Sommer fahren wir ans Meer.",
        options: ["Im", "Am", "Um"],
        correct: 0,
        explanation: "im + Jahreszeit/Monat"
    },
    "zeit-4": {
        id: "zeit-4",
        type: "multiple-choice",
        topic: "zeitangaben",
        question: "___ Montag habe ich einen Termin.",
        options: ["Am", "Im", "Um"],
        correct: 0,
        explanation: "am + Wochentag"
    },
    "zeit-5": {
        id: "zeit-5",
        type: "multiple-choice",
        topic: "zeitangaben",
        question: "___ Januar schneit es oft.",
        options: ["Im", "Am", "Um"],
        correct: 0,
        explanation: "im + Monat"
    },

    // ==========================================
    // A2 LEKTION 1: KONJUNKTION WEIL - 10 вправ
    // ==========================================
    "a2-weil-1": {
        id: "a2-weil-1",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.",
        options: ["denn", "weil", "aber"],
        correct: 1,
        explanation: "WEIL = тому що. Дієслово йде в кінець."
    },

    // WEIL - Word Order Exercises (Побудуй речення)
    "a2-weil-order-1": {
        id: "a2-weil-order-1",
        type: "word-order",
        topic: "a2-l1-weil",
        translation: "Я втомлений, бо багато працював.",
        words: ["Ich", "bin", "müde,", "weil", "ich", "viel", "gearbeitet", "habe."],
        correctOrder: ["Ich", "bin", "müde,", "weil", "ich", "viel", "gearbeitet", "habe."],
        explanation: "Weil-Satz: дієслово (habe) стоїть у кінці."
    },
    "a2-weil-order-2": {
        id: "a2-weil-order-2",
        type: "word-order",
        topic: "a2-l1-weil",
        translation: "Він залишається вдома, бо хворий.",
        words: ["Er", "bleibt", "zu", "Hause,", "weil", "er", "krank", "ist."],
        correctOrder: ["Er", "bleibt", "zu", "Hause,", "weil", "er", "krank", "ist."],
        explanation: "В weil-реченні дієслово 'ist' в кінці."
    },
    "a2-weil-order-3": {
        id: "a2-weil-order-3",
        type: "word-order",
        topic: "a2-l1-weil",
        translation: "Вона не приходить, бо не має часу.",
        words: ["Sie", "kommt", "nicht,", "weil", "sie", "keine", "Zeit", "hat."],
        correctOrder: ["Sie", "kommt", "nicht,", "weil", "sie", "keine", "Zeit", "hat."],
        explanation: "Weil + дієслово в кінці: ...keine Zeit hat."
    },
    "a2-weil-2": {
        id: "a2-weil-2",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Er ist müde, weil er gestern spät ins Bett ___.",
        options: ["gegangen ist", "ist gegangen", "gehen ist"],
        correct: 0,
        explanation: "У підрядному реченні з weil дієслово стоїть у кінці: ...spät ins Bett gegangen ist."
    },
    "a2-weil-3": {
        id: "a2-weil-3",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Sie kommt nicht, ___ sie krank ist.",
        options: ["weil", "denn", "wenn"],
        correct: 0,
        explanation: "WEIL вводить причину. Sie kommt nicht, weil sie krank ist."
    },
    "a2-weil-4": {
        id: "a2-weil-4",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Ich bin traurig, weil ich meine Familie nicht ___ kann.",
        options: ["sehen", "sehe", "gesehen"],
        correct: 0,
        explanation: "Після модального дієслова (kann) стоїть інфінітив: ...nicht sehen kann."
    },
    "a2-weil-5": {
        id: "a2-weil-5",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Wir bleiben zu Hause, ___ es regnet.",
        options: ["denn", "weil", "aber"],
        correct: 1,
        explanation: "WEIL → дієслово в кінці: ...weil es regnet."
    },
    "a2-weil-6": {
        id: "a2-weil-6",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Ich kann nicht kommen, weil ich arbeiten ___.",
        options: ["muss", "müsse", "müssen"],
        correct: 0,
        explanation: "Модальне дієслово в кінці в Präsens: ...weil ich arbeiten muss."
    },
    "a2-weil-7": {
        id: "a2-weil-7",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Er hat Hunger, ___ er nichts gegessen hat.",
        options: ["weil", "dass", "wenn"],
        correct: 0,
        explanation: "WEIL пояснює причину: ...weil er nichts gegessen hat."
    },
    "a2-weil-8": {
        id: "a2-weil-8",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Sie ist glücklich, weil sie einen neuen Job ___ hat.",
        options: ["gefunden", "finden", "findet"],
        correct: 0,
        explanation: "Perfekt у підрядному реченні: ...einen neuen Job gefunden hat."
    },
    "a2-weil-9": {
        id: "a2-weil-9",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Das Kind weint, weil es seine Mutter nicht ___.",
        options: ["findet", "finden", "gefunden"],
        correct: 0,
        explanation: "Präsens: ...weil es seine Mutter nicht findet."
    },
    "a2-weil-10": {
        id: "a2-weil-10",
        type: "multiple-choice",
        topic: "a2-l1-weil",
        question: "Ich fahre mit dem Bus, ___ mein Auto kaputt ist.",
        options: ["weil", "deshalb", "trotzdem"],
        correct: 0,
        explanation: "WEIL вводить причину: ...weil mein Auto kaputt ist."
    },

    // ==========================================
    // A2 LEKTION 1: PERFEKT TRENNBARE VERBEN - 10 вправ
    // ==========================================
    "a2-perfekt-trenn-1": {
        id: "a2-perfekt-trenn-1",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Ich habe gestern ___. (einkaufen)",
        options: ["eingekauft", "gekauft ein", "einkaufte"],
        correct: 0,
        explanation: "Trennbar: ge- між префіксом і коренем → eingekauft."
    },
    "a2-perfekt-trenn-2": {
        id: "a2-perfekt-trenn-2",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Sie hat ihre Freundin ___. (anrufen)",
        options: ["angerufen", "gerufen an", "anrufte"],
        correct: 0,
        explanation: "Anrufen → angerufen (ge- після префіксу an-)."
    },
    "a2-perfekt-trenn-3": {
        id: "a2-perfekt-trenn-3",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Er ist um 7 Uhr ___. (aufstehen)",
        options: ["aufgestanden", "gestanden auf", "aufstehen"],
        correct: 0,
        explanation: "Aufstehen → aufgestanden (з sein, ge- після auf-)."
    },
    "a2-perfekt-trenn-4": {
        id: "a2-perfekt-trenn-4",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Wir haben einen neuen Nachbarn ___. (kennenlernen)",
        options: ["kennengelernt", "gelernt kennen", "kennenlernten"],
        correct: 0,
        explanation: "Kennenlernen → kennengelernt."
    },
    "a2-perfekt-trenn-5": {
        id: "a2-perfekt-trenn-5",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Der Zug ist pünktlich ___. (abfahren)",
        options: ["abgefahren", "gefahren ab", "abfuhr"],
        correct: 0,
        explanation: "Abfahren → abgefahren (з sein)."
    },
    "a2-perfekt-trenn-6": {
        id: "a2-perfekt-trenn-6",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Ich habe die Tür ___. (aufmachen)",
        options: ["aufgemacht", "gemacht auf", "aufmachte"],
        correct: 0,
        explanation: "Aufmachen → aufgemacht."
    },
    "a2-perfekt-trenn-7": {
        id: "a2-perfekt-trenn-7",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Sie hat das Licht ___. (ausmachen)",
        options: ["ausgemacht", "gemacht aus", "ausmachte"],
        correct: 0,
        explanation: "Ausmachen → ausgemacht."
    },
    "a2-perfekt-trenn-8": {
        id: "a2-perfekt-trenn-8",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Er ist gestern ___. (zurückkommen)",
        options: ["zurückgekommen", "gekommen zurück", "zurückkamm"],
        correct: 0,
        explanation: "Zurückkommen → zurückgekommen (з sein)."
    },
    "a2-perfekt-trenn-9": {
        id: "a2-perfekt-trenn-9",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Hast du gestern ___? (fernsehen)",
        options: ["ferngesehen", "gesehen fern", "ferngesehst"],
        correct: 0,
        explanation: "Fernsehen → ferngesehen."
    },
    "a2-perfekt-trenn-10": {
        id: "a2-perfekt-trenn-10",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-trennbar",
        question: "Sie hat ihre Jacke ___. (anziehen)",
        options: ["angezogen", "gezogen an", "anzog"],
        correct: 0,
        explanation: "Anziehen → angezogen."
    },

    // PERFEKT TRENNBAR - Word Order (Побудуй речення)
    "a2-perfekt-trenn-order-1": {
        id: "a2-perfekt-trenn-order-1",
        type: "word-order",
        topic: "a2-l1-perfekt-trennbar",
        translation: "Я прибрала свою кімнату.",
        words: ["Ich", "habe", "mein", "Zimmer", "aufgeräumt."],
        correctOrder: ["Ich", "habe", "mein", "Zimmer", "aufgeräumt."],
        explanation: "Perfekt: haben + ... + Partizip II (aufgeräumt) am Ende."
    },
    "a2-perfekt-trenn-order-2": {
        id: "a2-perfekt-trenn-order-2",
        type: "word-order",
        topic: "a2-l1-perfekt-trennbar",
        translation: "Він зателефонував своїй мамі.",
        words: ["Er", "hat", "seine", "Mutter", "angerufen."],
        correctOrder: ["Er", "hat", "seine", "Mutter", "angerufen."],
        explanation: "Anrufen → hat angerufen."
    },
    "a2-perfekt-trenn-order-3": {
        id: "a2-perfekt-trenn-order-3",
        type: "word-order",
        topic: "a2-l1-perfekt-trennbar",
        translation: "Ми вчора зробили покупки.",
        words: ["Wir", "haben", "gestern", "eingekauft."],
        correctOrder: ["Wir", "haben", "gestern", "eingekauft."],
        explanation: "Einkaufen → haben eingekauft."
    },

    // ==========================================
    // A2 LEKTION 1: PERFEKT VERBEN AUF -IEREN - 6 вправ
    // ==========================================
    "a2-perfekt-ieren-1": {
        id: "a2-perfekt-ieren-1",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Ich habe gestern lange ___. (telefonieren)",
        options: ["telefoniert", "getelefoniert", "telefonierte"],
        correct: 0,
        explanation: "Verben auf -ieren: OHNE ge-! → telefoniert."
    },
    "a2-perfekt-ieren-2": {
        id: "a2-perfekt-ieren-2",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Was ist ___? (passieren)",
        options: ["passiert", "gepassiert", "passierte"],
        correct: 0,
        explanation: "Passieren → passiert (без ge-, з sein)."
    },
    "a2-perfekt-ieren-3": {
        id: "a2-perfekt-ieren-3",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Er hat sein Auto ___. (reparieren)",
        options: ["repariert", "gerepariert", "reparierte"],
        correct: 0,
        explanation: "Reparieren → repariert (без ge-)."
    },
    "a2-perfekt-ieren-4": {
        id: "a2-perfekt-ieren-4",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Sie haben die Wohnung ___. (renovieren)",
        options: ["renoviert", "gerenoviert", "renovierte"],
        correct: 0,
        explanation: "Renovieren → renoviert."
    },
    "a2-perfekt-ieren-5": {
        id: "a2-perfekt-ieren-5",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Ich habe Deutsch ___. (studieren)",
        options: ["studiert", "gestudiert", "studierte"],
        correct: 0,
        explanation: "Studieren → studiert."
    },
    "a2-perfekt-ieren-6": {
        id: "a2-perfekt-ieren-6",
        type: "multiple-choice",
        topic: "a2-l1-perfekt-ieren",
        question: "Das Konzert hat um 20 Uhr ___. (funktionieren)",
        options: ["funktioniert", "gefunktioniert", "funktionierte"],
        correct: 0,
        explanation: "Funktionieren → funktioniert."
    },

    // PERFEKT -IEREN - Word Order (Побудуй речення)
    "a2-perfekt-ieren-order-1": {
        id: "a2-perfekt-ieren-order-1",
        type: "word-order",
        topic: "a2-l1-perfekt-ieren",
        translation: "Ми організували вечірку.",
        words: ["Wir", "haben", "eine", "Party", "organisiert."],
        correctOrder: ["Wir", "haben", "eine", "Party", "organisiert."],
        explanation: "Organisieren → haben organisiert (без ge-)."
    },
    "a2-perfekt-ieren-order-2": {
        id: "a2-perfekt-ieren-order-2",
        type: "word-order",
        topic: "a2-l1-perfekt-ieren",
        translation: "Він відремонтував машину.",
        words: ["Er", "hat", "das", "Auto", "repariert."],
        correctOrder: ["Er", "hat", "das", "Auto", "repariert."],
        explanation: "Reparieren → hat repariert."
    },
    "a2-perfekt-ieren-order-3": {
        id: "a2-perfekt-ieren-order-3",
        type: "word-order",
        topic: "a2-l1-perfekt-ieren",
        translation: "Я багато тренувався.",
        words: ["Ich", "habe", "viel", "trainiert."],
        correctOrder: ["Ich", "habe", "viel", "trainiert."],
        explanation: "Trainieren → habe trainiert."
    },

    // ==========================================
    // A2 LEKTION 2: WECHSELPRÄPOSITIONEN - 10 вправ
    // ==========================================
    "a2-wechsel-1": {
        id: "a2-wechsel-1",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Das Buch liegt auf ___ Tisch. (Wo?)",
        options: ["dem", "den", "der"],
        correct: 0,
        explanation: "Wo? → Dativ. Der Tisch → dem Tisch."
    },
    "a2-wechsel-2": {
        id: "a2-wechsel-2",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Ich lege das Buch auf ___ Tisch. (Wohin?)",
        options: ["dem", "den", "der"],
        correct: 1,
        explanation: "Wohin? → Akkusativ. Der Tisch → den Tisch."
    },
    "a2-wechsel-3": {
        id: "a2-wechsel-3",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Das Bild hängt an ___ Wand. (Wo?)",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Wo? → Dativ. Die Wand → der Wand."
    },
    "a2-wechsel-4": {
        id: "a2-wechsel-4",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Ich hänge das Bild an ___ Wand. (Wohin?)",
        options: ["die", "der", "den"],
        correct: 0,
        explanation: "Wohin? → Akkusativ. Die Wand → die Wand."
    },
    "a2-wechsel-5": {
        id: "a2-wechsel-5",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Die Katze sitzt unter ___ Stuhl. (Wo?)",
        options: ["dem", "den", "der"],
        correct: 0,
        explanation: "Wo? → Dativ. Der Stuhl → dem Stuhl."
    },
    "a2-wechsel-6": {
        id: "a2-wechsel-6",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Die Katze läuft unter ___ Stuhl. (Wohin?)",
        options: ["dem", "den", "der"],
        correct: 1,
        explanation: "Wohin? → Akkusativ. Der Stuhl → den Stuhl."
    },
    "a2-wechsel-7": {
        id: "a2-wechsel-7",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Er steht vor ___ Tür. (Wo?)",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Wo? → Dativ. Die Tür → der Tür."
    },
    "a2-wechsel-8": {
        id: "a2-wechsel-8",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Sie stellt die Lampe neben ___ Sofa. (Wohin?)",
        options: ["dem", "das", "der"],
        correct: 1,
        explanation: "Wohin? → Akkusativ. Das Sofa → das Sofa."
    },
    "a2-wechsel-9": {
        id: "a2-wechsel-9",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Die Lampe steht neben ___ Sofa. (Wo?)",
        options: ["dem", "das", "der"],
        correct: 0,
        explanation: "Wo? → Dativ. Das Sofa → dem Sofa."
    },
    "a2-wechsel-10": {
        id: "a2-wechsel-10",
        type: "multiple-choice",
        topic: "a2-l2-wechselpraepositionen",
        question: "Der Schlüssel liegt in ___ Schublade. (Wo?)",
        options: ["die", "der", "den"],
        correct: 1,
        explanation: "Wo? → Dativ. Die Schublade → der Schublade."
    },

    // WECHSELPRÄPOSITIONEN - Word Order
    "a2-wechsel-order-1": {
        id: "a2-wechsel-order-1",
        type: "word-order",
        topic: "a2-l2-wechselpraepositionen",
        translation: "Я вішаю картину на стіну.",
        words: ["Ich", "hänge", "das", "Bild", "an", "die", "Wand."],
        correctOrder: ["Ich", "hänge", "das", "Bild", "an", "die", "Wand."],
        explanation: "Wohin? → Akkusativ (an die Wand)."
    },
    "a2-wechsel-order-2": {
        id: "a2-wechsel-order-2",
        type: "word-order",
        topic: "a2-l2-wechselpraepositionen",
        translation: "Картина висить на стіні.",
        words: ["Das", "Bild", "hängt", "an", "der", "Wand."],
        correctOrder: ["Das", "Bild", "hängt", "an", "der", "Wand."],
        explanation: "Wo? → Dativ (an der Wand)."
    },
    "a2-wechsel-order-3": {
        id: "a2-wechsel-order-3",
        type: "word-order",
        topic: "a2-l2-wechselpraepositionen",
        translation: "Він кладе книгу на стіл.",
        words: ["Er", "legt", "das", "Buch", "auf", "den", "Tisch."],
        correctOrder: ["Er", "legt", "das", "Buch", "auf", "den", "Tisch."],
        explanation: "Wohin? → Akkusativ (auf den Tisch)."
    },
    "a2-wechsel-order-4": {
        id: "a2-wechsel-order-4",
        type: "word-order",
        topic: "a2-l2-wechselpraepositionen",
        translation: "Книга лежить на столі.",
        words: ["Das", "Buch", "liegt", "auf", "dem", "Tisch."],
        correctOrder: ["Das", "Buch", "liegt", "auf", "dem", "Tisch."],
        explanation: "Wo? → Dativ (auf dem Tisch)."
    },

    // ==========================================
    // A2 LEKTION 3: INDEFINITPRONOMEN - 8 вправ
    // ==========================================
    "a2-indef-1": {
        id: "a2-indef-1",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Haben Sie einen Löffel? – Nein, hier ist ___.",
        options: ["keiner", "keines", "keine"],
        correct: 0,
        explanation: "Der Löffel (m) → keiner (Nominativ)."
    },
    "a2-indef-2": {
        id: "a2-indef-2",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Ich brauche ein Messer. – Hier ist ___.",
        options: ["eins", "einer", "eine"],
        correct: 0,
        explanation: "Das Messer (n) → eins."
    },
    "a2-indef-3": {
        id: "a2-indef-3",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Haben Sie Gabeln? – Ja, hier sind ___.",
        options: ["welche", "eine", "einer"],
        correct: 0,
        explanation: "Die Gabeln (Plural) → welche."
    },
    "a2-indef-4": {
        id: "a2-indef-4",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Ich suche eine Serviette. – Hier ist ___.",
        options: ["eine", "einer", "eins"],
        correct: 0,
        explanation: "Die Serviette (f) → eine."
    },
    "a2-indef-5": {
        id: "a2-indef-5",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Gibt es hier einen Espresso? – Nein, ___ gibt es nicht.",
        options: ["keinen", "keiner", "kein"],
        correct: 0,
        explanation: "Der Espresso (m) в Akkusativ → keinen."
    },
    "a2-indef-6": {
        id: "a2-indef-6",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Haben Sie Teller? – Nein, hier sind ___.",
        options: ["keine", "keiner", "keins"],
        correct: 0,
        explanation: "Die Teller (Plural) → keine."
    },
    "a2-indef-7": {
        id: "a2-indef-7",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Brauchen Sie ein Glas? – Ja, ich brauche ___.",
        options: ["eins", "einer", "eine"],
        correct: 0,
        explanation: "Das Glas (n) в Akkusativ → eins."
    },
    "a2-indef-8": {
        id: "a2-indef-8",
        type: "multiple-choice",
        topic: "a2-l3-indefinitpronomen",
        question: "Möchten Sie einen Kaffee? – Ja, ich möchte ___.",
        options: ["einen", "einer", "eins"],
        correct: 0,
        explanation: "Der Kaffee (m) в Akkusativ → einen."
    },

    // INDEFINITPRONOMEN - Word Order
    "a2-indef-order-1": {
        id: "a2-indef-order-1",
        type: "word-order",
        topic: "a2-l3-indefinitpronomen",
        translation: "Тут є стіл? - Так, тут є один.",
        words: ["Gibt", "es", "hier", "einen", "Tisch?", "-", "Ja,", "hier", "ist", "einer."],
        correctOrder: ["Gibt", "es", "hier", "einen", "Tisch?", "-", "Ja,", "hier", "ist", "einer."],
        explanation: "Der Tisch (m) → Einer (Nominativ)."
    },
    "a2-indef-order-2": {
        id: "a2-indef-order-2",
        type: "word-order",
        topic: "a2-l3-indefinitpronomen",
        translation: "У тебе є машина? - Ні, у мене немає (жодної).",
        words: ["Hast", "du", "ein", "Auto?", "-", "Nein,", "ich", "habe", "keins."],
        correctOrder: ["Hast", "du", "ein", "Auto?", "-", "Nein,", "ich", "habe", "keins."],
        explanation: "Das Auto (n) → Keins (Akkusativ)."
    },

    // ==========================================
    // A2 LEKTION 4: KONJUNKTION WENN - 8 вправ
    // ==========================================
    "a2-wenn-1": {
        id: "a2-wenn-1",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "___ ich Zeit habe, gehe ich spazieren.",
        options: ["Wenn", "Weil", "Dass"],
        correct: 0,
        explanation: "WENN = wenn (умова). Дієслово в кінці."
    },
    "a2-wenn-2": {
        id: "a2-wenn-2",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Wenn das Wetter schön ___, machen wir ein Picknick.",
        options: ["ist", "sein", "wäre"],
        correct: 0,
        explanation: "Wenn-Satz: дієслово в кінці → ...schön ist."
    },
    "a2-wenn-3": {
        id: "a2-wenn-3",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Ich rufe dich an, ___ ich zu Hause bin.",
        options: ["wenn", "weil", "dass"],
        correct: 0,
        explanation: "WENN виражає умову або час."
    },
    "a2-wenn-4": {
        id: "a2-wenn-4",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Wenn du ___, kannst du mitkommen.",
        options: ["willst", "wollen", "will"],
        correct: 0,
        explanation: "Du willst → Wenn du willst (дієслово в кінці)."
    },
    "a2-wenn-5": {
        id: "a2-wenn-5",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "___ es regnet, bleiben wir zu Hause.",
        options: ["Wenn", "Weil", "Obwohl"],
        correct: 0,
        explanation: "WENN вводить умову."
    },
    "a2-wenn-6": {
        id: "a2-wenn-6",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Wenn ich müde ___, trinke ich Kaffee.",
        options: ["bin", "sein", "ist"],
        correct: 0,
        explanation: "Ich bin → Wenn ich müde bin."
    },
    "a2-wenn-7": {
        id: "a2-wenn-7",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Ich helfe dir, wenn du mich ___.",
        options: ["fragst", "fragen", "gefragt"],
        correct: 0,
        explanation: "Du fragst → ...wenn du mich fragst."
    },
    "a2-wenn-8": {
        id: "a2-wenn-8",
        type: "multiple-choice",
        topic: "a2-l4-wenn",
        question: "Wenn man krank ___, sollte man zum Arzt gehen.",
        options: ["ist", "sein", "war"],
        correct: 0,
        explanation: "Man ist → Wenn man krank ist."
    },

    // WENN - Word Order (Побудуй речення)
    "a2-wenn-order-1": {
        id: "a2-wenn-order-1",
        type: "word-order",
        topic: "a2-l4-wenn",
        translation: "Коли у мене є час, я читаю.",
        words: ["Wenn", "ich", "Zeit", "habe,", "lese", "ich."],
        correctOrder: ["Wenn", "ich", "Zeit", "habe,", "lese", "ich."],
        explanation: "Wenn-Satz (habe am Ende) + Hauptsatz (lese an Pos 1)."
    },
    "a2-wenn-order-2": {
        id: "a2-wenn-order-2",
        type: "word-order",
        topic: "a2-l4-wenn",
        translation: "Я допоможу тобі, якщо ти мене запитаєш.",
        words: ["Ich", "helfe", "dir,", "wenn", "du", "mich", "fragst."],
        correctOrder: ["Ich", "helfe", "dir,", "wenn", "du", "mich", "fragst."],
        explanation: "Nebensatz mit Wenn: Verb am Ende (fragst)."
    },
    "a2-wenn-order-3": {
        id: "a2-wenn-order-3",
        type: "word-order",
        topic: "a2-l4-wenn",
        translation: "Коли погода гарна, ми йдемо гуляти.",
        words: ["Wenn", "das", "Wetter", "schön", "ist,", "gehen", "wir", "spazieren."],
        correctOrder: ["Wenn", "das", "Wetter", "schön", "ist,", "gehen", "wir", "spazieren."],
        explanation: "Wenn ... ist, gehen wir..."
    },

    // ==========================================
    // A2 LEKTION 4: SOLLEN KONJUNKTIV (SOLLTE) - 6 вправ
    // ==========================================
    "a2-sollte-1": {
        id: "a2-sollte-1",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Du ___ mehr Wasser trinken.",
        options: ["solltest", "sollte", "sollten"],
        correct: 0,
        explanation: "Du → solltest."
    },
    "a2-sollte-2": {
        id: "a2-sollte-2",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Er ___ früher ins Bett gehen.",
        options: ["sollte", "solltest", "sollten"],
        correct: 0,
        explanation: "Er/sie/es → sollte."
    },
    "a2-sollte-3": {
        id: "a2-sollte-3",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Wir ___ mehr Sport machen.",
        options: ["sollten", "sollte", "solltest"],
        correct: 0,
        explanation: "Wir → sollten."
    },
    "a2-sollte-4": {
        id: "a2-sollte-4",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Sie (Pl.) ___ pünktlich kommen.",
        options: ["sollten", "sollte", "solltest"],
        correct: 0,
        explanation: "Sie (Plural) → sollten."
    },
    "a2-sollte-5": {
        id: "a2-sollte-5",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Ich ___ weniger Kaffee trinken.",
        options: ["sollte", "solltest", "sollten"],
        correct: 0,
        explanation: "Ich → sollte."
    },
    "a2-sollte-6": {
        id: "a2-sollte-6",
        type: "multiple-choice",
        topic: "a2-l4-sollen-konjunktiv",
        question: "Ihr ___ euch beeilen.",
        options: ["solltet", "sollte", "sollten"],
        correct: 0,
        explanation: "Ihr → solltet."
    },

    // SOLLTE - Word Order
    "a2-sollte-order-1": {
        id: "a2-sollte-order-1",
        type: "word-order",
        topic: "a2-l4-sollen-konjunktiv",
        translation: "Тобі слід більше спати.",
        words: ["Du", "solltest", "mehr", "schlafen."],
        correctOrder: ["Du", "solltest", "mehr", "schlafen."],
        explanation: "Ratschlag: Du solltest..."
    },
    "a2-sollte-order-2": {
        id: "a2-sollte-order-2",
        type: "word-order",
        topic: "a2-l4-sollen-konjunktiv",
        translation: "Йому слід піти до лікаря.",
        words: ["Er", "sollte", "zum", "Arzt", "gehen."],
        correctOrder: ["Er", "sollte", "zum", "Arzt", "gehen."],
        explanation: "Er sollte ... gehen."
    }
};

// Helper functions
export function getExercisesForTopic(topicId) {
    return Object.values(exercises).filter(e => e.topic === topicId);
}

export function getExercisesForLesson(lessonId) {
    return Object.values(exercises).filter(e => e.lesson === lessonId);
}

export function getAllExercises() {
    return Object.values(exercises);
}

export const exerciseTypes = {
    "multiple-choice": "Вибери правильний варіант",
    "fill-blank": "Заповни пропуск",
    "word-order": "Розташуй слова",
    "true-false": "Правда чи ні?",
    "match": "З'єднай пари"
};

export default exercises;
