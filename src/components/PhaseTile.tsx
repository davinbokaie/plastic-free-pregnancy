"use client";

import { useState } from "react";
import { Phase } from "@/data/types";
import CategoryCard from "./CategoryCard";

interface PhaseTileProps {
  phase: Phase;
  isOpen: boolean;
  onToggle: () => void;
}

export default function PhaseTile({ phase, isOpen, onToggle }: PhaseTileProps) {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (name: string) => {
    setCollapsedSections(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="mb-2">
      {/* Phase header button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: phase.accent,
          borderRadius: isOpen ? "14px 14px 0 0" : "14px",
        }}
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">
              Phase {phase.number}
            </span>
            <span className="text-[11px] text-white/45">· {phase.timeline}</span>
          </div>
          <h2 className="font-serif-display text-[20px] text-white tracking-tight">
            {phase.title}
          </h2>
          <p className="font-body text-[14px] text-white/70 italic mt-0.5">
            {phase.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-white/50 font-medium">
            {phase.categoryCount} picks
          </span>
          <span
            className="text-[18px] text-white/70 transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        </div>
      </button>

      {/* Phase content */}
      {isOpen && (
        <div
          className="phase-content rounded-b-2xl p-4 sm:p-5 border-r border-b border-border-light"
          style={{
            backgroundColor: "#F7F5F2",
            borderLeft: `3px solid ${phase.accent}`,
          }}
        >
          <p className="font-body text-[14.5px] text-txt-secondary leading-[1.6] max-w-[540px] mb-5">
            {phase.description}
          </p>

          {phase.sections.map((section, si) => (
            <div key={si} className={si < phase.sections.length - 1 ? "mb-6" : ""}>
              {/* Section header (skip if empty name) */}
              {section.name && (
                <button
                  onClick={() => toggleSection(`${phase.id}-${si}`)}
                  className="flex items-center gap-2.5 mb-3 w-full text-left cursor-pointer group"
                >
                  <h3
                    className="text-[12px] font-bold uppercase tracking-widest"
                    style={{ color: phase.accent }}
                  >
                    {section.name}
                  </h3>
                  <div className="flex-1 h-px bg-border-light" />
                  <span
                    className="text-[11px] text-txt-faint transition-transform duration-200"
                    style={{
                      transform: collapsedSections[`${phase.id}-${si}`] ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                  >
                    ▾
                  </span>
                </button>
              )}

              {/* Categories (collapsible per section) */}
              {!collapsedSections[`${phase.id}-${si}`] && (
                <div className="flex flex-col gap-2.5">
                  {section.categories.map((cat, ci) => (
                    <CategoryCard
                      key={ci}
                      category={cat}
                      accent={phase.accent}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
