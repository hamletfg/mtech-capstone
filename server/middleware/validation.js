const { body, validationResult } = require('express-validator');

const validateRegistration = [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('firstName').notEmpty().trim().withMessage('First name is required'),
  body('lastName').notEmpty().trim().withMessage('Last name is required'),
  body('telephone').notEmpty().withMessage('Telephone is required'),
  body(['street', 'city', 'state', 'zip_code', 'country'])
    .notEmpty()
    .trim()
    .withMessage('All address fields are required'),
];

// Middleware to check for validation errors
const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegistration,
  checkValidationErrors,
};
