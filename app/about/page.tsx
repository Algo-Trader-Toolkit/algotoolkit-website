"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Code,
  Shield,
  Clock,
  Target,
  Users,
  Zap,
  ArrowRight,
  Mail,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
                href="https://algotoolkit.lemonsqueezy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built by a Trader, <span className="text-emerald-400">For Traders</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              After years of building trading systems professionally, I created the toolkit I wish I had when I started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-emerald-400" />
              The Story Behind the Toolkit
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I spent <strong className="text-white">5+ years</strong> as a quantitative developer, building algorithmic trading systems for myself and others. Every time I started a new strategy, I found myself rewriting the same components: backtesting engines, pattern recognition, risk management, exchange integrations.
              </p>
              <p>
                It was frustrating. <strong className="text-white">80% of the work was infrastructure, only 20% was actual strategy development.</strong>
              </p>
              <p>
                So I built a comprehensive toolkit that handles all the boring parts. Now when I have a new trading idea, I can test it in hours instead of weeks. The backtesting is accurate (with real fees, slippage, and execution delays). The live trading engine is battle-tested.
              </p>
              <p>
                I decided to package this toolkit and offer it to other developers and traders who face the same challenges I did. <strong className="text-white">This isn't a course or a "get rich quick" scheme.</strong> It's professional-grade code that you can use, modify, and build upon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values / What I Believe */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">What I Believe In</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Honest Marketing",
                description: "No fake income screenshots. No unrealistic promises. Trading is hard, and this toolkit makes it easier—not guaranteed profitable."
              },
              {
                icon: Code,
                title: "Code Quality Matters",
                description: "Every function is documented. Every module is tested. You're buying production-ready code, not a messy Jupyter notebook."
              },
              {
                icon: Target,
                title: "Education Over Hype",
                description: "The 160+ pages of documentation teach you WHY things work, not just how to run them. Understanding beats blind copying."
              },
              {
                icon: Users,
                title: "Real Support",
                description: "Questions get answered. Bugs get fixed. You're not buying abandoned code—you're joining an actively maintained project."
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-6"
              >
                <value.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Technical Background</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-slate-400">Years in Algo Trading</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
                <div className="text-slate-400">Lines of Code</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-slate-400">Hours of Development</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Python", "Machine Learning", "Technical Analysis", "Bybit API", "Risk Management", "Backtesting"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-slate-400 mb-6">
            I personally respond to every email. Don't hesitate to reach out.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            <Mail className="w-5 h-5" />
            Send a Message
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Trading Bot?</h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Join 450+ traders who've accelerated their algo trading journey with this toolkit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-6 py-3 rounded-xl transition"
              >
                See All Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          © 2024 Algo Trader Toolkit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
