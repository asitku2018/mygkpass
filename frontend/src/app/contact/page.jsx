'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Contact Us</h1>
        <p className="text-sm text-gray-500 mb-8">Have feedback, partnership inquiries, or need support? Reach out to our team.</p>

        {submitted ? (
          <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-2xl font-medium">
            ✅ Thank you for contacting MygkpasS. Our support team will get back to you within 24 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Aarav Sharma" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="aarav@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea rows="5" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-md shadow-blue-500/20">
              Send Message
            </button>
          </form>
        )}
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
