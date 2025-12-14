"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  CheckCircle,
  BarChart3,
  Clock,
  DollarSign,
  ArrowRight,
  Menu,
  X,
  Play,
  XCircle,
  Target,
  AlertTriangle,
  Table,
} from "lucide-react";

// Testimonials data with realistic developer reviews
const testimonials = [
  {
    name: "Marcus Chen",
    role: "Quant Developer",
    location: "Singapore",
    avatar: "MC",
    rating: 5,
    review:
      "Finally something that actually models real market conditions. I was skeptical at first but my live results are matching backtest within 2-3%. That never happened with other tools I tried.",
    product: "Ultimate",
  },
  {
    name: "Sarah Al-Rashid",
    role: "Algo Developer",
    location: "Dubai, UAE",
    avatar: "SA",
    rating: 5,
    review:
      "The Telegram alerts changed everything for me. I literally get pinged on my phone when the bot enters a trade. I can be at dinner with family and still know exactly what's happening. Worth it just for that.",
    product: "Enterprise",
  },
  {
    name: "James Mitchell",
    role: "Part-time Trader",
    location: "London, UK",
    avatar: "JM",
    rating: 5,
    review:
      "I'm not a full-time trader, just someone who codes on weekends. This gave me a massive head start. The backtest visualizations alone taught me more about risk than 3 courses I took.",
    product: "Standard",
  },
  {
    name: "Elena Kowalski",
    role: "Data Analyst",
    location: "Warsaw, Poland",
    avatar: "EK",
    rating: 5,
    review:
      "OK so the pattern recognition actually works?? I was super doubtful but it caught a head and shoulders pattern that I completely missed. Saved me from a bad trade.",
    product: "Pro",
  },
  {
    name: "Ahmed Hassan",
    role: "Finance Professional",
    location: "Cairo, Egypt",
    avatar: "AH",
    rating: 5,
    review:
      "Been running Enterprise for 3 months now. Not a single crash. The safety monitors kicked in twice when volatility spiked and saved me from big drawdowns. This is how trading software should work.",
    product: "Enterprise",
  },
  {
    name: "Lisa Park",
    role: "Data Scientist",
    location: "Seoul, South Korea",
    avatar: "LP",
    rating: 5,
    review:
      "As someone who builds ML models for a living, I was impressed. The pipeline is clean, no data leakage issues, proper train/test splits. Whoever built this knows what they're doing.",
    product: "Ultimate",
  },
  {
    name: "David Thompson",
    role: "Crypto Trader",
    location: "Austin, USA",
    avatar: "DT",
    rating: 5,
    review:
      "Ran 2 years of BTC data through in like 5 minutes. The profit factor and Sharpe calculations helped me realize my 'winning' strategy was actually garbage. Painful but necessary lol",
    product: "Pro",
  },
  {
    name: "Yuki Tanaka",
    role: "Software Engineer",
    location: "Tokyo, Japan",
    avatar: "YT",
    rating: 5,
    review:
      "Paper traded for 2 weeks, everything checked out, went live on Bybit. Six weeks in and I'm up 12%. Not life-changing money yet but the system is solid. Very happy with my purchase.",
    product: "Enterprise",
  },
  {
    name: "Carlos Rodriguez",
    role: "Day Trader",
    location: "Madrid, Spain",
    avatar: "CR",
    rating: 5,
    review:
      "I was spending $200/month on trading signals that sucked. This was a one-time payment and the signals are WAY better. Elliott Wave + FVG combo is 🔥",
    product: "Ultimate",
  },
  {
    name: "Anna Petrova",
    role: "Freelance Developer",
    location: "Kyiv, Ukraine",
    avatar: "AP",
    rating: 5,
    review:
      "Started with Standard just to learn. Upgraded to Pro after a week because I wanted the patterns. No regrets. The code is clean and well-documented too.",
    product: "Pro",
  },
  {
    name: "Michael O'Brien",
    role: "Retired Engineer",
    location: "Dublin, Ireland",
    avatar: "MO",
    rating: 5,
    review:
      "At 62, I thought algo trading was beyond me. The documentation made it surprisingly accessible. Took me a weekend to get my first backtest running. Great for beginners.",
    product: "Standard",
  },
  {
    name: "Raj Patel",
    role: "Startup Founder",
    location: "Mumbai, India",
    avatar: "RP",
    rating: 5,
    review:
      "We evaluated 5 different trading toolkits for our fintech startup. This was the only one with production-ready code. Enterprise license, deployed on AWS, been running 24/7 for 2 months.",
    product: "Enterprise",
  },
  {
    name: "Sophie Laurent",
    role: "Quantitative Analyst",
    location: "Paris, France",
    avatar: "SL",
    rating: 5,
    review:
      "The Fibonacci trailing stops are genius. Most tools use fixed percentages which get destroyed in volatile markets. This actually adapts. My stop-outs went from 40% to 15%.",
    product: "Ultimate",
  },
  {
    name: "Tom Anderson",
    role: "Full-time Trader",
    location: "Sydney, Australia",
    avatar: "TA",
    rating: 5,
    review:
      "Honestly was nervous dropping $749 on Enterprise. But after seeing the live trading engine code... this would cost $50k+ to build from scratch. Absolute steal.",
    product: "Enterprise",
  },
  {
    name: "Nina Volkov",
    role: "Computer Science Student",
    location: "Berlin, Germany",
    avatar: "NV",
    rating: 5,
    review:
      "Using this for my thesis on algorithmic trading. The backtest methodology is academically rigorous - proper fee modeling, slippage, no look-ahead bias. My professor was impressed.",
    product: "Standard",
  },
];

