"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  QrCode,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const CtaSection = () => {
  return (
    <section id="download-cta" className="py-24 bg-[#06090e] relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[36px] bg-gradient-to-b from-[#0e1628] to-[#080d16] border border-blue-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle grid in card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: CTA Pitch */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge variant="cyan" className="w-fit">
                <Sparkles className="w-3 h-3 mr-1" />
                Available on iOS & Android
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Experience the <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Future of Ethiopian Banking?
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Download Dashen SuperApp today. Open your Fayda-verified account in under 60 seconds
                and take full command of your daily lifestyle, transfers, and finances.
              </p>

              {/* App store buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-.93.04-2.06.63-2.72 1.4-.58.67-1.1 1.76-.96 2.82 1.04.08 2.1-.53 2.74-1.3z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-slate-400 font-mono">Download on</div>
                    <div className="text-sm font-bold text-white leading-none">Apple App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.38 0 .73.14 1 .38L18.5 12 5.5 21.62c-.27.24-.62.38-1 .38-.83 0-1.5-.67-1.5-1.5zm16.88-7.38L6.8 3.53 15.65 12l4.23 1.12zm-4.23 1.12L6.8 20.47l13.08-9.59-4.23 2.24z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase text-slate-400 font-mono">Get it on</div>
                    <div className="text-sm font-bold text-white leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: QR Code Direct Download Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-3xl bg-[#090e18] border border-white/15 flex flex-col items-center text-center gap-4 shadow-2xl">
                <div className="p-4 rounded-2xl bg-white text-black flex items-center justify-center">
                  <QrCode className="w-36 h-36" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white">
                    Scan to Install Instantly
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    iOS 15+ / Android 9.0+ Supported
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>USSD Direct Dial:</span>
                  <span className="text-amber-400 font-bold">*996#</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
