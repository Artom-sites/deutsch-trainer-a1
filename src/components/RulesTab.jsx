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

// Rule Card Preview Component (Compact List Item Style)
const RuleCard = ({ rule, onClick, accentColor = 'var(--orange)' }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                padding: '12px 14px',
                background: 'transparent',
                border: 'none',
                borderLeft: `3px solid ${accentColor}`,
                borderRadius: 0,
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                transition: 'background 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--text-0)',
                    marginBottom: 2,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {rule.title}
                </div>
                <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-2)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {rule.titleUa || rule.description}
                </div>
            </div>
            <ChevronDown size={16} color="var(--text-2)" style={{ transform: 'rotate(-90deg)', flexShrink: 0 }} />
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
        <div className="screen" style={{ paddingBottom: 100 }}>
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

            {/* Basic 0-20 */}
            <SectionTitle>Кардинальні числа (0-20)</SectionTitle>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 8,
                marginBottom: 16
            }}>
                {data.basic.map(n => (
                    <div key={n.num} style={{
                        padding: '10px 8px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 12,
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--orange)' }}>{n.num}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-0)' }}>{n.de}</div>
                    </div>
                ))}
            </div>

            {/* Tens & Large Numbers */}
            <SectionTitle>Десятки та великі числа</SectionTitle>
            <GrammarTable
                headers={['#', 'Німецькою']}
                rows={data.tens.map(n => [n.num.toLocaleString(), n.de])}
                highlightColumns={[1]}
            />

            {/* Rule */}
            <div style={{
                padding: 14,
                background: 'rgba(242, 106, 27, 0.1)',
                border: '1px solid rgba(242, 106, 27, 0.2)',
                borderRadius: 12,
                marginBottom: 20,
                fontSize: '0.9rem',
                color: 'var(--text-1)'
            }}>
                📌 {data.rule}
            </div>

            {/* Ordinal Numbers */}
            {data.ordinal && (
                <>
                    <SectionTitle>{data.ordinal.titleUa}</SectionTitle>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginBottom: 12 }}>{data.ordinal.description}</p>
                    <GrammarTable
                        headers={['#', 'Німецькою', 'Українською']}
                        rows={data.ordinal.table.map(o => [o.num + '.', o.de, o.ua])}
                        highlightColumns={[1]}
                    />
                </>
            )}

            {/* Dates */}
            {data.datum && (
                <>
                    <SectionTitle>{data.datum.titleUa}</SectionTitle>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginBottom: 12 }}>{data.datum.description}</p>

                    <div style={{ marginBottom: 12, fontWeight: 600, color: 'var(--text-0)' }}>Питання:</div>
                    {data.datum.questions.map((q, i) => <ExampleCard key={i} de={q.de} ua={q.ua} />)}

                    <div style={{ marginBottom: 12, fontWeight: 600, color: 'var(--text-0)', marginTop: 16 }}>Відповіді:</div>
                    {data.datum.answers.map((a, i) => <ExampleCard key={i} de={a.de} ua={a.ua} />)}

                    <div style={{ marginBottom: 12, fontWeight: 600, color: 'var(--text-0)', marginTop: 16 }}>Прийменники:</div>
                    <GrammarTable
                        headers={['Німецькою', 'Українською', 'Примітка']}
                        rows={data.datum.prepositions.map(p => [p.de, p.ua, p.note])}
                        highlightColumns={[0]}
                    />

                    <div style={{ marginBottom: 12, fontWeight: 600, color: 'var(--text-0)', marginTop: 16 }}>Місяці:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {data.datum.months.map((m, i) => (
                            <span key={i} style={{
                                padding: '6px 10px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--stroke)',
                                borderRadius: 8,
                                fontSize: '0.85rem'
                            }}>
                                <span style={{ color: 'var(--orange)' }}>{m.de}</span>
                                <span style={{ color: 'var(--text-2)' }}> — {m.ua}</span>
                            </span>
                        ))}
                    </div>
                </>
            )}

            {/* Years */}
            {data.years && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.years.titleUa}</SectionTitle>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginBottom: 12 }}>{data.years.rule}</p>
                    <GrammarTable
                        headers={['Рік', 'Німецькою', 'Примітка']}
                        rows={data.years.examples.map(y => [y.year.toString(), y.de, y.note])}
                        highlightColumns={[1]}
                    />
                    {data.years.phrases.map((p, i) => <ExampleCard key={i} de={p.de} ua={p.ua} />)}
                </>
            )}

            {/* Birthday */}
            {data.geburtstag && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.geburtstag.titleUa}</SectionTitle>
                    {data.geburtstag.phrases.map((p, i) => <ExampleCard key={i} de={p.de} ua={p.ua} />)}
                </>
            )}

            {/* Age */}
            {data.alter && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.alter.titleUa}</SectionTitle>
                    {data.alter.phrases.map((p, i) => <ExampleCard key={i} de={p.de} ua={p.ua} />)}
                </>
            )}
        </div>
    );
};

