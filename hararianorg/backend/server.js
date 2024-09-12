const express = require('express');
const fetchLessons = require('./retrieveData'); // Assuming retrieveData.js is the file with MongoDB connection and fetchLessons function

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/lessons', async (req, res) => {
    try {
        const lessons = await fetchLessons();
        res.json(lessons);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});