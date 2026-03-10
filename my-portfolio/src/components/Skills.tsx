"use client";

import React from 'react';
import { Code, Zap } from 'lucide-react';
import { config } from '../data/config';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-12">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4">
                        <Code size={32} />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Technical Arsenal</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {config.skills.map((skillGroup, idx) => (
                        <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 group">
                            <div className="flex items-center mb-6">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3 group-hover:animate-pulse`}></div>
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                                    {skillGroup.category}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {skillGroup.items.map((skill, i) => (
                                    <div key={i} className="flex items-center text-gray-300 hover:text-white transition-colors group/skill">
                                        <Zap size={14} className={`mr-2 text-cyan-400 group-hover/skill:animate-pulse`} />
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
