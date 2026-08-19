"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const SpotlightAurora = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Center spotlight by default
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2.5);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. ACETERNITY / LINEAR STYLE DUAL LAMP CONES (Top Center Intense Lighting) */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[550px] flex items-center justify-center pointer-events-none">
        {/* Left Lamp Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#F8F6F0] dark:bg-[#050811] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#F8F6F0] dark:bg-[#050811] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Right Lamp Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#F8F6F0] dark:bg-[#050811] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-[100%] right-0 bg-[#F8F6F0] dark:bg-[#050811] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Central Intense Horizontal Laser Beam Line */}
        <motion.div
          animate={{
            opacity: [0.8, 1, 0.8],
            scaleX: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-44 w-[42rem] h-0.5 bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent shadow-[0_0_30px_#06b6d4]"
        />

        {/* Glowing Lamp Core Sphere */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-28 w-80 h-36 bg-cyan-400/60 dark:bg-cyan-500 rounded-full blur-[80px]"
        />

        {/* Deep Blue Lower Backdrop Glow */}
        <div className="absolute top-36 w-[55rem] h-56 bg-blue-500/20 dark:bg-blue-600/30 rounded-full blur-[100px]" />
      </div>

      {/* 2. DYNAMIC CURSOR-TRACKING SPOTLIGHT (Bright & Visible) */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-r from-blue-500/15 dark:from-blue-500/30 via-cyan-400/15 dark:via-cyan-400/25 to-indigo-500/10 dark:to-indigo-500/20 blur-[100px] transition-opacity duration-200"
      />

      {/* 3. VIBRANT PULSING AURA BEHIND THE DASHBOARD & HEADLINE */}
      <motion.div
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-blue-500/20 dark:from-blue-600/35 via-cyan-400/15 dark:via-cyan-500/25 to-indigo-500/15 dark:to-indigo-600/30 rounded-full blur-[120px]"
      />

      {/* 4. LATERAL NEON GLOW ORBS (Left & Right Flanks) */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/35 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-500/35 rounded-full blur-[130px]"
      />

      {/* 5. VIBRANT MOVING LASER PATHS WITH TRAVELING LIGHT BEAMS */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="laser-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="laser-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M -100 240 Q 400 60 960 420 T 2000 280"
          fill="none"
          stroke="url(#laser-grad-1)"
          strokeWidth="2"
          filter="url(#laser-glow)"
          animate={{
            pathOffset: [0, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M 2100 120 Q 1350 500 720 200 T -200 620"
          fill="none"
          stroke="url(#laser-grad-2)"
          strokeWidth="2"
          filter="url(#laser-glow)"
          animate={{
            pathOffset: [1, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};
