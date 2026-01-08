/**
 * Grammar Rules and Topics
 * Граматика A1 з правилами, прикладами та вправами
 */

export const grammarTopics = [
    {
        id: "artikel",
        name: "Artikel (Артиклі)",
        icon: "📌",
        description: "der, die, das — як запам'ятати?",
        level: "A1",
        lesson: 3,
        mastered: false
    },
    {
        id: "personalpronomen",
        name: "Personalpronomen",
        icon: "👤",
        description: "ich, du, er, sie, es, wir, ihr, sie",
        level: "A1",
        lesson: 1,
        mastered: false
    },
    {
        id: "sein-haben",
        name: "sein & haben",
        icon: "🔗",
        description: "Дієслова бути та мати",
        level: "A1",
        lesson: 1,
        mastered: false
    },
    {
        id: "akkusativ",
        name: "Akkusativ",
        icon: "🎯",
        description: "Знахідний відмінок",
        level: "A1",
        lesson: 3,
        mastered: false
    },
    {
        id: "dativ",
        name: "Dativ",
        icon: "🎁",
        description: "Давальний відмінок",
        level: "A1",
        lesson: 11,
        mastered: false
    },
    {
        id: "trennbare-verben",
        name: "Trennbare Verben",
        icon: "✂️",
        description: "Відокремлювані дієслова",
        level: "A1",
        lesson: 5,
        mastered: false
    },
    {
        id: "modalverben",
        name: "Modalverben",
        icon: "💪",
        description: "können, wollen, müssen, sollen, dürfen",
        level: "A1",
        lesson: 6,
        mastered: false
    },
    {
        id: "perfekt",
        name: "Perfekt",
        icon: "⏰",
        description: "Минулий час",
        level: "A1",
        lesson: 8,
        mastered: false
    },
    {
        id: "praepositionen",
        name: "Präpositionen",
        icon: "📍",
        description: "in, an, auf, bei, mit, nach, zu, von",
        level: "A1",
        lesson: 11,
        mastered: false
    },
    {
        id: "negation",
        name: "Negation",
        icon: "❌",
        description: "nicht vs. kein",
        level: "A1",
        lesson: 2,
        mastered: false
    }
];

