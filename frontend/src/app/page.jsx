'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
          MygkpasS
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-medium text-sm text-slate-300">
          <Link href="/reader" className="hover:text-pink-400 transition">Read GK</Link>
          <Link href="/quiz" className="hover:text-purple-400 transition">Quizzes</Link>
          <Link href="/admin" className="hover:text-cyan-400 transition">Admin</Link>
          <Link href="/auth/login" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg shadow-pink-500/25 hover:scale-105 transition transform">
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 z-20 shadow-2xl animate-fadeIn">
          <Link href="/reader" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-200 hover:text-pink-400">📖 Read GK</Link>
          <Link href="/quiz" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-200 hover:text-purple-400">🎯 Quizzes</Link>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-200 hover:text-cyan-400">⚡ Admin Panel</Link>
          <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg">
            Sign In
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            India's Premier AI-Powered GK Platform
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight max-w-4xl">
          Master General Knowledge in <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Any Indian Language</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
          Access verified daily GK articles, instantly translate notes into Hindi, Bengali, Telugu, Marathi, and more, and take automated interactive quizzes to ace competitive exams.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link href="/reader" className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:opacity-90 text-white font-extrabold rounded-2xl shadow-xl shadow-purple-500/25 transition transform hover:-translate-y-0.5">
            Start Reading GK
          </Link>
          <Link href="/quiz" className="px-8 py-4 bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-extrabold rounded-2xl transition shadow-lg">
            Take Practice Quiz
          </Link>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full text-left">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/50 transition">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl font-bold mb-4">🌍</div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Lingual AI</h3>
            <p className="text-sm text-slate-400">Instant neural localization across all major Indian languages with zero latency.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/50 transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl font-bold mb-4">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Auto Quiz Engine</h3>
            <p className="text-sm text-slate-400">Dynamic assessment generation complete with scorecard tracking and explanations.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/50 transition">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold mb-4">🛡️</div>
            <h3 className="text-lg font-bold text-white mb-2">Secure & Scalable</h3>
            <p className="text-sm text-slate-400">Protected by Supabase RLS, JWT authentication, and enterprise rate-limiting.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10 mt-28 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p>© 2026 MygkpasS Platform. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
          <a href="/privacy" className="hover:text-pink-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-pink-400 transition">Terms & Conditions</a>
          <a href="/copyright" className="hover:text-pink-400 transition">Copyright</a>
          <a href="/contact" className="hover:text-pink-400 transition">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
