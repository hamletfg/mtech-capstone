const express = require('express');
const adminUsersRouter = express.Router();
const db = require('../../db/db');
const logger = require('../../logger');
const { verifyToken, verifyAdmin } = require('../../middleware/auth');

// Get all users
adminUsersRouter.get('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const result = await db.query(`
      SELECT u.*, a.street, a.city, a.state, a.zip_code, a.country 
      FROM users u
      JOIN addresses a ON u.address_id = a.address_id
    `);
    logger.info('Admin retrieved all users');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new user
adminUsersRouter.post('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      telephone,
      street,
      city,
      state,
      zipCode,
      country,
      isAdmin,
    } = req.body;

    // First create address
    const addressResult = await db.query(
      `INSERT INTO addresses (street, city, state, zip_code, country)
       VALUES ($1, $2, $3, $4, $5) RETURNING address_id`,
      [street, city, state, zipCode, country]
    );

    // Then create user
    const userResult = await db.query(
      `INSERT INTO users (email, password, first_name, last_name, telephone, is_admin, address_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING user_id`,
      [
        email,
        password,
        firstName,
        lastName,
        telephone,
        isAdmin,
        addressResult.rows[0].address_id,
      ]
    );

    logger.info(
      `Admin created new user with ID: ${userResult.rows[0].user_id}`
    );
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user
adminUsersRouter.put('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      email,
      firstName,
      lastName,
      telephone,
      street,
      city,
      state,
      zipCode,
      country,
      isAdmin,
    } = req.body;

    // Update address
    await db.query(
      `UPDATE addresses SET street = $1, city = $2, state = $3, zip_code = $4, country = $5
       WHERE address_id = (SELECT address_id FROM users WHERE user_id = $6)`,
      [street, city, state, zipCode, country, id]
    );

    // Update user
    await db.query(
      `UPDATE users SET email = $1, first_name = $2, last_name = $3, 
       telephone = $4, is_admin = $5 WHERE user_id = $6`,
      [email, firstName, lastName, telephone, isAdmin, id]
    );

    logger.info(`Admin updated user ID: ${id}`);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete user
adminUsersRouter.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // First delete from registrations
    await db.query('DELETE FROM registrations WHERE user_id = $1', [id]);

    // Get address_id before deleting user
    const addressResult = await db.query(
      'SELECT address_id FROM users WHERE user_id = $1',
      [id]
    );

    // Delete user
    await db.query('DELETE FROM users WHERE user_id = $1', [id]);

    // Delete address
    if (addressResult.rows.length > 0) {
      await db.query('DELETE FROM addresses WHERE address_id = $1', [
        addressResult.rows[0].address_id,
      ]);
    }

    logger.info(`Admin deleted user ID: ${id}`);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = adminUsersRouter;
