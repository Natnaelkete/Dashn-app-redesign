"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  PieChart,
  Wallet,
  Clock,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface FinanceCard {
  id: string;
  tag: string;
  tagIcon: React.ElementType;
  title: string;
  description: string;
  ctaText: string;
  highlight: string;
  imageTheme: string;
  accentColor: "gold" | "cyan" | "emerald" | "indigo" | "blue";
  visualSvg: React.ReactNode;
}

const FINANCE_CARDS: FinanceCard[] = [
  {
    id: "cashflow",
    tag: "Autonomous AI Intelligence",
    tagIcon: PieChart,
    title: "REAL-TIME CASH FLOW & EXPENSE INTELLIGENCE",
    description:
      "Onboard AI analyzes every transaction across 18+ national merchants in real-time, detecting budget leaks and forecasting monthly spending velocity.",
    ctaText: "EXPLORE CASH FLOW",
    highlight: "ETB 34,500 Tracked • 8.4% Under Budget",
    imageTheme: "from-blue-900 via-indigo-950 to-[#060b17]",
    accentColor: "gold",
    visualSvg: (
      <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden">
        {/* Abstract High-Tech Dashboard Visual */}
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-300">AI RADAR LIVE</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded">
            AUG 2026
          </span>
        </div>

        {/* Dynamic Chart Nodes */}
        <div className="relative z-10 my-auto py-2">
          <div className="flex items-end justify-between gap-2 h-24 px-2">
            {[45, 68, 35, 85, 55, 92, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  style={{ height: `${h}%` }}
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    i === 5
                      ? "bg-gradient-to-t from-amber-500 to-amber-300 shadow-lg shadow-amber-500/30"
                      : "bg-gradient-to-t from-blue-600/60 to-cyan-400/80"
                  }`}
                />
                <span className="text-[9px] font-mono text-slate-400">D{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono text-slate-300 z-10">
          <span>Net Velocity:</span>
          <span className="text-amber-400 font-bold font-mono">+14.2% Savings</span>
        </div>

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid-fintech opacity-30 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "eqwub",
    tag: "NBE-Regulated Escrow",
    tagIcon: Users,
    title: "DIGITAL ROTATING EQWUB & ESCROW POOL",
    description:
      "Automated group savings backed by Dashen Bank escrow guarantee. Join verified national circles with zero default risk and scheduled lump-sum payouts.",
    ctaText: "JOIN EQWUB CIRCLE",
    highlight: "100% Escrow Backed • 12-Month Rotation",
    imageTheme: "from-amber-950/80 via-yellow-950/60 to-[#0a0802]",
    accentColor: "gold",
    visualSvg: (
      <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden">
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-mono font-bold text-amber-300">ESCROW ACTIVE</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            ROUND 4/12
          </span>
        </div>

        {/* Central Rotating Circle Graphic */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400/40 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
              <Wallet className="w-7 h-7 text-amber-300" />
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400" />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono text-slate-300 z-10">
          <span>Target Payout:</span>
          <span className="text-amber-400 font-bold font-mono">ETB 120,000.00</span>
        </div>

        <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />
      </div>
    ),
  },
  {
    id: "guard",
    tag: "Predictive Automation",
    tagIcon: ShieldCheck,
    title: "PREDICTIVE BILL GUARD & AUTO-CLEARANCE",
    description:
      "Intelligent scheduling monitors your EEU electricity meters, Ethio Telecom fiber, and municipal bills with automated zero-late-fee clearance.",
    ctaText: "CONFIGURE BILL GUARD",
    highlight: "0% Late Fee Penalty • Auto-Debit Active",
    imageTheme: "from-emerald-950 via-teal-950 to-[#020a08]",
    accentColor: "gold",
    visualSvg: (
      <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden">
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono font-bold text-emerald-300">AUTO-PAY SECURED</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
            3 DUE IN 72H
          </span>
        </div>

        {/* Stacked Bill Tokens */}
        <div className="relative z-10 my-auto space-y-2">
          <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 flex items-center justify-between">
            <span className="text-xs font-bold text-white">EEU Electricity Smart Meter</span>
            <span className="text-xs font-mono text-emerald-300 font-bold">ETB 1,450</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between opacity-80">
            <span className="text-xs font-bold text-white">Ethio Telecom 5G Fiber</span>
            <span className="text-xs font-mono text-cyan-300 font-bold">ETB 2,800</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono text-slate-300 z-10">
          <span>Penalty Protected:</span>
          <span className="text-emerald-400 font-bold font-mono">ETB 0.00 Fees</span>
        </div>

        <div className="absolute inset-0 bg-grid-fintech opacity-20 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "savings",
    tag: "High-Yield Growth",
    tagIcon: Sparkles,
    title: "HIGH-YIELD TARGET GOAL POTS & WEALTH VAULT",
    description:
      "Lock funds for vehicles, real estate, or holidays with up to 14.5% annual interest yield compounded monthly with zero lock-in withdrawal penalty.",
    ctaText: "START SAVINGS POT",
    highlight: "Up to 14.5% APY • Monthly Compound",
    imageTheme: "from-indigo-950 via-purple-950 to-[#080314]",
    accentColor: "gold",
    visualSvg: (
      <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden">
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-mono font-bold text-purple-300">14.5% APY YIELD</span>
          </div>
          <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
            COMPOUNDING
          </span>
        </div>

        <div className="relative z-10 my-auto text-center space-y-1">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Annual Projected Interest</div>
          <div className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-amber-300 to-cyan-300">
            +ETB 48,250.00
          </div>
          <div className="text-[10px] text-emerald-400 font-mono">✓ Paid directly on the 1st of every month</div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono text-slate-300 z-10">
          <span>Lock Status:</span>
          <span className="text-purple-300 font-bold font-mono">Flexible Access</span>
        </div>
      </div>
    ),
  },
  {
    id: "credit",
    tag: "Instant Liquidity",
    tagIcon: Clock,
    title: "AI CREDIT SCORING & 30-SECOND SALARY ADVANCE",
    description:
      "Access up to 3x your verified monthly salary in under 30 seconds with automated credit scoring, zero paperwork, and flexible salary deductions.",
    ctaText: "CHECK ELIGIBILITY",
    highlight: "30-Second Approval • Collateral-Free",
    imageTheme: "from-blue-950 via-cyan-950 to-[#020a10]",
    accentColor: "gold",
    visualSvg: (
      <div className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden">
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-mono font-bold text-cyan-300">INSTANT DISBURSAL</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
            PRE-APPROVED
          </span>
        </div>

        <div className="relative z-10 my-auto p-3 rounded-2xl bg-black/40 border border-cyan-400/30 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Available Limit:</span>
            <span className="text-white font-bold">ETB 75,000.00</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
          <div className="text-[10px] font-mono text-cyan-300 text-right">3x Monthly Salary</div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono text-slate-300 z-10">
          <span>Fee Structure:</span>
          <span className="text-cyan-300 font-bold font-mono">1.2% Flat Rate</span>
        </div>
      </div>
    ),
  },
];

export const BudgetingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalCards = FINANCE_CARDS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  // Helper to compute shortest circular distance
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      return {
        x: 320,
        scale: 0.88,
        rotateY: -10,
        opacity: 0.7,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1) {
      return {
        x: -320,
        scale: 0.88,
        rotateY: 10,
        opacity: 0.7,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (diff > 1) {
      return {
        x: 520,
        scale: 0.76,
        rotateY: -18,
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    } else {
      return {
        x: -520,
        scale: 0.76,
        rotateY: 18,
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <SectionWrapper id="budgeting" glow="split" className="py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section Header ─────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-slate-200 dark:border-white/[0.06] pb-12 mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-[0.35em] font-semibold">
              AI Predictive Engine
            </span>
            <h2
              className="mt-4 text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter
                           uppercase leading-[0.85] transition-colors"
            >
              Every Birr.
              <br />
              Commanded.
            </h2>
          </motion.div>

          <div className="flex flex-col md:items-end gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="max-w-xs text-slate-600 dark:text-slate-400 font-mono text-xs leading-relaxed
                         uppercase tracking-widest md:text-right"
            >
              Experience real-time AI spending velocity, NBE-regulated Eqwub escrow circles, and predictive bill clearance.
            </motion.p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-10 h-10 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-400/50 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] text-slate-800 dark:text-white flex items-center justify-center transition-colors cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform text-slate-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next card"
                className="w-10 h-10 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-400/50 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] text-slate-800 dark:text-white flex items-center justify-center transition-colors cursor-pointer group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform text-slate-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* ── 3D Spotlight Card Deck Carousel ─────────── */}
        <div className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center [perspective:1400px]">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center [transform-style:preserve-3d]">
            {FINANCE_CARDS.map((card, index) => {
              const isCenter = index === activeIndex;
              const transform = getCardTransform(index);

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: transform.x,
                    scale: transform.scale,
                    rotateY: transform.rotateY,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 190,
                    damping: 24,
                    mass: 0.8,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50 || info.velocity.x < -300) {
                      handleNext();
                    } else if (info.offset.x > 50 || info.velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(index);
                  }}
                  className={`absolute w-[310px] sm:w-[360px] md:w-[390px] h-[520px] sm:h-[550px] rounded-[28px] sm:rounded-[32px] overflow-hidden cursor-grab active:cursor-grabbing flex flex-col justify-between select-none ${
                    isCenter
                      ? "border-2 border-amber-500 dark:border-amber-400 bg-white dark:bg-[#070c18] shadow-2xl shadow-amber-500/15 dark:shadow-[0_30px_90px_-15px_rgba(245,158,11,0.25),0_20px_50px_-10px_rgba(0,0,0,0.9)]"
                      : "border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#090e1a] shadow-md dark:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] hover:opacity-90"
                  }`}
                  style={{
                    pointerEvents: transform.pointerEvents,
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Top Image / Visual Display Area */}
                  <div
                    className={`h-[220px] sm:h-[240px] w-full bg-gradient-to-b ${card.imageTheme} border-b ${
                      isCenter ? "border-amber-400/30" : "border-white/10"
                    } relative flex items-center justify-center`}
                  >
                    {card.visualSvg}

                    {/* Top Highlight Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md border border-white/15 text-white">
                        <card.tagIcon className="w-3 h-3 text-amber-400" />
                        <span>{card.tag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text Content & Action Area */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-[#FAF8F5] dark:from-[#0a0f1d] dark:to-[#050811]">
                    <div className="space-y-2.5">
                      <h3
                        className={`text-base sm:text-lg font-black tracking-tight leading-snug uppercase ${
                          isCenter ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 ${
                            isCenter
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          <span>{card.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {card.id === "eqwub"
                          ? "NBE ESCROW"
                          : card.id === "guard"
                          ? "0% LATE FEE"
                          : card.id === "savings"
                          ? "14.5% APY"
                          : card.id === "credit"
                          ? "30s APPROVAL"
                          : "AI ACTIVE"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Carousel Pagination Dots ───────────────── */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {FINANCE_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-amber-500 dark:bg-amber-400 shadow-md shadow-amber-500/30"
                  : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
