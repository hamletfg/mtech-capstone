// In routes/register.js
const express = require("express");
const registerRouter = express.Router();
const db = require("../db/db");
const logger = require("../logger");
const { verifyToken } = require("../middleware/auth");

// Register for a course
registerRouter.post("/:courseId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.params;

    // Check if course exists and has capacity
    const courseCheck = await db.query(
      "SELECT maximum_capacity FROM courses WHERE course_id = $1",
      [courseId]
    );

    if (courseCheck.rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Check current registration count
    const currentCount = await db.query(
      "SELECT COUNT(*) FROM registrations WHERE course_id = $1",
      [courseId]
    );

    if (currentCount.rows[0].count >= courseCheck.rows[0].maximum_capacity) {
      return res.status(400).json({ error: "Course is full" });
    }

    // Check if already registered
    const existingReg = await db.query(
      "SELECT * FROM registrations WHERE user_id = $1 AND course_id = $2",
      [userId, courseId]
    );

    if (existingReg.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Already registered for this course" });
    }

    // Register for course
    await db.query(
      "INSERT INTO registrations (user_id, course_id) VALUES ($1, $2)",
      [userId, courseId]
    );

    logger.info(`User ${userId} registered for course ${courseId}`);
    res.status(201).json({ message: "Successfully registered for course" });
  } catch (err) {
    logger.error("Registration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Unregister from a course
registerRouter.delete("/:courseId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.params;

    const result = await db.query(
      "DELETE FROM registrations WHERE user_id = $1 AND course_id = $2",
      [userId, courseId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Registration not found" });
    }

    logger.info(`User ${userId} unregistered from course ${courseId}`);
    res.json({ message: "Successfully unregistered from course" });
  } catch (err) {
    logger.error("Unregistration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = registerRouter;
