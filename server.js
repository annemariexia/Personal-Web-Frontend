import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your_email@gmail.com", // Your email
      pass: "your_password", // Your password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "your_email@gmail.com", // Your email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
