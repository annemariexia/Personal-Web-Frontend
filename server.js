import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config();


const CONTACT_EMAIL = process.env.VITE_CONTACT_EMAIL;
const EMAIL_PASSWORD = process.env.VITE_CONTACT_PSSW;
const port = 3000;

// const functions = require('firebase-functions');
const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

 

app.post("/send-email", (req, res) => {
  // console.log("here");
  // res.send("Email received and processed successfully");

  const {name, email, message} = req.body;

  console.log(name, email, message, process.env.VITE_CONTACT_EMAIL);

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: CONTACT_EMAIL, // Your email
      pass: EMAIL_PASSWORD, // Your password
    },
  });

  // Email content
  const mailOptions = {
    from: CONTACT_EMAIL,
    to: CONTACT_EMAIL, // Your email
    subject: "New Contact from Annemarie's Site",
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
