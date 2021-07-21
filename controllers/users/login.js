const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/schemas/user')

const login = async (req, res, next) => {
  const { body: { email, password } } = req
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).send('Authentication is failed')
    }
    const isPasswodValid = await bcrypt.compare(password, user.password)
    if (!isPasswodValid) {
      return res.status(401).send('Authentication is failed')
    }
    const token = jwt.sign({
      userId: user._id
    }, process.env.JWT_SECRED)
    await User.findByIdAndUpdate(user._id, { token })
    return res.json({ token })
  } catch (error) {
    next(error)
  }
}
module.exports = login
