"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  WifiOff,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const OfflineUSSD = () => {
  const [dialStep, setDialStep] = useState<number>(1);

  return (
    <section id="ussd" className="py-24 bg-[#06090e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive USSD Simulation Phone Screen */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[32px] bg-[#0c1322] border border-amber-500/30 p-6 shadow-2xl shadow-amber-500/5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <WifiOff className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono text-amber-300">
                    Offline Mode Active
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">
                  *996#
                </span>
              </div>

              {/* USSD Modal Screen Dialog */}
              <div className="my-6 p-5 rounded-2xl bg-black/80 border border-amber-500/40 font-mono text-xs text-amber-300 space-y-3">
                <div className="flex items-center justify-between text-white font-bold border-b border-amber-500/20 pb-2">
                  <span>DASHEN BANK (*996#)</span>
                  <span className="text-[10px] text-emerald-400">ENCRYPTED</span>
                </div>

                {dialStep === 1 && (
                  <div className="space-y-1.5 text-slate-200">
                    <div>1. Transfer to Dashen / Other Bank</div>
                    <div>2. Telebirr Interop Pay</div>
                    <div>3. Buy Airtime / Data</div>
                    <div>4. Check Balance & Mini-Statement</div>
                    <div>5. Pay Merchant / Utility</div>
                    <div className="pt-2 text-amber-400 font-bold">
                      Enter option [1-5]:
                    </div>
                  </div>
                )}

                {dialStep === 2 && (
                  <div className="space-y-1.5 text-slate-200">
                    <div className="text-emerald-400">Transfer Confirmation:</div>
                    <div>Recipient: Abebe Kebede</div>
                    <div>Amount: ETB 1,500.00</div>
                    <div>Fee: ETB 0.00 (Instant)</div>
                    <div className="pt-2 text-amber-400 font-bold">
                      Enter 4-digit PIN to authorize:
                    </div>
                  </div>
                )}

                {dialStep === 3 && (
                  <div className="space-y-1.5 text-emerald-400">
                    <div className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Transaction Successful!</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      Tx ID: DSH-996-883492
                      <br />
                      New Balance: ETB 141,350.50
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Simulation Switchers */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDialStep(1)}
                  className={`flex-1 py-2 text-xs rounded-xl border transition-colors ${
                    dialStep === 1
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-slate-900 text-slate-400 border-white/10"
                  }`}
                >
                  Step 1: Menu
                </button>
                <button
                  onClick={() => setDialStep(2)}
                  className={`flex-1 py-2 text-xs rounded-xl border transition-colors ${
                    dialStep === 2
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                      : "bg-slate-900 text-slate-400 border-white/10"
                  }`}
                >
                  Step 2: PIN
                </button>
                <button
                  onClick={() => setDialStep(3)}
                  className={`flex-1 py-2 text-xs rounded-xl border transition-colors ${
                    dialStep === 3
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                      : "bg-slate-900 text-slate-400 border-white/10"
                  }`}
                >
                  Step 3: Receipt
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Advantage */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <Badge variant="amber" className="mb-4">
                <Zap className="w-3 h-3 mr-1" />
                Zero-Downtime Guarantee
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                No 4G? No Wi-Fi? <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  You’re Still 100% Connected.
                </span>
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Network drops shouldn't stop your life. Dashen SuperApp integrates seamlessly
                with the nationwide <strong>*996# USSD protocol</strong>. Send money, pay merchants,
                or buy airtime reliably in remote locations with zero mobile data required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Instant Fallback</span>
                </div>
                <p className="text-xs text-slate-400">
                  The app automatically activates background USSD protocol the instant data connectivity fails.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Encrypted SIM Security</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every request is validated via SIM authentication and hardware PIN protection.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-sm font-bold">
                Dial *996# from any phone in Ethiopia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
