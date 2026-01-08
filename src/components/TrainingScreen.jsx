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
        // Here we would implement SRS logic (e.g., move to end of queue or schedule for later)
        // For now, just linear progress + infinite cycle if "Don't Know"

        if (!known) {
            // If "Don't Know", keep it in the queue (maybe push to end)
            // setQueue([...queue, queue[currentIndex]]); // Simple implementation
        }

        setIsFlipped(false);
        if (currentIndex < queue.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of queue for this session
            alert("Training complete for now!");
            navigate('/');
        }
    };

    if (!topic || queue.length === 0) {
        return <div className="p-8 text-center text-gray-500">Loading or no content...</div>;
    }

    const currentItem = queue[currentIndex];

    // Helper to render back content with colors
    const renderBackContent = () => {
        // Case 1: Word (Lexical)
        if (currentItem.word) {
            const article = currentItem.article;
            const genderClass = article === 'der' ? 'text-der' :
                article === 'die' ? 'text-die' :
                    article === 'das' ? 'text-das' : 'text-white';

            return (
                <div className="text-center">
                    {/* Article */}
                    {article && (
                        <div className={`text-2xl mb-2 font-medium ${genderClass}`}>
                            {article}
                        </div>
                    )}

                    {/* Word (Colored) */}
                    <div className={`text-4xl font-extrabold mb-4 p-2 break-words leading-tight ${genderClass}`}>
                        {currentItem.word}
                    </div>

                    {/* Plural */}
                    {currentItem.plural && (
                        <div className="text-xl text-gray-400 mt-2">
                            Plural: <span className="text-white">{currentItem.plural}</span>
                        </div>
                    )}
                </div>
            );
        }

        // Case 2: Sentence (Grammar)
        if (currentItem.back) {
            // For sentences, we don't auto-color yet, just display
            return (
                <div className="text-center">
                    <div className="text-3xl font-bold leading-normal text-white">
                        {currentItem.back}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="h-screen flex flex-col bg-black text-white px-4 pb-8 pt-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={() => navigate('/')} className="p-2 text-gray-400 hover:text-white">
                    <ChevronLeft size={28} />
                </button>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                    {topic.title}
                </div>
                <div className="w-8"></div> {/* Spacer */}
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-800 h-1 rounded-full mb-6">
                <div
                    className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all duration-300`}
                    style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }}
                ></div>
            </div>

            {/* Card Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative perspective-1000">
                <div
                    onClick={handleFlip}
                    className="w-full max-w-sm aspect-[4/5] bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center cursor-pointer shadow-2xl transition-all active:scale-95 hover:border-white/20"
                >
                    {!isFlipped ? (
                        /* Front (Ukrainian) */
                        <div className="text-center animate-fade-in">
                            <div className="text-3xl font-bold text-white/90">
                                {currentItem.translation || currentItem.front}
                            </div>
                            <div className="mt-8 text-sm text-gray-500 font-medium tracking-wide">
                                TAP TO SHOW
                            </div>
                        </div>
                    ) : (
                        /* Back (German) */
                        <div className="animate-fade-in w-full">
                            {renderBackContent()}
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="h-24 grid grid-cols-2 gap-4 mt-8 max-w-sm mx-auto w-full">
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                    className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-red-500/20 active:scale-95 transition-all"
                >
                    <X size={24} />
                    <span>Вчу</span>
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                    className="bg-green-500/10 border border-green-500/50 text-green-500 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-green-500/20 active:scale-95 transition-all"
                >
                    <Check size={24} />
                    <span>Знаю</span>
                </button>
            </div>
        </div>
    );
};

export default TrainingScreen;
