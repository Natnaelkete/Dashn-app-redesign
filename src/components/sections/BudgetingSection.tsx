"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  PieChart,
  Calendar,
  Layers,
  ArrowDownRight,
  CheckCircle2,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BorderBeam } from "@/components/ui/BorderBeam";

export const BudgetingSection = () => {
  const [activeTab, setActiveTab] = useState<"cashflow" | "eqwub" | "guard">("cashflow");
  const [monthlyIncome, setMonthlyIncome] = useState<number>(45000);
  const [eqwubCycle, setEqwubCycle] = useState<number>(10000);

  const categories = [
    { name: "Dining & Groceries", amount: 14200, pct: 42, color: "bg-blue-500", trend: "+4.2%" },
    { name: "Flights & Travel", amount: 8500, pct: 25, color: "bg-cyan-400", trend: "-1.8%" },
    { name: "Utilities & Bills", amount: 6800, pct: 20, color: "bg-blue-400/80", trend: "-8.5%" },
    { name: "Eqwub Savings Pool", amount: 5000, pct: 13, color: "bg-cyan-300", trend: "+12.0%" },
  ];

  const totalSpent = categories.reduce((acc, c) => acc + c.amount, 0);

  return (
    <SectionWrapper id="budgeting" glow="split" className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section header ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-white/[0.06] pb-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.35em]">
              AI Predictive Engine
            </span>
            <h2 className="mt-4 text-6xl md:text-8xl font-black text-white tracking-tighter
                           uppercase leading-[0.85]">
              Every Birr.
              <br />
              Commanded.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="max-w-xs text-slate-500 font-mono text-xs leading-relaxed
                       uppercase tracking-widest md:text-right"
          >
            Experience real-time AI spending classifications, high-yield goal pots, and transparent digital Eqwub circles in one unified cockpit.
          </motion.p>
        </div>

        {/* Interactive Feature Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl gap-1 sm:gap-2">
            {[
              { id: "cashflow", label: "Real-Time Cash Flow", icon: PieChart },
              { id: "eqwub", label: "Smart Eqwub Yield Pool", icon: Wallet },
              { id: "guard", label: "Predictive Bill Guard", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-200" : "text-slate-400"}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FULL-WIDTH INTERACTIVE COCKPIT CONTAINER */}
        <div className="relative rounded-[36px] bg-gradient-to-b from-[#0a1122]/90 via-[#070b16]/90 to-[#04070e]/95 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <BorderBeam size={350} duration={12} colorFrom="#38bdf8" colorTo="#3b82f6" />

          {/* Ambient Lighting Rays inside the canvas */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* TAB 1: REAL-TIME CASH FLOW */}
            {activeTab === "cashflow" && (
              <motion.div
                key="cashflow"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Metric Summary Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                      Total Tracked Spend
                    </div>
                    <div className="text-3xl font-black text-white font-mono mt-1">
                      ETB {totalSpent.toLocaleString()}.00
                    </div>
                    <div className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>8.4% under monthly budget</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                      AI Projected Savings
                    </div>
                    <div className="text-3xl font-black text-cyan-300 font-mono mt-1">
                      ETB {(monthlyIncome - totalSpent).toLocaleString()}.00
                    </div>
                    <div className="text-xs text-cyan-400 font-mono flex items-center gap-1 mt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Yielding 8.5% annual return</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-blue-300 uppercase tracking-widest">
                        Smart AI Guard Active
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        Zero unauthorized recurring charges detected across 18 connected merchants.
                      </p>
                    </div>
                    <div className="text-[11px] text-cyan-300 font-mono font-bold flex items-center gap-1 mt-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Live Protection On</span>
                    </div>
                  </div>
                </div>

                {/* Progress Distribution Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Category Distribution</span>
                    <span className="text-slate-300">August 2026</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-900/90 overflow-hidden flex gap-1 p-0.5 border border-white/10">
                    {categories.map((c, i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0 }}
                        animate={{ width: `${c.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`${c.color} h-full rounded-full`}
                      />
                    ))}
                  </div>
                </div>

                {/* 4 Interactive Category Breakdown Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categories.map((cat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.4)" }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {cat.trend}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-300">{cat.name}</div>
                      <div className="text-xl font-bold text-white font-mono mt-1">
                        ETB {cat.amount.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono mt-1">
                        {cat.pct}% of total expense
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2: SMART EQWUB & HIGH-YIELD POTS */}
            {activeTab === "eqwub" && (
              <motion.div
                key="eqwub"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left side: Interactive Eqwub Simulator */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                      Rotating Digital Eqwub Circle
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Automated Group Savings with Zero Default Risk.
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Invite family, colleagues, or join verified national circles. All rounds are backed by Dashen Bank escrow guarantee and auto-debited seamlessly.
                    </p>
                  </div>

                  {/* Interactive Slider */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-400">Monthly Contribution:</span>
                      <span className="text-cyan-300 font-bold text-base">
                        ETB {eqwubCycle.toLocaleString()} / mo
                      </span>
                    </div>

                    <input
                      type="range"
                      min="2000"
                      max="50000"
                      step="2000"
                      value={eqwubCycle}
                      onChange={(e) => setEqwubCycle(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />

                    <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                      <span>Min: ETB 2,000</span>
                      <span>Max: ETB 50,000</span>
                    </div>
                  </div>

                  {/* Projected Payout */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/25">
                      <span className="text-[11px] text-slate-400 font-mono">Lump Sum Payout</span>
                      <div className="text-2xl font-black text-white font-mono mt-1">
                        ETB {(eqwubCycle * 12).toLocaleString()}
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono">12-month rotation</span>
                    </div>
                    <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/25">
                      <span className="text-[11px] text-slate-400 font-mono">Escrow Protection</span>
                      <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                        100% Guaranteed
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">NBE Regulated</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Live Circle Roster */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="text-xs font-bold text-white">Active Circle: Addis Tech Innovators</div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      Round 4/12
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { name: "Abebe Kebede", date: "Aug 01, 2026", status: "Paid Out (ETB 120k)", current: false },
                      { name: "Sara Tesfaye", date: "Sep 01, 2026", status: "Paid Out (ETB 120k)", current: false },
                      { name: "You (Dawit M.)", date: "Oct 01, 2026", status: "NEXT IN LINE", current: true },
                      { name: "Yonas Haile", date: "Nov 01, 2026", status: "Scheduled", current: false },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl flex items-center justify-between text-xs font-mono ${
                          m.current
                            ? "bg-blue-600/20 border border-blue-400/40 text-white font-bold"
                            : "bg-white/[0.02] border border-white/[0.05] text-slate-400"
                        }`}
                      >
                        <div>
                          <div className={m.current ? "text-cyan-300" : "text-slate-200"}>{m.name}</div>
                          <div className="text-[10px] text-slate-500">{m.date}</div>
                        </div>
                        <span className={m.current ? "text-emerald-400 font-bold" : "text-slate-400"}>
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PREDICTIVE BILL GUARD */}
            {activeTab === "guard" && (
              <motion.div
                key="guard"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      title: "EEU Electric Utility",
                      due: "Due in 3 days",
                      amount: "ETB 1,450.00",
                      action: "Auto-Debit Scheduled",
                      safe: true,
                    },
                    {
                      title: "Ethio Telecom Fiber 50Mbps",
                      due: "Due in 7 days",
                      amount: "ETB 2,800.00",
                      action: "Zero Fee Active",
                      safe: true,
                    },
                    {
                      title: "Water & Sewage Authority",
                      due: "Due in 12 days",
                      amount: "ETB 420.00",
                      action: "Direct Clearance",
                      safe: true,
                    },
                  ].map((bill, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                          <span>{bill.due}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <h4 className="text-base font-bold text-white">{bill.title}</h4>
                        <div className="text-2xl font-black text-cyan-300 font-mono mt-3">
                          {bill.amount}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {bill.action}
                        </span>
                        <span className="text-slate-500">1-Tap Proof</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};
