// server/server.js

const express = require("express");
const morgan = require("morgan");
const winston = require("winston");
const db = require("./db/db"); // Import db connection
const coursesRouter = require("./routes/courses"); // Courses route
const joinRouter = require("./routes/join");

const app = express();
const PORT = process.env.PORT || 3001;

const logger = winston.createLogger({
  level: "http",
  transports: [
    new winston.transports.Console({ level: "error" }),
    new winston.transports.File({ filename: "logfile.log", level: "info" }),
  ],
});

// Existing middleware
app.use(express.json());
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

// Routes
app.use("/api/courses", coursesRouter); // Addthis line for course routes
app.use("/api/join", joinRouter);

app.get("/api/users", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    logger.info("Users retrieved successfully");
    res.json(result.rows);
  } catch (err) {
    logger.error("Database query error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/addresses", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM addresses");
    logger.info("Addresses retrieved successfully");
    res.json(result.rows);
  } catch (err) {
    logger.error("Database query error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/users/:id/registration", async (req, res) => {
  const { id } = req.params;
  try {
    const courseId = req.body.course_id;

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

    console.log(registrationNum, maxCapacity);

    if (maxCapacity > registrationNum) {
      const registerResult = await db.query(
        `INSERT INTO registrations (user_id, course_id)
  VALUES ($1, $2)`,
        [id, courseId]
      );
      logger.info(`User ${id} successfully registered for course ${courseId}`);
      res.json(registerResult);
    } else if (maxCapacity <= registrationNum) {
      logger.info("Max capacity reached for selected course");
      res.json({ error: "Max capacity reached" });
    }
  } catch (err) {
    logger.error("Database query error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
