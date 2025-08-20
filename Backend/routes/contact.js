const express = require('express');
const { body, validationResult } = require('express-validator');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();

// Validation middleware
const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
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
    .isLength({ min: 3, max: 2000 })
    .withMessage('Message must be between 3 and 2000 characters'),
  
  body('to')
    .optional()
    .isEmail()
    .withMessage('Recipient email must be valid')
];

// Contact form endpoint
router.post('/', validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, company, message, to } = req.body;

    // Send email
    await sendContactEmail({
      name,
      email,
      company: company || 'Not provided',
      message,
      to: to || process.env.CONTACT_EMAIL
    });

    // Log successful submission
    console.log(`✅ Contact form submitted by ${name} (${email})`);

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    res.status(500).json({
      error: 'Failed to send contact form',
      message: 'Please try again later or contact us directly.'
    });
  }
});

// Get contact form configuration (for frontend)
router.get('/config', (req, res) => {
  res.json({
    contactEmail: process.env.CONTACT_EMAIL,
    maxMessageLength: 2000,
    allowedFields: ['name', 'email', 'company', 'message']
  });
});

module.exports = router;
