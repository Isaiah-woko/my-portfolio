// api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  console.log("📥 Incoming POST request to /api/send-email");

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.error("❌ Missing fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Message from ${email}:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("🚨 Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
