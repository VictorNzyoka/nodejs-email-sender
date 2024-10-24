const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/emailController');

// Route to send email
router.post('/sendEmail', sendEmail);

module.exports = router;
