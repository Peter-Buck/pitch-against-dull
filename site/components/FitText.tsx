"use client";

import { useState, useRef, useLayoutEffect } from "react";

interface Props {
  text: string;
  className?: string;
}

export default function FitText({ text, className = "" }: Props) {
  const [fontSize, setFontSize] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const calc = () => {
      if (!wrapRef.current || !measureRef.current) return;
      const w = wrapRef.current.clientWidth;
      if (w <= 0) return;
      // Same approach as Squarespace sqsrte-large: fit text to container width
      measureRef.current.style.fontSize = "100px";
      measureRef.current.textContent = text;
      const natural = measureRef.current.scrollWidth;
      measureRef.current.textContent = "";
      setFontSize(Math.floor((w / natural) * 100));
    };

    calc();
    const ro = new ResizeObserver(calc);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div ref={wrapRef} className="w-full overflow-hidden">
      {/* Hidden measuring node — same font face as display text */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="font-body absolute opacity-0 pointer-events-none whitespace-nowrap top-0 left-0"
        style={{ fontSize: "100px", lineHeight: 1, fontWeight: 400 }}
      />
      <p
        className={`font-body font-normal leading-none whitespace-nowrap transition-opacity duration-150 ${className} ${fontSize === 0 ? "opacity-0" : "opacity-100"}`}
        style={{ fontSize: fontSize > 0 ? `${fontSize}px` : "clamp(3rem,14.7vw,13rem)" }}
        aria-label={text}
      >
        {text}
      </p>
    </div>
  );
}
