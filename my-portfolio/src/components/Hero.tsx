"use client";

import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, MessageCircle } from 'lucide-react';
import { config } from '../data/config';

interface HeroProps {
    scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <img
                        src={config.profileImage}
                        alt={config.name}
                        className="relative w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="space-y-2 mb-6">
                    <div className="text-cyan-400 text-lg font-semibold tracking-wider">Hello, I'm</div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {config.name}
                    </h1>
                    <div className="flex items-center justify-center space-x-3 text-2xl md:text-4xl">
                        <span className="text-gray-300">A Passionate</span>
                        <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            {config.title}
                        </span>
                    </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {config.tagline}
                </p>
                <div className="flex justify-center space-x-4 mb-12">
                    <a href={config.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-full transition-all hover:scale-110 border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/50">
                        <Github size={24} />
                    </a>
                    <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full transition-all hover:scale-110 border border-blue-500/30 hover:border-blue-400 shadow-lg hover:shadow-blue-500/50">
                        <Linkedin size={24} />
                    </a>
                    <a href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 rounded-full transition-all hover:scale-110 border border-green-500/30 hover:border-green-400 shadow-lg hover:shadow-green-500/50">
                        <MessageCircle size={24} />
                    </a>
                    <a href={`mailto:${config.email}`} className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all hover:scale-110 border border-purple-500/30 hover:border-purple-400 shadow-lg hover:shadow-purple-500/50">
                        <Mail size={24} />
                    </a>
                </div>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all font-semibold text-lg relative overflow-hidden group"
                >
                    <span className="relative z-10">Explore My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <div className="mt-16 animate-bounce">
                    <ChevronDown size={40} className="mx-auto text-cyan-400" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
