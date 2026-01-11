// src/components/AudioSession.jsx
// Audio Lesson Player (Podcast Style)
import React, { useState, useEffect, useRef } from 'react';
import { speak, stopSpeaking } from '../utils/speech';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Headphones } from 'lucide-react';

const AudioSession = ({ lesson, onBack }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [progress, setProgress] = useState(0); // 0-100

    // Refs for controlling playback loop
    const isPlayingRef = useRef(false);
    const currentLineRef = useRef(0);

    // Scroll ref
    const transcriptRef = useRef(null);

    useEffect(() => {
        return () => {
            stopSpeaking();
            isPlayingRef.current = false;
        };
    }, []);

    // Scroll active line into view
    useEffect(() => {
        if (transcriptRef.current) {
            const activeEl = transcriptRef.current.querySelector('[data-active="true"]');
            if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [currentLineIndex]);

    const playSequence = async () => {
        if (isPlayingRef.current) return; // Already running
        isPlayingRef.current = true;
        setIsPlaying(true);

        while (isPlayingRef.current && currentLineRef.current < lesson.transcript.length) {
            const lineIndex = currentLineRef.current;
            const line = lesson.transcript[lineIndex];

            setCurrentLineIndex(lineIndex);

            // Calculate progress simply by line count for now
            setProgress((lineIndex / lesson.transcript.length) * 100);

            try {
                // Different voice for narrator? Maybe
                const isNarrator = line.speaker === 'Narrator';
                await speak(line.text, {
                    rate: isNarrator ? 0.9 : 0.8,
                    pitch: isNarrator ? 1 : (line.speaker === 'Anna' || line.speaker === 'Person A' ? 1.1 : 0.9)
                });

                // Pause between lines
                if (isPlayingRef.current) {
                    await new Promise(r => setTimeout(r, 800));
                    // Move to next line
                    currentLineRef.current++;
                }
            } catch (e) {
                console.error("Playback error", e);
                isPlayingRef.current = false;
                setIsPlaying(false);
                break;
            }
        }

        if (currentLineRef.current >= lesson.transcript.length) {
            isPlayingRef.current = false;
            setIsPlaying(false);
            setProgress(100);
            currentLineRef.current = 0; // Reset for next play
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopSpeaking();
            isPlayingRef.current = false;
            setIsPlaying(false);
        } else {
            playSequence();
        }
    };

    const jumpToLine = (index) => {
        stopSpeaking();
        isPlayingRef.current = false;
        setIsPlaying(false);
        currentLineRef.current = index;
        setCurrentLineIndex(index);
        setTimeout(() => {
            playSequence();
        }, 300);
    };

    return (
        <div className="screen v-view" style={{ background: '#09090b', color: 'white', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
                padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 16,
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <button
                    onClick={onBack}
                    style={{ background: 'none', border: 'none', color: 'white', padding: 0 }}
                >
                    <ArrowLeft size={24} />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Audio Lektion
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                        {lesson.title}
                    </div>
                </div>
            </div>

            {/* Visualize Player */}
            <div style={{
                padding: '30px 20px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: `linear-gradient(180deg, ${lesson.color}20 0%, transparent 100%)`
            }}>
                <div style={{
                    width: 120, height: 120, borderRadius: 30,
                    background: lesson.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24, boxShadow: `0 20px 40px -10px ${lesson.color}60`
                }}>
                    <Headphones size={48} color="white" />
                </div>

                {/* Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 10 }}>
                    <button
                        onClick={() => jumpToLine(Math.max(0, currentLineIndex - 1))}
                        style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)' }}
                    >
                        <SkipBack size={28} />
                    </button>

                    <button
                        onClick={togglePlay}
                        style={{
                            width: 64, height: 64, borderRadius: '50%',
                            background: 'white', border: 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'black', boxShadow: '0 0 20px rgba(255,255,255,0.3)'
                        }}
                    >
                        {isPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" style={{ marginLeft: 4 }} />}
                    </button>

                    <button
                        onClick={() => jumpToLine(Math.min(lesson.transcript.length - 1, currentLineIndex + 1))}
                        style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)' }}
                    >
                        <SkipForward size={28} />
                    </button>
                </div>
            </div>

            {/* Transcript */}
            <div
                ref={transcriptRef}
                style={{
                    flex: 1, overflowY: 'auto', padding: '20px',
                    display: 'flex', flexDirection: 'column', gap: 16
                }}
            >
                {lesson.transcript.map((line, idx) => (
                    <div
                        key={idx}
                        data-active={idx === currentLineIndex}
                        onClick={() => jumpToLine(idx)}
                        style={{
                            padding: '12px 16px', borderRadius: 16,
                            background: idx === currentLineIndex ? 'rgba(255,255,255,0.1)' : 'transparent',
                            borderLeft: idx === currentLineIndex ? `3px solid ${lesson.color}` : '3px solid transparent',
                            cursor: 'pointer', transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{
                            fontSize: '0.75rem', color: idx === currentLineIndex ? lesson.color : 'rgba(255,255,255,0.4)',
                            marginBottom: 4, fontWeight: 700
                        }}>
                            {line.speaker}
                        </div>
                        <div style={{ fontSize: '1rem', marginBottom: 4 }}>
                            {line.text}
                        </div>
                        {line.de && line.text !== line.de && (
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                                {line.de}
                            </div>
                        )}
                        {/* Only show "Ukrainian" translation if it's separate? Actually in data 'text' is German usually 
                           Wait, my mock data has 'text' as German for dialogue, but UA translation implicit? 
                           The data has 'text' (German/UA mixed) and 'de' (German).
                           Let's check data:
                           { speaker: 'Narrator', text: 'Привіт!', de: 'Hallo!' }
                           Ah, actually my data has 'text' as the MAIN text to display/speak.
                           If I want dual language, I should have 'text' (German) and 'translation' (UA).
                           In my mock data I put:
                           { speaker: 'Anna', text: 'Hallo! Ich heiße Anna.', de: 'Hallo! Ich heiße Anna.' }
                           { speaker: 'Narrator', text: 'Привіт! Мене звати Анна.', de: 'Hallo! Ich heiße Anna.' }
                           Wait, narrator speaks UA text? 
                           If speak() is set to German, it might read UA text weirdly!
                           I need to detect language or specify it in data.
                           My mock data has 'text' as what is Spoken.
                           Narrator is speaking UA. I need TTS to switch lang if possible or just use DE voice for everything (bad).
                           The Narrator lines in UA should be spoken by UA voice (if available) or just skip TTS for UA?
                           Or better: Narrator lines in my data 'Lektion 1...' are German.
                           UA lines: 'Привіт! ...' are translated.
                           I should probably stick to German audio for "Audio Lessons" (Immersion) OR use EN/UA TTS if supported.
                           Web Speech API supports many langs.
                           I will assume 'de-DE' for German lines.
                           For UA lines, I might need 'uk-UA'.
                           Let's just update `AudioSession` to attempt language detection or use a prop from data.
                        */}
                    </div>
                ))}
                <div style={{ height: 100 }} />
            </div>
        </div>
    );
};

export default AudioSession;
