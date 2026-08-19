"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const STATS = [
  { value: "5.8M+",    label: "Active Users",      sub: "Across Ethiopia" },
  { value: "ETB 2.1T", label: "Annual Volume",      sub: "Processed securely" },
  { value: "0.8s",     label: "Avg. Settlement",    sub: "Near-instant transfers" },
  { value: "99.99%",   label: "Platform Uptime",    sub: "NBE-regulated resilience" },
];

export const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper glow="muted" className="py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 dark:divide-white/[0.06]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.45, 0.27, 0.99] }}
              className="px-6 py-10 text-center group"
            >
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tracking-tighter
                              group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500
                              dark:group-hover:from-blue-400 dark:group-hover:to-cyan-300
                              group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{stat.label}</div>
              <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
