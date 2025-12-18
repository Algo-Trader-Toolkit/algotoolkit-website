export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algo Trader Toolkit",
    url: "https://algotoolkit.com",
    logo: "https://algotoolkit.com/logo.png",
    description: "Professional trading bot framework with pattern recognition and live trading engine.",
    sameAs: [
      "https://github.com/Algo-Trader-Toolkit/Algo-Trader-Toolkit",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Algo Trader Toolkit",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Cross-platform",
    offers: [
      {
        "@type": "Offer",
        name: "Standard",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "149",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Ultimate",
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "749",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "89",
      bestRating: "5",
      worstRating: "1",
    },
    description: "Build your own trading bot with pre-built strategies, pattern recognition, and live trading engine. Full source code included.",
    featureList: [
      "50+ Chart Patterns",
      "25+ Candlestick Patterns",
      "4 ML Models",
      "Live Trading Engine",
      "Telegram Alerts",
      "Backtesting Engine",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What programming knowledge do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic Python knowledge is recommended. The code is well-documented and includes setup guides.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work with any broker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The toolkit supports Bybit exchange with full API integration. Other exchanges can be added.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a refund policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer refunds through Gumroad's standard refund policy.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
