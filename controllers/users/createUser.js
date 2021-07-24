const bcryptjs = require('bcryptjs')

const sendVerificationEmail = require('./sendVerificationEmail')
const generateOneTimePassword = require('./generateOneTimePassword')

const User = require('../../models/schemas/user')

const createUser = async (req, res, next) => {
  try {
    const { body } = req
    const hashedPassword = await bcryptjs.hash(body.password, 10)
    const user = await User.create({
      ...body,
      password: hashedPassword
    })

    const tokenData = await generateOneTimePassword(user.id)
    try {
      await sendVerificationEmail(user.email, tokenData.token)
    } catch (error) {
      console.log(error)
    }

    res.json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = createUser
