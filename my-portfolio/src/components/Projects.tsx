"use client";

import React from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { config } from '../data/config';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-12">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                        <Briefcase size={32} />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {config.projects.map((project, idx) => (
                        <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border border-slate-800 hover:border-cyan-500/40 group">
                            <div className="relative overflow-hidden h-56">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                                <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-bold shadow-lg`}>
                                    Project {idx + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-sm font-semibold border border-cyan-500/30`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group/link"
                                    >
                                        <Github size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group/link"
                                    >
                                        <ExternalLink size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                                        <span className="font-semibold">Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
