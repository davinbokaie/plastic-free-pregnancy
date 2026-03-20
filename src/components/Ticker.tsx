"use client";

import { TICKER_CARDS } from "@/data/ticker";

export default function Ticker() {
  const doubled = [...TICKER_CARDS, ...TICKER_CARDS];

  return (
    <div className="ticker-container overflow-hidden mb-10">
      <div className="ticker-track flex gap-3 w-max">
        {doubled.map((card, i) => (
          <div
            key={i}
            className="w-[170px] sm:w-[190px] flex-shrink-0 rounded-xl overflow-hidden border border-border-light"
            style={{ backgroundColor: "#F5F1EB" }}
          >
            {/* Phase header */}
            <div
              className="px-3 py-1.5"
              style={{ backgroundColor: card.accent }}
            >
              <span className="text-[9px] font-bold tracking-wider uppercase text-white/80">
                {card.phase}
              </span>
            </div>
            {/* Card body */}
            <div className="px-3 py-3">
              <p className="text-[11px] font-bold text-txt-muted tracking-wide uppercase mb-1">
                {card.category}
              </p>
              <p className="text-[13px] font-semibold text-txt-primary leading-tight mb-2">
                {card.product}
              </p>
              <span className="text-[12px] font-bold text-txt-muted tracking-wide">
                {card.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
