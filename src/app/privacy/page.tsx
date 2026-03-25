import { readFileSync } from "fs";
import { join } from "path";
import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Plastic-Free Pregnancy",
};

export default function PrivacyPage() {
  const html = readFileSync(
    join(process.cwd(), "src/app/privacy/privacy-policy.html"),
    "utf8"
  );

  return (
    <ArticleLayout title="Privacy Policy" showTitle={false} showSourcesNote={false}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ArticleLayout>
  );
}
