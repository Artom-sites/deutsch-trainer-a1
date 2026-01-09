// src/components/GrammarDetail.jsx
// Детальний перегляд граматичної теми
import React from 'react';
import useStore from '../store/useStore';
import { getGrammarContent, getExercisesForTopic } from '../data/lexicon';
import { ArrowLeft, PenTool, ChevronRight } from 'lucide-react';

// Simple markdown parser for grammar content
const parseContent = (text) => {
    if (!text) return null;

    const lines = text.split('\n');
    const elements = [];
    let tableRows = [];
    let inTable = false;

    lines.forEach((line, i) => {
        // Skip table separator line
        if (line.match(/^\|[-:| ]+\|$/)) return;

        // Table row
        if (line.startsWith('|') && line.endsWith('|')) {
            if (!inTable) inTable = true;
            const cells = line.split('|').filter(c => c.trim());
            tableRows.push(cells.map(c => c.trim()));
            return;
        }

        // End of table
        if (inTable && tableRows.length > 0) {
            elements.push(
                <div key={`table-${i}`} style={{
                    overflowX: 'auto',
                    marginBottom: 16,
                    borderRadius: 12,
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '0.9rem'
                    }}>
                        <tbody>
                            {tableRows.map((row, ri) => (
                                <tr key={ri} style={{
                                    background: ri === 0 ? 'rgba(255, 107, 53, 0.1)' : 'transparent'
                                }}>
                                    {row.map((cell, ci) => (
                                        <td key={ci} style={{
                                            padding: '10px 12px',
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                                            fontWeight: ri === 0 ? 600 : 400
                                        }}>
                                            {parseBold(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            tableRows = [];
            inTable = false;
        }

        // Empty line
        if (!line.trim()) {
            elements.push(<div key={`br-${i}`} style={{ height: 8 }} />);
            return;
        }

        // Regular text line
        elements.push(
            <div key={`line-${i}`} style={{ marginBottom: 4 }}>
                {parseBold(line)}
            </div>
        );
    });

    // Handle remaining table at end
    if (tableRows.length > 0) {
        elements.push(
            <div key="table-end" style={{
                overflowX: 'auto',
                marginBottom: 16,
                borderRadius: 12,
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.9rem'
                }}>
                    <tbody>
                        {tableRows.map((row, ri) => (
                            <tr key={ri} style={{
                                background: ri === 0 ? 'rgba(255, 107, 53, 0.1)' : 'transparent'
                            }}>
                                {row.map((cell, ci) => (
                                    <td key={ci} style={{
                                        padding: '10px 12px',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                                        fontWeight: ri === 0 ? 600 : 400
                                    }}>
                                        {parseBold(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return elements;
};

// Parse **bold** text
const parseBold = (text) => {
    if (!text) return text;
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} style={{ color: 'var(--color-accent)' }}>{part}</strong> : part
    );
};

const GrammarDetail = () => {
    const activeGrammarTopicId = useStore(state => state.activeGrammarTopicId);
    const goBack = useStore(state => state.goBack);
    const startTopicExercises = useStore(state => state.startTopicExercises);

    const content = getGrammarContent(activeGrammarTopicId);
    const exercises = getExercisesForTopic(activeGrammarTopicId);

    if (!content) return null;

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'rule':
            case 'tip':
                return (
                    <div key={index} style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 16,
                        padding: 16,
                        marginBottom: 12
                    }}>
                        <div style={{
                            fontSize: '0.75rem',
                            color: section.type === 'tip' ? '#fbbf24' : 'var(--color-accent)',
                            fontWeight: 600,
                            marginBottom: 8,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {section.title}
                        </div>
                        <div style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                            {parseContent(section.content)}
                        </div>
                    </div>
                );

            case 'table':
                return (
                    <div key={index} style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 16,
                        padding: 16,
                        marginBottom: 12,
                        overflowX: 'auto'
                    }}>
                        <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            marginBottom: 8,
                            textTransform: 'uppercase'
                        }}>
                            {section.title}
                        </div>
                        <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                            {parseContent(section.content)}
                        </div>
                    </div>
                );

            case 'examples':
                return (
                    <div key={index} style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 16,
                        padding: 16,
                        marginBottom: 12
                    }}>
                        <div style={{
                            fontSize: '0.75rem',
                            color: '#4ade80',
                            fontWeight: 600,
                            marginBottom: 12,
                            textTransform: 'uppercase'
                        }}>
                            {section.title}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {section.items.map((item, i) => (
                                <div key={i} style={{
                                    paddingBottom: 10,
                                    borderBottom: i < section.items.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'
                                }}>
                                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>
                                        {item.german}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        {item.translation}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="screen">
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)',
                paddingTop: 'var(--space-sm)'
            }}>
                <button
                    onClick={goBack}
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 style={{ fontSize: '1.2rem', fontWeight: 600, flex: 1 }}>
                    {content.title}
                </h1>
            </div>

            {/* Sections */}
            {content.sections.map(renderSection)}

            {/* Exercises Button */}
            {exercises.length > 0 && (
                <button
                    onClick={() => startTopicExercises(activeGrammarTopicId)}
                    style={{
                        width: '100%',
                        marginTop: 16,
                        padding: '14px 20px',
                        background: '#4ade80',
                        border: 'none',
                        borderRadius: 14,
                        color: '#0d0d0d',
                        fontWeight: 600,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8
                    }}
                >
                    <PenTool size={20} />
                    Практика ({exercises.length} вправ)
                </button>
            )}
        </div>
    );
};

export default GrammarDetail;
