import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Algo Trader Toolkit | Trading Bot Framework",
  description: "Explore all features: 50+ chart patterns, 25+ candlestick patterns, 4 ML models, live trading engine, Telegram alerts, and more. Compare Standard, Pro, Ultimate, and Enterprise tiers.",
  openGraph: {
    title: "Features - Algo Trader Toolkit",
    description: "50+ patterns, ML models, live trading engine. Compare all tiers and features.",
    url: "https://algotoolkit.com/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
