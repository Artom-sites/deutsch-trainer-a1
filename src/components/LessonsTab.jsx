// src/components/LessonsTab.jsx
// Вкладка "Уроки" - Vertical Timeline Design
import React, { useRef, useEffect } from 'react';
import useStore from '../store/useStore';
import { lessons } from '../data/lexicon';
import { Check, Lock, Star, Play, Zap, Trophy } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const scrollRef = useRef(null);

    // Group lessons if needed, or just flat list for timeline
    // For timeline, a flat list is often better, maybe with section breakers
    const allLessons = lessons;

    // Find first incomplete lesson (current)
    const currentLessonId = allLessons.find(l => getLessonProgress(l.id).percent < 100)?.id || allLessons[allLessons.length - 1].id;

    // Auto-scroll to current lesson
    useEffect(() => {
        if (scrollRef.current) {
            const activeNode = scrollRef.current.querySelector('#active-lesson');
            if (activeNode) {
                activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, []);

    const completedCount = allLessons.filter(l => getLessonProgress(l.id).percent === 100).length;

    return (
        <div className="screen" ref={scrollRef} style={{
            paddingTop: 20,
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Header */}
            <div style={{
                width: '100%',
                marginBottom: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#E5E7EB', marginBottom: 4 }}>
                        Map
                    </h1>
                    <p style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>
                        Рівень A1 • {completedCount}/{allLessons.length}
                    </p>
                </div>
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    padding: '8px 12px',
                    display: 'flex', alignItems: 'center', gap: 6
                }}>
                    <Trophy size={16} color="#F26A1B" />
                    <span style={{ fontWeight: 600, color: '#E5E7EB' }}>{completedCount}</span>
                </div>
            </div>

            {/* Timeline Container */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 40
            }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    top: 20,
                    bottom: 20,
                    left: '50%',
                    width: 4,
                    marginLeft: -2,
                    background: 'linear-gradient(to bottom, #2ECC71 0%, #F26A1B 50%, #1A1A22 100%)',
                    borderRadius: 2,
                    zIndex: 0,
                    opacity: 0.3
                }} />

                {allLessons.map((lesson, index) => {
                    const progress = getLessonProgress(lesson.id);
                    const isComplete = progress.percent === 100;
                    const isCurrent = lesson.id === currentLessonId;
                    const isLocked = !isComplete && !isCurrent && index > 0 && getLessonProgress(allLessons[index - 1].id).percent < 100;

                    // Alternating layout for variety (optional, keeping centered for now for solid mobile feel)

                    return (
                        <div
                            key={lesson.id}
                            id={isCurrent ? 'active-lesson' : undefined}
                            onClick={() => !isLocked && openLesson(lesson.id)}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                opacity: isLocked ? 0.5 : 1,
                                transform: isCurrent ? 'scale(1.05)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: isLocked ? 'default' : 'pointer'
                            }}
                        >
                            {/* Connector status if needed */}

                            {/* The Node/Button */}
                            <div style={{
                                width: isCurrent ? 80 : 64,
                                height: isCurrent ? 80 : 64,
                                borderRadius: '50%',
                                background: isComplete
                                    ? '#2ECC71' // Green for done
                                    : isCurrent
                                        ? 'linear-gradient(135deg, #F26A1B, #E55A0A)' // Orange for current
                                        : '#1A1A22', // Dark for locked/upcoming
                                border: isCurrent
                                    ? '4px solid rgba(242, 106, 27, 0.3)'
                                    : isComplete
                                        ? '4px solid rgba(46, 204, 113, 0.3)'
                                        : '4px solid #2A2A35',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: isCurrent
                                    ? '0 0 20px rgba(242, 106, 27, 0.4)'
                                    : '0 4px 10px rgba(0,0,0,0.3)',
                                marginBottom: 12,
                                position: 'relative'
                            }}>
                                {isComplete ? (
                                    <Check size={32} color="#0B0B0F" strokeWidth={3} />
                                ) : isCurrent ? (
                                    <Play size={36} color="#0B0B0F" style={{ marginLeft: 4 }} fill="#0B0B0F" />
                                ) : isLocked ? (
                                    <Lock size={24} color="#7A7D8A" />
                                ) : (
                                    <Star size={24} color="#7A7D8A" />
                                )}

                                {/* Floating star count or ID if completed/current ?? */}
                                {isCurrent && (
                                    <div style={{
                                        position: 'absolute',
                                        top: -12,
                                        right: -12,
                                        background: '#E55A0A',
                                        borderRadius: 12,
                                        padding: '4px 8px',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        color: 'white',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                    }}>
                                        START
                                    </div>
                                )}
                            </div>

                            {/* Label Board */}
                            <div style={{
                                background: '#1A1A22',
                                border: isCurrent ? '1px solid rgba(242, 106, 27, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                                padding: '8px 16px',
                                borderRadius: 12,
                                textAlign: 'center',
                                minWidth: 140,
                                maxWidth: 200
                            }}>
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    color: isCurrent ? '#F26A1B' : isComplete ? '#2ECC71' : '#E5E7EB',
                                    marginBottom: 2
                                }}>
                                    Lektion {lesson.id}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#B0B3C0' }}>
                                    {lesson.title}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LessonsTab;
