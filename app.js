const express = require('express');
const os = require('os'); // Import the 'os' module to get system-level details

const app = express();
const startTime = Date.now();

app.get('/status', (req, res) => {
    const serverUptime = Math.floor((Date.now() - startTime) / 1000); // App uptime
    const systemUptime = Math.floor(os.uptime()); // System uptime
    res.json({
        status: 'OK',
        appUptime: `${serverUptime} seconds`,
        systemUptime: `${systemUptime} seconds`,
        message: 'Node.js backend is up and running'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
