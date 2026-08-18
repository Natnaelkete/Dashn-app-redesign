"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Smartphone,
  Fingerprint,
  CheckCircle2,
  KeyRound,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const SecuritySection = () => {
  const [cardLocked, setCardLocked] = useState(false);

  return (
    <section id="security" className="py-24 bg-[#06090e] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-4">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Fortress-Grade Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Security That Never Sleeps. <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Protected at Every Layer.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Your finances are guarded with hardware-level biometric encryption, real-time AI fraud
            sentinels, and instant remote controls right in your hands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Feature Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Fingerprint,
                title: "Biometric Hardware Enclave",
                description:
                  "Face ID and fingerprint authentication verified inside your device's isolated hardware security module.",
              },
              {
                icon: Lock,
                title: "256-Bit Dynamic Encryption",
                description:
                  "All communications and data transfers are protected by military-grade AES-256 and TLS 1.3 encryption.",
              },
              {
                icon: ShieldCheck,
                title: "PCI-DSS Level 1 Compliant",
                description:
                  "Certified to the highest international banking and card payment security standards.",
              },
              {
                icon: KeyRound,
                title: "Fayda National e-KYC",
                description:
                  "Direct integration with the National ID system for spoof-proof identity verification.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0b121e] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Card Freeze Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm p-6 rounded-3xl bg-[#0e1626] border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-slate-300 font-mono">
                  Instant Card Control Simulator
                </span>
                <span
                  className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded-full ${
                    cardLocked
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}
                >
                  {cardLocked ? "LOCKED" : "ACTIVE"}
                </span>
              </div>

              {/* Digital Card Render */}
              <div
                className={`relative rounded-2xl p-5 text-white transition-all duration-300 ${
                  cardLocked
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/40 opacity-75 grayscale"
                    : "bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 border border-blue-400/30"
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono tracking-widest text-slate-300">
                    DASHEN PLATINUM
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    D
                  </div>
                </div>

                <div className="font-mono text-sm tracking-widest my-4">
                  4829 •••• •••• 8842
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-300 font-mono">
                  <span>EXP: 08/30</span>
                  <span>CVV: •••</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  variant={cardLocked ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setCardLocked(!cardLocked)}
                  className={`w-full justify-center gap-2 ${
                    cardLocked ? "bg-emerald-600 hover:bg-emerald-500" : "bg-red-900/40 hover:bg-red-800/50 text-red-200 border-red-500/30"
                  }`}
                >
                  {cardLocked ? (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Unlock Card Instantaneously</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-red-400" />
                      <span>Emergency Freeze Card (1-Tap)</span>
                    </>
                  )}
                </Button>
                <p className="text-[11px] text-slate-400 text-center">
                  Freezing immediately blocks online, ATM, and POS payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
