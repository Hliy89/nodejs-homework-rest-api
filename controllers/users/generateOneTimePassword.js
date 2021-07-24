const crypto = require('crypto')

const Token = require('../../token/token')

const generateOneTimePassword = async (userId) => {
  const token = await crypto.randomBytes(16).toString('hex')
  return Token.create({
    token,
    userId
  })
}

module.exports = generateOneTimePassword
