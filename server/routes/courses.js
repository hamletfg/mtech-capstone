const express = require('express');
const coursesRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

// Get all courses - any authenticated user can view courses
coursesRouter.get('/', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM courses');
    logger.info('Courses retrieved successfully');
    res.json(rows);
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get specific course - any authenticated user
coursesRouter.get('/:id', verifyToken, async (req, res) => {
  try {
<<<<<<< HEAD
    const { id } = req.params;
    const result = await db.query(
      'SELECT * FROM courses WHERE course_id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
=======
    const { rows } = await db.query(
      "SELECT * FROM courses WHERE course_id = $1",
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
>>>>>>> 390956b3102883f8a8cb4aa86cb305335eb53b41
    }

    logger.info(`Course ${id} retrieved successfully`);
    res.json(result.rows[0]);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = coursesRouter;
