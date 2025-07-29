const express = require("express");
const registerRouter = express.Router();
const db = require("../db/db");
const { verifyToken } = require("../middleware/auth");

registerRouter.post(
  "/api/register/:courseId",
  verifyToken,
  async (req, res) => {
    const { courseId } = req.params;
    try {
      const userId = req.user.userId;

      const capacityReq = await db.query(
        `SELECT maximum_capacity FROM courses 
      WHERE course_id = $1`,
        [courseId]
      );
      const maxCapacity = Number(capacityReq.rows[0].maximum_capacity);

      const registrationReq = await db.query(
        `SELECT COUNT(*) FROM registrations WHERE course_id = $1`,
        [courseId]
      );
      const registrationNum = Number(registrationReq.rows[0].count);

      if (maxCapacity > registrationNum) {
        const registerResult = await db.query(
          `INSERT INTO registrations (user_id, course_id)
        VALUES ($1, $2)`,
          [userId, courseId]
        );
        //logger.info(`User ${id} successfully registered for course ${courseId}`);
        console.log(registrationNum, maxCapacity);
        res.json(registerResult);
      } else if (maxCapacity <= registrationNum) {
        //logger.info("Max capacity reached for selected course");
        res.json({ error: "Max capacity reached" });
      }
    } catch (err) {
      //logger.error("Database query error", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = registerRouter;
