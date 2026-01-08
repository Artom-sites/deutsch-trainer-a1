/**
 * Topics Database
 * Defines the main navigation structure for the Topic-First architecture.
 * Mixes Lexical topics (from Lessons) and Grammar topics.
 */

export const topics = [
    // --- Lexical Topics (Based on Lessons) ---
    {
        id: "begruessung",
        title: "Begrüßung & Kennenlernen",
        subtitle: "Привітання та знайомство",
        type: "lexical",
        lesson: 1,
        color: "from-blue-500 to-cyan-500",
        icon: "Handshake"
    },
    {
        id: "familie",
        title: "Familie & Freunde",
        subtitle: "Сім'я та друзі",
        type: "lexical",
        lesson: 2,
        color: "from-purple-500 to-pink-500",
        icon: "Users"
    },
    {
        id: "essen",
        title: "Essen & Trinken",
        subtitle: "Їжа та напої",
        type: "lexical",
        lesson: 3,
        color: "from-orange-500 to-red-500",
        icon: "Utensils"
    },
    {
        id: "wohnen",
        title: "Meine Wohnung",
        subtitle: "Житло та меблі",
        type: "lexical",
        lesson: 4,
        color: "from-green-500 to-emerald-500",
        icon: "Home"
    },
    {
        id: "tagesablauf",
        title: "Mein Tag",
        subtitle: "Розпорядок дня",
        type: "lexical",
        lesson: 5,
        color: "from-yellow-500 to-orange-500",
        icon: "Clock"
    },
    {
        id: "freizeit",
        title: "Freizeit & Hobbys",
        subtitle: "Вільний час",
        type: "lexical",
        lesson: 6,
        color: "from-indigo-500 to-blue-500",
        icon: "Music"
    },
    {
        id: "kinder-schule",
        title: "Kinder & Schule",
        subtitle: "Діти та освіта",
        type: "lexical",
        lesson: 7,
        color: "from-pink-500 to-rose-500",
        icon: "Baby"
    },
    {
        id: "beruf",
        title: "Beruf & Arbeit",
        subtitle: "Робота та кар'єра",
        type: "lexical",
        lesson: 8,
        color: "from-slate-500 to-gray-500",
        icon: "Briefcase"
    },
    {
        id: "aemter",
        title: "Ämter & Behörden",
        subtitle: "Установи та документи",
        type: "lexical",
        lesson: 9,
        color: "from-stone-500 to-neutral-500",
        icon: "Building"
    },
    {
        id: "gesundheit",
        title: "Gesundheit",
        subtitle: "Лікар та тіло",
        type: "lexical",
        lesson: 10,
        color: "from-red-500 to-rose-600",
        icon: "Heart"
    },
    {
        id: "stadt",
        title: "In der Stadt",
        subtitle: "Транспорт та орієнтування",
        type: "lexical",
        lesson: 11,
        color: "from-cyan-500 to-blue-600",
        icon: "MapPin"
    },
    {
        id: "einkaufen",
        title: "Kundenservice",
        subtitle: "Покупки та сервіс",
        type: "lexical",
        lesson: 12,
        color: "from-teal-500 to-green-600",
        icon: "ShoppingBag"
    },
    {
        id: "kleidung",
        title: "Neue Kleider",
        subtitle: "Одяг та мода",
        type: "lexical",
        lesson: 13,
        color: "from-violet-500 to-purple-600",
        icon: "Shirt"
    },
    {
        id: "feste",
        title: "Feste & Feiern",
        subtitle: "Свята та традиції",
        type: "lexical",
        lesson: 14,
        color: "from-fuchsia-500 to-pink-600",
        icon: "Gift"
    },

    // --- Grammar Topics ---
    {
        id: "grammatik-artikel",
        title: "Der, Die, Das",
        subtitle: "Артиклі (Reter, Nese, Mr. Man)",
        type: "grammar",
        tag: "Artikel",
        color: "from-gray-700 to-gray-900",
        icon: "BookType"
    },
    {
        id: "grammatik-akkusativ",
        title: "Akkusativ",
        subtitle: "Знахідний відмінок",
        type: "grammar",
        tag: "Akkusativ",
        color: "from-blue-700 to-blue-900",
        icon: "ArrowRightCircle"
    },
    {
        id: "grammatik-w-fragen",
        title: "W-Fragen",
        subtitle: "Питальні слова",
        type: "grammar",
        tag: "W-Fragen",
        color: "from-amber-600 to-orange-700",
        icon: "HelpCircle"
    }
];
