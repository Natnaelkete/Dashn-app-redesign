"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Center Ambient Mesh Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/25 via-cyan-500/15 to-transparent rounded-[100%] blur-[130px]" />

      {/* Side Accent Spotlights */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[160px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px]" />

      {/* SVG Animated Beams */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -100 200 Q 400 50 900 400 T 1900 300"
          fill="none"
          stroke="url(#beam-grad-1)"
          strokeWidth="1.5"
          initial={{ pathOffset: 0, opacity: 0.3 }}
          animate={{ pathOffset: [0, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M 1900 100 Q 1200 450 700 200 T -200 600"
          fill="none"
          stroke="url(#beam-grad-2)"
          strokeWidth="1.5"
          initial={{ pathOffset: 0, opacity: 0.2 }}
          animate={{ pathOffset: [1, 0], opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
