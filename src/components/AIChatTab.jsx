// src/components/AIChatTab.jsx
// Вкладка "AI Чат" - симуляція розмови

import React, { useState, useEffect, useRef } from 'react';
import { chatScenarios } from '../data/chatScenarios';
import { speakSentence } from '../utils/speech';
import { MessageCircle, User, Bot, ArrowLeft, RefreshCw, Volume2 } from 'lucide-react';

const ChatSession = ({ scenario, onBack }) => {
    const [messages, setMessages] = useState([]);
    const [currentNodeId, setCurrentNodeId] = useState(scenario.startNode);
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef(null);

    // Speech Recognition Setup
    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'de-DE';
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                handleVoiceInput(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, [currentNodeId]);

    const currentNode = scenario.nodes[currentNodeId];

    // Auto-scroll
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isListening]);

    // Initial message
    useEffect(() => {
        if (messages.length === 0) {
            addAIMessage(currentNode?.message);
        }
    }, []);

    const addAIMessage = (text) => {
        if (!text) return;
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text }]);
            speakSentence(text);
        }, 1000);
    };

    const handleVoiceInput = (transcript) => {
        // Find best matching option
        // Simple logic: check if transcript contains key words from option
        // or just pick the first option if "fuzzy" match is hard
        // For A1, we usually have 1 or 2 options.

        let bestMatch = null;
        let highestScore = 0;

        currentNode.options.forEach(opt => {
            // Simple word overlap score
            const optWords = opt.text.toLowerCase().split(/[\s,.?!]+/);
            const transWords = transcript.toLowerCase().split(/[\s,.?!]+/);
            let matches = 0;
            optWords.forEach(w => {
                if (transWords.includes(w)) matches++;
            });
            const score = matches / optWords.length;
            if (score > highestScore) {
                highestScore = score;
                bestMatch = opt;
            }
        });

        // Threshold or fallback
        if (highestScore > 0.3) {
            handleOptionClick(bestMatch, transcript);
        } else {
            // If no match, maybe add as a "misunderstood" message or just force the first option for flow?
            // "I heard: [transcript]. Did you mean [Option 1]?"
            // For smoother UX, let's just add the user's audio text, and proceed with the first option BUT warn user?
            // Or just 'retry'.
            // Let's add a system message:
            setMessages(prev => [...prev, { id: Date.now(), sender: 'system', text: `Ви сказали: "${transcript}". Спробуйте ще раз, ближче до тексту.` }]);
        }
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setIsListening(true);
            recognitionRef.current?.start();
        }
    };

    const handleOptionClick = (option, headerText = null) => {
        // headerText is usually the transcript, if passed
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: headerText || option.text }]);

        if (option.nextNode) {
            setCurrentNodeId(option.nextNode);
            const nextNode = scenario.nodes[option.nextNode];
            if (nextNode) {
                addAIMessage(nextNode.message);
            }
        }
    };

    const handleRestart = () => {
        setMessages([]);
        setCurrentNodeId(scenario.startNode);
        const startNode = scenario.nodes[scenario.startNode];
        addAIMessage(startNode.message);
    };

    const isEnded = currentNode?.end;
    const hasSpeechSupport = !!recognitionRef.current;

    return (
        <div className="screen" style={{ display: 'flex', flexDirection: 'column', padding: 0, height: '100vh', maxHeight: '100vh' }}>
            {/* Header */}
            <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                zIndex: 10
            }}>
                <button
                    onClick={onBack}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                >
                    <ArrowLeft size={24} color="var(--text-primary)" />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{scenario.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Голосовий чат</div>
                </div>
                <button
                    onClick={handleRestart}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <RefreshCw size={20} color="var(--text-secondary)" />
                </button>
            </div>

            {/* Messages Area */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                background: 'var(--bg-background)'
            }}>
                {messages.map(msg => (
                    <div
                        key={msg.id}
                        className={`fade-in`}
                        style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : (msg.sender === 'system' ? 'center' : 'flex-start'),
                            maxWidth: msg.sender === 'system' ? '90%' : '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: msg.sender === 'user' ? 'flex-end' : (msg.sender === 'system' ? 'center' : 'flex-start')
                        }}
                    >
                        {msg.sender === 'system' ? (
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-warning)', fontStyle: 'italic', background: 'rgba(245, 158, 11, 0.1)', padding: '4px 12px', borderRadius: 12 }}>
                                {msg.text}
                            </div>
                        ) : (
                            <>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                                    marginBottom: 4
                                }}>
                                    <div style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--bg-surface)',
                                        border: '1px solid var(--border-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {msg.sender === 'user' ? <User size={14} color="white" /> : <Bot size={14} color="var(--text-primary)" />}
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                        {msg.sender === 'user' ? 'Du' : 'AI'}
                                    </span>
                                </div>
                                <div style={{
                                    padding: '12px 16px',
                                    borderRadius: '16px',
                                    borderTopLeftRadius: msg.sender === 'ai' ? 4 : 16,
                                    borderTopRightRadius: msg.sender === 'user' ? 4 : 16,
                                    background: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--bg-surface)',
                                    color: msg.sender === 'user' ? 'black' : 'var(--text-primary)',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    border: msg.sender === 'ai' ? '1px solid var(--border-color)' : 'none'
                                }}>
                                    {msg.text}
                                    {msg.sender === 'ai' && (
                                        <button
                                            onClick={() => speakSentence(msg.text)}
                                            style={{
                                                position: 'absolute',
                                                right: -30,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                opacity: 0.7
                                            }}
                                        >
                                            <Volume2 size={16} color="var(--text-secondary)" />
                                        </button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                ))}

                {isTyping && (
                    <div style={{ alignSelf: 'flex-start', marginLeft: 32, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        AI schreibt...
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Voice) */}
            <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-card)',
                borderTop: '1px solid var(--border-color)',
                minHeight: 120,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)'
            }}>
                {isEnded ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)' }}>Діалог завершено</div>
                        <button className="btn btn-outline" onClick={onBack}>Назад до списку</button>
                    </div>
                ) : (
                    <>
                        {/* Hints (Options content) */}
                        <div style={{ width: '100%', display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                            {currentNode && currentNode.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(opt)}
                                    className="fade-in"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        padding: '8px 16px',
                                        borderRadius: 20,
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                >
                                    {opt.text}
                                </button>
                            ))}
                        </div>

                        {/* Mic Button */}
                        {hasSpeechSupport ? (
                            <button
                                onClick={toggleListening}
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: '50%',
                                    background: isListening ? 'var(--color-error)' : 'var(--color-accent)',
                                    border: 'none',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: isListening ? '0 0 30px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(204, 255, 0, 0.3)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}
                            >
                                {isListening && (
                                    <div className="pulse" style={{
                                        position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
                                        border: '2px solid var(--color-error)', animation: 'pulse 1.5s infinite'
                                    }} />
                                )}
                                <Volume2 size={32} color={isListening ? 'white' : 'black'} />
                            </button>
                        ) : (
                            <div style={{ color: 'var(--color-error)' }}>Ваш браузер не підтримує розпізнавання мови</div>
                        )}
                        <div style={{ fontSize: '0.85rem', color: isListening ? 'var(--color-error)' : 'var(--text-secondary)' }}>
                            {isListening ? 'Слухаю...' : 'Натисніть і говоріть'}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const AIChatTab = () => {
    const [activeScenario, setActiveScenario] = useState(null);

    if (activeScenario) {
        return <ChatSession scenario={activeScenario} onBack={() => setActiveScenario(null)} />;
    }

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">AI Chat</h1>
                <p className="screen-subtitle">Тренуй розмовну німецьку</p>
            </div>

            <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                {chatScenarios.map(scenario => (
                    <div
                        key={scenario.id}
                        className="card card-clickable"
                        onClick={() => setActiveScenario(scenario)}
                        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}
                    >
                        <div style={{
                            fontSize: '2rem',
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--bg-surface)',
                            borderRadius: '50%'
                        }}>
                            {scenario.icon}
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{scenario.title}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {scenario.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIChatTab;
