"use client";

import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/mockData";
import { Star, ShieldCheck, Heart, Sparkles, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            <Heart className="w-3.5 h-3.5 mr-1 text-rose-400 fill-rose-400" />
            Loved Across Ethiopia
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Over 5.8 Million <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Everyday Ethiopians & Businesses
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See how merchants, students, remote travelers, and tech innovators rely on Dashen SuperApp daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#090f1d] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-xl group hover:shadow-blue-500/10"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">
                      {t.name}
                    </span>
                    {t.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {t.role}
                  </span>
                </div>

                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  Verified User
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
