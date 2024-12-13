const winston = require('winston');
require('winston-cloudwatch');

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.CloudWatch({
            logGroupName: 'NodeJS-Backend-Logs',
            logStreamName: `${process.env.NODE_ENV || 'development'}-Backend-App-Stream`,
            awsRegion: process.env.AWS_REGION || 'your-region',
            jsonMessage: true,
        }),
    ],
});

module.exports = logger;

