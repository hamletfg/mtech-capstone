const jwt = require('jsonwebtoken');
const logger = require('../logger');

const auth = {
  // Verify JWT token
  verifyToken: (req, res, next) => {
    try {
      // Get token from header
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        return res
          .status(401)
          .json({ error: 'Access denied. No token provided' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      logger.error('JWT verification failed', err);
      res.status(401).json({ error: 'Invalid token' });
    }
  },

  // Verify admin role
  verifyAdmin: (req, res, next) => {
    if (!req.user.isAdmin) {
      return res
        .status(403)
        .json({ error: 'Access denied. Admin rights required' });
    }
    next();
  },

  // Generate JWT token
  generateToken: (user) => {
    return jwt.sign(
      {
        userId: user.user_id,
        email: user.email,
        isAdmin: user.is_admin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );
  },
};

module.exports = auth;
