"use client";

import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

export type RevealVariant = "fade" | "scale";

interface Props {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

// Measured from live site (computed styles on .preFade/.preScale elements):
//   preFade  → opacity: 0→1, transition: opacity 0.45s ease
//   preScale → opacity: 0→1 + scale(0.9)→scale(1), transition: opacity 0.45s ease, transform 0.45s ease
// Trigger: IntersectionObserver threshold 0.1
// prefers-reduced-motion: handled in globals.css via [data-reveal] override (CSS fires before first paint)

export default function Reveal({ children, variant = "scale", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden: CSSProperties = {
    opacity: 0,
    ...(variant === "scale" ? { transform: "scale(0.9)" } : {}),
  };

  const visible: CSSProperties = {
    opacity: 1,
    ...(variant === "scale" ? { transform: "scale(1)" } : {}),
  };

  const transition = `opacity 0.45s ease ${delay}s${variant === "scale" ? `, transform 0.45s ease ${delay}s` : ""}`;

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ ...(revealed ? visible : hidden), transition }}
    >
      {children}
    </div>
  );
}
