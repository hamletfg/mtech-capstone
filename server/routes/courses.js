const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM courses ORDER BY string_id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM course WHERE id = $1', [
      req.params.id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});
