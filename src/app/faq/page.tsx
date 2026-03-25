import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "FAQ | Plastic-Free Pregnancy",
};

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-[#E8DFD4] py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="font-ui text-[15px] font-semibold text-[#3D3530]">{question}</span>
        <span
          aria-hidden="true"
          className="font-ui text-[20px] leading-none text-[#3D3530] transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="grid grid-rows-[0fr] transition-all duration-300 group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="font-body mt-3 text-[14.5px] leading-[1.65] text-[#6B6560] opacity-0 transition-opacity duration-300 group-open:opacity-100">
            {answer}
          </p>
        </div>
      </div>
    </details>
  );
}

const FAQS: FAQItemProps[] = [
  {
    question: "How is this different from a blog post about baby products?",
    answer:
      "Blog posts give you ten options and let you figure it out. We give you one researched pick per category — the specific product, why it's the best, and a link to buy it. Plus vetted alternatives if our pick doesn't fit your budget or preferences. Every recommendation is informed by an understanding of material science, exposure pathways, and how microplastics interact with the products your family uses daily — not just what's popular or well-marketed.",
  },
  {
    question: "What if I've already bought some baby products?",
    answer:
      "The guide is organized by phase, so you can start wherever you are. Already past pregnancy? Skip to Phase 2. The changes that matter most are the ones with the highest daily exposure — and many of those (bottles, pacifiers, food storage) can be changed anytime.",
  },
  {
    question: "Will the guide be updated?",
    answer:
      "Yes. When we find a better product or a pick goes out of stock, we update the guide. We're also actively researching new product categories to add — as the science evolves and better options come to market, the guide grows with it. You get access to every future update and addition at no extra cost.",
  },
  {
    question: "Is this just about baby products?",
    answer:
      "No. Phase 1 covers products for you during pregnancy — water filtration, cookware, food storage, and clothing. Reducing your own exposure during pregnancy is just as important as what touches baby after birth.",
  },
  {
    question: "What's included with my purchase?",
    answer:
      "The full guide with 50+ product categories across 6 phases, the Shopping Cart Companion (your in-store reference for what to look for and what to avoid), and founding membership with first access to our community of mothers making the same choices.",
  },
  {
    question: "How do I access the guide after purchasing?",
    answer:
      "After you buy, you'll receive a license key via email from Payhip and on the confirmation page. Paste that key into the 'Already purchased?' section on our site to unlock the full guide. Your access is saved so you won't need to enter it again.",
  },
  {
    question: "What if I lose my license key?",
    answer:
      "Check your email for the purchase confirmation from Payhip — your license key is in there. If you can't find it, contact us and we'll help you get back in.",
  },
  {
    question: "Do you earn commissions on the products you recommend?",
    answer:
      "Yes — we're an Amazon Associate and earn a small commission when you purchase through our links. But our recommendations are never influenced by affiliate relationships. Every product was researched and selected independently. If a product isn't on Amazon, we link directly to the brand with no commission.",
  },
  {
    question: "Can I share the guide with someone?",
    answer:
      "The guide is for individual use. If someone in your life wants access, we recommend they purchase their own. That said, the Shopping Cart Companion is designed to be useful when a partner or family member is doing the shopping for you.",
  },
];

export default function FAQPage() {
  return (
    <ArticleLayout title="FAQ" showSourcesNote={false}>
      {FAQS.map((item) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </ArticleLayout>
  );
}
