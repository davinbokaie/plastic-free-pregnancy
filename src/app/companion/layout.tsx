import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart Companion | Plastic-Free Pregnancy",
};

export default function CompanionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
