// server/server.js

const express = require("express");
const morgan = require("morgan");
const winston = require("winston");

const PORT = process.env.PORT || 3001;

const app = express();

const logger = winston.createLogger({
  level: "http",
  transports: [
    new winston.transports.Console({ level: "error" }),
    new winston.transports.File({ filename: "logfile.log", level: "info" }),
  ],
});

app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

app.get("/", (req, res) => {
  logger.info("Home page accessed");
  res.send("Hello, Winston and Morgan");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