export const grammarContent = {
    "artikel": {
        title: "Artikel (Артиклі)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `У німецькій мові є ТРИ роди:
                
• **der** — чоловічий рід (Maskulinum)
• **die** — жіночий рід (Femininum)  
• **das** — середній рід (Neutrum)

⚠️ Рід слова в німецькій НЕ завжди збігається з українською!`
            },
            {
                title: "Як запам'ятати?",
                type: "tip",
                content: `**Підказки для артиклів:**

🔵 **DER** (чоловічий):
- Дні тижня: der Montag, der Dienstag...
- Місяці: der Januar, der Februar...
- Пори року: der Sommer, der Winter...
- Чоловічі професії: der Arzt, der Lehrer

🔴 **DIE** (жіночий):
- Слова на **-ung**: die Wohnung, die Zeitung
- Слова на **-heit/-keit**: die Gesundheit
- Слова на **-tion**: die Information
- Жіночі професії: die Ärztin, die Lehrerin

🟢 **DAS** (середній):
- Слова на **-chen/-lein**: das Mädchen, das Brötchen
- Слова на **-ment**: das Dokument
- Інфінітиви як іменники: das Essen, das Leben`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "der Mann", translation: "чоловік" },
                    { german: "die Frau", translation: "жінка" },
                    { german: "das Kind", translation: "дитина" },
                    { german: "der Apfel", translation: "яблуко" },
                    { german: "die Banane", translation: "банан" },
                    { german: "das Brot", translation: "хліб" }
                ]
            }
        ],
        exercises: ["artikel-1", "artikel-2", "artikel-3"]
    },

    "akkusativ": {
        title: "Akkusativ (Знахідний відмінок)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Akkusativ** відповідає на питання **Wen? Was?** (Кого? Що?)

Зміни артиклів в Akkusativ:
| Nominativ | Akkusativ |
|-----------|-----------|
| der → | **den** |
| die → | die |
| das → | das |
| ein → | **einen** |
| eine → | eine |
| ein → | ein |

⚠️ Змінюється ТІЛЬКИ чоловічий рід!`
            },
            {
                title: "Коли використовувати?",
                type: "tip",
                content: `**Akkusativ потрібен після дієслів:**

• haben — Ich habe **einen Bruder**.
• kaufen — Ich kaufe **den Apfel**.
• essen — Er isst **das Brot**.
• trinken — Sie trinkt **den Kaffee**.
• sehen — Ich sehe **die Frau**.
• brauchen — Wir brauchen **einen Tisch**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich kaufe den Apfel.", translation: "Я купую яблуко." },
                    { german: "Er hat einen Bruder.", translation: "Він має брата." },
                    { german: "Sie trinkt die Milch.", translation: "Вона п'є молоко." },
                    { german: "Wir essen das Brot.", translation: "Ми їмо хліб." }
                ]
            }
        ],
        exercises: ["akk-1", "akk-2", "akk-3"]
    },

    "dativ": {
        title: "Dativ (Давальний відмінок)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Dativ** відповідає на питання **Wem?** (Кому?)

Зміни артиклів в Dativ:
| Nominativ | Dativ |
|-----------|-------|
| der → | **dem** |
| die → | **der** |
| das → | **dem** |
| ein → | **einem** |
| eine → | **einer** |
| ein → | **einem** |

⚠️ Змінюються ВСІ роди!`
            },
            {
                title: "Коли використовувати?",
                type: "tip",
                content: `**Dativ потрібен:**

1. Після прийменників: **mit, bei, nach, zu, von, aus, seit**
   - Ich fahre **mit dem Bus**.
   - Er wohnt **bei der Mutter**.

2. З дієсловами:
   - helfen — Ich helfe **dem Mann**.
   - geben — Ich gebe **der Frau** das Buch.
   - danken — Ich danke **dem Arzt**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich helfe dem Kind.", translation: "Я допомагаю дитині." },
                    { german: "Er fährt mit der U-Bahn.", translation: "Він їде метро." },
                    { german: "Sie gibt dem Bruder das Buch.", translation: "Вона дає брату книгу." },
                    { german: "Wir gehen zu dem Arzt.", translation: "Ми йдемо до лікаря." }
                ]
            }
        ],
        exercises: ["dat-1", "dat-2", "dat-3"]
    },

    "modalverben": {
        title: "Modalverben (Модальні дієслова)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Модальні дієслова** змінюють значення основного дієслова.

🔹 **können** — могти (вміти, мати можливість)
🔹 **wollen** — хотіти
🔹 **müssen** — мусити (необхідність)
🔹 **sollen** — повинен (порада/наказ)
🔹 **dürfen** — дозволяти / мати право

⚠️ Основне дієслово стоїть в КІНЦІ речення в Infinitiv!`
            },
            {
                title: "Відмінювання",
                type: "table",
                content: `
| Person | können | wollen | müssen |
|--------|--------|--------|--------|
| ich | kann | will | muss |
| du | kannst | willst | musst |
| er/sie/es | kann | will | muss |
| wir | können | wollen | müssen |
| ihr | könnt | wollt | müsst |
| sie/Sie | können | wollen | müssen |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich kann Deutsch sprechen.", translation: "Я можу говорити німецькою." },
                    { german: "Er will nach Berlin fahren.", translation: "Він хоче поїхати до Берліна." },
                    { german: "Wir müssen arbeiten.", translation: "Ми мусимо працювати." },
                    { german: "Du sollst mehr schlafen.", translation: "Тобі слід більше спати." },
                    { german: "Hier darf man nicht rauchen.", translation: "Тут не можна курити." }
                ]
            }
        ],
        exercises: ["modal-1", "modal-2", "modal-3"]
    },

    "trennbare-verben": {
        title: "Trennbare Verben (Відокремлювані дієслова)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Деякі дієслова мають **відокремлювані префікси**.

У Present Tense префікс йде в **КІНЕЦЬ** речення:

**aufstehen** → Ich **stehe** um 7 Uhr **auf**.
**einkaufen** → Er **kauft** im Supermarkt **ein**.

⚠️ Відокремлювані префікси:
**an-, auf-, aus-, ein-, mit-, vor-, zu-, ab-, weg-**`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich stehe um 7 Uhr auf.", translation: "Я встаю о 7 годині." },
                    { german: "Er kauft im Supermarkt ein.", translation: "Він купує в супермаркеті." },
                    { german: "Wir fangen um 9 Uhr an.", translation: "Ми починаємо о 9 годині." },
                    { german: "Sie ruft ihre Mutter an.", translation: "Вона дзвонить своїй мамі." },
                    { german: "Er macht das Fenster auf.", translation: "Він відчиняє вікно." }
                ]
            }
        ],
        exercises: ["trenn-1", "trenn-2"]
    },

    "sein-haben": {
        title: "sein & haben",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**sein** = бути
**haben** = мати

Це найважливіші дієслова в німецькій!`
            },
            {
                title: "Відмінювання",
                type: "table",
                content: `
| Person | sein | haben |
|--------|------|-------|
| ich | bin | habe |
| du | bist | hast |
| er/sie/es | ist | hat |
| wir | sind | haben |
| ihr | seid | habt |
| sie/Sie | sind | haben |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich bin Student.", translation: "Я студент." },
                    { german: "Du bist nett.", translation: "Ти милий/а." },
                    { german: "Er ist Arzt.", translation: "Він лікар." },
                    { german: "Ich habe einen Bruder.", translation: "Я маю брата." },
                    { german: "Sie hat Hunger.", translation: "Вона голодна." },
                    { german: "Wir haben Zeit.", translation: "Ми маємо час." }
                ]
            }
        ],
        exercises: ["sein-haben-1", "sein-haben-2"]
    },

    "personalpronomen": {
        title: "Personalpronomen (Особові займенники)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Особові займенники в Nominativ:**

| Однина | Множина |
|--------|---------|
| **ich** — я | **wir** — ми |
| **du** — ти | **ihr** — ви (мн.) |
| **er** — він | **sie** — вони |
| **sie** — вона | **Sie** — Ви (ввічлива форма) |
| **es** — воно | |`
            },
            {
                title: "Важливо!",
                type: "tip",
                content: `⚠️ **Sie** з великої літери = ввічлива форма "Ви"
⚠️ **sie** з маленької = "вона" або "вони"

Контекст завжди допоможе зрозуміти!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich komme aus der Ukraine.", translation: "Я з України." },
                    { german: "Du sprichst gut Deutsch.", translation: "Ти добре говориш німецькою." },
                    { german: "Er arbeitet in Berlin.", translation: "Він працює в Берліні." },
                    { german: "Wir lernen Deutsch.", translation: "Ми вчимо німецьку." },
                    { german: "Wie heißen Sie?", translation: "Як Вас звати?" }
                ]
            }
        ],
        exercises: ["pronomen-1", "pronomen-2"]
    }
};

export default grammarTopics;
