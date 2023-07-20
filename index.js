const nodemailer = require("nodemailer");

// Function to send the email
async function sendEmail(to, from, cc, bcc, subject, body, attachments) {
  try {
    // Create a transporter using Gmail SMTP
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "mahabal.ps.28@gmail.com",
    //     pass: "unqrozqyuslmkiiy",
    //   },
    // });

    console.log("Establishing connections with the server...");
    const transporter = nodemailer.createTransport({
      //   host: "smtp.uttaraerp.com",
      host: "us2.smtp.mailhostbox.com",
      port: 587, // Replace with your server's port number
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        user: "erp.kmf@uttaraerp.com",
        pass: "QRHjHFP2",
      },
    });

    console.log("connection established with the server...");

    // Prepare the email data
    const mailOptions = {
      from: from, // Sender's email address
      to: to, // Recipient(s) email address (comma-separated for multiple recipients)
      cc: cc, // CC email address(es) (comma-separated for multiple recipients)
      bcc: bcc, // BCC email address(es) (comma-separated for multiple recipients)
      subject: subject,
      text: body, // Plain text body
      // You can also use html property to send an HTML-formatted email:
      // html: '<h1>Hello, this is an HTML email!</h1>'
      attachments: attachments, // Array of attachment objects
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Example usage:
const to = "mahabalshrivatsa95@gmail.com";
const from = "erp.kmf@uttaraerp.com";
const cc = "br.mahabal@gmail.com";
const bcc = "";
const subject = "Test Email from Node.js";
const body = "This is a test email sent from Node.js using Gmail SMTP.";
// const attachments = [
//   {
//     filename: "attachment.txt",
//     content: "This is the content of the attachment file.",
//   },
//   // Add more attachments here if needed
// ];

// sendEmail(to, from, cc, bcc, subject, body, attachments);
sendEmail(to, from, cc, bcc, subject, body);
