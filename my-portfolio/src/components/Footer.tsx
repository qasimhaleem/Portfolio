import React from 'react';
import { config } from '../data/config';

const Footer: React.FC = () => {
    return (
        <footer className="relative py-8 px-4 border-t border-cyan-500/20">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400 mb-2">
                    © 2025 <span className="text-cyan-400 font-semibold">{config.name}</span>. Crafted with passion and code.
                </p>
                <p className="text-sm text-gray-500">
                    Built with <span className="text-red-400">♥</span> using Next.js, React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
