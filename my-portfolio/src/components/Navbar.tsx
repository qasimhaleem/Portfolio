"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {
    activeSection: string;
    scrollToSection?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        setIsMenuOpen(false);
        if (id === 'blog') {
            router.push('/blog');
            return;
        }

        if (!isHomePage) {
            // Need to route back to home and append hash to scroll
            router.push(`/#${id}`);
        } else if (scrollToSection) {
            // Smooth scroll on the same page
            scrollToSection(id);
        }
    };

    const navItems = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="flex items-center cursor-pointer group"
                        >
                            <img
                                src="/icon.png"
                                alt="Logo"
                                className="w-12 h-12 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hover:scale-110 transition-all group-hover:rotate-12"
                            />
                        </button>

                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className={`capitalize transition-all relative group ${activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                </button>
                            ))}
                        </div>

                        <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/20">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="capitalize block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded transition-all"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
