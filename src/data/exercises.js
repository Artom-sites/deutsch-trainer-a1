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
