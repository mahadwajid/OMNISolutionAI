# OMNI Solution AI Website

A modern, responsive website for OMNI Solution AI built with React, Tailwind CSS, and React Router.

## Features

- 🎨 **Modern Design**: Clean, professional design with Tailwind CSS
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Fast Performance**: Optimized for speed and performance
- 📊 **Analytics Ready**: Google Analytics integration for tracking
- 🔄 **Client-side Routing**: Smooth navigation with React Router
- 🎯 **SEO Optimized**: Meta tags and structured data for better SEO

## Pages

- **Home**: Landing page with hero section and features
- **About**: Company information, mission, vision, and team
- **Products**: AI solutions showcase with detailed features
- **Pricing**: Transparent pricing plans with toggle between monthly/annual
- **Why Us**: Competitive advantages and company benefits
- **Testimonials**: Customer reviews and success stories
- **Contact**: Contact form and company information

## Tech Stack

- **React 19.1.1**: Latest React with hooks and modern features
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing for navigation
- **Google Analytics**: Website analytics and tracking

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional dependencies** (if not already installed)
   ```bash
   npm install tailwindcss postcss autoprefixer react-router-dom
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Configuration

### Google Analytics

1. Replace `G-XXXXXXXXXX` in the following files with your actual Google Analytics tracking ID:
   - `public/index.html`
   - `src/utils/analytics.js`

2. Update the tracking ID in both locations to enable analytics tracking.

### Customization

#### Colors
The primary color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... other shades
  }
}
```

#### Content
Update the content in each page component to match your business:
- Company information in `src/pages/About.js`
- Product details in `src/pages/Product.js`
- Pricing plans in `src/pages/Pricing.js`
- Contact information in `src/pages/Contact.js`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── layouts/            # Layout components
│   └── MainLayout.js   # Main layout wrapper
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Product.js      # Products page
│   ├── Pricing.js      # Pricing page
│   ├── WhyUs.js        # Why Us page
│   ├── Testimonials.js # Testimonials page
│   └── Contact.js      # Contact page
├── utils/              # Utility functions
│   └── analytics.js    # Google Analytics utilities
├── App.js              # Main app component
└── index.js            # App entry point
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React and configure the build

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## Customization Guide

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/index.css` for global styles
- Component-specific classes for local styling

### Analytics Events

Track custom events using the analytics utilities:
```javascript
import { logEvent, logButtonClick } from './utils/analytics';

// Track custom events
logEvent('button_click', 'engagement', 'cta_button');

// Track button clicks
logButtonClick('get_started', 'homepage');
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: hello@omnisolution.ai
- Website: https://omnisolution.ai

---

Built with ❤️ by OMNI Solution AI
