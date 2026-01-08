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
    }
];
