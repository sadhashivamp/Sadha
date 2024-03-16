const express = require('express');
const app = express();
const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sadha0601.p@gmail.com',
          pass: 'jowj tskx chsy dxly',
        },
      });
    
      // Compose email
      const mailOptions = {
        from: req.body.email,
        to: 'recipient_email@example.com',
        subject: `Message From ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
      };
    
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.send('Error occurred, message not sent.');
        } else {
          res.send('Message sent successfully!');
        }
      });
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})