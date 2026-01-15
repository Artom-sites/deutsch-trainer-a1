// src/components/RulesTab.jsx
// Вкладка "Правила" - граматичні таблиці та правила
import React, { useState } from 'react';
import {
    personalPronouns,
    articles,
    possessivePronouns,
    prepositions,
    verbConjugation,
    sentenceStructure,
    numbers,
    time
} from '../data/grammarRules';
import { grammarA2 } from '../data/a2/grammar';
import { ChevronDown, ChevronUp, ChevronLeft, BookOpen, Users, FileText, Clock, Hash, MessageCircle, Layers, Move, Sparkles, Lightbulb, List } from 'lucide-react';

// Rule Card Preview Component
const RuleCard = ({ rule, icon: Icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                padding: 16,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                border: '1px solid var(--stroke)',
                borderRadius: 16,
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'all 0.2s ease'
            }}
        >
            <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: 'linear-gradient(135deg, var(--orange), #FF8C42)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                <Icon size={22} color="white" />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-0)',
                    marginBottom: 2
                }}>
                    {rule.title}
                </div>
                <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-2)'
                }}>
                    {rule.titleUa || rule.description}
                </div>
            </div>
            <ChevronDown size={18} color="var(--text-2)" style={{ transform: 'rotate(-90deg)' }} />
        </button>
    );
};

// Table Component for Grammar Tables
const GrammarTable = ({ headers, rows, highlightColumns = [] }) => {
    return (
        <div style={{
            overflowX: 'auto',
            borderRadius: 14,
            border: '1px solid var(--stroke)',
            background: 'rgba(0,0,0,0.2)',
            marginBottom: 16
        }}>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.85rem'
            }}>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} style={{
                                padding: '12px 14px',
                                textAlign: 'left',
                                fontWeight: 700,
                                color: 'var(--text-1)',
                                borderBottom: '1px solid var(--stroke)',
                                background: 'rgba(255,255,255,0.03)',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{
                                    padding: '12px 14px',
                                    borderBottom: rowIndex < rows.length - 1 ? '1px solid var(--stroke)' : 'none',
                                    color: highlightColumns.includes(cellIndex) ? 'var(--orange)' : 'var(--text-0)',
                                    fontWeight: highlightColumns.includes(cellIndex) ? 600 : 400
                                }}>
                                    {/* Handle markdown bold in table cells */}
                                    <span dangerouslySetInnerHTML={{
                                        __html: typeof cell === 'string'
                                            ? cell.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-0)">$1</strong>')
                                            : cell
                                    }} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Section Header
const SectionTitle = ({ children, color = 'var(--orange)' }) => (
    <div style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        color: color,
        marginTop: 24,
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    }}>
        {children}
    </div>
);

// Generic Detail View for A2 Content
const GenericGrammarDetail = ({ data, onBack }) => {
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {data.content.map((block, index) => {
                    switch (block.type) {
                        case 'rule':
                            return (
                                <div key={index} style={{
                                    padding: 16,
                                    background: 'rgba(255,255,255,0.03)',
                                    borderLeft: '3px solid var(--orange)',
                                    borderRadius: 4,
                                    color: 'var(--text-1)',
                                    lineHeight: 1.5
                                }}>
                                    <div dangerouslySetInnerHTML={{
                                        __html: block.text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-0)">$1</strong>').replace(/\n/g, '<br/>')
                                    }} />
                                </div>
                            );
                        case 'table':
                            return (
                                <GrammarTable
                                    key={index}
                                    headers={block.headers}
                                    rows={block.rows}
                                    highlightColumns={[block.headers.length - 1]} // Highlight last column guess
                                />
                            );
                        case 'example':
                        case 'examples':
                            return (
                                <div key={index} style={{
                                    padding: 14,
                                    background: 'rgba(242, 106, 27, 0.08)',
                                    border: '1px solid rgba(242, 106, 27, 0.15)',
                                    borderRadius: 12,
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: '0.85rem', fontWeight: 700, color: 'var(--orange)' }}>
                                        <Lightbulb size={16} /> Приклад
                                    </div>
                                    <div dangerouslySetInnerHTML={{
                                        __html: (block.text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
                                    }} style={{ color: 'var(--text-1)', fontSize: '0.95rem' }} />
                                </div>
                            );
                        case 'list':
                            return (
                                <div key={index} style={{
                                    padding: 14,
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 12,
                                    border: '1px solid var(--stroke)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-2)' }}>
                                        <List size={16} /> Список
                                    </div>
                                    <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--text-1)', lineHeight: 1.6 }}>
                                        {block.items.map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{
                                                __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-0)">$1</strong>')
                                            }} />
                                        ))}
                                    </ul>
                                </div>
                            );
                        case 'tip':
                            return (
                                <div key={index} style={{
                                    padding: 14,
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                    borderRadius: 12,
                                    color: 'var(--text-1)'
                                }}>
                                    <div style={{ fontWeight: 700, color: '#22c55e', marginBottom: 6 }}>💡 Підказка</div>
                                    <div dangerouslySetInnerHTML={{
                                        __html: block.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
                                    }} />
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>

            <div style={{ height: 100 }} />
        </div>
    );
};


