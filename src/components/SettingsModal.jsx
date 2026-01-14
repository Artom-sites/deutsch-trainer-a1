import React, { useState, useEffect } from 'react';
import useAuthStore from '../store/authStore';
import useStore from '../store/useStore';
import { X, LogOut, Bell, Volume2, VolumeX, Check } from 'lucide-react';
import { checkPermission, requestNotificationPermission } from '../utils/notifications';

const SettingsModal = ({ onClose }) => {
    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);

    // Sound settings from store
    const soundEnabled = useStore(state => state.soundEnabled);
    const soundMode = useStore(state => state.soundMode);
    const toggleSound = useStore(state => state.toggleSound);
    const setSoundMode = useStore(state => state.setSoundMode);

    // Notification state
    const [notifEnabled, setNotifEnabled] = useState(false);
    const [showSoundOptions, setShowSoundOptions] = useState(false);

    useEffect(() => {
        setNotifEnabled(checkPermission());
    }, []);

    const handleNotifToggle = async () => {
        if (!notifEnabled) {
            const granted = await requestNotificationPermission();
            setNotifEnabled(granted);
        }
    };

    const handleLogout = async () => {
        await logout();
        onClose();
        window.location.reload();
    };

    const soundModeLabels = {
        all: 'Всі звуки',
        effects: 'Тільки ефекти',
        none: 'Вимкнено'
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20
        }} onClick={onClose}>
            <div
                onClick={e => e.stopPropagation()}
                className="glass-panel"
                style={{
                    width: '100%', maxWidth: 400,
                    background: '#1c1c24', borderRadius: 24,
                    overflow: 'hidden', border: '1px solid var(--stroke)'
                }}
            >
                {/* Header */}
                <div style={{
                    padding: 20, borderBottom: '1px solid var(--stroke)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Профіль</h2>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-1)', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: 24 }}>
                    {/* User Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                        <div style={{
                            width: 64, height: 64, borderRadius: '50%',
                            background: 'var(--pri-soft)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.8rem', color: 'var(--pri)', border: '2px solid rgba(255,107,53,0.3)'
                        }}>
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                            ) : (
                                (user?.displayName?.[0] || 'U').toUpperCase()
                            )}
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                                {user?.displayName || 'Гість'}
                            </div>
                            <div style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>
                                {user?.email}
                            </div>
                        </div>
                    </div>

                    {/* Settings List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {/* Notifications */}
                        <div
                            onClick={handleNotifToggle}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: 16, background: 'rgba(255,255,255,0.03)', borderRadius: 16,
                                cursor: 'pointer', transition: 'background 0.15s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Bell size={20} color="var(--text-2)" />
                                <span>Сповіщення</span>
                            </div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: notifEnabled ? '#2fe6a6' : 'var(--text-2)',
                                display: 'flex', alignItems: 'center', gap: 6
                            }}>
                                {notifEnabled ? <><Check size={14} /> Увімкнено</> : 'Вимкнено'}
                            </div>
                        </div>

                        {/* Sound Settings */}
                        <div
                            onClick={() => setShowSoundOptions(!showSoundOptions)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: 16, background: 'rgba(255,255,255,0.03)', borderRadius: 16,
                                cursor: 'pointer', transition: 'background 0.15s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                {soundEnabled ? <Volume2 size={20} color="var(--text-2)" /> : <VolumeX size={20} color="var(--text-2)" />}
                                <span>Звук</span>
                            </div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: soundEnabled ? '#2fe6a6' : 'var(--text-2)'
                            }}>
                                {soundModeLabels[soundMode]}
                            </div>
                        </div>

                        {/* Sound Options Dropdown */}
                        {showSoundOptions && (
                            <div style={{
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: 12,
                                overflow: 'hidden',
                                marginTop: -8
                            }}>
                                {(['all', 'effects', 'none']).map(mode => (
                                    <div
                                        key={mode}
                                        onClick={() => {
                                            setSoundMode(mode);
                                            if (mode === 'none') {
                                                useStore.setState({ soundEnabled: false });
                                            } else {
                                                useStore.setState({ soundEnabled: true });
                                            }
                                            setShowSoundOptions(false);
                                        }}
                                        style={{
                                            padding: '12px 16px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            background: soundMode === mode ? 'rgba(139,92,246,0.15)' : 'transparent',
                                            borderLeft: soundMode === mode ? '3px solid #8b5cf6' : '3px solid transparent'
                                        }}
                                    >
                                        <span style={{ color: soundMode === mode ? '#fff' : 'var(--text-2)' }}>
                                            {soundModeLabels[mode]}
                                        </span>
                                        {soundMode === mode && <Check size={16} color="#8b5cf6" />}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            style={{
                                marginTop: 24, width: '100%', padding: 16,
                                background: 'rgba(233, 75, 90, 0.1)',
                                border: '1px solid rgba(233, 75, 90, 0.3)',
                                borderRadius: 16,
                                color: '#E94B5A', fontWeight: 600, fontSize: '1rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                cursor: 'pointer'
                            }}
                        >
                            <LogOut size={20} />
                            Вийти з акаунта
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
