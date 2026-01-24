// src/components/VerbsTab.jsx
// Вкладка "Дієслова" - відмінювання дієслів з покращеним дизайном
import React, { useState } from 'react';
import { getAllVerbs } from '../data/lexicon'; // Updated import
import { ChevronDown, ChevronUp, Search, Volume2, Play, ArrowLeft, X } from 'lucide-react';
import { speakSentence } from '../utils/speech';
import { PerfektMaster } from './exercises';

const VerbCard = ({ verb }) => {
    const [expanded, setExpanded] = useState(false);

    const typeConfig = {
        regular: { color: '#2ECC71', label: 'Regular', emoji: '✓' },
        irregular: { color: '#E94B5A', label: 'Irregular', emoji: '⚡' },
        modal: { color: '#F26A1B', label: 'Modal', emoji: '🔧' },
        trennbar: { color: '#57A6FF', label: 'Trennbar', emoji: '✂️' }
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
                            {verb.infinitiv}
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

                    {/* Präsens */}
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
                                            {verb.praesens && verb.praesens[singular]}
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
                                            {verb.praesens && verb.praesens[plural]}
                                        </span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Perfekt */}
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

const VerbsTab = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeType, setActiveType] = useState(null);
    const [showExercise, setShowExercise] = useState(false);

    const verbs = getAllVerbs(); // Use getAllVerbs

    // Show Perfekt exercise
    if (showExercise) {
        return (
            <div className="app">
                {/* Header */}
                <div style={{
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)'
                }}>
                    <button
                        onClick={() => setShowExercise(false)}
                        style={{
                            background: 'var(--bg-tertiary)',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowLeft size={20} color="var(--text-primary)" />
                    </button>
                    <h2 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: 0
                    }}>
                        Вправа: Perfekt
                    </h2>
                </div>
                <PerfektMaster />
            </div>
        );
    }

    const typeFilters = [
        { id: null, label: 'Всі', count: verbs.length },
        { id: 'regular', label: 'Regular', emoji: '✓', color: '#2ECC71' },
        { id: 'irregular', label: 'Irregular', emoji: '⚡', color: '#E94B5A' },
        { id: 'modal', label: 'Modal', emoji: '🔧', color: '#FF6B35' },
        { id: 'trennbar', label: 'Trennbar', emoji: '✂️', color: '#F26A1B' }
    ];

    // Filter verbs
    const filteredVerbs = verbs.filter(verb => {
        const matchesSearch = verb.infinitiv.toLowerCase().includes(searchQuery.toLowerCase()) ||
            verb.translation.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = activeType === null || verb.type === activeType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="app">
            {/* Hero Header with Gradient */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.08), transparent)',
                borderRadius: 20,
                padding: '16px 20px',
                marginBottom: 20,
                border: '1px solid rgba(251, 146, 60, 0.2)'
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
                            📝 Дієслова
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '4px 0 0' }}>
                            {verbs.length} дієслів для рівня A1
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
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2ECC71', lineHeight: 1 }}>
                                {verbs.filter(v => v.type === 'regular').length}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                REG.
                            </div>
                        </div>
                        <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#E94B5A', lineHeight: 1 }}>
                                {verbs.filter(v => v.type === 'irregular').length}
                            </div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', marginTop: 2 }}>
                                IRR.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exercise Button */}
                <button
                    onClick={() => setShowExercise(true)}
                    style={{
                        marginTop: 16,
                        width: '100%',
                        padding: '14px 20px',
                        background: 'linear-gradient(135deg, #2ECC71, #27ae60)',
                        border: 'none',
                        borderRadius: 14,
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        boxShadow: '0 4px 15px rgba(46, 204, 113, 0.3)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                >
                    <Play size={20} fill="white" />
                    Вправа: Perfekt (минулий час)
                </button>
            </div>

            {/* Search */}
            <div style={{ position: 'relative', marginBottom: 16 }}>
                <Search size={18} style={{
                    position: 'absolute', left: 14, top: '50%',
                    transform: 'translateY(-50%)', color: 'var(--text-2)'
                }} />
                <input
                    type="text"
                    placeholder="Пошук дієслова..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 40px 12px 44px',
                        background: 'var(--bg-2)',
                        border: '1px solid var(--stroke)',
                        borderRadius: 14,
                        color: 'var(--text-0)',
                        fontSize: '0.95rem',
                        outline: 'none'
                    }}
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        style={{
                            position: 'absolute', right: 10, top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none', borderRadius: '50%',
                            width: 24, height: 24,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: 'var(--text-2)'
                        }}
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Type Filters */}
            <div style={{
                display: 'flex',
                gap: 8,
                marginBottom: 16,
                overflowX: 'auto',
                paddingBottom: 4,
                scrollbarWidth: 'none'
            }}>
                {typeFilters.map(filter => (
                    <button
                        key={filter.id || 'all'}
                        onClick={() => setActiveType(filter.id)}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 999,
                            border: activeType === filter.id
                                ? `1px solid ${filter.color || 'var(--orange)'}`
                                : '1px solid var(--stroke)',
                            background: activeType === filter.id
                                ? `color-mix(in srgb, ${filter.color || 'var(--orange)'}, transparent 80%)`
                                : 'var(--surface)',
                            color: activeType === filter.id
                                ? (filter.color || 'var(--orange)')
                                : 'var(--text-1)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {filter.emoji && <span>{filter.emoji}</span>}
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: 16, paddingLeft: 4 }}>
                Знайдено: {filteredVerbs.length} дієслів
            </div>

            {/* Verb List */}
            <div style={{ paddingBottom: 100 }}>
                {filteredVerbs.map(verb => (
                    <VerbCard key={verb.id} verb={verb} />
                ))}

                {filteredVerbs.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: 40,
                        color: 'var(--text-2)',
                        background: 'var(--surface)',
                        borderRadius: 16,
                        border: '1px solid var(--stroke)'
                    }}>
                        Дієслів не знайдено 🔍
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerbsTab;
