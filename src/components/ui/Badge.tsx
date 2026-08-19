import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cyan" | "emerald" | "amber" | "outline" | "glass";
  glow?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  glow = false,
  children,
  ...props
}) => {
  const variants = {
    default:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30",
    emerald:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
    amber:
      "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/10",
    glass:
      "bg-black/[0.04] dark:bg-white/[0.04] backdrop-blur-md text-slate-800 dark:text-slate-200 border-slate-200 dark:border-white/10 shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors",
        variants[variant],
        glow && "shadow-[0_0_15px_rgba(59,130,246,0.20)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