// Question Badge
const QuestionBadge = ({ de, ua }) => (
    <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        background: 'rgba(242, 106, 27, 0.15)',
        border: '1px solid rgba(242, 106, 27, 0.3)',
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8
    }}>
        <span style={{ fontWeight: 700, color: 'var(--orange)' }}>{de}</span>
        <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>({ua})</span>
    </div>
);

// Example Card
const ExampleCard = ({ de, ua }) => (
    <div style={{
        padding: 12,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--stroke)',
        borderRadius: 12,
        marginBottom: 8
    }}>
        <div style={{ fontWeight: 500, color: 'var(--text-0)', marginBottom: 4 }}>→ {de}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>{ua}</div>
    </div>
);

// ==========================================
// DETAIL VIEWS FOR EACH RULE
// ==========================================

const PersonalPronounsDetail = ({ onBack }) => {
    const data = personalPronouns;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            <SectionTitle>Питання до відмінків</SectionTitle>
            <div style={{ marginBottom: 8 }}>
                <QuestionBadge de={data.questions.nominativ.de} ua={data.questions.nominativ.ua} />
                <QuestionBadge de={data.questions.akkusativ.de} ua={data.questions.akkusativ.ua} />
                <QuestionBadge de={data.questions.dativ.de} ua={data.questions.dativ.ua} />
            </div>

            <SectionTitle>Таблиця відмінків</SectionTitle>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', marginBottom: 12 }}>
                Особові займенники у всіх відмінках:
            </p>
            <GrammarTable
                headers={['Nominativ', 'Akkusativ', 'Dativ', 'Переклад']}
                rows={data.table.map(row => [row.nominativ, row.akkusativ, row.dativ, row.ua])}
                highlightColumns={[1, 2]}
            />

            <SectionTitle color="var(--orange)">Коли використовувати?</SectionTitle>
            <div style={{ marginBottom: 12 }}>
                <strong style={{ color: 'var(--orange)' }}>Akkusativ</strong>
                <span style={{ color: 'var(--text-2)' }}> ({data.questions.akkusativ.de} {data.questions.akkusativ.ua}):</span>
            </div>
            {data.examples.akkusativ.map((ex, i) => (
                <ExampleCard key={i} de={ex.de} ua={ex.ua} />
            ))}

            <div style={{ marginTop: 16, marginBottom: 12 }}>
                <strong style={{ color: 'var(--ok)' }}>Dativ</strong>
                <span style={{ color: 'var(--text-2)' }}> ({data.questions.dativ.de} {data.questions.dativ.ua}):</span>
            </div>
            {data.examples.dativ.map((ex, i) => (
                <ExampleCard key={i} de={ex.de} ua={ex.ua} />
            ))}

            <div style={{ height: 100 }} />
        </div>
    );
};

