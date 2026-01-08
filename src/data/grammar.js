/**
 * Grammar Topics Database - Expanded
 * Повний список граматичних тем A1 з правилами, прикладами та вправами
 */

export const grammarTopics = [
    // ==========================================
    // LEKTION 1: Begrüßung
    // ==========================================
    {
        id: "personalpronomen",
        name: "Personalpronomen",
        icon: "👤",
        description: "ich, du, er, sie, es, wir, ihr, sie",
        lesson: 1,
        shortDescription: "Особові займенники"
    },
    {
        id: "sein-konjugation",
        name: "sein (Konjugation)",
        icon: "🔗",
        description: "Дієслово 'бути' - найважливіше!",
        lesson: 1,
        shortDescription: "Відмінювання sein"
    },
    {
        id: "w-fragen",
        name: "W-Fragen",
        icon: "❓",
        description: "Wie? Woher? Was? Wer?",
        lesson: 1,
        shortDescription: "Питальні слова"
    },

    // ==========================================
    // LEKTION 2: Familie
    // ==========================================
    {
        id: "possessivartikel",
        name: "Possessivartikel",
        icon: "👨‍👩‍👧",
        description: "mein, dein, sein, ihr...",
        lesson: 2,
        shortDescription: "Присвійні артиклі"
    },
    {
        id: "negation",
        name: "Negation (nicht/kein)",
        icon: "❌",
        description: "Як заперечувати в німецькій",
        lesson: 2,
        shortDescription: "nicht та kein"
    },

    // ==========================================
    // LEKTION 3: Essen и Trinken
    // ==========================================
    {
        id: "artikel",
        name: "Bestimmter/Unbestimmter Artikel",
        icon: "📌",
        description: "der/die/das та ein/eine/ein",
        lesson: 3,
        shortDescription: "Артиклі"
    },
    {
        id: "plural",
        name: "Plural der Nomen",
        icon: "🔢",
        description: "-e, -en, -er, -s, Umlaut",
        lesson: 3,
        shortDescription: "Множина іменників"
    },
    {
        id: "akkusativ",
        name: "Akkusativ",
        icon: "🎯",
        description: "Знахідний відмінок (Wen? Was?)",
        lesson: 3,
        shortDescription: "Akkusativ"
    },

    // ==========================================
    // LEKTION 4: Wohnung
    // ==========================================
    {
        id: "es-gibt",
        name: "es gibt + Akkusativ",
        icon: "🏠",
        description: "Es gibt einen Tisch.",
        lesson: 4,
        shortDescription: "es gibt"
    },
    {
        id: "lokale-praepositionen",
        name: "Lokale Präpositionen",
        icon: "📍",
        description: "in, auf, an, unter, neben, vor, hinter",
        lesson: 4,
        shortDescription: "Місцеві прийменники"
    },

    // ==========================================
    // LEKTION 5: Mein Tag
    // ==========================================
    {
        id: "trennbare-verben",
        name: "Trennbare Verben",
        icon: "✂️",
        description: "aufstehen, einkaufen, anfangen...",
        lesson: 5,
        shortDescription: "Відокремлювані дієслова"
    },
    {
        id: "zeitangaben",
        name: "Zeitangaben",
        icon: "⏰",
        description: "am, um, von...bis, morgens, abends",
        lesson: 5,
        shortDescription: "Позначення часу"
    },
    {
        id: "uhrzeit",
        name: "Uhrzeit",
        icon: "🕐",
        description: "Wie spät ist es?",
        lesson: 5,
        shortDescription: "Котра година?"
    },

    // ==========================================
    // LEKTION 6: Freizeit
    // ==========================================
    {
        id: "modalverben-koennen-wollen",
        name: "können & wollen",
        icon: "💪",
        description: "Ich kann / Ich will",
        lesson: 6,
        shortDescription: "können та wollen"
    },
    {
        id: "gern-lieber-am-liebsten",
        name: "gern/lieber/am liebsten",
        icon: "❤️",
        description: "Ступені порівняння gern",
        lesson: 6,
        shortDescription: "gern"
    },

    // ==========================================
    // LEKTION 7: Schule
    // ==========================================
    {
        id: "modalverben-muessen-duerfen",
        name: "müssen & dürfen",
        icon: "🚫",
        description: "Ich muss / Ich darf",
        lesson: 7,
        shortDescription: "müssen та dürfen"
    },
    {
        id: "imperativ",
        name: "Imperativ",
        icon: "👆",
        description: "Наказовий спосіб",
        lesson: 7,
        shortDescription: "Imperativ"
    },

    // ==========================================
    // LEKTION 8: Beruf
    // ==========================================
    {
        id: "perfekt-regelmaessig",
        name: "Perfekt (regelmäßig)",
        icon: "✅",
        description: "hat gemacht, hat gesagt...",
        lesson: 8,
        shortDescription: "Perfekt (слабкі)"
    },
    {
        id: "perfekt-unregelmaessig",
        name: "Perfekt (unregelmäßig)",
        icon: "⚡",
        description: "hat gesehen, ist gegangen...",
        lesson: 8,
        shortDescription: "Perfekt (сильні)"
    },

    // ==========================================
    // LEKTION 9: Ämter
    // ==========================================
    {
        id: "ordnungszahlen",
        name: "Ordnungszahlen",
        icon: "1️⃣",
        description: "erste, zweite, dritte...",
        lesson: 9,
        shortDescription: "Порядкові числівники"
    },
    {
        id: "datum",
        name: "Datum",
        icon: "📅",
        description: "am ersten Januar",
        lesson: 9,
        shortDescription: "Дата"
    },

    // ==========================================
    // LEKTION 10: Gesundheit
    // ==========================================
    {
        id: "modalverb-sollen",
        name: "sollen",
        icon: "💊",
        description: "Du sollst mehr schlafen.",
        lesson: 10,
        shortDescription: "sollen"
    },
    {
        id: "koerperteile",
        name: "Körperteile + Schmerzen",
        icon: "🤕",
        description: "Mir tut der Kopf weh.",
        lesson: 10,
        shortDescription: "Частини тіла"
    },

    // ==========================================
    // LEKTION 11: In der Stadt
    // ==========================================
    {
        id: "dativ",
        name: "Dativ",
        icon: "🎁",
        description: "Давальний відмінок (Wem?)",
        lesson: 11,
        shortDescription: "Dativ"
    },
    {
        id: "praepositionen-dativ",
        name: "Präpositionen mit Dativ",
        icon: "🚇",
        description: "mit, bei, nach, zu, von, aus, seit",
        lesson: 11,
        shortDescription: "Прийменники + Dativ"
    },

    // ==========================================
    // LEKTION 12: Kundenservice
    // ==========================================
    {
        id: "temporale-praepositionen",
        name: "Temporale Präpositionen",
        icon: "⏱️",
        description: "vor, nach, bis, seit, in, ab",
        lesson: 12,
        shortDescription: "Часові прийменники"
    },
    {
        id: "personalpronomen-dativ",
        name: "Personalpronomen im Dativ",
        icon: "👥",
        description: "mir, dir, ihm, ihr...",
        lesson: 12,
        shortDescription: "Займенники в Dativ"
    },
    {
        id: "konjunktion-wenn",
        name: "Konjunktion 'wenn'",
        icon: "🔀",
        description: "Wenn ich Zeit habe, ...",
        lesson: 12,
        shortDescription: "wenn"
    },

    // ==========================================
    // LEKTION 13: Kleidung
    // ==========================================
    {
        id: "adjektive-praedikativ",
        name: "Adjektive (prädikativ)",
        icon: "👗",
        description: "Das Kleid ist schön.",
        lesson: 13,
        shortDescription: "Прикметники"
    },
    {
        id: "demonstrativpronomen",
        name: "Demonstrativpronomen",
        icon: "👉",
        description: "dieser, diese, dieses",
        lesson: 13,
        shortDescription: "Вказівні займенники"
    },
    {
        id: "farben",
        name: "Farben",
        icon: "🎨",
        description: "rot, blau, grün, schwarz, weiß",
        lesson: 13,
        shortDescription: "Кольори"
    },

    // ==========================================
    // LEKTION 14: Feste
    // ==========================================
    {
        id: "konjunktion-dass",
        name: "Konjunktion 'dass'",
        icon: "💬",
        description: "Ich denke, dass...",
        lesson: 14,
        shortDescription: "dass"
    },
    {
        id: "einladung-gratulation",
        name: "Einladung & Gratulation",
        icon: "🎉",
        description: "Herzlichen Glückwunsch!",
        lesson: 14,
        shortDescription: "Привітання"
    }
];

