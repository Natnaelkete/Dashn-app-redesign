import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, Share2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/mockData";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== id);

  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#050811] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <article className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to all blogs
          </Link>

          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono uppercase bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-300 border border-blue-600/20 dark:border-cyan-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Post Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-normal">
              {post.excerpt}
            </p>
          )}

          {/* Author bar */}
          {post.author && (
            <div className="flex items-center justify-between py-5 border-y border-slate-200 dark:border-white/10 mb-10">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-300 dark:border-white/20">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 hidden sm:inline font-mono">Share article</span>
                <button
                  aria-label="Share article"
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Main Featured Image */}
          <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-12">
            {post.content && post.content.length > 0 ? (
              post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>
                Dashen SuperApp continues to pioneer the future of modern digital lifestyle and inclusive fintech across Ethiopia. Stay tuned for further product updates and deep dives into upcoming features.
              </p>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-200 dark:border-white/10 mb-16">
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mr-2">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Other stories / Next reads */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  More From Dashen Insights
                </h2>
                <Link
                  href="/blogs"
                  className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.slice(0, 2).map((other) => (
                  <Link
                    key={other.id}
                    href={`/blogs/${other.id}`}
                    className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-4 hover:border-blue-500/40 transition-all shadow-md"
                  >
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase mb-1">
                      {other.category} · {other.readTime}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {other.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
