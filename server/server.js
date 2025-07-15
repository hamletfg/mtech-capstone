// server/server.js

const express = require("express");
const morgan = require("morgan");
const winston = require("winston");
const db = require("./db/db"); // Import db connection
const coursesRouter = require("./routes/courses"); // Courses route

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

app.get("/", (req, res) => {
  logger.info("Home page accessed");
  res.send("Hello, Winston and Morgan");
});

// Test route
app.get("/api/test", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM courses");
    logger.info("Courses retrieved successfully");
    res.json(result.rows);
  } catch (err) {
    logger.error("Database querry error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
