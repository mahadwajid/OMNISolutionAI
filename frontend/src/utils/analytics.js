// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA tracking ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: window.location.href,
    });
  }
};

// Track page views
export const logPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const logEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const logButtonClick = (buttonName, location = 'unknown') => {
  logEvent('button_click', 'engagement', buttonName, location);
};

// Track form submissions
export const logFormSubmission = (formName) => {
  logEvent('form_submit', 'engagement', formName);
};

// Track scroll depth
export const logScrollDepth = (depth) => {
  logEvent('scroll_depth', 'engagement', depth);
};

// Track time on page
export const logTimeOnPage = (timeInSeconds) => {
  logEvent('time_on_page', 'engagement', timeInSeconds);
};
