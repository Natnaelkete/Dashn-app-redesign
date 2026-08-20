import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/mockData";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#050811] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <SectionWrapper id="blogs-hero" glow="cyan" className="py-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Dashen Insights
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Read the latest news, financial tips, and product updates from the Dashen SuperApp ecosystem.
            </p>
          </div>
        </SectionWrapper>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="group block relative rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg aspect-square sm:aspect-[4/3] md:aspect-auto md:h-[400px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-3 relative z-10">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium">
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors line-clamp-3 relative z-10">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
