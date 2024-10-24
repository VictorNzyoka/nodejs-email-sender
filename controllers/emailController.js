const nodemailer = require('nodemailer');

// Email sending logic
exports.sendEmail = (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body);

    // Create a transporter with nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.RECEIVER_EMAIL, 
            pass: process.env.EMAIL_PASS,     
        },
    });

    // Mail options
    let mailOptions = {
        from: `"${name}" <${email}>`, 
        replyTo: "${email}",
        to: process.env.RECEIVER_EMAIL, 
        subject: subject, 
        text: `Message from ${name} (${email}):\n\n${message}`, 
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Failed to send email', error });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    });
};
