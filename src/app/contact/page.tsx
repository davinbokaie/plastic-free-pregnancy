import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Contact | Plastic-Free Pregnancy",
};

const MAIL_SUBJECT = encodeURIComponent("Plastic-Free Pregnancy — Question");

export default function ContactPage() {
  return (
    <ArticleLayout title="Contact" showSourcesNote={false}>
      <p className="font-body text-[17px] text-[#6B6560]">
        Have a question about the guide, a product recommendation, or something else? We&apos;d love to hear
        from you.
      </p>
      <a
        href={`mailto:plasticfreepregnancyguide@gmail.com?subject=${MAIL_SUBJECT}`}
        className="font-ui inline-block text-[15px] font-semibold text-[#7B8F6B] underline underline-offset-2"
      >
        Send us an email →
      </a>
      <p className="font-ui mt-4 text-[13px] text-[#B8A99A]">We typically respond within 24 hours.</p>
    </ArticleLayout>
  );
}
