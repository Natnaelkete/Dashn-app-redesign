"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const CtaSection = () => {
  return (
    <SectionWrapper id="download-cta" glow="muted" className="py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.99] }}
          className="relative rounded-[40px] bg-white/[0.025] border border-blue-500/20 p-8 sm:p-12 lg:p-14
                     overflow-hidden shadow-2xl shadow-blue-500/[0.06]"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px]
                          bg-blue-600/15 blur-[100px] pointer-events-none" />
          {/* Inner grid */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#0f172a_0px_1px,transparent_1px_36px)]
                          opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
                  iOS & Android
                </span>
                <h2 className="mt-3 text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                  Start Banking
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    In 60 Seconds.
                  </span>
                </h2>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-lg">
                  Download Dashen SuperApp and open your Fayda-verified account instantly. One app for all your daily banking, payments, and lifestyle services.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    label: "App Store", sub: "Download on", href: "https://apps.apple.com",
                    icon: <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-.93.04-2.06.63-2.72 1.4-.58.67-1.1 1.76-.96 2.82 1.04.08 2.1-.53 2.74-1.3z"/>
                    </svg>,
                  },
                  {
                    label: "Google Play", sub: "Get it on", href: "https://play.google.com",
                    icon: <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.38 0 .73.14 1 .38L18.5 12 5.5 21.62c-.27.24-.62.38-1 .38-.83 0-1.5-.67-1.5-1.5zm16.88-7.38L6.8 3.53 15.65 12l4.23 1.12zm-4.23 1.12L6.8 20.47l13.08-9.59-4.23 2.24z"/>
                    </svg>,
                  },
                ].map((store) => (
                  <a
                    key={store.label}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.05]
                               hover:bg-white/[0.10] border border-white/10 hover:border-blue-500/30
                               transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    {store.icon}
                    <div>
                      <div className="text-[9px] uppercase font-mono text-slate-600 tracking-widest">{store.sub}</div>
                      <div className="text-sm font-black text-white leading-none">{store.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: QR */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-4 p-5 rounded-3xl bg-white/[0.03]
                           border border-white/[0.08] shadow-xl"
              >
                <div className="p-4 rounded-2xl bg-white">
                  <QrCode className="w-28 h-28 text-[#03050b]" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-black text-white uppercase tracking-tight">Scan to Install</div>
                  <div className="text-[10px] text-slate-600 font-mono mt-0.5">iOS 15+ · Android 9+</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
