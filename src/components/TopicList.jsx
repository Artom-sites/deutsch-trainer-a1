import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Handshake, Users, Utensils, Home, Clock, Music, Baby, Briefcase, Building,
    Heart, MapPin, ShoppingBag, Shirt, Gift, BookType, ArrowRightCircle, HelpCircle
} from 'lucide-react';
import { topics } from '../data/topics';

// Map icon strings to components
const iconMap = {
    Handshake, Users, Utensils, Home, Clock, Music, Baby, Briefcase, Building,
    Heart, MapPin, ShoppingBag, Shirt, Gift, BookType, ArrowRightCircle, HelpCircle
};

const TopicList = () => {
    const navigate = useNavigate();

    const handleTopicClick = (topicId) => {
        navigate(`/training/${topicId}`);
    };

    return (
        <div className="pb-24 pt-4 px-4 max-w-md mx-auto">
            <header className="mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Deutsch Trainer
                </h1>
                <p className="text-gray-400">Wähle ein Thema</p>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {topics.map((topic) => {
                    const IconComponent = iconMap[topic.icon] || BookType;

                    return (
                        <div
                            key={topic.id}
                            onClick={() => handleTopicClick(topic.id)}
                            className="relative group cursor-pointer"
                        >
                            {/* Card Background with Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />

                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center space-x-4 hover:border-white/20 transition-all active:scale-[0.98]">
                                {/* Icon Container */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white shadow-lg`}>
                                    <IconComponent size={24} />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white leading-tight">
                                        {topic.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {topic.subtitle}
                                    </p>
                                </div>

                                {/* Status / Arrow */}
                                <div className="text-gray-500">
                                    {/* Placeholder for progress/status */}
                                    {/* <div className="w-2 h-2 rounded-full bg-green-500 mb-1 mx-auto"></div> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 text-center text-gray-600 text-xs">
                Topic-First Learning v2.0
            </div>
        </div>
    );
};

export default TopicList;
