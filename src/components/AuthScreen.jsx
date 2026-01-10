// src/components/AuthScreen.jsx
// Екран входу/реєстрації
import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { login, register, loginWithGoogle, isLoading, error } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            await login(email, password);
        } else {
            await register(email, password, name);
        }
    };

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0B0B0F',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            paddingTop: 'calc(60px + env(safe-area-inset-top))'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{
                    fontSize: '3rem',
                    marginBottom: 12
                }}>🇩🇪</div>
                <h1 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#E5E7EB',
                    marginBottom: 8
                }}>
                    Deutsch A1
                </h1>
                <p style={{ color: '#7A7D8A', fontSize: '0.9rem' }}>
                    {isLogin ? 'Увійдіть, щоб продовжити' : 'Створіть акаунт'}
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                maxWidth: 400,
                width: '100%',
                margin: '0 auto'
            }}>
                {/* Name (only for register) */}
                {!isLogin && (
                    <div style={{ position: 'relative' }}>
                        <User
                            size={20}
                            color="#7A7D8A"
                            style={{
                                position: 'absolute',
                                left: 16,
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Ваше ім'я"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={!isLogin}
                            style={{
                                width: '100%',
                                padding: '16px 16px 16px 48px',
                                background: '#1A1A22',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: 14,
                                color: '#E5E7EB',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                )}

                {/* Email */}
                <div style={{ position: 'relative' }}>
                    <Mail
                        size={20}
                        color="#7A7D8A"
                        style={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '16px 16px 16px 48px',
                            background: '#1A1A22',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 14,
                            color: '#E5E7EB',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* Password */}
                <div style={{ position: 'relative' }}>
                    <Lock
                        size={20}
                        color="#7A7D8A"
                        style={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        style={{
                            width: '100%',
                            padding: '16px 48px 16px 48px',
                            background: '#1A1A22',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 14,
                            color: '#E5E7EB',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 4
                        }}
                    >
                        {showPassword ?
                            <EyeOff size={20} color="#7A7D8A" /> :
                            <Eye size={20} color="#7A7D8A" />
                        }
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <div style={{
                        padding: '12px 16px',
                        background: 'rgba(233, 75, 90, 0.1)',
                        border: '1px solid rgba(233, 75, 90, 0.2)',
                        borderRadius: 10,
                        color: '#E94B5A',
                        fontSize: '0.85rem'
                    }}>
                        {error}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        padding: '16px',
                        background: '#F26A1B',
                        border: 'none',
                        borderRadius: 14,
                        color: '#0B0B0F',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: isLoading ? 'wait' : 'pointer',
                        opacity: isLoading ? 0.7 : 1,
                        transition: 'opacity 0.2s'
                    }}
                >
                    {isLoading ? '...' : (isLogin ? 'Увійти' : 'Створити акаунт')}
                </button>
            </form>

            {/* Divider */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                margin: '24px auto',
                maxWidth: 400,
                width: '100%'
            }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ color: '#7A7D8A', fontSize: '0.85rem' }}>або</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            </div>

            {/* Google Login */}
            <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '14px',
                    background: '#1A1A22',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 14,
                    color: '#E5E7EB',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    maxWidth: 400,
                    width: '100%',
                    margin: '0 auto'
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Увійти з Google
            </button>

            {/* Toggle */}
            <div style={{
                textAlign: 'center',
                marginTop: 24,
                color: '#7A7D8A',
                fontSize: '0.9rem'
            }}>
                {isLogin ? 'Немає акаунту?' : 'Вже є акаунт?'}{' '}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#F26A1B',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    {isLogin ? 'Зареєструватись' : 'Увійти'}
                </button>
            </div>

            {/* Skip */}
            <button
                onClick={() => useAuthStore.setState({ user: { uid: 'guest', displayName: 'Гість' } })}
                style={{
                    marginTop: 32,
                    padding: '12px',
                    background: 'transparent',
                    border: 'none',
                    color: '#7A7D8A',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                }}
            >
                Продовжити без реєстрації
            </button>
        </div>
    );
};

export default AuthScreen;
