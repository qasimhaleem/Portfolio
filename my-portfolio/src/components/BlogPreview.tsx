import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { getSortedPostsData } from '../lib/blog';

// This is a Server Component, so we can fetch data directly during render
const BlogPreview = () => {
    // Fetch only the 3 most recent posts for the homepage
    const recentPosts = getSortedPostsData().slice(0, 3);

    if (recentPosts.length === 0) return null; // Don't render the section if no posts exist

    return (
        <section id="blog" className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                    <div className="flex items-center">
                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Latest Articles</h2>
                    </div>

                    <Link
                        href="/blog"
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group px-6 py-3 bg-slate-900/50 rounded-full border border-slate-700 hover:border-cyan-500/50"
                    >
                        <span className="font-semibold mr-2">View All Posts</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {recentPosts.map(({ slug, title, date, description, tags }) => (
                        <Link
                            href={`/blog/${slug}`}
                            key={slug}
                            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 transition-all group flex flex-col h-full hover:-translate-y-1"
                        >
                            <div className="flex items-center text-xs text-gray-400 mb-4 bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                <Calendar size={12} className="mr-2 text-cyan-500" />
                                <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}</time>
                            </div>

                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                                {title}
                            </h3>

                            <p className="text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-slate-800/80 rounded-full text-xs font-semibold text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                                {tags && tags.length > 2 && (
                                    <span className="px-2 py-1 bg-slate-800/80 rounded-full text-xs font-semibold text-gray-400">
                                        +{tags.length - 2}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
