const nodemailer = require('nodemailer');

// Create transporter based on environment configuration
const createTransporter = () => {
  // For Gmail/Outlook services
  if (process.env.EMAIL_SERVICE) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  // For custom SMTP
  if (process.env.EMAIL_HOST) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  // Fallback for development (Ethereal email for testing)
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'test@ethereal.email',
      pass: 'test123'
    }
  });
};

// Email templates
const createContactEmailTemplate = ({ name, email, company, message }) => {
  const currentDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission - OmniSolveAI</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0B3D91, #6C63FF); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0B3D91; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #6C63FF; }
        .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p>OmniSolveAI - AI-Powered Virtual Try-On</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">🏢 Company:</div>
            <div class="value">${company}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="field">
            <div class="label">📅 Submitted:</div>
            <div class="value">${currentDate} (PKT)</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the OmniSolveAI contact form.</p>
          <p>📍 Lahore, Pakistan | 📞 0300-1016022 | 📧 info@omnisolveai.digital</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send contact form email
const sendContactEmail = async ({ name, email, company, message, to }) => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');

    const mailOptions = {
      from: `"OmniSolveAI Contact Form" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: to,
      subject: `New Contact Form: ${name} from ${company}`,
      html: createContactEmailTemplate({ name, email, company, message }),
      replyTo: email, // Allow direct reply to the sender
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully');
    console.log('📧 Message ID:', info.messageId);
    console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(info));

    return info;

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Send auto-reply to sender
const sendAutoReply = async ({ name, email }) => {
  try {
    const transporter = createTransporter();
    
    const autoReplyTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for contacting OmniSolveAI</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0B3D91, #6C63FF); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Thank You!</h1>
            <p>We've received your message</p>
          </div>
          
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting OmniSolveAI! We have received your message and will get back to you within 24 hours.</p>
            
            <p>In the meantime, you can:</p>
            <ul>
              <li>📖 Read our latest blog posts about AI fashion technology</li>
              <li>🎥 Watch our demo videos on YouTube</li>
              <li>📞 Call us directly at 0300-1016022</li>
            </ul>
            
            <p>Best regards,<br>The OmniSolveAI Team</p>
          </div>
          
          <div class="footer">
            <p>📍 Lahore, Pakistan | 📞 0300-1016022 | 📧 info@omnisolveai.digital</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"OmniSolveAI" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting OmniSolveAI',
      html: autoReplyTemplate
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent to:', email);

  } catch (error) {
    console.error('❌ Auto-reply failed:', error);
    // Don't throw error for auto-reply failure
  }
};

module.exports = {
  sendContactEmail,
  sendAutoReply,
  createTransporter
};
