# OmniSolveAI Backend

A Node.js backend API for OmniSolveAI with Nodemailer integration for contact form handling.

## 🚀 Features

- **Contact Form API** with Nodemailer email sending
- **Input Validation** with express-validator
- **Rate Limiting** to prevent spam
- **Security Middleware** with Helmet
- **CORS Support** for frontend integration
- **Logging System** with file and console output
- **Email Templates** with HTML formatting
- **Auto-reply** functionality
- **Health Check** endpoint

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Email service account (Gmail, Outlook, or custom SMTP)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```

4. **Configure Environment Variables**
   Edit `.env` file with your email service credentials:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Email Configuration (Gmail)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com

   # Contact Form Configuration
   CONTACT_EMAIL=info@omnisolveai.digital
   ADMIN_EMAIL=admin@omnisolveai.digital

   # Security
   CORS_ORIGIN=http://localhost:3000
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=5
   ```

## 📧 Email Service Setup

### Gmail Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

### Outlook/Hotmail Setup
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Custom SMTP Setup
```env
EMAIL_HOST=smtp.your-domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "Hello, I'm interested in your AI try-on solution.",
  "to": "info@omnisolveai.digital"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. We will get back to you soon!"
}
```

### Contact Configuration
```
GET /api/contact/config
```

## 🔧 Configuration Options

### Rate Limiting
- `RATE_LIMIT_WINDOW_MS`: Time window in milliseconds (default: 15 minutes)
- `RATE_LIMIT_MAX_REQUESTS`: Max requests per window (default: 100)

### CORS
- `CORS_ORIGIN`: Allowed origin for CORS (default: http://localhost:3000)

### Logging
- `LOG_LEVEL`: Log level (error, warn, info, debug)

## 📁 Project Structure

```
Backend/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── env.example           # Environment variables template
├── routes/
│   └── contact.js        # Contact form routes
├── services/
│   └── emailService.js   # Nodemailer service
├── middleware/
│   └── validation.js     # Validation middleware
├── utils/
│   └── logger.js         # Logging utility
└── logs/                 # Log files (auto-created)
```

## 🔒 Security Features

- **Helmet.js** for security headers
- **Rate limiting** to prevent abuse
- **Input validation** and sanitization
- **CORS protection**
- **Request size limits**

## 📧 Email Features

- **HTML Email Templates** with OmniSolveAI branding
- **Auto-reply** to form submitters
- **Reply-to** functionality for direct responses
- **High priority** email headers
- **Timezone support** (Pakistan time)

## 🐛 Troubleshooting

### Email Not Sending
1. Check your email service credentials
2. Verify 2FA is enabled for Gmail
3. Check app password is correct
4. Review server logs for errors

### CORS Issues
1. Verify `CORS_ORIGIN` matches your frontend URL
2. Check if frontend is running on correct port

### Rate Limiting
1. Check `RATE_LIMIT_MAX_REQUESTS` setting
2. Review logs for rate limit violations

## 📝 Logging

Logs are stored in the `logs/` directory with daily rotation:
- `YYYY-MM-DD.log` - Daily log files
- Console output for development
- JSON format for easy parsing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support, contact:
- Email: info@omnisolveai.digital
- Phone: 0300-1016022
- Address: Lahore, Pakistan