const ArticlesDetail = ({ onBack }) => {
    const data = articles;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            <SectionTitle>Питання до відмінків</SectionTitle>
            <div style={{ marginBottom: 8 }}>
                <QuestionBadge de={data.questions.nominativ.de} ua={data.questions.nominativ.ua} />
                <QuestionBadge de={data.questions.akkusativ.de} ua={data.questions.akkusativ.ua} />
                <QuestionBadge de={data.questions.dativ.de} ua={data.questions.dativ.ua} />
            </div>

            <SectionTitle>{data.definite.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Відмінок', 'Maskulin', 'Feminin', 'Neutrum', 'Plural']}
                rows={data.definite.table.map(row => [row.case, row.maskulin, row.feminin, row.neutrum, row.plural])}
                highlightColumns={[1, 2, 3, 4]}
            />

            <SectionTitle>{data.indefinite.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Відмінок', 'Maskulin', 'Feminin', 'Neutrum', 'Plural']}
                rows={data.indefinite.table.map(row => [row.case, row.maskulin, row.feminin, row.neutrum, row.plural])}
                highlightColumns={[1, 2, 3, 4]}
            />

            <SectionTitle>{data.negative.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Відмінок', 'Maskulin', 'Feminin', 'Neutrum', 'Plural']}
                rows={data.negative.table.map(row => [row.case, row.maskulin, row.feminin, row.neutrum, row.plural])}
                highlightColumns={[1, 2, 3, 4]}
            />

            <SectionTitle>Приклади</SectionTitle>
            {data.examples.map((ex, i) => (
                <ExampleCard key={i} de={ex.de} ua={ex.ua} />
            ))}

            <div style={{ height: 100 }} />
        </div>
    );
};

const PrepositionsDetail = ({ onBack }) => {
    const data = prepositions;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            {/* Akkusativ */}
            <SectionTitle color="var(--orange)">{data.akkusativ.titleUa}</SectionTitle>
            <QuestionBadge de={data.akkusativ.question.de} ua={data.akkusativ.question.ua} />
            <div style={{
                padding: 12,
                background: 'rgba(242, 106, 27, 0.1)',
                border: '1px solid rgba(242, 106, 27, 0.2)',
                borderRadius: 12,
                marginTop: 12,
                marginBottom: 16,
                fontSize: '0.85rem',
                color: 'var(--text-1)'
            }}>
                💡 <strong>{data.akkusativ.mnemonic}</strong>
            </div>
            <GrammarTable
                headers={['Прийменник', 'Переклад', 'Приклад']}
                rows={data.akkusativ.list.map(p => [p.prep, p.ua, p.example])}
                highlightColumns={[0]}
            />

            {/* Dativ */}
            <SectionTitle color="var(--ok)">{data.dativ.titleUa}</SectionTitle>
            <QuestionBadge de={data.dativ.question.de} ua={data.dativ.question.ua} />
            <div style={{
                padding: 12,
                background: 'rgba(46, 204, 113, 0.1)',
                border: '1px solid rgba(46, 204, 113, 0.2)',
                borderRadius: 12,
                marginTop: 12,
                marginBottom: 16,
                fontSize: '0.85rem',
                color: 'var(--text-1)'
            }}>
                💡 <strong>{data.dativ.mnemonic}</strong>
            </div>
            <GrammarTable
                headers={['Прийменник', 'Переклад', 'Приклад']}
                rows={data.dativ.list.map(p => [p.prep, p.ua, p.example])}
                highlightColumns={[0]}
            />

            {/* Wechselpräpositionen */}
            <SectionTitle color="var(--blue)">{data.wechsel.titleUa}</SectionTitle>
            <div style={{
                padding: 12,
                background: 'rgba(87, 166, 255, 0.1)',
                border: '1px solid rgba(87, 166, 255, 0.2)',
                borderRadius: 12,
                marginBottom: 16,
                fontSize: '0.9rem',
                color: 'var(--text-1)'
            }}>
                ⚡ {data.wechsel.description}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {data.wechsel.list.map((p, i) => (
                    <span key={i} style={{
                        padding: '6px 12px',
                        background: 'rgba(87, 166, 255, 0.15)',
                        border: '1px solid rgba(87, 166, 255, 0.3)',
                        borderRadius: 8,
                        fontSize: '0.9rem'
                    }}>
                        <strong style={{ color: 'var(--blue)' }}>{p.prep}</strong>
                        <span style={{ color: 'var(--text-2)', marginLeft: 6 }}>{p.ua}</span>
                    </span>
                ))}
            </div>
            {data.wechsel.examples.map((ex, i) => (
                <div key={i} style={{
                    padding: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--stroke)',
                    borderRadius: 12,
                    marginBottom: 8
                }}>
                    <div style={{ marginBottom: 8 }}>
                        <span style={{ color: 'var(--orange)', fontWeight: 600 }}>Akkusativ:</span>
                        <span style={{ marginLeft: 8, color: 'var(--text-0)' }}>{ex.akkusativ}</span>
                    </div>
                    <div>
                        <span style={{ color: 'var(--ok)', fontWeight: 600 }}>Dativ:</span>
                        <span style={{ marginLeft: 8, color: 'var(--text-0)' }}>{ex.dativ}</span>
                    </div>
                    <div style={{ color: 'var(--text-2)', fontSize: '0.85rem', marginTop: 8 }}>{ex.ua}</div>
                </div>
            ))}

            <div style={{ height: 100 }} />
        </div>
    );
};

