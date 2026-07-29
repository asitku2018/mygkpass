'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="text-xl font-black text-blue-600 tracking-tight">MygkpasS</div>
        <div className="flex gap-4 items-center font-medium text-sm">
          <Link href="/reader" className="hover:text-blue-600 transition">Read GK</Link>
          <Link href="/quiz" className="hover:text-blue-600 transition">Quizzes</Link>
          <Link href="/admin" className="hover:text-blue-600 transition">Admin</Link>
          <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Sign In</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="bg-blue-100 text-blue-800 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
          India's Premier AI-Powered GK Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-6 tracking-tight leading-tight">
          Master General Knowledge in <span className="text-blue-600">Any Indian Language</span>
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Access verified daily GK articles, instantly translate notes into Hindi, Bengali, Telugu, Marathi, and more, and take automated interactive quizzes to ace competitive exams.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/reader" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 transition">
            Start Reading GK
          </Link>
          <Link href="/quiz" className="px-8 py-4 bg-white border border-gray-300 hover:bg-gray-50 font-bold rounded-2xl transition">
            Take Practice Quiz
          </Link>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 mt-20 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 MygkpasS Platform. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/copyright" className="hover:underline">Copyright</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
