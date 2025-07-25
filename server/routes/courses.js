const express = require("express");
const coursesRouter = express.Router();
const db = require("../db/db");

// Get all courses
coursesRouter.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM courses ORDER BY course_id");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// Get course by ID
coursesRouter.get("/:id", async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM courses WHERE course_id = $1",
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch course" });
  }
});

module.exports = coursesRouter;
