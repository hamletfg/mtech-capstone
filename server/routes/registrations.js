const express = require('express');
const registrationsRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

// Protected route to get user's registrations
registrationsRouter.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from verified token

    const result = await db.query(
      'SELECT * FROM registrations WHERE user_id = $1',
      [userId]
    );

    logger.info(`Registrations retrieved successfully for user ${userId}`);
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = registrationsRouter;
