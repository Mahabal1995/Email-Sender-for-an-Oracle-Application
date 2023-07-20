const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000;

// Configure Nodemailer with your custom email server settings
console.log("Establishing connections with the server...");
const transporter = nodemailer.createTransport({
  host: "us2.smtp.mailhostbox.com",
  port: 587,
  secure: false,
  auth: {
    user: "erp.kmf@uttaraerp.com",
    pass: "QRHjHFP2",
  },
});

// Define an API endpoint to send emails
app.get("/api/sendEmail", (req, res) => {
  const { to, cc, bcc, subject, body, attachments } = req.query;

  const mailOptions = {
    from: "erp.kmf@uttaraerp.com",
    to: to,
    cc: cc,
    bcc: "",
    subject: subject,
    text: body,
  };

  const mailOptions2 = {
    from: "erp.kmf@uttaraerp.com", // Sender's email address
    to: to, // Recipient(s) email address (comma-separated for multiple recipients)
    cc: cc, // CC email address(es) (comma-separated for multiple recipients)
    bcc: bcc, // BCC email address(es) (comma-separated for multiple recipients)
    subject: subject,
    text: body, // Plain text body
    attachments: attachments, // Array of attachment objects
  };

  if (attachments) {
    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error occurred:", error);
        res.status(500).json({ error: "Error sending email" });
      } else {
        console.log("Email sent successfully!", info.response);
        res.json({ message: "Email sent successfully" });
      }
    });
  } else {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred:", error);
        res.status(500).json({ error: "Error sending email" });
      } else {
        console.log("Email sent successfully!", info.response);
        res.json({ message: "Email sent successfully" });
      }
    });
  }
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Email API server running on port ${port}`);
});
