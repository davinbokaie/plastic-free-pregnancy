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
  const [licenseKey, setLicenseKey] = useState("");
  const [licenseError, setLicenseError] = useState(false);
  const [licenseSubmitting, setLicenseSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("pfp_license")) {
      setHasPaid(true);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get("paid") === "true") {
      setHasPaid(true);
    }
  }, []);

  async function handleLicenseSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLicenseError(false);
    const trimmed = licenseKey.trim();
    if (!trimmed) {
      setLicenseError(true);
      return;
    }
    setLicenseSubmitting(true);
    try {
      const res = await fetch("/api/validate-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey: trimmed }),
      });
      const data = (await res.json()) as { valid?: boolean };
      if (res.ok && data.valid === true) {
        localStorage.setItem("pfp_license", trimmed);
        setHasPaid(true);
        setLicenseKey("");
      } else {
        setLicenseError(true);
      }
    } catch {
      setLicenseError(true);
    } finally {
      setLicenseSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen">
      <Nav hasPaid={hasPaid} />
      <Hero />

      {/* Unpaid: Ticker + Paywall + license */}
      {!hasPaid && (
        <>
          <Ticker />
          <div className="px-5">
            <PaywallCTA />

            <div className="max-w-guide mx-auto mt-14 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-border-light" />
                <h2 className="font-serif-display text-[18px] sm:text-[20px] text-txt-primary text-center whitespace-nowrap shrink-0">
                  Already purchased?
                </h2>
                <div className="flex-1 h-px bg-border-light" />
              </div>

              <form onSubmit={handleLicenseSubmit} className="max-w-[360px] mx-auto">
                <input
                  type="text"
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value)}
                  placeholder="Paste your license key here"
                  autoComplete="off"
                  className="w-full font-ui text-[16px] py-[14px] px-[18px] rounded-xl border border-border-light bg-white text-txt-primary placeholder:text-txt-faint outline-none focus:border-sage transition-colors"
                  disabled={licenseSubmitting}
                />
                <button
                  type="submit"
                  disabled={licenseSubmitting}
                  onMouseEnter={(e) => {
                    if (licenseSubmitting) return;
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 6px 28px rgba(90, 112, 80, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(90, 112, 80, 0.28)";
                  }}
                  className="font-serif-display text-[16px] text-white bg-sage w-full max-w-[360px] py-4 rounded-xl transition-all duration-200 cursor-pointer mt-3 hover:bg-sage-dark disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-sage"
                  style={{ boxShadow: "0 4px 20px rgba(90, 112, 80, 0.28)" }}
                >
                  {licenseSubmitting ? "Checking…" : "Open Your Guide"}
                </button>
                <p className="font-ui text-[12px] text-txt-faint text-center mt-3">
                  Check your email from Payhip for your license key
                </p>
                {licenseError && (
                  <p className="font-ui text-[14px] text-[#DC2626] mt-3 text-center">
                    That key doesn&apos;t look right. Please check and try again.
                  </p>
                )}
              </form>
            </div>
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
    </div>
  );
}
