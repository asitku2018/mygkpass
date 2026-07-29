const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { translateContent } = require('../services/aiTranslationService');

// Get published GK articles with search & multi-language AI translation support
router.get('/', async (req, res) => {
  try {
    const { lang = 'en', search = '' } = req.query;
    let queryText = "SELECT * FROM gk_content WHERE status = 'published'";
    let queryParams = [];

    if (search) {
      queryText += " AND (title->>'en' ILIKE $1 OR content->>'en' ILIKE $1)";
      queryParams.push(`%${search}%`);
    }

    queryText += " ORDER BY created_at DESC;";
    const result = await db.query(queryText, queryParams);

    // Apply translation service layer for all Indian languages
    const translatedArticles = await Promise.all(
      result.rows.map(async (article) => {
        return {
          id: article.id,
          category: article.category,
          title: await translateContent(article.title, lang),
          content: await translateContent(article.content, lang),
          created_at: article.created_at
        };
      })
    );

    res.json(translatedArticles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch GK content.' });
  }
});

module.exports = router;
