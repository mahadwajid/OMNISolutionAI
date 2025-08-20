const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Log levels
const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3
};

// Get current log level from environment
const getLogLevel = () => {
  const level = process.env.LOG_LEVEL || 'info';
  return LOG_LEVELS[level.toUpperCase()] || LOG_LEVELS.INFO;
};

// Format timestamp
const formatTimestamp = () => {
  return new Date().toISOString();
};

// Write to log file
const writeToFile = (level, message, data = null) => {
  const timestamp = formatTimestamp();
  const logEntry = {
    timestamp,
    level,
    message,
    data
  };

  const logFile = path.join(logsDir, `${new Date().toISOString().split('T')[0]}.log`);
  const logString = JSON.stringify(logEntry) + '\n';

  fs.appendFileSync(logFile, logString);
};

// Logger functions
const logger = {
  error: (message, data = null) => {
    if (getLogLevel() >= LOG_LEVELS.ERROR) {
      console.error(`❌ [ERROR] ${message}`, data || '');
      writeToFile('ERROR', message, data);
    }
  },

  warn: (message, data = null) => {
    if (getLogLevel() >= LOG_LEVELS.WARN) {
      console.warn(`⚠️ [WARN] ${message}`, data || '');
      writeToFile('WARN', message, data);
    }
  },

  info: (message, data = null) => {
    if (getLogLevel() >= LOG_LEVELS.INFO) {
      console.info(`ℹ️ [INFO] ${message}`, data || '');
      writeToFile('INFO', message, data);
    }
  },

  debug: (message, data = null) => {
    if (getLogLevel() >= LOG_LEVELS.DEBUG) {
      console.debug(`🔍 [DEBUG] ${message}`, data || '');
      writeToFile('DEBUG', message, data);
    }
  },

  // Specialized logging functions
  contactForm: (action, data) => {
    logger.info(`Contact Form ${action}`, data);
  },

  email: (action, data) => {
    logger.info(`Email ${action}`, data);
  },

  server: (action, data) => {
    logger.info(`Server ${action}`, data);
  },

  security: (action, data) => {
    logger.warn(`Security ${action}`, data);
  }
};

module.exports = logger;
