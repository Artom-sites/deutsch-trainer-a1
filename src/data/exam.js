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
        title: "Anzeige: Wohnung",
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
    },
    {
        id: "read-3",
        title: "Einladung zum Geburtstag",
        text: `Liebe Freunde,

ich habe am Samstag Geburtstag! Ich werde 25 Jahre alt.
Ich möchte gerne feiern.

Wann? Am Samstag, den 15. Mai, um 19 Uhr.
Wo? Bei mir zu Hause (Goethestraße 10).

Es gibt Pizza und Getränke. Bitte bringt gute Laune mit!
Könnt ihr kommen? Bitte sagt mir bis Mittwoch Bescheid.

Euer Thomas`,
        questions: [
            {
                id: "r3-q1",
                question: "Was feiert Thomas?",
                options: ["Weihnachten", "Seinen Geburtstag", "Eine Hochzeit"],
                correct: 1
            },
            {
                id: "r3-q2",
                question: "Wann beginnt die Party?",
                options: ["Um 15 Uhr", "Um 25 Uhr", "Um 19 Uhr"],
                correct: 2
            },
            {
                id: "r3-q3",
                question: "Was gibt es zu essen?",
                options: ["Pizza", "Döner", "Kuchen"],
                correct: 0
            }
        ]
    },
    {
        id: "read-4",
        title: "Öffnungszeiten Bibliothek",
        text: `Stadtbibliothek München

Unsere Öffnungszeiten:
Montag: Geschlossen
Dienstag - Freitag: 10:00 - 19:00 Uhr
Samstag: 10:00 - 15:00 Uhr
Sonntag: Geschlossen

Achtung: Im August ist die Bibliothek zwei Wochen geschlossen (1.08 - 14.08).`,
        questions: [
            {
                id: "r4-q1",
                question: "Wann ist die Bibliothek am Montag offen?",
                options: ["Von 10 bis 19 Uhr", "Gar nicht (geschlossen)", "Nur am Nachmittag"],
                correct: 1
            },
            {
                id: "r4-q2",
                question: "Wie lange ist am Samstag geöffnet?",
                options: ["Bis 15 Uhr", "Bis 19 Uhr", "Bis 10 Uhr"],
                correct: 0
            },
            {
                id: "r4-q3",
                question: "Wann ist Sommerpause?",
                options: ["Im Juli", "Im August", "Im September"],
                correct: 1
            }
        ]
    },
    {
        id: "read-5",
        title: "Mein Arbeitstag als Krankenschwester",
        text: `Ich heiße Julia, bin 28 Jahre alt und arbeite als Krankenschwester in einem großen Krankenhaus in Berlin. Mein Beruf ist anstrengend, aber ich mag ihn sehr, weil ich Menschen helfen kann.

Mein Arbeitstag beginnt oft sehr früh. Wenn ich Frühschicht habe, muss ich schon um 6:00 Uhr morgens im Krankenhaus sein. Das bedeutet, dass mein Wecker um 4:30 Uhr klingelt. Ich trinke schnell einen Kaffee, dusche und fahre dann mit der U-Bahn zur Arbeit. Die Fahrt dauert etwa 30 Minuten.

Um 6:00 Uhr gibt es eine Übergabe mit den Kollegen von der Nachtschicht. Danach wecke ich die Patienten, messe Blutdruck und helfe ihnen beim Waschen. Um 8:00 Uhr gibt es Frühstück für die Patienten. Vormittags kommen oft die Ärzte zur Visite. Ich muss dann alle wichtigen Informationen notieren.

Um 12:00 Uhr mache ich eine kurze Pause. Ich esse meistens in der Kantine oder esse ein Brot, das ich von zu Hause mitgebracht habe. Nachmittags gebe ich Medikamente und schreibe Berichte. Um 14:30 Uhr ist mein Arbeitstag zu Ende. Ich bin dann oft müde, aber zufrieden.

Am Abend treffe ich mich manchmal mit Freunden oder gehe zum Sport. Ich gehe meistens früh schlafen, weil ich am nächsten Tag wieder fit sein muss.`,
        questions: [
            {
                id: "r5-q1",
                question: "Was ist Julias Beruf?",
                options: ["Lehrerin", "Krankenschwester", "Ärztin"],
                correct: 1
            },
            {
                id: "r5-q2",
                question: "Wann steht Julia auf, wenn sie Frühschicht hat?",
                options: ["Um 6:00 Uhr", "Um 5:00 Uhr", "Um 4:30 Uhr"],
                correct: 2
            },
            {
                id: "r5-q3",
                question: "Wie fährt sie zur Arbeit?",
                options: ["Mit dem Auto", "Mit der U-Bahn", "Mit dem Fahrrad"],
                correct: 1
            },
            {
                id: "r5-q4",
                question: "Was macht Julia um 12:00 Uhr?",
                options: ["Sie geht nach Hause", "Sie macht Pause", "Sie spricht mit den Ärzten"],
                correct: 1
            },
            {
                id: "r5-q5",
                question: "Warum geht sie abends früh schlafen?",
                options: ["Weil sie krank ist", "Weil sie keine Freunde hat", "Weil sie am nächsten Tag fit sein muss"],
                correct: 2
            }
        ]
    },
    {
        id: "read-6",
        title: "Ein Wochenende in München",
        text: `Letztes Wochenende habe ich meinen Bruder Thomas in München besucht. Ich wohne in Hamburg, also war die Reise ziemlich lang. Ich bin am Freitagnachmittag mit dem Zug gefahren. Die Fahrt hat fast sechs Stunden gedauert, aber der ICE war sehr komfortabel und ich habe ein interessantes Buch gelesen.

Thomas hat mich am Hauptbahnhof abgeholt. Wir haben uns lange nicht gesehen und hatten uns viel zu erzählen. Wir sind zuerst in eine typisch bayerische Gaststätte gegangen. Ich habe Weißwurst mit Brezel gegessen und Thomas hat einen Schweinebraten bestellt. Das Essen war super lecker!

Am Samstag war das Wetter fantastisch. Die Sonne schien und es war warm. Wir waren im Englischen Garten, das ist ein riesiger Park im Zentrum von München. Dort haben wir viele Leute gesehen, die Eis gegessen oder Fußball gespielt haben. Später waren wir auf dem Marienplatz und haben das Rathaus fotografiert. Die Architektur in München ist wirklich wunderschön.

Am Sonntag haben wir das Deutsche Museum besucht. Es ist eines der größten Museen für Technik in der Welt. Das war sehr interessant, aber nach drei Stunden waren meine Beine müde. Am Nachmittag musste ich leider schon wieder zurück nach Hamburg fahren.

Der Abschied war traurig, aber ich komme bestimmt bald wieder. München ist eine tolle Stadt!`,
        questions: [
            {
                id: "r6-q1",
                question: "Wen hat der Erzähler in München besucht?",
                options: ["Seine Eltern", "Seinen Bruder", "Einen Freund"],
                correct: 1
            },
            {
                id: "r6-q2",
                question: "Wie lang war die Zugfahrt?",
                options: ["Fast sechs Stunden", "Drei Stunden", "Einen Tag"],
                correct: 0
            },
            {
                id: "r6-q3",
                question: "Was haben sie am Freitagabend gemacht?",
                options: ["Sie waren im Kino", "Sie haben Fußball gespielt", "Sie haben bayerisch gegessen"],
                correct: 2
            },
            {
                id: "r6-q4",
                question: "Wo waren sie am Samstag?",
                options: ["Im Deutschen Museum", "Im Englischen Garten", "In Hamburg"],
                correct: 1
            },
            {
                id: "r6-q5",
                question: "Wie findet der Erzähler München?",
                options: ["Er findet die Stadt langweilig", "Er findet die Stadt toll", "Er mag das Essen nicht"],
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
    },
    {
        id: "listen-3",
        title: "Im Bekleidungsgeschäft",
        text: "Kann ich Ihnen helfen? - Ja, ich suche einen Pullover. - Welche Größe haben Sie? - Größe M. - Wir haben diesen blauen Pullover hier. Er kostet 29 Euro. - Das ist gut. Ich nehme ihn.",
        questions: [
            {
                id: "l3-q1",
                question: "Was sucht der Kunde?",
                options: ["Eine Hose", "Einen Pullover", "Ein T-Shirt"],
                correct: 1
            },
            {
                id: "l3-q2",
                question: "Welche Farbe hat der Pullover?",
                options: ["Rot", "Blau", "Schwarz"],
                correct: 1
            },
            {
                id: "l3-q3",
                question: "Was kostet der Pullover?",
                options: ["49 Euro", "19 Euro", "29 Euro"],
                correct: 2
            }
        ]
    },
    {
        id: "listen-4",
        title: "Telefonat beim Arzt",
        text: "Praxis Dr. Weber, guten Tag. - Guten Tag, hier ist Müller. Ich brauche einen Termin. - Haben Sie Schmerzen? - Ja, mein Kopf tut sehr weh. - Können Sie heute um 16 Uhr kommen? - Ja, das passt. Danke.",
        questions: [
            {
                id: "l4-q1",
                question: "Wen ruft Herr Müller an?",
                options: ["Einen Freund", "Die Polizei", "Einen Arzt"],
                correct: 2
            },
            {
                id: "l4-q2",
                question: "Was tut Herrn Müller weh?",
                options: ["Der Kopf", "Der Bauch", "Das Bein"],
                correct: 0
            },
            {
                id: "l4-q3",
                question: "Wann ist der Termin?",
                options: ["Um 14 Uhr", "Um 16 Uhr", "Morgen"],
                correct: 1
            }
        ]
    }
];
