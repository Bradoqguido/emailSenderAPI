const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

router.post('/send-email', (req, res) => {
  
    // i change this param`s inside setApiKey function to the real API Key, this works better.
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); 

    const msg = {
      to: req.body.to,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html
    };

    sgMail.send(msg)
    .then(x => {
        res.status(200).send('email enviado - status: ' + x);
    })
    .catch(error => {
        res.status(400).send(error.response.body);
    });
  });

  module.exports = app => app.use('/api', router);