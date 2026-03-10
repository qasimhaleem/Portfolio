"use client";

import React from 'react';
import { User, Target, Award } from 'lucide-react';
import { config } from '../data/config';

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-12">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                        <User size={32} />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-cyan-500/20">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {config.about.description}
                            </p>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-lg hover:shadow-blue-500/20">
                            <div className="flex items-center mb-4">
                                <Target className="text-blue-400 mr-3" size={24} />
                                <h3 className="text-2xl font-bold text-blue-400">My Mission</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {config.about.mission}
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                        <div className="relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                            <div className="flex items-center mb-6">
                                <Award className="text-cyan-400 mr-3" size={28} />
                                <h3 className="text-2xl font-bold text-cyan-400">Key Strengths</h3>
                            </div>
                            <div className="space-y-6">
                                {config.about.highlights.map((highlight, idx) => (
                                    <div key={idx} className="group/item hover:translate-x-2 transition-transform">
                                        <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                            {highlight.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed ml-5">{highlight.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
