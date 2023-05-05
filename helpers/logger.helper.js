import winston from 'winston';

const { combine, label, timestamp, printf } = winston.format;

const myFormat = printf((info) => `${info.timestamp} [${info.level}]: ${info.label} - ${info.message}`);

export const loggerHelper = winston.createLogger({
    level: process.env.TEST_LOG_LEVEL || 'info',
    transports: [
        new winston.transports.Console({ format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()) }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log', format: combine(label({ label: 'test' }), timestamp(), myFormat) }),
    ],
});
