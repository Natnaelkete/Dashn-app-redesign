"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BorderBeam } from "@/components/ui/BorderBeam";

export const OfflineUSSD = () => {
  const [dialStep, setDialStep] = useState<number>(1);
  const [activeScenario, setActiveScenario] = useState<string>("transfer");

  return (
    <SectionWrapper id="ussd" glow="blue" className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section header ─────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-slate-200 dark:border-white/[0.06] pb-16 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-[0.35em] font-semibold">
              Offline USSD Protocol
            </span>
            <h2
              className="mt-4 text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter
                           uppercase leading-[0.85] transition-colors"
            >
              No Data.
              <br />
              Still Banking.
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
            Network blackouts never interrupt your life. Dashen SuperApp
            seamlessly switches to automated USSD protocol for instant transfers
            anywhere in Ethiopia.
          </motion.p>
        </div>

        {/* FULL-WIDTH INTERACTIVE FAILSAFE SIMULATOR STAGE */}
        <div className="relative rounded-[36px] bg-white/95 dark:bg-gradient-to-b dark:from-[#0a1122]/90 dark:via-[#070b16]/90 dark:to-[#04070e]/95 border border-slate-200/90 dark:border-white/15 p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 dark:shadow-2xl backdrop-blur-2xl overflow-hidden transition-colors">
          <BorderBeam
            size={320}
            duration={14}
            colorFrom="#38bdf8"
            colorTo="#3b82f6"
          />

          {/* Background Radar Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/10 pointer-events-none animate-ping [animation-duration:6s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-500/15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Quick Scenarios & Live Status */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Cellular 4G Status
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      Signal Unavailable (Offline)
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest block mb-3 font-semibold">
                  Select Interactive Offline Scenario:
                </span>

                <div className="space-y-2.5">
                  {[
                    {
                      id: "transfer",
                      title: "1. Instant Interbank Transfer",
                      detail: "Routes automatically via *996*1#",
                    },
                    {
                      id: "telebirr",
                      title: "2. Telebirr Interop Payment",
                      detail: "Direct bridge to Telebirr wallet",
                    },
                    {
                      id: "airtime",
                      title: "3. Emergency Airtime Top-Up",
                      detail: "Zero-balance telecom recharge",
                    },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setActiveScenario(sc.id);
                        setDialStep(1);
                      }}
                      className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        activeScenario === sc.id
                          ? "bg-blue-50 dark:bg-blue-600/20 border-blue-500 dark:border-cyan-400/50 text-blue-950 dark:text-white shadow-md"
                          : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold">{sc.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                          {sc.detail}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${
                          activeScenario === sc.id
                            ? "text-blue-600 dark:text-cyan-300"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech USSD Phone Screen Simulator */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-slate-950 dark:bg-[#060a14] border border-cyan-500/30 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300">
                      Live USSD Session (*996#)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    Encrypted
                  </span>
                </div>

                {/* USSD Dialog Screen */}
                <div className="p-5 rounded-2xl bg-black/90 border border-cyan-500/30 font-mono text-xs text-cyan-300 space-y-3 min-h-[220px] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-white font-bold border-b border-cyan-500/20 pb-2 text-[11px]">
                    <span>DASHEN SUPERAPP FAILSAFE</span>
                    <span className="text-[10px] text-emerald-400">
                      0.8s SLA
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {dialStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-1.5 text-slate-200"
                      >
                        <div className="text-cyan-300 font-bold">
                          1. Transfer to Dashen / Interbank
                        </div>
                        <div>2. Telebirr Interoperability</div>
                        <div>3. Airtime & 5G Bundles</div>
                        <div>4. Balance & Mini-Statement</div>
                        <div className="text-cyan-400 font-bold pt-2">
                          Option Selected: [ 1 ] ➔ Next
                        </div>
                      </motion.div>
                    )}

                    {dialStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-1.5 text-slate-200"
                      >
                        <div className="text-cyan-300 font-bold">
                          AUTHORIZE PAYMENT:
                        </div>
                        <div>Recipient: Abebe Kebede</div>
                        <div>Amount: ETB 1,500.00</div>
                        <div>Fee: ETB 0.00 (Instant)</div>
                        <div className="text-cyan-400 font-bold pt-2">
                          Enter PIN: [ • • • • ]
                        </div>
                      </motion.div>
                    )}

                    {dialStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2 text-emerald-400"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>TRANSFER CONFIRMED!</span>
                        </div>
                        <div className="text-slate-300 text-xs leading-relaxed">
                          Ref: DSH-996-883492 <br />
                          Recipient: Abebe Kebede <br />
                          New Balance: ETB 141,350.50
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-[10px] text-slate-500 border-t border-cyan-500/20 pt-2 flex justify-between">
                    <span>Session ID: 996-8823</span>
                    <span>Status: Verified</span>
                  </div>
                </div>

                {/* 3 Step Switchers */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { step: 1, label: "1. Menu" },
                    { step: 2, label: "2. Auth PIN" },
                    { step: 3, label: "3. Receipt" },
                  ].map((s) => (
                    <button
                      key={s.step}
                      onClick={() => setDialStep(s.step)}
                      className={`py-2 text-xs rounded-xl border font-mono font-bold transition-all cursor-pointer ${
                        dialStep === s.step
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50"
                          : "bg-slate-900 text-slate-400 border-white/10 hover:text-white"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
