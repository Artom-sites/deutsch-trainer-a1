import React from 'react';
import useStore from '../store/useStore';
import useAuthStore from '../store/authStore';
import { getAllWords } from '../data/lexicon';
import { TrendingUp, Calendar, Clock } from 'lucide-react';

const SRSCalendar = () => {
    const userProgress = useStore(state => state.userProgress);
    const weeklyActivity = useAuthStore(state => state.weeklyActivity) || [0, 0, 0, 0, 0, 0, 0];
    const allWords = getAllWords();

    // Count words due today (for review)
    let dueToday = 0;
    const now = new Date();

    allWords.forEach(word => {
        const prog = userProgress[word.id];
        if (prog?.dueDate) {
            const dueDate = new Date(prog.dueDate);
            if (dueDate <= now) {
                dueToday++;
            }
        }
    });

    // Calculate this week's total activity (minutes)
    const totalMinutes = weeklyActivity.reduce((a, b) => a + b, 0);

    // Get day names for past 7 days (starting from today going back)
    const dayNames = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const today = new Date().getDay();

    // weeklyActivity is [Mon, Tue, Wed, Thu, Fri, Sat, Sun] = index 0-6
    // We want to show it in order with today highlighted
    const todayIndex = today === 0 ? 6 : today - 1; // Convert to 0=Mon format

    const maxVal = Math.max(...weeklyActivity, 1);

    return (
        <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid var(--stroke)',
            borderRadius: 20,
            padding: 16,
            marginBottom: 24
        }}>
            {/* Header with Due Today */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <TrendingUp size={18} color="var(--pri)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-0)' }}>
                        Твій тиждень
                    </span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                    {totalMinutes} хв загалом
                </span>
            </div>

            {/* Activity Bars - Past 7 days */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: 60,
                gap: 6,
                marginBottom: 12
            }}>
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day, i) => {
                    const value = weeklyActivity[i] || 0;
                    const heightPercent = (value / maxVal) * 100;
                    const isToday = i === todayIndex;
                    const isPast = i < todayIndex;

                    return (
                        <div key={day} style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 4
                        }}>
                            <div style={{
                                width: '100%',
                                height: Math.max(heightPercent * 0.5, 4),
                                borderRadius: 4,
                                background: isToday
                                    ? 'linear-gradient(180deg, #F26A1B, #E55A0D)'
                                    : value > 0
                                        ? 'linear-gradient(180deg, rgba(87,166,255,0.8), rgba(87,166,255,0.4))'
                                        : isPast
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(255,255,255,0.03)',
                                transition: 'height 0.3s ease'
                            }} />
                            <span style={{
                                fontSize: '0.65rem',
                                color: isToday ? 'var(--text-0)' : 'var(--text-2)',
                                fontWeight: isToday ? 600 : 400
                            }}>
                                {day}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Due Today Section */}
            {dueToday > 0 && (
                <div style={{
                    paddingTop: 12,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Clock size={14} color="var(--pri)" />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>
                            Потрібно повторити:
                        </span>
                    </div>
                    <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--pri)'
                    }}>
                        {dueToday} слів
                    </span>
                </div>
            )}
        </div>
    );
};

export default SRSCalendar;