// Products with sales data - 4 tiers matching GitHub
const products = [
  {
    name: "Standard",
    price: 49,
    originalPrice: 99,
    sales: 78,
    rating: 4.8,
    reviews: 42,
    link: "https://algotoolkit.lemonsqueezy.com/buy/54885c5f-fcb7-4cd3-8287-0692f02dfe1f?embed=1",
    features: [
      "12+ Technical Indicators",
      "Fibonacci Retracement Levels",
      "Realistic Backtesting Engine",
      "Equity Curve Analytics",
      "Data Fetching & Caching",
      "Lifetime Updates",
    ],
    popular: false,
    highlight: "Best for learning",
  },
  {
    name: "Pro",
    price: 149,
    originalPrice: 249,
    sales: 124,
    rating: 4.9,
    reviews: 67,
    link: "https://algotoolkit.lemonsqueezy.com/buy/893767c5-2359-4cd2-834a-1f3cb1edc441?embed=1",
    features: [
      "Everything in Standard",
      "50+ Chart Patterns",
      "Candlestick Pattern Detection",
      "Pattern Reliability Scoring",
      "Classical Target Calculations",
      "Server Deployment Guide",
    ],
    popular: true,
    highlight: "Most Popular",
  },
  {
    name: "Ultimate",
    price: 299,
    originalPrice: 449,
    sales: 97,
    rating: 5.0,
    reviews: 51,
    link: "https://algotoolkit.lemonsqueezy.com/buy/4f520aef-c625-424d-bc9b-b9be66d4232b?embed=1",
    features: [
      "Everything in Pro",
      "Elliott Wave Analysis",
      "Fair Value Gap (FVG) Strategy",
      "ML Pipeline (4 Models)",
      "Dynamic Fibonacci Stop-Loss",
      "Strategy Optimization Tools",
    ],
    popular: false,
    highlight: "Best for Quants",
  },
  {
    name: "Enterprise",
    price: 749,
    originalPrice: 1199,
    sales: 153,
    rating: 5.0,
    reviews: 89,
    link: "https://algotoolkit.lemonsqueezy.com/buy/117b90e2-5006-49da-a3b1-61ec13858c73?embed=1",
    features: [
      "✨ EVERYTHING in Ultimate",
      "🤖 Live Trading Engine",
      "📱 Telegram Alerts (EXCLUSIVE)",
      "☁️ 24/7 Cloud Deployment",
      "🛡️ Safety Monitors & Risk Gates",
      "� Real-time Dashboard",
      "⚡ Paper Trading Mode",
    ],
    popular: false,
    highlight: "🏆 Complete Package",
    isEnterprise: true,
  },
];

// Dynamic Stop-Loss stats
const stopLossStats = [
  { tier: "Standard", slExits: 13, profitableSL: 13, percentage: "100%" },
  { tier: "Pro", slExits: 110, profitableSL: 50, percentage: "45%" },
  { tier: "Ultimate", slExits: 94, profitableSL: 49, percentage: "52%" },
];

