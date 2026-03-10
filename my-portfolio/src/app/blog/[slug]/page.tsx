import React from 'react';
import { getPostData, getSortedPostsData } from '../../../lib/blog';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    try {
        const postData = getPostData(resolvedParams.slug);
        return {
            title: `${postData.title} | Muhammad Qasim`,
            description: postData.description,
        };
    } catch (e) {
        return {
            title: 'Post Not Found',
        };
    }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    let postData;
    try {
        postData = getPostData(resolvedParams.slug);
    } catch (e) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-slate-200 flex flex-col">
            {/* Background Animated Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <Navbar activeSection="blog" />

            <main className="flex-grow pt-32 pb-20 px-4 relative z-10">
                <div className="max-w-3xl mx-auto">

                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-10 group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to all posts
                    </Link>

                    <article>
                        <header className="mb-12 border-b border-slate-800 pb-8">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {postData.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {postData.title}
                            </h1>

                            <div className="flex items-center text-gray-400">
                                <Calendar size={18} className="mr-2" />
                                <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</time>
                            </div>
                        </header>

                        <div className="prose prose-invert prose-lg prose-cyan max-w-none">
                            {/* @ts-ignore - Type issue with react-markdown plugins in newer React versions */}
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ node, inline, className, children, ...props }: any) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                {...props}
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                className="rounded-xl border border-slate-700 bg-slate-900/80 !my-6 shadow-xl"
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code {...props} className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-sm">
                                                {children}
                                            </code>
                                        )
                                    },
                                    a: ({ node, ...props }) => <a {...props} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-all" target="_blank" rel="noopener noreferrer" />,
                                    h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold text-white mt-12 mb-6" />,
                                    h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold text-white mt-8 mb-4 border-b border-slate-800 pb-2" />,
                                    p: ({ node, ...props }) => <p {...props} className="mb-6 leading-relaxed text-slate-300" />,
                                    ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside mb-6 space-y-2 text-slate-300 ml-4" />,
                                    ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside mb-6 space-y-2 text-slate-300 ml-4" />,
                                    li: ({ node, ...props }) => <li {...props} className="pl-2 marker:text-cyan-500" />,
                                    blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-cyan-500 pl-6 py-1 my-8 bg-slate-900/50 rounded-r-xl italic text-slate-300 shadow-inner" />
                                }}
                            >
                                {postData.content}
                            </ReactMarkdown>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
