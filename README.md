# Get Started
How can i run this API? simple, just type "npm i" to install dependence's and "nodemon index.js" on your terminal.

"npm start" is don't working for now, i will fix this soon. But if you can help me, i will be very gratefully.


## Post json content must be:
{
  "to": "name@example.com",
  "from": "single-sender@example.com",
  "subject": "subject body",
  "text": "message body",
  "html": "<br>" 
}

### Single Sender
This email is the heart of the API, because you must to verify a Sender email, for *can* send emails and reply them, of course if you don`t do this validation on sendGrid page, this API will don't work :c

### html field
This field is optional, but if you want to send a html page you can do this.