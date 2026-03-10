import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';
import { Calendar, ChevronRight, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Blog | Muhammad Qasim',
    description: 'Writings on web development, React, Next.js, and software engineering.',
};

export default function BlogList() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex flex-col">
            {/* Background Animated Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* 
        Pass a dummy activeSection that will just highlight "blog".
        We also pass an empty scrollToSection because on this page we want real navigation,
        which we'll handle by modifying Navbar shortly. 
      */}
            <Navbar activeSection="blog" />

            <main className="flex-grow pt-32 pb-20 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-12">
                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                            <BookOpen size={32} />
                        </div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Developer Blog</h1>
                    </div>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Welcome to my digital garden. Here I share my thoughts, learnings, and technical deep-dives on full-stack development.
                    </p>

                    <div className="space-y-8">
                        {allPostsData.map(({ slug, title, date, description, tags }) => (
                            <article
                                key={slug}
                                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 transition-all group"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 sm:mb-0">
                                        <Link href={`/blog/${slug}`} className="hover:underline">
                                            {title}
                                        </Link>
                                    </h2>
                                    <div className="flex items-center text-sm text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} className="mr-2 text-cyan-500" />
                                        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</time>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {description}
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {tags?.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-semibold text-gray-300 border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/blog/${slug}`}
                                        className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link w-fit"
                                    >
                                        Read Article
                                        <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {allPostsData.length === 0 && (
                        <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                            <p className="text-gray-400 text-lg">No posts yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