// ==========================================
// GRAMMAR CONTENT WITH FULL EXPLANATIONS
// ==========================================
export const grammarContent = {
    // --- PERSONALPRONOMEN ---
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
| **sie** — вона | **Sie** — Ви (ввічл.) |
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
                    { german: "Sie ist Lehrerin.", translation: "Вона вчителька." },
                    { german: "Wir lernen Deutsch.", translation: "Ми вчимо німецьку." },
                    { german: "Wie heißen Sie?", translation: "Як Вас звати? (ввічл.)" }
                ]
            }
        ]
    },

    // --- TEMPORALE PRÄPOSITIONEN ---
    "temporale-praepositionen": {
        title: "Temporale Präpositionen (Часові прийменники)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Часові прийменники вказують на ЧАС:**

| Прийменник | Значення | Приклад |
|------------|----------|---------|
| **vor** | перед, тому | vor 2 Jahren |
| **nach** | після | nach dem Essen |
| **bis** | до (кінц. точка) | bis Montag |
| **seit** | з (початок) | seit 2020 |
| **in** | через | in 2 Wochen |
| **ab** | починаючи з | ab morgen |

⚠️ **vor, nach, seit** вимагають **Dativ**!
⚠️ **bis** зазвичай без артикля`
            },
            {
                title: "Детальніше",
                type: "tip",
                content: `**VOR** = "тому" (минуле)
→ Vor einer Woche = тиждень тому
→ Vor dem Kurs = перед курсом

**NACH** = "після"
→ Nach der Arbeit = після роботи
→ Nach dem Film = після фільму

**BIS** = "до" (кінцева точка)
→ Bis Freitag = до п'ятниці
→ Bis 18 Uhr = до 18:00

**SEIT** = "з" (тривалість)
→ Seit 3 Monaten = вже 3 місяці
→ Seit gestern = з учора

**IN** = "через" (майбутнє)
→ In 2 Tagen = через 2 дні
→ In einer Stunde = через годину

**AB** = "починаючи з"
→ Ab Montag = з понеділка
→ Ab sofort = негайно`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Vor 3 Jahren bin ich nach Deutschland gekommen.", translation: "3 роки тому я приїхав до Німеччини." },
                    { german: "Nach dem Kurs gehe ich einkaufen.", translation: "Після курсу я йду за покупками." },
                    { german: "Ich arbeite bis 17 Uhr.", translation: "Я працюю до 17:00." },
                    { german: "Seit September lerne ich Deutsch.", translation: "З вересня я вчу німецьку." },
                    { german: "In einer Woche habe ich Urlaub.", translation: "Через тиждень у мене відпустка." },
                    { german: "Ab morgen mache ich Sport.", translation: "З завтра я займаюся спортом." }
                ]
            }
        ]
    },

    // --- AKKUSATIV ---
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
| **der** → | **den** |
| die → | die |
| das → | das |
| **ein** → | **einen** |
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
• brauchen — Wir brauchen **einen Tisch**.
• suchen — Er sucht **die Wohnung**.
• lesen — Sie liest **das Buch**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich kaufe den Apfel.", translation: "Я купую яблуко." },
                    { german: "Er hat einen Bruder.", translation: "Він має брата." },
                    { german: "Sie trinkt die Milch.", translation: "Вона п'є молоко." },
                    { german: "Wir essen das Brot.", translation: "Ми їмо хліб." },
                    { german: "Ich sehe einen Mann.", translation: "Я бачу чоловіка." }
                ]
            }
        ]
    },

    // --- DATIV ---
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

⚠️ Змінюються ВСІ роди!
⚠️ Множина: den + -n (den Kindern)`
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
   - danken — Ich danke **dem Arzt**.
   - gefallen — Das gefällt **mir**.
   - gehören — Das gehört **dem Kind**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich helfe dem Kind.", translation: "Я допомагаю дитині." },
                    { german: "Er fährt mit der U-Bahn.", translation: "Він їде метро." },
                    { german: "Sie gibt dem Bruder das Buch.", translation: "Вона дає брату книгу." },
                    { german: "Wir gehen zu dem Arzt.", translation: "Ми йдемо до лікаря." },
                    { german: "Das Buch gehört der Lehrerin.", translation: "Книга належить вчительці." }
                ]
            }
        ]
    },

    // --- TRENNBARE VERBEN ---
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
**an-, auf-, aus-, ein-, mit-, vor-, zu-, ab-, weg-, zurück-**`
            },
            {
                title: "Важливо!",
                type: "tip",
                content: `**Як розпізнати?**
