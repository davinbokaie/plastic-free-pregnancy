import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

interface ArticleLayoutProps {
  title: string;
  children: React.ReactNode;
  showSourcesNote?: boolean;
}

export default function ArticleLayout({ title, children, showSourcesNote = true }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="nav-frosted sticky top-0 z-50 border-b border-border-light">
        <div className="max-w-guide mx-auto flex items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image src="/logo.png" alt="Plastic-Free Pregnancy" width={21} height={35} className="w-[21px] h-auto" />
            <span className="font-serif-display text-[18px] text-sage tracking-tight">
              Plastic-Free Pregnancy
            </span>
          </Link>
          <Link
            href="/"
            className="font-serif-display text-[14px] text-white bg-sage px-5 py-2 rounded-lg transition-all duration-200 hover:bg-sage-dark no-underline"
          >
            Get the Guide
          </Link>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-[600px] mx-auto px-5 py-12">
        <Link href="/" className="text-[13px] font-semibold text-sage no-underline hover:underline mb-6 inline-block">
          ← Back to guide
        </Link>
        <h1 className="font-serif-display text-[30px] sm:text-[36px] text-txt-primary tracking-tight leading-[1.15] mb-8">
          {title}
        </h1>
        <div className="article-content">
          {children}
        </div>

        {/* Sources note */}
        {showSourcesNote && (
          <div className="mt-12 pt-6 border-t border-border-light">
            <p className="font-body text-[13px] text-txt-faint leading-[1.6]">
              All claims in this article are sourced from peer-reviewed research, government agencies, and established scientific institutions. Sources are listed at the end of the article.
            </p>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
