const express = require('express');
const joinRouter = express.Router();
const db = require('../db/db');
const bcrypt = require('bcrypt');
const {
  validateRegistration,
  checkValidationErrors,
} = require('../middleware/validation');

const SALT_ROUNDS = 10;

// Registration route with validation middleware
joinRouter.post(
  '/',
  validateRegistration,
  checkValidationErrors,
  async (req, res) => {
    // Get a client from the connection pool
    console.log('endpoint hit');
    const client = await db.pool.connect();

    try {
      // Start transaction
      await client.query('BEGIN');

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

      // 1. Create address first
      const addressResult = await client.query(
        `INSERT INTO addresses (street, city, state, zip_code, country)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING address_id`,
        [
          req.body.street,
          req.body.city,
          req.body.state,
          req.body.zip_code,
          req.body.country,
        ]
      );

      const addressId = addressResult.rows[0].address_id;

      // 2. Create user with returned address_id
      const userResult = await client.query(
        `INSERT INTO users (
        email,
        password,
        first_name,
        last_name,
        telephone,
        is_admin,
        address_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING user_id`,
        [
          req.body.email,
          hashedPassword,
          req.body.firstName,
          req.body.lastName,
          req.body.telephone,
          req.body.isAdmin || false, // Default is_admin to false for new registrations
          addressId,
        ]
      );

      // Commit transaction
      await client.query('COMMIT');

      // Send success response
      res.status(201).json({
        message: 'Registration successful',
        userId: userResult.rows[0].user_id,
        addressId: addressId,
      });
    } catch (err) {
      // Rollback transaction on error
      await client.query('ROLLBACK');
      console.error('Transaction Error:', err);

      // Handle specific error cases
      if (err.constraint === 'users_email_key') {
        res.status(409).json({
          error: 'Email already exists',
        });
      } else {
        res.status(500).json({
          error: 'Registration failed',
          details:
            process.env.NODE_ENV === 'development' ? err.message : undefined,
        });
      }
    } finally {
      // Always release the client back to the pool
      client.release();
    }
  }
);

module.exports = joinRouter;
