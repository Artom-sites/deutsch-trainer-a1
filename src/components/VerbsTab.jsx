// src/components/VerbsTab.jsx
// Вкладка "Дієслова" - відмінювання дієслів з покращеним дизайном
import React, { useState } from 'react';
import { verbs, VERB_TYPES } from '../data/verbs';
import { ChevronDown, ChevronUp, Search, Volume2 } from 'lucide-react';
import { speakSentence } from '../utils/speech';

const VerbCard = ({ verb }) => {
    const [expanded, setExpanded] = useState(false);

    const typeConfig = {
        regular: { color: '#2ECC71', label: 'Regular', emoji: '✓' },
        irregular: { color: '#E94B5A', label: 'Irregular', emoji: '⚡' },
        modal: { color: '#FF6B35', label: 'Modal', emoji: '🔧' },
        trennbar: { color: '#F26A1B', label: 'Trennbar', emoji: '✂️' }
    };

    const typeInfo = typeConfig[verb.type] || typeConfig.regular;

    return (
        <div style={{
            background: '#111118',
            border: '1px solid #1A1A22',
            borderRadius: 16,
            marginBottom: 12,
            overflow: 'hidden'
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
                        <span style={{ fontWeight: 700, fontSize: '1.15rem', color: '#E5E7EB' }}>
                            {verb.infinitiv}
                        </span>
                        <span style={{
                            fontSize: '0.7rem',
                            padding: '3px 8px',
                            borderRadius: 6,
                            background: `${typeInfo.color}20`,
                            color: typeInfo.color,
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4
                        }}>
                            {typeInfo.emoji} {typeInfo.label}
                        </span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#B0B3C0' }}>
                        {verb.translation}
                    </div>
                </div>
                <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: expanded ? 'rgba(242, 106, 27, 0.2)' : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {expanded ? <ChevronUp size={18} color="#FF6B35" /> : <ChevronDown size={18} color="#7A7D8A" />}
                </div>
            </div>

            {/* Expanded content */}
            {expanded && (
                <div className="fade-in" style={{
                    padding: '0 16px 16px',
                    borderTop: '1px solid #1A1A22'
                }}>
                    {/* Example with TTS */}
                    <div style={{
                        marginTop: 16,
                        padding: 12,
                        background: 'rgba(242, 106, 27, 0.08)',
                        border: '1px solid rgba(242, 106, 27, 0.15)',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12
                    }}>
                        <button
                            onClick={(e) => { e.stopPropagation(); speakSentence(verb.example); }}
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: 8,
                                background: '#FF6B35',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                flexShrink: 0
                            }}
                        >
                            <Volume2 size={18} color="#0B0B0F" />
                        </button>
                        <span style={{ fontSize: '0.9rem', color: '#E5E7EB', fontStyle: 'italic' }}>
                            "{verb.example}"
                        </span>
                    </div>

                    {/* Präsens */}
                    <div style={{ marginTop: 16 }}>
                        <div style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#FF6B35',
                            marginBottom: 8,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            Präsens (теперішній)
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 6
                        }}>
                            {['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'].map((pronoun) => (
                                <div key={pronoun} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '8px 12px',
                                    background: '#0B0B0F',
                                    borderRadius: 8,
                                    border: '1px solid #1A1A22'
                                }}>
                                    <span style={{ color: '#7A7D8A', fontSize: '0.85rem' }}>{pronoun}</span>
                                    <span style={{ fontWeight: 600, color: '#E5E7EB', fontSize: '0.85rem' }}>
                                        {verb.praesens[pronoun]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Perfekt */}
                    <div style={{ marginTop: 16 }}>
                        <div style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#2ECC71',
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
                            borderRadius: 10,
                            fontWeight: 600,
                            fontSize: '1rem',
                            color: '#2ECC71'
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
                                color: '#F26A1B',
                                marginBottom: 8,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Präteritum (наратив)
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 6
                            }}>
                                {['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'].map((pronoun) => (
                                    <div key={pronoun} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '8px 12px',
                                        background: '#0B0B0F',
                                        borderRadius: 8,
                                        border: '1px solid #1A1A22'
                                    }}>
                                        <span style={{ color: '#7A7D8A', fontSize: '0.85rem' }}>{pronoun}</span>
                                        <span style={{ fontWeight: 600, color: '#E5E7EB', fontSize: '0.85rem' }}>
                                            {verb.praeteritum[pronoun]}
                                        </span>
                                    </div>
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
        <div className="screen">
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(242, 106, 27, 0.15) 0%, rgba(255, 107, 53, 0.05) 100%)',
                borderRadius: 20,
                padding: 20,
                marginBottom: 16,
                border: '1px solid rgba(242, 106, 27, 0.2)'
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#E5E7EB', marginBottom: 4 }}>
                    Verben 📚
                </h1>
                <p style={{ color: '#B0B3C0', fontSize: '0.9rem' }}>
                    {verbs.length} дієслів для рівня A1
                </p>
            </div>

            {/* Search */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: '#111118',
                border: '1px solid #1A1A22',
                padding: '12px 16px',
                borderRadius: 12,
                marginBottom: 12
            }}>
                <Search size={20} color="#7A7D8A" />
                <input
                    type="text"
                    placeholder="Пошук дієслова..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: '#E5E7EB',
                        fontSize: '1rem',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Type Filters */}
            <div style={{
                display: 'flex',
                gap: 8,
                marginBottom: 16,
                overflowX: 'auto',
                paddingBottom: 4
            }}>
                {typeFilters.map(filter => (
                    <button
                        key={filter.id || 'all'}
                        onClick={() => setActiveType(filter.id)}
                        style={{
                            padding: '8px 14px',
                            borderRadius: 20,
                            border: activeType === filter.id
                                ? `1px solid ${filter.color || '#FF6B35'}`
                                : '1px solid #1A1A22',
                            background: activeType === filter.id
                                ? `${filter.color || '#FF6B35'}20`
                                : '#111118',
                            color: activeType === filter.id
                                ? (filter.color || '#FF6B35')
                                : '#B0B3C0',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}
                    >
                        {filter.emoji && <span>{filter.emoji}</span>}
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <div style={{ fontSize: '0.8rem', color: '#7A7D8A', marginBottom: 12 }}>
                Знайдено: {filteredVerbs.length} дієслів
            </div>

            {/* Verb List */}
            <div>
                {filteredVerbs.map(verb => (
                    <VerbCard key={verb.id} verb={verb} />
                ))}

                {filteredVerbs.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: 40,
                        color: '#7A7D8A',
                        background: '#111118',
                        borderRadius: 16,
                        border: '1px solid #1A1A22'
                    }}>
                        Дієслів не знайдено 🔍
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerbsTab;
