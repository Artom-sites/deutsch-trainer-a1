export const wordsA2 = [
    // Lektion 1 (A2) - Alltag & Familie

    // Nouns
    { id: 'a2-w-1', word: 'der Mensch', translation: 'людина', plur: 'Menschen', article: 'der', plural: 'Menschen', lesson: 'a2-l1' },
    { id: 'a2-w-2', word: 'die Eltern', translation: 'батьки', plur: 'Eltern', article: 'die', plural: 'Eltern', lesson: 'a2-l1' },
    { id: 'a2-w-3', word: 'der Freund', translation: 'друг', plur: 'Freunde', article: 'der', plural: 'Freunde', lesson: 'a2-l1' },
    { id: 'a2-w-4', word: 'das Hotel', translation: 'готель', plur: 'Hotels', article: 'das', plural: 'Hotels', lesson: 'a2-l1' },
    { id: 'a2-w-5', word: 'die Miete', translation: 'орендна плата', plur: 'Mieten', article: 'die', plural: 'Mieten', lesson: 'a2-l1' },
    { id: 'a2-w-6', word: 'das Zentrum', translation: 'центр', plur: 'Zentren', article: 'das', plural: 'Zentren', lesson: 'a2-l1' },
    { id: 'a2-w-7', word: 'der Nachbar', translation: 'сусід', plur: 'Nachbarn', article: 'der', plural: 'Nachbarn', lesson: 'a2-l1' },
    { id: 'a2-w-8', word: 'das Pech', translation: 'невдача', plur: '-', article: 'das', plural: '-', lesson: 'a2-l1' },
    { id: 'a2-w-9', word: 'der Mist', translation: 'дурниця / гній', plur: '-', article: 'der', plural: '-', lesson: 'a2-l1' },
    { id: 'a2-w-10', word: 'das Glück', translation: 'щастя / удача', plur: '-', article: 'das', plural: '-', lesson: 'a2-l1' },

    // Verbs (using type: 'verb' for Dictionary/VerbCard support)
    {
        id: 'a2-w-11',
        word: 'kennenlernen',
        infinitiv: 'kennenlernen',
        translation: 'знайомитися',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'lerne kennen', 'du': 'lernst kennen', 'er/sie/es': 'lernt kennen', 'wir': 'lernen kennen', 'ihr': 'lernt kennen', 'sie/Sie': 'lernen kennen' },
        praeteritum: { 'ich': 'lernte kennen' }, // simplified
        perfekt: { 'haben': 'kennengelernt' },
        example: 'Ich habe schon zwei Nachbarn kennengelernt.'
    },
    {
        id: 'a2-w-12',
        word: 'einkaufen',
        infinitiv: 'einkaufen',
        translation: 'робити покупки',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'kaufe ein', 'du': 'kaufst ein', 'er/sie/es': 'kauft ein', 'wir': 'kaufen ein', 'ihr': 'kauft ein', 'sie/Sie': 'kaufen ein' },
        perfekt: { 'haben': 'eingekauft' },
        example: 'Du hast eingekauft.'
    },
    {
        id: 'a2-w-13',
        word: 'anrufen',
        infinitiv: 'anrufen',
        translation: 'дзвонити',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'rufe an', 'du': 'rufst an', 'er/sie/es': 'ruft an', 'wir': 'rufen an', 'ihr': 'ruft an', 'sie/Sie': 'rufen an' },
        perfekt: { 'haben': 'angerufen' },
        example: 'Ich habe Lara angerufen.'
    },
    {
        id: 'a2-w-14',
        word: 'telefonieren',
        infinitiv: 'telefonieren',
        translation: 'говорити по телефону',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'telefoniere', 'du': 'telefonierst', 'er/sie/es': 'telefoniert', 'wir': 'telefonieren', 'ihr': 'telefoniert', 'sie/Sie': 'telefonieren' },
        perfekt: { 'haben': 'telefoniert' },
        example: 'Ich habe lange telefoniert.'
    },
    {
        id: 'a2-w-15',
        word: 'passieren',
        infinitiv: 'passieren',
        translation: 'траплятися',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'es': 'passiert' },
        perfekt: { 'sein': 'passiert' },
        example: 'Was ist passiert?'
    },
    {
        id: 'a2-w-16',
        word: 'erleben',
        infinitiv: 'erleben',
        translation: 'переживати (подію)',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'erlebe', 'du': 'erlebst', 'er/sie/es': 'erlebt' },
        perfekt: { 'haben': 'erlebt' },
        example: 'Das hast du noch nicht erlebt!'
    },
    {
        id: 'a2-w-17',
        word: 'bemerken',
        infinitiv: 'bemerken',
        translation: 'помічати',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'bemerke', 'du': 'bemerkst', 'er/sie/es': 'bemerkt' },
        perfekt: { 'haben': 'bemerkt' },
        example: 'Ich habe es bemerkt.'
    },
    {
        id: 'a2-w-18',
        word: 'verstehen',
        infinitiv: 'verstehen',
        translation: 'розуміти',
        lesson: 'a2-l1',
        type: 'verb',
        praesens: { 'ich': 'verstehe', 'du': 'verstehst', 'er/sie/es': 'versteht' },
        perfekt: { 'haben': 'verstanden' },
        example: 'Ich habe es verstanden.'
    },

    // Adjectives / Adverbs
    { id: 'a2-w-19', word: 'traurig', translation: 'сумний', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-20', word: 'peinlich', translation: 'незручно / соромно', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-21', word: 'weit', translation: 'далеко', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-22', word: 'draußen', translation: 'на вулиці / ззовні', lesson: 'a2-l1', type: 'adverb' },
    { id: 'a2-w-23', word: 'teuer', translation: 'дорогий', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-24', word: 'allein', translation: 'самотній / один', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-25', word: 'getrennt', translation: 'окремо', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-26', word: 'zusammen', translation: 'разом', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-27', word: 'verheiratet', translation: 'одружений', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-28', word: 'ledig', translation: 'неодружений', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-29', word: 'berufstätig', translation: 'працюючий', lesson: 'a2-l1', type: 'adjective' },
    { id: 'a2-w-30', word: 'arbeitslos', translation: 'безробітний', lesson: 'a2-l1', type: 'adjective' },

    // Lektion 2 (A2) - Wohnen & Einrichtung

    // Nouns
    { id: 'a2-l2-w1', word: 'der Tisch', translation: 'стіл', plur: 'Tische', article: 'der', plural: 'Tische', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w2', word: 'das Sofa', translation: 'диван', plur: 'Sofas', article: 'das', plural: 'Sofas', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w3', word: 'die Leiter', translation: 'драбина', plur: 'Leitern', article: 'die', plural: 'Leitern', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w4', word: 'die Glühbirne', translation: 'лампочка', plur: 'Glühbirnen', article: 'die', plural: 'Glühbirnen', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w5', word: 'die Sache', translation: 'річ', plur: 'Sachen', article: 'die', plural: 'Sachen', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w6', word: 'die Wand', translation: 'стіна', plur: 'Wände', article: 'die', plural: 'Wände', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w7', word: 'der Hausbewohner', translation: 'мешканець будинку', plur: 'Hausbewohner', article: 'der', plural: 'Hausbewohner', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w8', word: 'der Müll', translation: 'сміття', plur: '-', article: 'der', plural: '-', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w9', word: 'das Schild', translation: 'вивіска / щит', plur: 'Schilder', article: 'das', plural: 'Schilder', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w10', word: 'der Schlüssel', translation: 'ключ', plur: 'Schlüssel', article: 'der', plural: 'Schlüssel', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w11', word: 'das Schloss', translation: 'замок', plur: 'Schlösser', article: 'das', plural: 'Schlösser', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w12', word: 'der Balkon', translation: 'балкон', plur: 'Balkone', article: 'der', plural: 'Balkone', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w13', word: 'die Seife', translation: 'мило', plur: 'Seifen', article: 'die', plural: 'Seifen', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w14', word: 'der Kühlschrank', translation: 'холодильник', plur: 'Kühlschränke', article: 'der', plural: 'Kühlschränke', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w15', word: 'der Briefkasten', translation: 'поштова скринька', plur: 'Briefkästen', article: 'der', plural: 'Briefkästen', lesson: 'a2-l2', type: 'noun' },
    { id: 'a2-l2-w16', word: 'die Pflanze', translation: 'рослина', plur: 'Pflanzen', article: 'die', plural: 'Pflanzen', lesson: 'a2-l2', type: 'noun' },

    // Verbs (Legen/Liegen etc.)
    {
        id: 'a2-l2-w17', word: 'stehen', translation: 'стояти', lesson: 'a2-l2', type: 'verb',
        praesens: { 'es': 'steht' }, perfekt: { 'haben/sein': 'gestanden' }, example: 'Der Tisch steht in der Küche.'
    },
    {
        id: 'a2-l2-w18', word: 'stellen', translation: 'ставити', lesson: 'a2-l2', type: 'verb',
        praesens: { 'ich': 'stelle' }, perfekt: { 'haben': 'gestellt' }, example: 'Ich stelle den Tisch in die Küche.'
    },
    {
        id: 'a2-l2-w19', word: 'liegen', translation: 'лежати', lesson: 'a2-l2', type: 'verb',
        praesens: { 'es': 'liegt' }, perfekt: { 'haben/sein': 'gelegen' }, example: 'Das Buch liegt auf dem Tisch.'
    },
    {
        id: 'a2-l2-w20', word: 'legen', translation: 'класти', lesson: 'a2-l2', type: 'verb',
        praesens: { 'ich': 'lege' }, perfekt: { 'haben': 'gelegt' }, example: 'Ich lege das Buch auf den Tisch.'
    },
    {
        id: 'a2-l2-w21', word: 'hängen', translation: 'висіти / вішати', lesson: 'a2-l2', type: 'verb',
        praesens: { 'es': 'hängt' }, perfekt: { 'haben': 'gehangen/gehängt' }, example: 'Das Bild hängt an der Wand.'
    },
    {
        id: 'a2-l2-w22', word: 'stecken', translation: 'стирчати / втикати', lesson: 'a2-l2', type: 'verb',
        praesens: { 'es': 'steckt' }, perfekt: { 'haben': 'gesteckt' }, example: 'Der Schlüssel steckt im Schloss.'
    },

    // Adverbs (Directional)
    { id: 'a2-l2-w23', word: 'rein', translation: 'всередину (розмовне)', lesson: 'a2-l2', type: 'adverb' },
    { id: 'a2-l2-w24', word: 'raus', translation: 'назовні (розмовне)', lesson: 'a2-l2', type: 'adverb' },
    { id: 'a2-l2-w25', word: 'runter', translation: 'вниз (розмовне)', lesson: 'a2-l2', type: 'adverb' },
    { id: 'a2-l2-w26', word: 'rüber', translation: 'сюди / на той бік', lesson: 'a2-l2', type: 'adverb' },
    { id: 'a2-l2-w27', word: 'hierhin', translation: 'сюди (напрямок)', lesson: 'a2-l2', type: 'adverb' },
    { id: 'a2-l2-w28', word: 'dorthin', translation: 'туди (напрямок)', lesson: 'a2-l2', type: 'adverb' },

    // Lektion 3 (A2) - Essen & Trinken (Lektion 10)

    // Nouns (Geschirr & Essen)
    { id: 'a2-l3-w1', word: 'der Löffel', translation: 'ложка', plur: 'Löffel', article: 'der', plural: 'Löffel', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w2', word: 'das Messer', translation: 'ніж', plur: 'Messer', article: 'das', plural: 'Messer', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w3', word: 'die Gabel', translation: 'виделка', plur: 'Gabeln', article: 'die', plural: 'Gabeln', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w4', word: 'der Teller', translation: 'тарілка', plur: 'Teller', article: 'der', plural: 'Teller', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w5', word: 'das Geschirr', translation: 'посуд', plur: '-', article: 'das', plural: '-', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w6', word: 'die Portion', translation: 'порція', plur: 'Portionen', article: 'die', plural: 'Portionen', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w7', word: 'der Espresso', translation: 'еспресо', plur: 'Espressos', article: 'der', plural: 'Espressos', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w8', word: 'die Suppe', translation: 'суп', plur: 'Suppen', article: 'die', plural: 'Suppen', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w9', word: 'das Gericht', translation: 'страва', plur: 'Gerichte', article: 'das', plural: 'Gerichte', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w10', word: 'das Fleisch', translation: 'м\'ясо', plur: '-', article: 'das', plural: '-', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w11', word: 'der Fisch', translation: 'риба', plur: 'Fische', article: 'der', plural: 'Fische', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w12', word: 'die Süßigkeiten', translation: 'солодощі', plur: 'Süßigkeiten', article: 'die', plural: 'Süßigkeiten', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w13', word: 'die Rechnung', translation: 'рахунок', plur: 'Rechnungen', article: 'die', plural: 'Rechnungen', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w14', word: 'der Sitzplatz', translation: 'місце (для сидіння)', plur: 'Sitzplätze', article: 'der', plural: 'Sitzplätze', lesson: 'a2-l3', type: 'noun' },
    { id: 'a2-l3-w15', word: 'der Gast', translation: 'гість', plur: 'Gäste', article: 'der', plural: 'Gäste', lesson: 'a2-l3', type: 'noun' },

    // Verbs
    { id: 'a2-l3-w16', word: 'bestellen', translation: 'замовляти', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben': 'bestellt' }, example: 'Ich möchte bestellen.' },
    { id: 'a2-l3-w17', word: 'schmecken', translation: 'смакувати', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben': 'geschmeckt' }, example: 'Das schmeckt lecker.' },
    { id: 'a2-l3-w18', word: 'mitbringen', translation: 'приносити з собою', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben': 'mitgebracht' }, example: 'Ich habe Wein mitgebracht.' },
    { id: 'a2-l3-w19', word: 'ausziehen', translation: 'знімати (одяг/взуття)', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben/sein': 'ausgezogen' }, example: 'Soll ich die Schuhe ausziehen?' },
    { id: 'a2-l3-w20', word: 'zahlen', translation: 'платити', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben': 'gezahlt' }, example: 'Wir möchten bitte zahlen.' },
    { id: 'a2-l3-w21', word: 'überraschen', translation: 'дивувати', lesson: 'a2-l3', type: 'verb', perfekt: { 'haben': 'überrascht' }, example: 'Das überrascht mich.' },

    // Adjectives / Adverbs
    { id: 'a2-l3-w22', word: 'salzig', translation: 'солоний', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w23', word: 'satt', translation: 'ситий', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w24', word: 'lecker', translation: 'смачний', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w25', word: 'besetzt', translation: 'зайнятий (місце)', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w26', word: 'leer', translation: 'порожній', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w27', word: 'seltsam', translation: 'дивний', lesson: 'a2-l3', type: 'adjective' },
    { id: 'a2-l3-w28', word: 'schlimm', translation: 'поганий', lesson: 'a2-l3', type: 'adjective' },

    // Frequency Adverbs (Grammar topic)
    { id: 'a2-l3-w29', word: 'immer', translation: 'завжди', lesson: 'a2-l3', type: 'adverb' },
    { id: 'a2-l3-w30', word: 'meistens', translation: 'здебільшого', lesson: 'a2-l3', type: 'adverb' },
    { id: 'a2-l3-w31', word: 'oft', translation: 'часто', lesson: 'a2-l3', type: 'adverb' },
    { id: 'a2-l3-w32', word: 'manchmal', translation: 'іноді', lesson: 'a2-l3', type: 'adverb' },
    { id: 'a2-l3-w33', word: 'selten', translation: 'рідко', lesson: 'a2-l3', type: 'adverb' },
    { id: 'a2-l3-w34', word: 'nie', translation: 'ніколи', lesson: 'a2-l3', type: 'adverb' },

    // Lektion 4 (A2) - Arbeitswelt (Lektion 11)

    // Nouns (Telefon & Arbeit)
    { id: 'a2-l4-w1', word: 'die Arbeit', translation: 'робота', plur: '-', article: 'die', plural: '-', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w2', word: 'der Feierabend', translation: 'кінець робочого дня', plur: '-', article: 'der', plural: '-', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w3', word: 'die Abteilung', translation: 'відділ', plur: 'Abteilungen', article: 'die', plural: 'Abteilungen', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w4', word: 'die Kantine', translation: 'їдальня (на роботі)', plur: 'Kantinen', article: 'die', plural: 'Kantinen', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w5', word: 'die Durchwahl', translation: 'додатковий номер', plur: 'Durchwahlen', article: 'die', plural: 'Durchwahlen', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w6', word: 'die Gewerkschaft', translation: 'профспілка', plur: 'Gewerkschaften', article: 'die', plural: 'Gewerkschaften', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w7', word: 'die Reservierung', translation: 'бронювання', plur: 'Reservierungen', article: 'die', plural: 'Reservierungen', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w8', word: 'die Bestätigung', translation: 'підтвердження', plur: 'Bestätigungen', article: 'die', plural: 'Bestätigungen', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w9', word: 'der Ratschlag', translation: 'порада', plur: 'Ratschläge', article: 'der', plural: 'Ratschläge', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w10', word: 'der Arbeitsplatz', translation: 'робоче місце', plur: 'Arbeitsplätze', article: 'der', plural: 'Arbeitsplätze', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w11', word: 'der Chef', translation: 'шеф / начальник', plur: 'Chefs', article: 'der', plural: 'Chefs', lesson: 'a2-l4', type: 'noun' },
    { id: 'a2-l4-w12', word: 'die Nachricht', translation: 'повідомлення', plur: 'Nachrichten', article: 'die', plural: 'Nachrichten', lesson: 'a2-l4', type: 'noun' },

    // Verbs (Telefonieren)
    { id: 'a2-l4-w13', word: 'verbinden', translation: 'з\'єднувати (по телефону)', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'verbunden' }, example: 'Können Sie mich bitte verbinden?' },
    { id: 'a2-l4-w14', word: 'durchstellen', translation: 'перемикати (дзвінок)', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'durchgestellt' }, example: 'Können Sie mich durchstellen?' },
    { id: 'a2-l4-w15', word: 'zurückrufen', translation: 'передзвонити', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'zurückgerufen' }, example: 'Soll er zurückrufen?' },
    { id: 'a2-l4-w16', word: 'ausrichten', translation: 'передати (інформацію)', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'ausgerichtet' }, example: 'Kann ich ihm etwas ausrichten?' },
    { id: 'a2-l4-w17', word: 'reklamieren', translation: 'скаржитися / пред\'являти претензію', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'reklamiert' }, example: 'Ich möchte das Essen reklamieren.' },
    { id: 'a2-l4-w18', word: 'vermuten', translation: 'припускати', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'vermutet' }, example: 'Das vermute ich auch.' },
    { id: 'a2-l4-w19', word: 'vergleichen', translation: 'порівнювати', lesson: 'a2-l4', type: 'verb', perfekt: { 'haben': 'verglichen' }, example: 'Vergleichen Sie die Preise.' },

    // Adjectives / Adverbs
    { id: 'a2-l4-w20', word: 'frei', translation: 'вільний', lesson: 'a2-l4', type: 'adjective' },
    { id: 'a2-l4-w21', word: 'besetzt', translation: 'зайнятий', lesson: 'a2-l4', type: 'adjective' },
    { id: 'a2-l4-w22', word: 'draußen', translation: 'зовні', lesson: 'a2-l4', type: 'adverb' }, // Maybe repeat but okay
    { id: 'a2-l4-w23', word: 'drinnen', translation: 'всередині', lesson: 'a2-l4', type: 'adverb' },
    { id: 'a2-l4-w24', word: 'gerade', translation: 'зараз / саме', lesson: 'a2-l4', type: 'adverb' },
    { id: 'a2-l4-w25', word: 'wahrscheinlich', translation: 'ймовірно', lesson: 'a2-l4', type: 'adverb' },
    { id: 'a2-l4-w26', word: 'vielleicht', translation: 'можливо', lesson: 'a2-l4', type: 'adverb' },

    // Lektion 5 (A2) - Gesund & Fit (Lektion 12)

    // Reflexive Verben
    { id: 'a2-l5-w1', word: 'sich bewegen', translation: 'рухатися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'bewegt' }, example: 'Ich bewege mich gern.' },
    { id: 'a2-l5-w2', word: 'sich fühlen', translation: 'почуватися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'gefühlt' }, example: 'Wie fühlen Sie sich?' },
    { id: 'a2-l5-w3', word: 'sich ernähren', translation: 'харчуватися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'ernährt' }, example: 'Sie sollten sich gesund ernähren.' },
    { id: 'a2-l5-w4', word: 'sich entspannen', translation: 'розслаблятися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'entspannt' }, example: 'Ich entspanne mich zu Hause.' },
    { id: 'a2-l5-w5', word: 'sich ärgern', translation: 'злитися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'geärgert' }, example: 'Er ärgert sich über den Bus.' },
    { id: 'a2-l5-w6', word: 'sich schminken', translation: 'фарбуватися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'geschminkt' }, example: 'Sie schminkt sich.' },
    { id: 'a2-l5-w7', word: 'sich rasieren', translation: 'голитися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'rasiert' }, example: 'Er rasiert sich jeden Morgen.' },
    { id: 'a2-l5-w8', word: 'sich umziehen', translation: 'переодягатися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'umgezogen' }, example: 'Ich ziehe mich schnell um.' },
    { id: 'a2-l5-w9', word: 'sich konzentrieren', translation: 'концентруватися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'konzentriert' }, example: 'Ich muss mich konzentrieren.' },
    { id: 'a2-l5-w10', word: 'sich beschweren', translation: 'скаржитися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'beschwert' }, example: 'Der Gast beschwert sich.' },
    { id: 'a2-l5-w11', word: 'sich interessieren', translation: 'цікавитися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'interessiert' }, example: 'Ich interessiere mich für Sport.' },
    { id: 'a2-l5-w12', word: 'sich kümmern', translation: 'піклуватися', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'gekümmert' }, example: 'Wer kümmert sich um den Hund?' },
    { id: 'a2-l5-w13', word: 'sich freuen', translation: 'радіти', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'gefreut' }, example: 'Ich freue mich auf den Urlaub.' },
    { id: 'a2-l5-w14', word: 'sich erinnern', translation: 'пам\'ятати / згадувати', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'erinnert' }, example: 'Ich erinnere mich an ihn.' },
    { id: 'a2-l5-w15', word: 'sich ausruhen', translation: 'відпочивати', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'ausgeruht' }, example: 'Ruh dich aus!' },
    { id: 'a2-l5-w16', word: 'sich verabreden', translation: 'домовлятися про зустріч', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'verabredet' }, example: 'Wir haben uns verabredet.' },

    // Verbs mit Präpositionen (Non-reflexive mostly covered above or here)
    { id: 'a2-l5-w17', word: 'warten', translation: 'чекати', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'gewartet' }, example: 'Ich warte auf den Bus.' },
    { id: 'a2-l5-w18', word: 'träumen', translation: 'мріяти', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'geträumt' }, example: 'Er träumt von einem Haus.' },
    { id: 'a2-l5-w19', word: 'denken', translation: 'думати', lesson: 'a2-l5', type: 'verb', perfekt: { 'haben': 'gedacht' }, example: 'Ich denke an dich.' },

    // Nouns
    { id: 'a2-l5-w20', word: 'der Verein', translation: 'клуб / спілка', plur: 'Vereine', article: 'der', plural: 'Vereine', lesson: 'a2-l5', type: 'noun' },
    { id: 'a2-l5-w21', word: 'die Lust', translation: 'бажання / настрій', plur: '-', article: 'die', plural: '-', lesson: 'a2-l5', type: 'noun' },
    { id: 'a2-l5-w22', word: 'die Angst', translation: 'страх', plur: 'Ängste', article: 'die', plural: 'Ängste', lesson: 'a2-l5', type: 'noun' },
    { id: 'a2-l5-w23', word: 'die Anmeldung', translation: 'реєстрація', plur: 'Anmeldungen', article: 'die', plural: 'Anmeldungen', lesson: 'a2-l5', type: 'noun' },
    { id: 'a2-l5-w24', word: 'die Ermäßigung', translation: 'знижка', plur: 'Ermäßigungen', article: 'die', plural: 'Ermäßigungen', lesson: 'a2-l5', type: 'noun' },
    { id: 'a2-l5-w25', word: 'der Kurs', translation: 'курс', plur: 'Kurse', article: 'der', plural: 'Kurse', lesson: 'a2-l5', type: 'noun' },

    // Lektion 6 (A2) - Schulen & Beruf (Lektion 13)

    // Nouns
    { id: 'a2-l6-w1', word: 'das Studium', translation: 'навчання (шкільне/університетське)', plur: 'Studien', article: 'das', plural: 'Studien', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w2', word: 'die Grundschule', translation: 'початкова школа', plur: 'Grundschulen', article: 'die', plural: 'Grundschulen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w3', word: 'die Gesamtschule', translation: 'загальна школа', plur: 'Gesamtschulen', article: 'die', plural: 'Gesamtschulen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w4', word: 'das Gymnasium', translation: 'гімназія', plur: 'Gymnasien', article: 'das', plural: 'Gymnasien', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w5', word: 'die Realschule', translation: 'реальна школа', plur: 'Realschulen', article: 'die', plural: 'Realschulen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w6', word: 'die Hauptschule', translation: 'основна школа', plur: 'Hauptschulen', article: 'die', plural: 'Hauptschulen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w7', word: 'die Berufsschule', translation: 'професійна школа', plur: 'Berufsschulen', article: 'die', plural: 'Berufsschulen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w8', word: 'das Abitur', translation: 'атестат зрілості', plur: '-', article: 'das', plural: '-', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w9', word: 'die Ausbildung', translation: 'освіта / професійне навчання', plur: 'Ausbildungen', article: 'die', plural: 'Ausbildungen', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w10', word: 'der Abschluss', translation: 'закінчення / диплом', plur: 'Abschlüsse', article: 'der', plural: 'Abschlüsse', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w11', word: 'das Fach', translation: 'предмет (шкільний)', plur: 'Fächer', article: 'das', plural: 'Fächer', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w12', word: 'die Note', translation: 'оцінка', plur: 'Noten', article: 'die', plural: 'Noten', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w13', word: 'das Zeugnis', translation: 'свідоцтво / табель', plur: 'Zeugnisse', article: 'das', plural: 'Zeugnisse', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w14', word: 'der Wunsch', translation: 'бажання', plur: 'Wünsche', article: 'der', plural: 'Wünsche', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w15', word: 'der Plan', translation: 'план', plur: 'Pläne', article: 'der', plural: 'Pläne', lesson: 'a2-l6', type: 'noun' },
    { id: 'a2-l6-w16', word: 'die Erdkunde', translation: 'географія', plur: '-', article: 'die', plural: '-', lesson: 'a2-l6', type: 'noun' },

    // Verbs
    { id: 'a2-l6-w17', word: 'hassen', translation: 'ненавидіти', lesson: 'a2-l6', type: 'verb', perfekt: { 'haben': 'gehasst' }, example: 'Ich hasse Mathe.' },
    { id: 'a2-l6-w18', word: 'lieben', translation: 'любити', lesson: 'a2-l6', type: 'verb', perfekt: { 'haben': 'geliebt' }, example: 'Ich liebe Musik.' },
    { id: 'a2-l6-w19', word: 'werden', translation: 'ставати', lesson: 'a2-l6', type: 'verb', perfekt: { 'sein': 'geworden' }, example: 'Ich will Arzt werden.' },

    // Adjectives
    { id: 'a2-l6-w20', word: 'streng', translation: 'суворий', lesson: 'a2-l6', type: 'adjective' },
    { id: 'a2-l6-w21', word: 'nett', translation: 'милий / приємний', lesson: 'a2-l6', type: 'adjective' },
    { id: 'a2-l6-w22', word: 'langweilig', translation: 'нудний', lesson: 'a2-l6', type: 'adjective' },
    { id: 'a2-l6-w23', word: 'toll', translation: 'чудовий', lesson: 'a2-l6', type: 'adjective' },

    // Lektion 7 (A2) - Feste & Feiern (Lektion 14)

    // Nouns
    { id: 'a2-l7-w1', word: 'das Fest', translation: 'свято / фестиваль', plur: 'Feste', article: 'das', plural: 'Feste', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w2', word: 'die Feier', translation: 'свято / святкування', plur: 'Feiern', article: 'die', plural: 'Feiern', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w3', word: 'das Geschenk', translation: 'подарунок', plur: 'Geschenke', article: 'das', plural: 'Geschenke', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w4', word: 'der Gutschein', translation: 'ваучер / подарунковий сертифікат', plur: 'Gutscheine', article: 'der', plural: 'Gutscheine', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w5', word: 'die Hochzeit', translation: 'весілля', plur: 'Hochzeiten', article: 'die', plural: 'Hochzeiten', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w6', word: 'die Braut', translation: 'наречена', plur: 'Bräute', article: 'die', plural: 'Bräute', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w7', word: 'der Bräutigam', translation: 'наречений', plur: 'Bräutigame', article: 'der', plural: 'Bräutigame', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w8', word: 'die Trauung', translation: 'одруження / вінчання', plur: 'Trauungen', article: 'die', plural: 'Trauungen', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w9', word: 'die Einladung', translation: 'запрошення', plur: 'Einladungen', article: 'die', plural: 'Einladungen', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w10', word: 'die Dekoration', translation: 'декорація', plur: 'Dekorationen', article: 'die', plural: 'Dekorationen', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w11', word: 'die Kette', translation: 'ланцюжок / намисто', plur: 'Ketten', article: 'die', plural: 'Ketten', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w12', word: 'der Kuchen', translation: 'пиріг', plur: 'Kuchen', article: 'der', plural: 'Kuchen', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w13', word: 'die Puppe', translation: 'лялька', plur: 'Puppen', article: 'die', plural: 'Puppen', lesson: 'a2-l7', type: 'noun' },
    { id: 'a2-l7-w14', word: 'das Parfüm', translation: 'парфуми', plur: 'Parfüms', article: 'das', plural: 'Parfüms', lesson: 'a2-l7', type: 'noun' },

    // Verbs
    { id: 'a2-l7-w15', word: 'feiern', translation: 'святкувати', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'gefeiert' }, example: 'Wir feiern Geburtstag.' },
    { id: 'a2-l7-w16', word: 'schenken', translation: 'дарувати', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'geschenkt' }, example: 'Ich schenke dir ein Buch.' },
    { id: 'a2-l7-w17', word: 'backen', translation: 'пекти', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'gebacken' }, example: 'Ich backe einen Kuchen.' },
    { id: 'a2-l7-w18', word: 'empfehlen', translation: 'рекомендувати', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'empfohlen' }, example: 'Kannst du mir das empfehlen?' },
    { id: 'a2-l7-w19', word: 'stattfinden', translation: 'відбуватися', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'stattgefunden' }, example: 'Das Fest findet morgen statt.' },
    { id: 'a2-l7-w20', word: 'heiraten', translation: 'одружуватися', lesson: 'a2-l7', type: 'verb', perfekt: { 'haben': 'geheiratet' }, example: 'Sie heiraten im Sommer.' },

    // Adjectives / Adverbs
    { id: 'a2-l7-w21', word: 'selbstgemacht', translation: 'саморобний', lesson: 'a2-l7', type: 'adjective' },
    { id: 'a2-l7-w22', word: 'wichtig', translation: 'важливий', lesson: 'a2-l7', type: 'adjective' },
    { id: 'a2-l7-w23', word: 'typisch', translation: 'типовий', lesson: 'a2-l7', type: 'adjective' },
    { id: 'a2-l7-w24', word: 'schließlich', translation: 'зрештою', lesson: 'a2-l7', type: 'adverb' }
];
