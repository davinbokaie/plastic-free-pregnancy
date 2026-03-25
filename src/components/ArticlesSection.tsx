import Link from "next/link";
import Image from "next/image";
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

      {/* Article cards — horizontal scroll on mobile, 3-col grid on sm+ */}
      <div
        className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none [-webkit-overflow-scrolling:touch] scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        {ARTICLES.map((article) => {
          const imageSrc =
            article.slug === "microplastics-101"
              ? "/article-microplastics.jpg"
              : article.slug === "bpa-free"
                ? "/article-bpa-free.jpg"
                : article.slug === "tap-water"
                  ? "/article-tap-water.jpg"
                  : null;

          return (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="block min-w-[220px] max-w-[240px] flex-shrink-0 snap-center sm:min-w-0 sm:max-w-none sm:w-full sm:flex-shrink-0 sm:snap-none bg-card rounded-xl border border-border-light overflow-hidden transition-shadow duration-200 hover:shadow-md group"
          >
            {imageSrc ? (
              <div className="aspect-square overflow-hidden bg-card-inner">
                <Image
                  src={imageSrc}
                  alt={article.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square bg-card-inner flex items-center justify-center">
                <span className="text-[40px] opacity-30">📄</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="font-serif-display text-[15px] text-txt-primary mb-1 group-hover:text-sage transition-colors duration-200">
                {article.title}
              </h3>
              <p className="font-body text-[13px] text-txt-muted leading-[1.5]">
                {article.description}
              </p>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
