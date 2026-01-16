export const lessonTestsA2 = {
    // ==========================================
    // TEST ZU LEKTION 8 - Am Wochenende
    // ==========================================
    "a2-l8": {
        title: "Test zu Lektion 8",
        description: "Вихідні, робота, Konjunktiv II, trotzdem",
        questions: [
            // 1. Wortschatz: Berufe & Tätigkeiten
            {
                id: "a2-l8-1",
                type: "match",
                question: "Was machen diese Personen?",
                pairs: [
                    { left: "Der Regisseur", right: "macht Filme" },
                    { left: "Der Schauspieler", right: "spielt im Film" },
                    { left: "Der Hausmeister", right: "repariert Dinge" },
                    { left: "Der Blogger", right: "schreibt Texte online" }
                ]
            },
            // 2. Konjunktiv II (wäre/hätte)
            {
                id: "a2-l8-2",
                type: "multiple-choice",
                question: "Ich ___ gern reich. (sein)",
                options: ["war", "wäre", "bin"],
                correct: 1,
                explanation: "Konjunktiv II von sein: ich wäre"
            },
            {
                id: "a2-l8-3",
                type: "multiple-choice",
                question: "Er ___ gern ein schnelles Auto. (haben)",
                options: ["hat", "hatte", "hätte"],
                correct: 2,
                explanation: "Konjunktiv II von haben: er hätte"
            },
            // 3. Konjunktiv II (würde + Infinitiv)
            {
                id: "a2-l8-4",
                type: "fill-blank",
                question: "Ich ___ gern nach Italien fahren. (würde/hätte)",
                correct: "würde",
                explanation: "würde + Infinitiv (fahren)"
            },
            {
                id: "a2-l8-5",
                type: "fill-blank",
                question: "___ du mir bitte helfen? (Könntest/Hättest)",
                correct: "Könntest",
                explanation: "Höfliche Bitte: Könntest du..."
            },
            // 4. Konjunktion 'trotzdem'
            {
                id: "a2-l8-6",
                type: "multiple-choice",
                question: "Es regnet. ___ gehe ich spazieren.",
                options: ["Deshalb", "Trotzdem", "Und"],
                correct: 1,
                explanation: "Trotzdem = все одно / незважаючи на це"
            },
            {
                id: "a2-l8-7",
                type: "word-order",
                question: "Satzbau: Ich bin müde. / ich / arbeiten / trotzdem / muss.",
                correct: "Ich muss trotzdem arbeiten.",
                explanation: "Trotzdem стоїть після дієслова або займає 1 позицію (Trotzdem muss ich...)."
            },
            // 5. Vorschläge machen
            {
                id: "a2-l8-8",
                type: "match",
                question: "Reagieren Sie auf den Vorschlag",
                pairs: [
                    { left: "Gehen wir ins Kino?", right: "Ja, gern!" },
                    { left: "Hast du Lust auf Pizza?", right: "Nein, ich habe keinen Hunger." },
                    { left: "Wollen wir Fußball spielen?", right: "Super Idee!" }
                ]
            },
            // 6. Wortschatz Mix
            {
                id: "a2-l8-9",
                type: "fill-blank",
                question: "Das Buch ist sehr ___ (spannend/langweilig). Ich kann nicht aufhören zu lesen.",
                correct: "spannend",
                explanation: "spannend = захоплююче"
            },
            {
                id: "a2-l8-10",
                type: "multiple-choice",
                question: "Die ___ war super. Wir haben viel getanzt.",
                options: ["Wanderung", "Stimmung", "Erfahrung"],
                correct: 1,
                explanation: "Die Stimmung (атмосфера/настрій)"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 9 - Meine Sachen
    // ==========================================
    "a2-l9": {
        title: "Test zu Lektion 9",
        description: "Adjektivdeklination, Komparation, Vergleiche",
        questions: [
            // 1. Wortschatz: Möbel & Gegenstände
            {
                id: "a2-l9-1",
                type: "match",
                question: "Ordnen Sie zu",
                pairs: [
                    { left: "Der Teller", right: "zum Essen" },
                    { left: "Der Löffel", right: "für Suppe" },
                    { left: "Das Messer", right: "zum Schneiden" },
                    { left: "Die Gabel", right: "zum Aufspießen" }
                ]
            },
            // 2. Adjektivdeklination (unbestimmter Artikel)
            {
                id: "a2-l9-2",
                type: "fill-blank",
                question: "Ich habe einen ___ (neu) Tisch gekauft.",
                correct: "neuen",
                explanation: "einen (Akk) + neuen"
            },
            {
                id: "a2-l9-3",
                type: "fill-blank",
                question: "Das ist ein ___ (schön) Geschenk.",
                correct: "schönes",
                explanation: "ein (Nom/Neutrum) + schönes"
            },
            {
                id: "a2-l9-4",
                type: "fill-blank",
                question: "Wir wohnen in einer ___ (groß) Wohnung.",
                correct: "großen",
                explanation: "einer (Dat) + großen"
            },
            // 3. Komparation
            {
                id: "a2-l9-5",
                type: "multiple-choice",
                question: "Der Zug ist ___ als das Auto.",
                options: ["schnell", "schneller", "am schnellsten"],
                correct: 1,
                explanation: "Vergleich mit 'als' -> Komparativ"
            },
            {
                id: "a2-l9-6",
                type: "fill-blank",
                question: "Ich mag Tee ___ (gern) als Kaffee.",
                correct: "lieber",
                explanation: "gern -> lieber"
            },
            {
                id: "a2-l9-7",
                type: "fill-blank",
                question: "Im Sommer ist es am ___ (warm).",
                correct: "wärmsten",
                explanation: "am + Superlativ: wärmsten"
            },
            // 4. Vergleiche: als vs wie
            {
                id: "a2-l9-8",
                type: "multiple-choice",
                question: "Berlin ist größer ___ München.",
                options: ["als", "wie", "so"],
                correct: 0,
                explanation: "Ungleichheit (Komparativ) -> als"
            },
            {
                id: "a2-l9-9",
                type: "multiple-choice",
                question: "Er ist so groß ___ ich.",
                options: ["als", "wie", "so"],
                correct: 1,
                explanation: "Gleichheit (so ...) -> wie"
            },
            // 5. Dialog sortieren
            {
                id: "a2-l9-10",
                type: "match",
                question: "Bring den Dialog in die richtige Reihenfolge",
                pairs: [
                    { left: "1. Hallo, was kostet die Lampe?", right: "Sie kostet 10 Euro." },
                    { left: "2. Das ist aber teuer.", right: "Na gut, 8 Euro." },
                    { left: "3. Okay, ich nehme sie.", right: "Hier, bitte schön." }
                ]
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 10 - Kommunikation
    // ==========================================
    "a2-l10": {
        title: "Test zu Lektion 10",
        description: "Medien, Passiv, welch-/was für ein",
        questions: [
            // 1. Wortschatz: Computer
            {
                id: "a2-l10-1",
                type: "match",
                question: "Was passt zusammen?",
                pairs: [
                    { left: "E-Mails", right: "checken" },
                    { left: "Im Internet", right: "surfen" },
                    { left: "Den Computer", right: "starten" },
                    { left: "Daten", right: "speichern" }
                ]
            },
            // 2. Passiv Präsens
            {
                id: "a2-l10-2",
                type: "multiple-choice",
                question: "Hier ___ Deutsch gesprochen. (werden)",
                options: ["wird", "werden", "werde"],
                correct: 0,
                explanation: "Passiv: Hier wird (Singular) gesprochen."
            },
            {
                id: "a2-l10-3",
                type: "fill-blank",
                question: "Die Autos ___ repariert. (werden)",
                correct: "werden",
                explanation: "Plural: Die Autos werden..."
            },
            {
                id: "a2-l10-4",
                type: "multiple-choice",
                question: "Das Buch ___ gelesen.",
                options: ["wird", "ist", "hat"],
                correct: 0,
                explanation: "Passiv Prozess: wird gelesen"
            },
            // 3. Was für ein / Welch-
            {
                id: "a2-l10-5",
                type: "multiple-choice",
                question: "___ Handy hast du?",
                options: ["Was für ein", "Welches", "Was für"],
                correct: 0,
                explanation: "Frage nach der Art/Eigenschaft: Was für ein..."
            },
            {
                id: "a2-l10-6",
                type: "multiple-choice",
                question: "___ Handy gefällt dir? Das iPhone oder das Samsung?",
                options: ["Was für ein", "Welches", "Was"],
                correct: 1,
                explanation: "Auswahl aus einer Menge: Welches..."
            },
            // 4. Wortschatz Kommunikation
            {
                id: "a2-l10-7",
                type: "match",
                question: "Telefonieren",
                pairs: [
                    { left: "Ich möchte Herrn Müller", right: "sprechen." },
                    { left: "Kann ich eine Nachricht", right: "hinterlassen?" },
                    { left: "Auf Wiederhören", right: "(am Telefon)" },
                    { left: "Er ist außer", right: "Haus." }
                ]
            },
            // 5. Satzbau Passiv
            {
                id: "a2-l10-8",
                type: "word-order",
                question: "Satzbau: Der Patient / operiert / wird.",
                correct: "Der Patient wird operiert.",
                explanation: "Subjekt + wird + Partizip II."
            },
            {
                id: "a2-l10-9",
                type: "word-order",
                question: "Satzbau: Hier / nicht / geraucht / wird.",
                correct: "Hier wird nicht geraucht.",
                explanation: "Hier (Pos 1) + wird (Pos 2) + nicht + Partizip II."
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 11 - Unterwegs
    // ==========================================
    "a2-l11": {
        title: "Test zu Lektion 11",
        description: "Verkehr, Lokale Präpositionen, Präfixe",
        questions: [
            // 1. Wortschatz: Verkehr
            {
                id: "a2-l11-1",
                type: "match",
                question: "Ordnen Sie zu",
                pairs: [
                    { left: "Die Ampel", right: "ist rot/grün" },
                    { left: "Der Stau", right: "viele Autos stehen" },
                    { left: "Der Fußgänger", right: "geht zu Fuß" },
                    { left: "Der Helm", right: "für den Kopf" }
                ]
            },
            // 2. Wo? vs Wohin? (Wechselpräpositionen)
            {
                id: "a2-l11-2",
                type: "multiple-choice",
                question: "Ich warte ___ Bahnhof. (an)",
                options: ["am", "ans", "auf"],
                correct: 0,
                explanation: "Wo? -> Dativ: an dem = am"
            },
            {
                id: "a2-l11-3",
                type: "multiple-choice",
                question: "Ich gehe ___ Bahnhof. (an)",
                options: ["am", "um", "an den"],
                correct: 2,
                explanation: "Wohin? -> Akkusativ: an den"
            },
            {
                id: "a2-l11-4",
                type: "fill-blank",
                question: "Das Kind spielt ___ Park. (in)",
                correct: "im",
                explanation: "Wo? -> in dem = im"
            },
            {
                id: "a2-l11-5",
                type: "fill-blank",
                question: "Wir fahren ___ die Stadt. (in)",
                correct: "in",
                explanation: "Wohin? -> in"
            },
            // 3. Präpositionen (aus, von, nach, zu)
            {
                id: "a2-l11-6",
                type: "multiple-choice",
                question: "Ich komme ___ dem Arzt.",
                options: ["aus", "von", "zu"],
                correct: 1,
                explanation: "Personen/Tätigkeiten (Woher?) -> von"
            },
            {
                id: "a2-l11-7",
                type: "multiple-choice",
                question: "Ich fahre ___ Hause.",
                options: ["zu", "nach", "in"],
                correct: 1,
                explanation: "nach Hause (додому)"
            },
            {
                id: "a2-l11-8",
                type: "multiple-choice",
                question: "Ich bin ___ Hause.",
                options: ["zu", "nach", "aus"],
                correct: 0,
                explanation: "zu Hause (вдома)"
            },
            // 4. Verben mit Präfixen
            {
                id: "a2-l11-9",
                type: "fill-blank",
                question: "Wann kommen wir ___? (ankommen)",
                correct: "an",
                explanation: "ankommen -> kommen ... an"
            },
            {
                id: "a2-l11-10",
                type: "fill-blank",
                question: "Der Zug fährt gleich ___. (abfahren)",
                correct: "ab",
                explanation: "abfahren -> fährt ... ab"
            },
            {
                id: "a2-l11-11",
                type: "fill-blank",
                question: "Wir müssen hier ___ (umsteigen).",
                correct: "umsteigen",
                explanation: "Modalverb müssen + Infinitiv am Ende"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 12 - Reisen
    // ==========================================
    "a2-l12": {
        title: "Test zu Lektion 12",
        description: "Reisen, Temporale Präpositionen, Wohin?",
        questions: [
            // 1. Wortschatz: Urlaub
            {
                id: "a2-l12-1",
                type: "match",
                question: "Urlaubsaktivitäten",
                pairs: [
                    { left: "In den Bergen", right: "wandern" },
                    { left: "Am Meer", right: "baden" },
                    { left: "In der Stadt", right: "besichtigen" },
                    { left: "Auf dem Campingplatz", right: "zelten" }
                ]
            },
            // 2. Temporale Präpositionen (seit/vor)
            {
                id: "a2-l12-2",
                type: "multiple-choice",
                question: "Ich lerne ___ einem Jahr Deutsch. (Dauer)",
                options: ["seit", "vor", "für"],
                correct: 0,
                explanation: "Dauer bis jetzt: seit"
            },
            {
                id: "a2-l12-3",
                type: "multiple-choice",
                question: "Wir waren ___ zwei Jahren in Paris. (Vergangenheit)",
                options: ["seit", "vor", "für"],
                correct: 1,
                explanation: "Abgeschlossenes Ereignis: vor"
            },
            {
                id: "a2-l12-4",
                type: "fill-blank",
                question: "Wir fahren ___ zwei Wochen in Urlaub. (Dauer)",
                correct: "für",
                explanation: "Zeitspanne (Akk): für"
            },
            // 3. Wohin? (Akkusativ)
            {
                id: "a2-l12-5",
                type: "fill-blank",
                question: "Wir fahren an ___ (die) Ostsee.",
                correct: "die",
                explanation: "Wohin? -> Akkusativ: an die"
            },
            {
                id: "a2-l12-6",
                type: "fill-blank",
                question: "Fliegt ihr in ___ (die) Türkei?",
                correct: "die",
                explanation: "Wohin? -> in die"
            },
            {
                id: "a2-l12-7",
                type: "multiple-choice",
                question: "Gehen wir heute Abend ___ Strand?",
                options: ["an den", "am", "ans"],
                correct: 0,
                explanation: "Wohin? an den Strand"
            },
            // 4. Wortschatz: Jahreszeiten
            {
                id: "a2-l12-8",
                type: "match",
                question: "Wann ist das?",
                pairs: [
                    { left: "Dezember, Januar", right: "Winter" },
                    { left: "Juli, August", right: "Sommer" },
                    { left: "April, Mai", right: "Frühling" },
                    { left: "Oktober, November", right: "Herbst" }
                ]
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 13 - Auf der Bank
    // ==========================================
    "a2-l13": {
        title: "Test zu Lektion 13",
        description: "Bankgeschäfte, Indirekte Fragen, lassen",
        questions: [
            // 1. Wortschatz: Bank
            {
                id: "a2-l13-1",
                type: "match",
                question: "Bankbegriffe",
                pairs: [
                    { left: "Das Konto", right: "eröffnen" },
                    { left: "Geld", right: "abheben" },
                    { left: "Zinsen", right: "bezahlen" },
                    { left: "Die Geheimzahl", right: "tippen" }
                ]
            },
            // 2. Indirekte Fragen (W-Fragen)
            {
                id: "a2-l13-2",
                type: "word-order",
                question: "Indirekte Frage: Können Sie sagen, / wann / kommt / der Bus / ?",
                correct: "Können Sie sagen, wann der Bus kommt?",
                explanation: "Indirekte Frage: Verb am Ende."
            },
            {
                id: "a2-l13-3",
                type: "word-order",
                question: "Indirekte Frage: Ich weiß nicht, / wo / ist / der Bahnhof / .",
                correct: "Ich weiß nicht, wo der Bahnhof ist.",
                explanation: "Indirekte Frage: Verb am Ende."
            },
            // 3. Indirekte Fragen (Ja/Nein - ob)
            {
                id: "a2-l13-4",
                type: "fill-blank",
                question: "Darf ich fragen, ___ die Bank heute offen ist?",
                correct: "ob",
                explanation: "Ja/Nein Frage -> ob"
            },
            {
                id: "a2-l13-5",
                type: "multiple-choice",
                question: "Wissen Sie, ___ der Zug Verspätung hat?",
                options: ["ob", "dass", "weil"],
                correct: 0,
                explanation: "Indirekte Frage (hat er Verspätung?) -> ob"
            },
            // 4. Verb: lassen
            {
                id: "a2-l13-6",
                type: "multiple-choice",
                question: "Ich ___ mir die Haare schneiden.",
                options: ["lasse", "mache", "bringe"],
                correct: 0,
                explanation: "Dienstleistung nutzen: lassen"
            },
            {
                id: "a2-l13-7",
                type: "fill-blank",
                question: "Wir ___ (lassen) das Auto reparieren.",
                correct: "lassen",
                explanation: "wir lassen"
            },
            {
                id: "a2-l13-8",
                type: "fill-blank",
                question: "Er ___ (lassen) seine Wohnung putzen.",
                correct: "lässt",
                explanation: "er lässt (Änderung a -> ä)"
            }
        ]
    },

    // ==========================================
    // TEST ZU LEKTION 14 - Lebensstationen
    // ==========================================
    "a2-l14": {
        title: "Test zu Lektion 14",
        description: "Biografie, als/wenn, Präteritum",
        questions: [
            // 1. Wortschatz: Leben
            {
                id: "a2-l14-1",
                type: "match",
                question: "Lebensphasen",
                pairs: [
                    { left: "Kindheit", right: "spielen, Schule" },
                    { left: "Jugend", right: "Ausbildung, erste Liebe" },
                    { left: "Erwachsenenalter", right: "Arbeit, Familie" },
                    { left: "Alter", right: "Rente, Enkelkinder" }
                ]
            },
            // 2. Konjunktionen: als vs wenn (Vergangenheit)
            {
                id: "a2-l14-2",
                type: "multiple-choice",
                question: "___ ich ein Kind war, habe ich viel gespielt.",
                options: ["Als", "Wenn", "Wann"],
                correct: 0,
                explanation: "Einmalig in der Vergangenheit: Als"
            },
            {
                id: "a2-l14-3",
                type: "multiple-choice",
                question: "Immer ___ wir Zeit hatten, sind wir gereist.",
                options: ["als", "wenn", "wann"],
                correct: 1,
                explanation: "Mehrmals (Immer ...) -> Wenn"
            },
            {
                id: "a2-l14-4",
                type: "fill-blank",
                question: "___ ich 18 war, habe ich den Führerschein gemacht.",
                correct: "Als",
                explanation: "Einmaliges Ereignis -> Als"
            },
            // 3. Präteritum Wiederholung
            {
                id: "a2-l14-5",
                type: "fill-blank",
                question: "Früher ___ (sein) alles billiger.",
                correct: "war",
                explanation: "sein Präteritum: war"
            },
            {
                id: "a2-l14-6",
                type: "fill-blank",
                question: "Ich ___ (haben) damals keine Zeit.",
                correct: "hatte",
                explanation: "haben Präteritum: hatte"
            },
            {
                id: "a2-l14-7",
                type: "fill-blank",
                question: "Er ___ (können) gut Fußball spielen.",
                correct: "konnte",
                explanation: "können Präteritum: konnte"
            },
            // 4. Satzbau: als
            {
                id: "a2-l14-8",
                type: "word-order",
                question: "Satzbau: Als / ich / kam / nach Hause / , / war / es / zu spät.",
                correct: "Als ich nach Hause kam, war es zu spät.",
                explanation: "Als-Satz: Verb am Ende. Hauptsatz beginnt mit Verb."
            },
            // 5. Glückwünsche
            {
                id: "a2-l14-9",
                type: "match",
                question: "Anlässe und Wünsche",
                pairs: [
                    { left: "Geburtstag", right: "Alles Gute!" },
                    { left: "Hochzeit", right: "Viel Glück!" },
                    { left: "Prüfung", right: "Viel Erfolg!" },
                    { left: "Krankheit", right: "Gute Besserung!" }
                ]
            }
        ]
    }
};

export default lessonTestsA2;
