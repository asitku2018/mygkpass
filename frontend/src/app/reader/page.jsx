'use client';
import { useState, useEffect } from 'react';

const INDIAN_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi (हिंदी)' },
  { code: 'bn', name: 'Bengali (বাংলা)' },
  { code: 'te', name: 'Telugu (తెలుగు)' },
  { code: 'mr', name: 'Marathi (मराठी)' },
  { code: 'ta', name: 'Tamil (தமிழ்)' },
  { code: 'gu', name: 'Gujarati (ગુજરાતી)' }
];

export default function GKReaderPage() {
  const [articles, setArticles] = useState([]);
  const [selectedLang, setSelectedLang] = useState('en');
  const [fontSize, setFontSize] = useState('text-base');
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`/api/gk?lang=${selectedLang}&search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setArticles(data));
  }, [selectedLang, searchTerm]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className="p-4 border-b flex flex-wrap justify-between items-center gap-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">📖 MygkpasS Reader</h1>
        
        {/* Controls Toolbar */}
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search GK topics..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 rounded border text-sm bg-transparent"
          />
          <select 
            value={selectedLang} 
            onChange={(e) => setSelectedLang(e.target.value)}
            className="px-3 py-1.5 rounded border text-sm bg-transparent"
          >
            {INDIAN_LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code} className="bg-white text-black">{lang.name}</option>
            ))}
          </select>
          <select 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value)}
            className="px-3 py-1.5 rounded border text-sm bg-transparent"
          >
            <option value="text-sm" className="bg-white text-black">Small</option>
            <option value="text-base" className="bg-white text-black">Medium</option>
            <option value="text-lg" className="bg-white text-black">Large</option>
            <option value="text-xl" className="bg-white text-black">Extra Large</option>
          </select>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1.5 rounded border text-sm font-medium"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        {articles.map((article) => (
          <article key={article.id} className={`p-6 rounded-xl border shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">{article.category}</span>
            <h2 className={`font-bold mt-1 mb-3 ${fontSize}`}>{article.title}</h2>
            <div className={`leading-relaxed ${fontSize} opacity-90`} dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        ))}
      </main>
    </div>
  );
}
