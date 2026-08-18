"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/mockData";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#080d16] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <Badge variant="cyan" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Got questions about Dashen SuperApp? Find answers to our most common inquiries below.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0d1424] border-blue-500/40 shadow-lg shadow-blue-500/5"
                    : "bg-[#0a0f1c]/70 border-white/[0.08] hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-semibold text-slate-100">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : "bg-white/[0.05] text-slate-400 border-white/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-white/[0.04]">
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
    </section>
  );
};
