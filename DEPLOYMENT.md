# Vercel Deployment Guide

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Have a Vercel account (sign up at vercel.com)

## Deployment Options

### Option 1: Deploy Both Frontend and Backend Together (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from the root directory:**
   ```bash
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard:**
   - Go to your project dashboard on Vercel
   - Navigate to Settings > Environment Variables
   - Add the following variables:
     ```
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_FROM=your-email@gmail.com
     CONTACT_EMAIL=your-email@gmail.com
     ADMIN_EMAIL=your-email@gmail.com
     CORS_ORIGIN=https://your-domain.vercel.app
     RATE_LIMIT_WINDOW_MS=900000
     RATE_LIMIT_MAX_REQUESTS=5
     LOG_LEVEL=info
     ```

### Option 2: Deploy Frontend and Backend Separately

#### Deploy Backend First:
1. Navigate to Backend directory:
   ```bash
   cd Backend
   ```

2. Deploy backend:
   ```bash
   vercel
   ```

3. Note the backend URL (e.g., `https://your-backend.vercel.app`)

#### Deploy Frontend:
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Update API base URL in your frontend code to point to your backend URL

3. Deploy frontend:
   ```bash
   vercel
   ```

## Environment Variables Setup

### For Gmail (Recommended):
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
3. Use the generated password as `EMAIL_PASS`

### For Custom SMTP:
```
EMAIL_HOST=smtp.your-domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
```

## Important Notes

1. **CORS Configuration**: Update `CORS_ORIGIN` in environment variables to match your frontend domain
2. **Email Service**: Make sure your email service credentials are correctly set
3. **Rate Limiting**: Adjust rate limiting settings as needed for production
4. **Build Process**: The frontend will automatically build during deployment

## Troubleshooting

1. **Build Errors**: Check that all dependencies are properly listed in package.json
2. **Environment Variables**: Ensure all required environment variables are set in Vercel dashboard
3. **CORS Issues**: Verify CORS_ORIGIN is set to your frontend domain
4. **Email Issues**: Check email service credentials and app passwords

## Post-Deployment

1. Test your contact form functionality
2. Verify email sending works correctly
3. Check all routes are accessible
4. Monitor logs in Vercel dashboard for any issues

## Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Update CORS_ORIGIN to match your custom domain
