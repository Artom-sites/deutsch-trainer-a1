// src/components/GrammarDetail.jsx
// Детальний перегляд граматичної теми
import React from 'react';
import useStore from '../store/useStore';
import { getGrammarContent, getExercisesForTopic } from '../data/lexicon';
import { ArrowLeft, PenTool, ChevronRight } from 'lucide-react';

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
                    <div key={index} className="card" style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{
                            fontSize: '0.8rem',
                            color: section.type === 'tip' ? 'var(--color-warning)' : 'var(--color-accent)',
                            fontWeight: 600,
                            marginBottom: 'var(--space-sm)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {section.title}
                        </div>
                        <div style={{
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            whiteSpace: 'pre-line'
                        }}>
                            {section.content}
                        </div>
                    </div>
                );

            case 'table':
                return (
                    <div key={index} className="card" style={{ marginBottom: 'var(--space-md)', overflowX: 'auto' }}>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            marginBottom: 'var(--space-sm)',
                            textTransform: 'uppercase'
                        }}>
                            {section.title}
                        </div>
                        <div style={{
                            fontFamily: 'monospace',
                            fontSize: '0.85rem',
                            whiteSpace: 'pre-wrap',
                            lineHeight: 1.6
                        }}>
                            {section.content}
                        </div>
                    </div>
                );

            case 'examples':
                return (
                    <div key={index} className="card" style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--color-success)',
                            fontWeight: 600,
                            marginBottom: 'var(--space-sm)',
                            textTransform: 'uppercase'
                        }}>
                            {section.title}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                            {section.items.map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    paddingBottom: 'var(--space-sm)',
                                    borderBottom: i < section.items.length - 1 ? '1px solid var(--bg-surface)' : 'none'
                                }}>
                                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.german}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.translation}</div>
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
            <div className="back-header">
                <button className="back-btn" onClick={goBack}>
                    <ArrowLeft size={20} />
                </button>
                <div className="back-title">Граматика</div>
            </div>

            {/* Title */}
            <div style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                    {content.title}
                </h1>
            </div>

            {/* Sections */}
            {content.sections.map(renderSection)}

            {/* Exercises Button */}
            {exercises.length > 0 && (
                <div
                    className="lesson-item"
                    onClick={() => startTopicExercises(activeGrammarTopicId)}
                    style={{ marginTop: 'var(--space-lg)' }}
                >
                    <div className="lesson-item-icon" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
                        <PenTool size={22} color="var(--color-success)" />
                    </div>
                    <div className="lesson-item-content">
                        <div className="lesson-item-title">Практика</div>
                        <div className="lesson-item-subtitle">{exercises.length} вправ</div>
                    </div>
                    <ChevronRight size={18} color="var(--text-muted)" />
                </div>
            )}
        </div>
    );
};

export default GrammarDetail;
