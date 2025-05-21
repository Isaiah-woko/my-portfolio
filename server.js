// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup to allow only your frontend domain
const corsOptions = {
  origin: "https://isaiahwoko.vercel.app/", // replace with your actual frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Route to handle contact form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // sender name & your email
      to: process.env.EMAIL_USER, // your receiving email
      subject: `New message from ${name}`,
      text: `
New message from ${name} <${email}>:

${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