Якщо наголос на ПРЕФІКСІ = відокремлюваний
• **áufstehen** → trennbar ✓
• **verstéhen** → nicht trennbar ✗

**В Perfekt:**
• aufstehen → ist **auf**ge**standen**
• einkaufen → hat **ein**ge**kauft**

Префікс + ge + основа!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich stehe um 7 Uhr auf.", translation: "Я встаю о 7 годині." },
                    { german: "Er kauft im Supermarkt ein.", translation: "Він купує в супермаркеті." },
                    { german: "Wir fangen um 9 Uhr an.", translation: "Ми починаємо о 9 годині." },
                    { german: "Sie ruft ihre Mutter an.", translation: "Вона дзвонить своїй мамі." },
                    { german: "Er macht das Fenster auf.", translation: "Він відчиняє вікно." },
                    { german: "Ich sehe jeden Abend fern.", translation: "Я дивлюся ТБ кожного вечора." }
                ]
            }
        ]
    },

    // --- MODALVERBEN ---
    "modalverben-koennen-wollen": {
        title: "können & wollen (Модальні дієслова)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**können** = могти (вміти, мати можливість)
**wollen** = хотіти

| Person | können | wollen |
|--------|--------|--------|
| ich | kann | will |
| du | kannst | willst |
| er/sie/es | kann | will |
| wir | können | wollen |
| ihr | könnt | wollt |
| sie/Sie | können | wollen |

⚠️ Основне дієслово стоїть в **КІНЦІ** речення в Infinitiv!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich kann Deutsch sprechen.", translation: "Я можу говорити німецькою." },
                    { german: "Kannst du schwimmen?", translation: "Ти вмієш плавати?" },
                    { german: "Er will nach Berlin fahren.", translation: "Він хоче поїхати до Берліна." },
                    { german: "Wir wollen ins Kino gehen.", translation: "Ми хочемо піти в кіно." }
                ]
            }
        ]
    }
};

export function getGrammarForLesson(lessonId) {
    return grammarTopics.filter(g => g.lesson === lessonId);
}

export function getGrammarContent(topicId) {
    return grammarContent[topicId] || null;
}

export default grammarTopics;
