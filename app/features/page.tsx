"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Zap,
  BarChart3,
  Brain,
  Rocket,
  Shield,
  Server,
  Bell,
  FileText,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Standard",
    subtitle: "Backtesting Engine",
    price: 49,
    icon: BarChart3,
    color: "emerald",
    link: "https://algotoolkitt.gumroad.com/l/Standard",
    features: [
      {
        category: "Core Engine",
        items: [
          "High-fidelity market simulation (fees, slippage, execution delays)",
          "Quant-grade performance metrics (Sharpe, Drawdown, Profit Factor)",
          "Data fetching with intelligent caching",
          "Equity curve visualization",
        ],
      },
      {
        category: "Technical Indicators (12+)",
        items: [
          "Moving Averages: SMA (10, 30, 50, 200), EMA (10, 30)",
          "Oscillators: RSI, MACD, ADX",
          "Volatility: Bollinger Bands, ATR",
          "Volume: OBV (On-Balance Volume)",
        ],
      },
      {
        category: "Fibonacci Analysis",
        items: [
          "Retracement Levels (0.236, 0.382, 0.5, 0.618, 0.786)",
          "Multi-indicator strategy combining all signals",
          "High-confidence signal filtering",
        ],
      },
    ],
  },
  {
    name: "Pro",
    subtitle: "Trader's Toolkit",
    price: 149,
    icon: Zap,
    color: "blue",
    link: "https://algotoolkitt.gumroad.com/l/Pro",
    includes: "Standard",
    features: [
      {
        category: "Pattern Recognition",
        items: [
          "50+ chart & candlestick patterns",
          "Pattern reliability scoring (Bulkowski research-based)",
          "Classical target calculations (Edwards & Magee formulas)",
          "Volume validation for pattern confirmation",
        ],
      },
      {
        category: "Combined Strategies",
        items: [
          "Indicators + Patterns strategy",
          "Confidence-based signal weighting",
          "Server deployment guide",
        ],
      },
    ],
  },
  {
    name: "Ultimate",
    subtitle: "Quant Platform",
    price: 349,
    icon: Brain,
    color: "purple",
    link: "https://algotoolkitt.gumroad.com/l/Ultimate",
    includes: "Pro",
    features: [
      {
        category: "Advanced Analysis",
        items: [
          "Elliott Wave Analysis (automatic wave counting)",
          "Fair Value Gap (FVG) Strategy (institutional order flow)",
          "Structure-based signal confirmation",
        ],
      },
      {
        category: "Machine Learning",
        items: [
          "ML Pipeline (XGBoost, RandomForest, LightGBM, MLP)",
          "Pre-trained ML models included",
          "Train your own ML models",
          "Optimize strategy parameters",
        ],
      },
      {
        category: "Risk Management",
        items: [
          "Intelligent Dynamic Stop-Loss (Fibonacci-based trailing)",
          "Multi-timeframe confirmation",
        ],
      },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Live Trading Platform",
    price: 749,
    icon: Rocket,
    color: "amber",
    link: "https://algotoolkitt.gumroad.com/l/Enterprise",
    includes: "Ultimate",
    features: [
      {
        category: "Live Trading Infrastructure (14 files)",
        items: [
          "Live Trading Engine - full bot infrastructure",
          "Order Executor - real exchange order management",
          "Safety Monitor - risk management & circuit breakers",
          "Graceful Shutdown Handler - safe exit handling",
          "Professional Dashboard - real-time terminal monitoring",
          "Working Example Strategy - uses all toolkit features",
          "Memory & Log Management - production optimization",
        ],
      },
      {
        category: "Telegram Notifications (EXCLUSIVE)",
        items: [
          "Live alerts to your phone",
          "Trade entry/exit notifications",
          "P&L updates in real-time",
          "Error and warning alerts",
        ],
      },
      {
        category: "Documentation (11 guides)",
        items: [
          "SSH Deployment Guide - Deploy on DigitalOcean/AWS 24/7",
          "API Rate Limits - Exchange limits & handling",
          "Emergency Shutdown - Safety procedures",
          "Order Management - Order flow & execution",
          "Position Sizing - Dynamic position management",
          "Telegram Setup - Notification configuration",
          "Multi-Wallet Trading - Trade multiple assets",
        ],
      },
      {
        category: "Enterprise Exclusive",
        items: [
          "Paper trading mode (test without risk)",
          "Bybit exchange integration",
          "Run 24/7 on cloud servers",
          "Risk Gates - Safety monitors ensure drawdown limits",
          "Production-ready, stress tested for 24/7 operation",
        ],
      },
    ],
  },
];

export default function FeaturesPage() {
  const [expandedTier, setExpandedTier] = useState<string | null>("Enterprise");

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400" },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">Algo Trader Toolkit</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-slate-300 hover:text-white transition">
                ← Back to Home
              </Link>
              <a
                href="https://algotoolkitt.gumroad.com/l/Enterprise"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              📦 What's Included
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
              Complete feature breakdown by tier. See exactly what you're getting before you buy.
            </p>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full px-6 py-3">
              <span className="text-emerald-400 font-semibold">One-time purchase</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">Lifetime license</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">Full source code</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {tiers.map((tier, index) => {
            const colors = getColorClasses(tier.color);
            const isExpanded = expandedTier === tier.name;
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden`}
              >
                {/* Header - Always Visible */}
                <div
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => setExpandedTier(isExpanded ? null : tier.name)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{tier.name}</h2>
                      <p className="text-slate-400">{tier.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${colors.text}`}>${tier.price}</div>
                      <div className="text-sm text-slate-500">one-time</div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-slate-400 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-6 border-t border-slate-700/50"
                  >
                    {tier.includes && (
                      <div className="mt-4 mb-6 p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-400">Includes everything in </span>
                        <span className={colors.text}>{tier.includes}</span>
                        <span className="text-slate-400">, plus:</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      {tier.features.map((category) => (
                        <div key={category.category} className="space-y-3">
                          <h3 className={`font-semibold ${colors.text}`}>{category.category}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700/50">
                      <a
                        href={tier.link}
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${
                          tier.color === "amber"
                            ? "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                            : "from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
                        } px-6 py-3 rounded-xl font-semibold transition`}
                      >
                        <span>Get {tier.name} - ${tier.price}</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">🤔 Not sure which tier?</h3>
            <p className="text-slate-400 mb-6">
              <strong className="text-white">For learning & backtesting:</strong> Start with Standard or Pro.<br />
              <strong className="text-white">For live trading:</strong> Enterprise is the only option with the live trading engine.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              <span>View All Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-sm text-slate-500">
          <p>© 2024 Algo-Trader Toolkit. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-600">
            📜 Single-user commercial license. Redistribution or resale prohibited.
          </p>
        </div>
      </footer>
    </div>
  );
}
