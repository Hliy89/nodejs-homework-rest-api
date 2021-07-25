const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
const sgMail = require('@sendgrid/mail')

require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_KEY)

const { contacts, auth, users } = require('./api')

const app = express()

app.use(cors())

app.use(express.static(path.join(process.cwd(), 'public/avatars')))

app.use('/api/v1/contacts', contacts)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found'
  })
})

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error
  res.status(code).json({
    status: 'fail',
    code,
    message
  })
})

const { DB_HOST, PORT } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  const port = PORT || 3000
  app.listen(port)
})
