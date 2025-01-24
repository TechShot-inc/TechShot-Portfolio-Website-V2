const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

// Simulated database
const users = {};

// Function to generate a random token
const generateToken = () => crypto.randomBytes(32).toString("hex");

// Configure Nodemailer with your email service
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or app password
    },
});

// Endpoint to handle form submission
app.post("/submit-form", (req, res) => {
    const { email } = req.body;
    const token = generateToken();

    users[email] = { verified: false, token };

    const verificationLink = `http://localhost:5000/verify-email?token=${token}&email=${email}`;

    const mailOptions = {
        from: "your-email@gmail.com", // Replace with your email
        to: email,
        subject: "Email Verification",
        html: `<p>Please verify your email by clicking the link below:</p><a href="${verificationLink}">Verify Email</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send("Verification email sent to " + email);
    });
});

// Endpoint to verify the email
app.get("/verify-email", (req, res) => {
    const { token, email } = req.query;

    if (users[email] && users[email].token === token) {
        users[email].verified = true;
        res.send("Email successfully verified!");
    } else {
        res.send("Invalid or expired token.");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
