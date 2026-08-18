"use client";

import React from "react";
import { motion } from "framer-motion";
import { APP_METRICS } from "@/data/mockData";
import { TrendingUp, ShieldCheck, Zap, Layers } from "lucide-react";

export const Stats = () => {
  return (
    <section className="relative py-16 bg-[#080d16] border-y border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APP_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {metric.label}
                </span>
                {metric.growth && (
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {metric.growth}
                  </span>
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                {metric.prefix}
                {metric.value}
                {metric.suffix}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
