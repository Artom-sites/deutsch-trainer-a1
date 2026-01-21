// src/components/exercises/PerfektMaster.jsx
// Вправа: Вибір правильної форми Perfekt
import React, { useState, useMemo, useCallback } from 'react';
import { ArrowRight, CheckCircle, XCircle, Volume2, RotateCcw, Trophy, BookOpen } from 'lucide-react';
import { getAllVerbs } from '../../data/lexicon';
import { speakSentence } from '../../utils/speech';

// Генерація дистракторів для Perfekt
const generateDistractors = (verb) => {
    const correctPerfekt = verb.perfekt;
    if (!correctPerfekt) return null;

    const distractors = new Set();

    // Розбираємо правильну форму
    const parts = correctPerfekt.split(' ');
    const auxiliary = parts[0]; // hat / ist
    const participle = parts.slice(1).join(' '); // gegangen, gemacht, etc.

    // Визначаємо неправильний допоміжник
    const wrongAuxiliary = auxiliary === 'hat' ? 'ist' : 'hat';

    // Дистрактор 1: Неправильний допоміжник
    distractors.add(`${wrongAuxiliary} ${participle}`);

    // Дистрактор 2: Регулярна форма (ge- + корінь + -t)
    const infinitiv = verb.infinitiv;
    let stem = infinitiv;

    // Видаляємо -en або -n з кінця
    if (infinitiv.endsWith('en')) {
        stem = infinitiv.slice(0, -2);
    } else if (infinitiv.endsWith('n')) {
        stem = infinitiv.slice(0, -1);
    }

    // Генеруємо "регулярну" форму
    const regularParticiple = `ge${stem}t`;
    if (regularParticiple !== participle) {
        distractors.add(`${auxiliary} ${regularParticiple}`);
    }

    // Дистрактор 3: Неправильне закінчення
    if (participle.endsWith('en')) {
        // Міняємо -en на -t
        const wrongEnding = participle.slice(0, -2) + 't';
        distractors.add(`${auxiliary} ${wrongEnding}`);
    } else if (participle.endsWith('t')) {
        // Міняємо -t на -en
        const wrongEnding = participle.slice(0, -1) + 'en';
        distractors.add(`${auxiliary} ${wrongEnding}`);
    }

    // Дистрактор 4: Подвійна помилка (неправильний допоміжник + регулярна форма)
    if (regularParticiple !== participle) {
        distractors.add(`${wrongAuxiliary} ${regularParticiple}`);
    }

    // Дистрактор 5: Змінений корінь для нерегулярних
    if (verb.type === 'irregular' || verb.type === 'modal') {
        // Спроба створити схожу, але неправильну форму
        const vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
        const participleLower = participle.toLowerCase();

        for (let i = 2; i < participle.length - 2; i++) {
            if (vowels.includes(participleLower[i])) {
                // Замінюємо голосну на схожу
                const replacements = {
                    'a': 'ä', 'ä': 'a',
                    'e': 'i', 'i': 'e',
                    'o': 'u', 'u': 'o',
                    'ö': 'ü', 'ü': 'ö'
                };
                const replacement = replacements[participleLower[i]];
                if (replacement) {
                    const wrongVowel = participle.slice(0, i) + replacement + participle.slice(i + 1);
                    distractors.add(`${auxiliary} ${wrongVowel}`);
                    break;
                }
            }
        }
    }

    // Видаляємо правильну відповідь якщо випадково потрапила
    distractors.delete(correctPerfekt);

    // Перетворюємо на масив і беремо 2 дистрактори
    const distractorArray = Array.from(distractors).slice(0, 2);

    // Якщо недостатньо дистракторів, додаємо базові
    while (distractorArray.length < 2) {
        const fallback = `${wrongAuxiliary} ${participle}`;
        if (!distractorArray.includes(fallback) && fallback !== correctPerfekt) {
            distractorArray.push(fallback);
        } else {
            distractorArray.push(`${auxiliary} ge${stem}et`);
        }
    }

    return distractorArray;
};