const VerbConjugationDetail = ({ onBack }) => {
    const data = verbConjugation;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            {/* Regular Endings */}
            <SectionTitle>{data.regularEndings.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Особа', 'Закінчення', 'Приклад (machen)']}
                rows={data.regularEndings.table.map(row => [row.person, row.ending, row.example])}
                highlightColumns={[1, 2]}
            />

            {/* Stem Change */}
            <SectionTitle>{data.stemChange.titleUa}</SectionTitle>
            {data.stemChange.types.map((type, i) => (
                <div key={i} style={{
                    padding: 14,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--stroke)',
                    borderRadius: 12,
                    marginBottom: 12
                }}>
                    <div style={{
                        fontWeight: 700,
                        color: 'var(--orange)',
                        marginBottom: 8,
                        fontSize: '1rem'
                    }}>
                        {type.change}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 6,
                        marginBottom: 8
                    }}>
                        {type.verbs.map((v, j) => (
                            <span key={j} style={{
                                padding: '4px 10px',
                                background: 'rgba(242, 106, 27, 0.1)',
                                borderRadius: 6,
                                fontSize: '0.85rem',
                                color: 'var(--text-0)'
                            }}>
                                {v}
                            </span>
                        ))}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                        ℹ️ {type.note}
                    </div>
                </div>
            ))}

            {/* Modal Verbs */}
            <SectionTitle>{data.modalVerbs.titleUa}</SectionTitle>
            <div style={{ overflowX: 'auto' }}>
                <GrammarTable
                    headers={['Дієслово', 'ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie', 'Переклад']}
                    rows={data.modalVerbs.table.map(row => [
                        row.verb, row.ich, row.du, row.er, row.wir, row.ihr, row.sie, row.ua
                    ])}
                    highlightColumns={[0]}
                />
            </div>
            <div style={{
                padding: 12,
                background: 'rgba(242, 106, 27, 0.1)',
                border: '1px solid rgba(242, 106, 27, 0.2)',
                borderRadius: 12,
                marginTop: 12,
                fontSize: '0.9rem',
                color: 'var(--text-1)'
            }}>
                📌 {data.modalVerbs.rule}
            </div>
            {data.modalVerbs.examples.map((ex, i) => (
                <ExampleCard key={i} de={ex.de} ua={ex.ua} />
            ))}

            {/* Trennbare Verben */}
            <SectionTitle>{data.trennbar.titleUa}</SectionTitle>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', marginBottom: 12 }}>
                {data.trennbar.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {data.trennbar.prefixes.map((p, i) => (
                    <span key={i} style={{
                        padding: '6px 12px',
                        background: 'rgba(87, 166, 255, 0.15)',
                        border: '1px solid rgba(87, 166, 255, 0.3)',
                        borderRadius: 8,
                        color: 'var(--blue)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }}>
                        {p}
                    </span>
                ))}
            </div>
            {data.trennbar.examples.map((ex, i) => (
                <div key={i} style={{
                    padding: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--stroke)',
                    borderRadius: 12,
                    marginBottom: 8
                }}>
                    <div style={{ fontWeight: 700, color: 'var(--blue)', marginBottom: 4 }}>
                        {ex.infinitiv}
                    </div>
                    <div style={{ color: 'var(--text-0)' }}>{ex.conjugated}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: 4 }}>{ex.ua}</div>
                </div>
            ))}

            <div style={{ height: 100 }} />
        </div>
    );
};

