import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, X } from 'lucide-react';
import { words } from '../data/words';
import { topics } from '../data/topics';
import { grammarContent } from '../data/grammar';
import { speakWord, speakSentence } from '../utils/speech';

const TrainingScreen = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    // State
    const [queue, setQueue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [topic, setTopic] = useState(null);

    // Load data on mount
    useEffect(() => {
        const foundTopic = topics.find(t => t.id === topicId);
        setTopic(foundTopic);

        if (foundTopic) {
            let initialQueue = [];

            if (foundTopic.type === 'lexical') {
                // Load words for this lesson
                initialQueue = words.filter(w => w.lesson === foundTopic.lesson);
                // Shuffle logic could go here
            } else if (foundTopic.type === 'grammar') {
                // Load grammar examples
                const content = grammarContent[foundTopic.id];
                if (content && content.sections) {
                    // Extract examples from sections
                    content.sections.forEach(sec => {
                        if (sec.type === 'examples' && sec.items) {
                            initialQueue = [...initialQueue, ...sec.items.map(item => ({
                                ...item,
                                type: 'sentence', // Mark as sentence
                                front: item.translation,
                                back: item.german
                            }))];
                        }
                    });
                }
            }

            setQueue(initialQueue);
        }
    }, [topicId]);

    // Handlers
    const handleFlip = () => {
        const currentItem = queue[currentIndex];
        // Speak only when flipping to German (Back)
        if (!isFlipped && currentItem) {
            if (currentItem.type === 'sentence') {
                speakSentence(currentItem.back);
            } else {
                speakWord(currentItem.word, currentItem.article);
            }
        }
        setIsFlipped(!isFlipped);
    };

    const handleNext = (known) => {
        if (!known) {
            // Keep in queue logic
        }

        setIsFlipped(false);
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of queue
            alert("Training complete for now!");
            navigate('/');
        }
    };

    if (!topic || queue.length === 0) {
        return <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-2)' }}>No content...</div>;
    }

    const currentItem = queue[currentIndex];

    // Helper to render back content with colors
    const renderBackContent = () => {
        // Case 1: Word (Lexical)
        if (currentItem.word) {
            const article = currentItem.article;
            const genderColor = article === 'der' ? 'var(--der)' :
                article === 'die' ? 'var(--die)' :
                    article === 'das' ? 'var(--das)' : 'var(--text-0)';

            return (
                <div style={{ textAlign: 'center' }}>
                    {/* Article */}
                    {article && (
                        <div style={{
                            fontSize: '1.5rem',
                            marginBottom: 8,
                            fontWeight: 500,
                            color: genderColor
                        }}>
                            {article}
                        </div>
                    )}

                    {/* Word (Colored) */}
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        marginBottom: 16,
                        lineHeight: 1.2,
                        color: genderColor
                    }}>
                        {currentItem.word}
                    </div>

                    {/* Plural */}
                    {currentItem.plural && (
                        <div style={{ fontSize: '1.2rem', color: 'var(--text-2)', marginTop: 8 }}>
                            Plural: <span style={{ color: 'var(--text-0)' }}>{currentItem.plural}</span>
                        </div>
                    )}
                </div>
            );
        }

        // Case 2: Sentence (Grammar)
        if (currentItem.back) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: 'var(--text-0)'
                    }}>
                        {currentItem.back}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="screen" style={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <button
                    onClick={() => navigate('/')}
                    className="v-backBtn"
                >
                    <ChevronLeft size={20} color="var(--text-0)" />
                </button>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-1)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {topic.title}
                </div>
                <div style={{ width: 44 }}></div> {/* Spacer */}
            </div>

            {/* Progress */}
            <div style={{
                width: '100%',
                height: 4,
                background: 'var(--surface)',
                borderRadius: 99,
                marginBottom: 24,
                overflow: 'hidden'
            }}>
                <div
                    style={{
                        height: '100%',
                        background: topic.color || 'var(--pri)',
                        width: `${((currentIndex + 1) / queue.length) * 100}%`,
                        transition: 'width 0.3s ease'
                    }}
                ></div>
            </div>

            {/* Card Area */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                    onClick={handleFlip}
                    style={{
                        width: '100%',
                        maxWidth: 400,
                        aspectRatio: '4/5',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                        border: '1px solid var(--stroke)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 30,
                        padding: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: 'var(--sh-2)',
                        transition: 'all 0.2s ease',
                        position: 'relative'
                    }}
                >
                    {!isFlipped ? (
                        /* Front (Ukrainian) */
                        <div className="fade-in" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-0)', marginBottom: 20 }}>
                                {currentItem.translation || currentItem.front}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                                TAP TO SHOW
                            </div>
                        </div>
                    ) : (
                        /* Back (German) */
                        <div className="fade-in" style={{ width: '100%' }}>
                            {renderBackContent()}
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div style={{
                height: 100,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginTop: 32,
                maxWidth: 400,
                margin: '32px auto 0',
                width: '100%'
            }}>
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                    style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: 'var(--bad)',
                        borderRadius: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                    <span>Вчу</span>
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                    style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        color: 'var(--ok)',
                        borderRadius: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}
                >
                    <Check size={24} />
                    <span>Знаю</span>
                </button>
            </div>
        </div>
    );
};

export default TrainingScreen;
