const { body, validationResult } = require('express-validator');

const validateRegistration = [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('firstName').notEmpty().trim().withMessage('First name is required'),
  body('lastName').notEmpty().trim().withMessage('Last name is required'),
  body('telephone').notEmpty().withMessage('Telephone is required'),
  body('street').notEmpty().trim().withMessage('Street is required'),
  body('city').notEmpty().trim().withMessage('City is required'),
  body('state').notEmpty().trim().withMessage('State is required'),
  body('zip_code').notEmpty().trim().withMessage('Zip code is required'),
  body('country').notEmpty().trim().withMessage('Country is required'),
  body('isAdmin')
    .optional()
    .isBoolean()
    .withMessage('isAdmin must be a boolean value'),
];

const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
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
  validateLogin,
  checkValidationErrors,
};
