import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Plastic-Free Pregnancy",
};

export default function DisclosurePage() {
  return (
    <ArticleLayout title="Affiliate Disclosure" showSourcesNote={false}>
      <p>Plastic-Free Pregnancy is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

      <p>When you click a product link and make a purchase, we may earn a small commission at no additional cost to you.</p>

      <p>Our recommendations are never influenced by affiliate relationships. Every product in this guide was independently researched and selected based on its materials, certifications, and suitability for reducing microplastic exposure. We then added affiliate links to products that are available on Amazon. If a product isn&apos;t on Amazon, we link directly to the brand — no commission, same recommendation.</p>

      <p>We will never recommend a product because it pays us a commission, and we will never change a recommendation because it doesn&apos;t.</p>
    </ArticleLayout>
  );
}
