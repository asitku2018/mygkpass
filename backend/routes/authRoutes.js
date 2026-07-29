const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register / Sign-Up Route
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const queryText = `
      INSERT INTO users (email, password_hash, role, is_verified) 
      VALUES ($1, $2, 'user', false) 
      RETURNING id, email, role, is_verified;
    `;
    const result = await db.query(queryText, [email, passwordHash]);
    const newUser = result.rows[0];

    res.status(201).json({
      message: 'Account created successfully. Please verify your email.',
      user: newUser
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Email address is already registered.' });
    }
    res.status(500).json({ error: 'Internal server error during registration.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Logged in successfully',
      token,
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error during authentication.' });
  }
});

module.exports = router;