const NumbersDetail = ({ onBack }) => {
    const data = numbers;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            <SectionTitle>0-20</SectionTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {data.basic.map(n => (
                    <span key={n.num} style={{
                        padding: '8px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 10,
                        minWidth: 80,
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 700, color: 'var(--orange)' }}>{n.num}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-0)' }}>{n.de}</div>
                    </span>
                ))}
            </div>

            <SectionTitle>Десятки</SectionTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {data.tens.map(n => (
                    <span key={n.num} style={{
                        padding: '8px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 10,
                        minWidth: 100,
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 700, color: 'var(--ok)' }}>{n.num}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-0)' }}>{n.de}</div>
                    </span>
                ))}
            </div>

            <SectionTitle>Правило для 21-99</SectionTitle>
            <div style={{
                padding: 14,
                background: 'rgba(242, 106, 27, 0.1)',
                border: '1px solid rgba(242, 106, 27, 0.2)',
                borderRadius: 12,
                marginBottom: 16,
                fontSize: '0.9rem',
                color: 'var(--text-1)'
            }}>
                📌 {data.rule}
            </div>

            <SectionTitle>Приклади</SectionTitle>
            <GrammarTable
                headers={['Число', 'Німецькою']}
                rows={data.examples.map(n => [n.num.toString(), n.de])}
                highlightColumns={[1]}
            />

            <div style={{ height: 100 }} />
        </div>
    );
};

const TimeDetail = ({ onBack }) => {
    const data = time;
    return (
        <div className="screen">
            <button onClick={onBack} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', color: 'var(--text-1)',
                fontSize: '0.9rem', cursor: 'pointer', marginBottom: 16, padding: 0
            }}>
                <ChevronLeft size={20} /> Назад
            </button>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 4 }}>
                {data.title}
            </h1>
            <p style={{ color: 'var(--text-2)', marginBottom: 20 }}>{data.titleUa}</p>

            <SectionTitle>{data.official.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Час', 'Німецькою']}
                rows={data.official.examples.map(t => [t.time, t.de])}
                highlightColumns={[1]}
            />

            <SectionTitle>{data.informal.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Час', 'Німецькою', 'Українською']}
                rows={data.informal.examples.map(t => [t.time, t.de, t.ua])}
                highlightColumns={[1]}
            />
            <div style={{
                padding: 14,
                background: 'rgba(229, 62, 62, 0.15)',
                border: '1px solid rgba(229, 62, 62, 0.3)',
                borderRadius: 12,
                marginTop: 12,
                fontSize: '0.9rem',
                color: '#ff7b7b'
            }}>
                ⚠️ {data.informal.note}
            </div>

            <SectionTitle>Питання про час</SectionTitle>
            {data.questions.map((q, i) => (
                <ExampleCard key={i} de={q.de} ua={q.ua} />
            ))}

            <div style={{ height: 100 }} />
        </div>
    );
};

// ==========================================
// MAIN RULES TAB
// ==========================================

const RulesTab = () => {
    const [selectedRule, setSelectedRule] = useState(null);

    const rules = [
        { data: personalPronouns, icon: Users },
        { data: articles, icon: FileText },
        { data: possessivePronouns, icon: Layers },
        { data: prepositions, icon: Move },
        { data: verbConjugation, icon: BookOpen },
        { data: sentenceStructure, icon: MessageCircle },
        { data: numbers, icon: Hash },
        { data: time, icon: Clock },
        // A2 Rules
        ...grammarA2.map(rule => ({
            data: rule,
            icon: Sparkles // Or map dynamically based on rule.id/title if needed
        }))
    ];

    // Find if selectedRule is an object (A2) or ID (A1)
    const activeRuleData = rules.find(r => r.data.id === selectedRule)?.data;

    // Render detail view
    if (selectedRule) {
        // Check for A1 specific IDs that have custom components
        if (selectedRule === 'personalpronomen') return <PersonalPronounsDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'artikel') return <ArticlesDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'praepositionen') return <PrepositionsDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'verbkonjugation') return <VerbConjugationDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'zahlen') return <NumbersDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'uhrzeit') return <TimeDetail onBack={() => setSelectedRule(null)} />;

        // Fallback for A2 generic rules
        if (activeRuleData) {
            return <GenericGrammarDetail data={activeRuleData} onBack={() => setSelectedRule(null)} />;
        }
    }

    // Main list view
    return (
        <div className="screen">
            <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-0)', margin: '0 0 4px' }}>
                    Правила 📖
                </h1>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', margin: 0 }}>
                    Граматика A1 & A2
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 100 }}>
                {rules.map(({ data, icon }) => (
                    <RuleCard
                        key={data.id}
                        rule={data}
                        icon={icon}
                        onClick={() => setSelectedRule(data.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RulesTab;
