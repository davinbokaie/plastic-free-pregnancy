# SEO / GEO / AEO Technical Audit — plasticfreepregnancy.com

**Audit date:** 2026-07-22
**Scope:** Read-only. No application files were modified. Build was run (`next build`) but nothing was deployed.
**Stack confirmed:** Next.js 14.2.35 (App Router), React 18, TypeScript, Tailwind 3.4, deployed on Vercel. App lives under `src/`, not `app/`.

---

## 1. Ground truth — what actually exists

### 1.1 Route tree (everything under `src/app/`)

| Route | File | `"use client"`? | `generateStaticParams`? | Build strategy | Metadata |
|---|---|---|---|---|---|
| `/` | `src/app/page.tsx` | **Yes** | — | ○ Static (prerendered) | inherits root only |
| `/about` | `src/app/about/page.tsx` | No | — | ○ Static | title only |
| `/bpa-free` | `src/app/bpa-free/page.tsx` | No | — | ○ Static | title + desc |
| `/companion` | `src/app/companion/page.tsx` | **Yes** | — | ○ Static (shell) | title (via layout) |
| `/contact` | `src/app/contact/page.tsx` | No | — | ○ Static | title only |
| `/disclosure` | `src/app/disclosure/page.tsx` | No | — | ○ Static | title only |
| `/faq` | `src/app/faq/page.tsx` | No | — | ○ Static | title only |
| `/microplastics-101` | `src/app/microplastics-101/page.tsx` | No | — | ○ Static | title + desc |
| `/privacy` | `src/app/privacy/page.tsx` | No (reads HTML at build) | — | ○ Static | title only |
| `/tap-water` | `src/app/tap-water/page.tsx` | No | — | ○ Static | title + desc |
| `/terms` | `src/app/terms/page.tsx` | No | — | ○ Static | title only |
| `/api/validate-license` | `src/app/api/validate-license/route.ts` | — | — | ƒ Dynamic (server) | — |

**Rendering evidence:** `next build` output classifies every page route as `○ (Static) prerendered as static content`. The only `ƒ (Dynamic)` entry is the license API. There is **no ISR** anywhere (no `export const revalidate`), **no SSR-on-demand** page (no `export const dynamic = "force-dynamic"`), and **no data fetching** in any page — all content is imported from local TS modules at build time.

**Files that do NOT exist** (confirmed by search):
- `sitemap.ts` / `sitemap.xml` — **none**
- `robots.ts` / `robots.txt` — **none**
- `opengraph-image.*` — **none**
- `not-found.tsx` — **none** (Next.js default 404 is served)
- `middleware.ts` — **none**
- `layout.tsx` exists only at root (`src/app/layout.tsx`) and a pass-through at `src/app/companion/layout.tsx`

**Routes from the brief's checklist that DO NOT exist:** `/where-they-go` (not a route, not in `articles.ts` — the site has **3** articles, not 4), and `/guide` / `/guide/*` (no such route or dynamic segment exists anywhere).

### 1.2 Where the product data lives

`src/data/phases.ts` — a single typed TS array `PHASES: Phase[]`, 442 lines, shape defined in `src/data/types.ts`:

```
Phase → { id, number, title, subtitle, timeline, accent…, categoryCount, description, sections[] }
  Section → { name, categories[] }
    Category → { name, why, topPick{name,price,oneLiner,url}, alternatives[]{label,name,price,note,url} }
```

**Verified counts from the data file:**
- **6 phases**, `categoryCount` = 9 / 14 / 5 / 8 / 11 / 5 = **52 categories** (52 `topPick` objects).
- **54 alternatives** + 52 top picks = **106 products total** (not 108 — see §Finding D1).
- **79** `amzn.to` links, **27** direct-merchant links (Quince, Himalayan Chef, Naturepedic, savvyrest, Walmart, Target, Home Depot, etc.).
- Phase 1 = 9 categories, the intended free tier.

Supporting data: `src/data/articles.ts` (3 articles), `src/data/ticker.ts` (15 promo cards). No CMS, no Supabase, no JSON. All inline TS.

### 1.3 The license gate — what a crawler actually receives

