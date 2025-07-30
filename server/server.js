// server/server.js

const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const db = require('./db/db'); // Import db connection
const coursesRouter = require('./routes/courses'); // Courses route
const joinRouter = require('./routes/join');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');
const registrationsRouter = require('./routes/registrations');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

const logger = winston.createLogger({
  level: 'http',
  transports: [
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({ filename: 'logfile.log', level: 'info' }),
  ],
});

// Existing middleware
app.use(express.json());
app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

// Routes
app.use('/api/courses', coursesRouter);
app.use('/api/join', joinRouter);
app.use('/api/login', loginRouter);
app.use('/api/registrations', registrationsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/join', joinRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/registrations', registrationsRouter);

app.get('/api/admin-tools/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    logger.info('Users retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/addresses', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM addresses');
    logger.info('Addresses retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM registrations');
    logger.info('Registrations retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//ENDPOINTS THAT NEED TO BE BROKEN OUT INTO ROUTES

//user can view their enrollments (this goes through users profile)
app.get('/api/registrations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userCourses = await db.query(
      `SELECT * FROM registrations WHERE user_id = $1`,
      [id]
    );
    res.json(userCourses.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//user can drop a specific course (this goes through users profile)
app.delete('/api/registrations/:id/unregister', async (req, res) => {
  const { id } = req.params;
  const courseId = req.body.course_id;
  try {
    const unregisterUser = await db.query(
      `DELETE FROM registrations WHERE user_id = $1 AND course_id = $2`,
      [id, courseId]
    );
    res.json({
      message: `User ${id} unregistered from course ${courseId}`,
      info: unregisterUser,
    });
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//admin user can view everyone registered in a specific course (admin registration viewing)
app.get('/api/admin-tools/registrations/courses', async (req, res) => {
  const courseId = req.body.course_id;
  try {
    const viewStudents = await db.query(
      `SELECT * FROM registrations WHERE course_id = $1`,
      [courseId]
    );
    res.json(viewStudents.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//admin user can remove a student from a course (admin registration viewing)
app.delete('/api/admin-tools/registrations/remove-user', async (req, res) => {
  const userId = req.body.user_id;
  const courseId = req.body.course_id;
  try {
    const removeStudent = await db.query(
      `DELETE FROM registrations WHERE user_id = $1 AND course_id = $2`,
      [userId, courseId]
    );
    res.json({
      message: `Admin removed user ${userId} from course ${courseId}`,
      info: removeStudent,
    });
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
