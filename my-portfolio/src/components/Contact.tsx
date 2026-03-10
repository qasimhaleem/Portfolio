"use client";

import React from 'react';
import { Send, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { config } from '../data/config';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-12">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                        <Send size={32} />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</h2>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-cyan-500/20 mb-8">
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        I'm always excited to collaborate on innovative projects, discuss new opportunities, or simply connect with fellow developers. Whether you have a project in mind or just want to say hello, feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href={`mailto:${config.email}`}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
                        >
                            <Mail className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                            Send Email
                        </a>
                        <a
                            href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'd like to connect with you regarding your portfolio.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
                        >
                            <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                            WhatsApp Chat
                        </a>
                        <a
                            href={config.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-900 border-2 border-cyan-500/50 hover:border-cyan-400 rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
                        >
                            <Linkedin className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
