import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "About | Plastic-Free Pregnancy",
};

const MAIL_SUBJECT = encodeURIComponent("Plastic-Free Pregnancy — Hello");

export default function AboutPage() {
  return (
    <ArticleLayout title="About" showSourcesNote={false}>
      <p>
        Plastic-free living is becoming a priority across every category of consumer products. Plastic-Free
        Pregnancy&apos;s mission is to ensure that the most vulnerable stage of life has access to the most carefully
        chosen products — not just plastic-free, but the best plastic-free options available.
      </p>
      <p>
        The research on microplastics and infant health is moving fast. But what expecting mothers can do right
        now, today, is already clear. We decided to do the work so you don&apos;t have to.
      </p>
      <p>
        Every recommendation was vetted against the same criteria: the safety of the materials it&apos;s made of, and
        whether it&apos;s the best option in its category. The research behind each one is grounded in materials
        science, third-party certifications, product reviews, and first-party product testing.
      </p>
      <p>
        We believe the next generation deserves better than what&apos;s currently on the shelf. This guide is for the
        mothers who want to get ahead of it for them.
      </p>
      <p>
        Plastic-Free Pregnancy is the first step in a larger effort to make plastic-free living simpler and more
        accessible. If you have feedback, a product suggestion, or just want to say hello — we&apos;d love to hear from
        you.
      </p>
      <a
        href={`mailto:plasticfreepregnancyguide@gmail.com?subject=${MAIL_SUBJECT}`}
        className="font-ui inline-block text-[15px] font-semibold text-[#7B8F6B] underline underline-offset-2"
      >
        Get in touch →
      </a>
    </ArticleLayout>
  );
}
