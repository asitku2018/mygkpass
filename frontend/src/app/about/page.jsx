'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <Link href="/" className="text-xl font-black text-blue-600 tracking-tight">MygkpasS</Link>
        <div className="flex gap-4 items-center font-medium text-sm">
          <Link href="/reader" className="hover:text-blue-600 transition">Read GK</Link>
          <Link href="/quiz" className="hover:text-blue-600 transition">Quizzes</Link>
          <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Sign In</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <span className="bg-blue-100 text-blue-800 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
          About MygkpasS
        </span>
        <h1 className="text-4xl font-black tracking-tight leading-tight text-gray-900">
          Empowering Aspirants Across India with Multi-Lingual General Knowledge
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          MygkpasS is engineered to bridge the educational gap by providing precise, curated, and up-to-date General Knowledge content. Designed for civil services, banking, railways, and university entrance aspirants, our platform removes language barriers through seamless AI-powered Indian language localization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">🌐 Universal Indian Languages</h3>
            <p className="text-sm text-gray-600">Read and study in Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, and English with zero manual latency.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">⚡ Automated Quiz Engine</h3>
            <p className="text-sm text-gray-600">Every published GK article immediately generates high-yield multiple-choice questions with answer explanations.</p>
          </div>
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
