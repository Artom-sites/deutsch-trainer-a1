/**
 * Reading Texts for each Lesson (Lesen)
 * Тексти для читання з інтерактивним перекладом слів та питаннями
 */

export const lessonReadings = {
    1: {
        title: "Mein Name ist Maria",
        text: `Hallo! Mein Name ist Maria. Ich komme aus der Ukraine. Jetzt wohne ich in Berlin. Ich bin 28 Jahre alt.

Ich lerne Deutsch. Es ist sehr interessant! Mein Lehrer heißt Thomas. Er kommt aus Deutschland.

In meinem Deutschkurs sind viele Leute aus verschiedenen Ländern. Anna kommt aus Polen, Ahmed kommt aus Syrien und Li kommt aus China.

Wir lernen zusammen. Das macht Spaß!`,
        questions: [
            { question: "Woher kommt Maria?", options: ["aus Deutschland", "aus der Ukraine", "aus Polen", "aus China"], correct: 1 },
            { question: "Wo wohnt Maria jetzt?", options: ["in Kiew", "in München", "in Berlin", "in Hamburg"], correct: 2 },
            { question: "Wie alt ist Maria?", options: ["18 Jahre", "25 Jahre", "28 Jahre", "30 Jahre"], correct: 2 },
            { question: "Wer ist Thomas?", options: ["Marias Bruder", "Marias Lehrer", "Marias Freund", "Marias Chef"], correct: 1 },
            { question: "Woher kommt Ahmed?", options: ["aus Polen", "aus China", "aus Syrien", "aus der Türkei"], correct: 2 }
        ]
    },
    2: {
        title: "Meine Familie",
        text: `Ich heiße Stefan und ich möchte euch meine Familie vorstellen.

Mein Vater heißt Klaus. Er ist 55 Jahre alt und arbeitet als Ingenieur. Meine Mutter heißt Ingrid. Sie ist 52 Jahre alt und ist Lehrerin.

Ich habe eine Schwester. Sie heißt Julia und ist 20 Jahre alt. Sie studiert Medizin in München. Mein Bruder heißt Max. Er ist 16 Jahre alt und geht noch zur Schule.

Wir haben auch einen Hund. Er heißt Bello und ist sehr freundlich. Am Wochenende machen wir oft Ausflüge zusammen.`,
        questions: [
            { question: "Was ist Klaus von Beruf?", options: ["Lehrer", "Arzt", "Ingenieur", "Koch"], correct: 2 },
            { question: "Wie alt ist Stefans Mutter?", options: ["50 Jahre", "52 Jahre", "55 Jahre", "58 Jahre"], correct: 1 },
            { question: "Was studiert Julia?", options: ["Jura", "Medizin", "Informatik", "Kunst"], correct: 1 },
            { question: "Wie heißt der Hund?", options: ["Max", "Bello", "Rex", "Bruno"], correct: 1 },
            { question: "Wo studiert Julia?", options: ["in Berlin", "in Hamburg", "in München", "in Köln"], correct: 2 }
        ]
    },
    3: {
        title: "Im Supermarkt",
        text: `Heute gehe ich in den Supermarkt. Ich brauche viele Sachen.

Zuerst nehme ich Brot. Das Brot ist frisch und kostet 2,50 Euro. Dann kaufe ich Milch und Käse. Die Milch kostet 1,20 Euro.

Ich brauche auch Obst. Ich nehme Äpfel und Bananen. Die Äpfel sind rot und süß. Außerdem kaufe ich Gemüse: Tomaten, Kartoffeln und Zwiebeln.

Zum Schluss nehme ich noch Wasser und Orangensaft. Die Rechnung ist 25 Euro. Ich bezahle mit Karte.`,
        questions: [
            { question: "Was kostet das Brot?", options: ["1,50 Euro", "2,00 Euro", "2,50 Euro", "3,00 Euro"], correct: 2 },
            { question: "Was kostet die Milch?", options: ["1,00 Euro", "1,20 Euro", "1,50 Euro", "2,00 Euro"], correct: 1 },
            { question: "Welches Obst kauft die Person?", options: ["Orangen und Birnen", "Äpfel und Bananen", "Erdbeeren und Kirschen", "Trauben und Melonen"], correct: 1 },
            { question: "Wie viel kostet alles zusammen?", options: ["15 Euro", "20 Euro", "25 Euro", "30 Euro"], correct: 2 },
            { question: "Wie bezahlt die Person?", options: ["bar", "mit Karte", "mit Scheck", "mit dem Handy"], correct: 1 }
        ]
    },
    4: {
        title: "Meine Wohnung",
        text: `Ich wohne in einer schönen Wohnung in Hamburg. Die Wohnung hat drei Zimmer, eine Küche und ein Bad.

Mein Wohnzimmer ist groß und hell. Dort steht ein Sofa und ein Fernseher. Die Wände sind weiß und es gibt viele Pflanzen.

Mein Schlafzimmer ist klein, aber gemütlich. Dort steht mein Bett und ein Schrank für meine Kleidung.

Die Küche ist modern. Ich habe einen Kühlschrank, einen Herd und eine Spülmaschine. Ich koche gern!

Die Miete kostet 650 Euro pro Monat. Das ist nicht billig, aber die Lage ist super.`,
        questions: [
            { question: "Wie viele Zimmer hat die Wohnung?", options: ["zwei", "drei", "vier", "fünf"], correct: 1 },
            { question: "Wie ist das Wohnzimmer?", options: ["klein und dunkel", "groß und hell", "klein und gemütlich", "groß und dunkel"], correct: 1 },
            { question: "Was steht im Schlafzimmer?", options: ["Sofa und Fernseher", "Bett und Schrank", "Tisch und Stühle", "Kühlschrank und Herd"], correct: 1 },
            { question: "Was hat die Küche?", options: ["nur einen Herd", "nur einen Kühlschrank", "Kühlschrank, Herd und Spülmaschine", "nichts"], correct: 2 },
            { question: "Wie viel kostet die Miete?", options: ["550 Euro", "600 Euro", "650 Euro", "700 Euro"], correct: 2 }
        ]
    },
    5: {
        title: "Mein Tag",
        text: `Ich stehe jeden Tag um 6:30 Uhr auf. Zuerst dusche ich und dann frühstücke ich. Zum Frühstück esse ich Brot mit Käse und trinke Kaffee.

Um 7:45 Uhr fahre ich mit der U-Bahn zur Arbeit. Die Fahrt dauert 30 Minuten. Ich arbeite von 8:30 Uhr bis 17:00 Uhr in einem Büro.

In der Mittagspause esse ich in der Kantine. Das Essen dort ist gut und nicht teuer.

Nach der Arbeit gehe ich oft ins Fitnessstudio. Um 19:00 Uhr bin ich wieder zu Hause. Ich koche Abendessen und sehe fern.

Um 23:00 Uhr gehe ich ins Bett. Ich brauche 7 Stunden Schlaf.`,
        questions: [
            { question: "Wann steht die Person auf?", options: ["um 6:00 Uhr", "um 6:30 Uhr", "um 7:00 Uhr", "um 7:30 Uhr"], correct: 1 },
            { question: "Wie fährt sie zur Arbeit?", options: ["mit dem Bus", "mit dem Auto", "mit der U-Bahn", "zu Fuß"], correct: 2 },
            { question: "Wie lange dauert die Fahrt?", options: ["15 Minuten", "20 Minuten", "30 Minuten", "45 Minuten"], correct: 2 },
            { question: "Wo isst die Person zu Mittag?", options: ["zu Hause", "im Restaurant", "in der Kantine", "bei McDonald's"], correct: 2 },
            { question: "Wann geht sie ins Bett?", options: ["um 22:00 Uhr", "um 22:30 Uhr", "um 23:00 Uhr", "um 23:30 Uhr"], correct: 2 }
        ]
    },
    6: {
        title: "Meine Hobbys",
        text: `In meiner Freizeit habe ich viele Hobbys.

Am liebsten spiele ich Fußball. Jeden Samstag spielen wir im Park. Meine Mannschaft hat 11 Spieler.

Ich schwimme auch gern. Im Sommer gehe ich oft ins Freibad. Das Wasser ist schön warm.

Außerdem lese ich gern Bücher. Ich lese Krimis und Romane. Mein Lieblingsbuch ist "Der Vorleser".

Am Wochenende koche ich oft mit Freunden. Wir probieren Rezepte aus verschiedenen Ländern. Letzte Woche haben wir japanisch gekocht.

Sport und Lesen sind gut für Körper und Geist!`,
        questions: [
            { question: "Was ist das Lieblingshobby?", options: ["Schwimmen", "Fußball", "Lesen", "Kochen"], correct: 1 },
            { question: "Wann spielt die Person Fußball?", options: ["jeden Montag", "jeden Freitag", "jeden Samstag", "jeden Sonntag"], correct: 2 },
            { question: "Wohin geht sie im Sommer?", options: ["ins Hallenbad", "ins Freibad", "an den See", "ans Meer"], correct: 1 },
            { question: "Welche Bücher liest sie gern?", options: ["Sachbücher", "Krimis und Romane", "Zeitungen", "Comics"], correct: 1 },
            { question: "Was haben sie letzte Woche gekocht?", options: ["italienisch", "chinesisch", "japanisch", "mexikanisch"], correct: 2 }
        ]
    },
    7: {
        title: "Schule in Deutschland",
        text: `Mein Sohn Felix geht in die fünfte Klasse. Er ist 10 Jahre alt.

Die Schule beginnt um 8:00 Uhr. Felix fährt mit dem Fahrrad zur Schule. Der Weg dauert 10 Minuten.

Seine Lieblingsfächer sind Mathematik und Sport. Deutsch findet er schwer, aber die Lehrerin ist nett.

In der Schule gibt es eine Kantine. Felix isst dort zu Mittag. Er nimmt meist Nudeln oder Reis mit Gemüse.

Die Schule endet um 15:30 Uhr. Dann hat Felix Hausaufgaben. Manchmal braucht er Hilfe, aber meistens macht er alles allein.

Am Nachmittag spielt er Klavier oder trifft seine Freunde.`,
        questions: [
            { question: "Wie alt ist Felix?", options: ["8 Jahre", "9 Jahre", "10 Jahre", "11 Jahre"], correct: 2 },
            { question: "Wie kommt Felix zur Schule?", options: ["zu Fuß", "mit dem Bus", "mit dem Fahrrad", "mit dem Auto"], correct: 2 },
            { question: "Was sind Felix' Lieblingsfächer?", options: ["Deutsch und Englisch", "Mathematik und Sport", "Musik und Kunst", "Geschichte und Biologie"], correct: 1 },
            { question: "Wann endet die Schule?", options: ["um 13:00 Uhr", "um 14:00 Uhr", "um 15:00 Uhr", "um 15:30 Uhr"], correct: 3 },
            { question: "Was macht Felix am Nachmittag?", options: ["nur Hausaufgaben", "nur Klavier spielen", "Klavier spielen oder Freunde treffen", "nur fernsehen"], correct: 2 }
        ]
    },
    8: {
        title: "Mein Beruf",
        text: `Ich bin Krankenschwester und arbeite in einem großen Krankenhaus in Frankfurt.

Meine Arbeit ist sehr wichtig, aber auch anstrengend. Ich arbeite im Schichtdienst. Manchmal arbeite ich nachts, manchmal am Tag.

Jeden Tag helfe ich vielen Patienten. Ich messe Fieber, gebe Medikamente und mache Verbände. Die Ärzte und ich arbeiten im Team.

Das Beste an meinem Beruf: Ich kann Menschen helfen. Das macht mich glücklich!

Ich verdiene 2.800 Euro brutto im Monat. Das ist nicht viel, aber ich liebe meinen Job.

In meiner Pause trinke ich Kaffee mit meinen Kollegen. Wir verstehen uns gut.`,
        questions: [
            { question: "Was ist sie von Beruf?", options: ["Ärztin", "Krankenschwester", "Lehrerin", "Sekretärin"], correct: 1 },
            { question: "Wo arbeitet sie?", options: ["in Berlin", "in München", "in Frankfurt", "in Hamburg"], correct: 2 },
            { question: "Was macht sie bei der Arbeit?", options: ["operiert Patienten", "misst Fieber und gibt Medikamente", "macht Röntgenbilder", "schreibt Rechnungen"], correct: 1 },
            { question: "Wie viel verdient sie?", options: ["2.500 Euro", "2.800 Euro", "3.000 Euro", "3.200 Euro"], correct: 1 },
            { question: "Was macht sie in der Pause?", options: ["schläft", "liest Zeitung", "trinkt Kaffee mit Kollegen", "telefoniert"], correct: 2 }
        ]
    },
    9: {
        title: "Beim Bürgeramt",
        text: `Heute muss ich zum Bürgeramt. Ich brauche einen neuen Personalausweis.

Zuerst muss ich einen Termin online machen. Ohne Termin geht es nicht. Mein Termin ist um 10:15 Uhr.

Ich nehme meinen alten Ausweis und ein Passfoto mit. Das Foto habe ich gestern gemacht.

Im Bürgeramt warte ich 10 Minuten. Dann ruft mich eine Mitarbeiterin. Sie ist freundlich und hilft mir.

Ich fülle ein Formular aus. Der neue Ausweis kostet 37 Euro. Ich bezahle mit EC-Karte.

In 3 Wochen ist der Ausweis fertig. Dann muss ich ihn abholen.`,
        questions: [
            { question: "Was braucht die Person?", options: ["einen Reisepass", "einen Personalausweis", "einen Führerschein", "eine Geburtsurkunde"], correct: 1 },
            { question: "Wann ist der Termin?", options: ["um 9:15 Uhr", "um 10:00 Uhr", "um 10:15 Uhr", "um 11:00 Uhr"], correct: 2 },
            { question: "Was nimmt sie mit?", options: ["nur den alten Ausweis", "nur ein Passfoto", "alten Ausweis und Passfoto", "Geburtsurkunde und Foto"], correct: 2 },
            { question: "Was kostet der neue Ausweis?", options: ["27 Euro", "37 Euro", "47 Euro", "57 Euro"], correct: 1 },
            { question: "Wann ist der Ausweis fertig?", options: ["in 1 Woche", "in 2 Wochen", "in 3 Wochen", "in 4 Wochen"], correct: 2 }
        ]
    },
    10: {
        title: "Beim Arzt",
        text: `Ich fühle mich nicht gut. Seit drei Tagen habe ich Kopfschmerzen und Husten. Heute gehe ich zum Arzt.

In der Praxis sage ich der Sprechstundenhilfe: "Ich habe einen Termin um 9:00 Uhr." Sie gibt mir ein Formular.

Im Wartezimmer warte ich 20 Minuten. Dann ruft mich der Arzt.

Der Arzt untersucht mich. Er misst Fieber und hört meine Lunge ab. Er sagt: "Sie haben eine Erkältung. Sie sollen viel trinken und im Bett bleiben."

Er schreibt mir ein Rezept für Hustensaft. Ich gehe zur Apotheke und hole die Medizin.

Nach einer Woche geht es mir besser!`,
        questions: [
            { question: "Was sind die Symptome?", options: ["Bauchschmerzen", "Kopfschmerzen und Husten", "Rückenschmerzen", "Zahnschmerzen"], correct: 1 },
            { question: "Wie lange wartet sie im Wartezimmer?", options: ["10 Minuten", "15 Minuten", "20 Minuten", "30 Minuten"], correct: 2 },
            { question: "Was ist die Diagnose?", options: ["Grippe", "Erkältung", "Allergie", "Bronchitis"], correct: 1 },
            { question: "Was empfiehlt der Arzt?", options: ["Sport machen", "viel trinken und im Bett bleiben", "Antibiotika nehmen", "ins Krankenhaus gehen"], correct: 1 },
            { question: "Wohin geht sie nach dem Arzt?", options: ["nach Hause", "zur Apotheke", "zur Arbeit", "zum Krankenhaus"], correct: 1 }
        ]
    },
    11: {
        title: "In der Stadt unterwegs",
        text: `Ich bin neu in Berlin und muss zur Bibliothek fahren. Aber wo ist sie?

Ich frage einen Mann auf der Straße: "Entschuldigung, wie komme ich zur Bibliothek?"

Er sagt: "Gehen Sie geradeaus bis zur Ampel. An der Ampel biegen Sie links ab. Dann gehen Sie etwa 200 Meter. Die Bibliothek ist auf der rechten Seite, neben dem Café."

Ich bedanke mich und gehe los. Aber ich finde die Bibliothek nicht! Ich frage noch einmal, diesmal eine Frau.

Sie sagt: "Nehmen Sie besser den Bus Linie 42. Der hält direkt vor der Bibliothek."

Ich fahre mit dem Bus. Nach 10 Minuten bin ich da!`,
        questions: [
            { question: "Wohin will die Person?", options: ["zum Bahnhof", "zur Bibliothek", "zum Café", "zum Museum"], correct: 1 },
            { question: "Wo soll sie abbiegen?", options: ["an der Kirche rechts", "an der Ampel links", "am Supermarkt geradeaus", "an der Kreuzung rechts"], correct: 1 },
            { question: "Was ist neben der Bibliothek?", options: ["ein Restaurant", "ein Supermarkt", "ein Café", "eine Bank"], correct: 2 },
            { question: "Welchen Bus nimmt sie?", options: ["Linie 24", "Linie 42", "Linie 52", "Linie 72"], correct: 1 },
            { question: "Wie lange dauert die Busfahrt?", options: ["5 Minuten", "10 Minuten", "15 Minuten", "20 Minuten"], correct: 1 }
        ]
    },
    12: {
        title: "Reklamation im Geschäft",
        text: `Letzte Woche habe ich online einen Laptop gekauft. Er hat 699 Euro gekostet. Aber es gibt ein Problem.

Der Laptop funktioniert nicht richtig. Der Bildschirm flackert und manchmal geht er einfach aus.

Heute gehe ich in das Geschäft und spreche mit dem Kundenservice.

Ich sage: "Ich möchte reklamieren. Der Laptop ist kaputt. Ich habe ihn erst seit einer Woche."

Die Mitarbeiterin schaut sich das Problem an. Sie sagt: "Das tut mir leid. Wir können das Gerät reparieren oder Sie bekommen ein neues."

Ich wähle ein neues Gerät. Die Mitarbeiterin tauscht den Laptop sofort um. Jetzt funktioniert alles perfekt!`,
        questions: [
            { question: "Was hat die Person gekauft?", options: ["ein Handy", "einen Laptop", "einen Fernseher", "eine Kamera"], correct: 1 },
            { question: "Was ist das Problem?", options: ["Der Laptop ist zu langsam", "Der Bildschirm flackert", "Die Tastatur funktioniert nicht", "Der Akku ist leer"], correct: 1 },
            { question: "Wie viel hat der Laptop gekostet?", options: ["599 Euro", "699 Euro", "799 Euro", "899 Euro"], correct: 1 },
            { question: "Was bietet die Mitarbeiterin an?", options: ["nur Geld zurück", "nur Reparatur", "Reparatur oder neues Gerät", "nur Gutschein"], correct: 2 },
            { question: "Was wählt die Person?", options: ["Reparatur", "Geld zurück", "neues Gerät", "Gutschein"], correct: 2 }
        ]
    },
    13: {
        title: "Im Kleidergeschäft",
        text: `Ich brauche neue Kleidung für eine Hochzeit. Ich gehe in ein Kaufhaus.

Eine Verkäuferin fragt: "Kann ich Ihnen helfen?"

Ich sage: "Ja, bitte. Ich suche ein elegantes Kleid. Größe 38."

Sie zeigt mir mehrere Kleider. Ein blaues Kleid gefällt mir sehr gut. Ich probiere es an.

Das Kleid passt perfekt! Es kostet 89 Euro. Das ist ein guter Preis.

Ich brauche auch Schuhe. Ich nehme schwarze Schuhe mit hohen Absätzen. Sie kosten 55 Euro.

Insgesamt bezahle ich 144 Euro. Die Verkäuferin packt alles schön ein.`,
        questions: [
            { question: "Warum braucht sie neue Kleidung?", options: ["für die Arbeit", "für eine Party", "für eine Hochzeit", "für den Urlaub"], correct: 2 },
            { question: "Welche Größe sucht sie?", options: ["36", "38", "40", "42"], correct: 1 },
            { question: "Welche Farbe hat das Kleid?", options: ["rot", "blau", "grün", "schwarz"], correct: 1 },
            { question: "Was kosten die Schuhe?", options: ["45 Euro", "55 Euro", "65 Euro", "75 Euro"], correct: 1 },
            { question: "Wie viel bezahlt sie insgesamt?", options: ["134 Euro", "144 Euro", "154 Euro", "164 Euro"], correct: 1 }
        ]
    },
    14: {
        title: "Einladung zur Geburtstagsfeier",
        text: `Nächsten Samstag habe ich Geburtstag. Ich werde 30 Jahre alt. Ich mache eine große Party!

Ich schreibe Einladungen an meine Freunde und Familie. Die Party beginnt um 18:00 Uhr in meiner Wohnung.

Meine Mutter bringt einen Kuchen mit. Mein Bruder organisiert die Musik. Meine Freundin Lisa hilft beim Dekorieren.

Ich kaufe Getränke und mache das Essen. Es gibt Pizza, Salate und Snacks.

Zur Party kommen 25 Leute. Wir tanzen, lachen und haben viel Spaß.

Um Mitternacht gibt es Feuerwerk auf dem Balkon. Das ist eine tolle Überraschung!

Es wird die beste Party!`,
        questions: [
            { question: "Wie alt wird sie?", options: ["25 Jahre", "28 Jahre", "30 Jahre", "35 Jahre"], correct: 2 },
            { question: "Wann beginnt die Party?", options: ["um 17:00 Uhr", "um 18:00 Uhr", "um 19:00 Uhr", "um 20:00 Uhr"], correct: 1 },
            { question: "Wer bringt den Kuchen?", options: ["die Schwester", "die Mutter", "die Freundin", "der Bruder"], correct: 1 },
            { question: "Wie viele Leute kommen?", options: ["15 Leute", "20 Leute", "25 Leute", "30 Leute"], correct: 2 },
            { question: "Was gibt es um Mitternacht?", options: ["Geschenke", "noch mehr Kuchen", "Feuerwerk", "Karaoke"], correct: 2 }
        ]
    }
};

/**
 * Get reading for a specific lesson
 */
export const getReadingForLesson = (lessonId) => {
    return lessonReadings[lessonId] || null;
};

export default lessonReadings;
