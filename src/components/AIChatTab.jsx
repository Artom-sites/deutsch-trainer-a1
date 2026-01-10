// src/components/AIChatTab.jsx
// Вкладка "AI Чат" - Clean Dark Design

import React, { useState, useEffect, useRef } from 'react';
import { chatScenarios } from '../data/chatScenarios';
import { speakSentence } from '../utils/speech';
import { MessageCircle, User, Bot, ArrowLeft, RefreshCw, Volume2, Mic, ChevronRight } from 'lucide-react';

const ChatSession = ({ scenario, onBack }) => {
    const [messages, setMessages] = useState([]);
    const [currentNodeId, setCurrentNodeId] = useState(scenario.startNode);
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef(null);
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

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, [currentNodeId]);

    const currentNode = scenario.nodes[currentNodeId];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

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
        }, 800);
    };

    const handleVoiceInput = (transcript) => {
        let bestMatch = null;
        let highestScore = 0;

        currentNode.options.forEach(opt => {
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

        if (highestScore > 0.3) {
            handleOptionClick(bestMatch, transcript);
        } else {
            setMessages(prev => [...prev, {
                id: Date.now(),
                sender: 'system',
                text: `"${transcript}" — спробуйте ще раз`
            }]);
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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: '#0B0B0F'
        }}>
            {/* Header */}
            <div style={{
                padding: '16px',
                paddingTop: 'calc(16px + env(safe-area-inset-top))',
                background: '#1A1A22',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 12
            }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8,
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ArrowLeft size={22} color="#E5E7EB" />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem', color: '#E5E7EB' }}>
                        {scenario.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#7A7D8A' }}>
                        Голосовий чат
                    </div>
                </div>
                <button
                    onClick={handleRestart}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8
                    }}
                >
                    <RefreshCw size={18} color="#7A7D8A" />
                </button>
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
            }}>
                {messages.map(msg => (
                    <div
                        key={msg.id}
                        style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' :
                                msg.sender === 'system' ? 'center' : 'flex-start',
                            maxWidth: '85%'
                        }}
                    >
                        {msg.sender === 'system' ? (
                            <div style={{
                                fontSize: '0.75rem',
                                color: '#F26A1B',
                                background: 'rgba(242, 106, 27, 0.1)',
                                padding: '6px 12px',
                                borderRadius: 10
                            }}>
                                {msg.text}
                            </div>
                        ) : (
                            <div style={{
                                padding: '12px 16px',
                                borderRadius: 16,
                                borderTopLeftRadius: msg.sender === 'ai' ? 4 : 16,
                                borderTopRightRadius: msg.sender === 'user' ? 4 : 16,
                                background: msg.sender === 'user' ? '#F26A1B' : '#1A1A22',
                                color: msg.sender === 'user' ? '#0B0B0F' : '#E5E7EB',
                                fontSize: '0.95rem',
                                lineHeight: 1.4,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10
                            }}>
                                <span>{msg.text}</span>
                                {msg.sender === 'ai' && (
                                    <button
                                        onClick={() => speakSentence(msg.text)}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 4,
                                            opacity: 0.6,
                                            flexShrink: 0
                                        }}
                                    >
                                        <Volume2 size={16} color="#7A7D8A" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {isTyping && (
                    <div style={{
                        alignSelf: 'flex-start',
                        color: '#7A7D8A',
                        fontSize: '0.8rem',
                        padding: '8px 16px',
                        background: '#1A1A22',
                        borderRadius: 12
                    }}>
                        ···
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
                padding: '16px',
                paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
                background: '#1A1A22',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
                {isEnded ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: 12, color: '#7A7D8A', fontSize: '0.9rem' }}>
                            Діалог завершено ✓
                        </div>
                        <button
                            onClick={onBack}
                            style={{
                                padding: '12px 24px',
                                background: '#F26A1B',
                                border: 'none',
                                borderRadius: 12,
                                color: '#0B0B0F',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            Назад
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Quick responses */}
                        <div style={{
                            display: 'flex',
                            gap: 8,
                            overflowX: 'auto',
                            marginBottom: 16,
                            paddingBottom: 4
                        }}>
                            {currentNode && currentNode.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(opt)}
                                    style={{
                                        whiteSpace: 'nowrap',
                                        padding: '10px 16px',
                                        borderRadius: 12,
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        color: '#E5E7EB',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                >
                                    {opt.text}
                                </button>
                            ))}
                        </div>

                        {/* Mic button */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                            {hasSpeechSupport ? (
                                <>
                                    <button
                                        onClick={toggleListening}
                                        style={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: '50%',
                                            background: isListening ? '#E94B5A' : '#F26A1B',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            boxShadow: isListening
                                                ? '0 0 24px rgba(233, 75, 90, 0.4)'
                                                : '0 4px 16px rgba(242, 106, 27, 0.3)',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <Mic size={28} color="#0B0B0F" />
                                    </button>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        color: isListening ? '#E94B5A' : '#7A7D8A'
                                    }}>
                                        {isListening ? 'Слухаю...' : 'Говоріть'}
                                    </span>
                                </>
                            ) : (
                                <div style={{ color: '#E94B5A', fontSize: '0.85rem' }}>
                                    Браузер не підтримує мікрофон
                                </div>
                            )}
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
            {/* Header */}
            <div style={{ marginBottom: 24, paddingTop: 8 }}>
                <h1 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#E5E7EB',
                    marginBottom: 4
                }}>
                    AI Chat
                </h1>
                <p style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>
                    Тренуй розмовну німецьку 🎤
                </p>
            </div>

            {/* Scenarios */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {chatScenarios.map(scenario => (
                    <div
                        key={scenario.id}
                        onClick={() => setActiveScenario(scenario)}
                        style={{
                            background: '#1A1A22',
                            borderRadius: 16,
                            padding: '16px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            border: '1px solid rgba(255, 255, 255, 0.04)'
                        }}
                    >
                        <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: 14,
                            background: 'rgba(242, 106, 27, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            {scenario.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: '#E5E7EB',
                                marginBottom: 2
                            }}>
                                {scenario.title}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#7A7D8A' }}>
                                {scenario.description}
                            </div>
                        </div>
                        <ChevronRight size={20} color="#7A7D8A" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIChatTab;
