"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("paid") === "true") {
      setHasPaid(true);
    }
  }, []);

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

      {/* Paid: Full guide */}
      {hasPaid && (
        <div className="max-w-guide mx-auto px-5">
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
