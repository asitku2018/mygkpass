'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navigation bar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    { q: "Is the platform completely free?", a: "Yes! We offer free daily quizzes and GK articles. Premium mock tests are available for advanced preparation." },
    { q: "Which languages are supported?", a: "We support English, Hindi, Bengali, Telugu, Marathi, Tamil, and Gujarati via our instant AI translation engine." },
    { q: "How often is the GK content updated?", a: "Our expert team publishes new Current Affairs and GK articles daily at 6:00 AM IST." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden relative">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-rose-300/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- FLOATING PILL NAVBAR --- */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4">
        <nav className={`max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white rounded-full transition-all duration-300 flex justify-between items-center px-6 py-3 ${scrolled ? 'shadow-xl shadow-indigo-100/50' : 'shadow-sm'}`}>
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-800 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg">M</span>
            Mygkpas<span className="text-indigo-600">S</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            <Link href="/reader" className="hover:text-indigo-600 transition-colors">Read GK</Link>
            <Link href="/quiz" className="hover:text-rose-500 transition-colors">Quizzes</Link>
            <Link href="/leaderboard" className="hover:text-emerald-500 transition-colors">Leaderboard</Link>
          </div>

          <div className="hidden md:block">
            <Link href="/auth/login" className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-md transition-transform hover:scale-105 active:scale-95">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-700 focus:outline-none p-2 bg-slate-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-3xl border border-slate-100 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden animate-in fade-in zoom-in-95">
          <Link href="/reader" className="text-xl font-black text-slate-800 hover:text-indigo-600">📖 Read GK</Link>
          <Link href="/quiz" className="text-xl font-black text-slate-800 hover:text-rose-500">🎯 Quizzes</Link>
          <Link href="/leaderboard" className="text-xl font-black text-slate-800 hover:text-emerald-500">🏆 Leaderboard</Link>
          <hr className="border-slate-100 my-2" />
          <Link href="/auth/login" className="w-full text-center py-4 rounded-2xl bg-slate-900 text-white font-bold text-lg">Sign In</Link>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <header className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white shadow-sm mb-8 animate-bounce-slow">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-700 tracking-wide">Daily Current Affairs Live</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 mb-6">
            Acing Exams Just Got <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-500">Incredibly Simple.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Read AI-translated GK articles in 7 Indian languages, instantly generate practice quizzes, and climb the live leaderboards.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link href="/quiz" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-lg shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 transition-all transform hover:-translate-y-1">
              Start Free Quiz
            </Link>
            <Link href="/reader" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-black text-lg shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-all transform hover:-translate-y-1">
              Read GK Notes
            </Link>
          </div>
        </div>
      </header>

      {/* --- BENTO BOX STATISTICS --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-lg shadow-slate-200/50 text-center hover:scale-105 transition-transform cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-indigo-600 mb-1">2.5M</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Students</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-lg shadow-slate-200/50 text-center hover:scale-105 transition-transform cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-rose-500 mb-1">50K+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Questions</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-lg shadow-slate-200/50 text-center hover:scale-105 transition-transform cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-emerald-500 mb-1">7</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Languages</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-lg shadow-slate-200/50 text-center hover:scale-105 transition-transform cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Free</div>
          </div>
        </div>
      </section>

      {/* --- EXPLORE TOPICS (VIBRANT CARDS) --- */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">Explore Subjects</h2>
          <p className="text-slate-500 font-medium text-lg">Curated syllabus for UPSC, Banking, and State PSCs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Current Affairs", count: "Daily Updates", icon: "📰", bg: "bg-blue-100", text: "text-blue-600" },
            { title: "Indian History", count: "Ancient to Modern", icon: "🏛️", bg: "bg-amber-100", text: "text-amber-600" },
            { title: "Science & Tech", count: "Space & IT", icon: "🚀", bg: "bg-purple-100", text: "text-purple-600" },
            { title: "Geography", count: "World & India", icon: "🌍", bg: "bg-emerald-100", text: "text-emerald-600" }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-12 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className={`text-2xl font-black mb-1 ${cat.text}`}>{cat.title}</h3>
              <p className="text-sm font-bold text-slate-400">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DAILY CHALLENGE COMPONENT --- */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
          {/* Abstract Glow inside Dark Card */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-rose-500/30 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex-1 relative z-10 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-rose-500/20 border border-rose-500/50 rounded-full text-xs font-bold text-rose-400 uppercase tracking-widest mb-6">
              🔥 Challenge of the Day
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Test Your Knowledge: <br/> <span className="text-rose-400">Indian Economy 2026</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 font-medium">20 Questions • 10 Minutes • +50 Leaderboard Points</p>
            <button className="px-8 py-4 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-black shadow-lg shadow-rose-500/30 transition-transform transform hover:scale-105">
              Play Now & Earn Points
            </button>
          </div>

          <div className="w-full lg:w-96 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 relative z-10 shadow-2xl">
            <h4 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
              Live Leaderboard <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            </h4>
            <div className="space-y-3">
              {[
                { name: "Rahul S.", points: 2450, rank: 1, icon: "🥇" },
                { name: "Priya M.", points: 2310, rank: 2, icon: "🥈" },
                { name: "Amit K.", points: 2100, rank: 3, icon: "🥉" }
              ].map((user) => (
                <div key={user.rank} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{user.icon}</span>
                    <span className="font-bold text-white text-lg">{user.name}</span>
                  </div>
                  <span className="font-black text-rose-400">{user.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST GK NOTES (MINIMAL CARDS) --- */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2">Latest GK Notes</h2>
            <p className="text-slate-500 font-medium text-lg">Freshly published by experts.</p>
          </div>
          <Link href="/reader" className="hidden sm:inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full transition-colors">
            View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "Polity", color: "bg-blue-500", date: "July 29, 2026", title: "Important Constitutional Amendments You Must Know" },
            { tag: "Science", color: "bg-emerald-500", date: "July 28, 2026", title: "Chandrayaan-4: ISRO's Next Lunar Sample Mission" },
            { tag: "Economy", color: "bg-amber-500", date: "July 27, 2026", title: "Key Highlights of the Union Budget 2026-27" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-xl shadow-slate-200/30 hover:border-indigo-300 hover:shadow-2xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`${item.color} text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm`}>{item.tag}</span>
                  <span className="text-xs font-bold text-slate-400">{item.date}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 leading-snug mb-6 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-indigo-600">
                Read Article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ ACCORDION --- */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-10 tracking-tight">Got Questions?</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-6 text-left font-black text-lg text-slate-800 flex justify-between items-center focus:outline-none"
              >
                {faq.q}
                <span className={`w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border border-white rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-indigo-200/50 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Stay Ahead of the Curve</h2>
          <p className="mb-10 text-slate-600 text-lg font-medium">Join 50,000+ students receiving top current affairs in their inbox daily.</p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full bg-white border-2 border-white shadow-sm text-slate-900 font-medium focus:outline-none focus:border-indigo-300" required />
            <button type="submit" className="px-8 py-4 bg-slate-900 text-white font-black rounded-full shadow-lg hover:bg-indigo-600 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-2xl font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
            Mygkpas<span className="text-indigo-600">S</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
          </div>
          <p className="text-sm text-slate-400 font-bold">© 2026 MygkpasS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
