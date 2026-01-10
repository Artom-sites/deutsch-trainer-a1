// src/components/ShopTab.jsx
import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import useStore from '../store/useStore';
import { ShoppingBag, Lock, CheckCircle, Coffee, Headphones, Music, Monitor, Sprout, Store, Home } from 'lucide-react';

const ShopTab = () => {
    const [subTab, setSubTab] = useState('shop'); // 'shop' | 'room'
    const coins = useAuthStore(state => state.coins);
    const spendCoins = useAuthStore(state => state.spendCoins);
    const inventory = useAuthStore(state => state.inventory) || [];

    // Get learned count for unlock conditions
    const learnedCount = useStore(state => state.getLearnedCount());

    const items = [
        {
            id: 'espresso',
            name: 'Еспресо',
            description: 'Заряд енергії для навчання.',
            price: 50,
            icon: Coffee,
            color: '#D97706',
            unlocksAt: 0
        },
        {
            id: 'plant',
            name: 'Вазон',
            description: 'Додає затишку у твій простір.',
            price: 150,
            icon: Sprout,
            color: '#10B981',
            unlocksAt: 10
        },
        {
            id: 'headphones',
            name: 'Навушники',
            description: 'Щоб краще чути німецьку вимову.',
            price: 300,
            icon: Headphones,
            color: '#3B82F6',
            unlocksAt: 50
        },
        {
            id: 'guitar',
            name: 'Гітара',
            description: 'Для відпочинку після уроків.',
            price: 800,
            icon: Music,
            color: '#F59E0B',
            unlocksAt: 100
        },
        {
            id: 'macbook',
            name: 'MacBook Pro',
            description: 'Твій головний інструмент для роботи.',
            price: 2000,
            icon: Monitor,
            color: '#8B5CF6',
            unlocksAt: 200
        }
    ];

    const handlePurchase = async (item) => {
        if (inventory.includes(item.id)) return;

        if (coins >= item.price) {
            if (learnedCount < item.unlocksAt) {
                alert(`Потрібно вивчити ${item.unlocksAt} слів!`);
                return;
            }

            const success = await spendCoins(item.price, item.id);
            if (success) {
                // Could add confetti here
            }
        } else {
            alert("Недостатньо монет!");
        }
    };

    return (
        <div className="screen" style={{ paddingTop: 20, paddingBottom: 100 }}>
            {/* Header */}
            <div style={{ padding: '0 4px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#E5E7EB', marginBottom: 4 }}>
                        Магазин
                    </h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#1A1A22',
                        padding: '6px 12px',
                        borderRadius: 12,
                        width: 'fit-content',
                        marginTop: 8
                    }}>
                        <span style={{ fontSize: '1.2rem' }}>🪙</span>
                        <span style={{ fontWeight: 700, color: '#E5E7EB', fontSize: '1.1rem' }}>{coins}</span>
                    </div>
                </div>

                {/* Sub-tabs */}
                <div style={{
                    background: '#1A1A22',
                    padding: 4,
                    borderRadius: 14,
                    display: 'flex',
                    gap: 4
                }}>
                    <button
                        onClick={() => setSubTab('shop')}
                        style={{
                            background: subTab === 'shop' ? 'rgba(255,255,255,0.1)' : 'transparent',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: 10,
                            color: subTab === 'shop' ? '#E5E7EB' : '#7A7D8A',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}
                    >
                        <Store size={18} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Купити</span>
                    </button>
                    <button
                        onClick={() => setSubTab('room')}
                        style={{
                            background: subTab === 'room' ? 'rgba(255,255,255,0.1)' : 'transparent',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: 10,
                            color: subTab === 'room' ? '#E5E7EB' : '#7A7D8A',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}
                    >
                        <Home size={18} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Мій Простір</span>
                    </button>
                </div>
            </div>

            {/* SHOP TAB */}
            {subTab === 'shop' && (
                <div style={{ display: 'grid', gap: 16 }}>
                    {items.map(item => {
                        const isPurchased = inventory.includes(item.id);
                        const canAfford = coins >= item.price;
                        const isLocked = learnedCount < item.unlocksAt;

                        return (
                            <div key={item.id} style={{
                                background: '#1A1A22',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: 20,
                                padding: 16,
                                display: 'flex',
                                gap: 16,
                                opacity: isPurchased ? 0.6 : (isLocked ? 0.5 : 1),
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: 16,
                                    background: isLocked ? '#2A2A33' : `${item.color}20`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {isLocked ? <Lock size={24} color="#7A7D8A" /> : <item.icon size={32} color={item.color} />}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#E5E7EB', marginBottom: 4 }}>
                                            {item.name}
                                        </div>
                                        {isLocked && (
                                            <div style={{ fontSize: '0.75rem', color: '#F26A1B', background: 'rgba(242, 106, 27, 0.1)', padding: '2px 8px', borderRadius: 4 }}>
                                                Потрібно {item.unlocksAt} слів
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#7A7D8A', marginBottom: 16, lineHeight: 1.4 }}>
                                        {item.description}
                                    </div>

                                    <button
                                        onClick={() => handlePurchase(item)}
                                        disabled={isPurchased || isLocked || !canAfford}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: 12,
                                            border: 'none',
                                            background: isPurchased
                                                ? 'transparent'
                                                : (canAfford && !isLocked ? 'white' : 'rgba(255,255,255,0.1)'),
                                            color: isPurchased
                                                ? '#10B981'
                                                : (canAfford && !isLocked ? '#0B0B0F' : '#7A7D8A'),
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 6,
                                            cursor: (isPurchased || isLocked || !canAfford) ? 'default' : 'pointer',
                                            border: isPurchased ? '1px solid #10B981' : 'none'
                                        }}
                                    >
                                        {isPurchased ? (
                                            <>
                                                <CheckCircle size={16} />
                                                Є в колекції
                                            </>
                                        ) : (
                                            <>
                                                {isLocked ? 'Заблоковано' : `${item.price} 🪙`}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* MY ROOM TAB */}
            {subTab === 'room' && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 16
                }}>
                    {inventory.length === 0 ? (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: '#7A7D8A' }}>
                            <ShoppingBag size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
                            <div>Твоя кімната поки що пуста.</div>
                            <div style={{ fontSize: '0.85rem', marginTop: 8 }}>Завітай до магазину!</div>
                        </div>
                    ) : (
                        items.filter(i => inventory.includes(i.id)).map(item => (
                            <div key={item.id} style={{
                                background: '#1A1A22',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: 24,
                                aspectRatio: '1/1',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 16
                            }}>
                                <div style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    background: `${item.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 16
                                }}>
                                    <item.icon size={40} color={item.color} />
                                </div>
                                <div style={{ fontWeight: 600, color: '#E5E7EB', textAlign: 'center' }}>
                                    {item.name}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default ShopTab;
