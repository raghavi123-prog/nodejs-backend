const express = require('express');
const logger = require('./logger'); // Adjust the path if the logger file is elsewhere

const app = express();

// Middleware for request logging
app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
});

// Example route for the home page
app.get('/', (req, res) => {
    logger.info('Root route accessed');
    res.send('Welcome to the Node.js Backend!');
});

// Example route to simulate an error
app.get('/error', (req, res) => {
    const error = new Error('Simulated error for testing');
    logger.error('Simulated error encountered', { error: error.message });
    res.status(500).send('Error occurred');
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Backend server is running on http://localhost:${PORT}`);
});
