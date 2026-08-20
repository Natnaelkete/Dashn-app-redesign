"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BLOG_POSTS } from "@/data/mockData";
import Image from "next/image";

export const BlogsSection = () => {
  return (
    <SectionWrapper id="blogs" glow="cyan" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-black tracking-tighter text-sm">
                DB
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Blogs
              </h2>
            </div>
            <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Carry Dashen Super App with you wherever you go. Our mobile app provides a smooth and secure banking experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-sm font-semibold text-slate-900 dark:text-white transition-colors border border-slate-200 dark:border-white/10 group shadow-sm"
            >
              See All Blogs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
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
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
