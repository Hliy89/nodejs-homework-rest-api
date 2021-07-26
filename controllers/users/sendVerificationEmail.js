const sgMail = require('@sendgrid/mail')

const sendVerificationEmail = async (email, token) => {
  const msg = {
    to: email, // Change to your recipient
    from: 'hliy.yaroslav@gmail.com', // Change to your verified sender
    subject: 'Please verify your account',
    html: `Welcome to our application! To verify your account please go by <a href="http://localhost:3000/api/v1/users/verify/${token}">link</a>`,
  }

  await sgMail.send(msg)
}

module.exports = sendVerificationEmail
