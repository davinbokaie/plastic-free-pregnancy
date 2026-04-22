"use client";

import Image from "next/image";
import Link from "next/link";
import { PAYHIP_CHECKOUT_URL } from "@/lib/checkout";

interface NavProps {
  hasPaid: boolean;
}

export default function Nav({ hasPaid }: NavProps) {
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
          {hasPaid ? (
            <Link
              href="/companion"
              className="font-ui text-[12px] sm:text-[13px] font-semibold text-sage sm:text-white bg-white sm:bg-sage border border-border-light sm:border-transparent py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-lg transition-colors duration-200 hover:bg-white sm:hover:bg-sage-dark no-underline inline-flex items-center"
            >
              <span className="sm:hidden">Cart Companion</span>
              <span className="hidden sm:inline">Shopping Cart Companion</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                window.open(PAYHIP_CHECKOUT_URL, "_blank");
              }}
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
