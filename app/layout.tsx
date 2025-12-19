import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Algo Trader Toolkit - Professional Trading Bot Framework",
  description: "Build your own trading bot with pre-built strategies, pattern recognition, and live trading engine. Full source code, 50+ patterns, ML models. Go live in hours, not months. From $49.",
  keywords: ["trading bot", "algorithmic trading", "python trading", "automated trading", "trading bot framework", "backtesting", "live trading", "pattern recognition"],
  authors: [{ name: "Algo Trader Toolkit" }],
  creator: "Algo Trader Toolkit",
  publisher: "Algo Trader Toolkit",
  verification: {
    google: "qIqD5yoDOcFE6-vb_OuBmjRbdwLnfV9xCwwf4JMvaA8",
  },
  metadataBase: new URL("https://algotoolkit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Algo Trader Toolkit - Build Your Trading Bot",
    description: "Professional trading bot framework with 50+ patterns, ML models, and live trading engine. Full source code included. From $49.",
    url: "https://algotoolkit.com",
    siteName: "Algo Trader Toolkit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Algo Trader Toolkit - Professional Trading Bot Framework",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algo Trader Toolkit - Build Your Trading Bot",
    description: "Professional trading bot framework with 50+ patterns, ML models, and live trading engine. From $49.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGFEVMT7PL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGFEVMT7PL');
            gtag('config', 'AW-17804660508');
            
            // Track Gumroad button clicks
            document.addEventListener('click', function(e) {
              var target = e.target.closest('a');
              if (target && target.href && target.href.includes('gumroad.com')) {
                var text = target.innerText || target.textContent;
                var validButtons = [
                  "Get the Toolkit",
                  "Get Standard",
                  "Get Pro",
                  "Get Ultimate",
                  "Get Enterprise"
                ];
                
                // Check if the button text contains one of our valid phrases
                var isValid = validButtons.some(function(btnText) {
                  return text.includes(btnText);
                });

                if (isValid) {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17804660508/GdQmCMOAkNQbEJye9qlC'
                  });
                }
              }
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://gumroad.com/js/gumroad.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
