"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, WifiOff, PieChart, Layers, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Feature {
  icon: React.ElementType;
  label: string;
  title: string;
  desc: string;
  spotlight: string;
}

const FEATURES: Feature[] = [
  {
    icon: Fingerprint,
    label: "Fayda e-KYC",
    title: "Open Account in 60 Seconds",
    desc: "Instant biometric onboarding via National ID. Zero branch visits, zero paperwork — from anywhere in Ethiopia.",
    spotlight: "from-blue-500/25",
  },
  {
    icon: WifiOff,
    label: "Offline Resilience",
    title: "Banking with Zero Data",
    desc: "Automatically routes via encrypted *996# USSD the moment your internet drops. 100% uptime guaranteed.",
    spotlight: "from-cyan-400/20",
  },
  {
    icon: PieChart,
    label: "AI Finance",
    title: "Smart Budget Insights",
    desc: "Automated expense categories, goal savings pots, and predictive bill alerts powered by on-device AI.",
    spotlight: "from-blue-400/20",
  },
  {
    icon: Layers,
    label: "50+ Mini Apps",
    title: "All Services, One Place",
    desc: "Ethiopian Airlines tickets, Ethio Telecom top-ups, utility bills, and merchant payments — settled instantly.",
    spotlight: "from-cyan-500/20",
  },
  {
    icon: Zap,
    label: "Instant Settlement",
    title: "Sub-Second Transfers",
    desc: "EthSwitch-powered interbank network with 0.8s average settlement across every Ethiopian bank.",
    spotlight: "from-blue-600/22",
  },
];

/** Single feature card with mouse-tracked spotlight glow */
function FeatureCard({
  feature,
  index,
  className = "",
}: {
  feature: Feature;
  index: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, inside: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, inside: true });
  };
  const handleLeave = () => setMouse((m) => ({ ...m, inside: false }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.21, 0.45, 0.27, 0.99] }}
      className={`h-full ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative rounded-3xl border border-slate-200/90 dark:border-white/[0.07] bg-white dark:bg-white/[0.025]
                   overflow-hidden cursor-default transition-all duration-500
                   shadow-sm dark:shadow-none hover:border-blue-500/40 dark:hover:border-blue-500/30
                   hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.20)]
                   h-full flex flex-col justify-between"
      >
        {/* Per-card cursor spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: mouse.inside ? 1 : 0,
            background: `radial-gradient(360px circle at ${mouse.x}px ${mouse.y}px,
              rgba(59,130,246,0.13) 0%,
              rgba(34,211,238,0.06) 45%,
              transparent 70%)`,
          }}
        />

        {/* Hover gradient fill bottom-to-top */}
        <div
          className={`absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t ${feature.spotlight}
                       to-transparent opacity-0 group-hover:opacity-100
                       transition-opacity duration-700 pointer-events-none`}
        />

        <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between gap-8 h-full min-h-[260px]">
          {/* Top row: icon + label */}
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08]
                            flex items-center justify-center transition-all duration-300
                            group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
              <feature.icon className="w-5 h-5 text-slate-700 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-[0.25em]
                             group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 font-semibold">
              {feature.label}
            </span>
          </div>

          {/* Bottom: text */}
          <div className="mt-auto">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight transition-colors">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{feature.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const FeaturesGrid = () => {
  return (
    <SectionWrapper id="features" glow="blue" className="py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section header ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-slate-200 dark:border-white/[0.06] pb-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-[0.35em] font-semibold">
              Core Architecture
            </span>
            <h2 className="mt-4 text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter
                           uppercase leading-[0.85] transition-colors">
              Built for
              <br />
              Ethiopia.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="max-w-xs text-slate-600 dark:text-slate-400 font-mono text-xs leading-relaxed
                       uppercase tracking-widest md:text-right"
          >
            Every layer engineered for speed, offline resilience, and the Ethiopian market.
          </motion.p>
        </div>

        {/* ── Asymmetric Bento Grid (12-col) ──────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Top Row: 7-col + 5-col */}
          <FeatureCard feature={FEATURES[0]} index={0} className="lg:col-span-7" />
          <FeatureCard feature={FEATURES[1]} index={1} className="lg:col-span-5" />

          {/* Bottom Row: 4-col + 4-col + 4-col */}
          <FeatureCard feature={FEATURES[2]} index={2} className="lg:col-span-4" />
          <FeatureCard feature={FEATURES[3]} index={3} className="lg:col-span-4" />
          <FeatureCard feature={FEATURES[4]} index={4} className="lg:col-span-4" />
        </div>

      </div>
    </SectionWrapper>
  );
};
