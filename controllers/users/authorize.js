const jwt = require('jsonwebtoken')
const User = require('../../models/schemas/user')

const authorize = async (req, res, next) => {
  const authorizationHeader = req.get('Authorization')
  if (!authorizationHeader) {
    return res.status(401).send('User is unauthorized')
  }
  const token = authorizationHeader.replace('Bearer ', '')
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRED)
    const { userId } = payload
    const user = await User.findById(userId)
    if (!user) {
      return res.status(401).send('User is unauthorized')
    }
    req.user = user
    next()
  } catch (error) {
    return res.status(401).send(error)
  }
}

module.exports = authorize
