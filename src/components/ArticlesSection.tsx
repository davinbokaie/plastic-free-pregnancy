import Link from "next/link";
import { ARTICLES } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section className="max-w-guide mx-auto px-5 py-10">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border-light" />
        <h2 className="font-serif-display text-[18px] sm:text-[20px] text-txt-primary text-center whitespace-nowrap">
          Want to learn more first?
        </h2>
        <div className="flex-1 h-px bg-border-light" />
      </div>

      {/* Article cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block bg-card rounded-xl border border-border-light overflow-hidden transition-shadow duration-200 hover:shadow-md group"
          >
            {/* Placeholder image */}
            <div className="aspect-square bg-card-inner flex items-center justify-center">
              <span className="text-[40px] opacity-30">📄</span>
            </div>
            <div className="p-4">
              <h3 className="font-serif-display text-[15px] text-txt-primary mb-1 group-hover:text-sage transition-colors duration-200">
                {article.title}
              </h3>
              <p className="font-body text-[13px] text-txt-muted leading-[1.5]">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
