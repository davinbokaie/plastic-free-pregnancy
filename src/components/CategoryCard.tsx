"use client";

import { useState } from "react";
import { Category } from "@/data/types";

interface CategoryCardProps {
  category: Category;
  accent: string;
}

export default function CategoryCard({ category, accent }: CategoryCardProps) {
  const [showAlts, setShowAlts] = useState(false);
  const hasAlts = category.alternatives.length > 0;

  return (
    <div className="bg-transparent rounded-xl overflow-hidden">
      {/* Main card */}
      <div className="p-4 sm:p-5">
        <h4 className="font-serif-display text-[16px] text-txt-primary mb-2">
          {category.name}
        </h4>
        <p className="font-body text-[14px] leading-[1.55] mb-3 text-[#8B7E72]">
          {category.why}
        </p>

        {/* Top pick */}
        <div
          className="rounded-lg p-3.5 border border-border-faint"
          style={{ backgroundColor: "#F5F1EB", borderLeft: `3px solid ${accent}` }}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accent }}>
              Our pick
            </span>
            <span className="text-[13px] font-semibold text-txt-muted">
              {category.topPick.price}
            </span>
          </div>
          <p className="text-[15px] font-semibold text-txt-primary leading-tight mb-1.5">
            {category.topPick.name}
          </p>
          <p className="font-body text-[13.5px] text-txt-secondary leading-[1.5]">
            {category.topPick.oneLiner}
          </p>
          <a
            href={category.topPick.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2.5 text-[12px] font-semibold transition-colors duration-200"
            style={{ color: accent, borderBottom: `1px solid ${accent}40` }}
          >
            View product →
          </a>
        </div>

        {/* Alternatives toggle */}
        {hasAlts && (
          <>
            <button
              onClick={() => setShowAlts(!showAlts)}
              className="mt-2 flex items-center gap-2 w-full border border-border-light rounded-lg px-4 py-2.5 text-[13px] font-semibold text-txt-muted hover:text-txt-secondary transition-colors duration-200 cursor-pointer bg-transparent"
            >
              <span
                className="text-[11px] transition-transform duration-200"
                style={{ transform: showAlts ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                ▶
              </span>
              {showAlts
                ? "Hide alternatives"
                : `See ${category.alternatives.length} alternative${category.alternatives.length > 1 ? "s" : ""}`}
            </button>

            {showAlts && (
              <div className="phase-content mt-3 flex flex-row flex-wrap gap-2">
                {category.alternatives.map((alt, i) => (
                  <div
                    key={i}
                    className="flex-1 min-w-[200px] rounded-lg p-3 border border-border-faint"
                    style={{ backgroundColor: "#F5F1EB", borderLeft: `3px solid ${accent}` }}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-txt-primary leading-tight">
                          {alt.name}
                        </p>
                        <p className="font-body text-[12px] text-txt-muted mt-0.5 leading-snug">
                          {alt.note}
                        </p>
                        <a
                          href={alt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-1.5 text-[12px] font-semibold transition-colors duration-200"
                          style={{ color: accent, borderBottom: `1px solid ${accent}40` }}
                        >
                          View product →
                        </a>
                      </div>
                      <span className="text-[12px] font-semibold text-txt-muted whitespace-nowrap shrink-0">
                        {alt.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
