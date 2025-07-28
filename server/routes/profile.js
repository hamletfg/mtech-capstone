const express = require('express');
const profileRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

profileRouter.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const userQuery = `
      SELECT 
        u.user_id,
        u.email,
        u.first_name,
        u.last_name,
        u.telephone,
        a.street,
        a.city,
        a.state,
        a.zip_code,
        a.country
      FROM users u
      JOIN addresses a ON u.address_id = a.address_id
      WHERE u.user_id = $1
    `;

    const coursesQuery = `
      SELECT 
        c.course_id,
        c.title,
        c.description,
        c.schedule,
        c.classroom_number,
        c.credit_hours,
        r.registered_at
      FROM registrations r
      JOIN courses c ON r.course_id = c.course_id
      WHERE r.user_id = $1
    `;

    // Get user info first
    const userResult = await db.query(userQuery, [userId]);

    if (userResult.rows.length === 0) {
      logger.error(`No user found with ID ${userId}`);
      return res.status(404).json({ error: 'User not found' });
    }

    // Get courses if user exists
    const coursesResult = await db.query(coursesQuery, [userId]);

    // Combine user info with courses (even if no courses found)
    const profile = {
      ...userResult.rows[0],
      registeredCourses: coursesResult.rows, // Will be empty array if no courses
    };

    logger.info(`Profile retrieved successfully for user ${userId}`);
    res.json(profile);
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = profileRouter;
