"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

interface PortfolioClientProps {
    blogPreview: React.ReactNode;
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ blogPreview }) => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <>
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

            <main>
                <Hero scrollToSection={scrollToSection} />
                <About />
                <Skills />
                <Projects />
                {blogPreview}
                <Contact />
            </main>
        </>
    );
};

export default PortfolioClient;
