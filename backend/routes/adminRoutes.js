const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { verifyAdmin } = require('../middleware/authMiddleware');

// Admin: Create GK Content & Auto-Generate Quizzes
router.post('/gk', verifyAdmin, async (req, res) => {
  try {
    const { title, category, content, status } = req.body;
    
    // Format JSONB multi-language payload structure
    const titlePayload = { en: title };
    const contentPayload = { en: content };

    const gkResult = await db.query(
      `INSERT INTO gk_content (title, content, category, status) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [JSON.stringify(titlePayload), JSON.stringify(contentPayload), category, status || 'published']
    );

    const newGk = gkResult.rows[0];

    // Automated Quiz Generation Logic based on published content
    const mockGeneratedQuestions = JSON.stringify([
      {
        questionText: `What is the primary significance of: ${title}?`,
        options: [
          'It represents a milestone in the sector.',
          'It has no documented historical relevance.',
          'It applies solely to private entities.',
          'None of the above'
        ],
        correctAnswer: 0,
        explanation: `This development marks a key achievement categorized under ${category}.`
      }
    ]);

    await db.query(
      `INSERT INTO quizzes (gk_id, questions) VALUES ($1, $2);`,
      [newGk.id, mockGeneratedQuestions]
    );

    res.status(201).json({
      message: 'GK article created and quiz successfully auto-generated.',
      article: newGk
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during administrative creation.' });
  }
});

module.exports = router;
