const express = require("express");
const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const loginRouter = express.Router();
const db = require("../db/db");
const logger = require("../logger");
const { generateToken } = require("../middleware/auth");

loginRouter.post(
  "/login",
  [body("email").isEmail().normalizeEmail(), body("password").notEmpty()],
  async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);

      const user = result.rows[0];

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = generateToken(user);

      // Send response with token
      res.json({
        token,
        user: {
          id: user.user_id,
          email: user.email,
          isAdmin: user.is_admin,
        },
      });
    } catch (err) {
      logger.error("Login error:", err);
      res.status(500).json({ error: "Internal server error" });
      logger.error("Login error:", err);
      res.status(500).json({ error: "Internal server error" });
    }

    const { email, password } = req.body;

    // Find user
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Send response with token
    res.json({
      token,
      user: {
        id: user.user_id,
        email: user.email,
        isAdmin: user.is_admin,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });
  }
);

module.exports = loginRouter;
