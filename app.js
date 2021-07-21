const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
// const dotenv = require("dotenv");
// dotenv.config();
require('dotenv').config()

const { contacts, auth, users } = require('./api')

const app = express()

app.use(cors())

// require('./configs/passport-config.js')

app.use('/api/v1/contacts', contacts)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)

app.use((req, res) => {
  console.log(req.url)
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

// mongodb+srv://hliy:<password>@cluster0.ziavk.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority
