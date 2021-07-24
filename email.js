const sgMail = require('@sendgrid/mail')

require('dotenv').config()

const msg = {
  to: 'hliy.yaroslav@gmail.com', // Change to your recipient
  from: 'hliy.yaroslav@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'easy to do anywhere, even with Node.js',
  html: '<strong>Easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