**The gate is 100% client-side conditional rendering.** In `src/app/page.tsx`:

- `const [hasPaid, setHasPaid] = useState(false)` (line 14).
- A `useEffect` (lines 20–30) reads `localStorage.getItem("pfp_license")` **or** `?paid=true` — but effects run only in the browser, never during prerender.
- Line 68 `{!hasPaid && ( … )}` renders Ticker + PaywallCTA + license form.
- Line 128 `{hasPaid && ( … )}` renders the entire guide (`PHASES.map(PhaseTile)`).

Because the page is prerendered with `hasPaid = false`, **the static HTML contains zero category/product content**. The 52 categories exist only inside the JS bundle and are injected into the DOM client-side *after* a successful license check. A crawler — even one that executes JS — gets `hasPaid = false` (no localStorage, no `?paid=true`), so **it never sees a single product pick, including the 9 "free" Phase 1 categories.**

> ⚠️ The localStorage key is **`pfp_license`** (page.tsx:22,49), not `pfp_license_key` as stated in the brief.

**Precise answer to "what does an unauthenticated crawler receive for each gated route":** For `/` it receives the paywall shell only — Hero, the scrolling Ticker (15 product *names*, several of which don't match the actual guide picks — see D2), the `$29` PaywallCTA, the license-entry form, 3 article-card links, and the footer. There are **no separate gated routes** — the whole guide is one client-gated section of the homepage.

### 1.4 Config files

- `next.config.mjs`: **empty** (`const nextConfig = {}`). No `images`, `redirects`, `headers`, or `trailingSlash` config.
- `package.json`: only runtime deps are `react`, `react-dom`, `next`. No SEO/schema libraries.
- `robots.txt` / `sitemap.xml`: **absent** (see §2).

### 1.5 Confirmed live routes from the brief's list

`/` ✅ · `/about` ✅ · `/microplastics-101` ✅ · `/tap-water` ✅ · `/bpa-free` ✅ · `/faq` ✅ · `/contact` ✅ · `/privacy` ✅ · `/disclosure` ✅ · `/terms` ✅ · **`/where-they-go` ❌ does not exist.**

### 1.6 The provable crawlable-content number

**11 indexable URLs. Only 5 carry SEO-valuable unique content, and ZERO expose the product catalog.**

| Substantive content (5) | Legal/utility (5) | Shell-only (1) |
|---|---|---|
| `/microplastics-101` (full ~1,000-word article) | `/about` | `/` — paywall shell, **no picks** |
| `/tap-water` (full article) | `/contact` | |
| `/bpa-free` (full article) | `/disclosure` | |
| `/faq` (9 Q&As) | `/terms` | |
| `/companion` cover (client SPA — only the cover screen is in static HTML; the 8 category screens render after an `onStart` click and are **not** in the HTML) | `/privacy` | |

**52 categories / 106 products are not crawlable by anyone.** That is the single defining fact of this audit.

---

## 2. Findings by severity

### 🔴 CRITICAL

#### C1 — The entire product catalog is invisible to every crawler and LLM
**Where:** `src/app/page.tsx:68,128` (client `hasPaid` gate); data in `src/data/phases.ts`.
**What:** All 52 categories and 106 products render only when `hasPaid === true`, which is never true for a crawler. The static HTML for `/` contains no picks. The 9 categories the business considers "free and public" (Phase 1) are gated by the *exact same condition* as the paid 43 — **there is no code path that renders Phase 1 to a non-buyer.** "Phase 1 is free and public" is currently aspirational, not implemented.
**Why it matters:** This is the whole business surface. Google indexes nothing sellable; Perplexity/ChatGPT/Claude have nothing to cite when asked "best plastic-free baby bottle." The product data is the most valuable asset in the repo and it is 100% dark to search and answer engines.
**Proposed fix (do not implement):** Server-render Phase 1 as real static pages (see §3.1). For the paid 43, invert the gate from "omit from DOM" to "render into DOM, hide with CSS" only if you adopt Google's paywalled-content markup (see §3.2 / Finding C5) — otherwise leave paid picks out and expose partial-reveal pages (§3.2).

#### C2 — No `robots.txt` and no `sitemap.xml`
**Where:** absent — no `src/app/robots.ts`, `src/app/sitemap.ts`, or `public/robots.txt`.
**What:** Next serves no robots file, so crawling defaults to "allowed," but there is **no sitemap and no sitemap reference**, and **no AI-crawler policy at all**. Per the brief's checklist, every one of `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Applebot-Extended` is **unaddressed** (neither allowed nor blocked — no directive exists). For a site whose GEO/AEO goal is to be *cited by* LLMs, silently allowing them is arguably fine, but it should be a deliberate, documented choice, not an omission.
**Why it matters:** No sitemap slows discovery of the (few) indexable pages and gives you no lever when you add the Phase-1 pages in §3.1. No explicit AI policy means you can't later prove intent either way.
**Proposed fix:** Add `src/app/sitemap.ts` (dynamic, enumerating every static route + future `/guide/*` pages) and `src/app/robots.ts` returning rules + a `sitemap` pointer. Decide per-bot allow/block explicitly.

#### C3 — Zero structured data anywhere
**Where:** entire `src/` — no `application/ld+json`, no `schema.org` string, no JSON-LD.
**What:** No `Organization`, `WebSite`, `Article`, `FAQPage`, `BreadcrumbList`, `ItemList`, or `Product` markup exists.
**Why it matters:** This is the highest-leverage, lowest-risk area for both classic rich results and AEO. `FAQPage` and `Article` are ready to ship from existing content today. Absence here is the biggest quick win on the board. Detail in §4.

#### C4 — No canonical URLs, no `metadataBase`, no www/non-www control
**Where:** `src/app/layout.tsx` (root metadata has only `title` + `description`); `next.config.mjs` empty.
**What:** No `metadataBase`, no `alternates.canonical` on any route, no `trailingSlash` setting, no host redirect config. If both `www.` and apex resolve on Vercel, or if `?paid=true` variants get linked, they are indexable duplicates with no canonical to consolidate them. Note the homepage links to `/?paid=true` from the companion nav (`companion/page.tsx:188,203`) — that parameterized URL is a real duplicate-of-`/` risk with no canonical defense.
**Why it matters:** Duplicate/near-duplicate URLs dilute ranking signals and confuse LLM source attribution.
**Proposed fix:** Set `metadataBase: new URL("https://plasticfreepregnancy.com")` in root layout; add self-referencing `alternates.canonical` per route; pick a host in Vercel and 301 the other; treat `?paid=true` as non-canonical.

### 🟠 HIGH

#### H1 — No OpenGraph or Twitter tags, no OG image (traffic is mostly Instagram)
**Where:** root `src/app/layout.tsx` and every page — no `openGraph`, no `twitter`, no `opengraph-image`.
**What:** Nothing. When the link is shared from Instagram/DM/iMessage, there is no title/description/image card — the platform falls back to a bare URL or a scraped guess.
**Why it matters:** The brief states most traffic arrives from Instagram on mobile. Share-card quality directly drives click-through on exactly your primary channel. This is a conversion issue as much as an SEO one.
**Proposed fix:** Add `openGraph` + `twitter` blocks to root metadata (with a static `public/og.jpg` or a dynamic `opengraph-image.tsx`), and per-article overrides using the existing article images in `public/article-*.jpg`.

#### H2 — Affiliate links missing `rel="sponsored nofollow"`
**Where:** `src/components/CategoryCard.tsx:45–53` (top pick) and `:90–98` (alternatives). Both use `rel="noopener noreferrer"` + `target="_blank"`, **no `sponsored` or `nofollow`.** Confirmed: `sponsored`/`nofollow` appear **nowhere** in `src/`.
**What:** All 106 outbound monetized links (Amazon + direct merchants) pass link equity and lack the FTC/Google-recommended `sponsored` rel. (Mitigating note: these links are only in the DOM for paid users, so crawlers don't currently see them — but that changes the moment you expose picks per §3.)
**Why it matters:** Google's guidelines call for `rel="sponsored"` on affiliate links; omitting it risks manual action once the links become crawlable, and it's trivially correct to fix.
**Proposed fix:** `rel="sponsored nofollow noopener noreferrer"` on both `<a>` tags in `CategoryCard.tsx`. Apply before/as you expose any picks to crawlers.

#### H3 — FTC affiliate disclosure is not present where affiliate links are, for crawlers
**Where:** disclosure copy is in `page.tsx:130–133` (only rendered when `hasPaid`), `Footer.tsx:37–39`, and a full `/disclosure` page.
**What:** The footer disclosure ("As an Amazon Associate…") *does* appear site-wide and is in static HTML — that part is fine. But the near-link disclosure banner on the guide (`page.tsx:130`) renders only for paid users. Today no affiliate links are crawlable, so this is latent; when you expose Phase 1 picks, each such page must carry a visible disclosure above the links.
**Why it matters:** FTC requires clear, conspicuous disclosure proximate to affiliate links. The footer line is a reasonable baseline but weak; a per-page disclosure near the picks is safer.
**Proposed fix:** When building the §3.1 Phase-1 pages, render a disclosure line in the static markup near the first affiliate link.

#### H4 — Articles claim "Sources listed at the end" but no sources exist
**Where:** `src/components/ArticleLayout.tsx:54–59` renders the note "Sources are listed at the end of the article"; the article bodies (`microplastics-101`, `tap-water`, `bpa-free`) contain **no Sources section, no citation list, and no outbound reference links.**
**What:** The promised sources are absent from the codebase. This is both a trust/credibility gap and a direct blocker for the `citation` array requested in Step 4 — **there is no source data in the repo to build citations from.**
**Why it matters:** E-E-A-T and AEO both reward verifiable sourcing; LLMs preferentially cite content that itself cites primary research. The articles make strong medical claims (placental microplastics, birth-weight associations) with zero visible attribution.
**Proposed fix:** This bumps into the "no new content" constraint. Adding a Sources list is arguably *sourcing existing claims*, not new content — recommend treating it as in-scope. If truly out of scope, remove the misleading "sources are listed" note. Either way, `Article.citation` cannot be populated until sources exist.

#### H5 — Fonts loaded render-blocking, not via `next/font`
**Where:** `src/app/layout.tsx:18–21` uses `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` in `<head>`. `src/lib/fonts.ts` is a dead stub. Worse: `src/app/companion/page.tsx:169,374` load fonts a **second time** via `@import url(fonts.googleapis…)` inside inline `<style>` — `@import` is the most render-blocking option and duplicates the root link.
**What:** External stylesheet in `<head>` blocks render; no `preconnect` to `fonts.gstatic.com`; no self-hosting; no `font-display` control beyond the URL's `&display=swap`. `next/font` (which self-hosts, inlines, and eliminates the extra round-trip) is not used anywhere.
**Why it matters:** On mobile from Instagram (your main channel), render-blocking font CSS delays first paint and risks FOIT/CLS. This is a direct LCP hit.
**Proposed fix:** Migrate to `next/font/google` for DM Serif Display, Source Serif 4, Nunito; delete the `<link>` and both companion `@import`s; remove the `fonts.ts` stub. (Note: actual fonts are **DM Serif Display / Source Serif 4 / Nunito** — there is no "DM Sans" in the codebase despite the brief mentioning it.)

### 🟡 MEDIUM

#### M1 — Thin/missing metadata on most routes
**Where:** `/about`, `/contact`, `/disclosure`, `/terms`, `/faq`, `/privacy`, `/companion` have a `title` but **no `description`**. `/` has no page-specific metadata beyond the generic root title.
**What:** Missing descriptions → Google writes its own snippet; generic homepage title ("Plastic-Free Pregnancy | The Guide") isn't optimized for the commercial queries you want.
**Proposed fix:** Add unique `description` to each; give `/` a keyword-appropriate title/description (it currently inherits the root default, which is fine but unoptimized).

#### M2 — Homepage `<h1>` is brand-emotional, not query-aligned
**Where:** `src/components/Hero.tsx:4` → "Every Product Your Baby Needs. Plastic-Free."
**What:** One clean `<h1>` (good — heading hierarchy is correct), but it targets no search query. Because the picks aren't crawlable, the homepage's only ranking signal *is* this h1 + subhead.
**Proposed fix:** Consider a subhead/copy pass toward "plastic-free / microplastic-free baby products" phrasing. (Copy tweak, not new content.)

#### M3 — `/companion` is publicly crawlable but is a JS-only SPA
**Where:** `src/app/companion/page.tsx` — client component, `useState("cover")`, no gate.
**What:** Ungated and indexable, but only the cover screen is in static HTML; the 8 category "label intelligence" screens render after a click. Good material (avoid/look-for lists) is invisible to crawlers, and the page has no unique description.
**Proposed fix:** If this content is meant to be public, render the 8 categories as static content (or a real sub-route). If it's a paid perk, consider gating it — right now it's neither indexed usefully nor protected.

#### M4 — No `BreadcrumbList` and no URL hierarchy
**Where:** navigation is anchor/accordion-based (`PhaseTile` toggles); there are no per-phase or per-category URLs.
**What:** Nothing to build breadcrumbs from today. Covered as opportunity in §3.5.

#### M5 — Default 404 page
**Where:** no `not-found.tsx`.
**What:** Next's unstyled default 404. Minor UX/brand issue; add a branded `not-found.tsx` with links back to articles/guide.

### 🟢 LOW / fine

- **Heading hierarchy on articles is correct** — real `<h1>` (ArticleLayout:45) + real `<h2>`s in article bodies; `.article-content h2/p` styling in `globals.css:45` maps real tags, it does **not** style `<div>`s as headings. The concern raised in the brief about markdown-rendered-as-`<p>` does **not** materialize — checked all 3 articles. ✅
- **Privacy HTML** has proper `<h1>`/`<h2>`/`<h3>` structure. ✅
- **FAQ** uses semantic `<details>/<summary>`. ✅
- **Images** all use `next/image` with `alt` text (Nav logo, article cards, ArticleLayout logo). No missing `alt` found. ✅
- **`lang="en"`** set on `<html>`. ✅
- **GA** loaded correctly via `next/script` `afterInteractive`. ✅
- **Bundle sizes are healthy** — homepage 17.9 kB / 119 kB First Load; all other pages ~101 kB First Load; shared 87.3 kB. Nothing oversized. Performance problems here are render-blocking fonts (H5) and missing content, not bundle weight.
- **Stray file:** `shopping-cart-companion.jsx` at repo root is not imported anywhere in `src/` — dead file, harmless, worth deleting for hygiene.

---

## 3. Indexable surface expansion assessment (the strategic core)

### 3.1 — Individual URLs for the 9 free Phase 1 categories · ✅ FEASIBLE, do this first
**Feasible:** Yes, cleanly.
**What must change:** Add a dynamic route `src/app/guide/[category]/page.tsx` with `generateStaticParams()` returning the 9 Phase-1 category slugs. The data already supports this — `phases.ts` has everything per category (`name`, `why`, `topPick`, `alternatives`). You need to (a) add a stable `slug` to each `Category` in `types.ts`/`phases.ts` (or derive it from `name`), (b) render the full category as static content, (c) add `Product` + `BreadcrumbList` JSON-LD, (d) add `rel="sponsored nofollow"` (H2) and a proximate disclosure (H3).
**Effort:** Medium — ~1 new route file + a slug field + JSON-LD. No new prose; it reuses existing `why`/`oneLiner` text.
**Upside:** High and direct. Nine statically-rendered pages each targeting a concrete commercial query ("plastic-free water filter pregnancy," "non-toxic cutting board," "PFAS-free cookware"). This is the largest untapped indexable surface and it's the *free* tier, so no paywall tension. These become the pages LLMs cite.
**Caveat:** Requires the §C1 realization that Phase 1 is currently NOT rendered to non-buyers at all — these pages are net-new surface, not a re-slice of something already public.

### 3.2 — Partial-reveal URLs for the 43 paywalled categories · ✅ FEASIBLE, no cloaking risk *if done honestly*
**Feasible:** Yes.
**What must change:** A static page per paid category rendering `name` + `why` (the "why it matters" text) + the exposure reasoning, with `topPick.name/price/url` and alternatives **genuinely omitted from the HTML** (not hidden — omitted) behind a "Unlock the pick" CTA. Pair with `isAccessibleForFree: false` markup on the gated `Product` region (see §4).
**Cloaking risk:** **None, provided the crawler and the user see the same thing.** Cloaking is serving different content to Googlebot vs users. If both a logged-out human and Googlebot see "category + why + locked pick," that's the sanctioned "paywalled/preview" pattern, not cloaking. The rule is symmetry: never render the pick into Googlebot's HTML while hiding it from humans, or vice-versa.
**Effort:** Medium — same route machinery as §3.1, different template (reveal vs. gate).
**Upside:** High. 43 more indexable URLs, each ranking on the category term and its "why," funneling to the $29 unlock. Turns the paywall from an SEO dead-weight into 43 crawlable funnel entrances. Respects the "paywall stays" constraint fully.

### 3.3 — Static server-rendered shells for paywalled phase pages · ✅ FEASIBLE (subsumed by 3.2)
**Feasible:** Yes. A crawler getting real HTML for a paid phase is exactly §3.2 done at phase granularity. Recommend per-category (3.2) over per-phase — more targeted URLs, better query coverage.
**Effort:** Low incremental once 3.2 exists.
**Upside:** Medium; mostly redundant with 3.2.

### 3.4 — Internal linking · ⚠️ CURRENTLY WEAK, easy wins
**Current graph (mapped from the code):**
- `Footer` (site-wide) → all 3 articles + about/faq/contact + privacy/terms/disclosure. This is the only place articles are linked. ✅
- `ArticlesSection` (on `/` and after every article via… no — only on `/`) → the 3 articles. ✅
- `ArticleLayout` nav → `/` ("Back to guide" / "Get the Guide"). ✅
- **Articles → each other: ZERO.** `microplastics-101`, `tap-water`, `bpa-free` do not link to one another despite being directly topically adjacent (the microplastics article literally discusses tap water and cutting boards; the tap-water article discusses RO filters you sell; bpa-free discusses bottles you sell).
- **Articles → guide categories: ZERO contextual links.** `tap-water` names reverse-osmosis systems but never links to the Water Filtration pick. `bpa-free` recommends glass/steel bottles but never links to the Baby Bottles category. These are the highest-intent internal links on the site and they're all missing.
- **Guide categories → articles: ZERO.** The Water Filtration card doesn't link to the tap-water article.
**Effort:** Low (add contextual `<Link>`s in article bodies and, once §3.1/3.2 exist, cross-link category ↔ article). No new content.
**Upside:** High for both SEO (link equity flowing to money pages) and AEO (LLMs follow topical clusters). This is the cheapest high-value work after JSON-LD.

### 3.5 — Phase/category hierarchy → `BreadcrumbList` + real URLs · ✅ FEASIBLE
**Feasible:** Yes, and it falls out of §3.1/3.2 for free. Once categories have URLs (`/guide/[category]`) and phases have a landing concept, you get a genuine `Home → Phase → Category` hierarchy to express as `BreadcrumbList` JSON-LD, replacing today's accordion anchor-scroll (which produces no crawlable hierarchy at all).
**Effort:** Low once routes exist.
**Upside:** Medium — breadcrumb rich results + clearer site structure for crawlers and LLMs.

**Recommended sequence:** JSON-LD for existing pages (§4) → §3.1 nine free pages → internal linking (§3.4) → §3.2 partial-reveal 43 → breadcrumbs (§3.5).

---

## 4. Structured data — detailed assessment (Step 4)

**Current state: nothing exists.** Below, what's ready now vs. blocked.

| Schema | Needed on | Ready to ship? | Blocker |
|---|---|---|---|
| `Organization` | site-wide (root layout) | ✅ Yes | Have name, url, `public/logo.png`. `sameAs` needs the Instagram URL (not in repo — see Open Questions). |
| `WebSite` + `SearchAction` | site-wide | ⚠️ Partial | No internal search exists, so **omit `SearchAction`**; ship bare `WebSite`. |
| `Article` | 3 article pages | ⚠️ Partial | Body + headline ready. **`datePublished`/`dateModified` do not exist in the repo** — no dates on articles. **`citation` array is impossible today — no Sources sections exist** (Finding H4). Ship `Article` with author=Organization, but dates and citations need source data first. |
| `FAQPage` | `/faq` | ✅ **Yes, zero blockers** | 9 Q&A pairs sit in `FAQS` array (`faq/page.tsx:36`). Highest-ROI, ship immediately. |
| `BreadcrumbList` | site-wide | ❌ Blocked | Requires the URL hierarchy from §3.1/3.5. Nothing to build from today. |
| `ItemList` + `Product` | guide categories | ❌ Blocked | Requires §3.1/3.2 category pages to exist first. Data (`name/price/url`) is ready in `phases.ts`; just no pages to attach it to. Note: `price` values are strings like `"$429"`, `"$12.70–$17.78"`, `"$30+"` — these need parsing/normalization into numeric `offers.price` + `priceCurrency`, and ranges/`+` can't be a single valid `Offer`. |

### 4.1 — Paywalled-content structured data (the most important question)

**Google's supported pattern:** For subscription/paywalled content, Google supports marking a `CreativeWork` (e.g. `Article`, `NewsArticle`, or `WebPage`) with `"isAccessibleForFree": false` plus a `hasPart` array where each gated region is:
```json
{
  "@type": "WebPageElement",
  "isAccessibleForFree": false,
  "cssSelector": ".paywalled-pick"
}
```
The `cssSelector` must point to a DOM element that actually **contains the gated content in the served HTML**. This is Google's "flexible sampling / paywalled content" mechanism: it lets Googlebot read and index content that is visually gated from users, *without* it being treated as cloaking — precisely because you've declared the gate.

**Can it be implemented given the current gate? No — not without a structural inversion.** Today's gate (Finding C1) **removes** the gated content from the DOM entirely (`{hasPaid && …}` never renders for a crawler). Google's pattern requires the opposite: the gated content **must be present in the HTML**, wrapped in an element matching `cssSelector`, and hidden from *users* by CSS/JS while remaining in the source. So to use this markup you would have to:

1. Server-render the picks into static HTML (they currently aren't rendered server-side at all).
2. Wrap each gated pick in a stable-class element (`.paywalled-pick`) and hide it from non-buyers via CSS, revealing it client-side on valid license — the inverse of today's "conditionally mount" approach.
3. Emit the `CreativeWork` + `hasPart`/`cssSelector` JSON-LD.

**The core tension you must decide:** Google's paywalled-content markup requires the actual pick — product name, price, buy link — to be **in the page source**, readable by anyone who "View Source" or disables JS. That is by design: Google will not index what it cannot see, and hiding-from-Google-only is cloaking. So the honest paywalled-markup path **effectively publishes your paid picks in HTML**, defeating the commercial gate for any technical user. 

**Recommendation:** Do **not** apply `isAccessibleForFree:false` to the *paid picks themselves* — the constraint "the paywall stays" is incompatible with putting those picks in crawlable HTML. Instead use the **partial-reveal** model (§3.2): render `name` + `why` + exposure reasoning as genuinely free, indexable content, and **omit** the pick/price/link from HTML entirely (not hide — omit). You then mark the *page* `isAccessibleForFree: false` with a `hasPart` `cssSelector` pointing at the locked-CTA stub, honestly signalling "there is more behind a purchase here" without exposing the pick. This gets you the paywalled-content SERP treatment, keeps the picks truly gated, and carries zero cloaking risk because crawler and logged-out user see identical HTML. This is the only path that satisfies *both* "paywall stays" and "be indexable."

---

## 5. Data consistency (Step 8)

**Verified truth from the data:** **52 categories, 106 products** (52 top picks + 54 alternatives), across 6 phases (9/14/5/8/11/5). The Shopping Cart Companion covers **8** label categories.

**Every count claim found in code:**

| Location | Value shown | Correct? |
|---|---|---|
| `src/app/layout.tsx:7` (root meta desc) | "**50+** researched plastic-free product picks" | Understated but defensible (52) |
| `src/components/PaywallCTA.tsx:6` | "**50+** product categories" | OK (52) |
| `src/app/faq/page.tsx:60` | "full guide with **50+** product categories across **6** phases" | OK |
| `src/components/PhaseTile.tsx:46` | `{phase.categoryCount} picks` | ✅ dynamic, accurate |
| `phases.ts` `categoryCount` fields | 9/14/5/8/11/5 = 52 | ✅ matches data |
| `src/app/companion/page.tsx:311` | "Label intelligence for **8** essential product categories" | ✅ matches 8 |
| `src/app/faq/page.tsx:55` | Phase 1 = "water filtration, cookware, food storage, and clothing" | ✅ consistent with phases.ts |

**Notes:**
- The brief's expected discrepancies — "paywall says 45 picks," "brief says 48," "108 products" — **are not what the live code says.** Current code is internally consistent at "**50+**" everywhere, and the data holds **52 / 106**. There is **no "45 picks" string** and **no "48" count** in the source today (the `45`/`48` my initial scan flagged were false positives: CSS values like `max-w-[480px]` and `text-[20px]`). So the copy discrepancy appears already resolved to "50+"; the remaining gap is only **106 actual products vs. the "108" claimed in the external product inventory** — likely 2 products were dropped from `phases.ts` without updating the inventory doc.
- **Ticker mismatch (D2):** `src/data/ticker.ts` — the public-facing ticker (the *only* product names a crawler sees on `/`) advertises picks that **don't match the guide**: ticker says "AquaTru Countertop RO" for Water Filtration but the guide's pick is "Waterdrop 8 Stage Tankless RO" (`phases.ts:13`); ticker says "KATU Organic Latex" crib mattress but the guide's pick is "Avocado Crib Mattress" (`phases.ts:94`). Since the ticker is the sole product content in the crawlable homepage, these stale names are exactly what an LLM would ingest and misattribute. Reconcile `ticker.ts` to `phases.ts`.
- **D1:** total products = **106**, not 108. Update the external inventory or re-add the two missing products.

**Why this matters:** "50+" is fine for humans but weak for AEO — LLMs prefer exact figures ("52 categories, 106 products across 6 phases"). Once JSON-LD `ItemList` ships, the count becomes machine-stated and must match the copy and the ticker exactly, or you get contradictory signals about your own product.

---

## 6. Open questions (not answerable from code)

1. **Index coverage / Search Console** — how many of the 11 URLs are actually indexed? Is `?paid=true` indexed as a duplicate of `/`? Not determinable from the repo.
2. **www vs apex on Vercel** — does `www.plasticfreepregnancy.com` resolve, and is there a redirect? `next.config.mjs` is empty and Vercel domain config isn't in the repo. Needs the Vercel dashboard.
3. **Live Core Web Vitals** — build shows healthy bundles, but real mobile LCP/CLS from the render-blocking fonts (H5) needs field data (CrUX/PageSpeed). Not measurable from source.
4. **Instagram / social URLs** — needed for `Organization.sameAs`. Not present anywhere in the repo.
5. **Article dates** — `datePublished`/`dateModified` for the 3 articles exist nowhere in code or git-tracked metadata; you'll need to supply them for `Article` JSON-LD.
6. **Amazon Associates tag consistency** — links are `amzn.to` shortlinks (`phases.ts`), so the Associate tag is baked into the redirect target and **not visible in the source**. Whether all 79 shortlinks carry the same tag cannot be verified from the code — needs checking in the Amazon Associates SiteStripe/dashboard.
7. **Sources for article claims** — do source lists exist somewhere off-repo (a draft doc)? Required before `Article.citation` (H4) is possible.
8. **Is `/companion` meant to be public or paid?** It's currently ungated but effectively hidden (JS-only). Intent unclear from code.

---

*End of audit. No application files were modified. Findings are ordered by leverage; the single highest-impact action is exposing the 9 free Phase-1 categories as static `/guide/[category]` pages (§3.1) with `FAQPage` + `Article` JSON-LD (§4) shipped in parallel.*
