// src/components/LessonsTab.jsx
// Lessons List - Sidebar Navigation Design
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { getLessonsForLevel } from '../data/lexicon';
import { Check, ChevronRight, BookOpen, Clock, Play, Sparkles, PenTool } from 'lucide-react';

const LessonsTab = () => {
    const openLesson = useStore(state => state.openLesson);
    const getLessonProgress = useStore(state => state.getLessonProgress);
    const level = useStore(state => state.level);
    const startLessonWords = useStore(state => state.startLessonWords);
    const startNounMaster = useStore(state => state.startNounMaster);

    const displayLessons = getLessonsForLevel(level);
    const completedCount = displayLessons.filter(l => getLessonProgress(l.id).percent === 100).length;

    // Selected lesson for preview (default to first incomplete or first)
    const [selectedIndex, setSelectedIndex] = useState(() => {
        const firstIncomplete = displayLessons.findIndex(l => getLessonProgress(l.id).percent < 100);
        return firstIncomplete >= 0 ? firstIncomplete : 0;
    });

    const selectedLesson = displayLessons[selectedIndex];
    const selectedProgress = selectedLesson ? getLessonProgress(selectedLesson.id) : { percent: 0 };

    return (
        <div className="app" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 80,
            overflow: 'hidden',
            padding: '16px 8px 0',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Hero Header with Level Switcher */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.08), transparent)',
                borderRadius: 20,
                padding: '16px 20px',
                marginBottom: 16,
                border: '1px solid rgba(139, 92, 246, 0.2)'
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
                            📖 Уроки
                        </h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', margin: '4px 0 0' }}>
                            {displayLessons.length} уроків, {completedCount} завершено
                        </p>
                    </div>

                    {/* Level Switcher - Segmented Control */}
                    <div style={{
                        display: 'flex',
                        padding: 4,
                        background: 'rgba(0,0,0,0.35)',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <button
                            onClick={() => useStore.getState().setLevel('A1')}
                            style={{
                                padding: '10px 16px',
                                borderRadius: 10,
                                border: 'none',
                                background: level === 'A1'
                                    ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                                    : 'transparent',
                                color: level === 'A1' ? '#fff' : 'var(--text-2)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: level === 'A1' ? '0 4px 12px rgba(139, 92, 246, 0.4)' : 'none'
                            }}
                        >
                            A1
                        </button>
                        <button
                            onClick={() => useStore.getState().setLevel('A2')}
                            style={{
                                padding: '10px 16px',
                                borderRadius: 10,
                                border: 'none',
                                background: level === 'A2'
                                    ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                                    : 'transparent',
                                color: level === 'A2' ? '#fff' : 'var(--text-2)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: level === 'A2' ? '0 4px 12px rgba(139, 92, 246, 0.4)' : 'none'
                            }}
                        >
                            A2
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content - Sidebar + Details */}
            <div style={{ display: 'flex', gap: 12, height: 'calc(100vh - 260px)', overflow: 'hidden' }}>
                {/* Left Sidebar - Lesson Numbers */}
                <div style={{
                    width: 52,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    paddingRight: 4,
                    paddingBottom: 10,
                    scrollbarWidth: 'none'
                }}>

                    {/* Lesson Number Buttons */}
                    {displayLessons.map((lesson, index) => {
                        const progress = getLessonProgress(lesson.id);
                        const isComplete = progress.percent === 100;
                        const isActive = index === selectedIndex;

                        return (
                            <button
                                key={lesson.id}
                                onClick={() => setSelectedIndex(index)}
                                style={{
                                    width: '100%',
                                    aspectRatio: '1 / 1',
                                    borderRadius: 14,
                                    border: isActive
                                        ? '2px solid rgba(139, 92, 246, 0.6)'
                                        : isComplete
                                            ? '2px solid rgba(34, 197, 94, 0.4)'
                                            : '1px solid var(--stroke)',
                                    background: isActive
                                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.15))'
                                        : isComplete
                                            ? 'rgba(34, 197, 94, 0.1)'
                                            : 'var(--surface)',
                                    color: isActive
                                        ? '#a78bfa'
                                        : isComplete
                                            ? '#22c55e'
                                            : 'var(--text-1)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s',
                                    boxShadow: isActive ? '0 0 20px rgba(139, 92, 246, 0.2)' : 'none'
                                }}
                            >
                                {isComplete ? (
                                    <Check size={18} />
                                ) : (
                                    typeof lesson.number === 'string' && lesson.number.includes('Lektion')
                                        ? lesson.number.replace('Lektion ', '')
                                        : lesson.number
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right Content - Lesson Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto', paddingBottom: 20 }}>
                    {selectedLesson ? (
                        <>
                            {/* Lesson Header Card */}
                            <div style={{
                                background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.1), rgba(0,0,0,0.3))',
                                borderRadius: 24,
                                padding: 20,
                                marginBottom: 16,
                                border: '1px solid rgba(139, 92, 246, 0.25)',
                                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Decorative glow */}
                                <div style={{
                                    position: 'absolute',
                                    top: -50,
                                    right: -50,
                                    width: 150,
                                    height: 150,
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(40px)',
                                    pointerEvents: 'none'
                                }} />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, position: 'relative' }}>
                                    <div style={{ flex: 1, paddingRight: 16 }}>
                                        <div style={{
                                            fontSize: '0.7rem',
                                            color: '#a78bfa',
                                            marginBottom: 6,
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            {level} • Lektion {typeof selectedLesson.number === 'string' && selectedLesson.number.includes('Lektion')
                                                ? selectedLesson.number.replace('Lektion ', '')
                                                : selectedLesson.number}
                                        </div>
                                        <h1 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 800,
                                            color: 'var(--text-0)',
                                            margin: 0,
                                            lineHeight: 1.25,
                                            letterSpacing: '-0.02em'
                                        }}>
                                            {selectedLesson.title}
                                        </h1>
                                    </div>

                                    {/* Progress Circle - Fixed size */}
                                    <div style={{
                                        width: 54,
                                        height: 54,
                                        minWidth: 54,
                                        minHeight: 54,
                                        borderRadius: '50%',
                                        background: selectedProgress.percent === 100
                                            ? 'rgba(34, 197, 94, 0.15)'
                                            : 'rgba(139, 92, 246, 0.15)',
                                        border: selectedProgress.percent === 100
                                            ? '3px solid rgba(34, 197, 94, 0.5)'
                                            : '3px solid rgba(139, 92, 246, 0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 800,
                                        fontSize: '0.85rem',
                                        color: selectedProgress.percent === 100 ? '#22c55e' : '#a78bfa',
                                        boxShadow: selectedProgress.percent === 100
                                            ? '0 0 20px rgba(34, 197, 94, 0.3)'
                                            : '0 0 20px rgba(139, 92, 246, 0.3)',
                                        flexShrink: 0
                                    }}>
                                        {selectedProgress.percent}%
                                    </div>
                                </div>

                                <p style={{
                                    fontSize: '0.82rem',
                                    color: 'var(--text-2)',
                                    margin: '0 0 16px',
                                    lineHeight: 1.6,
                                    opacity: 0.9
                                }}>
                                    {selectedLesson.description}
                                </p>

                                {/* Progress Bar */}
                                <div style={{
                                    height: 6,
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: 3,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${selectedProgress.percent}%`,
                                        background: selectedProgress.percent === 100
                                            ? 'linear-gradient(90deg, #22c55e, #10b981)'
                                            : 'linear-gradient(90deg, #8b5cf6, #a78bfa, #6366f1)',
                                        borderRadius: 3,
                                        transition: 'width 0.3s ease',
                                        boxShadow: selectedProgress.percent > 0 ? '0 0 8px rgba(139, 92, 246, 0.5)' : 'none'
                                    }} />
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                                <button
                                    onClick={() => startLessonWords(selectedLesson.id)}
                                    style={{
                                        padding: 16,
                                        borderRadius: 16,
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.1))',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        color: '#a78bfa',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 8
                                    }}
                                >
                                    <Sparkles size={24} />
                                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Картки</span>
                                </button>

                                <button
                                    onClick={() => startNounMaster(selectedLesson.id)}
                                    style={{
                                        padding: 16,
                                        borderRadius: 16,
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1))',
                                        border: '1px solid rgba(99, 102, 241, 0.3)',
                                        color: '#818cf8',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 8
                                    }}
                                >
                                    <PenTool size={24} />
                                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Noun Master</span>
                                </button>
                            </div>

                            {/* Main CTA */}
                            <button
                                onClick={() => openLesson(selectedLesson.id)}
                                style={{
                                    width: '100%',
                                    padding: 16,
                                    borderRadius: 16,
                                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                    border: 'none',
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
                                }}
                            >
                                <Play size={20} fill="#fff" />
                                Відкрити урок
                            </button>

                            {/* Stats Footer */}
                            <div style={{
                                marginTop: 'auto',
                                paddingTop: 16,
                                display: 'flex',
                                justifyContent: 'space-around',
                                borderTop: '1px solid var(--stroke)'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-2)', textTransform: 'uppercase' }}>Уроків</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-0)' }}>{displayLessons.length}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-2)', textTransform: 'uppercase' }}>Завершено</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e' }}>{completedCount}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-2)', textTransform: 'uppercase' }}>Прогрес</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a78bfa' }}>
                                        {displayLessons.length > 0 ? Math.round((completedCount / displayLessons.length) * 100) : 0}%
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)' }}>
                            Виберіть урок
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonsTab;
