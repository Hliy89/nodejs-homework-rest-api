const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
const sgMail = require('@sendgrid/mail')
// const fs = require('fs/promises')
// const jimp = require('jimp')
require('dotenv').config()

const { contacts, auth, users } = require('./api')

const app = express()

app.use(cors())

app.use(express.static(path.join(process.cwd(), 'public/avatars')))

// const tempAvatars = path.join(process.cwd(), 'public/avatars')

// const upload = require('./helpers/multer')

app.use('/api/v1/contacts', contacts)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)

// app.post('/api/v1/files/avatars', upload.single('avatar'), async (req, res, next) => {
//   const { path: tempName, originalname } = req.file
//   const img = await jimp.read(req.file.path)
//   img.autocrop().cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(req.file.path)
//   const fileName = path.join(tempAvatars, originalname)
//   try {
//     await fs.rename(tempName, fileName)
//     res.json({
//       status: 'success',
//       code: 200,
//       data: {
//         result: {
//           avatar: fileName
//         }
//       }
//     })
//   } catch (error) {
//     await fs.unlink(tempName)
//     next(error)
//   }
// })

sgMail.setApiKey(process.env.SENDGRID_KEY)

// const msg = {
//   to: 'hliy.yaroslav@gmail.com', // Change to your recipient
//   from: 'hliy.yaroslav@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'easy to do anywhere, even with Node.js',
//   html: '<strong>Easy to do anywhere, even with Node.js</strong>',
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

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

// mongodb+srv://hliy:<password>@cluster0.ziavk.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority
