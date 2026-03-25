import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Plastic-Free Pregnancy",
};

export default function TermsPage() {
  return (
    <ArticleLayout title="Terms of Service" showSourcesNote={false}>
      <p>Last updated: March 2026</p>

      <p>
        By purchasing or accessing the Plastic-Free Pregnancy guide, you agree to these terms.
      </p>

      <h2>What you&apos;re buying</h2>
      <p>
        A one-time purchase grants you individual, non-transferable access to the Plastic-Free Pregnancy guide
        and the Shopping Cart Companion. Your access is delivered via a license key and is intended for personal
        use only.
      </p>

      <h2>Not medical advice</h2>
      <p>
        The content on this site is for informational purposes only and is not intended as medical advice,
        diagnosis, or treatment. Product recommendations are based on material composition and publicly
        available research on microplastics. They are not a substitute for professional medical guidance.
        Always consult your healthcare provider with questions about your health, your pregnancy, or your
        baby&apos;s health. Plastic-Free Pregnancy makes no warranties or representations regarding the health
        outcomes of any product recommended on this site.
      </p>

      <h2>Product recommendations</h2>
      <p>
        We research products independently and recommend them based on materials, certifications, and
        suitability for reducing microplastic exposure. Products, prices, and availability may change. We do
        our best to keep recommendations current but cannot guarantee real-time accuracy.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some links on this site are affiliate links. When you purchase through them, we may earn a commission at
        no additional cost to you. Affiliate relationships never influence our recommendations.
      </p>

      <h2>Refunds</h2>
      <p>
        Due to the digital nature of this product, all sales are final. If you experience a technical issue
        accessing the guide, contact us and we will resolve it.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, reach us at{" "}
        <a href="mailto:plasticfreepregnancyguide@gmail.com" className="text-sage underline underline-offset-2">
          plasticfreepregnancyguide@gmail.com
        </a>
      </p>
    </ArticleLayout>
  );
}
