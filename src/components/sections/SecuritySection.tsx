"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Fingerprint,
  KeyRound,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BorderBeam } from "@/components/ui/BorderBeam";

const DEFENSE_PILLARS = [
  {
    id: "biometrics",
    icon: Fingerprint,
    title: "Secure Enclave Biometrics",
    subtitle: "Hardware-Isolated Key",
    active: true,
  },
  {
    id: "crypto",
    icon: Lock,
    title: "256-Bit Quantum AES",
    subtitle: "End-to-End Encryption",
    active: true,
  },
  {
    id: "pcidss",
    icon: ShieldCheck,
    title: "PCI-DSS Level 1 Certified",
    subtitle: "Global Compliance",
    active: true,
  },
  {
    id: "fayda",
    icon: KeyRound,
    title: "Fayda e-KYC Integration",
    subtitle: "National ID Linked",
    active: true,
  },
];

export const SecuritySection = () => {
  const [cardLocked, setCardLocked] = useState(false);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [activePillar, setActivePillar] = useState("biometrics");

  return (
    <SectionWrapper id="security" glow="split" className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section header ─────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-white/[0.06] pb-16 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.35em]">
              Security Matrix
            </span>
            <h2
              className="mt-4 text-6xl md:text-8xl font-black text-white tracking-tighter
                           uppercase leading-[0.85]"
            >
              Fortress
              <br />
              Defense.
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
            Hardware-backed cryptographic security, biometric identity
            validation, and autonomous fraud defense protecting every
            transaction.
          </motion.p>
        </div>

        {/* FULL-WIDTH INTERACTIVE SECURITY COCKPIT */}
        <div className="relative rounded-[36px] bg-gradient-to-b from-[#0a1122]/90 via-[#070b16]/90 to-[#04070e]/95 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <BorderBeam
            size={340}
            duration={12}
            colorFrom="#38bdf8"
            colorTo="#3b82f6"
          />

          {/* Background Ambient Aura */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: 4 Defense Matrix Tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DEFENSE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? "bg-blue-600/15 border-cyan-400/50 shadow-lg shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04] hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                            isSelected
                              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
                              : "bg-white/[0.04] text-slate-400 border-white/[0.08] group-hover:text-cyan-300"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          ACTIVE
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-0.5">
                        {pillar.title}
                      </h3>
                      <div className="text-[11px] text-cyan-400 font-mono">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive 3D Card Vault & Freeze Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-[#060a14] border border-white/10 p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-slate-300">
                    Holographic Vault Control
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      cardLocked
                        ? "bg-red-500/10 text-red-400 border-red-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    }`}
                  >
                    {cardLocked ? "FROZEN 🔒" : "ARMED & PROTECTED ⚡"}
                  </span>
                </div>

                {/* Card Visual */}
                <div
                  className={`relative rounded-2xl p-5 transition-all duration-500 overflow-hidden ${
                    cardLocked
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/40 grayscale brightness-75 shadow-none"
                      : "bg-gradient-to-br from-blue-700 via-blue-900 to-[#0a1128] border border-cyan-400/40 shadow-xl shadow-blue-500/20"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono tracking-widest text-slate-200 uppercase">
                      Dashen Platinum
                    </span>
                    <span className="text-xs font-bold font-mono text-white">
                      VISA
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-mono text-base tracking-widest text-white my-3">
                    <span>
                      {showCardNumber
                        ? "4829 9901 8842 1049"
                        : "4829 •••• •••• 1049"}
                    </span>
                    <button
                      onClick={() => setShowCardNumber(!showCardNumber)}
                      className="text-slate-300 hover:text-white cursor-pointer"
                    >
                      {showCardNumber ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-300 font-mono pt-2 border-t border-white/10">
                    <span>EXP: 08/30</span>
                    <span>CVV: {showCardNumber ? "742" : "•••"}</span>
                  </div>
                </div>

                {/* Instant Freeze Toggle Action */}
                <button
                  onClick={() => setCardLocked(!cardLocked)}
                  className={`w-full py-3 rounded-xl font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    cardLocked
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                      : "bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-500/30"
                  }`}
                >
                  {cardLocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Unfreeze Card (Instant)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>1-Tap Emergency Card Freeze</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 font-mono text-center">
                  Instant lock across all physical POS, online checkouts, and
                  international ATMs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