const TimeDetail = ({ onBack }) => {
    const data = time;
    return (
        <div className="screen" style={{ paddingBottom: 100 }}>
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

            {/* Official Time */}
            <SectionTitle>{data.official.titleUa}</SectionTitle>
            <GrammarTable
                headers={['Час', 'Німецькою']}
                rows={data.official.examples.map(t => [t.time, t.de])}
                highlightColumns={[1]}
            />

            {/* Informal Time */}
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

            {/* Questions */}
            <SectionTitle>Питання про час</SectionTitle>
            {data.questions.map((q, i) => (
                <ExampleCard key={i} de={q.de} ua={q.ua} />
            ))}

            {/* Day Parts */}
            {data.tageszeiten && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.tageszeiten.titleUa}</SectionTitle>
                    <GrammarTable
                        headers={['Частина дня', 'Час', 'Українською', 'Прийменник']}
                        rows={data.tageszeiten.parts.map(p => [p.de, p.time, p.ua, p.prep])}
                        highlightColumns={[0]}
                    />
                    <div style={{ marginTop: 12, fontWeight: 600, color: 'var(--text-0)' }}>Приклади:</div>
                    {data.tageszeiten.examples.map((e, i) => <ExampleCard key={i} de={e.de} ua={e.ua} />)}
                </>
            )}

            {/* Weekdays */}
            {data.wochentage && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.wochentage.titleUa}</SectionTitle>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                        {data.wochentage.days.map((d, i) => (
                            <span key={i} style={{
                                padding: '8px 12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--stroke)',
                                borderRadius: 10,
                                textAlign: 'center'
                            }}>
                                <div style={{ fontWeight: 700, color: 'var(--orange)' }}>{d.de}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>{d.ua}</div>
                            </span>
                        ))}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-0)', marginBottom: 8 }}>Прийменники:</div>
                    {data.wochentage.prepositions.map((p, i) => <ExampleCard key={i} de={p.de} ua={p.ua} />)}
                </>
            )}

            {/* Time Expressions */}
            {data.expressions && (
                <>
                    <SectionTitle style={{ marginTop: 24 }}>{data.expressions.titleUa}</SectionTitle>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {data.expressions.phrases.map((p, i) => (
                            <span key={i} style={{
                                padding: '6px 12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--stroke)',
                                borderRadius: 8,
                                fontSize: '0.9rem'
                            }}>
                                <span style={{ color: 'var(--orange)', fontWeight: 600 }}>{p.de}</span>
                                <span style={{ color: 'var(--text-2)' }}> — {p.ua}</span>
                            </span>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ==========================================
// MAIN RULES TAB
// ==========================================

const RulesTab = () => {
    const [selectedRule, setSelectedRule] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLevel, setActiveLevel] = useState('all'); // 'all', 'a1', 'a2'
    const [expandedCategory, setExpandedCategory] = useState(null);

    // Category definitions with icons
    const CATEGORIES = [
        { id: 'verben', title: 'Verben', titleUa: 'Дієслова', icon: BookOpen, color: '#E74C3C' },
        { id: 'pronomen', title: 'Pronomen', titleUa: 'Займенники', icon: Users, color: '#9B59B6' },
        { id: 'artikel', title: 'Artikel & Substantive', titleUa: 'Артиклі та іменники', icon: FileText, color: '#3498DB' },
        { id: 'praepositionen', title: 'Präpositionen', titleUa: 'Прийменники', icon: Move, color: '#27AE60' },
        { id: 'satzbau', title: 'Satzbau', titleUa: 'Побудова речення', icon: MessageCircle, color: '#F39C12' },
        { id: 'adjektive', title: 'Adjektive', titleUa: 'Прикметники', icon: Sparkles, color: '#1ABC9C' },
        { id: 'zahlen', title: 'Zahlen & Zeit', titleUa: 'Числа та час', icon: Clock, color: '#E67E22' },
    ];

    // Map rule IDs to categories
    const ruleToCategory = {
        // A1
        'personalpronomen': 'pronomen',
        'possessivpronomen': 'pronomen',
        'artikel': 'artikel',
        'verbkonjugation': 'verben',
        'praepositionen': 'praepositionen',
        'satzbau': 'satzbau',
        'zahlen': 'zahlen',
        'uhrzeit': 'zahlen',
        // A2
        'a2-l1-weil': 'satzbau',
        'a2-l1-perfekt-trennbar': 'verben',
        'a2-l1-perfekt-ieren': 'verben',
        'a2-l1-perfekt-nicht-trennbar': 'verben',
        'a2-l1-genitiv-von': 'artikel',
        'a2-l2-wechselpraepositionen': 'praepositionen',
        'a2-l2-verben-position': 'verben',
        'a2-l2-direktionaladverbien': 'praepositionen',
        'a2-l3-indefinitpronomen': 'pronomen',
        'a2-l3-haeufigkeit': 'satzbau',
        'a2-l4-wenn': 'satzbau',
        'a2-l4-sollen-konjunktiv': 'verben',
        'a2-l5-reflexive-verben': 'verben',
        'a2-l5-verben-praepositionen': 'praepositionen',
        'a2-l5-wo-da': 'pronomen',
        'a2-l6-modal-praeteritum': 'verben',
        'a2-l6-dass': 'satzbau',
        'a2-l7-dativ-objekt': 'artikel',
        'a2-l7-stellung-objekte': 'satzbau',
        'a2-l7-verbindung-von': 'praepositionen',
        'a2-l8-konjunktiv2': 'verben',
        'a2-l8-trotzdem': 'satzbau',
        'a2-l9-adjektivdeklination': 'adjektive',
        'a2-l9-komparation': 'adjektive',
        'a2-l10-passiv': 'verben',
        'a2-l10-wasfuer': 'pronomen',
        'a2-l11-lokalpraepositionen': 'praepositionen',
        'a2-l11-praefixe': 'verben',
        'a2-l12-praepositionen-zeit': 'praepositionen',
        'a2-l12-wohin-wo': 'praepositionen',
        'a2-l13-indirekte-fragen': 'satzbau',
        'a2-l13-lassen': 'verben',
        'a2-l14-perfekt-praeteritum': 'verben',
        'a2-l14-als-wenn': 'satzbau',
    };

    // Get level from ID
    const getRuleLevel = (id) => {
        if (id.startsWith('a2-')) return 'a2';
        return 'a1';
    };

    // Build rules array
    const rules = [
        { data: personalPronouns, icon: Users },
        { data: articles, icon: FileText },
        { data: possessivePronouns, icon: Layers },
        { data: prepositions, icon: Move },
        { data: verbConjugation, icon: BookOpen },
        { data: sentenceStructure, icon: MessageCircle },
        { data: numbers, icon: Hash },
        { data: time, icon: Clock },
        ...grammarA2.map(rule => ({
            data: rule,
            icon: Sparkles
        }))
    ];

    // Filter rules
    const filteredRules = rules.filter(({ data }) => {
        // Level filter
        const level = getRuleLevel(data.id);
        if (activeLevel !== 'all' && level !== activeLevel) return false;
        // Search filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const title = (data.title || '').toLowerCase();
            const titleUa = (data.titleUa || data.description || '').toLowerCase();
            if (!title.includes(q) && !titleUa.includes(q)) return false;
        }
        return true;
    });

    // Group by category
    const groupedRules = CATEGORIES.map(cat => ({
        ...cat,
        rules: filteredRules.filter(r => ruleToCategory[r.data.id] === cat.id)
    })).filter(cat => cat.rules.length > 0);

    // Find active rule data
    const activeRuleData = rules.find(r => r.data.id === selectedRule)?.data;

    // Render detail view
    if (selectedRule) {
        if (selectedRule === 'personalpronomen') return <PersonalPronounsDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'artikel') return <ArticlesDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'praepositionen') return <PrepositionsDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'verbkonjugation') return <VerbConjugationDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'zahlen') return <NumbersDetail onBack={() => setSelectedRule(null)} />;
        if (selectedRule === 'uhrzeit') return <TimeDetail onBack={() => setSelectedRule(null)} />;
        if (activeRuleData) {
            return <GenericGrammarDetail data={activeRuleData} onBack={() => setSelectedRule(null)} />;
        }
    }

    // Main list view
    return (
        <div className="app">
            {/* Hero Header with Gradient */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.08), transparent)',
                borderRadius: 20,
                padding: '16px 20px',
                marginBottom: 16,
                border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: 'var(--text-0)',
                            margin: 0,
                            letterSpacing: '-0.02em'
                        }}>
                            📖 Граматика
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '4px 0 0' }}>
                            Правила A1 & A2
                        </p>
                    </div>
                    {/* Mini Stats */}
                    <div style={{
                        display: 'flex',
                        gap: 12,
                        padding: '10px 16px',
                        background: 'rgba(0,0,0,0.35)',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#a78bfa', lineHeight: 1 }}>
                                {a1Rules.length}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                A1
                            </div>
                        </div>
                        <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', lineHeight: 1 }}>
                                {a2Rules.length}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                A2
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: 12 }}>
                <input
                    type="text"
                    placeholder="🔍 Пошук правила..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        borderRadius: 12,
                        border: '1px solid var(--stroke)',
                        background: 'var(--bg-1)',
                        color: 'var(--text-0)',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Level Filter Chips */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                {['all', 'a1', 'a2'].map(level => (
                    <button
                        key={level}
                        onClick={() => setActiveLevel(level)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: 20,
                            border: activeLevel === level ? '2px solid var(--orange)' : '1px solid var(--stroke)',
                            background: activeLevel === level ? 'rgba(255, 138, 61, 0.15)' : 'var(--bg-1)',
                            color: activeLevel === level ? 'var(--orange)' : 'var(--text-1)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        {level === 'all' ? 'Усі' : level.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Categorized Rules */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 100 }}>
                {groupedRules.map(cat => (
                    <div key={cat.id}>
                        {/* Category Header */}
                        <button
                            onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}11)`,
                                border: `1px solid ${cat.color}44`,
                                borderRadius: 14,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: expandedCategory === cat.id ? 8 : 0
                            }}
                        >
                            <div style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                background: cat.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <cat.icon size={18} color="white" />
                            </div>
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-0)', fontSize: '1rem' }}>
                                    {cat.title}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                                    {cat.titleUa} • {cat.rules.length} правил
                                </div>
                            </div>
                            {expandedCategory === cat.id ? (
                                <ChevronUp size={20} color="var(--text-2)" />
                            ) : (
                                <ChevronDown size={20} color="var(--text-2)" />
                            )}
                        </button>

                        {/* Expanded Rules */}
                        {expandedCategory === cat.id && (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                marginLeft: 18,
                                borderLeft: '1px solid var(--stroke)',
                                marginTop: 4,
                                marginBottom: 8
                            }}>
                                {cat.rules.map(({ data }) => (
                                    <RuleCard
                                        key={data.id}
                                        rule={data}
                                        accentColor={cat.color}
                                        onClick={() => setSelectedRule(data.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Empty State */}
                {groupedRules.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-2)' }}>
                        <Lightbulb size={48} style={{ marginBottom: 12, opacity: 0.5 }} />
                        <p>Нічого не знайдено</p>
                        <p style={{ fontSize: '0.85rem' }}>Спробуйте інший пошуковий запит</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RulesTab;
