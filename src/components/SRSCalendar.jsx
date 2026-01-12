import React from 'react';
import useStore from '../store/useStore';
import { getAllWords } from '../data/lexicon';
import { Clock, Calendar } from 'lucide-react';

const SRSCalendar = () => {
    const userProgress = useStore(state => state.userProgress);
    const allWords = getAllWords();

    // Group words by due date
    const stats = {
        today: 0,
        tomorrow: 0,
        week: 0,
        later: 0
    };

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);

    allWords.forEach(word => {
        const prog = userProgress[word.id];
        if (!prog || !prog.dueDate) return;

        const dueDate = new Date(prog.dueDate);

        if (dueDate <= now) {
            stats.today++;
        } else if (dueDate < tomorrow) {
            stats.today++; // Still technically today/overdue
        } else if (dueDate < new Date(tomorrow.getTime() + 86400000)) {
            stats.tomorrow++;
        } else if (dueDate < nextWeek) {
            stats.week++;
        } else {
            stats.later++;
        }
    });

    const totalScheduled = stats.today + stats.tomorrow + stats.week + stats.later;

    if (totalScheduled === 0) return null;

    const maxVal = Math.max(stats.today, stats.tomorrow, stats.week) || 1;

    return (
        <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid var(--stroke)',
            borderRadius: 20,
            padding: 16,
            marginBottom: 24
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Calendar size={18} color="var(--text-1)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-0)' }}>
                    Графік повторень
                </span>
            </div>

            <div style={{ display: 'flex', gap: 12, height: 100, alignItems: 'flex-end' }}>
                <Bar label="Сьогодні" count={stats.today} max={maxVal} color="#F26A1B" />
                <Bar label="Завтра" count={stats.tomorrow} max={maxVal} color="#2ECC71" />
                <Bar label="Тиждень" count={stats.week} max={maxVal} color="#3498DB" />
            </div>

            <div style={{
                marginTop: 12, paddingTop: 12,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', justifyContent: 'space-between',
                fontSize: '0.8rem', color: 'var(--text-2)'
            }}>
                <span>Всього на черзі:</span>
                <span style={{ color: 'var(--text-0)', fontWeight: 600 }}>{totalScheduled} слів</span>
            </div>
        </div>
    );
};

const Bar = ({ label, count, max, color }) => {
    const height = Math.max(15, (count / max) * 100);

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: count > 0 ? color : 'var(--text-2)' }}>
                {count}
            </div>
            <div style={{
                width: '100%',
                height: `${height}%`,
                background: count > 0 ? `${color}40` : 'rgba(255,255,255,0.05)',
                border: count > 0 ? `1px solid ${color}` : '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {count > 0 && <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '100%', background: `linear-gradient(to top, ${color}20, transparent)`
                }} />}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-2)' }}>
                {label}
            </div>
        </div>
    );
};

export default SRSCalendar;
