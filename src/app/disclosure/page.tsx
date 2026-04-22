import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Plastic-Free Pregnancy",
};

export default function DisclosurePage() {
  return (
    <ArticleLayout title="Affiliate Disclosure" showSourcesNote={false}>
      <p>
        Plastic-Free Pregnancy is a participant in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn advertising fees by advertising and
        linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission
        at no additional cost to you.
      </p>

      <p>
        Our recommendations are never influenced by affiliate relationships. Every product in this guide was
        independently researched and selected based on its materials, certifications, and suitability for reducing
        microplastic exposure. If a product earns us a commission, that played no role in its selection. If it
        doesn&apos;t, we recommend it anyway.
      </p>

      <p>
        We will never recommend a product because it pays us a commission, and we will never change a
        recommendation because it doesn&apos;t.
      </p>
    </ArticleLayout>
  );
}
