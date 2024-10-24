const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

// Initialize dotenv to load environment variables from .env
dotenv.config();

const app = express();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use email routes
app.use('/api', emailRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
