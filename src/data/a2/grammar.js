export const grammarA2 = [
    {
        id: "a2-l1-weil",
        title: "Konjunktion: weil",
        description: "Вираження причини. Дієслово стоїть в кінці речення.",
        content: [
            {
                type: 'rule',
                text: "Сполучник **weil** (тому що) вводить підрядне речення. У підрядному реченні відмінюване дієслово завжди стоїть у **кінці**."
            },
            {
                type: 'table',
                headers: ['Hauptsatz', 'Konjunktion', 'Mittelfeld', 'Ende (Verb)'],
                rows: [
                    ['Ich bin traurig,', 'weil', 'ich hier keinen Menschen', 'kenne.'],
                    ['Ich bin traurig,', 'weil', 'meine Eltern nicht', 'anrufen.'],
                    ['Warum wohnst du so weit draußen?', 'Weil', 'die Mieten im Zentrum so teuer', 'sind.']
                ]
            }
        ]
    },
    {
        id: "a2-l1-perfekt-trennbar",
        title: "Perfekt: Trennbare Verben",
        description: "Минулий час для дієслів з відокремлюваними префіксами.",
        content: [
            {
                type: 'rule',
                text: "У Partizip II префікс **ge-** стоїть між відокремлюваним префіксом та коренем дієслова."
            },
            {
                type: 'example',
                text: "einkaufen -> ein + ge + kauft -> **eingekauft**"
            },
            {
                type: 'example',
                text: "anrufen -> an + ge + rufen -> **angerufen**"
            },
            {
                type: 'example',
                text: "kennenlernen -> kennen + ge + lernt -> **kennengelernt**"
            },
            {
                type: 'table',
                headers: ['Infinitiv', 'Satz'],
                rows: [
                    ['kennenlernen', 'Ich habe schon zwei Nachbarn **kennengelernt**.'],
                    ['einkaufen', 'Du hast **eingekauft**.'],
                    ['anrufen', 'Ich habe Lara **angerufen**.']
                ]
            }
        ]
    },
    {
        id: "a2-l1-perfekt-ieren",
        title: "Perfekt: Verben auf -ieren",
        description: "Дієслова із закінченням -ieren.",
        content: [
            {
                type: 'rule',
                text: "Дієслова, що закінчуються на **-ieren**, утворюють Partizip II **без** префікса ge-."
            },
            {
                type: 'example',
                text: "telefonieren -> hat telefoniert (НЕ getelefoniert)"
            },
            {
                type: 'example',
                text: "passieren -> ist passiert"
            },
            {
                type: 'table',
                headers: ['Infinitiv', 'Satz'],
                rows: [
                    ['passieren', 'Was ist **passiert**?'],
                    ['telefonieren', 'Ich habe beim Gehen **telefoniert**.']
                ]
            }
        ]
    },
    {
        id: "a2-l1-perfekt-nicht-trennbar",
        title: "Perfekt: Nicht-trennbare Verben",
        description: "Дієслова з невідокремлюваними префіксами.",
        content: [
            {
                type: 'rule',
                text: "Дієслова з невідокремлюваними префіксами (**be-, ver-, zer-, er-, ent-, emp-, ge-, miss-**) утворюють Partizip II **без** додаткового prefix ge-."
            },
            {
                type: 'example',
                text: "erleben -> hat erlebt"
            },
            {
                type: 'example',
                text: "verstehen -> hat verstanden"
            },
            {
                type: 'table',
                headers: ['Infinitiv', 'Satz'],
                rows: [
                    ['erleben', 'So was hast du noch nicht **erlebt**!'],
                    ['bemerken', 'Ich habe es jetzt erst **bemerkt**.'],
                    ['verstehen', 'Ich habe es **verstanden**.']
                ]
            }
        ]
    },
    {
        id: "a2-l1-genitiv-von",
        title: "Namen im Genitiv: von + Dativ",
        description: "Альтернатива родовому відмінку для імен.",
        content: [
            {
                type: 'rule',
                text: "Замість форми 's (Annas Mutter) можна використовувати прийменник **von + Dativ**."
            },
            {
                type: 'example',
                text: "Annas Mutter = die Mutter **von** Anna"
            }
        ]
    },

    // ==========================================
    // LEKTION 2: Wohnen & Einrichtung
    // ==========================================
    {
        id: "a2-l2-wechselpraepositionen",
        title: "Wechselpräpositionen (Змінні прийменники)",
        description: "Прийменники місця: Wo? (Dativ) vs Wohin? (Akkusativ).",
        content: [
            {
                type: 'rule',
                text: "Прийменники **in, an, auf, neben, zwischen, über, unter, vor, hinter** можуть використовуватися з Dativ або Akkusativ."
            },
            {
                type: 'table',
                headers: ['Frage', 'Kasus', 'Bedeutung'],
                rows: [
                    ['Wo? (Де?)', 'Dativ', 'Місце (статика)'],
                    ['Wohin? (Куди?)', 'Akkusativ', 'Напрямок (рух)']
                ]
            },
            {
                type: 'examples',
                text: "**Wo? (+ Dativ)**\n- Der Laptop steht auf **dem** Tisch.\n- Die Lampe steht neben **dem** Sofa.\n\n**Wohin? (+ Akkusativ)**\n- Ich stelle den Laptop auf **den** Tisch.\n- Er legt die Sachen auf **den** Tisch."
            }
        ]
    },
    {
        id: "a2-l2-verben-position",
        title: "Verben: Position & Richtung",
        description: "Verben für Wo? (liegen/stehen) und Wohin? (legen/stellen).",
        content: [
            {
                type: 'rule',
                text: "Є пари дієслів: одні вказують на стан (Wo? + Dativ), інші — на дію (Wohin? + Akkusativ)."
            },
            {
                type: 'table',
                headers: ['Wohin? + Akkusativ (Action)', 'Wo? + Dativ (Position)'],
                rows: [
                    ['legen (класти)', 'liegen (лежати)'],
                    ['stellen (ставити)', 'stehen (стояти)'],
                    ['hängen (вішати)', 'hängen (висіти)'],
                    ['stecken (втикати)', 'stecken (стирчати/бути)']
                ]
            },
            {
                type: 'example',
                text: "Ich **stelle** die Milch in den Kühlschrank. (Wohin?)\nDie Milch **steht** im Kühlschrank. (Wo?)"
            }
        ]
    },
    {
        id: "a2-l2-direktionaladverbien",
        title: "Direktionaladverbien",
        description: "rein, raus, runter, rüber...",
        content: [
            {
                type: 'rule',
                text: "У розмовній мові часто використовуються короткі прислівники напрямку:"
            },
            {
                type: 'list',
                items: [
                    "**rein** = herein/hinein (всередину)",
                    "**raus** = heraus/hinaus (назовні)",
                    "**runter** = herunter/hinunter (вниз)",
                    "**rüber** = herüber/hinüber (через/на той бік)"
                ]
            },
            {
                type: 'rule',
                text: "**hierhin** (сюди) vs **dorthin** (туди)"
            },
            {
                type: 'example',
                text: "Kommen Sie doch rein! (Заходьте!)"
            },
            {
                type: 'example',
                text: "Stellen Sie die Leiter dahin. (Поставте драбину туди.)"
            }
        ]
    },
    {
        id: "a2-l2-kommunikation",
        title: "Kommunikation: Bitte & Dank",
        description: "Ввічливі прохання, подяка та вибачення.",
        content: [
            {
                type: 'rule',
                text: "**Jemanden um Hilfe bitten (Прохання):**"
            },
            {
                type: 'list',
                items: [
                    "Könnten Sie die Firma bitte in meine Wohnung lassen?",
                    "Kannst du bitte meinen Briefkasten leeren?",
                    "Würden Sie wieder mit meinem Hund spazieren gehen?"
                ]
            },
            {
                type: 'rule',
                text: "**Sich entschuldigen (Вибачення):**"
            },
            {
                type: 'list',
                items: [
                    "Oh, Entschuldigung. Das war keine Absicht.",
                    "Tut mir leid. Das habe ich nicht gewusst."
                ]
            },
            {
                type: 'rule',
                text: "**Dank (Подяка):**"
            },
            {
                type: 'list',
                items: [
                    "Vielen Dank für Ihre Hilfe.",
                    "Das wäre wirklich nett."
                ]
            }
        ]
    },

    // ==========================================
    // LEKTION 3: Essen & Trinken (Lektion 10)
    // ==========================================
    {
        id: "a2-l3-indefinitpronomen",
        title: "Indefinitpronomen",
        description: "einer, keins, welche... (Займенники замість іменників)",
        content: [
            {
                type: 'rule',
                text: "Неозначені займенники замінюють іменник, який вже згадувався."
            },
            {
                type: 'table',
                headers: ['Artikel / Nomen', 'Pronomen (Nominativ)', 'Pronomen (Akkusativ)'],
                rows: [
                    ['der Espresso', '(k)einer', '(k)einen'],
                    ['das Messer', '(k)eins', '(k)eins'],
                    ['die Portion', '(k)eine', '(k)eine'],
                    ['die Löffel (Pl.)', 'keine / welche', 'keine / welche']
                ]
            },
            {
                type: 'examples',
                text: "- Hast du **einen** Löffel? - Nein, hier ist **keiner**.\n- Möchtest du **einen** Espresso? - Ja, ich nehme **einen**.\n- Haben wir noch Eier? - Ja, wir haben noch **welche**."
            }
        ]
    },
    {
        id: "a2-l3-haeufigkeit",
        title: "Häufigkeit (Frequency)",
        description: "Wie oft? (immer, meistens, selten...)",
        content: [
            {
                type: 'rule',
                text: "Прислівники частоти відповідають на питання **Wie oft?** (Як часто?)"
            },
            {
                type: 'list',
                items: [
                    "🟢 **immer** (100%) - завжди",
                    "🟢 **fast immer** - майже завжди",
                    "🟡 **meistens** - здебільшого",
                    "🟡 **oft** - часто",
                    "🟠 **manchmal** - іноді",
                    "🔴 **selten** - рідко",
                    "🔴 **fas nie** - майже ніколи",
                    "⚫ **nie** (0%) - ніколи"
                ]
            },
            {
                type: 'example',
                text: "Wie oft kochst du? - Ich koche **nie**, ich gehe **immer** ins Restaurant."
            }
        ]
    },
    {
        id: "a2-l3-kommunikation",
        title: "Kommunikation: Im Restaurant & Einladung",
        description: "Корисні фрази для ресторану та в гостях.",
        content: [
            {
                type: 'rule',
                text: "**Im Restaurant (В ресторані):**"
            },
            {
                type: 'list',
                items: [
                    "**Platz suchen:** 'Ist hier noch frei?' - 'Ja, bitte.' / 'Nein, tut mir leid, besetzt.'",
                    "**Bestellen:** 'Kann ich bitte die Karte haben?', 'Ich nehme / Ich möchte...'",
                    "**Reklamieren:** 'Die Suppe ist kalt.', 'Das Messer ist nicht sauber.'",
                    "**Zahlen:** 'Zahlen, bitte.', 'Die Rechnung, bitte.', 'Zusammen oder getrennt?'"
                ]
            },
            {
                type: 'rule',
                text: "**Private Einladung (Приватне запрошення):**"
            },
            {
                type: 'list',
                items: [
                    "**Ankunft:** 'Die Blumen sind für dich.', 'Soll ich die Schuhe ausziehen?'",
                    "**Essen:** 'Das riecht lecker.', 'Möchtest du noch etwas?' - 'Gerne.' / 'Nein danke, ich bin satt.'",
                    "**Abschied:** 'Vielen Dank für den schönen Abend.', 'Komm gut nach Hause.'"
                ]
            }
        ]
    },

    // ==========================================
    // LEKTION 4: Arbeitswelt (Lektion 11)
    // ==========================================
    {
        id: "a2-l4-wenn",
        title: "Konjunktion: wenn",
        description: "Умовні речення (Якщо... то...)",
        content: [
            {
                type: 'rule',
                text: "Сполучник **wenn** (якщо/коли) вводить підрядне речення (Verb am Ende)."
            },
            {
                type: 'table',
                headers: ['Typ', 'Satz 1', 'Satz 2'],
                rows: [
                    ['Wenn-Satz zuerst', 'Wenn ich frei habe,', 'gehe ich spazieren. (Verb 1 -> Verb 2)'],
                    ['Hauptsatz zuerst', 'Ich gehe spazieren,', 'wenn ich frei habe.']
                ]
            },
            {
                type: 'examples',
                text: "- Wenn Sie keine Bestätigung haben, kann ich Ihnen kein Zimmer geben.\n- Wenn ich krank bin, bleibe ich zu Hause."
            }
        ]
    },
    {
        id: "a2-l4-sollen-konjunktiv",
        title: "Ratschläge: sollten",
        description: "Поради за допомогою Konjunktiv II (sollte).",
        content: [
            {
                type: 'rule',
                text: "Для порад вживається форма **sollte** (вам слід / тобі варто)."
            },
            {
                type: 'table',
                headers: ['Person', 'Form'],
                rows: [
                    ['ich', 'sollte'],
                    ['du', 'solltest'],
                    ['er/sie/es', 'sollte'],
                    ['wir', 'sollten'],
                    ['ihr', 'solltet'],
                    ['sie/Sie', 'sollten']
                ]
            },
            {
                type: 'example',
                text: "Du siehst müde aus. Du **solltest** früh ins Bett gehen."
            }
        ]
    },
    {
        id: "a2-l4-kommunikation",
        title: "Kommunikation: Am Telefon",
        description: "Телефонна розмова та повідомлення.",
        content: [
            {
                type: 'rule',
                text: "**Verbinden (З'єднання):**"
            },
            {
                type: 'list',
                items: [
                    "Können Sie mich bitte mit Frau Müller verbinden?",
                    "Können Sie mich durchstellen?",
                    "Ist Herr Klein schon im Haus?"
                ]
            },
            {
                type: 'rule',
                text: "**Nicht erreichbar (Недостъпний):**"
            },
            {
                type: 'list',
                items: [
                    "Tut mir leid, der Platz ist besetzt.",
                    "Er ist gerade nicht am Platz / nicht da.",
                    "Er ist in einer Besprechung."
                ]
            },
            {
                type: 'rule',
                text: "**Nachrichten (Повідомлення):**"
            },
            {
                type: 'list',
                items: [
                    "Kann ich ihm etwas ausrichten?",
                    "Soll er zurückrufen?",
                    "Ich rufe später noch einmal an."
                ]
            }
        ]
    },

    // ==========================================
    // LEKTION 5: Gesund & Fit (Lektion 12)
    // ==========================================
    {
        id: "a2-l5-reflexive-verben",
        title: "Reflexive Verben",
        description: "sich freuen, sich ärgern... (Зворотні дієслова)",
        content: [
            {
                type: 'rule',
                text: "Зворотні дієслова вживаються зі зворотнім займенником **sich** (себе)."
            },
            {
                type: 'table',
                headers: ['Person', 'Pronomen (Akk)'],
                rows: [
                    ['ich', 'mich'],
                    ['du', 'dich'],
                    ['er/sie/es', 'sich'],
                    ['wir', 'uns'],
                    ['ihr', 'euch'],
                    ['sie/Sie', 'sich']
                ]
            },
            {
                type: 'examples',
                text: "- Ich freue **mich**.\n- Du ärgerst **dich**.\n- Wir treffen **uns**."
            }
        ]
    },
    {
        id: "a2-l5-verben-praepositionen",
        title: "Verben mit Präpositionen",
        description: "warten auf, denken an... (Дієслова з прийменниками)",
        content: [
            {
                type: 'rule',
                text: "Багато дієслів мають фіксовані прийменники. Їх треба вчити разом!"
            },
            {
                type: 'table',
                headers: ['Präposition', 'Kasus', 'Verben'],
                rows: [
                    ['auf', 'Akkusativ', 'warten, sich freuen, Lust haben'],
                    ['über', 'Akkusativ', 'sprechen, sich ärgern, sich freuen, berichten'],
                    ['für', 'Akkusativ', 'sich interessieren, danken'],
                    ['an', 'Akkusativ', 'denken, sich erinnern'],
                    ['mit', 'Dativ', 'sprechen, telefonieren, sich treffen, zufrieden sein'],
                    ['von', 'Dativ', 'träumen, erzählen']
                ]
            },
            {
                type: 'tip',
                text: "**Warten auf** (+ Akk) -> Ich warte auf **den** Bus.\n**Träumen von** (+ Dat) -> Ich träume von **einem** Haus."
            }
        ]
    },
    {
        id: "a2-l5-wo-da",
        title: "Fragewörter: Wo(r)+... / Da(r)+...",
        description: "Worauf? Darauf. (Запитання про речі)",
        content: [
            {
                type: 'rule',
                text: "**Для речей та понять:**\nЗапитання: **Wo** + (r) + Präposition\nВідповідь: **Da** + (r) + Präposition\n\n*(r) додається, якщо прийменник починається на голосну.*"
            },
            {
                type: 'examples',
                text: "- **Worauf** wartest du? (Auf was?)\n- Ich warte **darauf**, dass der Bus kommt.\n\n- **Wofür** interessierst du dich?\n- Ich interessiere mich **dafür**."
            },
            {
                type: 'rule',
                text: "**Для людей:** використовуємо прийменник + Wen/Wem."
            },
            {
                type: 'examples',
                text: "- **Auf wen** wartest du? (Не Worauf!)\n- Ich warte auf **meinen Bruder**."
            }
        ]
    },
    {
        id: "a2-l5-kommunikation",
        title: "Kommunikation: Interessen & Meinung",
        description: "Вираження думки, інтереси, реєстрація.",
        content: [
            {
                type: 'rule',
                text: "**Sich anmelden (Реєстрація):**"
            },
            {
                type: 'list',
                items: [
                    "Ich interessiere mich für einen Tanzkurs.",
                    "Wann findet das statt?",
                    "Wie viel kostet das?",
                    "Gibt es eine Ermäßigung für Studenten?"
                ]
            },
            {
                type: 'rule',
                text: "**Nach Interessen fragen:**"
            },
            {
                type: 'list',
                items: [
                    "Wofür interessierst du dich?",
                    "Woran denkst du gern?",
                    "Worüber ärgerst du dich oft?"
                ]
            },
            {
                type: 'rule',
                text: "**Meinung ausdrücken:**"
            },
            {
                type: 'list',
                items: [
                    "Das finde ich interessant / langweilig.",
                    "Ehrlich gesagt...",
                    "Das ist doch klar.",
                    "Das finde ich etwas übertrieben."
                ]
            }
        ]
    },

    // ==========================================
    // LEKTION 6: Schule & Beruf (Lektion 13)
    // ==========================================
    {
        id: "a2-l6-modal-praeteritum",
        title: "Modalverben: Präteritum",
        description: "musste, durfte, wollte, konnte...",
        content: [
            {
                type: 'rule',
                text: "Минулий час для модальних дієслів утворюється без допоміжних дієслів. Зверніть увагу: умлаут (ä, ö, ü) зникає."
            },
            {
                type: 'table',
                headers: ['Person', 'müssen', 'können', 'wollen', 'dürfen'],
                rows: [
                    ['ich', 'musste', 'konnte', 'wollte', 'durfte'],
                    ['du', 'musstest', 'konntest', 'wolltest', 'durftest'],
                    ['er/sie/es', 'musste', 'konnte', 'wollte', 'durfte'],
                    ['wir', 'mussten', 'konnten', 'wollten', 'durften'],
                    ['ihr', 'musstet', 'konntet', 'wolltet', 'durftet'],
                    ['sie/Sie', 'mussten', 'konnten', 'wollten', 'durften']
                ]
            },
            {
                type: 'examples',
                text: "- Ich **wollte** als Kind Astronaut werden (хотів).\n- Wir **mussten** immer Hausaufgaben machen (мусили)."
            }
        ]
    },
    {
        id: "a2-l6-dass",
        title: "Konjunktion: dass",
        description: "Підрядні речення з 'що' (dass).",
        content: [
            {
                type: 'rule',
                text: "Сполучник **dass** (що) вводить підрядне речення. Відмінюване дієслово стоїть у **кінці**."
            },
            {
                type: 'table',
                headers: ['Hauptsatz', 'Konjunktion', 'Mittelfeld', 'Ende (Verb)'],
                rows: [
                    ['Ich finde,', 'dass', 'man viel sprechen', 'muss.'],
                    ['Es ist wichtig,', 'dass', 'man einen guten Abschluss', 'hat.'],
                    ['Es tut mir leid,', 'dass', 'du krank', 'bist.']
                ]
            },
            {
                type: 'rule',
                text: "Вживається для вираження думки, почуттів або знань."
            }
        ]
    },
    {
        id: "a2-l6-kommunikation",
        title: "Kommunikation: Ausbildung & Meinung",
        description: "Розповідь про шкільні часи та вираження думки.",
        content: [
            {
                type: 'rule',
                text: "**Schulzeit (Про школу):**"
            },
            {
                type: 'list',
                items: [
                    "Ich bin mit 6 Jahren in die Schule gekommen.",
                    "Mein Lieblingsfach war Mathe / meine Lieblingslehrerin war Frau X.",
                    "Physik habe ich gehasst.",
                    "Ich wollte Tierarzt werden, aber ich konnte nicht gut Blut sehen."
                ]
            },
            {
                type: 'rule',
                text: "**Meinung sagen/fragen (Думка):**"
            },
            {
                type: 'list',
                items: [
                    "Findest du auch, dass ...?",
                    "Ich finde/denke/glaube, dass ...",
                    "Es ist wichtig / schön, dass ..."
                ]
            }
        ]
    },

    // ==========================================
    // LEKTION 7: Feste & Feiern (Lektion 14)
    // ==========================================
    {
        id: "a2-l7-dativ-objekt",
        title: "Dativ als Objekt",
        description: "Wem? (Кому?) - schenken, helfen...",
        content: [
            {
                type: 'rule',
                text: "Деякі дієслова вимагають Dativ (wem?)."
            },
            {
                type: 'table',
                headers: ['Subjekt', 'Verb', 'Dativ (Wem?)', 'Akkusativ (Was?)'],
                rows: [
                    ['Ich', 'schenke', 'meinem Mann', 'ein Buch.'],
                    ['Ich', 'kaufe', 'meinem Kind', 'eine Puppe.'],
                    ['Ich', 'schicke', 'meiner Mutter', 'Blumen.']
                ]
            },
            {
                type: 'tip',
                text: "**Pronomen im Dativ:**\n- mir, dir, ihm, ihr, ihm, uns, euch, ihnen/Ihnen."
            }
        ]
    },
    {
        id: "a2-l7-stellung-objekte",
        title: "Stellung der Objekte",
        description: "Порядок слів (Dativ перед Akkusativ).",
        content: [
            {
                type: 'rule',
                text: "Якщо в реченні є два об'єкти (іменники): Dativ стоїть **перед** Akkusativ."
            },
            {
                type: 'example',
                text: "Ich schenke **meinem Freund** (Dat) **einen Füller** (Akk)."
            },
            {
                type: 'rule',
                text: "УВАГА: Якщо Akkusativ є займенником (es, ihn, sie), то він стоїть **перед** Dativ."
            },
            {
                type: 'example',
                text: "Ich schenke **ihn** (den Füller) **meinem Freund**."
            }
        ]
    },
    {
        id: "a2-l7-verbindung-von",
        title: "Präposition: von + Dativ",
        description: "Від кого? (von meinem Kollege)",
        content: [
            {
                type: 'rule',
                text: "Прийменник **von** завжди вимагає Dativ."
            },
            {
                type: 'table',
                headers: ['von + Dativ'],
                rows: [
                    ['von meinem Kollegen (m)'],
                    ['von meinem Kind (n)'],
                    ['von meiner Kollegin (f)'],
                    ['von meinen Nachbarn (pl)']
                ]
            }
        ]
    },
    {
        id: "a2-l7-kommunikation",
        title: "Kommunikation: Feste & Einladung",
        description: "Привітання, запрошення та звички святкування.",
        content: [
            {
                type: 'rule',
                text: "**Glückwünsche (Привітання):**"
            },
            {
                type: 'list',
                items: [
                    "Alles Gute (zum Geburtstag)!",
                    "Herzlichen Glückwunsch!",
                    "Viel Glück/Erfolg!"
                ]
            },
            {
                type: 'rule',
                text: "**Über Feste berichten (Звички):**"
            },
            {
                type: 'list',
                items: [
                    "Unser Fest findet am ... statt.",
                    "Wir feiern zu Hause / im Restaurant.",
                    "Es gibt Essen/Trinken/Musik.",
                    "Natürlich haben wir auch Musik."
                ]
            }
        ]
    }
];
