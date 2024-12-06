const express = require('express');
const app = express();
const startTime = Date.now();

app.get('/status', (req, res) => {
    res.json({
        status: 'OK',
        uptime: `${Math.floor((Date.now() - startTime) / 1000)} seconds`
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

