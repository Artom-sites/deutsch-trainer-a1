// src/components/GrammarExercise.jsx
// Вправа на граматику - підтримка різних типів
import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

const GrammarExercise = ({ exercises, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    // For word-order exercises
    const [orderedWords, setOrderedWords] = useState([]);
    // For fill-blank (text input)
    const [textInput, setTextInput] = useState('');

    const currentExercise = exercises[currentIndex];
    const isLastExercise = currentIndex >= exercises.length - 1;
    const isComplete = currentIndex >= exercises.length;

    // Get correct answer - support both 'answer' (string) and 'correct' (index)
    const getCorrectAnswer = () => {
        if (currentExercise.answer) return currentExercise.answer;
        if (typeof currentExercise.correct === 'number' && currentExercise.options) {
            return currentExercise.options[currentExercise.correct];
        }
        return null;
    };

    const correctAnswer = getCorrectAnswer();

    const handleSelect = (option) => {
        if (showResult) return;
        setSelectedAnswer(option);
    };

    const handleCheck = () => {
        const exerciseType = currentExercise.type || 'multiple-choice';

        if (exerciseType === 'word-order') {
            if (orderedWords.length === 0) return;
            setShowResult(true);
            const userSentence = orderedWords.join(' ');
            const correctSentence = currentExercise.correctOrder.join(' ');
            if (userSentence === correctSentence) {
                setCorrectCount(prev => prev + 1);
            }
        } else if (exerciseType === 'fill-blank') {
            if (!textInput.trim()) return;
            setShowResult(true);
            if (textInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                setCorrectCount(prev => prev + 1);
            }
        } else {
            // multiple-choice
            if (!selectedAnswer) return;
            setShowResult(true);
            if (selectedAnswer === correctAnswer) {
                setCorrectCount(prev => prev + 1);
            }
        }
    };

    const handleNext = () => {
        const exerciseType = currentExercise.type || 'multiple-choice';
        let isCurrentCorrect = false;

        if (exerciseType === 'word-order') {
            const userSentence = orderedWords.join(' ');
            const correctSentence = currentExercise.correctOrder.join(' ');
            isCurrentCorrect = userSentence === correctSentence;
        } else if (exerciseType === 'fill-blank') {
            isCurrentCorrect = textInput.trim().toLowerCase() === correctAnswer.toLowerCase();
        } else {
            isCurrentCorrect = selectedAnswer === correctAnswer;
        }

        if (isLastExercise) {
            onComplete({
                correct: correctCount + (showResult && isCurrentCorrect ? 0 : (isCurrentCorrect ? 1 : 0)),
                total: exercises.length
            });
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setOrderedWords([]);
            setTextInput('');
        }
    };

    // Word order: add word to sentence
    const addWord = (word, index) => {
        if (showResult) return;
        setOrderedWords([...orderedWords, word]);
    };

    // Word order: remove last word
    const removeLastWord = () => {
        if (showResult) return;
        setOrderedWords(orderedWords.slice(0, -1));
    };

    if (isComplete) return null;

    const exerciseType = currentExercise.type || 'multiple-choice';
    const isCorrect = exerciseType === 'fill-blank'
        ? textInput.trim().toLowerCase() === correctAnswer?.toLowerCase()
        : exerciseType === 'word-order'
            ? orderedWords.join(' ') === currentExercise.correctOrder?.join(' ')
            : selectedAnswer === correctAnswer;

    // Get available words for word-order (exclude already used)
    const availableWords = exerciseType === 'word-order'
        ? currentExercise.words?.filter((w, i) => !orderedWords.includes(w) ||
            orderedWords.filter(ow => ow === w).length < currentExercise.words.filter(cw => cw === w).length)
        : [];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Progress */}
            <div style={{ textAlign: 'center', color: 'var(--text-2)', fontSize: '0.85rem' }}>
                Übung {currentIndex + 1} / {exercises.length}
            </div>

            {/* Explanation after answer */}
            {showResult && currentExercise.explanation && (
                <div style={{
                    background: isCorrect ? 'rgba(47, 230, 166, 0.1)' : 'rgba(255, 107, 53, 0.1)',
                    border: `1px solid ${isCorrect ? 'var(--ok)' : 'var(--pri)'}`,
                    borderRadius: 12,
                    padding: 12,
                    fontSize: '0.85rem',
                    lineHeight: 1.5
                }}>
                    {isCorrect ? '✓ Richtig!' : '✗ Falsch.'} {currentExercise.explanation}
                </div>
            )}

            {/* Question Card */}
            <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--stroke)',
                borderRadius: 16,
                padding: 20,
                textAlign: 'center'
            }}>
                {exerciseType === 'word-order' ? (
                    <>
                        {/* Built sentence display */}
                        <div style={{
                            minHeight: 48,
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: 12,
                            padding: 12,
                            marginBottom: 16,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: showResult
                                ? `2px solid ${isCorrect ? 'var(--ok)' : 'var(--pri)'}`
                                : '2px dashed var(--stroke)'
                        }}>
                            {orderedWords.length === 0 ? (
                                <span style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>
                                    Tap words below to build sentence
                                </span>
                            ) : (
                                orderedWords.map((word, i) => (
                                    <span key={i} style={{
                                        background: 'var(--pri)',
                                        color: '#0B0B0F',
                                        padding: '6px 12px',
                                        borderRadius: 8,
                                        fontWeight: 600,
                                        fontSize: '0.95rem'
                                    }}>
                                        {word}
                                    </span>
                                ))
                            )}
                            {orderedWords.length > 0 && !showResult && (
                                <button
                                    onClick={removeLastWord}
                                    style={{
                                        background: 'rgba(255, 107, 53, 0.2)',
                                        border: 'none',
                                        borderRadius: 8,
                                        padding: 6,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <RotateCcw size={16} color="var(--pri)" />
                                </button>
                            )}
                        </div>
                        {/* Word bank */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                            {currentExercise.words?.map((word, i) => {
                                const usedCount = orderedWords.filter(w => w === word).length;
                                const totalCount = currentExercise.words.filter(w => w === word).length;
                                const isUsed = usedCount >= totalCount;

                                return (
                                    <button
                                        key={`${word}-${i}`}
                                        onClick={() => !isUsed && addWord(word, i)}
                                        disabled={isUsed || showResult}
                                        style={{
                                            background: isUsed ? 'var(--surface)' : 'rgba(255, 255, 255, 0.06)',
                                            border: '1px solid var(--stroke)',
                                            borderRadius: 8,
                                            padding: '8px 14px',
                                            color: isUsed ? 'var(--text-2)' : 'var(--text-0)',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            cursor: isUsed || showResult ? 'default' : 'pointer',
                                            opacity: isUsed ? 0.4 : 1,
                                            transition: 'all 0.15s'
                                        }}
                                    >
                                        {word}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Show correct answer if wrong */}
                        {showResult && !isCorrect && (
                            <div style={{ marginTop: 12, color: 'var(--ok)', fontSize: '0.9rem' }}>
                                Richtig: {currentExercise.correctOrder.join(' ')}
                            </div>
                        )}
                    </>
                ) : exerciseType === 'fill-blank' ? (
                    /* Fill blank with text input */
                    <div style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {currentExercise.question.split('___').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                    <input
                                        type="text"
                                        value={showResult ? correctAnswer : textInput}
                                        onChange={(e) => !showResult && setTextInput(e.target.value)}
                                        disabled={showResult}
                                        style={{
                                            width: 100,
                                            padding: '4px 8px',
                                            margin: '0 4px',
                                            border: showResult
                                                ? `2px solid ${isCorrect ? 'var(--ok)' : 'var(--pri)'}`
                                                : '2px solid var(--pri)',
                                            borderRadius: 8,
                                            background: 'transparent',
                                            color: showResult
                                                ? (isCorrect ? 'var(--ok)' : 'var(--pri)')
                                                : 'var(--text-0)',
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            fontSize: '1rem'
                                        }}
                                        placeholder="..."
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                ) : (
                    /* Multiple choice question */
                    <div style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {currentExercise.question.split('___').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                    <span style={{
                                        display: 'inline-block',
                                        minWidth: 70,
                                        borderBottom: '2px solid var(--pri)',
                                        marginLeft: 4,
                                        marginRight: 4,
                                        color: showResult
                                            ? (isCorrect ? 'var(--ok)' : 'var(--pri)')
                                            : 'var(--pri)',
                                        fontWeight: 700
                                    }}>
                                        {showResult ? correctAnswer : (selectedAnswer || '?')}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>

            {/* Options for multiple-choice */}
            {exerciseType === 'multiple-choice' && currentExercise.options && (
                <div style={{ display: 'grid', gap: 8 }}>
                    {currentExercise.options.map((option, idx) => {
                        const isSelected = selectedAnswer === option;
                        const isAnswer = option === correctAnswer;

                        let bgColor = 'var(--surface)';
                        let borderColor = 'var(--stroke)';

                        if (showResult) {
                            if (isAnswer) {
                                bgColor = 'rgba(47, 230, 166, 0.15)';
                                borderColor = 'var(--ok)';
                            } else if (isSelected && !isAnswer) {
                                bgColor = 'rgba(255, 107, 53, 0.15)';
                                borderColor = 'var(--pri)';
                            }
                        } else if (isSelected) {
                            bgColor = 'rgba(255, 107, 53, 0.15)';
                            borderColor = 'var(--pri)';
                        }

                        return (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                disabled={showResult}
                                style={{
                                    padding: 14,
                                    background: bgColor,
                                    border: `2px solid ${borderColor}`,
                                    borderRadius: 12,
                                    color: 'var(--text-0)',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    cursor: showResult ? 'default' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                    transition: 'all 0.15s'
                                }}
                            >
                                {showResult && isAnswer && <CheckCircle size={18} color="var(--ok)" />}
                                {showResult && isSelected && !isAnswer && <XCircle size={18} color="var(--pri)" />}
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Action Button */}
            {!showResult ? (
                <button
                    onClick={handleCheck}
                    disabled={
                        exerciseType === 'word-order' ? orderedWords.length === 0 :
                            exerciseType === 'fill-blank' ? !textInput.trim() :
                                !selectedAnswer
                    }
                    style={{
                        padding: '14px 20px',
                        background: 'var(--pri)',
                        border: 'none',
                        borderRadius: 12,
                        color: '#0B0B0F',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        opacity: (
                            exerciseType === 'word-order' ? orderedWords.length > 0 :
                                exerciseType === 'fill-blank' ? textInput.trim() :
                                    selectedAnswer
                        ) ? 1 : 0.5
                    }}
                >
                    Prüfen
                </button>
            ) : (
                <button
                    onClick={handleNext}
                    style={{
                        padding: '14px 20px',
                        background: 'var(--pri)',
                        border: 'none',
                        borderRadius: 12,
                        color: '#0B0B0F',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8
                    }}
                >
                    {isLastExercise ? 'Fertig' : 'Weiter'}
                    <ArrowRight size={18} />
                </button>
            )}
        </div>
    );
};

export default GrammarExercise;
