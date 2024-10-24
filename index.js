const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

// Initialize dotenv to load environment variables from .env
dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use email routes
app.use('/api', emailRoutes);
app.get('/', (req, res) => {
    res.send("Hello World");
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
