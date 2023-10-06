const express = require('express');
// const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();
app.use(cors());
app.use(express.json());
// app.use("/", router);
app.listen(5016, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'rnoelmon27@gmail.com',
      pass: 'ykuktcneuunpgkxo'
    }
  });

  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message; 


    const mailOptions = {
      from: email,
      to: "rnoelmon27@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n Subject: ${subject} \nMessage:${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }

    });
  });



  
