const sendVerificationEmail = require('./sendVerificationEmail')
const User = require('../../models/schemas/user')

const resendingEmail = async (req, res, next) => {
  const { email } = req.body
  const { token } = req.params

  try {
    const user = await User.findOne({ email })
    if (!email) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing required field email'
      })
    }
    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Not Found'
      })
    }
    if (user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed'
      })
    }
    await sendVerificationEmail(email, token)

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Verification email sent'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = resendingEmail
