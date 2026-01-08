// src/components/VerbsTab.jsx
// Вкладка "Дієслова" - відмінювання дієслів
import React, { useState } from 'react';
import { verbs, VERB_TYPES } from '../data/verbs';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const VerbCard = ({ verb }) => {
    const [expanded, setExpanded] = useState(false);

    const typeColor = {
        regular: 'var(--color-success)',
        irregular: 'var(--color-error)',
        modal: 'var(--color-accent)',
        trennbar: 'var(--color-warning)'
    };

    return (
        <div className="card" style={{ marginBottom: 'var(--space-sm)' }}>
            {/* Header - always visible */}
            <div
                onClick={() => setExpanded(!expanded)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                }}
            >
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 4 }}>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{verb.infinitiv}</span>
                        <span style={{
                            fontSize: '0.65rem',
                            padding: '2px 6px',
                            borderRadius: 4,
                            background: `${typeColor[verb.type]}20`,
                            color: typeColor[verb.type],
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}>
                            {verb.type}
                        </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {verb.translation}
                    </div>
                </div>
                {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Expanded content */}
            {expanded && (
                <div className="fade-in" style={{ marginTop: 'var(--space-md)' }}>
                    {/* Example */}
                    <div style={{
                        background: 'var(--bg-surface)',
                        padding: 'var(--space-sm) var(--space-md)',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: 'var(--space-md)',
                        fontStyle: 'italic',
                        fontSize: '0.9rem'
                    }}>
                        "{verb.example}"
                    </div>

                    {/* Präsens */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--color-accent)',
                            marginBottom: 'var(--space-xs)',
                            textTransform: 'uppercase'
                        }}>
                            Präsens
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '4px',
                            fontSize: '0.85rem'
                        }}>
                            {/* Left column: ich, du, er/sie/es */}
                            {['ich', 'du', 'er/sie/es'].map((pronoun) => (
                                <div key={pronoun} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '4px 8px',
                                    background: 'var(--bg-surface)',
                                    borderRadius: 4,
                                    gridColumn: 1
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{pronoun}</span>
                                    <span style={{ fontWeight: 600 }}>{verb.praesens[pronoun]}</span>
                                </div>
                            ))}
                            {/* Right column: wir, ihr, sie/Sie */}
                            {['wir', 'ihr', 'sie/Sie'].map((pronoun, idx) => (
                                <div key={pronoun} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '4px 8px',
                                    background: 'var(--bg-surface)',
                                    borderRadius: 4,
                                    gridColumn: 2,
                                    gridRow: idx + 1
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{pronoun}</span>
                                    <span style={{ fontWeight: 600 }}>{verb.praesens[pronoun]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Perfekt */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--color-success)',
                            marginBottom: 'var(--space-xs)',
                            textTransform: 'uppercase'
                        }}>
                            Perfekt
                        </div>
                        <div style={{
                            padding: '8px 12px',
                            background: 'var(--bg-surface)',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 600
                        }}>
                            {verb.perfekt}
                        </div>
                    </div>

                    {/* Präteritum */}
                    <div>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--color-warning)',
                            marginBottom: 'var(--space-xs)',
                            textTransform: 'uppercase'
                        }}>
                            Präteritum
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '4px',
                            fontSize: '0.85rem'
                        }}>
                            {/* Left column: ich, du, er/sie/es */}
                            {['ich', 'du', 'er/sie/es'].map((pronoun) => (
                                <div key={pronoun} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '4px 8px',
                                    background: 'var(--bg-surface)',
                                    borderRadius: 4,
                                    gridColumn: 1
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{pronoun}</span>
                                    <span style={{ fontWeight: 600 }}>{verb.praeteritum[pronoun]}</span>
                                </div>
                            ))}
                            {/* Right column: wir, ihr, sie/Sie */}
                            {['wir', 'ihr', 'sie/Sie'].map((pronoun, idx) => (
                                <div key={pronoun} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '4px 8px',
                                    background: 'var(--bg-surface)',
                                    borderRadius: 4,
                                    gridColumn: 2,
                                    gridRow: idx + 1
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{pronoun}</span>
                                    <span style={{ fontWeight: 600 }}>{verb.praeteritum[pronoun]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const VerbsTab = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('all');

    // Filter verbs
    const filteredVerbs = verbs.filter(verb => {
        const matchesSearch = verb.infinitiv.toLowerCase().includes(searchQuery.toLowerCase()) ||
            verb.translation.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === 'all' || verb.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Verben</h1>
                <p className="screen-subtitle">{verbs.length} дієслів A1</p>
            </div>

            {/* Search */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                background: 'var(--bg-card)',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-md)'
            }}>
                <Search size={20} color="var(--text-muted)" />
                <input
                    type="text"
                    placeholder="Пошук дієслова..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Type Filter */}
            <div style={{
                display: 'flex',
                gap: 'var(--space-xs)',
                overflowX: 'auto',
                marginBottom: 'var(--space-md)',
                paddingBottom: 'var(--space-xs)'
            }}>
                <button
                    onClick={() => setSelectedType('all')}
                    style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: 'none',
                        background: selectedType === 'all' ? 'var(--color-accent)' : 'var(--bg-surface)',
                        color: selectedType === 'all' ? 'white' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                    }}
                >
                    Всі ({verbs.length})
                </button>
                {Object.entries(VERB_TYPES).map(([key, label]) => {
                    const count = verbs.filter(v => v.type === key).length;
                    return (
                        <button
                            key={key}
                            onClick={() => setSelectedType(key)}
                            style={{
                                padding: '6px 12px',
                                borderRadius: 'var(--radius-sm)',
                                border: 'none',
                                background: selectedType === key ? 'var(--color-accent)' : 'var(--bg-surface)',
                                color: selectedType === key ? 'white' : 'var(--text-secondary)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer'
                            }}
                        >
                            {label} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Verb List */}
            <div>
                {filteredVerbs.map(verb => (
                    <VerbCard key={verb.id} verb={verb} />
                ))}

                {filteredVerbs.length === 0 && (
                    <div style={{ textAlign: 'center', padding: 'var(--space-xl)', color: 'var(--text-muted)' }}>
                        Дієслів не знайдено
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerbsTab;
