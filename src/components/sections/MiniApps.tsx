"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  Plane,
  PhoneCall,
  Zap,
  ShoppingBag,
  Sun,
  Moon,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  QrCode,
  Compass,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BorderBeam } from "@/components/ui/BorderBeam";

interface LifestyleCardData {
  id: string;
  badge: string;
  badgeIcon: React.ElementType;
  title: string;
  description: string;
  colorScheme: "dark" | "light" | "navy" | "cobalt" | "emerald";
  themeToggle?: boolean;
}

const LIFESTYLE_CARDS: LifestyleCardData[] = [
  {
    id: "theme-control",
    badge: "Adaptive Theme Engine",
    badgeIcon: Layers,
    title: "Update your Visual Preference",
    description:
      "Dashen Bank Super App gives you full control over your app experience. Switch between light and dark themes instantly to match your mood, time of day, or eye comfort. Whether you're checking balances during the day or managing payments at night, the app adapts to your visual preference while keeping all your banking secure and accessible.",
    colorScheme: "dark",
    themeToggle: true,
  },
  {
    id: "merchants",
    badge: "3-Click Marketplace",
    badgeIcon: ShoppingBag,
    title: "Browse, Shop, and Pay from Your Favorite Merchants",
    description:
      "Dashen Bank Super App connects you to your favorite stores and services directly inside the app. Browse partner merchants, explore products and offers, and pay securely without switching between apps. From everyday essentials to premium fashion, complete every checkout in 3 simple taps.",
    colorScheme: "light",
  },
  {
    id: "airlines",
    badge: "Ethiopian Airlines",
    badgeIcon: Plane,
    title: "Instant Flight Booking & Live Boarding Passes",
    description:
      "Book domestic and international flights directly inside your banking wallet. Choose preferred seating, select extra baggage, and generate verified Star Alliance digital boarding passes with instant biometric settlement.",
    colorScheme: "navy",
  },
  {
    id: "airtime",
    badge: "Ethio Telecom Partner",
    badgeIcon: PhoneCall,
    title: "Zero-Data Airtime Top-Up & 5G Bundles",
    description:
      "Never run out of airtime or high-speed connectivity. Top up any Ethio Telecom or Safaricom line with instant 5% cashback returned directly into your primary Dashen checking account.",
    colorScheme: "cobalt",
  },
  {
    id: "utility",
    badge: "EEU Smart Power",
    badgeIcon: Zap,
    title: "Instant Electric Utility & Meter Clearing",
    description:
      "Eliminate utility lines forever. Pay postpaid electricity invoices or generate 20-digit STS prepaid recharge tokens with zero transaction fees and automated meter synchronization.",
    colorScheme: "emerald",
  },
];

