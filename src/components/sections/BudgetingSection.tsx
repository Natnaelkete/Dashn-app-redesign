"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Target,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const BudgetingSection = () => {
  const [selectedMonth, setSelectedMonth] = useState("August 2026");

  const categories = [
    { name: "Groceries & Dining", amount: "ETB 14,200", percent: 40, color: "bg-blue-500" },
    { name: "Mini App Utilities & Bills", amount: "ETB 6,800", percent: 22, color: "bg-cyan-400" },
    { name: "Flights & Travel", amount: "ETB 8,500", percent: 25, color: "bg-indigo-500" },
    { name: "Eqwub & Savings Pots", amount: "ETB 5,000", percent: 13, color: "bg-emerald-400" },
  ];

  return (
    <section id="budgeting" className="py-24 bg-[#080d16] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Badge variant="cyan">
              <Sparkles className="w-3 h-3 mr-1 text-cyan-400" />
              AI Intelligence
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Predictive Insights. <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Every Birr Accounted For.
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Never wonder where your money went. Dashen SuperApp automatically classifies
              every transaction, alerts you to unexpected price increases or recurring bills,
              and offers automated high-yield savings pots tailored to your financial goals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Target Saving Pots</span>
                </div>
                <p className="text-xs text-slate-400">
                  Lock funds for home, education, or weddings with automatic high-yield interest accrual.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Wallet className="w-4 h-4 text-cyan-400" />
                  <span>Eqwub Automation</span>
                </div>
                <p className="text-xs text-slate-400">
                  Manage personal or family Eqwub rounds with transparent auto-debits and notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: AI Analytics Dashboard Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-[#0c1322] border border-white/10 p-6 shadow-2xl space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase">
                    Monthly Expense Breakdown
                  </span>
                  <div className="text-2xl font-black text-white font-mono mt-0.5">
                    ETB 34,500.00
                  </div>
                </div>
                <div className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  {selectedMonth}
                </div>
              </div>

              {/* Progress Bar Distribution */}
              <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex gap-1 p-0.5 border border-white/10">
                {categories.map((c, i) => (
                  <div
                    key={i}
                    style={{ width: `${c.percent}%` }}
                    className={`${c.color} h-full rounded-full`}
                  />
                ))}
              </div>

              {/* Category Breakdown list */}
              <div className="space-y-2.5">
                {categories.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/[0.05]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-3 h-3 rounded-full ${c.color}`} />
                      <span className="text-xs font-medium text-slate-200">
                        {c.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-white block">
                        {c.amount}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {c.percent}% of budget
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Recommendation Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-emerald-300 block mb-0.5">
                    AI Saving Opportunity:
                  </strong>
                  You spent 12% less on utilities this month. Auto-allocate ETB 1,200 to your Emergency Pot?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
