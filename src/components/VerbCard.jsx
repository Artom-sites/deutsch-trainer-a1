import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import { speakSentence } from '../utils/speech';

const VerbCard = ({ verb }) => {
    const [expanded, setExpanded] = useState(false);

    const typeConfig = {
        regular: { color: '#2ECC71', label: 'Regular', emoji: '✓' },
        irregular: { color: '#E94B5A', label: 'Irregular', emoji: '⚡' },
        modal: { color: '#F26A1B', label: 'Modal', emoji: '🔧' },
        trennbar: { color: '#57A6FF', label: 'Trennbar', emoji: '✂️' },
        verb: { color: '#2ECC71', label: 'Verb', emoji: '📝' } // Fallback
    };

    const typeInfo = typeConfig[verb.type] || typeConfig.regular;

    return (
        <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid var(--stroke)',
            borderRadius: 20,
            marginBottom: 12,
            overflow: 'hidden',
            boxShadow: 'var(--sh-1)'
        }}>
            {/* Header - always visible */}
            <div
                onClick={() => setExpanded(!expanded)}
                style={{
                    padding: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    borderLeft: `3px solid ${typeInfo.color}`
                }}
            >
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-0)' }}>
                            {verb.infinitiv || verb.word}
                        </span>
                        <span style={{
                            fontSize: '0.7rem',
                            padding: '3px 8px',
                            borderRadius: 6,
                            background: `color-mix(in srgb, ${typeInfo.color}, transparent 85%)`,
                            color: typeInfo.color,
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            border: `1px solid color-mix(in srgb, ${typeInfo.color}, transparent 80%)`
                        }}>
                            {typeInfo.emoji} {typeInfo.label}
                        </span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-2)' }}>
                        {verb.translation}
                    </div>
                </div>
                <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: expanded ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255,255,255,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                }}>
                    {expanded ? <ChevronUp size={18} color="var(--text-1)" /> : <ChevronDown size={18} color="var(--text-2)" />}
                </div>
            </div>

            {/* Expanded content */}
            {expanded && (
                <div className="fade-in" style={{
                    padding: '0 16px 16px',
                    borderTop: '1px solid var(--stroke)'
                }}>
                    {/* Example with TTS */}
                    {verb.example && (
                        <div style={{
                            marginTop: 16,
                            padding: 12,
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--stroke)',
                            borderRadius: 14,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12
                        }}>
                            <button
                                onClick={(e) => { e.stopPropagation(); speakSentence(verb.example); }}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    background: 'var(--surface)',
                                    border: '1px solid var(--stroke)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    flexShrink: 0
                                }}
                            >
                                <Volume2 size={18} color="var(--text-0)" />
                            </button>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-1)', fontStyle: 'italic' }}>
                                "{verb.example}"
                            </span>
                        </div>
                    )}

                    {/* Präsens */}
                    {verb.praesens && (
                        <div style={{ marginTop: 16 }}>
                            <div style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--orange)',
                                marginBottom: 8,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Präsens (теперішній)
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 8
                            }}>
                                {/* Singular - left column, Plural - right column */}
                                {[['ich', 'wir'], ['du', 'ihr'], ['er/sie/es', 'sie/Sie']].map(([singular, plural]) => (
                                    <React.Fragment key={singular}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '8px 12px',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: 10,
                                            border: '1px solid var(--stroke)'
                                        }}>
                                            <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{singular}</span>
                                            <span style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.85rem' }}>
                                                {verb.praesens[singular]}
                                            </span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '8px 12px',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: 10,
                                            border: '1px solid var(--stroke)'
                                        }}>
                                            <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{plural}</span>
                                            <span style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.85rem' }}>
                                                {verb.praesens[plural]}
                                            </span>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Perfekt */}
                    {verb.perfekt && (
                        <div style={{ marginTop: 16 }}>
                            <div style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--ok)',
                                marginBottom: 8,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Perfekt (минулий)
                            </div>
                            <div style={{
                                padding: '12px 16px',
                                background: 'rgba(46, 204, 113, 0.1)',
                                border: '1px solid rgba(46, 204, 113, 0.2)',
                                borderRadius: 12,
                                fontWeight: 600,
                                fontSize: '1rem',
                                color: 'var(--ok)'
                            }}>
                                {verb.perfekt}
                            </div>
                        </div>
                    )}

                    {/* Präteritum */}
                    {verb.praeteritum && (
                        <div style={{ marginTop: 16 }}>
                            <div style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--blue)',
                                marginBottom: 8,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Präteritum (наратив)
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 8
                            }}>
                                {/* Singular - left column, Plural - right column */}
                                {[['ich', 'wir'], ['du', 'ihr'], ['er/sie/es', 'sie/Sie']].map(([singular, plural]) => (
                                    <React.Fragment key={singular}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '8px 12px',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: 10,
                                            border: '1px solid var(--stroke)'
                                        }}>
                                            <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{singular}</span>
                                            <span style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.85rem' }}>
                                                {verb.praeteritum[singular]}
                                            </span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '8px 12px',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: 10,
                                            border: '1px solid var(--stroke)'
                                        }}>
                                            <span style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{plural}</span>
                                            <span style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '0.85rem' }}>
                                                {verb.praeteritum[plural]}
                                            </span>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default VerbCard;
