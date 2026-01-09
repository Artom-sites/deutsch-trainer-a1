// src/data/chatScenarios.js
// Сценарії для рольових ігор з AI (Simulation)

export const chatScenarios = [
    {
        id: "intro",
        title: "Kennenlernen (Знайомство)",
        description: "Розкажи про себе новому другу.",
        icon: "👋",
        startNode: "start",
        nodes: {
            "start": {
                message: "Hallo! Wie heißt du?",
                options: [
                    { text: "Ich heiße Artem.", nextNode: "name_artem" }, // Can be generic
                    { text: "Mein Name ist Alexander.", nextNode: "name_alex" },
                    { text: "Ich bin Anna.", nextNode: "name_anna" }
                ]
            },
            "name_artem": {
                message: "Freut mich, Artem! Woher kommst du?",
                options: [
                    { text: "Aus der Ukraine.", nextNode: "ukraine" },
                    { text: "Ich komme aus Deutschland.", nextNode: "germany" }
                ]
            },
            "name_alex": {
                message: "Hallo Alexander! Woher kommst du?",
                options: [
                    { text: "Aus der Ukraine.", nextNode: "ukraine" },
                    { text: "Aus Österreich.", nextNode: "austria" }
                ]
            },
            "name_anna": {
                message: "Schöner Name! Und woher kommst du?",
                options: [
                    { text: "Aus der Ukraine.", nextNode: "ukraine" }
                ]
            },
            "ukraine": {
                message: "Die Ukraine ist ein schönes Land! Was machst du in Deutschland?",
                options: [
                    { text: "Ich lerne Deutsch.", nextNode: "learning" },
                    { text: "Ich arbeite hier.", nextNode: "working" }
                ]
            },
            "germany": {
                message: "Ach so! Und in welcher Stadt wohnst du?",
                options: [
                    { text: "In Berlin.", nextNode: "berlin" },
                    { text: "In München.", nextNode: "munich" }
                ]
            },
            // ... endings
            "learning": {
                message: "Das ist toll! Viel Erfolg beim Lernen!",
                options: [], // End of conversation
                end: true
            },
            "working": {
                message: "Viel Erfolg bei der Arbeit!",
                options: [],
                end: true
            },
            "austria": {
                message: "Österreich ist toll! Wien ist super.",
                options: [],
                end: true
            },
            "berlin": {
                message: "Berlin ist cool.",
                options: [],
                end: true
            },
            "munich": {
                message: "München ist schön.",
                options: [],
                end: true
            }
        }
    },
    {
        id: "cafe",
        title: "Im Café (В кафе)",
        description: "Замов каву та десерт.",
        icon: "☕",
        startNode: "start",
        nodes: {
            "start": {
                message: "Guten Tag! Was möchten Sie bestellen?",
                options: [
                    { text: "Einen Kaffee, bitte.", nextNode: "coffee" },
                    { text: "Ich möchte einen Tee.", nextNode: "tea" },
                    { text: "Nichts, danke.", nextNode: "nothing" }
                ]
            },
            "coffee": {
                message: "Gerne. Möchten Sie Milch und Zucker?",
                options: [
                    { text: "Ja, bitte.", nextNode: "milk_sugar" },
                    { text: "Nur Milch.", nextNode: "only_milk" },
                    { text: "Schwarz, bitte.", nextNode: "black" }
                ]
            },
            "tea": {
                message: "Welchen Tee möchten Sie? Schwarz oder Grün?",
                options: [
                    { text: "Schwarzen Tee.", nextNode: "black_tea" },
                    { text: "Grünen Tee.", nextNode: "green_tea" }
                ]
            },
            "milk_sugar": {
                message: "Alles klar. Sonst noch etwas?",
                options: [
                    { text: "Ein Stück Kuchen, bitte.", nextNode: "cake" },
                    { text: "Nein, danke. Das ist alles.", nextNode: "bill" }
                ]
            },
            "only_milk": {
                message: "Gut. Möchten Sie auch Kuchen?",
                options: [
                    { text: "Ja, Käsekuchen bitte.", nextNode: "cheesecake" },
                    { text: "Nein.", nextNode: "bill" } // Shortened path
                ]
            },
            "black": {
                message: "Ein schwarzer Kaffee. Kommt sofort.",
                options: [],
                end: true
            },
            "black_tea": {
                message: "Ein schwarzer Tee. Kommt sofort.",
                options: [],
                end: true
            },
            "green_tea": {
                message: "Ein grüner Tee. Kommt sofort.",
                options: [],
                end: true
            },
            "nothing": {
                message: "Schade. Auf Wiedersehen!",
                options: [],
                end: true
            },
            "cake": {
                message: "Lecker! Das macht dann 8 Euro.",
                options: [
                    { text: "Hier, bitte.", nextNode: "pay" }
                ]
            },
            "cheesecake": {
                message: "Gute Wahl! Das macht 7 Euro.",
                options: [
                    { text: "Hier, bitte.", nextNode: "pay" }
                ]
            },
            "pay": {
                message: "Vielen Dank! Auf Wiedersehen.",
                options: [],
                end: true
            },
            "bill": {
                message: "Das macht 3 Euro 50, bitte.",
                options: [
                    { text: "Hier, bitte.", nextNode: "pay" }
                ]
            }
        }
    },
    {
        id: "supermarkt",
        title: "Im Supermarkt (В супермаркеті)",
        description: "Знайди товари та спитай про ціни.",
        icon: "🛒",
        startNode: "start",
        nodes: {
            "start": {
                message: "Guten Tag! Kann ich Ihnen helfen?",
                options: [
                    { text: "Wo finde ich die Milch?", nextNode: "milk" },
                    { text: "Haben Sie frisches Brot?", nextNode: "bread" },
                    { text: "Ich suche Obst.", nextNode: "fruit" }
                ]
            },
            "milk": {
                message: "Die Milch ist im Gang 3, bei den Milchprodukten.",
                options: [
                    { text: "Danke! Und wo ist der Käse?", nextNode: "cheese" },
                    { text: "Super, danke.", nextNode: "end_help" }
                ]
            },
            "bread": {
                message: "Ja, das frische Brot ist gleich hier links.",
                options: [
                    { text: "Was kostet es?", nextNode: "bread_price" },
                    { text: "Danke!", nextNode: "end_help" }
                ]
            },
            "fruit": {
                message: "Das Obst ist gleich vorne. Wir haben Äpfel und Bananen im Angebot.",
                options: [
                    { text: "Was kosten die Äpfel?", nextNode: "apple_price" },
                    { text: "Ich nehme Bananen.", nextNode: "bananas" }
                ]
            },
            "cheese": {
                message: "Der Käse ist auch in Gang 3, neben der Milch.",
                options: [],
                end: true
            },
            "bread_price": {
                message: "Ein Brot kostet 2 Euro 50.",
                options: [
                    { text: "Ich nehme eins, bitte.", nextNode: "buy_bread" }
                ]
            },
            "buy_bread": {
                message: "Gerne! Hier bitte. Sonst noch etwas?",
                options: [
                    { text: "Nein, das ist alles.", nextNode: "kasse" }
                ]
            },
            "apple_price": {
                message: "Die Äpfel kosten 1 Euro 99 pro Kilo.",
                options: [
                    { text: "Ich nehme ein Kilo.", nextNode: "end_help" }
                ]
            },
            "bananas": {
                message: "Gute Wahl! Möchten Sie noch etwas?",
                options: [
                    { text: "Nein, danke.", nextNode: "kasse" }
                ]
            },
            "kasse": {
                message: "Die Kasse ist geradeaus. Schönen Tag noch!",
                options: [],
                end: true
            },
            "end_help": {
                message: "Gern geschehen! Auf Wiedersehen!",
                options: [],
                end: true
            }
        }
    },
    {
        id: "arzt",
        title: "Beim Arzt (У лікаря)",
        description: "Опиши симптоми та запиши на прийом.",
        icon: "🏥",
        startNode: "start",
        nodes: {
            "start": {
                message: "Guten Tag! Was kann ich für Sie tun?",
                options: [
                    { text: "Ich möchte einen Termin machen.", nextNode: "termin" },
                    { text: "Ich habe Kopfschmerzen.", nextNode: "kopf" },
                    { text: "Mir ist schlecht.", nextNode: "schlecht" }
                ]
            },
            "termin": {
                message: "Natürlich. Wann passt es Ihnen? Morgen oder übermorgen?",
                options: [
                    { text: "Morgen um 10 Uhr.", nextNode: "morgen" },
                    { text: "Übermorgen nachmittags.", nextNode: "uebermorgen" }
                ]
            },
            "kopf": {
                message: "Seit wann haben Sie Kopfschmerzen?",
                options: [
                    { text: "Seit gestern.", nextNode: "seit_gestern" },
                    { text: "Seit drei Tagen.", nextNode: "seit_drei" }
                ]
            },
            "schlecht": {
                message: "Das tut mir leid. Haben Sie auch Fieber?",
                options: [
                    { text: "Ja, ein bisschen.", nextNode: "fieber" },
                    { text: "Nein, kein Fieber.", nextNode: "kein_fieber" }
                ]
            },
            "morgen": {
                message: "Perfekt! Ihr Termin ist morgen um 10 Uhr. Vergessen Sie Ihre Versichertenkarte nicht!",
                options: [],
                end: true
            },
            "uebermorgen": {
                message: "Gut! Ich trage Sie für übermorgen um 14 Uhr ein.",
                options: [],
                end: true
            },
            "seit_gestern": {
                message: "Trinken Sie viel Wasser und ruhen Sie sich aus. Nehmen Sie eine Tablette.",
                options: [],
                end: true
            },
            "seit_drei": {
                message: "Das ist schon lang. Ich schreibe Ihnen ein Rezept. Gehen Sie zur Apotheke.",
                options: [],
                end: true
            },
            "fieber": {
                message: "Bleiben Sie im Bett und trinken Sie viel. Ich gebe Ihnen ein Medikament.",
                options: [],
                end: true
            },
            "kein_fieber": {
                message: "Gut. Ruhen Sie sich aus. Wenn es nicht besser wird, kommen Sie wieder.",
                options: [],
                end: true
            }
        }
    },
    {
        id: "bahnhof",
        title: "Am Bahnhof (На вокзалі)",
        description: "Купи квиток і дізнайся розклад.",
        icon: "🚂",
        startNode: "start",
        nodes: {
            "start": {
                message: "Willkommen! Wohin möchten Sie fahren?",
                options: [
                    { text: "Nach Berlin, bitte.", nextNode: "berlin" },
                    { text: "Ich möchte nach München.", nextNode: "muenchen" },
                    { text: "Wann fährt der nächste Zug nach Hamburg?", nextNode: "hamburg" }
                ]
            },
            "berlin": {
                message: "Der nächste Zug nach Berlin fährt um 14:30. Möchten Sie eine Fahrkarte?",
                options: [
                    { text: "Ja, eine Fahrkarte bitte.", nextNode: "ticket_berlin" },
                    { text: "Wie lange dauert die Fahrt?", nextNode: "dauer_berlin" }
                ]
            },
            "muenchen": {
                message: "Nach München haben wir einen ICE um 15 Uhr. Hin und zurück?",
                options: [
                    { text: "Nur hin, bitte.", nextNode: "hin" },
                    { text: "Hin und zurück.", nextNode: "hinzurueck" }
                ]
            },
            "hamburg": {
                message: "Der nächste Zug nach Hamburg fährt in 20 Minuten von Gleis 5.",
                options: [
                    { text: "Danke! Wo ist Gleis 5?", nextNode: "gleis" },
                    { text: "Eine Fahrkarte, bitte.", nextNode: "ticket_hamburg" }
                ]
            },
            "ticket_berlin": {
                message: "Das macht 49 Euro. Erste oder zweite Klasse?",
                options: [
                    { text: "Zweite Klasse.", nextNode: "pay_train" },
                    { text: "Erste Klasse.", nextNode: "pay_train_1" }
                ]
            },
            "dauer_berlin": {
                message: "Die Fahrt dauert etwa 4 Stunden.",
                options: [
                    { text: "Okay, eine Fahrkarte bitte.", nextNode: "ticket_berlin" }
                ]
            },
            "hin": {
                message: "Einfache Fahrt nach München: 65 Euro.",
                options: [
                    { text: "Hier, bitte.", nextNode: "pay_train" }
                ]
            },
            "hinzurueck": {
                message: "Hin und zurück nach München: 99 Euro. Ein gutes Angebot!",
                options: [
                    { text: "Super, ich nehme es.", nextNode: "pay_train" }
                ]
            },
            "gleis": {
                message: "Gleis 5 ist dort hinten, gehen Sie geradeaus und dann rechts.",
                options: [],
                end: true
            },
            "ticket_hamburg": {
                message: "Nach Hamburg: 35 Euro. Bitte sehr!",
                options: [],
                end: true
            },
            "pay_train": {
                message: "Vielen Dank! Hier ist Ihre Fahrkarte. Gute Reise!",
                options: [],
                end: true
            },
            "pay_train_1": {
                message: "Erste Klasse: 89 Euro. Hier ist Ihre Fahrkarte. Angenehme Reise!",
                options: [],
                end: true
            }
        }
    }
];
