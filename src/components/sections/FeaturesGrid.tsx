"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CORE_FEATURES } from "@/data/mockData";
import {
  UserCheck,
  PieChart,
  LayoutGrid,
  MessageSquare,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  PieChart,
  LayoutGrid,
  MessageSquare,
  WifiOff,
  ShieldCheck,
};

export const FeaturesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Core", "Smart Finance", "Lifestyle", "Offline & Security"];

  const filteredFeatures =
    selectedCategory === "All"
      ? CORE_FEATURES
      : CORE_FEATURES.filter((f) => f.category === selectedCategory);

  return (
    <section id="features" className="py-24 bg-[#06090e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="cyan" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Cutting-Edge Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Modern Ethiopia.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Built for the Future.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From zero-paperwork biometric onboarding to automated offline USSD sync,
            every single feature was designed to make your financial life simpler, faster, and smarter.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => {
            const Icon = iconMap[feature.iconName] || Sparkles;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#0e1626]/80 to-[#080d16]/80 border border-white/[0.08] hover:border-blue-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Top Badge and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-cyan-400 block mb-3 font-mono">
                    {feature.tagline}
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights checklist & stats */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
                  <div className="space-y-2">
                    {feature.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {feature.stats && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/[0.05] flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        {feature.stats.label}
                      </span>
                      <span className="text-xs font-bold font-mono text-emerald-400">
                        {feature.stats.value}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
