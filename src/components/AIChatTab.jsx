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
    const messagesEndRef = useRef(null);

    const currentNode = scenario.nodes[currentNodeId];

    // Auto-scroll
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Initial message
    useEffect(() => {
        if (messages.length === 0) {
            addAIMessage(currentNode.message);
        }
    }, []);

    const addAIMessage = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text }]);
            speakSentence(text);
        }, 1000); // Fake typing delay
    };

    const handleOptionClick = (option) => {
        // Add user message
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: option.text }]);

        // Move to next node
        if (option.nextNode) {
            setCurrentNodeId(option.nextNode);
            // Trigger AI response
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
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>AI Bot</div>
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
                background: 'var(--bg-background)' // Ensure correct background
            }}>
                {messages.map(msg => (
                    <div
                        key={msg.id}
                        className={`fade-in`}
                        style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            maxWidth: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                        }}
                    >
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
                            color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
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
                    </div>
                ))}

                {isTyping && (
                    <div style={{ alignSelf: 'flex-start', marginLeft: 32, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        AI schreibt...
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Options) */}
            <div style={{
                padding: 'var(--space-md)',
                background: 'var(--bg-card)',
                borderTop: '1px solid var(--border-color)',
                minHeight: 80
            }}>
                {isEnded ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)' }}>Діалог завершено</div>
                        <button className="btn btn-outline" onClick={onBack}>Назад до списку</button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                        {currentNode && currentNode.options.map((option, idx) => (
                            <button
                                key={idx}
                                className="btn"
                                onClick={() => handleOptionClick(option)}
                                disabled={isTyping}
                                style={{
                                    background: 'var(--bg-surface)',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--color-primary)',
                                    textAlign: 'left',
                                    justifyContent: 'flex-start',
                                    opacity: isTyping ? 0.5 : 1
                                }}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
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