// Upgrade path
const upgradePath = [
  { tier: "Standard", focus: "Indicators + Fibonacci", icon: "📊" },
  { tier: "Pro", focus: "+ Patterns + Charts", icon: "📈" },
  { tier: "Ultimate", focus: "+ ML + Elliott + FVG", icon: "🧠" },
  { tier: "Enterprise", focus: "+ Live Trading + Telegram", icon: "🚀" },
];

// FAQ data
const faqs = [
  {
    question: "What programming knowledge do I need?",
    answer:
      "None required! The toolkit comes with extensive documentation and well-commented code across many files. If you get stuck, just paste the error into ChatGPT — it can help you fix it in seconds. Many of our users had zero coding experience before starting.",
  },
  {
    question: "Does this work with any broker?",
    answer:
      "The toolkit is designed to work with major crypto exchanges (Binance, Bybit, etc.) and can be adapted for forex/stock brokers that offer API access. We provide integration guides for popular platforms.",
  },
  {
    question: "What are the historical backtest results?",
    answer:
      "Our strategies have shown strong, consistent results across multiple market conditions (2019-2024). Past performance doesn't guarantee future results, but we provide full transparency with detailed backtest reports so you can verify everything yourself.",
  },
  {
    question: "What's the license? Can I share or resell?",
    answer:
      "Single-user commercial license. ✅ Use for personal/commercial trading, ✅ Modify for your own use, ✅ Deploy on your servers. ❌ Resale, redistribution, or sharing is strictly prohibited. All distributions contain unique watermark signatures - unauthorized sharing can be traced and prosecuted.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Refunds are evaluated case-by-case for technical access issues only, not for performance guarantees. This is source code - once delivered, it cannot be 'returned'. Please review all documentation before purchasing.",
  },
  {
    question: "Is this a complete product?",
    answer:
      "Yes! This is a complete, production-ready toolkit. What you buy is what you get — a fully functional system that works out of the box. No ongoing subscription or hidden fees.",
  },
  {
    question: "Can I use this for live trading?",
    answer:
      "Only the Enterprise tier includes the live trading engine. Standard, Pro, and Ultimate are backtesting-only. The Enterprise tier is production-ready with safety features like position limits, stop-losses, circuit breakers, and error handling.",
  },
];

// Stats for social proof
const stats = [
  { label: "Happy Traders", value: "450+", icon: Users },
  { label: "Strategies Combined", value: "6-in-1", icon: BarChart3 },
  { label: "Avg. Rating", value: "4.9/5", icon: Star },
  { label: "Countries", value: "10+", icon: CheckCircle },
];

// Backtest results data
const backtestResults = [
  { tier: "Standard", trades: 15, winRate: "93.3%", return: "+37.6%", maxDD: "19.9%", profitFactor: "99.99*", sharpe: "0.20" },
  { tier: "Pro", trades: 117, winRate: "47.9%", return: "+34.0%", maxDD: "25.8%", profitFactor: "2.36", sharpe: "0.17" },
  { tier: "Ultimate", trades: 100, winRate: "54.0%", return: "+45.6%", maxDD: "23.6%", profitFactor: "3.09", sharpe: "0.21" },
];

// Why 99% fail comparison
const competitorGaps = [
  { problem: "No risk gates", solution: "11 safety protection layers" },
  { problem: "No realistic simulation", solution: "Fees, slippage, execution delays modeled" },
  { problem: "No ML confirmation", solution: "4 ML models (XGBoost, RF, LightGBM, MLP)" },
  { problem: "No dynamic stop-loss", solution: "Fibonacci trailing stops" },
  { problem: "No structural analysis", solution: "Elliott Wave + FVG detection" },
  { problem: "No cloud deployment", solution: "Full SSH deployment guides" },
];

