import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Algo Trader Toolkit | Our Story",
  description: "Learn about Algo Trader Toolkit - built by traders, for traders. Professional trading bot framework with 500+ hours of development.",
  openGraph: {
    title: "About - Algo Trader Toolkit",
    description: "Built by traders, for traders. Our story and mission.",
    url: "https://algotoolkit.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
