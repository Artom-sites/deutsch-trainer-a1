// src/data/exam.js
// Дані для модуля "Екзамен A1"

export const readingTests = [
    {
        id: "read-1",
        title: "E-Mail von Anna",
        text: `Hallo Maria,

wie geht es dir? Mir geht es gut. Ich bin jetzt in Berlin. Die Stadt ist sehr schön und groß, aber auch laut.

Ich lerne hier Deutsch an einer Sprachschule. Mein Kurs ist super! Wir sind 12 Leute im Kurs. Meine Lehrerin heißt Frau Müller. Sie ist sehr nett. Der Unterricht ist am Montag, Mittwoch und Freitag von 9 bis 12 Uhr.

Am Wochenende habe ich frei. Am Samstag gehe ich oft ins Museum oder ins Kino. Am Sonntag schlafe ich lange und frühstücke gemütlich.

Hast du Zeit im August? Komm mich doch besuchen! Wir können zusammen Berlin ansehen.

Schreib mir bald!
Viele Grüße
Anna`,
        questions: [
            {
                id: "r1-q1",
                question: "Wo ist Anna?",
                options: ["In München", "In Berlin", "Zu Hause"],
                correct: 1
            },
            {
                id: "r1-q2",
                question: "Wann hat sie Unterricht?",
                options: ["Jeden Tag", "Am Wochenende", "Dreimal pro Woche"],
                correct: 2
            },
            {
                id: "r1-q3",
                question: "Was macht Anna am Sonntag?",
                options: ["Sie geht ins Kino", "Sie besucht ein Museum", "Sie schläft lange"],
                correct: 2
            }
        ]
    },
    {
        id: "read-2",
        title: "Anzeige: Wohnung zu vermieten",
        text: `Wohnung in Frankfurt

Schöne 2-Zimmer-Wohnung im Zentrum von Frankfurt zu vermieten.
Die Wohnung hat 50 m², einen Balkon und eine kleine Küche.
Sie ist im 3. Stock. Es gibt keinen Aufzug.

Die Miete ist 650 Euro pro Monat (warm).
Frei ab 1. Oktober.

Interesse? Rufen Sie an: 0152 1234567 (Herr Schmidt)`,
        questions: [
            {
                id: "r2-q1",
                question: "Wie groß ist die Wohnung?",
                options: ["650 m²", "50 m²", "3 Zimmer"],
                correct: 1
            },
            {
                id: "r2-q2",
                question: "Was kostet die Wohnung?",
                options: ["650 Euro", "50 Euro", "Unbekannt"],
                correct: 0
            },
            {
                id: "r2-q3",
                question: "Wann ist die Wohnung frei?",
                options: ["Sofort", "Ab Oktober", "Ab Januar"],
                correct: 1
            }
        ]
    }
];

export const listeningTests = [
    {
        id: "listen-1",
        title: "Im Restaurant",
        text: "Guten Tag! Was möchten Sie bestellen? - Ich nehme ein Schnitzel mit Pommes bitte. - Gerne. Und zum Trinken? - Ein Mineralwasser, bitte. - Groß oder klein? - Groß, bitte.",
        questions: [
            {
                id: "l1-q1",
                question: "Was bestellt der Gast zu essen?",
                options: ["Pizza", "Salat", "Schnitzel"],
                correct: 2
            },
            {
                id: "l1-q2",
                question: "Was trinkt der Gast?",
                options: ["Cola", "Bier", "Wasser"],
                correct: 2
            }
        ]
    },
    {
        id: "listen-2",
        title: "Am Bahnhof",
        text: "Entschuldigung, wann fährt der nächste Zug nach Hamburg? - Einen Moment... Der nächste Zug fährt um 14 Uhr 30 auf Gleis 4. - Muss ich umsteigen? - Nein, das ist ein direkter Zug. Er kommt um 16 Uhr in Hamburg an.",
        questions: [
            {
                id: "l2-q1",
                question: "Wohin will die Person fahren?",
                options: ["Nach München", "Nach Hamburg", "Nach Berlin"],
                correct: 1
            },
            {
                id: "l2-q2",
                question: "Wann fährt der Zug?",
                options: ["14:30", "16:00", "04:30"],
                correct: 0
            },
            {
                id: "l2-q3",
                question: "Auf welchem Gleis fährt der Zug?",
                options: ["Gleis 14", "Gleis 30", "Gleis 4"],
                correct: 2
            }
        ]
    }
];
