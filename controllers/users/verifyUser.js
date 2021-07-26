const User = require('../../models/schemas/user')
const Token = require('../../token/token')

const verifyUser = async (req, res) => {
  const { params: { token }, } = req

  const tokenData = await Token.findOne({
    token,
  })

  if (!tokenData) {
    return res.status(401).send('Your verification token is invalid')
  }

  const user = await User.findById(tokenData.userId)

  if (!user) {
    return res.status(401).send('Your verification token is invalid')
  }

  user.isVerified = true

  await user.save()

  await Token.findByIdAndDelete(tokenData._id)

  res.json({
    status: 'success',
    code: 200,
    message: 'Your verification is successfull',
  })
}

module.exports = verifyUser
