"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "cyan" | "muted" | "center" | "split";
  spotlight?: boolean;
  overflow?: "hidden" | "visible";
}

export const SectionWrapper: React.FC<Props> = ({
  id,
  children,
  className = "",
  glow = "blue",
  spotlight = true,
  overflow = "hidden",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (!spotlight) return;
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    };
    const onLeave = () => setCursor((c) => ({ ...c, visible: false }));

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [spotlight]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${
        overflow === "visible" ? "overflow-visible" : "overflow-hidden"
      } bg-[#F8F6F0] dark:bg-[#03060f] transition-colors duration-300 ${className}`}
    >
      {/* ── Section divider glow line ─────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px section-divider z-20"
      />

      {/* ── Futuristic Matrix Grid Background ─────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-grid-fintech opacity-30 dark:opacity-25"
      />

      {/* ── Cursor-tracked spotlight ──────────────── */}
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: cursor.visible ? 1 : 0,
            background: `radial-gradient(700px circle at ${cursor.x}px ${cursor.y}px,
              rgba(59,130,246,0.12) 0%,
              rgba(34,211,238,0.06) 35%,
              transparent 75%)`,
          }}
        />
      )}

      {/* ── Dynamic Ambient Aurora Lighting Cones ─── */}
      {glow === "center" && (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-500/10 dark:from-blue-600/20 via-cyan-400/10 dark:via-cyan-500/15 to-transparent rounded-full blur-[180px] z-0 animate-pulse-glow"
        />
      )}

      {glow === "blue" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[180px] z-0 animate-drift"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 w-[550px] h-[450px] bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[190px] z-0 animate-drift-slow"
          />
        </>
      )}

      {glow === "cyan" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 w-[700px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-[180px] z-0 animate-drift"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[450px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[190px] z-0 animate-drift-slow"
          />
        </>
      )}

      {glow === "split" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/15 dark:bg-blue-600/25 rounded-full blur-[200px] z-0 animate-pulse-glow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-400/15 dark:bg-cyan-500/20 rounded-full blur-[200px] z-0 animate-pulse-glow"
          />
        </>
      )}

      {glow === "muted" && (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[190px] z-0"
        />
      )}

      {/* ── Content with smooth scroll reveal ─────── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.21, 0.47, 0.27, 0.98] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
