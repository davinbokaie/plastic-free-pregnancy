"use client";

import { PAYHIP_CHECKOUT_URL } from "@/lib/checkout";

const ITEMS = [
  { title: "The Guide", desc: "50+ product categories. The best plastic-free products on the market. One best-in-class pick + curated alternatives." },
  { title: "The Shopping Cart Companion", desc: "Your in-store guide to plastic-free shopping, always in your pocket." },
  { title: "Founding Membership", desc: "First access to a private community of mothers making the same choices." },
];

export default function PaywallCTA() {
  return (
    <div className="bg-paywall rounded-2xl text-center px-5 py-8 sm:px-8 sm:py-11 mb-12 max-w-guide mx-auto">
      <h2 className="font-serif-display text-[22px] sm:text-[24px] text-txt-primary tracking-tight leading-[1.25] mb-7">
        <span className="block sm:hidden">The Plastic-Free Pregnancy Guide</span>
        <span className="hidden sm:block">
          The Plastic-Free Pregnancy Guide —
          <br />
          and everything that comes with it.
        </span>
      </h2>

      <div className="flex flex-col gap-[18px] max-w-[440px] mx-auto mb-7 text-left">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="text-sage-dark text-[16px] mt-0.5 flex-shrink-0">✓</span>
            <div>
              <p className="text-[16px] font-bold text-txt-primary mb-0.5">{item.title}</p>
              <p className="text-[15px] text-[#3D3D38] leading-[1.5]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mb-[18px]">
        <span className="text-[20px] font-bold text-txt-primary">$29</span>
        <span className="text-[15px] text-txt-muted ml-2">one-time purchase</span>
      </p>

      <button
        type="button"
        onClick={() => {
          window.location.href = PAYHIP_CHECKOUT_URL;
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.boxShadow = "0 6px 28px rgba(61, 53, 48, 0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(61, 53, 48, 0.2)";
        }}
        className="font-serif-display text-[18px] text-white bg-dark w-full max-w-none sm:max-w-[340px] mx-auto py-4 rounded-xl transition-all duration-200 cursor-pointer"
        style={{ boxShadow: "0 4px 20px rgba(61, 53, 48, 0.2)" }}
      >
        Unlock Everything
      </button>

      <p className="text-[13px] text-sage mt-3">Free updates forever.</p>
    </div>
  );
}
