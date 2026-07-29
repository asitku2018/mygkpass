'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      
      {/* --- STICKY NAVBAR (GLASSMORPHISM) --- */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(217,70,239,0.5)]">M</span>
            Mygkpas<span className="text-cyan-400">S</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
            <Link href="/reader" className="hover:text-fuchsia-400 transition-colors">Read GK</Link>
            <Link href="/quiz" className="hover:text-cyan-400 transition-colors">Quizzes</Link>
            <Link href="/leaderboard" className="hover:text-amber-400 transition-colors">Leaderboard</Link>
            <Link href="/auth/login" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all">
              Sign In
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <Link href="/reader" className="text-lg font-bold text-gray-200">Read GK</Link>
            <Link href="/quiz" className="text-lg font-bold text-gray-200">Quizzes</Link>
            <Link href="/leaderboard" className="text-lg font-bold text-gray-200">Leaderboard</Link>
            <Link href="/auth/login" className="w-full text-center py-3 mt-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-bold shadow-lg">Sign In</Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Colorful Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">New Daily Current Affairs Published</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
            Master Competitive Exams <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Smart Learning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate multi-lingual General Knowledge platform. Read curated articles, take AI-generated quizzes, and track your progress daily.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <Link href="/quiz" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:from-fuchsia-400 hover:to-violet-500 text-white font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1">
              Start Daily Quiz
            </Link>
            <Link href="/reader" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold backdrop-blur-sm transition-all transform hover:-translate-y-1">
              Read GK Notes
            </Link>
          </div>
        </div>
      </header>

      {/* --- STATISTICS (FLOATING GLASS CARDS) --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row justify-around gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-4 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-500">2.5M+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Active Students</div>
          </div>
          <div className="pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-pink-500">50K+</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">GK Questions</div>
          </div>
          <div className="pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-green-500">100%</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Free Access</div>
          </div>
        </div>
      </section>

      {/* --- CATEGORIES --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Explore Top Categories</h2>
          <p className="text-gray-400">Curated subjects to match your exam syllabus.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Current Affairs", count: "500+", icon: "📰", color: "from-blue-500 to-cyan-400" },
            { title: "Indian History", count: "500+", icon: "🏛️", color: "from-orange-500 to-amber-400" },
            { title: "Science & Tech", count: "500+", icon: "🚀", color: "from-violet-500 to-fuchsia-400" },
            { title: "Geography", count: "500+", icon: "🌍", color: "from-emerald-500 to-teal-400" }
          ].map((cat, idx) => (
            <div key={idx} className="group relative bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/5 flex items-center justify-center text-2xl mb-4 backdrop-blur-sm shadow-inner">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{cat.title}</h3>
              <p className="text-sm text-gray-400">{cat.count} Articles & Quizzes</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DAILY CHALLENGE BANNER --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[80px]"></div>
          
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-500/50 rounded-full text-xs font-bold text-amber-300 uppercase tracking-widest mb-6">
              🔥 Challenge of the Day
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Test Your Knowledge:<br/><span className="text-amber-400">Indian Economy 2026</span></h2>
            <p className="text-amber-100/70 text-lg mb-8">20 Questions • 10 Minutes • +50 Points</p>
            <button className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:scale-105">
              Play Now & Earn Points
            </button>
          </div>

          <div className="w-full lg:w-96 bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative z-10 shadow-2xl">
            <h4 className="font-bold text-white text-lg mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
              Live Leaderboard
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </h4>
            <div className="space-y-4">
              {[
                { name: "Rahul S.", points: 2450, rank: 1, color: "text-amber-400", bg: "bg-amber-400/10" },
                { name: "Priya M.", points: 2310, rank: 2, color: "text-gray-300", bg: "bg-white/5" },
                { name: "Amit K.", points: 2100, rank: 3, color: "text-orange-300", bg: "bg-orange-400/10" }
              ].map((user) => (
                <div key={user.rank} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${user.bg} ${user.color}`}>{user.rank}</span>
                    <span className="font-bold text-gray-200">{user.name}</span>
                  </div>
                  <span className={`font-black ${user.color}`}>{user.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST GK NOTES --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Latest GK Notes</h2>
            <p className="text-gray-400">Read the most recent updates.</p>
          </div>
          <Link href="/reader" className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">View All <span className="text-xl">→</span></Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all group">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-cyan-500 text-[#0B0F19] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg z-10">Polity</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">July 29, 2026</p>
                <h3 className="text-xl font-bold mb-4 text-white leading-snug group-hover:text-cyan-300 transition-colors">Important Constitutional Amendments You Must Know</h3>
                <Link href="#" className="inline-flex items-center gap-2 text-sm text-cyan-400 font-bold hover:text-cyan-300">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 skew-y-3 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">Trusted by Aspirants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#0B0F19] border border-white/10 p-8 rounded-3xl shadow-xl relative">
              <div className="text-fuchsia-500/20 text-6xl font-serif absolute top-4 right-6">"</div>
              <p className="text-gray-300 text-lg italic mb-8 relative z-10">"The multi-lingual support is a game-changer. I read complex Science topics in Marathi, which completely cleared my concepts for the State PSC."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500"></div>
                <div>
                  <div className="font-bold text-white">Sneha J.</div>
                  <div className="text-sm text-fuchsia-400">MPSC Aspirant</div>
                </div>
              </div>
            </div>
            <div className="bg-[#0B0F19] border border-white/10 p-8 rounded-3xl shadow-xl relative">
              <div className="text-cyan-500/20 text-6xl font-serif absolute top-4 right-6">"</div>
              <p className="text-gray-300 text-lg italic mb-8 relative z-10">"Automated quizzes right after reading the GK notes help me retain 80% more information. The UI is clean and distraction-free."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                <div>
                  <div className="font-bold text-white">Vikram S.</div>
                  <div className="text-sm text-cyan-400">UPSC Aspirant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-bold text-lg flex justify-between items-center focus:outline-none"
              >
                {faq.q}
                <span className={`text-cyan-400 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_0_50px_rgba(139,92,246,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white relative z-10">Get Daily GK in Your Inbox</h2>
          <p className="mb-10 text-fuchsia-100 text-lg relative z-10">Join 50,000+ students receiving top current affairs every morning.</p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md" required />
            <button type="submit" className="px-8 py-4 bg-white text-violet-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform">Subscribe</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-[#0B0F19] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black flex items-center gap-1">
            Mygkpas<span className="text-cyan-400">S</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <p className="text-sm text-gray-500 font-medium">© 2026 MygkpasS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
