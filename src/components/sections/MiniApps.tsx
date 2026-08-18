"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MINI_APPS } from "@/data/mockData";
import {
  PhoneCall,
  Plane,
  Zap,
  Ticket,
  ShoppingBag,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  Plane,
  Zap,
  Ticket,
  ShoppingBag,
  Users,
};

export const MiniApps = () => {
  const [activeApp, setActiveApp] = useState(MINI_APPS[0].id);

  return (
    <section id="mini-apps" className="py-24 bg-[#080d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Mini App list */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <Badge variant="cyan" className="mb-4">
                <Layers className="w-3 h-3 mr-1" />
                Integrated Ecosystem
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                50+ In-App Services. <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zero App Switching.
                </span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Why download dozens of single-purpose apps? From booking Ethiopian Airlines flights
                to splitting dinner tabs and paying power bills, everything runs smoothly inside Dashen SuperApp.
              </p>
            </div>

            {/* Interactive Grid of Mini Apps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {MINI_APPS.map((app) => {
                const Icon = iconMap[app.iconName] || Sparkles;
                const isSelected = activeApp === app.id;

                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col gap-2 relative overflow-hidden ${
                      isSelected
                        ? "bg-gradient-to-br from-blue-900/40 to-slate-900/80 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${app.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {app.popular && (
                        <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                          Popular
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {app.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                        {app.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive In-App Simulation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-[#0d1424] border border-white/10 p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">
                    SuperApp Mini Engine v2.4
                  </span>
                </div>
                <Badge variant="emerald">Verified Merchant</Badge>
              </div>

              {/* Dynamic App Preview based on active selection */}
              <div className="py-6 flex flex-col gap-5">
                {activeApp === "airtime" && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                          ET
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Ethio Telecom Airtime</div>
                          <div className="text-xs text-slate-400">+251 91 123 4567</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400">5% Cashback</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {["50 ETB", "100 ETB", "250 ETB", "500 ETB", "1,000 ETB", "Unlimited Data"].map((pkg, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center text-xs font-medium text-slate-200 hover:border-blue-400 cursor-pointer"
                        >
                          {pkg}
                        </div>
                      ))}
                    </div>

                    <Button variant="glow" size="sm" className="w-full justify-center">
                      Instant Recharge (1-Tap)
                    </Button>
                  </div>
                )}

                {activeApp === "airlines" && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                      <div className="flex items-center justify-between text-xs text-emerald-300 mb-2 font-mono">
                        <span>ET-602 Flight Booking</span>
                        <span>Direct in Birr</span>
                      </div>
                      <div className="flex items-center justify-between text-white font-bold text-lg font-mono">
                        <span>ADD (Addis)</span>
                        <Plane className="w-4 h-4 text-emerald-400 rotate-90" />
                        <span>BJR (Bahar Dar)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
                        <span>14 Aug 2026 • Economy</span>
                        <span className="text-white font-bold">ETB 4,200</span>
                      </div>
                    </div>

                    <Button variant="glow" size="sm" className="w-full justify-center">
                      Confirm Flight Booking
                    </Button>
                  </div>
                )}

                {activeApp === "eqwub" && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/20">
                      <div className="flex items-center justify-between text-xs text-rose-300 mb-1">
                        <span className="font-semibold">Addis Tech Innovators Eqwub</span>
                        <span className="font-mono font-bold">Cycle 4/12</span>
                      </div>
                      <div className="text-2xl font-black text-white font-mono my-2">
                        ETB 120,000 Payout
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-2/3 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                        <span>12 Members Verified</span>
                        <span className="text-emerald-400">Next Payout: 1st of Month</span>
                      </div>
                    </div>

                    <Button variant="glow" size="sm" className="w-full justify-center">
                      Join Verified Eqwub Circle
                    </Button>
                  </div>
                )}

                {activeApp !== "airtime" && activeApp !== "airlines" && activeApp !== "eqwub" && (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
                      <div className="text-sm font-bold text-white mb-1">
                        Instant Checkout & In-App Service
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Pay government utility bills, buy concert seats, or purchase from registered
                        local businesses with automated escrow and instant proof of payment.
                      </p>
                    </div>

                    <Button variant="glow" size="sm" className="w-full justify-center">
                      Open In-App Service
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
