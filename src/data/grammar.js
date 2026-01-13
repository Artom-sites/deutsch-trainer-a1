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
        id: "lokale-praepositionen-dativ",
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
        icon: "👤",
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
    },
    {
        id: "ordnungszahlen-14",
        name: "Ordinalzahlen (Datum)",
        icon: "📅",
        description: "am ersten Mai",
        lesson: 14,
        shortDescription: "Дата"
    },
    {
        id: "personalpronomen-akkusativ",
        name: "Pronomen im Akkusativ",
        icon: "🫵",
        description: "für mich, für dich",
        lesson: 14,
        shortDescription: "Akkusativ займенники"
    },
    {
        id: "konjunktion-denn",
        name: "Konjunktion 'denn'",
        icon: "🔗",
        description: "..., denn ich habe Zeit",
        lesson: 14,
        shortDescription: "denn"
    },
    {
        id: "werden-konjugation",
        name: "Verb 'werden'",
        icon: "🌱",
        description: "Ich werde alt.",
        lesson: 14,
        shortDescription: "werden"
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

    // --- MODALVERBEN: müssen, dürfen, sollen ---
    "modalverben-muessen-duerfen": {
        title: "müssen, dürfen, sollen (Модальні дієслова)",
        sections: [
            {
                title: "Кон'югація",
                type: "rule",
                content: `**müssen** = мусити (необхідність)
**dürfen** = мати право, дозволено
**sollen** = повинен (порада, обов'язок)

| Person | müssen | dürfen | sollen |
|--------|--------|--------|--------|
| ich | muss | darf | soll |
| du | musst | darfst | sollst |
| er/sie/es | muss | darf | soll |
| wir | müssen | dürfen | sollen |
| ihr | müsst | dürft | sollt |
| sie/Sie | müssen | dürfen | sollen |`
            },
            {
                title: "Різниця",
                type: "tip",
                content: `**müssen** = об'єктивна необхідність
→ Ich **muss** zum Arzt gehen. (Я мушу йти до лікаря)

**nicht dürfen** = ЗАБОРОНА
→ Hier **darf** man **nicht** rauchen. (Тут не можна палити)

**sollen** = порада або обов'язок від когось
→ Du **sollst** mehr Sport machen. (Тобі потрібно більше займатися спортом)

**nicht müssen** = НЕ обов'язково (не заборона!)
→ Du **musst nicht** kommen. = Ти не мусиш приходити (можеш, але не обов'язково)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich muss heute arbeiten.", translation: "Я мушу сьогодні працювати." },
                    { german: "Du darfst hier nicht parken.", translation: "Тобі не можна тут паркуватися." },
                    { german: "Er soll einen Antrag ausfüllen.", translation: "Він повинен заповнити заявку." },
                    { german: "Wir müssen pünktlich sein.", translation: "Ми мусимо бути вчасно." },
                    { german: "Sie dürfen das Museum besuchen.", translation: "Ви можете відвідати музей." }
                ]
            }
        ]
    },

    // --- IMPERATIV ---
    "imperativ": {
        title: "Imperativ (Наказовий спосіб)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Imperativ** використовується для наказів, прохань, порад.

| Форма | Утворення | Приклад |
|-------|-----------|---------|
| **du** | дієслово без -st | Komm! Geh! Fahr! |
| **ihr** | як в Präsens | Kommt! Geht! Fahrt! |
| **Sie** | дієслово + Sie | Kommen Sie! Gehen Sie! |

⚠️ Для **du**: прибираємо закінчення -st
⚠️ Для **Sie**: дієслово + Sie (як питання, але без знака питання)`
            },
            {
                title: "Важливо!",
                type: "tip",
                content: `**Неправильні дієслова в Imperativ (du):**

• sein → **Sei** ruhig! (Будь тихо!)
• haben → **Hab** Geduld! (Май терпіння!)
• fahren → **Fahr** langsam! (Їдь повільно!)
• lesen → **Lies** das Buch! (Читай книгу!)
• sehen → **Sieh** mal! (Дивись!)

**Ввічливі прохання:**
• Kommen Sie bitte!
• Warten Sie bitte!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Komm mit!", translation: "Йди зі мною!" },
                    { german: "Seien Sie leise!", translation: "Будьте тихо!" },
                    { german: "Fahr langsam!", translation: "Їдь повільно!" },
                    { german: "Hört zu!", translation: "Слухайте!" },
                    { german: "Warten Sie bitte!", translation: "Зачекайте, будь ласка!" }
                ]
            }
        ]
    },

    // --- POSSESSIVARTIKEL ---
    "possessivartikel": {
        title: "Possessivartikel (Присвійні артиклі)",
        sections: [
            {
                title: "Правило (Lektion 10)",
                type: "rule",
                content: `**Присвійні артиклі вказують на належність:**

| Особа | Присвійний артикль |
|-------|-------------------|
| ich → | **mein** (мій) |
| du → | **dein** (твій) |
| er → | **sein** (його) |
| sie → | **ihr** (її) |
| es → | **sein** (його) |
| wir → | **unser** (наш) |
| ihr → | **euer** (ваш) |
| sie/Sie → | **ihr/Ihr** (їхній/Ваш) |

⚠️ Закінчення залежить від роду іменника!`
            },
            {
                title: "Закінчення",
                type: "tip",
                content: `**Nominativ:**
| | Singular m. | Singular f. | Singular n. | Plural |
|---|-------------|-------------|-------------|--------|
| ich | mein Termin | meine Mutter | mein Lied | meine Ohren |
| du | dein | deine | dein | deine |
| er | sein | seine | sein | seine |
| sie | ihr | ihre | ihr | ihre |
| wir | unser | unsere | unser | unsere |
| ihr | euer | eure | euer | eure |
| sie/Sie | ihr/Ihr | ihre/Ihre | ihr/Ihr | ihre/Ihre |

⚠️ **Akkusativ (m.):** mein → mein**en**`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Das ist mein Bruder.", translation: "Це мій брат." },
                    { german: "Wo ist deine Mutter?", translation: "Де твоя мама?" },
                    { german: "Er liebt seine Familie.", translation: "Він любить свою сім'ю." },
                    { german: "Sie ruft ihren Mann an.", translation: "Вона дзвонить своєму чоловікові." },
                    { german: "Unser Haus ist groß.", translation: "Наш дім великий." }
                ]
            }
        ]
    },

    // --- PERSONALPRONOMEN (всі відмінки) ---
    "personalpronomen-dativ": {
        title: "Personalpronomen: Akkusativ & Dativ (Lektion 13-14)",
        sections: [
            {
                title: "Таблиця відмінків",
                type: "rule",
                content: `**Особові займенники у всіх відмінках:**

| Nominativ | Akkusativ | Dativ |
|-----------|-----------|-------|
| ich | **mich** | **mir** |
| du | **dich** | **dir** |
| er | **ihn** | **ihm** |
| sie | **sie** | **ihr** |
| es | **es** | **ihm** |
| wir | **uns** | **uns** |
| ihr | **euch** | **euch** |
| sie/Sie | **sie/Sie** | **ihnen/Ihnen** |`
            },
            {
                title: "Коли використовувати?",
                type: "tip",
                content: `**Akkusativ** (Wen? Кого?):
→ Er liebt **mich**. (Він любить мене)
→ Ich sehe **dich**. (Я бачу тебе)
→ Finde ich **super**! (Знаходжу це супер!)

**Dativ** (Wem? Кому?):
→ Gib **mir** das Buch. (Дай мені книгу)
→ Ich helfe **dir**. (Я допомагаю тобі)
→ Das gefällt **ihm**. (Це йому подобається)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Rufst du mich an?", translation: "Ти мені подзвониш?" },
                    { german: "Ich liebe dich.", translation: "Я тебе люблю." },
                    { german: "Kannst du mir helfen?", translation: "Ти можеш мені допомогти?" },
                    { german: "Das Hemd gefällt mir.", translation: "Ця сорочка мені подобається." },
                    { german: "Ich gebe dir das Geld.", translation: "Я дам тобі гроші." }
                ]
            }
        ]
    },

    // --- DEMONSTRATIVPRONOMEN ---
    "demonstrativpronomen": {
        title: "Demonstrativpronomen: der, das, die (Lektion 13)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Вказівні займенники** вказують на конкретний предмет.

| Nomen | Nominativ | Akkusativ |
|---|-----------|-----------|
| der Gürtel | **Der** ist schön. | **Den** finde ich super. |
| das Hemd | **Das** ist schön. | **Das** finde ich super. |
| die Jacke | **Die** ist schön. | **Die** finde ich super. |
| die Schuhe (Pl.) | **Die** sind schön. | **Die** finde ich super. |`
            },
            {
                title: "Frageartikel: welcher? dieser (Lektion 13)",
                type: "tip",
                content: `**Welcher?** = Який? (питання)
**Dieser** = Цей (відповідь)

| Nomen | Nominativ | Akkusativ |
|---|-----------|-----------|
| m. | Welch**er** Mantel? | Welch**en** Mantel? |
| | Dies**er**. | Dies**en**. |
| f. | Welch**e** Jacke? | Welch**e** Jacke? |
| | Dies**e**. | Dies**e**. |
| n. | Welch**es** Hemd? | Welch**es** Hemd? |
| | Dies**es**. | Dies**es**. |
| Pl. | Welch**e** Schuhe? | Welch**e** Schuhe? |
| | Dies**e**. | Dies**e**. |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Welchen Mantel nimmst du?", translation: "Яке пальто ти береш?" },
                    { german: "Diesen hier.", translation: "Оце." },
                    { german: "Die Jacke ist toll!", translation: "Ця куртка чудова!" },
                    { german: "Das Hemd gefällt mir.", translation: "Ця сорочка мені подобається." }
                ]
            }
        ]
    },

    // --- LOKALE PRÄPOSITIONEN MIT DATIV ---
    "lokale-praepositionen-dativ": {
        title: "Lokale Präpositionen mit Dativ (Lektion 11)",
        sections: [
            {
                title: "Wo? + Dativ",
                type: "rule",
                content: `**Wo?** (Де?) → Dativ

| Прийменник | Значення | Приклад |
|------------|----------|---------|
| **in** + dem = **im** | в | im Hotel, im Kino |
| **an** + dem = **am** | біля, на | am Kiosk, am Strand |
| **auf** + dem | на | auf dem Tisch |
| **bei** + dem = **beim** | у (людини/фірми) | beim Arzt, bei der Freundin |
| **neben** | поруч | neben dem Park |
| **vor** | перед | vor dem Haus |
| **hinter** | за | hinter dem Auto |
| **unter** | під | unter dem Bett |
| **über** | над | über dem Tisch |
| **zwischen** | між | zwischen den Häusern |`
            },
            {
                title: "Wohin? + Akkusativ",
                type: "tip",
                content: `**Wohin?** (Куди?) → Akkusativ

| Тип | Приклад |
|-----|---------|
| Person | **zu** + Dativ: zum Zahnarzt, zur Freundin |
| Geschäft | **zu** + Dativ / **in** + Akk: zum Supermarkt, in die Apotheke |
| Haus/Ort | **in** + Akk: in den Kindergarten, ins Kino |
| Land/Stadt | **nach**: nach Österreich, nach Basel |
| Land з артиклем | **in** + Akk: in die Schweiz, in die USA |
| Додому | **nach Hause** |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Wo ist Sofia? — Beim Arzt.", translation: "Де Софія? — У лікаря." },
                    { german: "Ich bin im Kindergarten.", translation: "Я в дитячому садку." },
                    { german: "Wohin fährst du? — Nach Wien.", translation: "Куди ти їдеш? — До Відня." },
                    { german: "Er geht in die Apotheke.", translation: "Він йде в аптеку." },
                    { german: "Sie wohnt in der Schweiz.", translation: "Вона живе у Швейцарії." }
                ]
            }
        ]
    },

    // --- ORDINALZAHLEN ---
    "ordnungszahlen": {
        title: "Ordinalzahlen (Порядкові числівники) Lektion 14",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**1-19**: число + **-te**
**від 20**: число + **-ste**

| Число | Порядковий |
|-------|------------|
| 1. | der **erste** |
| 2. | der **zweite** |
| 3. | der **dritte** |
| 4. | der vierte |
| 5. | der fünfte |
| 6. | der sechste |
| 7. | der siebte |
| 20. | der zwanzigste |
| 21. | der einundzwanzigste |`
            },
            {
                title: "Дата",
                type: "tip",
                content: `**Wann?** (Коли?) → am + порядковий + -en

→ Am zweiten Mai. (2 травня)
→ Vom zweiten bis (zum) zwanzigsten Mai. (з 2 по 20 травня)

**Сьогоднішня дата:**
→ Heute ist der erste Januar. (Сьогодні перше січня)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Heute ist der fünfte März.", translation: "Сьогодні п'яте березня." },
                    { german: "Ich komme am dritten April.", translation: "Я приїду третього квітня." },
                    { german: "Mein Geburtstag ist am siebten.", translation: "Мій день народження сьомого." }
                ]
            }
        ]
    },

    // --- PRÄTERITUM: sein & haben ---
    "praeteritum-sein-haben": {
        title: "Präteritum: sein und haben (Lektion 8)",
        sections: [
            {
                title: "Кон'югація",
                type: "rule",
                content: `**sein** і **haben** у минулому часі (Präteritum):

| Person | sein | haben |
|--------|------|-------|
| ich | **war** | **hatte** |
| du | **warst** | **hattest** |
| er/sie/es | **war** | **hatte** |
| wir | **waren** | **hatten** |
| ihr | **wart** | **hattet** |
| sie/Sie | **waren** | **hatten** |`
            },
            {
                title: "Використання",
                type: "tip",
                content: `**Präteritum** використовується в письмовій мові та для sein/haben.

У розмові зазвичай використовують **Perfekt**:
→ Ich **bin** müde **gewesen**. (розмовне)
→ Ich **war** müde. (Präteritum - коротше!)

**haben** → теж краще Präteritum:
→ Ich **hatte** Hunger. (я був голодний)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich war gestern krank.", translation: "Я був вчора хворий." },
                    { german: "Wir hatten viel Spaß.", translation: "Нам було дуже весело." },
                    { german: "Wo warst du?", translation: "Де ти був?" },
                    { german: "Sie hatte keine Zeit.", translation: "Вона не мала часу." }
                ]
            }
        ]
    },

    // --- KONJUNKTION: denn ---
    "konjunktion-denn": {
        title: "Konjunktion: denn (Lektion 14)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**denn** = бо, тому що

Позиція: між двома реченнями
Порядок слів: як у звичайному реченні (не змінюється!)

Структура:
**Головне речення + denn + пояснення**`
            },
            {
                title: "Порівняння з weil",
                type: "tip",
                content: `**denn** vs **weil**:

| | denn | weil |
|---|------|------|
| Позиція дієслова | нормальна | в кінці |
| Приклад | Ich bleibe, **denn** ich **bin** müde. | Ich bleibe, **weil** ich müde **bin**. |

⚠️ **denn** легше використовувати — порядок слів не змінюється!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Sie feiern Abschied, denn Lara und Tim fahren nach Hause.", translation: "Вони влаштовують прощання, бо Лара і Тім їдуть додому." },
                    { german: "Ich lerne Deutsch, denn ich arbeite in Wien.", translation: "Я вчу німецьку, бо працюю у Відні." },
                    { german: "Er bleibt zu Hause, denn er ist krank.", translation: "Він залишається вдома, бо він хворий." }
                ]
            }
        ]
    },

    // --- NEGATION (nicht/kein) ---
    "negation": {
        title: "Negation: nicht та kein",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**nicht** та **kein** — два способи заперечення:

| Що заперечуємо | Використовуємо |
|----------------|----------------|
| Дієслово, прикметник | **nicht** |
| Іменник з артиклем | **kein/keine** |

**nicht** стоїть в кінці речення або перед тим, що заперечуємо
**kein** замінює невизначений артикль (ein → kein)`
            },
            {
                title: "Як обрати?",
                type: "tip",
                content: `🔹 **nicht** = НЕ (для дієслів)
→ Ich schlafe **nicht**. = Я не сплю.
→ Das ist **nicht** gut. = Це не добре.

🔹 **kein** = НІЯКИЙ/НІЯКА (замість ein/eine)
→ Ich habe **kein** Auto. = Я не маю машини.
→ Das ist **keine** Katze. = Це не кішка.

⚠️ Форми **kein**: kein (m/n), keine (f/pl)
⚠️ **kein** відмінюється як ein!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich spreche nicht Deutsch.", translation: "Я не говорю німецькою." },
                    { german: "Er kommt heute nicht.", translation: "Він сьогодні не прийде." },
                    { german: "Ich habe keine Zeit.", translation: "Я не маю часу." },
                    { german: "Das ist kein Problem.", translation: "Це не проблема." },
                    { german: "Sie haben keine Kinder.", translation: "Вони не мають дітей." }
                ]
            }
        ]
    },

    // --- ARTIKEL ---
    "artikel": {
        title: "Bestimmter und Unbestimmter Artikel",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Визначений артикль** (the) — вказує на конкретний об'єкт:
| Masculinum | Femininum | Neutrum | Plural |
|------------|-----------|---------|--------|
| **der** | **die** | **das** | **die** |

**Невизначений артикль** (a/an) — вказує на будь-який об'єкт:
| Masculinum | Femininum | Neutrum |
|------------|-----------|---------|
| **ein** | **eine** | **ein** |

⚠️ У множині невизначеного артикля НЕМАЄ!`
            },
            {
                title: "Як запам'ятати рід?",
                type: "tip",
                content: `🔵 **der** (чоловічий):
- дні тижня: der Montag
- місяці: der Januar
- пори року: der Sommer

🔴 **die** (жіночий):
- -ung, -heit, -keit: die Zeitung
- -tion: die Information
- -e (часто): die Lampe

🟢 **das** (середній):
- -chen, -lein: das Mädchen
- -um: das Museum
- Ge-: das Gespräch`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Der Tisch ist groß.", translation: "Стіл великий. (конкретний)" },
                    { german: "Ich brauche einen Tisch.", translation: "Мені потрібен стіл. (будь-який)" },
                    { german: "Die Frau ist Lehrerin.", translation: "Жінка — вчителька." },
                    { german: "Ich sehe eine Katze.", translation: "Я бачу кота/кішку." },
                    { german: "Das Kind spielt.", translation: "Дитина грає." }
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
                content: `**Відокремлювані дієслова** мають префікс, який відділяється в реченні:

Структура: **Дієслово (корінь)** + ... + **Префікс** (в кінці)

| Інфінітив | У реченні |
|-----------|-----------|
| **auf**stehen | Ich **stehe** um 7 Uhr **auf**. |
| **ein**kaufen | Er **kauft** im Supermarkt **ein**. |
| **an**fangen | Der Kurs **fängt** um 9 **an**. |

Популярні відокремлювані префікси:
**ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-**`
            },
            {
                title: "Лайфхак",
                type: "tip",
                content: `🎯 Як розпізнати відокремлюваний префікс?
→ Префікс НАГОЛОШЕНИЙ = відокремлюється
→ **AUF**stehen, **EIN**kaufen, **MIT**kommen

⚠️ В Infinitiv залишаються разом:
→ Ich muss früh **aufstehen**.
→ Er kann heute **mitkommen**.

⚠️ Питальний порядок слів:
→ **Stehst** du früh **auf**?
→ **Kaufst** du heute **ein**?`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich stehe um 6 Uhr auf.", translation: "Я встаю о 6 годині." },
                    { german: "Sie kauft im Supermarkt ein.", translation: "Вона робить покупки в супермаркеті." },
                    { german: "Der Film fängt um 20 Uhr an.", translation: "Фільм починається о 20:00." },
                    { german: "Kommst du mit?", translation: "Ти підеш з нами?" },
                    { german: "Er macht das Fenster auf.", translation: "Він відкриває вікно." }
                ]
            }
        ]
    },

    // --- MODALVERBEN: können & wollen ---
    "modalverben-koennen-wollen": {
        title: "Modalverben: können & wollen",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**können** = могти (здатність)
**wollen** = хотіти

| Person | können | wollen |
|--------|--------|--------|
| ich | **kann** | **will** |
| du | kannst | willst |
| er/sie/es | **kann** | **will** |
| wir | können | wollen |
| ihr | könnt | wollt |
| sie/Sie | können | wollen |

Структура: **Modalverb** + ... + **Infinitiv** (в кінці)`
            },
            {
                title: "Важливо!",
                type: "tip",
                content: `⚠️ Модальне дієслово — на 2 позиції
⚠️ Основне дієслово — в кінці (Infinitiv)

✅ Ich **kann** gut Deutsch **sprechen**.
✅ Er **will** morgen **arbeiten**.

🔹 **können** = мати здатність/дозвіл
→ Kannst du schwimmen? = Ти вмієш плавати?

🔹 **wollen** = мати бажання
→ Ich will nach Hause gehen. = Я хочу піти додому.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich kann Klavier spielen.", translation: "Я вмію грати на піаніно." },
                    { german: "Kannst du mir helfen?", translation: "Ти можеш мені допомогти?" },
                    { german: "Sie will Ärztin werden.", translation: "Вона хоче стати лікаркою." },
                    { german: "Wir wollen ins Kino gehen.", translation: "Ми хочемо піти в кіно." },
                    { german: "Hier kann man nicht rauchen.", translation: "Тут не можна курити." }
                ]
            }
        ]
    },

    // --- PLURAL DER NOMEN ---
    "plural": {
        title: "Plural der Nomen (Множина іменників)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Утворення множини в німецькій:

| Закінчення | Приклад | Множина |
|------------|---------|---------|
| **-e** | der Tisch | die Tisch**e** |
| **-en** | die Lampe | die Lamp**en** |
| **-er** | das Kind | die Kind**er** |
| **-s** | das Auto | die Auto**s** |
| **Umlaut + e** | der Stuhl | die St**ü**hl**e** |
| **без зміни** | der Lehrer | die Lehrer |

⚠️ У множині артикль завжди **die**!`
            },
            {
                title: "Як запам'ятати?",
                type: "tip",
                content: `🔹 **-en** — найчастіше для die-слів
→ die Zeitung → die Zeitung**en**
→ die Frau → die Frau**en**

🔹 **-er + Umlaut** — для das-слів
→ das Buch → die B**ü**ch**er**
→ das Haus → die H**ä**us**er**

🔹 **-s** — для іноземних слів
→ das Hobby → die Hobby**s**
→ das Taxi → die Taxi**s**

💡 Вчи множину ОДРАЗУ зі словом!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "der Tisch → die Tische", translation: "стіл → столи" },
                    { german: "die Lampe → die Lampen", translation: "лампа → лампи" },
                    { german: "das Kind → die Kinder", translation: "дитина → діти" },
                    { german: "der Mann → die Männer", translation: "чоловік → чоловіки" },
                    { german: "das Auto → die Autos", translation: "авто → авто (мн.)" }
                ]
            }
        ]
    },

    // --- ES GIBT + AKKUSATIV ---
    "es-gibt": {
        title: "es gibt + Akkusativ",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**es gibt** = є, існує (безособове)

Завжди з **Akkusativ**!

| es gibt + Akkusativ |
|---------------------|
| Es gibt **einen** Tisch. |
| Es gibt **eine** Lampe. |
| Es gibt **ein** Bett. |
| Es gibt **keine** Stühle. |

⚠️ **gibt** ніколи не змінюється!`
            },
            {
                title: "Коли використовувати?",
                type: "tip",
                content: `🏠 **Опис приміщення:**
→ Im Zimmer gibt es einen Schrank.
→ In der Küche gibt es einen Kühlschrank.

🏙️ **Опис місця:**
→ In der Stadt gibt es viele Parks.
→ Hier gibt es ein gutes Restaurant.

❓ **Питання:**
→ Was gibt es heute zum Essen?
→ Gibt es hier einen Supermarkt?`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Es gibt einen Tisch.", translation: "Є стіл." },
                    { german: "Im Wohnzimmer gibt es ein Sofa.", translation: "У вітальні є диван." },
                    { german: "Gibt es hier ein WLAN?", translation: "Тут є Wi-Fi?" },
                    { german: "Es gibt keine Probleme.", translation: "Немає проблем." },
                    { german: "Was gibt es Neues?", translation: "Що нового?" }
                ]
            }
        ]
    },

    // --- LOKALE PRÄPOSITIONEN ---
    "lokale-praepositionen": {
        title: "Lokale Präpositionen (Місцеві прийменники)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Місцеві прийменники відповідають на **Wo?** (де?)

| Прийменник | Значення | Приклад |
|------------|----------|---------|
| **in** | в, у | in der Küche |
| **auf** | на (горизонт.) | auf dem Tisch |
| **an** | біля, на (верт.) | an der Wand |
| **unter** | під | unter dem Bett |
| **über** | над | über dem Schrank |
| **neben** | поруч | neben dem Fenster |
| **vor** | перед | vor der Tür |
| **hinter** | за | hinter dem Haus |
| **zwischen** | між | zwischen den Stühlen |

⚠️ Wo? → завжди **Dativ**!`
            },
            {
                title: "Скорочення",
                type: "tip",
                content: `🔹 **in + dem = im**
→ im Zimmer, im Haus

🔹 **an + dem = am**
→ am Fenster, am Tisch

🔹 **auf + dem** (не скорочується)
→ auf dem Boden

💡 Лайфхак:
**auf** = на чомусь горизонтальному (стіл, підлога)
**an** = на чомусь вертикальному (стіна, двері)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Das Buch liegt auf dem Tisch.", translation: "Книга лежить на столі." },
                    { german: "Das Bild hängt an der Wand.", translation: "Картина висить на стіні." },
                    { german: "Die Katze ist unter dem Bett.", translation: "Кіт під ліжком." },
                    { german: "Die Lampe hängt über dem Tisch.", translation: "Лампа висить над столом." },
                    { german: "Der Stuhl steht neben dem Schrank.", translation: "Стілець стоїть біля шафи." }
                ]
            }
        ]
    },

    // --- SEIN KONJUGATION ---
    "sein-konjugation": {
        title: "Konjugation: sein (Бути)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `| Person | sein |
|--------|------|
| ich | **bin** |
| du | **bist** |
| er/sie/es | **ist** |
| wir | **sind** |
| ihr | **seid** |
| sie/Sie | **sind** |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich bin Tom.", translation: "Я Том." },
                    { german: "Das ist Anna.", translation: "Це Анна." },
                    { german: "Wir sind zu Hause.", translation: "Ми вдома." }
                ]
            }
        ]
    },

    // --- W-FRAGEN ---
    "w-fragen": {
        title: "W-Fragen (Питальні слова)",
        sections: [
            {
                title: "Список",
                type: "rule",
                content: `**Wer?** — Хто? (Person)
**Was?** — Що? (Sache)
**Wo?** — Де? (Ort)
**Wohin?** — Куди? (Richtung)
**Woher?** — Звідки? (Herkunft)
**Wie?** — Як? (Eigenschaft)
**Wann?** — Коли? (Zeit)
**Warum?** — Чому? (Grund)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Wer ist das?", translation: "Хто це?" },
                    { german: "Was machst du?", translation: "Що ти робиш?" },
                    { german: "Wo wohnst du?", translation: "Де ти живеш?" },
                    { german: "Woher kommst du?", translation: "Звідки ти (родом)?" },
                    { german: "Wie heißt du?", translation: "Як тебе звати?" }
                ]
            }
        ]
    },

    // --- ZEITANGABEN ---
    "zeitangaben": {
        title: "Zeitangaben (Позначення часу)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**am** + дні/частини дня:
→ am Montag, am Morgen
(АЛЕ: in der Nacht)

**um** + година:
→ um 8 Uhr

**im** + місяці/пори року:
→ im Januar, im Sommer`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Der Kurs ist am Montag.", translation: "Курс у понеділок." },
                    { german: "Wir kommen um 9 Uhr.", translation: "Ми прийдемо о 9." },
                    { german: "Im Winter ist es kalt.", translation: "Взимку холодно." }
                ]
            }
        ]
    },

    // --- UHRZEIT ---
    "uhrzeit": {
        title: "Uhrzeit (Котра година?)",
        sections: [
            {
                title: "Офіційно vs Неофіційно",
                type: "rule",
                content: `**Офіційно (24h):**
14:15 → Es ist vierzehn Uhr fünfzehn.
14:30 → Es ist vierzehn Uhr dreißig.

**Неофіційно (12h):**
14:15 → Es ist Viertel nach zwei.
14:30 → Es ist halb drei.
14:45 → Es ist Viertel vor drei.`
            },
            {
                title: "Слова",
                type: "tip",
                content: `**nach** = після (хвилин)
**vor** = до
**halb** = пів (на наступну годину!)
**Viertel** = чверть`
            }
        ]
    },

    // --- GERN / LIEBER / AM LIEBSTEN ---
    "gern-lieber-am-liebsten": {
        title: "Komparation: gern (Порівняння)",
        sections: [
            {
                title: "Ступені",
                type: "rule",
                content: `| Ступінь | Форма | Значення |
|---------|-------|----------|
| 1 | **gern** | охоче (люблю) |
| 2 | **lieber** | охочіше (більше люблю) |
| 3 | **am liebsten** | найохочіше (найбільше люблю) |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich trinke gern Tee.", translation: "Я люблю пити чай." },
                    { german: "Ich trinke lieber Kaffee.", translation: "Я більше люблю каву." },
                    { german: "Am liebsten trinke ich Wasser.", translation: "Найбільше я люблю воду." }
                ]
            }
        ]
    },

    // --- PERFEKT (REGELMÄSSIG) ---
    "perfekt-regelmaessig": {
        title: "Perfekt: Regelmäßige Verben",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Formel: **haben/sein** + **Partizip II**

**Partizip II** (слабкі дієслова):
**ge** + Stamm + **t**

kaufen → **ge**kauf**t**
machen → **ge**mach**t**
sagen → **ge**sag**t**`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich habe Saft gekauft.", translation: "Я купив сік." },
                    { german: "Er hat 'Hallo' gesagt.", translation: "Він сказав 'Привіт'." },
                    { german: "Wir haben Fußball gespielt.", translation: "Ми грали у футбол." }
                ]
            }
        ]
    },

    // --- PERFEKT (UNREGELMÄSSIG) ---
    "perfekt-unregelmaessig": {
        title: "Perfekt: Unregelmäßige Verben",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Сильні дієслова (закінчення **-en** + часто зміна голосної):

essen → ge**gessen**
trinken → ge**trunken**
schreiben → ge**schrieben**
sehen → ge**sehen**
gehen → ge**gangen**`
            },
            {
                title: "sein чи haben?",
                type: "tip",
                content: `**sein** (рух/зміна стану):
gehen, fahren, fliegen, kommen, aufstehen

**haben** (решта):
essen, trinken, schlafen, arbeiten`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich bin nach Hause gegangen.", translation: "Я пішов додому." },
                    { german: "Er hat eine Pizza gegessen.", translation: "Він з'їв піцу." }
                ]
            }
        ]
    },

    // --- DATUM ---
    "datum": {
        title: "Datum (Дата)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Питання **Wann?** (Коли?)

**am** + порядковий номер + **-ten**:
→ am ers**ten** Mai (01.05)
→ am zwei**ten** Januar (02.01)

Питання **Der Wievielte ist heute?**
**der** + порядковий номер + **-te**:
→ Heute ist der ers**te** Mai.
→ Heute ist der zwei**te** Januar.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich habe am dritten März Geburtstag.", translation: "У мене день народження 3 березня." },
                    { german: "Heute ist der zehnte Juni.", translation: "Сьогодні 10 червня." }
                ]
            }
        ]
    },

    // --- MODALVERB: SOLLEN ---
    "modalverb-sollen": {
        title: "Modalverb: sollen (Повинен/Варто)",
        sections: [
            {
                title: "Кон'югація",
                type: "rule",
                content: `| Person | sollen |
|--------|--------|
| ich | **soll** |
| du | **sollst** |
| er/sie/es | **soll** |
| wir | **sollen** |
| ihr | **sollt** |
| sie/Sie | **sollen** |`
            },
            {
                title: "Вживання",
                type: "tip",
                content: `Використовується для **порад** або **доручень**:
→ Du sollst viel Wasser trinken. (Тобі варто пити багато води)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Der Arzt sagt, ich soll schlafen.", translation: "Ліка каже, я маю я спати." },
                    { german: "Soll ich helfen?", translation: "Мені допомогти? (Чи маю я допомогти?)" }
                ]
            }
        ]
    },

    // --- KÖRPERTEILE ---
    "koerperteile": {
        title: "Körperteile (Частини тіла)",
        sections: [
            {
                title: "Словник",
                type: "rule",
                content: `**der** Kopf (голова), **der** Hals (шия), **der** Rücken (спина), **der** Bauch (живіт), **der** Arm (рука), **der** Fuß (нога/ступня), **der** Finger (палець)

**die** Hand (рука/кисть), **die** Nase (ніс)

**das** Bein (нога), **das** Auge (око), **das** Ohr (вухо), **das** Haar (волосся)`
            },
            {
                title: "Вираз болю",
                type: "tip",
                content: `**tun** + **weh** (боліть)

Однина:
→ Mein Kopf **tut weh**.

Множина:
→ Meine Augen **tun weh**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Mein Hals tut weh.", translation: "У мене болить горло." },
                    { german: "Hast du Fieber?", translation: "У тебе є температура?" },
                    { german: "Ich bin krank.", translation: "Я хворий." }
                ]
            }
        ]
    },

    // --- KONJUNKTION: WENN ---
    "konjunktion-wenn": {
        title: "Konjunktion: wenn (Якщо/Коли)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**wenn** = якщо (умова) або коли (багаторазова дія).

Дієслово йде в **КІНЕЦЬ** підрядного речення!

[Hauptsatz], **wenn** ... [Verb am Ende].
або
**Wenn** ... [Verb am Ende], [Verb] [Subjekt] ...`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich bleibe zu Hause, wenn ich krank bin.", translation: "Я залишаюсь вдома, якщо я хворий." },
                    { german: "Wenn ich Zeit habe, komme ich.", translation: "Якщо я матиму час, я прийду." },
                    { german: "Ich freue mich, wenn du kommst.", translation: "Я радію, коли ти приходиш." }
                ]
            }
        ]
    },

    // --- ADJEKTIVE (PRÄDIKATIV) ---
    "adjektive-praedikativ": {
        title: "Adjektive: prädikativ (Прикметники)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `Якщо прикметник стоїть ПІСЛЯ дієслова (sein, werden, bleiben), він **не змінюється**!

→ Das Auto ist **schnell**.
→ Die Autos sind **schnell**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Das Kleid ist schön.", translation: "Сукня гарна." },
                    { german: "Der Mann ist alt.", translation: "Чоловік старий." }
                ]
            }
        ]
    },

    // --- FARBEN ---
    "farben": {
        title: "Farben (Кольори)",
        sections: [
            {
                title: "Список",
                type: "rule",
                content: `rot (червоний)
blau (синій)
grün (зелений)
gelb (жовтий)
schwarz (чорний)
weiß (білий)
braun (коричневий)
grau (сірий)
orange (помаранчевий)
lila (фіолетовий)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Der Himmel ist blau.", translation: "Небо блакитне." },
                    { german: "Schnee ist weiß.", translation: "Сніг білий." }
                ]
            }
        ]
    },

    // --- KONJUNKTION: DASS ---
    "konjunktion-dass": {
        title: "Konjunktion: dass (що)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**dass** = що (підрядне речення).

Дієслово йде в **КІНЕЦЬ**!

Ich weiß, **dass** du heute **kommst**.`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Er sagt, dass er krank ist.", translation: "Він каже, що він хворий." },
                    { german: "Ich hoffe, dass alles gut ist.", translation: "Я сподіваюсь, що все добре." }
                ]
            }
        ]
    },

    // --- EINLADUNG & GRATULATION ---
    "einladung-gratulation": {
        title: "Einladung & Gratulation (Запрошення і вітання)",
        sections: [
            {
                title: "Фрази",
                type: "rule",
                content: `**Einladung (Запрошення):**
• Ich lade dich ein! (Я тебе запрошую)
• Kommst du zu meiner Party? (Ти прийдеш на вечірку?)

**Gratulation (Вітання):**
• Herzlichen Glückwunsch! (Вітаю!)
• Alles Gute zum Geburtstag! (З Днем народження!)
• Frohe Weihnachten! (Веселого Різдва!)`
            }
        ]
    },

    // ==========================================
    // LEKTION 14: Feste
    // ==========================================

    "ordnungszahlen-14": {
        title: "Ordinalzahlen (Порядкові числівники)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**Дати та порядок:**
1.  **1-19** → число + **-te**
    *   der erste (1.)
    *   der zweite (2.)
    *   der dritte (3.)
    *   der vierte (4.)
    *   der neunzehnte (19.)

2.  **від 20** → число + **-ste**
    *   der zwanzigste (20.)
    *   der einundzwanzigste (21.)
    *   der dreißigste (30.)

⚠️ **Datumsangaben:**
*   "Am" (an dem) + Dativ (-n):
    *   Am erste**n** Mai
    *   Am zwanzigste**n** Juli`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Heute ist der erste Mai.", translation: "Сьогодні перше травня." },
                    { german: "Ich habe am dritten April Geburtstag.", translation: "У мене день народження третього квітня." }
                ]
            }
        ]
    },

    "personalpronomen-akkusativ": {
        title: "Personalpronomen im Akkusativ",
        sections: [
            {
                title: "Таблиця",
                type: "rule",
                content: `**Зміна особових займенників:**

| Nominativ | Akkusativ |
|:---|:---|
| **ich** (я) | **mich** (мене) |
| **du** (ти) | **dich** (тебе) |
| **er** (він) | **ihn** (його) |
| **sie** (вона) | **sie** (її) |
| **es** (воно) | **es** (його) |
| **wir** (ми) | **uns** (нас) |
| **ihr** (ви) | **euch** (вас) |
| **sie** (вони) | **sie** (їх) |
| **Sie** (Ви) | **Sie** (Вас) |`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich liebe dich.", translation: "Я тебе люблю." },
                    { german: "Er sieht uns.", translation: "Він нас бачить." },
                    { german: "Wir laden euch ein.", translation: "Ми вас запрошуємо." },
                    { german: "Rufst du mich an?", translation: "Ти мені подзвониш? (досл. мене)" }
                ]
            }
        ]
    },

    "konjunktion-denn": {
        title: "Konjunktion 'denn' (тому що)",
        sections: [
            {
                title: "Правило",
                type: "rule",
                content: `**denn** = тому що / бо
✅ **denn** займає **Позицію 0**.
Це означає, що порядок слів після нього **не змінюється** (Sujekt + Verb ...)!

**Структура:**
Hauptsatz, **denn** Hauptsatz.
(Кома перед denn обов'язкова!)`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich bleibe zu Hause, denn ich bin krank.", translation: "Я залишаюсь вдома, бо я хворий." },
                    { german: "Wir kaufen Brot, denn wir haben Hunger.", translation: "Ми купуємо хліб, бо ми голодні." },
                    { german: "Er kommt nicht, denn er hat keine Zeit.", translation: "Він не прийде, бо він не має часу." }
                ]
            }
        ]
    },

    "werden-konjugation": {
        title: "Verb 'werden' (ставати)",
        sections: [
            {
                title: "Konjugation",
                type: "rule",
                content: `**werden** - ставати (або для майбутнього часу)

| Person | werden |
|:---|:---|
| ich | **werde** |
| du | **wirst** |
| er/sie/es | **wird** |
| wir | **werden** |
| ihr | **werdet** |
| sie/Sie | **werden** |

⚠️ Зверни увагу на **du wirst** та **er wird**!`
            },
            {
                title: "Приклади",
                type: "examples",
                items: [
                    { german: "Ich werde 30 Jahre alt.", translation: "Мені виповнюється 30 років." },
                    { german: "Du wirst Arzt.", translation: "Ти станеш лікарем." },
                    { german: "Das Wetter wird gut.", translation: "Погода стає гарною." }
                ]
            }
        ]
    }
};

export function getGrammarForLesson(lessonId) {
    return grammarTopics.filter(g => g.lesson === lessonId);
}

export function getGrammarContent(topicId) {
    if (!topicId) return null;

    // Normalize ID: remove whitespace, convert to string
    const id = String(topicId).trim();

    let content = grammarContent[id];

    // Fallback logic for legacy/mismatched IDs
    if (!content && id === 'personalpronomen-dativ') {
        content = grammarContent['personalpronomen-akkusativ-dativ'];
    }
    if (!content && id === 'personalpronomen-akkusativ-dativ') {
        content = grammarContent['personalpronomen-dativ'];
    }

    return content || null;
}

export default grammarTopics;
