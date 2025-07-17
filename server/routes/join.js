const express = require('express');
const joinRouter = express.Router();
const db = require('../db/db');

// Get all courses
joinRouter.post('/', async (req, res) => {
  try {
    const { street, city, state, zip_code, country } = req.body;

    const result = await db.query(
      `INSERT INTO addresses (street, city, state, zip_code, country) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING address_id`,
      [street, city, state, zip_code, country]
    );

    const addressId = result.rows[0].address_id;
    //insert new user with returned address_id
    res.json(addressId);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch addresses' });
  }
});

module.exports = joinRouter;
