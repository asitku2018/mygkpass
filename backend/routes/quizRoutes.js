const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all automated quizzes
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM quizzes ORDER BY created_at DESC;');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quizzes.' });
  }
});

module.exports = router;