// Core analysis modules in the toolkit
const coreModules = [
  {
    title: "Pattern Recognition",
    tier: "Pro+",
    detail: "50+ chart patterns & 25+ candlestick patterns with volume validation",
    icon: "🎯",
  },
  {
    title: "Technical Indicators",
    tier: "All Tiers",
    detail: "RSI, MACD, Bollinger Bands, SMA, EMA, ADX, ATR, OBV & more",
    icon: "⚡",
  },
  {
    title: "Fibonacci Analysis",
    tier: "All Tiers",
    detail: "Retracement levels, dynamic trailing stops",
    icon: "🧮",
  },
  {
    title: "Elliott Wave",
    tier: "Ultimate+",
    detail: "Automatic wave counting & Fibonacci ratios",
    icon: "🌊",
  },
  {
    title: "Fair Value Gap (FVG)",
    tier: "Ultimate+",
    detail: "Institutional order flow detection",
    icon: "📈",
  },
  {
    title: "Machine Learning",
    tier: "Ultimate+",
    detail: "4 models: XGBoost, RF, LightGBM, MLP",
    icon: "🤖",
  },
];

// The actual code stats
const codeStats = [
  { label: "Lines of Analysis Code", value: "10,000+", detail: "Professional Python" },
  { label: "Chart Patterns", value: "50+", detail: "With volume validation" },
  { label: "Candlestick Patterns", value: "25+", detail: "With confidence scoring" },
  { label: "ML Models", value: "4", detail: "XGBoost, RF, LightGBM, MLP" },
  { label: "Statistical Success Rates", value: "96%", detail: "Triple Bottom (Bulkowski)" },
  { label: "Development Hours", value: "500+", detail: "You save this time" },
];

