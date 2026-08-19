"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/mockData";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" glow="muted" className="py-32 sm:py-40">
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
              Help & Support
            </span>
            <h2 className="mt-4 text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter
                           uppercase leading-[0.85] transition-colors">
              Common
              <br />
              Questions.
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
            Everything you need to know about Fayda verification, offline USSD, security encryption, and daily transaction limits.
          </motion.p>
        </div>

        {/* Modern Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-gradient-to-b dark:from-[#0a1122]/90 dark:to-[#070b16]/90 border-blue-500/40 dark:border-cyan-400/40 shadow-xl shadow-blue-500/5 dark:shadow-blue-500/10"
                    : "bg-white/70 dark:bg-white/[0.02] border-slate-200/90 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-6 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-50 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-300 border-blue-400/40 dark:border-cyan-400/40"
                        : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.08]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-6 sm:px-7 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/80 dark:border-white/[0.06] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
