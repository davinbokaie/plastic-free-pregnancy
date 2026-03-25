"use client";

import Link from "next/link";
import { useState } from "react";

const COVER = {
  title: "The Plastic-Free\nShopping Cart\nCompanion",
  description: "Know what to avoid and what to look for on essential purchases.",
  brand: "Plastic-Free Pregnancy",
};

const CATEGORIES = [
  {
    id: "water",
    emoji: "💧",
    title: "Water & Drinks",
    avoid: [
      "Plastic bottle (#1 PET, #7 plastic)",
      '"BPA-free" plastic',
      "Disposable cup or lid",
      "Tea bags (unless labeled paper or loose-leaf)",
    ],
    lookFor: [
      "Glass",
      "Stainless steel",
      "Paper tea bags",
      "Loose-leaf tea",
      "NSF-certified filter",
    ],
    why: "Plastics shed particles into drinks, especially with heat",
  },
  {
    id: "food",
    emoji: "🍳",
    title: "Food & Cooking",
    avoid: [
      '"Nonstick" / "Teflon" / "PTFE"',
      "Plastic cutting board",
      "Black plastic utensils",
      '"Microwave-safe plastic"',
    ],
    lookFor: [
      "Stainless steel",
      "Cast iron",
      "Glass",
      "Wood cutting board",
      "Food-grade silicone",
    ],
    why: "Heat and friction release microplastics into food",
  },
  {
    id: "clothing",
    emoji: "👗",
    title: "Clothing & Fabrics",
    avoid: ["Polyester", "Nylon", "Acrylic", "Fleece", "Spandex blend"],
    lookFor: [
      "100% cotton",
      "Organic cotton",
      "Wool",
      "Linen",
      "OEKO-TEX certified",
    ],
    why: "Synthetic fabrics shed microfibers you inhale and ingest",
  },
  {
    id: "sleep",
    emoji: "🛏️",
    title: "Sleep & Bedding",
    avoid: [
      "Polyester fill",
      "Memory foam / polyurethane foam",
      '"Vinyl" / "PVC"',
      '"Stain-resistant" / "water-repellent"',
    ],
    lookFor: [
      "Organic cotton",
      "Wool",
      "Natural latex",
      "GOTS certified",
      "GREENGUARD Gold",
    ],
    why: "Long exposure increases inhalation of shed particles",
  },
  {
    id: "feeding",
    emoji: "🍼",
    title: "Baby Feeding",
    subtitle: "bottles, formula, solids",
    avoid: [
      "Polypropylene (PP)",
      "Plastic bottle or liner",
      '"Microwave-safe plastic"',
      "Melamine",
    ],
    lookFor: [
      "Glass bottle",
      "Silicone nipple",
      "Stainless steel",
      "Glass storage",
      "Food-grade silicone",
    ],
    why: "Heat and shaking release microplastics into baby liquids",
  },
  {
    id: "skincare",
    emoji: "🧴",
    title: "Skincare & Body Care",
    avoid: [
      '"Polyethylene" / "PE"',
      '"Polypropylene" / "PP"',
      '"Acrylates copolymer"',
      '"Fragrance" / "Parfum"',
    ],
    lookFor: [
      "Fragrance-free",
      "Oil-based ingredients (olive oil, shea butter)",
      "Mineral-based",
      "COSMOS certified",
    ],
    why: "Some ingredients are plastics or form particles during use",
  },
  {
    id: "cleaning",
    emoji: "🧹",
    title: "Cleaning & Home",
    avoid: [
      "Microfiber cloth",
      '"Synthetic sponge" / "poly sponge"',
      "Polyester cleaning cloth",
    ],
    lookFor: [
      "100% cotton cloth",
      "Cellulose sponge",
      "Powder detergent",
      "HEPA filter",
    ],
    why: "Cleaning releases microfibers into air and water",
  },
  {
    id: "onthego",
    emoji: "🚗",
    title: "On the Go",
    subtitle: "stroller, car seat, carrier",
    avoid: [
      "Polyester fabric",
      "Polyurethane foam",
      '"PVC" / "vinyl"',
      '"Stain-resistant" or "water-resistant coating"',
    ],
    lookFor: ["Cotton fabric", "Wool", "PFAS-free*", "GREENGUARD Gold"],
    why: "Friction releases fibers babies inhale in enclosed spaces",
    footnote:
      "* PFAS-free is not always labeled — when in doubt, choose cotton or wool fabric.",
  },
];

