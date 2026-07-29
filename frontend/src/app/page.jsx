'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Handle sticky navbar glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    { q: "Is the platform completely free?", a: "We offer both free daily quizzes and premium mock test series for advanced preparation." },
    { q: "Which languages are supported?", a: "Currently, we support English, Hindi, Bengali, Telugu, Marathi, Tamil, and Gujarati via our AI translation engine." },
    { q: "How often is the GK content updated?", a: "Our expert team updates Current Affairs and GK articles daily at 6:00 AM IST." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
      
      {/* --- STICKY NAVIGATION BAR --- */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">M</span>
            Mygkpas<span className="text-orange-500">S</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <Link href="/reader" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Read GK</Link>
            <Link href="/quiz" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Quizzes</Link>
            <Link href="/leaderboard" className="hover:text-orange-500 transition">Leaderboard</Link>
            <Link href="/auth/login" className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition transform hover:-translate-y-0.5">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>

        {/* Mobile Dropdown (Glassmorphism) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col gap-4">
            <Link href="/reader" className="text-lg font-bold text-slate-700 dark:text-slate-200">Read GK</Link>
            <Link href="/quiz" className="text-lg font-bold text-slate-700 dark:text-slate-200">Quizzes</Link>
            <Link href="/auth/login" className="w-full text-center py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg mt-2">Sign In</Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">New Daily Current Affairs Published</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Master Competitive Exams <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500">Smart Learning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate multi-lingual General Knowledge platform. Read curated articles, take AI-generated quizzes, and track your progress daily.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/quiz" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold shadow-xl shadow-blue-500/30 transition transform hover:-translate-y-1">
              Start Daily Quiz
            </Link>
            <Link href="/reader" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 font-bold shadow-sm transition transform hover:-translate-y-1">
              Read GK Notes
            </Link>
          </div>
        </div>
      </header>

      {/* --- STATISTICS SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row justify-around gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-blue-600 dark:text-blue-400">2.5M+</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Active Students</div>
          </div>
          <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-800"></div>
          <div>
            <div className="text-4xl font-black text-orange-500">50K+</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">GK Questions</div>
          </div>
          <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-800"></div>
          <div>
            <div className="text-4xl font-black text-emerald-500">100%</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Free Access</div>
          </div>
        </div>
      </section>

      {/* --- FEATURED CATEGORIES --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Explore Top Categories</h2>
          <p className="text-slate-600 dark:text-slate-400">Curated subjects to match your exam syllabus.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Cards (Glassmorphism + Material) */}
          {[
            { title: "Current Affairs", color: "blue", icon: "📰" },
            { title: "Indian History", color: "orange", icon: "🏛️" },
            { title: "Science & Tech", color: "emerald", icon: "🚀" },
            { title: "Geography", color: "blue", icon: "🌍" }
          ].map((cat, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${cat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : cat.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-emerald-100 dark:bg-emerald-900/30'}`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{cat.title}</h3>
              <p className="text-sm text-slate-500">500+ Articles & Quizzes</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DAILY QUIZ HIGHLIGHT --- */}
      <section className="bg-emerald-600 dark:bg-emerald-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-bold tracking-wider uppercase mb-4 shadow-sm border border-white/30">🔥 Challenge of the Day</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Test Your Knowledge:<br/>Indian Economy 2026</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-md">20 Questions • 10 Minutes • +50 Points</p>
            <Link href="/quiz/daily" className="px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black shadow-xl hover:scale-105 transition transform inline-block">
              Play Now & Earn Points
            </Link>
          </div>
          <div className="flex-1 w-full max-w-sm bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl transform md:rotate-3">
            <h4 className="font-bold text-slate-800 dark:text-white text-lg mb-4 border-b pb-2 dark:border-slate-700">Live Leaderboard</h4>
            <div className="space-y-4">
              {[
                { name: "Rahul S.", points: 2450, rank: 1 },
                { name: "Priya M.", points: 2310, rank: 2 },
                { name: "Amit K.", points: 2100, rank: 3 }
              ].map((user) => (
                <div key={user.rank} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${user.rank === 1 ? 'bg-orange-500' : 'bg-slate-400'}`}>{user.rank}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{user.name}</span>
                  </div>
                  <span className="font-bold text-emerald-600">{user.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST GK ARTICLES --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">Latest GK Notes</h2>
            <p className="text-slate-600 dark:text-slate-400">Read the most recent updates.</p>
          </div>
          <Link href="/reader" className="hidden sm:inline-block font-bold text-blue-600 hover:text-blue-700">View All →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Polity</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">July 29, 2026</p>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-snug">Important Constitutional Amendments You Must Know</h3>
                <Link href="/reader/article-id" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Read Article</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">Trusted by Aspirants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm text-left relative">
              <div className="text-orange-500 text-4xl font-serif absolute top-4 right-6 opacity-30">"</div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6">"The multi-lingual support is a game-changer. I read complex Science topics in Marathi, which completely cleared my concepts for the State PSC."</p>
              <div className="font-bold text-slate-900 dark:text-white">Sneha J.</div>
              <div className="text-sm text-slate-500">MPSC Aspirant</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm text-left relative">
              <div className="text-blue-500 text-4xl font-serif absolute top-4 right-6 opacity-30">"</div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6">"Automated quizzes right after reading the GK notes help me retain 80% more information. The UI is clean and distraction-free."</p>
              <div className="font-bold text-slate-900 dark:text-white">Vikram S.</div>
              <div className="text-sm text-slate-500">UPSC Aspirant</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-bold flex justify-between items-center focus:outline-none"
              >
                {faq.q}
                <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-4 text-slate-600 dark:text-slate-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER CTA --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl font-black mb-4 relative z-10">Get Daily GK in Your Inbox</h2>
          <p className="mb-8 text-blue-100 relative z-10">Join 50,000+ students receiving top current affairs every morning.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/50" required />
            <button type="submit" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black flex items-center gap-1">
            Mygkpas<span className="text-orange-500">S</span>
          </div>
          <div className="flex gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
          </div>
          <p className="text-sm text-slate-400">© 2026 MygkpasS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
