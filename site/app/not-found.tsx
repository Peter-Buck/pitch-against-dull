import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — PETER BUCK // CCO",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="bg-ink flex-1 flex items-center">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-24">
        <p className="font-body text-[rgba(255,255,255,0.4)] text-[13px] uppercase tracking-wider mb-6">
          404
        </p>
        <h2
          className="text-cream font-heading font-medium leading-[1.14] mb-8"
          style={{ fontSize: "var(--text-h2)" }}
        >
          We couldn&apos;t find the page you were looking for.
        </h2>
        <Link
          href="/"
          className="font-body text-cream text-[16px] underline transition-opacity duration-[450ms] hover:opacity-50"
        >
          ← Back to work
        </Link>
      </div>
    </div>
  );
}
