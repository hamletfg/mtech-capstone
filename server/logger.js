const winston = require('winston');

const logger = winston.createLogger({
  level: 'http',
  transports: [
    new winston.transports.Console({
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logfile.log',
      level: 'info',
    }),
  ],
});

module.exports = logger;
