"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const REVIEWS_ROW_1 = [
  {
    id: 1,
    name: "Dr. Almaz Bekele",
    role: "Senior Consultant • St. Paul Hospital",
    city: "Addis Ababa",
    rating: 5,
    comment: "The Fayda biometric onboarding was completely frictionless. Opened my account in under a minute without visiting a branch. Dashen SuperApp sets the new benchmark for African fintech.",
    badge: "Fayda Tier-3 Verified",
  },
  {
    id: 2,
    name: "Yared Tadesse",
    role: "Founder • RiftValley Coffee Export",
    city: "Hawassa",
    rating: 5,
    comment: "Instant settlements to our outgrowers across Sidama with zero latency. Even when cellular network fluctuates, the automated *996# USSD fallback ensures payroll is never delayed.",
    badge: "Merchant Verified",
  },
  {
    id: 3,
    name: "Hanan Mohammed",
    role: "E-commerce Merchant & Fashion Director",
    city: "Dire Dawa",
    rating: 5,
    comment: "The mini-apps integration is genius. I book Ethiopian Airlines flights and pay EEU utility bills directly inside the app. No more switching between 5 different portals.",
    badge: "Power User",
  },
  {
    id: 4,
    name: "Samuel Girma",
    role: "Software Architect • FinTech Lab",
    city: "Addis Ababa",
    rating: 5,
    comment: "Finally an Ethiopian bank app with top-tier security standards and sub-second EthSwitch transfers. The UX and animations feel on par with Revolut or Apple Wallet.",
    badge: "Tech Verified",
  },
];

const REVIEWS_ROW_2 = [
  {
    id: 5,
    name: "Bethelhem Zewdu",
    role: "Civil Engineer & Contractor",
    city: "Bahir Dar",
    rating: 5,
    comment: "Digital Eqwub is a game changer for our construction collective. Transparent automated payouts, escrow guarantees, and zero manual spreadsheet tracking.",
    badge: "Eqwub Host",
  },
  {
    id: 6,
    name: "Dawit Wolde",
    role: "University Lecturer & Author",
    city: "Mekelle",
    rating: 5,
    comment: "The AI predictive expense breakdown opened my eyes to where my monthly income actually goes. The emergency savings pot accrues high yields automatically.",
    badge: "Verified Account",
  },
  {
    id: 7,
    name: "Senait Hailu",
    role: "Hospitality Manager • Kuriftu Resorts",
    city: "Bishoftu",
    rating: 5,
    comment: "Guest payments and instant Telebirr interoperability work like magic. The 1-tap card freeze feature gives complete peace of mind when traveling abroad.",
    badge: "Business Tier",
  },
  {
    id: 8,
    name: "Ephrem Negash",
    role: "Fintech Researcher • AAU",
    city: "Addis Ababa",
    rating: 5,
    comment: "Dashen's zero-downtime architecture backed by nationwide USSD is a masterclass in inclusive financial engineering for emerging markets.",
    badge: "Verified Analyst",
  },
];

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" glow="center" className="py-32 sm:py-40">
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
              Community & Social Proof
            </span>
            <h2 className="mt-4 text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter
                           uppercase leading-[0.85] transition-colors">
              Real Stories.
              <br />
              Empowered.
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
            From bustling merchant stalls in Merkato to remote coffee estates in Sidama, see how 5.8M+ Ethiopians power their daily lives.
          </motion.p>
        </div>
      </div>

      {/* 21st.dev Style Dual Infinite Horizontal Marquee */}
      <div className="relative space-y-6 overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#F8F6F0] dark:from-[#03060f] to-transparent z-20 pointer-events-none transition-colors duration-300" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#F8F6F0] dark:from-[#03060f] to-transparent z-20 pointer-events-none transition-colors duration-300" />

        {/* Row 1: Leftward Scrolling */}
        <div className="flex animate-marquee gap-6 items-center">
          {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((r, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white dark:bg-[#080c17] dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-white/[0.01] border border-slate-200/90 dark:border-white/[0.08] hover:border-blue-500/40 transition-all shrink-0 hover:scale-[1.02] shadow-lg shadow-slate-900/[0.04] dark:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {r.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-5">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{r.role}</div>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-500 font-mono shrink-0 ml-2">
                  {r.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward / Opposite Flow */}
        <div className="flex animate-marquee gap-6 items-center [animation-direction:reverse] [animation-duration:35s]">
          {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((r, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white dark:bg-[#080c17] dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-white/[0.01] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all shrink-0 hover:scale-[1.02] shadow-lg shadow-slate-900/[0.04] dark:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                    {r.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-5">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{r.role}</div>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-500 font-mono shrink-0 ml-2">
                  {r.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