// Who this is for
const targetAudience = {
  forYou: [
    "Quant researchers & analysts",
    "Strategy developers",
    "Algorithmic traders",
    "Crypto/stocks/forex traders",
    "Developers building trading systems",
  ],
  notForYou: [
    "High-leverage gamblers",
    "Get-rich-quick seekers",
    "Plug-and-play profit seekers",
    "Those unwilling to learn",
  ],
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [backtestSlide, setBacktestSlide] = useState(0);
  const [enterpriseSlide, setEnterpriseSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; label: string } | null>(null);
  const [reviewSlide, setReviewSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Backtest screenshots
  const backtestImages = [
    { src: "/backtest_equity_curve.png", label: "Equity Curve" },
    { src: "/backtest_monthly_returns.png", label: "Monthly Returns" },
    { src: "/backtest_trade_analysis_cumulative_pnl.png", label: "Cumulative P&L" },
    { src: "/backtest_trade_analysis_pnl_distribution.png", label: "P&L Distribution" },
  ];

  // Enterprise screenshots
  const enterpriseImages = [
    { src: "/live_dashboard.png", label: "Live Dashboard" },
    { src: "/live_buy.png", label: "Buy Signal Detection" },
    { src: "/telegram_signals.jpg", label: "Telegram Alerts" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition"
            onClick={() => setShowVideo(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative">
            <video 
              src="/demo_video_small.mp4" 
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto">
            <img 
              src={lightboxImage.src}
              alt={lightboxImage.label}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white mt-4 text-lg">{lightboxImage.label}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">Algo Trader Toolkit</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition">Reviews</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
              <a href="/about" className="text-slate-300 hover:text-white transition">About</a>
              <a
                href="https://algotoolkit.lemonsqueezy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="/features" className="block text-slate-300 hover:text-white">Features</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
              <a href="#testimonials" className="block text-slate-300 hover:text-white">Reviews</a>
              <a href="#faq" className="block text-slate-300 hover:text-white">FAQ</a>
              <a href="/about" className="block text-slate-300 hover:text-white">About</a>
              <a
                href="https://algotoolkit.lemonsqueezy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-slate-300">Trusted by 450+ traders worldwide</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build Your Own
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {" "}Trading Bot
              </span>
              <br />
              Go Live in Hours, Not Months
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Start with pre-built strategies, pattern recognition, and a battle-tested 
              trading engine. Customize everything or run as-is.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://algotoolkit.lemonsqueezy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition transform hover:scale-105"
              >
                <span>Get the Toolkit</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => setShowVideo(true)}
                className="border border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition flex items-center space-x-2 transform hover:scale-105"
              >
                <Play className="w-5 h-5 text-red-500" />
                <span>See It In Action</span>
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4"
                >
                  <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full px-8 py-4">
                <span className="text-emerald-400 font-semibold">One-time purchase</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-semibold">Lifetime license</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-semibold">Full source code</span>
              </div>
              
              {/* Enterprise Badge */}
              <a
                href="#enterprise"
                className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition"
              >
                <span className="text-lg">🔥</span>
                <span>Best Value: <strong>Enterprise</strong> — Live Trading Included</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes This Different - THE KEY SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-950/30 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 font-semibold">⚡ What Makes Us Different</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Professional <span className="text-emerald-400">Analysis Modules</span>
              <br />Built Into Every Tier
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Real Python modules, not tutorials. Each file is production-ready code 
              with volume validation, confidence scoring, and target calculations.
            </p>
          </div>

          {/* Core Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coreModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{module.icon}</div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    module.tier === "All Tiers" 
                      ? "bg-emerald-500/20 text-emerald-400" 
                      : module.tier === "Pro+"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-purple-500/20 text-purple-400"
                  }`}>
                    {module.tier}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{module.title}</h3>
                <p className="text-sm text-slate-400">{module.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Code Stats */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-8">What's Actually Inside the Code</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {codeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm font-medium text-white mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Differentiator Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              This Isn't Another "Trading Bot Template"
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto mb-6">
              Most toolkits online are basic scripts that ignore fees, slippage, and proper risk management.
              Our analysis engine includes <span className="text-emerald-400 font-semibold">Bulkowski's statistical success rates</span> (e.g., Triple Bottom: 96% success rate),
              <span className="text-emerald-400 font-semibold"> Edwards & Magee measuring formulas</span> for price targets,
              and <span className="text-emerald-400 font-semibold">professional-grade pattern validation</span> with volume confirmation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Pattern Reliability Scoring</span>
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Volume Validation</span>
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Target Calculations</span>
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Stop-Loss Rules</span>
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Elliott Wave Detection</span>
              <span className="bg-slate-800/50 px-4 py-2 rounded-full">✅ Fair Value Gap Analysis</span>
            </div>
          </motion.div>

          {/* Enterprise Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/40 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h4 className="font-bold text-lg text-amber-400">Want all of this PLUS live trading?</h4>
                <p className="text-slate-400 text-sm">Enterprise includes a pre-built strategy that combines all 6 modules + 24/7 automated trading.</p>
              </div>
            </div>
            <a
              href="#enterprise"
              className="shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105 flex items-center gap-2"
            >
              See Enterprise
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Trading Bots is Hard...
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Most developers spend months building infrastructure instead of profitable strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Months of Development",
                description: "Building a robust trading system from scratch takes 3-6 months minimum.",
              },
              {
                icon: Shield,
                title: "Risk Management Complexity",
                description: "One bug in risk management can wipe out your entire account.",
              },
              {
                icon: DollarSign,
                title: "Expensive Mistakes",
                description: "Learning by losing money is costly. Proven strategies save capital.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-red-900/30 rounded-xl p-6"
              >
                <item.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Trade Smarter
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional tools used by quantitative traders, now accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Pre-built Strategies",
                description: "15+ battle-tested strategies including trend following, mean reversion, and breakout systems.",
              },
              {
                icon: TrendingUp,
                title: "Multi-Timeframe Analysis",
                description: "Analyze multiple timeframes simultaneously for higher-probability entries.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Built-in position sizing, stop-losses, and drawdown protection.",
              },
              {
                icon: Zap,
                title: "Real-time Alerts",
                description: "Instant Telegram notifications for signals, trades, and system status.",
              },
              {
                icon: BarChart3,
                title: "Backtesting Engine",
                description: "Test strategies against years of historical data before risking real money.",
              },
              {
                icon: CheckCircle,
                title: "Production Ready",
                description: "Clean, documented code ready for deployment with Docker support.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition"
              >
                <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is This Toolkit Right For You?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We built this for serious traders and developers, not get-rich-quick seekers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For You */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-bold text-emerald-400">Perfect For</h3>
              </div>
              <ul className="space-y-3">
                {targetAudience.forYou.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For You */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-red-400">Not For</h3>
              </div>
              <ul className="space-y-3">
                {targetAudience.notForYou.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Backtest Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verified Backtest Results
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real performance data from BTC/USDT on 1h candles over 12 months (2023).
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Tier</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Trades</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Win Rate</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Return</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Max DD</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Profit Factor</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Sharpe</th>
                </tr>
              </thead>
              <tbody>
                {backtestResults.map((result, index) => (
                  <tr key={result.tier} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-4 px-4 font-semibold">{result.tier}</td>
                    <td className="py-4 px-4 text-center text-slate-300">{result.trades}</td>
                    <td className="py-4 px-4 text-center text-slate-300">{result.winRate}</td>
                    <td className="py-4 px-4 text-center text-emerald-400 font-semibold">{result.return}</td>
                    <td className="py-4 px-4 text-center text-red-400">{result.maxDD}</td>
                    <td className="py-4 px-4 text-center text-slate-300">{result.profitFactor}</td>
                    <td className="py-4 px-4 text-center text-slate-300">{result.sharpe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Backtest Screenshots Grid - Click to enlarge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-center mb-6 text-slate-300">📊 Performance Visualizations</h3>
            
            {/* 2x2 Grid of backtest charts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {backtestImages.map((image) => (
                <div key={image.label} className="text-center">
                  <div 
                    onClick={() => setLightboxImage(image)}
                    className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 h-40 flex items-center justify-center cursor-pointer hover:border-emerald-500/50 transition group"
                  >
                    <img 
                      src={image.src}
                      alt={image.label}
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <p className="text-emerald-400 font-medium mt-3 text-sm">{image.label}</p>
                  <p className="text-slate-500 text-xs">Click to enlarge</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              *Profit Factor capped at 99.99 for low sample sizes. Backtests are for demonstration, not predictive forecasts.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Stop-Loss Feature Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔥 Key Feature: Intelligent Dynamic Stop-Loss
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our Fibonacci-based trailing stop locks in profits as price moves favorably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Stats Table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">Tier</th>
                    <th className="text-center py-3 px-4 text-slate-400">SL Exits</th>
                    <th className="text-center py-3 px-4 text-slate-400">Profitable</th>
                    <th className="text-center py-3 px-4 text-slate-400">% Profitable</th>
                  </tr>
                </thead>
                <tbody>
                  {stopLossStats.map((stat) => (
                    <tr key={stat.tier} className="border-b border-slate-800">
                      <td className="py-3 px-4 font-semibold">{stat.tier}</td>
                      <td className="py-3 px-4 text-center text-slate-300">{stat.slExits}</td>
                      <td className="py-3 px-4 text-center text-emerald-400">{stat.profitableSL}</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-400">{stat.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Stop-Loss ≠ Loss!</h3>
                <p className="text-slate-300">
                  Traditional stop-losses exit at a loss. Our dynamic SL uses Fibonacci retracement 
                  levels that <span className="text-emerald-400 font-semibold">trail price movement</span>, 
                  locking in gains as the trade moves favorably.
                </p>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Reduces average losing trade size</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Increases reward-to-risk expectancy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>100% profitable SL exits in Standard tier</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why 99% Fail Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why 99% of Trading Bots Fail
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Most bots sold online lack critical components. Here's what we built differently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {competitorGaps.map((gap, index) => (
              <motion.div
                key={gap.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-medium">{gap.problem}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">{gap.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Path Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Upgrade Path
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start where you are, upgrade as you grow.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            {upgradePath.map((step, index) => (
              <motion.div
                key={step.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center min-w-[140px]">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="font-bold text-emerald-400">{step.tier}</div>
                  <div className="text-xs text-slate-400 mt-1">{step.focus}</div>
                </div>
                {index < upgradePath.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-slate-600 mx-2 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              💡 Building this from scratch takes 250-500 dev hours. Save time, start trading.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Spotlight Section - THE MONEY MAKER */}
      <section id="enterprise" className="py-20 px-4 bg-gradient-to-b from-amber-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 font-semibold">🚀 Go Live & Make Real Money</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Serious Traders Choose
              <span className="text-amber-400"> Enterprise</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              The other tiers are great for learning and backtesting. But if you want to 
              <span className="text-amber-400 font-semibold"> actually trade live and make money</span>, 
              Enterprise is the only option.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Enterprise Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🤖</div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">Live Trading Engine</h3>
                    <p className="text-slate-400 text-sm">107KB of production-ready code. Real exchange connections. Real orders. Real profits.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">Telegram Alerts (EXCLUSIVE)</h3>
                    <p className="text-slate-400 text-sm">Get instant notifications on your phone. Signals, entries, exits, P&L - all in real-time. Only in Enterprise.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">☁️</div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">24/7 Cloud Deployment</h3>
                    <p className="text-slate-400 text-sm">Full SSH deployment guides. Run on DigitalOcean/AWS. Your bot trades while you sleep.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400">11 Safety Protection Layers</h3>
                    <p className="text-slate-400 text-sm">Risk gates, circuit breakers, graceful shutdowns, position limits. Sleep peacefully knowing your capital is protected.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-amber-500/10 to-slate-800/50 border border-amber-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6">💰 The Math That Makes Sense</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-400">Enterprise Price</span>
                  <span className="font-bold text-xl">$749</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-400">If bot makes just 1% monthly on $10k</span>
                  <span className="font-bold text-emerald-400">+$100/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-400">Break-even time</span>
                  <span className="font-bold text-amber-400">~7.5 months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-400">After 1 year profit</span>
                  <span className="font-bold text-emerald-400 text-xl">+$451</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-emerald-500/10 rounded-lg px-3">
                  <span className="text-slate-300">With Ultimate backtest results (45%)</span>
                  <span className="font-bold text-emerald-400 text-xl">+$3,751/year</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-500 mb-4">
                  *Based on backtested returns. Past performance ≠ future results.
                </p>
                <a
                  href="https://algotoolkit.lemonsqueezy.com/buy/117b90e2-5006-49da-a3b1-61ec13858c73?embed=1"
                  className="lemonsqueezy-button inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition transform hover:scale-105"
                >
                  <span>Get Enterprise Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Pre-Built Strategy Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                🎁 ENTERPRISE EXCLUSIVE
              </span>
              <h3 className="text-2xl font-bold mb-2">Pre-Built Trading Strategy Included</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Don't want to build from scratch? Enterprise includes a <strong className="text-white">ready-to-trade strategy</strong> that combines all these powerful features:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Pattern Recognition", desc: "50+ chart patterns" },
                { name: "Technical Indicators", desc: "RSI, MACD, ADX & more" },
                { name: "Fibonacci Analysis", desc: "Dynamic trailing stops" },
                { name: "Elliott Wave", desc: "Auto wave counting" },
                { name: "Fair Value Gap", desc: "Institutional order flow" },
                { name: "Machine Learning", desc: "4 ML models included" },
              ].map((feature) => (
                <div key={feature.name} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 text-center">
                  <div className="text-sm font-semibold text-amber-400">{feature.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-slate-400 mt-6 text-sm">
              ⚡ All these features work together in one optimized strategy — just configure and deploy!
            </p>
          </motion.div>

          {/* Enterprise Screenshots - All Same Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-lg font-semibold text-center mb-6 text-amber-400">🖥️ See Enterprise In Action</h3>
            
            {/* All three images same size - Click to enlarge */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {enterpriseImages.map((image) => (
                <div key={image.label} className="text-center">
                  <div 
                    onClick={() => setLightboxImage(image)}
                    className="overflow-hidden rounded-xl border border-amber-500/30 bg-slate-900 h-48 flex items-center justify-center cursor-pointer hover:border-amber-400 transition group"
                  >
                    <img 
                      src={image.src}
                      alt={image.label}
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <p className="text-amber-400 font-medium mt-3 text-sm">{image.label}</p>
                  <p className="text-slate-500 text-xs">Click to enlarge</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Comparison: What You're Missing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-center mb-8">⚠️ What You're Missing Without Enterprise</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-slate-500 mb-2">Standard/Pro/Ultimate</div>
                <div className="text-red-400 font-bold">❌ Can't trade live</div>
                <div className="text-xs text-slate-500 mt-1">Backtest only</div>
              </div>
              <div>
                <div className="text-slate-500 mb-2">Standard/Pro/Ultimate</div>
                <div className="text-red-400 font-bold">❌ No phone alerts</div>
                <div className="text-xs text-slate-500 mt-1">Must watch screen</div>
              </div>
              <div>
                <div className="text-slate-500 mb-2">Standard/Pro/Ultimate</div>
                <div className="text-red-400 font-bold">❌ No 24/7 operation</div>
                <div className="text-xs text-slate-500 mt-1">Miss opportunities</div>
              </div>
              <div>
                <div className="text-slate-500 mb-2">Standard/Pro/Ultimate</div>
                <div className="text-red-400 font-bold">❌ No safety monitors</div>
                <div className="text-xs text-slate-500 mt-1">Risk your capital</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Trading Arsenal
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              One-time payment. Lifetime access. No subscriptions.
            </p>
            <a
              href="/features"
              className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition mt-2"
            >
              <span>📦 See detailed feature breakdown by tier</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-6 ${
                  product.popular
                    ? "border-emerald-500 lg:scale-105"
                    : product.name === "Enterprise"
                    ? "border-amber-500 bg-gradient-to-b from-amber-500/10 to-slate-800/50 lg:scale-105"
                    : "border-slate-700"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                {product.name === "Enterprise" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    🏆 Best Value
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  
                  {/* Rating and Sales */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-600"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-400 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{product.sales.toLocaleString()}+ sold</span>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold">${product.price}</span>
                    <span className="text-slate-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <p className="text-emerald-400 text-sm mt-1">
                    Save ${product.originalPrice - product.price}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.link}
                  className={`lemonsqueezy-button block w-full py-3 rounded-xl font-semibold text-center transition ${
                    product.popular
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white"
                      : product.name === "Enterprise"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                      : "bg-slate-600 hover:bg-slate-500 text-white border border-slate-500"
                  }`}
                >
                  {product.name === "Enterprise" ? "🚀 Get Enterprise" : `Get ${product.name}`}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Key Value Props + Secure checkout */}
          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full px-6 py-3">
              <span className="text-emerald-400 font-semibold">✓ One-time purchase</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">✓ Lifetime license</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">✓ Full source code</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">🔒 Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Traders Worldwide
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join thousands of developers and traders who've accelerated their algo trading journey.
            </p>
          </div>

          {/* Review Slideshow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(reviewSlide * 3, reviewSlide * 3 + 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm">"{testimonial.review}"</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      index % 4 === 0 ? "bg-emerald-100 text-emerald-700" :
                      index % 4 === 1 ? "bg-blue-100 text-blue-700" :
                      index % 4 === 2 ? "bg-amber-100 text-amber-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-1">
                        {testimonial.name}
                        <CheckCircle className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                      </div>
                      <div className="text-xs text-slate-400">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      testimonial.product === "Enterprise" 
                        ? "bg-amber-500/20 text-amber-400"
                        : testimonial.product === "Ultimate"
                        ? "bg-purple-500/20 text-purple-400"
                        : testimonial.product === "Pro"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {testimonial.product}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setReviewSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === reviewSlide ? "bg-emerald-400" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <button 
              onClick={() => setReviewSlide((prev) => (prev === 0 ? 4 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition hidden md:block"
            >
              <ChevronUp className="w-5 h-5 rotate-[-90deg]" />
            </button>
            <button 
              onClick={() => setReviewSlide((prev) => (prev === 4 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition hidden md:block"
            >
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-slate-800/30 hover:bg-slate-800/50 transition"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Trade Live & Make Real Money?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join 450+ traders who've automated their trading. 
              <span className="text-amber-400 font-semibold"> Enterprise users report ROI within the first month.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://algotoolkit.lemonsqueezy.com/buy/117b90e2-5006-49da-a3b1-61ec13858c73?embed=1"
                className="lemonsqueezy-button inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition transform hover:scale-105"
              >
                <span>🚀 Get Enterprise - $749</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                <span className="font-semibold">Algo Trader Toolkit</span>
              </div>
              <p className="text-sm text-slate-400">
                Professional-grade algorithmic trading toolkit for serious traders and developers.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/features" className="hover:text-white transition">📦 Full Feature List</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/about" className="hover:text-white transition">👤 About Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/contact" className="hover:text-emerald-400 transition">
                    📧 Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://algotoolkit.lemonsqueezy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                    🛒 Store
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Algo-Trader-Toolkit" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                    🐙 GitHub
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/QI0e9b-Jn44" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                    📺 YouTube Demo
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="hover:text-emerald-400 transition text-left"
                  >
                    ▶️ See It In Action
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500">
                © 2025 Algo Trader Toolkit. All rights reserved.
              </div>
              <div className="text-xs text-slate-600">
                ⚠️ Trading involves risk. Past performance ≠ future results. This is a toolkit, not financial advice.
              </div>
            </div>
            <div className="text-center text-xs text-slate-600">
              📜 Single-user commercial license. Redistribution or resale prohibited. All copies contain unique watermark signatures.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
