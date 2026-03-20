import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-guide mx-auto px-5 pt-8 pb-10 border-t border-border-light">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-6">
        {/* Brand */}
        <div>
          <p className="font-serif-display text-[14px] text-sage mb-1">
            Plastic-Free Pregnancy
          </p>
          <p className="font-body text-[12px] text-txt-faint leading-[1.5]">
            Every recommendation independently<br />
            researched and verified.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-txt-muted mb-1">Learn</span>
            <Link href="/microplastics-101" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Microplastics 101</Link>
            <Link href="/tap-water" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Tap Water</Link>
            <Link href="/bpa-free" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Beyond BPA-Free</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-txt-muted mb-1">Site</span>
            <Link href="/about" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">About</Link>
            <Link href="/faq" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">FAQ</Link>
            <Link href="/contact" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-txt-muted mb-1">Legal</span>
            <Link href="/privacy" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Privacy</Link>
            <Link href="/terms" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Terms</Link>
            <Link href="/disclosure" className="text-[12px] text-txt-faint hover:text-txt-secondary transition-colors no-underline">Disclosure</Link>
          </div>
        </div>
      </div>

      <p className="font-body text-[11px] text-txt-faint leading-[1.6]">
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </footer>
  );
}
