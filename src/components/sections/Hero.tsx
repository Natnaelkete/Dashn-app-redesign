"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  QrCode,
  ArrowUpRight,
  CreditCard,
  Lock,
  CheckCircle2,
  TrendingUp,
  Star,
  Download,
  Users,
  Send,
  Eye,
  EyeOff,
  Check,
  RefreshCw,
  Plane,
  Fingerprint,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { SpotlightAurora } from "@/components/ui/SpotlightAurora";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(142850.5);
  const [currencyMode, setCurrencyMode] = useState<"ETB" | "USD">("ETB");
  const [transferAmount, setTransferAmount] = useState("1500");
  const [recipient, setRecipient] = useState("Abebe K.");
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"card" | "transfer">("card");

  // Scroll Animation Hooks (21st.dev Container Scroll Style)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Perspective 3D Scroll Transforms: As user scrolls, card tilts from 18deg to 0deg and scales up
  const rotateX = useTransform(smoothProgress, [0, 0.45], [16, 0]);
  const scale = useTransform(smoothProgress, [0, 0.45], [0.94, 1.02]);
  const translateY = useTransform(smoothProgress, [0, 0.45], [0, -35]);
  const opacity = useTransform(smoothProgress, [0, 0.15], [0.9, 1]);

  const handleQuickTransfer = () => {
    const amt = parseFloat(transferAmount);
    if (isNaN(amt) || amt <= 0) return;

    setIsTransferring(true);
    setTransferSuccess(false);

    setTimeout(() => {
      setIsTransferring(false);
      setCurrentBalance((prev) => Math.max(0, prev - amt));
      setTransferSuccess(true);

      try {
        confetti({
          particleCount: 55,
          spread: 65,
          origin: { y: 0.75, x: 0.5 },
          colors: ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"],
        });
      } catch (e) {
        // Fallback
      }

      setTimeout(() => setTransferSuccess(false), 3500);
    }, 850);
  };

  const displayBalance =
    currencyMode === "ETB"
      ? `ETB ${currentBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$ ${(currentBalance / 125).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center bg-[#F8F6F0] dark:bg-[#050811] bg-grid-fintech transition-colors duration-300"
    >
      {/* Dynamic Animated Spotlight & Aurora Background Effects */}
      <SpotlightAurora />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Top Pill / Live Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 dark:from-blue-500/15 via-cyan-500/5 dark:via-cyan-500/10 to-indigo-500/10 dark:to-indigo-500/15 border border-blue-500/30 backdrop-blur-xl shadow-md shadow-blue-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 tracking-wide font-mono">
              DASHEN SUPERAPP 3.0
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <Fingerprint className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Fayda e-KYC Enabled</span>
            </span>
          </div>
        </motion.div>

        {/* Centered Modern Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] transition-colors">
            The Modern Standard for <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
              Digital Banking in Ethiopia.
            </span>
          </h1>
        </motion.div>

        {/* Centered Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal transition-colors"
        >
          Secure, fast banking in Dashen Bank Super App. <br className="hidden sm:inline" />
          Check balances, transfer funds, pay bills—all in one simple place.
        </motion.p>

        {/* SCROLL-ANIMATED 3D CONTAINER SHOWCASE */}
        <div className="w-full mt-14 sm:mt-18 perspective-[1500px] flex justify-center">
          <motion.div
            style={{
              rotateX,
              scale,
              translateY,
              opacity,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[980px] rounded-[36px] sm:rounded-[44px] bg-white/95 dark:bg-gradient-to-b dark:from-[#0e1628]/95 dark:to-[#070b14]/95 border border-slate-200/90 dark:border-white/15 p-5 sm:p-9 shadow-2xl shadow-slate-900/10 dark:shadow-2xl backdrop-blur-2xl overflow-hidden transition-colors"
          >
            {/* BorderBeam Animated Traveling Neon Ring */}
            <BorderBeam size={340} duration={12} delay={0} colorFrom="#3b82f6" colorTo="#06b6d4" />

            {/* Dashboard Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center font-black text-white text-sm">
                    D
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                    Dashen SuperApp Dashboard
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live EthSwitch & Telebirr Connected
                  </div>
                </div>
              </div>

              {/* View Switcher: Platinum Card / Quick Pay Simulator */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-900/90 p-1 border border-slate-200 dark:border-white/[0.08]">
                <button
                  onClick={() => setActiveTab("card")}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === "card"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Virtual Card
                </button>
                <button
                  onClick={() => setActiveTab("transfer")}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "transfer"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transfer Demo</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Body */}
            {activeTab === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-7 text-left">
                {/* Left Sub-Card: Holographic Platinum Debit Card */}
                <div className="md:col-span-6 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-950 p-6 text-white shadow-xl border border-blue-400/30 relative overflow-hidden group min-h-[260px]">
                  <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-sm">
                        D
                      </div>
                      <div>
                        <div className="text-sm font-bold tracking-wider">
                          DASHEN PLATINUM
                        </div>
                        <div className="text-xs text-blue-200 font-mono">
                          VISA CONTACTLESS
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setCurrencyMode(currencyMode === "ETB" ? "USD" : "ETB")
                      }
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-200 transition-colors cursor-pointer"
                    >
                      Currency: {currencyMode}
                    </button>
                  </div>

                  <div className="my-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-200 font-mono uppercase tracking-wider">
                        Available Balance
                      </span>
                      <button
                        onClick={() => setBalanceHidden(!balanceHidden)}
                        className="text-xs text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {balanceHidden ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span>{balanceHidden ? "Show" : "Hide"}</span>
                      </button>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mt-1">
                      {balanceHidden ? "••••••••••••" : displayBalance}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-slate-300 font-mono">
                    <span>4829 •••• •••• 8842</span>
                    <span className="text-emerald-300 font-bold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +8.5% p.a.
                    </span>
                  </div>
                </div>

                {/* Right Sub-Card: Live Quick Actions & Recent Activity */}
                <div className="md:col-span-6 flex flex-col justify-between gap-5">
                  {/* 4 Quick Actions */}
                  <div className="grid grid-cols-4 gap-2.5 text-center">
                    {[
                      { label: "Send", icon: ArrowUpRight, action: () => setActiveTab("transfer"), color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
                      { label: "Pay QR", icon: QrCode, action: () => {}, color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20" },
                      { label: "Eqwub", icon: Users, action: () => {}, color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20" },
                      { label: "USSD", icon: Zap, action: () => {}, color: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={item.action}
                        className={`p-3.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer ${item.color}`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Real-time Settlements Feed */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Live Activity Feed</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Real-Time Sync</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.05] flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <Plane className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">Ethiopian Airlines</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Flight Ticket • ET-602</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 dark:text-slate-200">- ETB 4,200.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Sub-Second Interactive Transfer Simulator */}
            {activeTab === "transfer" && (
              <div className="max-w-lg mx-auto py-2 flex flex-col gap-4 text-left">
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/25 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                  <strong className="block mb-0.5">⚡ Interactive Live Demo:</strong>
                  Send test Birr transfers with sub-second settlement and zero fees.
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                    Select Contact
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["Abebe K.", "Selamawit T.", "Dawit H."].map((name) => (
                      <button
                        key={name}
                        onClick={() => setRecipient(name)}
                        className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                          recipient === name
                            ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30"
                            : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-800"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                    Amount (ETB)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-white/15 rounded-xl px-4 py-3 text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                      placeholder="Amount in Birr"
                    />
                    <span className="absolute right-4 top-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      ETB
                    </span>
                  </div>
                </div>

                <Button
                  variant="glow"
                  size="lg"
                  disabled={isTransferring}
                  onClick={handleQuickTransfer}
                  className="w-full justify-center gap-2 cursor-pointer mt-1 py-3.5"
                >
                  {isTransferring ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing Sub-Second Settlement...</span>
                    </>
                  ) : transferSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Transferred Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send ETB {transferAmount} to {recipient}</span>
                    </>
                  )}
                </Button>

                {transferSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm text-center flex items-center justify-center gap-2 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Settled to {recipient} in 0.64s</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
