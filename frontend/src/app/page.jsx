'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "Is the platform completely free?", a: "Yes! Daily quizzes and GK articles are 100% free forever." },
    { q: "Which languages are supported?", a: "English, Hindi, Bengali, Telugu, Marathi, Tamil, and Gujarati." },
    { q: "How often is the GK content updated?", a: "New Current Affairs and GK notes drop daily at 6:00 AM IST." }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-black font-sans selection:bg-yellow-300">
      
      {/* --- NEO-BRUTALIST NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
            <span className="w-10 h-10 bg-yellow-400 border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">M</span>
            Mygkpas<span className="text-blue-600">S</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-black text-sm uppercase tracking-wide">
            <Link href="/reader" className="hover:underline decoration-4 underline-offset-4 decoration-blue-500">Read GK</Link>
            <Link href="/quiz" className="hover:underline decoration-4 underline-offset-4 decoration-red-500">Quizzes</Link>
            <Link href="/leaderboard" className="hover:underline decoration-4 underline-offset-4 decoration-green-500">Leaderboard</Link>
          </div>

          <div className="hidden md:block">
            <Link href="/auth/login" className="px-6 py-2 bg-blue-500 text-white font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
              Sign In
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black">
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-black bg-white flex flex-col font-black uppercase">
            <Link href="/reader" className="p-4 border-b-2 border-black hover:bg-yellow-200">Read GK</Link>
            <Link href="/quiz" className="p-4 border-b-2 border-black hover:bg-red-200">Quizzes</Link>
            <Link href="/leaderboard" className="p-4 border-b-2 border-black hover:bg-green-200">Leaderboard</Link>
            <Link href="/auth/login" className="p-4 bg-blue-500 text-white hover:bg-blue-600">Sign In</Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-16 text-center lg:text-left relative overflow-hidden">
          
          <div className="inline-block px-4 py-2 bg-yellow-400 border-2 border-black font-black uppercase text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
            🚨 New Daily Current Affairs
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-6">
            Ace Exams. <br/> <span className="bg-blue-500 text-white px-2">No Stress.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl border-l-4 border-black pl-4">
            Read AI-translated GK articles in 7 languages, generate instant practice quizzes, and dominate the leaderboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/quiz" className="px-8 py-4 bg-red-500 text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all text-center">
              Start Free Quiz
            </Link>
            <Link href="/reader" className="px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all text-center">
              Read GK Notes
            </Link>
          </div>
        </div>
      </header>

      {/* --- STATS GRID --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2.5M", label: "Students", color: "bg-yellow-400" },
            { value: "50K+", label: "Questions", color: "bg-blue-400" },
            { value: "7", label: "Languages", color: "bg-red-400" },
            { value: "100%", label: "Free", color: "bg-green-400" }
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.color} border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}>
              <div className="text-4xl md:text-5xl font-black">{stat.value}</div>
              <div className="text-sm font-bold uppercase mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EXPLORE TOPICS --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase border-b-8 border-yellow-400 inline-block">Explore Subjects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Current Affairs", icon: "📰", bg: "bg-white" },
            { title: "Indian History", icon: "🏛️", bg: "bg-white" },
            { title: "Science & Tech", icon: "🚀", bg: "bg-white" },
            { title: "Geography", icon: "🌍", bg: "bg-white" }
          ].map((cat, idx) => (
            <div key={idx} className={`${cat.bg} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all cursor-pointer`}>
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-black uppercase leading-tight">{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- DAILY CHALLENGE --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-500 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center">
          
          <div className="flex-1 text-white">
            <div className="inline-block px-3 py-1 bg-black text-white font-black uppercase text-sm mb-4 rotate-2">
              🔥 Challenge of the Day
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-black">
              Indian Economy 2026
            </h2>
            <p className="text-xl font-bold mb-8">20 Questions • 10 Minutes • +50 Points</p>
            <button className="px-8 py-4 bg-yellow-400 text-black font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              Play Now & Earn Points
            </button>
          </div>

          <div className="w-full lg:w-96 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
            <h4 className="font-black uppercase text-xl mb-4 border-b-4 border-black pb-2">Live Leaderboard</h4>
            <div className="space-y-3">
              {[
                { name: "Rahul S.", points: 2450, rank: "1ST", color: "bg-yellow-400" },
                { name: "Priya M.", points: 2310, rank: "2ND", color: "bg-gray-300" },
                { name: "Amit K.", points: 2100, rank: "3RD", color: "bg-orange-400" }
              ].map((user) => (
                <div key={user.rank} className="flex justify-between items-center border-2 border-black p-3">
                  <div className="flex items-center gap-3">
                    <span className={`${user.color} px-2 py-1 border-2 border-black font-black text-sm`}>{user.rank}</span>
                    <span className="font-bold">{user.name}</span>
                  </div>
                  <span className="font-black">{user.points}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black uppercase text-center mb-10">Got Questions?</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-black uppercase text-lg flex justify-between items-center"
              >
                {faq.q}
                <span className="text-2xl">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-4 font-bold text-lg border-t-2 border-black pt-4 bg-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white py-12 border-t-8 border-yellow-400 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-2xl font-black uppercase">
            Mygkpas<span className="text-yellow-400">S</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-bold uppercase text-sm">
            <Link href="/privacy" className="hover:text-yellow-400 underline decoration-2 underline-offset-4">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-400 underline decoration-2 underline-offset-4">Terms</Link>
            <Link href="/contact" className="hover:text-red-400 underline decoration-2 underline-offset-4">Contact</Link>
          </div>
          <p className="font-bold text-sm text-gray-400">© 2026 MYGKPASS.</p>
        </div>
      </footer>

    </div>
  );
}