// Single Layer Card with Silky Smooth Spring-Damped Transforms & Filter Blur
const LifestyleStackLayer = ({
  card,
  index,
  total,
  smoothProgress,
}: {
  card: LifestyleCardData;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
}) => {
  const [activeTheme, setActiveTheme] = useState<"dark" | "light">("dark");
  const [selectedAirtime, setSelectedAirtime] = useState("300 ETB");

  const isLight = card.colorScheme === "light";

  // Highly tuned easing curves for 5 cards across the 0 -> 1 scroll timeline
  let yTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;
  let opacityTransform: MotionValue<number>;
  let blurTransform: MotionValue<string>;
  let pointerEventsTransform: MotionValue<string>;

  if (index === 0) {
    yTransform = useTransform(smoothProgress, [0, 0.13, 0.22, 1], [0, 0, -40, -40]);
    scaleTransform = useTransform(smoothProgress, [0, 0.13, 0.22, 1], [1, 1, 0.93, 0.93]);
    opacityTransform = useTransform(smoothProgress, [0, 0.12, 0.21, 1], [1, 1, 0, 0]);
    blurTransform = useTransform(
      smoothProgress,
      [0, 0.12, 0.21, 1],
      ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]
    );
    pointerEventsTransform = useTransform(
      smoothProgress,
      [0, 0.16, 0.17, 1],
      ["auto", "auto", "none", "none"]
    );
  } else if (index === 1) {
    yTransform = useTransform(
      smoothProgress,
      [0.12, 0.22, 0.35, 0.44, 1],
      [340, 0, 0, -40, -40]
    );
    scaleTransform = useTransform(
      smoothProgress,
      [0.12, 0.22, 0.35, 0.44, 1],
      [0.91, 1, 1, 0.93, 0.93]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.12, 0.21, 0.35, 0.43, 1],
      [0, 1, 1, 0, 0]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.12, 0.21, 0.35, 0.43, 1],
      ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]
    );
    pointerEventsTransform = useTransform(
      smoothProgress,
      [0, 0.17, 0.18, 0.39, 0.4, 1],
      ["none", "none", "auto", "auto", "none", "none"]
    );
  } else if (index === 2) {
    yTransform = useTransform(
      smoothProgress,
      [0.34, 0.44, 0.57, 0.66, 1],
      [340, 0, 0, -40, -40]
    );
    scaleTransform = useTransform(
      smoothProgress,
      [0.34, 0.44, 0.57, 0.66, 1],
      [0.91, 1, 1, 0.93, 0.93]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.34, 0.43, 0.57, 0.65, 1],
      [0, 1, 1, 0, 0]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.34, 0.43, 0.57, 0.65, 1],
      ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]
    );
    pointerEventsTransform = useTransform(
      smoothProgress,
      [0, 0.39, 0.4, 0.61, 0.62, 1],
      ["none", "none", "auto", "auto", "none", "none"]
    );
  } else if (index === 3) {
    yTransform = useTransform(
      smoothProgress,
      [0.56, 0.66, 0.79, 0.88, 1],
      [340, 0, 0, -40, -40]
    );
    scaleTransform = useTransform(
      smoothProgress,
      [0.56, 0.66, 0.79, 0.88, 1],
      [0.91, 1, 1, 0.93, 0.93]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.56, 0.65, 0.79, 0.87, 1],
      [0, 1, 1, 0, 0]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.56, 0.65, 0.79, 0.87, 1],
      ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]
    );
    pointerEventsTransform = useTransform(
      smoothProgress,
      [0, 0.61, 0.62, 0.83, 0.84, 1],
      ["none", "none", "auto", "auto", "none", "none"]
    );
  } else {
    // Last card (index === 4)
    yTransform = useTransform(smoothProgress, [0.78, 0.88, 1], [340, 0, 0]);
    scaleTransform = useTransform(smoothProgress, [0.78, 0.88, 1], [0.91, 1, 1]);
    opacityTransform = useTransform(smoothProgress, [0.78, 0.87, 1], [0, 1, 1]);
    blurTransform = useTransform(
      smoothProgress,
      [0.78, 0.87, 1],
      ["blur(12px)", "blur(0px)", "blur(0px)"]
    );
    pointerEventsTransform = useTransform(
      smoothProgress,
      [0, 0.83, 0.84, 1],
      ["none", "none", "auto", "auto"]
    );
  }

  return (
    <motion.div
      style={{
        y: yTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
        filter: blurTransform,
        pointerEvents: pointerEventsTransform as unknown as "auto" | "none",
        zIndex: index + 10,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 will-change-transform"
    >
      <div
        className={`w-full max-w-5xl rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 lg:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 ${
          isLight
            ? "bg-[#f8fafc] text-[#0f172a] border border-slate-200 shadow-[0_40px_110px_-20px_rgba(0,0,0,0.55)]"
            : card.colorScheme === "navy"
            ? "bg-gradient-to-b from-[#08152e] via-[#050e1f] to-[#02060e] text-white border border-blue-500/30 shadow-[0_40px_110px_-20px_rgba(0,0,0,0.9)]"
            : card.colorScheme === "cobalt"
            ? "bg-gradient-to-b from-[#041d38] via-[#031326] to-[#010914] text-white border border-cyan-500/30 shadow-[0_40px_110px_-20px_rgba(0,0,0,0.9)]"
            : card.colorScheme === "emerald"
            ? "bg-gradient-to-b from-[#051c18] via-[#031310] to-[#020a08] text-white border border-emerald-500/30 shadow-[0_40px_110px_-20px_rgba(0,0,0,0.9)]"
            : "bg-gradient-to-b from-[#0c1322] via-[#070b14] to-[#04060c] text-white border border-white/15 shadow-[0_40px_110px_-20px_rgba(0,0,0,0.9)]"
        }`}
      >
        {!isLight && (
          <BorderBeam
            size={360}
            duration={14 + index * 2}
            colorFrom={
              card.colorScheme === "emerald"
                ? "#10b981"
                : card.colorScheme === "cobalt"
                ? "#06b6d4"
                : "#38bdf8"
            }
            colorTo={card.colorScheme === "emerald" ? "#047857" : "#2563eb"}
          />
        )}

        {/* Ambient Glow */}
        <div
          className={`absolute top-0 right-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${
            isLight
              ? "bg-blue-200/40"
              : card.colorScheme === "emerald"
              ? "bg-emerald-500/10"
              : "bg-blue-600/15"
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
          {/* Left Column: Information & Controls */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border backdrop-blur-md">
              {React.createElement(card.badgeIcon, {
                className: `w-3.5 h-3.5 ${
                  isLight
                    ? "text-blue-600"
                    : card.colorScheme === "emerald"
                    ? "text-emerald-400"
                    : "text-cyan-400"
                }`,
              })}
              <span
                className={
                  isLight
                    ? "text-slate-700"
                    : card.colorScheme === "emerald"
                    ? "text-emerald-300"
                    : "text-cyan-300"
                }
              >
                {card.badge}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.08] ${
                isLight ? "text-[#0b1120]" : "text-white"
              }`}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? "text-slate-600 font-normal" : "text-slate-400"
              }`}
            >
              {card.description}
            </p>

            {/* Specific Interactive Sub-widgets */}
            {card.themeToggle && (
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTheme("light")}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    activeTheme === "light"
                      ? "bg-white text-slate-900 border-white shadow-lg shadow-white/20 scale-105"
                      : "bg-white/[0.05] text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Light Mode</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTheme("dark")}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    activeTheme === "dark"
                      ? "bg-blue-600 text-white border-blue-400/50 shadow-lg shadow-blue-500/25 scale-105"
                      : "bg-white/[0.05] text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Moon className="w-4 h-4 text-cyan-300" />
                  <span>Dark Mode</span>
                </button>
              </div>
            )}

            {card.id === "merchants" && (
              <div className="pt-1 flex flex-wrap gap-2">
                {[
                  "3-Click Fast Checkout",
                  "Verified National Stores",
                  "Zero Surcharge",
                  "Instant Escrow Refund",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-200/80 border border-slate-300/80 text-[11px] font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    {item}
                  </span>
                ))}
              </div>
            )}

            {card.id === "airlines" && (
              <div className="pt-1 flex items-center gap-4 text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Bole Gate Sync
                </span>
                <span className="text-slate-500">•</span>
                <span>Star Alliance Miles</span>
              </div>
            )}

            {card.id === "airtime" && (
              <div className="pt-1">
                <div className="text-xs font-mono text-slate-400 mb-2">Instant Cashback Top-Up:</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: "100 ETB", cb: "+5 ETB" },
                    { val: "300 ETB", cb: "+15 ETB" },
                    { val: "1,000 ETB", cb: "+50 ETB" },
                  ].map((pkg) => (
                    <button
                      key={pkg.val}
                      type="button"
                      onClick={() => setSelectedAirtime(pkg.val)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedAirtime === pkg.val
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/10"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="text-xs font-bold font-mono">{pkg.val}</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{pkg.cb}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {card.id === "utility" && (
              <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                    STS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Prepaid Smart Meters</div>
                    <div className="text-[10px] text-slate-400 font-mono">Instant Token SMS & Storing</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  AUTO-SYNC
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Visual Mockups */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            {/* Visual 1: Dual Theme Phone Showcase */}
            {card.id === "theme-control" && (
              <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center py-2">
                {/* Secondary Phone (Background Offset) */}
                <div
                  className={`w-44 sm:w-52 rounded-[32px] p-3 border shadow-2xl transition-all duration-700 absolute -left-2 sm:-left-4 top-4 rotate-[-6deg] opacity-70 blur-[0.5px] scale-95 ${
                    activeTheme === "light"
                      ? "bg-[#0b101d] border-white/10 text-white"
                      : "bg-[#f8fafc] border-slate-200 text-slate-900"
                  }`}
                >
                  <div className="flex justify-between items-center px-2 py-1 mb-2">
                    <span className="text-[9px] font-mono opacity-60">9:41</span>
                    <div className="w-8 h-2 bg-black/40 rounded-full" />
                    <span className="text-[9px] font-mono opacity-60">5G</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/10 backdrop-blur-sm space-y-1.5">
                    <div className="text-[9px] opacity-70">Total Net Worth</div>
                    <div className="text-xs font-black font-mono">ETB 200,000.00</div>
                  </div>
                </div>

                {/* Primary Foreground Phone Mockup */}
                <div
                  className={`w-56 sm:w-64 rounded-[36px] p-3.5 border shadow-2xl transition-all duration-500 relative z-10 rotate-[2deg] ${
                    activeTheme === "light"
                      ? "bg-[#f8fafc] border-slate-300 text-slate-900 shadow-blue-500/10"
                      : "bg-[#060a14] border-white/15 text-white shadow-black/80"
                  }`}
                >
                  {/* Dynamic Island */}
                  <div className="flex justify-between items-center px-2 py-1 mb-2">
                    <span className="text-[9px] font-mono font-bold opacity-70">9:41</span>
                    <div className="w-14 h-3 bg-black rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-auto mr-1" />
                    </div>
                    <span className="text-[9px] font-mono opacity-70">100%</span>
                  </div>

                  {/* App Bar */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-[10px] shadow-md">
                        BK
                      </div>
                      <div>
                        <div className="text-[9px] opacity-60 font-mono">Welcome Back</div>
                        <div className="text-[11px] font-bold leading-none">Besufekad K.</div>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-0.5 rounded-full text-[8px] font-mono font-bold border ${
                        activeTheme === "light"
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : "bg-blue-500/20 border-blue-400/30 text-cyan-300"
                      }`}
                    >
                      {activeTheme.toUpperCase()}
                    </div>
                  </div>

                  {/* Balance Card inside Phone */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white shadow-lg shadow-blue-600/30 space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-mono opacity-80">
                      <span>Dashen Premium Savings</span>
                      <ShieldCheck className="w-3 h-3 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-[9px] opacity-80">Available Balance</div>
                      <div className="text-lg font-black tracking-tight font-mono">
                        200,000.00 <span className="text-[10px] text-cyan-200 font-normal">ETB</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono pt-1 border-t border-white/15">
                      <span className="opacity-80">Acc: •••• 3123</span>
                      <span className="text-emerald-300 font-bold">● Active</span>
                    </div>
                  </div>

                  {/* Quick Action Grid */}
                  <div className="grid grid-cols-4 gap-1.5 mt-3 text-center">
                    {[
                      { label: "Send", icon: "↗" },
                      { label: "Bank", icon: "🏛" },
                      { label: "Wallet", icon: "💳" },
                      { label: "More", icon: "•••" },
                    ].map((btn, idx) => (
                      <div
                        key={idx}
                        className={`p-1.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          activeTheme === "light"
                            ? "bg-slate-100/90 border-slate-200 text-slate-800"
                            : "bg-white/[0.04] border-white/10 text-white"
                        }`}
                      >
                        <span className="text-xs font-bold">{btn.icon}</span>
                        <span className="text-[8px] mt-0.5 opacity-80">{btn.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Visual 2: 3-Click Marketplace Grid */}
            {card.id === "merchants" && (
              <div className="w-full max-w-sm rounded-[32px] bg-[#0c1222] border border-slate-800 p-4 shadow-2xl text-white space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">
                      3C
                    </div>
                    <span className="text-xs font-bold font-mono text-cyan-300">3 CLICK SHOPS</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    500+ STORES
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "All Mart", cat: "Groceries & Supermarket", icon: "🛒", tag: "15m Delivery" },
                    { name: "Qeleb Watch", cat: "Luxury Watches", icon: "⌚", tag: "Official Store" },
                    { name: "Habesha Gifts", cat: "Art & Handcrafts", icon: "🎁", tag: "Artisanal" },
                    { name: "Phil Leather", cat: "Pure Leather", icon: "👞", tag: "Top Rated" },
                    { name: "Mulmul Bakery", cat: "Bakery & Sweets", icon: "🥖", tag: "Fresh Daily" },
                    { name: "Med City", cat: "Pharmacy & Health", icon: "💊", tag: "24/7 Verified" },
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-400 transition-all cursor-pointer group"
                    >
                      <div className="text-lg mb-0.5">{m.icon}</div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">{m.name}</div>
                      <div className="text-[9px] text-slate-400 line-clamp-1">{m.cat}</div>
                      <div className="mt-1 text-[8px] font-mono text-cyan-400 bg-cyan-500/10 px-1 py-0.5 rounded inline-block">
                        {m.tag}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-between text-xs font-bold shadow-lg shadow-blue-500/25">
                  <span>1-Tap Biometric Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )}

            {/* Visual 3: Ethiopian Airlines Ticket Boarding Pass */}
            {card.id === "airlines" && (
              <div className="w-full max-w-sm rounded-[32px] bg-[#060b17] border border-blue-400/25 p-4 shadow-2xl text-white space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Plane className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold font-mono text-cyan-200">ET-602 Flight Ticket</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    CONFIRMED
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl font-black font-mono text-white">ADD</div>
                      <div className="text-[9px] text-slate-400">Addis Ababa Bole</div>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[8px] font-mono text-cyan-300">45m • B787</span>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1" />
                      <span className="text-[8px] font-mono text-emerald-400">Direct Flight</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black font-mono text-white">BJR</div>
                      <div className="text-[9px] text-slate-400">Bahir Dar Airport</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono pt-1.5 border-t border-white/10">
                    <span className="text-slate-400">Seat 14A • Economy</span>
                    <span className="text-xs font-bold text-cyan-300">ETB 4,200.00</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-7 h-7 text-cyan-300" />
                    <div>
                      <div className="text-xs font-bold text-white">Star Alliance e-Pass</div>
                      <div className="text-[9px] text-slate-400 font-mono">Scan at Gate 3B</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            )}

            {/* Visual 4: Ethio Telecom Instant Airtime */}
            {card.id === "airtime" && (
              <div className="w-full max-w-sm rounded-[32px] bg-[#051124] border border-cyan-400/25 p-4 shadow-2xl text-white space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold font-mono text-cyan-200">Ethio Telecom Direct</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    5% CASHBACK ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400">Destination Number</div>
                  <div className="text-base font-black font-mono text-white tracking-wider">+251 91 123 4567</div>
                  <div className="flex justify-between items-center text-xs font-mono pt-1.5 border-t border-white/10">
                    <span className="text-slate-400">Selected Package</span>
                    <span className="font-bold text-cyan-300">{selectedAirtime}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Instant Cashback:</span>
                  <span className="text-emerald-400 font-black font-mono">
                    +{selectedAirtime === "100 ETB" ? "5" : selectedAirtime === "300 ETB" ? "15" : "50"} ETB
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Recharge with 1-Tap Biometrics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Visual 5: EEU Smart Electricity Meter */}
            {card.id === "utility" && (
              <div className="w-full max-w-sm rounded-[32px] bg-[#041410] border border-emerald-400/25 p-4 shadow-2xl text-white space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold font-mono text-emerald-300">EEU Power Utility Grid</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    CONNECTED
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Meter Key:</span>
                    <span className="text-white font-bold">EEU-0948-2831</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Customer:</span>
                    <span className="text-white font-bold">Abebe Kebede</span>
                  </div>
                  <div className="flex justify-between text-slate-400 border-t border-white/10 pt-1.5">
                    <span>Issued Units:</span>
                    <span className="text-emerald-300 font-bold">280.5 kWh</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-0.5">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">20-Digit STS Prepaid Token</div>
                  <div className="text-sm font-black font-mono text-emerald-300 tracking-widest">
                    4892 - 1092 - 8472 - 0192 - 5821
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/10 text-center text-[10px] text-slate-400 font-mono">
                  ✓ Automatically synced to your smart meter
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MiniApps = () => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  // Spring smoothing for ultra-fluid cinematic scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.0005,
  });

  return (
    <SectionWrapper id="mini-apps" glow="cyan" overflow="visible" className="pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section header ─────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8
                        border-b border-white/[0.06] pb-12 mb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.99] }}
          >
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.35em]">
              Mini Apps Ecosystem
            </span>
            <h2
              className="mt-4 text-6xl md:text-8xl font-black text-white tracking-tighter
                           uppercase leading-[0.85]"
            >
              One App.
              <br />
              Every Lifestyle.
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
            Scroll to reveal how Dashen SuperApp unifies your theme preferences, 3-click shopping, flight tickets, instant airtime, and automated utility billing.
          </motion.p>
        </div>
      </div>

      {/* ── Pinned Scroll Track with Stacked Card Transitions ── */}
      <div ref={scrollTrackRef} className="relative w-full h-[380vh]">
        {/* Sticky Pinned Viewport Container */}
        <div className="sticky top-20 sm:top-24 h-[82vh] min-h-[600px] max-h-[780px] w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Card Overlap Stage */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center px-4">
            {LIFESTYLE_CARDS.map((card, index) => (
              <LifestyleStackLayer
                key={card.id}
                card={card}
                index={index}
                total={LIFESTYLE_CARDS.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>

          {/* Bottom Floating Card Pagination Indicator */}
          <div className="relative z-30 pb-3 flex items-center gap-2">
            {LIFESTYLE_CARDS.map((item, idx) => {
              const start = idx === 0 ? 0 : (idx - 0.2) / (LIFESTYLE_CARDS.length - 1);
              const end = idx === LIFESTYLE_CARDS.length - 1 ? 1 : (idx + 0.8) / (LIFESTYLE_CARDS.length - 1);
              return (
                <div
                  key={item.id}
                  className="h-1.5 rounded-full bg-white/10 overflow-hidden w-8 sm:w-12 transition-all"
                >
                  <motion.div
                    style={{
                      scaleX: useTransform(
                        smoothProgress,
                        [idx * 0.2, (idx + 1) * 0.2],
                        [0, 1]
                      ),
                    }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
