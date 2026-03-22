"use client";

import Link from "next/link";
import { useState } from "react";
import { PHASES } from "@/data/phases";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import PaywallCTA from "@/components/PaywallCTA";
import PhaseTile from "@/components/PhaseTile";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [hasPaid, setHasPaid] = useState(false);
  const [openPhase, setOpenPhase] = useState<string | null>("phase1");

  const handleUnlock = () => {
    // TODO: Redirect to Lemon Squeezy checkout
    // For now, toggle paid state
    setHasPaid(true);
  };

  return (
    <div className="min-h-screen">
      <Nav hasPaid={hasPaid} onUnlock={handleUnlock} />
      <Hero />

      {/* Unpaid: Ticker + Paywall */}
      {!hasPaid && (
        <>
          <Ticker />
          <div className="px-5">
            <PaywallCTA onUnlock={handleUnlock} />
          </div>
        </>
      )}

      {/* Paid: Companion + full guide */}
      {hasPaid && (
        <div className="max-w-guide mx-auto px-5">
          <Link
            href="/companion"
            className="block rounded-xl bg-sage p-6 mb-8 no-underline text-white shadow-sm transition-shadow hover:shadow-md hover:bg-sage-dark"
          >
            <h2 className="font-serif-display text-[22px] sm:text-[24px] mb-2 tracking-tight text-white">
              Shopping Cart Companion
            </h2>
            <p className="font-ui text-[15px] text-white/95 mb-4 leading-snug">
              Your in-store guide to plastic-free shopping
            </p>
            <span className="font-ui text-[14px] font-semibold inline-flex items-center gap-1 text-white">
              Open Companion →
            </span>
          </Link>
          {PHASES.map((phase) => (
            <PhaseTile
              key={phase.id}
              phase={phase}
              isOpen={openPhase === phase.id}
              onToggle={() => setOpenPhase(openPhase === phase.id ? null : phase.id)}
            />
          ))}
        </div>
      )}

      {/* Articles section - visible to everyone */}
      <ArticlesSection />

      {/* Footer */}
      <Footer />

      {/* Dev toggle — remove before launch */}
      <div className="text-center py-6">
        <button
          onClick={() => setHasPaid(!hasPaid)}
          className="text-[11px] text-txt-faint bg-transparent border border-dashed border-border-faint rounded-md px-3.5 py-1.5 cursor-pointer font-ui hover:border-txt-muted transition-colors"
        >
          {hasPaid ? "← View as unpaid visitor" : "View as paid user →"}
        </button>
      </div>
    </div>
  );
}