function CoverPage({ onStart }: { onStart: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EDEBE6",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Nav — matches site exactly */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 28px",
          borderBottom: "1px solid #DDD9D3",
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Link
          href="/?paid=true"
          style={{
            fontSize: 18,
            fontWeight: 400,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: "#7B8F6B",
            letterSpacing: "normal",
            textTransform: "none",
            lineHeight: 1.2,
            textDecoration: "none",
          }}
        >
          Plastic-Free Pregnancy
        </Link>
        <Link
          href="/?paid=true"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#7B8F6B",
            textDecoration: "none",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          ← Back to Guide
        </Link>
      </nav>

      {/* Main content centered */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#7B8F6B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
            animation: "fadeUp 0.6s ease 0.1s both",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 36 }}>🛒</span>
        </div>

        {/* Title */}
        <h1
          style={{
            margin: "0 0 24px",
            fontSize: 42,
            fontWeight: 400,
            fontFamily: "'DM Serif Display', serif",
            color: "#1A1A1A",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            whiteSpace: "pre-line",
            animation: "fadeUp 0.6s ease 0.15s both",
            maxWidth: 400,
          }}
        >
          {COVER.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 3,
            backgroundColor: "#7B8F6B",
            margin: "0 auto 24px",
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        />

        {/* Description */}
        <p
          style={{
            margin: "0 0 44px",
            fontSize: 18,
            color: "#6B6560",
            fontFamily: "'Source Serif 4', Georgia, serif",
            lineHeight: 1.6,
            maxWidth: 360,
            animation: "fadeUp 0.6s ease 0.25s both",
          }}
        >
          {COVER.description}
        </p>

        {/* Category count pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 20px",
            backgroundColor: "#7B8F6B18",
            borderRadius: 100,
            marginBottom: 44,
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#7B8F6B",
              letterSpacing: "0.03em",
            }}
          >
            Label intelligence for 8 essential product categories
          </span>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          style={{
            padding: "16px 48px",
            backgroundColor: "#7B8F6B",
            color: "#FFF",
            border: "none",
            borderRadius: 14,
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            animation: "fadeUp 0.6s ease 0.35s both",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#6B8059")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#7B8F6B")
          }
        >
          Open →
        </button>
      </div>
    </div>
  );
}

function CategoryPage({
  category,
  index,
  total,
  onNext,
  onPrev,
  onHome,
}: {
  category: (typeof CATEGORIES)[number];
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}) {
  const isLast = index === total - 1;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EDEBE6",
        fontFamily: "'Nunito', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&display=swap');
      `}</style>
      {/* Header bar — matches site nav */}
      <div
        style={{
          backgroundColor: "#EDEBE6",
          borderBottom: "1px solid #DDD9D3",
          padding: "20px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Link
          href="/?paid=true"
          style={{
            background: "none",
            border: "none",
            fontSize: 18,
            fontWeight: 400,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: "#7B8F6B",
            cursor: "pointer",
            padding: 0,
            letterSpacing: "normal",
            textTransform: "none",
            lineHeight: 1.2,
            textDecoration: "none",
          }}
        >
          Plastic-Free Pregnancy
        </Link>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1A1A1A",
          }}
        >
          {index + 1} / {total}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, backgroundColor: "#E8E4DF", flexShrink: 0 }}>
        <div
          style={{
            height: "100%",
            width: `${((index + 1) / total) * 100}%`,
            backgroundColor: "#7B8F6B",
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "28px 28px 110px",
          maxWidth: 680,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Category header */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: category.subtitle ? 6 : 0,
            }}
          >
            <span style={{ fontSize: 40, lineHeight: 1, flexShrink: 0 }}>
              {category.emoji}
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: 32,
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {category.title}
            </h2>
          </div>
          {category.subtitle && (
            <p
              style={{
                margin: "6px 0 0 54px",
                fontSize: 14,
                color: "#9B9590",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              {category.subtitle}
            </p>
          )}
        </div>

        {/* Avoid card */}
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: 16,
            border: "1px solid #E8E4DF",
            borderLeft: "4px solid #DC2626",
            padding: "22px 24px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>❌</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#991B1B",
              }}
            >
              Avoid on the label
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {category.avoid.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#DC2626",
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 15,
                    color: "#1A1A1A",
                    lineHeight: 1.45,
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Look for card */}
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: 16,
            border: "1px solid #E8E4DF",
            borderLeft: "4px solid #7B8F6B",
            padding: "22px 24px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>✅</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#065F46",
              }}
            >
              Look for on the label
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {category.lookFor.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#7B8F6B",
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 15,
                    color: "#1A1A1A",
                    lineHeight: 1.45,
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why card */}
        <div
          style={{
            backgroundColor: "#FAFAF7",
            borderRadius: 14,
            border: "1px solid #F0EDE8",
            padding: "18px 22px",
            marginBottom: category.footnote ? 12 : 0,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: "#4A4540",
              fontFamily: "'Source Serif 4', Georgia, serif",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            {category.why}
          </p>
        </div>

        {/* Footnote — more visible */}
        {category.footnote && (
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              backgroundColor: "#FEF3C7",
              borderRadius: 10,
              border: "1px solid #FDE68A",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>⚠️</span>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#92400E",
                fontFamily: "'Source Serif 4', Georgia, serif",
                lineHeight: 1.55,
              }}
            >
              {category.footnote}
            </p>
          </div>
        )}
      </div>

      {/* Fixed bottom nav */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFF",
          borderTop: "1px solid #E8E4DF",
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 14,
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        <button
          onClick={index === 0 ? onHome : onPrev}
          style={{
            flex: 1,
            padding: "13px 0",
            backgroundColor: "#EDEBE6",
            color: "#6B6560",
            border: "1px solid #E8E4DF",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {index === 0 ? "← Home" : "← Previous"}
        </button>

        {isLast ? (
          <button
            onClick={onHome}
            style={{
              flex: 1,
              padding: "13px 0",
              backgroundColor: "#7B8F6B",
              color: "#FFF",
              border: "none",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#6B8059")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#7B8F6B")
            }
          >
            Done ✓
          </button>
        ) : (
          <button
            onClick={onNext}
            style={{
              flex: 1,
              padding: "13px 0",
              backgroundColor: "#7B8F6B",
              color: "#FFF",
              border: "none",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#6B8059")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#7B8F6B")
            }
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

export default function ShoppingCartCompanion() {
  const [page, setPage] = useState<"cover" | number>("cover"); // "cover" | number

  const currentIndex = typeof page === "number" ? page : 0;

  if (page === "cover") {
    return <CoverPage onStart={() => setPage(0)} />;
  }

  return (
    <CategoryPage
      category={CATEGORIES[currentIndex]}
      index={currentIndex}
      total={CATEGORIES.length}
      onNext={() => setPage(currentIndex + 1)}
      onPrev={() => setPage(currentIndex - 1)}
      onHome={() => setPage("cover")}
    />
  );
}