// Перемішування масиву
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const PerfektMaster = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [showComplete, setShowComplete] = useState(false);

    // Фільтруємо дієслова з Perfekt
    const verbsWithPerfekt = useMemo(() => {
        const allVerbs = getAllVerbs();
        return shuffleArray(
            allVerbs.filter(v => v.perfekt && v.perfekt.includes(' '))
        ).slice(0, 20); // Беремо 20 випадкових
    }, []);

    const currentVerb = verbsWithPerfekt[currentIndex];

    // Генеруємо варіанти для поточного дієслова
    const options = useMemo(() => {
        if (!currentVerb) return [];

        const distractors = generateDistractors(currentVerb);
        if (!distractors) return [];

        const allOptions = [currentVerb.perfekt, ...distractors];
        return shuffleArray(allOptions);
    }, [currentVerb]);

    const correctAnswer = currentVerb?.perfekt;
    const isCorrect = selectedAnswer === correctAnswer;

    const handleSelect = (option) => {
        if (showResult) return;
        setSelectedAnswer(option);
    };

    const handleCheck = () => {
        if (selectedAnswer === null) return;
        setShowResult(true);
        setScore(prev => ({
            correct: prev.correct + (selectedAnswer === correctAnswer ? 1 : 0),
            total: prev.total + 1
        }));
    };

    const handleNext = () => {
        if (currentIndex >= verbsWithPerfekt.length - 1) {
            setShowComplete(true);
            return;
        }
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore({ correct: 0, total: 0 });
        setShowComplete(false);
    };

    const handleSpeak = useCallback(() => {
        if (currentVerb) {
            speakSentence(currentVerb.infinitiv);
        }
    }, [currentVerb]);

    // Екран завершення
    if (showComplete) {
        const percentage = Math.round((score.correct / score.total) * 100);
        return (
            <div className="screen">
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-xl)'
                }}>
                    <div style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: percentage >= 70
                            ? 'linear-gradient(135deg, var(--color-success), #22c55e)'
                            : 'linear-gradient(135deg, var(--color-warning), #f59e0b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-lg)'
                    }}>
                        <Trophy size={48} color="white" />
                    </div>

                    <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: 'var(--space-sm)',
                        color: 'var(--text-primary)'
                    }}>
                        Вправу завершено!
                    </h2>

                    <p style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: percentage >= 70 ? 'var(--color-success)' : 'var(--color-warning)',
                        marginBottom: 'var(--space-md)'
                    }}>
                        {score.correct} / {score.total} ({percentage}%)
                    </p>

                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--space-xl)',
                        textAlign: 'center'
                    }}>
                        {percentage >= 90 ? 'Чудово! Ви майстер Perfekt!' :
                            percentage >= 70 ? 'Добре! Продовжуйте практикуватися!' :
                                'Варто повторити матеріал про Perfekt'}
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={handleRestart}
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                        <RotateCcw size={18} />
                        Спробувати ще раз
                    </button>
                </div>
            </div>
        );
    }

    if (!currentVerb || options.length === 0) {
        return (
            <div className="screen">
                <div style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
                    <p>Немає доступних дієслів з формою Perfekt</p>
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            {/* Header з прогресом */}
            <div style={{
                padding: 'var(--space-md)',
                borderBottom: '1px solid var(--border-subtle)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-sm)'
                }}>
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)'
                    }}>
                        <BookOpen size={16} />
                        Perfekt (минулий час)
                    </span>
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                    }}>
                        {currentIndex + 1} / {verbsWithPerfekt.length}
                    </span>
                </div>

                {/* Progress bar */}
                <div style={{
                    height: 4,
                    background: 'var(--bg-tertiary)',
                    borderRadius: 2,
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${((currentIndex + 1) / verbsWithPerfekt.length) * 100}%`,
                        background: 'var(--color-accent)',
                        borderRadius: 2,
                        transition: 'width 0.3s ease'
                    }} />
                </div>

                {/* Score */}
                <div style={{
                    marginTop: 'var(--space-sm)',
                    fontSize: '0.8rem',
                    color: 'var(--text-tertiary)',
                    textAlign: 'right'
                }}>
                    Правильно: {score.correct} / {score.total}
                </div>
            </div>

            {/* Main content */}
            <div style={{ padding: 'var(--space-lg)', flex: 1 }}>
                {/* Дієслово */}
                <div className="card" style={{
                    padding: 'var(--space-xl)',
                    textAlign: 'center',
                    marginBottom: 'var(--space-lg)',
                    background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-md)',
                        marginBottom: 'var(--space-sm)'
                    }}>
                        <span style={{
                            fontSize: '1.8rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)'
                        }}>
                            {currentVerb.infinitiv}
                        </span>
                        <button
                            onClick={handleSpeak}
                            style={{
                                background: 'var(--bg-tertiary)',
                                border: 'none',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <Volume2 size={20} color="var(--text-secondary)" />
                        </button>
                    </div>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        marginBottom: 'var(--space-md)'
                    }}>
                        {currentVerb.translation}
                    </p>

                    <div style={{
                        padding: 'var(--space-sm) var(--space-md)',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-full)',
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        color: 'var(--text-tertiary)'
                    }}>
                        Виберіть правильну форму Perfekt
                    </div>
                </div>

                {/* Варіанти відповідей */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    {options.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        const isAnswer = option === correctAnswer;

                        let bgColor = 'var(--bg-card)';
                        let borderColor = 'transparent';
                        let textColor = 'var(--text-primary)';

                        if (showResult) {
                            if (isAnswer) {
                                bgColor = 'rgba(34, 197, 94, 0.15)';
                                borderColor = 'var(--color-success)';
                                textColor = 'var(--color-success)';
                            } else if (isSelected && !isAnswer) {
                                bgColor = 'rgba(239, 68, 68, 0.15)';
                                borderColor = 'var(--color-error)';
                                textColor = 'var(--color-error)';
                            }
                        } else if (isSelected) {
                            bgColor = 'rgba(139, 92, 246, 0.15)';
                            borderColor = 'var(--color-accent)';
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleSelect(option)}
                                disabled={showResult}
                                style={{
                                    padding: 'var(--space-md) var(--space-lg)',
                                    background: bgColor,
                                    border: `2px solid ${borderColor}`,
                                    borderRadius: 'var(--radius-lg)',
                                    color: textColor,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: showResult ? 'default' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 'var(--space-sm)',
                                    minHeight: 60,
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'inherit'
                                }}
                            >
                                {showResult && isAnswer && <CheckCircle size={20} color="var(--color-success)" />}
                                {showResult && isSelected && !isAnswer && <XCircle size={20} color="var(--color-error)" />}
                                {option}
                            </button>
                        );
                    })}
                </div>

                {/* Пояснення при помилці */}
                {showResult && !isCorrect && (
                    <div className="card fade-in" style={{
                        marginTop: 'var(--space-lg)',
                        padding: 'var(--space-md)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        borderLeft: '4px solid var(--color-warning)'
                    }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <strong>Правильна відповідь:</strong> {correctAnswer}
                            {currentVerb.type === 'irregular' && (
                                <span style={{ display: 'block', marginTop: 4 }}>
                                    Це нерегулярне дієслово
                                </span>
                            )}
                            {currentVerb.auxiliary === 'sein' && (
                                <span style={{ display: 'block', marginTop: 4 }}>
                                    Вживається з допоміжним дієсловом "sein" (рух або зміна стану)
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Action button */}
            <div style={{ padding: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                {!showResult ? (
                    <button
                        className="btn btn-primary"
                        onClick={handleCheck}
                        disabled={selectedAnswer === null}
                        style={{
                            width: '100%',
                            opacity: selectedAnswer !== null ? 1 : 0.5
                        }}
                    >
                        Перевірити
                    </button>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={handleNext}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                        {currentIndex >= verbsWithPerfekt.length - 1 ? 'Завершити' : 'Далі'}
                        <ArrowRight size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PerfektMaster;
