"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";

const VALUES = [
  "Product is king.",
  "Invisible is enemy.",
  "Truth triumphs, always.",
  "Simple isn't.",
  "Craft shows love.",
  "Laughter is contagious.",
  "Wrong could be right.",
  "Daring is caring.",
  "Fame is invaluable.",
  "Risk creates rewards.",
  "Dull is expensive.",
  "Feelings refine facts.",
];

export default function ValuesCounter() {
  const [index, setIndex] = useState(0);
  const [fontSize, setFontSize] = useState(40);
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % VALUES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Replicate pbfw getFontSize: fill container width minus 80px
  useLayoutEffect(() => {
    const calc = () => {
      if (!wrapRef.current || !measureRef.current) return;
      const w = wrapRef.current.clientWidth - 80;
      if (w <= 0) return;
      measureRef.current.style.fontSize = "100px";
      measureRef.current.textContent = VALUES[index];
      const ratio = w / measureRef.current.scrollWidth;
      measureRef.current.textContent = "";
      setFontSize(Math.floor(100 * ratio * 0.96));
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [index]);

  const counter = `${String(index + 1).padStart(2, "0")} / ${VALUES.length}`;

  return (
    <div ref={wrapRef} className="bg-ink w-full px-[4vw] py-10">
      <div className="max-w-[1500px] mx-auto">
        <p
          className="font-body text-muted leading-none mb-3"
          style={{ fontSize: "11px" }}
        >
          12 Values
        </p>

        {/* Hidden measurement node */}
        <div
          ref={measureRef}
          aria-hidden="true"
          className="font-body absolute opacity-0 pointer-events-none whitespace-nowrap top-0 left-0"
          style={{ fontSize: "100px", lineHeight: 1 }}
        />

        <div className="flex items-baseline overflow-hidden">
          <span
            className="font-body text-value-text whitespace-nowrap"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1, fontWeight: 400 }}
          >
            {VALUES[index]}
          </span>
          <span
            className="font-body text-value-text animate-blink"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1 }}
            aria-hidden="true"
          >
            |
          </span>
        </div>

        <p
          className="font-body text-muted mt-3"
          style={{ fontSize: "13px" }}
        >
          {counter}
        </p>
      </div>
    </div>
  );
}
