/**
 * Тести для перевірки знань після кожної лекції
 * Структура: lessonTests[lessonId] = { questions: [...] }
 */

export const lessonTests = {
    // ==========================================
    // TEST ZU LEKTION 1 - Grüße, Vorstellen
    // ==========================================
    1: {
        title: "Test zu Lektion 1",
        description: "Привітання, знайомство",
        questions: [
            // 1. Ordnen Sie zu - Grüße
            {
                id: "l1-1",
                type: "match",
                question: "Оберіть правильне привітання для ситуації",
                pairs: [
                    { left: "🌅 Ранок", right: "Guten Morgen" },
                    { left: "☀️ День", right: "Guten Tag" },
                    { left: "🌙 Вечір", right: "Guten Abend" },
                    { left: "👋 Прощання", right: "Auf Wiedersehen" },
                    { left: "😊 Невимушено", right: "Tschüs" }
                ]
            },
            // 2. Was ist richtig? - sein
            {
                id: "l1-2",
                type: "multiple-choice",
                question: "Ich ___ Lara.",
                options: ["ist", "bist", "bin"],
                correct: 2,
                explanation: "ich bin - я є"
            },
            {
                id: "l1-3",
                type: "multiple-choice",
                question: "Wie ___ du?",
                options: ["heiße", "heißt", "heißen"],
                correct: 1,
                explanation: "du heißt - ти називаєшся"
            },
            {
                id: "l1-4",
                type: "multiple-choice",
                question: "Ich ___ Spanisch.",
                options: ["sprichst", "spreche", "sprechen"],
                correct: 1,
                explanation: "ich spreche - я розмовляю"
            },
            {
                id: "l1-5",
                type: "multiple-choice",
                question: "Du ___ aus Kroatien.",
                options: ["kommen", "kommst", "komme"],
                correct: 1,
                explanation: "du kommst - ти приїжджаєш"
            },
            {
                id: "l1-6",
                type: "multiple-choice",
                question: "Woher ___ Sie?",
                options: ["kommen", "kommst", "komme"],
                correct: 0,
                explanation: "Sie kommen - Ви приїжджаєте"
            },
            {
                id: "l1-7",
                type: "multiple-choice",
                question: "Mein Name ___ Frank.",
                options: ["bist", "ist", "sind"],
                correct: 1,
                explanation: "Name ist - ім'я є"
            },
            // 3. Verbinden Sie - Fragen und Antworten
            {
                id: "l1-8",
                type: "match",
                question: "З'єднайте питання з відповідями",
                pairs: [
                    { left: "Woher kommst du?", right: "Ich komme aus Syrien." },
                    { left: "Wer ist das?", right: "Ich heiße Tim Wilson." },
                    { left: "Wie heißen Sie?", right: "Ich bin Klaus." },
                    { left: "Wer bist du?", right: "Das ist Lara." },
                    { left: "Was sprichst du?", right: "Ich spreche Polnisch." }
                ]
            },
            // 4. Schreiben Sie die Fragen
            {
                id: "l1-9",
                type: "fill-blank",
                question: "___ kommst du? – Ich komme aus Griechenland.",
                correct: "Woher",
                explanation: "Woher = звідки"
            },
            {
                id: "l1-10",
                type: "fill-blank",
                question: "___ heißen Sie? – Ich heiße Maria Torres.",
                correct: "Wie",
                explanation: "Wie = як"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 2 - Familie
    // ==========================================
    2: {
        title: "Test zu Lektion 2",
        description: "Сім'я, числа, присвійні займенники",
        questions: [
            // 1. Familie Wortschatz
            {
                id: "l2-1",
                type: "match",
                question: "З'єднайте слова з їх значенням",
                pairs: [
                    { left: "die Mutter", right: "мама" },
                    { left: "der Vater", right: "тато" },
                    { left: "die Schwester", right: "сестра" },
                    { left: "der Bruder", right: "брат" },
                    { left: "die Großeltern", right: "бабуся і дідусь" }
                ]
            },
            // 2. Zahlen
            {
                id: "l2-2",
                type: "multiple-choice",
                question: "11 =",
                options: ["eins", "elf", "zehn"],
                correct: 1,
                explanation: "elf = 11"
            },
            {
                id: "l2-3",
                type: "multiple-choice",
                question: "12 =",
                options: ["zwei", "zwölf", "zwanzig"],
                correct: 1,
                explanation: "zwölf = 12"
            },
            {
                id: "l2-4",
                type: "multiple-choice",
                question: "13 =",
                options: ["drei", "dreißig", "dreizehn"],
                correct: 2,
                explanation: "dreizehn = 13"
            },
            // 3. Sie oder Er?
            {
                id: "l2-5",
                type: "multiple-choice",
                question: "Das ist Vanessa. ___ kommt aus Frankreich.",
                options: ["Er", "Sie", "Es"],
                correct: 1,
                explanation: "Vanessa = жіноче ім'я → Sie"
            },
            {
                id: "l2-6",
                type: "multiple-choice",
                question: "Das ist Tim. ___ wohnt in München.",
                options: ["Er", "Sie", "Es"],
                correct: 0,
                explanation: "Tim = чоловіче ім'я → Er"
            },
            // 4. Possessivartikel
            {
                id: "l2-7",
                type: "fill-blank",
                question: "Das ist ___ Sohn Michael. (ich)",
                correct: "mein",
                explanation: "mein Sohn (der Sohn = чоловічий рід)"
            },
            {
                id: "l2-8",
                type: "fill-blank",
                question: "Ich heiße Anna und das ist ___ Schwester Miriam. (ich)",
                correct: "meine",
                explanation: "meine Schwester (die Schwester = жіночий рід)"
            },
            {
                id: "l2-9",
                type: "fill-blank",
                question: "Wie heißt ___ Bruder? – Er heißt Aron. (du)",
                correct: "dein",
                explanation: "dein Bruder (der Bruder = чоловічий рід)"
            },
            // 5. Verben konjugieren
            {
                id: "l2-10",
                type: "fill-blank",
                question: "Woher ___ du? – Ich komme aus dem Iran. (kommen)",
                correct: "kommst",
                explanation: "du kommst"
            },
            {
                id: "l2-11",
                type: "fill-blank",
                question: "Welche Sprachen ___ du? (sprechen)",
                correct: "sprichst",
                explanation: "du sprichst (sprechen має зміну e→i)"
            },
            {
                id: "l2-12",
                type: "fill-blank",
                question: "Wo ___ ihr? – Wir wohnen in Frankfurt. (wohnen)",
                correct: "wohnt",
                explanation: "ihr wohnt"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 3 - Essen und Trinken
    // ==========================================
    3: {
        title: "Test zu Lektion 3",
        description: "Їжа, напої, артиклі, множина",
        questions: [
            // 1. Was passt nicht?
            {
                id: "l3-1",
                type: "multiple-choice",
                question: "Що НЕ підходить? Fleisch, Wurst, Reis, Fisch",
                options: ["Fleisch", "Wurst", "Reis", "Fisch"],
                correct: 2,
                explanation: "Reis (рис) - не м'ясо/риба"
            },
            {
                id: "l3-2",
                type: "multiple-choice",
                question: "Що НЕ підходить? Kaffee, Brot, Kuchen, Brötchen",
                options: ["Kaffee", "Brot", "Kuchen", "Brötchen"],
                correct: 0,
                explanation: "Kaffee (кава) - не випічка"
            },
            // 2. Plural
            {
                id: "l3-3",
                type: "fill-blank",
                question: "eine Banane → viele ___",
                correct: "Bananen",
                explanation: "die Banane → die Bananen"
            },
            {
                id: "l3-4",
                type: "fill-blank",
                question: "ein Apfel → viele ___",
                correct: "Äpfel",
                explanation: "der Apfel → die Äpfel (Umlaut)"
            },
            {
                id: "l3-5",
                type: "fill-blank",
                question: "ein Ei → viele ___",
                correct: "Eier",
                explanation: "das Ei → die Eier"
            },
            // 3. kein/keine
            {
                id: "l3-6",
                type: "fill-blank",
                question: "Das ist ___ Ei. Das ist eine Kiwi.",
                correct: "kein",
                explanation: "das Ei → kein Ei"
            },
            {
                id: "l3-7",
                type: "fill-blank",
                question: "Das sind ___ Brötchen. Das sind Kuchen.",
                correct: "keine",
                explanation: "Plural → keine"
            },
            // 4. Preise
            {
                id: "l3-8",
                type: "multiple-choice",
                question: "1,15 € = ?",
                options: ["ein Euro fünfzehn", "eins fünfzehn", "ein Euro und fünfzehn Cent"],
                correct: 0,
                explanation: "1,15 € = ein Euro fünfzehn"
            },
            {
                id: "l3-9",
                type: "multiple-choice",
                question: "0,50 € = ?",
                options: ["null Euro fünfzig", "fünfzig Cent", "ein halber Euro"],
                correct: 1,
                explanation: "0,50 € = fünfzig Cent"
            },
            // 5. Einkaufen Dialog
            {
                id: "l3-10",
                type: "fill-blank",
                question: "Was ___ Sie? – Tomaten, bitte.",
                correct: "möchten",
                explanation: "Was möchten Sie? = Що бажаєте?"
            },
            // 6. Mengenangaben
            {
                id: "l3-11",
                type: "fill-blank",
                question: "1 ___ Kartoffeln (kg)",
                correct: "Kilo",
                explanation: "ein Kilo Kartoffeln"
            },
            {
                id: "l3-12",
                type: "fill-blank",
                question: "1 ___ Milch",
                correct: "Liter",
                explanation: "ein Liter Milch"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 4 - Wohnung
    // ==========================================
    4: {
        title: "Test zu Lektion 4",
        description: "Житло, меблі, nicht/kein",
        questions: [
            // 1. Zimmer
            {
                id: "l4-1",
                type: "match",
                question: "З'єднайте кімнати з їх описом",
                pairs: [
                    { left: "das Schlafzimmer", right: "Dort ist mein Bett" },
                    { left: "das Bad", right: "Dort sind Dusche und Badewanne" },
                    { left: "die Küche", right: "Dort sind Kühlschrank und Herd" },
                    { left: "das Wohnzimmer", right: "Dort ist das Sofa" }
                ]
            },
            // 2. Gegenteil
            {
                id: "l4-2",
                type: "multiple-choice",
                question: "Das Haus ist neu. Das Haus ist ___.",
                options: ["alt", "schmal", "dunkel"],
                correct: 0,
                explanation: "neu ↔ alt"
            },
            {
                id: "l4-3",
                type: "multiple-choice",
                question: "Die Wohnung ist groß. Die Wohnung ist ___.",
                options: ["breit", "schmal", "klein"],
                correct: 2,
                explanation: "groß ↔ klein"
            },
            {
                id: "l4-4",
                type: "multiple-choice",
                question: "Der Balkon ist hell. Der Balkon ist ___.",
                options: ["neu", "dunkel", "schön"],
                correct: 1,
                explanation: "hell ↔ dunkel"
            },
            // 3. Er, Sie oder Es?
            {
                id: "l4-5",
                type: "fill-blank",
                question: "Das ist ein Fernseher. ___ ist neu.",
                correct: "Er",
                explanation: "der Fernseher → Er"
            },
            {
                id: "l4-6",
                type: "fill-blank",
                question: "Das ist eine Waschmaschine. ___ ist neu.",
                correct: "Sie",
                explanation: "die Waschmaschine → Sie"
            },
            {
                id: "l4-7",
                type: "fill-blank",
                question: "Das ist ein Schrank. ___ ist groß.",
                correct: "Er",
                explanation: "der Schrank → Er"
            },
            // 4. nicht oder kein?
            {
                id: "l4-8",
                type: "fill-blank",
                question: "Hast du eine Schwester? – Nein, ich habe ___ Schwester.",
                correct: "keine",
                explanation: "die Schwester → keine Schwester"
            },
            {
                id: "l4-9",
                type: "fill-blank",
                question: "Wohnst du in Berlin? – Nein, ich wohne ___ in Berlin.",
                correct: "nicht",
                explanation: "Заперечення дієслова → nicht"
            },
            {
                id: "l4-10",
                type: "fill-blank",
                question: "Haben Sie Kinder? – Nein, ich habe ___ Kinder.",
                correct: "keine",
                explanation: "Plural → keine Kinder"
            },
            // 5. Wohnungsanzeige
            {
                id: "l4-11",
                type: "multiple-choice",
                question: "Was bedeutet '3 Zimmer, 60 m²'?",
                options: ["3 Räume, sechzig Quadratmeter", "3 Etagen", "60 Zimmer"],
                correct: 0,
                explanation: "3 Zimmer = 3 кімнати, 60 m² = 60 квадратних метрів"
            },
            {
                id: "l4-12",
                type: "multiple-choice",
                question: "Was ist 'Kaltmiete'?",
                options: ["оренда + комунальні", "тільки оренда", "тільки комунальні"],
                correct: 1,
                explanation: "Kaltmiete = оренда без комунальних послуг"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 5 - Mein Tag
    // ==========================================
    5: {
        title: "Test zu Lektion 5",
        description: "Час, розпорядок дня, trennbare Verben",
        questions: [
            // 1. Uhrzeit
            {
                id: "l5-1",
                type: "fill-blank",
                question: "9:00 = Es ist ___ Uhr.",
                correct: "neun",
                explanation: "9:00 = neun Uhr"
            },
            {
                id: "l5-2",
                type: "multiple-choice",
                question: "7:30 = ?",
                options: ["halb sieben", "halb acht", "sieben Uhr dreißig"],
                correct: 1,
                explanation: "7:30 = halb acht (половина восьмої)"
            },
            {
                id: "l5-3",
                type: "multiple-choice",
                question: "2:45 = ?",
                options: ["Viertel vor drei", "Viertel nach zwei", "halb drei"],
                correct: 0,
                explanation: "2:45 = Viertel vor drei"
            },
            // 2. Tagesablauf
            {
                id: "l5-4",
                type: "fill-blank",
                question: "Jan ___ um 7.20 Uhr auf. (aufstehen)",
                correct: "steht",
                explanation: "aufstehen → er steht ... auf"
            },
            {
                id: "l5-5",
                type: "fill-blank",
                question: "Anna ___ die Küche auf. (aufräumen)",
                correct: "räumt",
                explanation: "aufräumen → sie räumt ... auf"
            },
            {
                id: "l5-6",
                type: "fill-blank",
                question: "Marco ___ am Abend fern. (fernsehen)",
                correct: "sieht",
                explanation: "fernsehen → er sieht ... fern"
            },
            // 3. Temporale Präpositionen
            {
                id: "l5-7",
                type: "fill-blank",
                question: "___ Wochenende schläft Lara lang.",
                correct: "Am",
                explanation: "am + Tag/Wochenende"
            },
            {
                id: "l5-8",
                type: "fill-blank",
                question: "Dann macht sie ___ elf Hausaufgaben.",
                correct: "um",
                explanation: "um + Uhrzeit"
            },
            {
                id: "l5-9",
                type: "fill-blank",
                question: "___ der Nacht sieht Lara lang fern.",
                correct: "In",
                explanation: "in der Nacht"
            },
            // 4. Sätze schreiben
            {
                id: "l5-10",
                type: "multiple-choice",
                question: "frühstücken – um – Jan – 7.00 Uhr. Правильний порядок:",
                options: ["Jan frühstückt um 7.00 Uhr.", "Um 7.00 Uhr Jan frühstückt.", "Frühstückt Jan um 7.00 Uhr."],
                correct: 0,
                explanation: "Дієслово на 2-му місці: Jan frühstückt um 7.00 Uhr."
            },
            // 5. Trennbare Verben in Kontext
            {
                id: "l5-11",
                type: "fill-blank",
                question: "Am Samstag (schlafen) Lara lange. Sie ___ erst um 10.00 Uhr ___.",
                correct: "steht...auf",
                explanation: "aufstehen = вставати, sie steht auf"
            },
            {
                id: "l5-12",
                type: "multiple-choice",
                question: "Wann ist der Kindergarten geöffnet?",
                options: ["Von 8.00 bis 18.00 Uhr", "Um 18.00 Uhr", "Am Wochenende"],
                correct: 0,
                explanation: "von...bis = з...до"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 6 - Jahreszeiten, Wetter
    // ==========================================
    6: {
        title: "Test zu Lektion 6",
        description: "Погода, пори року, знахідний відмінок (Akkusativ)",
        questions: [
            // 1. Wetter
            {
                id: "l6-1",
                type: "match",
                question: "З'єднайте речення про погоду",
                pairs: [
                    { left: "Es sind 25 Grad.", right: "Es ist warm." },
                    { left: "Es schneit.", right: "Es ist kalt." },
                    { left: "Die Sonne scheint.", right: "Es ist schön." },
                    { left: "Es regnet.", right: "Es ist nass." }
                ]
            },
            // 2. Verben ergänzen
            {
                id: "l6-2",
                type: "fill-blank",
                question: "Klaus und Gabi ___ (grillen) heute.",
                correct: "grillen",
                explanation: "Klaus und Gabi = sie (Plural) -> grillen"
            },
            {
                id: "l6-3",
                type: "fill-blank",
                question: "Sara ___ (treffen) heute Freunde.",
                correct: "trifft",
                explanation: "treffen -> sie trifft (e -> i)"
            },
            {
                id: "l6-4",
                type: "fill-blank",
                question: "Lin ___ (trinken) Peter einen Pullover.",
                correct: "trickt",
                explanation: "?"
            },
            {
                id: "l6-5",
                type: "fill-blank",
                question: "Meine Kinder gehen heute ___ (schwimmen).",
                correct: "schwimmen",
                explanation: "gehen schwimmen"
            },
            {
                id: "l6-6",
                type: "fill-blank",
                question: "Heute ___ (surfen) ich im Internet.",
                correct: "surfe",
                explanation: "ich surfe"
            },
            // 3. Jahreszeiten ordnen
            {
                id: "l6-7",
                type: "match",
                question: "Розташуйте пори року",
                pairs: [
                    { left: "1", right: "der Frühling" },
                    { left: "2", right: "der Sommer" },
                    { left: "3", right: "der Herbst" },
                    { left: "4", right: "der Winter" }
                ]
            },
            // 4. Akkusativ (den/das/die)
            {
                id: "l6-8",
                type: "multiple-choice",
                question: "Ich glaube, wir haben ___ Käse nicht dabei.",
                options: ["den", "das", "die"],
                correct: 0,
                explanation: "der Käse (Akk) -> den Käse"
            },
            {
                id: "l6-9",
                type: "multiple-choice",
                question: "Ich möchte gern ___ Saft. Hast du ___ Saft?",
                options: ["der ... den", "den ... den", "den ... der"],
                correct: 1,
                explanation: "der Saft (Akk) -> den Saft"
            },
            // 5. Akkusativ Dialog
            {
                id: "l6-10",
                type: "match",
                question: "З'єднайте питання та відповіді (Akkusativ)",
                pairs: [
                    { left: "Trinken Sie keinen Tee?", right: "Doch, ich trinke gern Tee." },
                    { left: "Möchten Sie ein Glas Wein?", right: "Nein, ich trinke keinen Wein." },
                    { left: "Essen Sie gern Kuchen?", right: "Ja, ich esse gern Kuchen." }
                ]
            },
            // 6. Possessiv im Akkusativ
            {
                id: "l6-11",
                type: "fill-blank",
                question: "Ja, richtig, ich verkaufe ___ Computer. (mein)",
                correct: "meinen",
                explanation: "der Computer (Akk) -> meinen Computer"
            },
            {
                id: "l6-12",
                type: "fill-blank",
                question: "Ich verkaufe ___ Waschmaschine. (mein)",
                correct: "meine",
                explanation: "die Waschmaschine (Akk) -> meine Waschmaschine"
            },
            {
                id: "l6-13",
                type: "fill-blank",
                question: "Ich verkaufe ___ Auto. (mein)",
                correct: "mein",
                explanation: "das Auto (Akk) -> mein Auto"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 7 - Freizeit, Können
    // ==========================================
    7: {
        title: "Test zu Lektion 7",
        description: "Хобі, модальні дієслова (können/wollen), Perfekt",
        questions: [
            // 1. Wortschatz Hobbys
            {
                id: "l7-1",
                type: "match",
                question: "З'єднайте дієслова з іменниками",
                pairs: [
                    { left: "Musik", right: "hören" },
                    { left: "ein Diktat", right: "schreiben" },
                    { left: "ein Lied", right: "singen" },
                    { left: "nach Hause", right: "fahren" },
                    { left: "Tennis", right: "spielen" }
                ]
            },
            // 2. Was machen die Leute?
            {
                id: "l7-2",
                type: "multiple-choice",
                question: "Was machen sie im Winter in den Bergen?",
                options: ["Schach spielen", "Ski fahren", "schwimmen"],
                correct: 1,
                explanation: "Ski fahren (кататися на лижах)"
            },
            // 3. Modalverben (können/wollen)
            {
                id: "l7-3",
                type: "fill-blank",
                question: "Paul ist krank. Er ___ nicht zur Schule gehen. (können)",
                correct: "kann",
                explanation: "er kann"
            },
            {
                id: "l7-4",
                type: "fill-blank",
                question: "___ du heute abend essen? (wollen)",
                correct: "Willst",
                explanation: "du willst"
            },
            {
                id: "l7-5",
                type: "fill-blank",
                question: "Ich gehe jetzt einkaufen. Was ___ du heute abend essen? (wollen)",
                correct: "willst",
                explanation: "du willst"
            },
            {
                id: "l7-6",
                type: "fill-blank",
                question: "Du lernst schon lange Spanisch. ___ du schon spanische Bücher lesen? (können)",
                correct: "Kannst",
                explanation: "du kannst"
            },
            {
                id: "l7-7",
                type: "fill-blank",
                question: "___ wir heute Abend ins Kino gehen? (wollen)",
                correct: "Wollen",
                explanation: "wir wollen"
            },
            // 4. Perfekt (haben + ge-)
            {
                id: "l7-8",
                type: "fill-blank",
                question: "Gestern ___ ich nicht gearbeitet. (haben)",
                correct: "habe",
                explanation: "ich habe"
            },
            {
                id: "l7-9",
                type: "fill-blank",
                question: "Letztes Wochenende ___ wir nach Paris gefahren. (sein)",
                correct: "sind",
                explanation: "wir sind gefahren (Bewegung)"
            },
            {
                id: "l7-10",
                type: "fill-blank",
                question: "Barbara ___ gestern ihre Freundin getroffen. (haben)",
                correct: "hat",
                explanation: "hat getroffen"
            },
            // 5. Perfekt Partizipien
            {
                id: "l7-11",
                type: "fill-blank",
                question: "Was hast du heute nicht gut ___? (schlafen)",
                correct: "geschlafen",
                explanation: "Partizip II von schlafen"
            },
            {
                id: "l7-12",
                type: "fill-blank",
                question: "Nein, ich ___ mit dem Bus ___. (fahren)",
                correct: "bin...gefahren",
                explanation: "sein + gefahren"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 8 - Berufe, Präteritum
    // ==========================================
    8: {
        title: "Test zu Lektion 8",
        description: "Професії, минулий час (waren/hatten), прийменники часу",
        questions: [
            // 1. Berufe finden
            {
                id: "l8-1",
                type: "match",
                question: "Знайдіть професії",
                pairs: [
                    { left: "Der Hausmeister", right: "ремонтує все в будинку" },
                    { left: "Die Krankenschwester", right: "допомагає хворим" },
                    { left: "Der Polizist", right: "забезпечує порядок" },
                    { left: "Der Koch", right: "готує їжу" }
                ]
            },
            // 2. seit / wann / wie lange / vor / für
            {
                id: "l8-2",
                type: "fill-blank",
                question: "___ sind Sie geboren? – 1995.",
                correct: "Wann",
                explanation: "Wann = коли (дата)"
            },
            {
                id: "l8-3",
                type: "fill-blank",
                question: "Wann haben Sie Ihre Ausbildung gemacht? – ___ zwei Jahren.",
                correct: "Vor",
                explanation: "Vor = тому (назад)"
            },
            {
                id: "l8-4",
                type: "fill-blank",
                question: "___ lernen Sie schon Deutsch? – Seit sechs Wochen.",
                correct: "Wie lange",
                explanation: "Wie lange = як довго"
            },
            {
                id: "l8-5",
                type: "fill-blank",
                question: "Sind Sie schon arbeitslos? – ___ drei Monaten.",
                correct: "Seit",
                explanation: "Seit = з (минулого до тепер)"
            },
            {
                id: "l8-6",
                type: "fill-blank",
                question: "Haben Sie Koch gelernt? – ___ fünf Jahren.",
                correct: "Vor",
                explanation: "Vor = тому"
            },
            {
                id: "l8-7",
                type: "fill-blank",
                question: "Für wie lange suchen Sie eine Wohnung? – ___ zwei Jahre.",
                correct: "Für",
                explanation: "Für = на (період в майбутньому)"
            },
            // 3. Präteritum (war/hatte)
            {
                id: "l8-8",
                type: "fill-blank",
                question: "Ich ___ am Morgen die Anzeigen in der Zeitung. (lesen -> Perfekt)",
                correct: "habe...gelesen",
                explanation: "Ich habe gelesen"
            },
            {
                id: "l8-9",
                type: "fill-blank",
                question: "Eine Anzeige ___ besonders interessant. (sein -> Präteritum)",
                correct: "war",
                explanation: "war (була)"
            },
            {
                id: "l8-10",
                type: "fill-blank",
                question: "Schon zehn Minuten später ___ ich eine Antwort. (haben -> Präteritum)",
                correct: "hatte",
                explanation: "hatte (мав)"
            },
            // 4. Was passt zusammen?
            {
                id: "l8-11",
                type: "match",
                question: "З'єднайте питання та відповіді про роботу",
                pairs: [
                    { left: "Was sind Sie von Beruf?", right: "Ich bin Journalist." },
                    { left: "Wie lange haben Sie als Koch gearbeitet?", right: "Vier Jahre." },
                    { left: "Wo arbeiten Sie?", right: "Bei Heppel und Co." }
                ]
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 9 - Unterwegs
    // ==========================================
    9: {
        title: "Test zu Lektion 9",
        description: "Подорожі, готель, модальні дієслова (müssen/dürfen)",
        questions: [
            // 1. Wortschatz Hotel
            {
                id: "l9-1",
                type: "match",
                question: "З'єднайте слова",
                pairs: [
                    { left: "Das Doppelzimmer", right: "Кімната на двох" },
                    { left: "Die Halbpension", right: "Сніданок і вечеря" },
                    { left: "Die Sehenswürdigkeiten", right: "Визначні місця" },
                    { left: "Die Kreditkarte", right: "Кредитна картка" }
                ]
            },
            // 2. Ergänzen Sie in der richtigen Form
            {
                id: "l9-2",
                type: "fill-blank",
                question: "Hey, Sabine, ___ doch mal leise! (sein - Imperativ)",
                correct: "sei",
                explanation: "du -> sei!"
            },
            {
                id: "l9-3",
                type: "fill-blank",
                question: "___ Sie das Formular da drüben ___. (ausfüllen - Bitte)",
                correct: "Füllen...aus",
                explanation: "Füllen Sie aus!"
            },
            {
                id: "l9-4",
                type: "fill-blank",
                question: "Paul, ___ mir mal die Wasserflasche. (geben)",
                correct: "gib",
                explanation: "du -> gib!"
            },
            // 3. Müssen oder Dürfen?
            {
                id: "l9-5",
                type: "fill-blank",
                question: "Hier ___ man nur 30 fahren. (dürfen)",
                correct: "darf",
                explanation: "man darf"
            },
            {
                id: "l9-6",
                type: "fill-blank",
                question: "Mach die Zigarette aus. Hier ___ du nicht rauchen. (dürfen)",
                correct: "darfst",
                explanation: "du darfst nicht"
            },
            {
                id: "l9-7",
                type: "fill-blank",
                question: "Morgen ___ ich zum Zahnarzt gehen. (müssen)",
                correct: "muss",
                explanation: "ich muss"
            },
            // 4. Dialog ordnen
            {
                id: "l9-8",
                type: "match",
                question: "Розташуйте діалог в готелі",
                pairs: [
                    { left: "1", right: "Guten Tag. Kann ich Ihnen helfen?" },
                    { left: "2", right: "Ja, guten Tag. Mein Name ist Gerber." },
                    { left: "3", right: "Ah, ja, Herr Gerber. Sie sind sehr früh." },
                    { left: "4", right: "Ja, es tut mir leid." }
                ]
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 10 - Gesundheit
    // ==========================================
    10: {
        title: "Test zu Lektion 10",
        description: "Здоров'я, тіло, поради (sollen. Imperativ)",
        questions: [
            // 1. Körperteile und Schmerzen
            {
                id: "l10-1",
                type: "fill-blank",
                question: "Sein ___ tut weh. (Arm)",
                correct: "Arm",
                explanation: "Der Arm"
            },
            {
                id: "l10-2",
                type: "fill-blank",
                question: "Ihre ___ tun weh. (Ohr - Plural)",
                correct: "Ohren",
                explanation: "Die Ohren"
            },
            {
                id: "l10-3",
                type: "fill-blank",
                question: "Mein ___ tut weh. (Bauch)",
                correct: "Bauch",
                explanation: "Der Bauch"
            },
            // 2. Ergänzen Sie: mein, sein, ihr
            {
                id: "l10-4",
                type: "multiple-choice",
                question: "Wie siehst du denn aus? ___ Fuß ist ja ganz dick! (du)",
                options: ["Mein", "Dein", "Sein"],
                correct: 1,
                explanation: "Dein Fuß (твій)"
            },
            {
                id: "l10-5",
                type: "multiple-choice",
                question: "Was haben Sie denn gemacht? - ___ Hand ist ja ganz dick! (Sie)",
                options: ["Ihre", "Deine", "Seine"],
                correct: 0,
                explanation: "Ihre Hand (Ваша)"
            },
            {
                id: "l10-6",
                type: "fill-blank",
                question: "Wie geht's Sabine? Ist sie krank? ___ Nase ist ganz rot! (sie)",
                correct: "Ihre",
                explanation: "Ihre Nase (її)"
            },
            {
                id: "l10-7",
                type: "fill-blank",
                question: "Wie geht's Markus? ___ Zahn tut weh. (er)",
                correct: "Sein",
                explanation: "Sein Zahn (його)"
            },
            // 3. Ratschläge geben (sollen)
            {
                id: "l10-8",
                type: "match",
                question: "З'єднайте поради лікаря",
                pairs: [
                    { left: "Er hat auch gesagt, du", right: "sollst viel schlafen." },
                    { left: "Und", right: "Tee trinken." },
                    { left: "Er meint auch, du", right: "sollst nicht lesen." }
                ]
            },
            // 4. Termin vereinbaren
            {
                id: "l10-9",
                type: "match",
                question: "Діалог запису до лікаря",
                pairs: [
                    { left: "Fitness-Studio 'Body up', guten Tag!", right: "Guten Morgen. Hier ist Bremer." },
                    { left: "Ich möchte gern bei Ihnen trainieren.", right: "Gerne! Aber wir machen zuerst einen Check." },
                    { left: "Wann haben Sie Zeit?", right: "Passt es Ihnen am Dienstag um 16 Uhr?" },
                    { left: "Ja, das passt gut.", right: "Prima! Dann bis Dienstag!" }
                ]
            }
        ]
    }
};
export function getTestForLesson(lessonId) {
    return lessonTests[lessonId] || null;
}

export function getQuestionCount(lessonId) {
    const test = lessonTests[lessonId];
    return test ? test.questions.length : 0;
}

export default lessonTests;
