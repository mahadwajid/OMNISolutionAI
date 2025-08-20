const { body, validationResult } = require('express-validator');

// Contact form validation rules
const contactFormValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Company name must be less than 100 characters'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
    .escape()
    .withMessage('Message contains invalid characters'),
  
  body('to')
    .optional()
    .isEmail()
    .withMessage('Recipient email must be valid')
];

// Sanitize and validate input
const sanitizeInput = (req, res, next) => {
  // Remove extra whitespace and trim
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = req.body[key].trim();
    }
  });
  next();
};

// Check validation results
const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  next();
};

// Rate limiting validation
const validateRateLimit = (req, res, next) => {
  // This will be handled by express-rate-limit middleware
  next();
};

// Email format validation
const validateEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation (Pakistani format)
const validatePhoneNumber = (phone) => {
  const phoneRegex = /^(\+92|0)?[0-9]{10}$/;
  return phoneRegex.test(phone);
};

module.exports = {
  contactFormValidation,
  sanitizeInput,
  checkValidationResult,
  validateRateLimit,
  validateEmailFormat,
  validatePhoneNumber
};
