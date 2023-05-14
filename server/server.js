const express = require('express');
const fs = require('fs');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    let { name, email, message } = req.body;
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
  
    let mailOptions = {
      from: email,
      to: process.env.EMAIL,
      replyTo: email, // This allows you to reply directly to the sender
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new contact request from ${name} (${email}).</p><p>${message}</p>` // This is the HTML body of the email
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Message sent successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending message');
    }
  });



app.get('/projects', (req, res) => {
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading projects file');
    }

    res.send(JSON.parse(data));
  });
});

app.get('/experiences', (req, res) => {
    fs.readFile('experiences.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading experiences file');
      }
  
      res.send(JSON.parse(data));
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
