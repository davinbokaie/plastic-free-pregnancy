"use client";

import Image from "next/image";

interface NavProps {
  hasPaid: boolean;
  onUnlock: () => void;
}

export default function Nav({ hasPaid, onUnlock }: NavProps) {
  return (
    <nav className="nav-frosted sticky top-0 z-50 border-b border-border-light">
      <div className="max-w-guide mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Plastic-Free Pregnancy" width={21} height={35} className="w-[21px] h-auto" />
          <span className="font-serif-display text-[18px] text-sage tracking-tight">
            Plastic-Free Pregnancy
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          {!hasPaid && (
            <button
              onClick={onUnlock}
              className="font-serif-display text-[14px] text-white bg-sage px-5 py-2 rounded-lg transition-all duration-200 hover:bg-sage-dark"
            >
              Get the Guide
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
