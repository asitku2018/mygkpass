'use client';
import { useState } from 'react';

export default function AdminDashboardPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('published');
  const [successMsg, setSuccessMsg] = useState('');

  const handlePublish = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/gk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, content, status })
    });
    if (res.ok) {
      setSuccessMsg('✅ GK Article published & auto-quiz generated successfully!');
      setTitle('');
      setCategory('');
      setContent('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 border">
        <h1 className="text-2xl font-black text-gray-900 mb-6">⚡ MygkpasS Admin Command Center</h1>
        
        {successMsg && <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm font-medium">{successMsg}</div>}

        <form onSubmit={handlePublish} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Article Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g., Overview of Indian Space Missions (Chandrayaan-4)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g., Science & Tech"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Publication Status</label>
              <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Article Body Content (HTML / Markdown supported)</label>
            <textarea 
              rows="6" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm"
              placeholder="<p>Write detailed GK notes here...</p>"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Publish Content & Trigger Auto-Quiz Engine
          </button>
        </form>
      </div>
    </div>
  );
}
