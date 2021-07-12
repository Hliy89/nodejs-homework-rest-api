// const jwt = require('jsonwebtoken')
require('dotenv').config()

// const { users: service } = require('../../services')

const getProfile = async (req, res, next) => {
  try {
    // const { TOKEN_KEY } = process.env
    // const [, token] = req.headers.Authorization.split(' ')
    // const result = jwt.verify(token, TOKEN_KEY)
    // const user = await service.getById(result.id)
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: req.user
      }
    })
  } catch (error) {
    res.status(403).json({
      status: 'error',
      code: 403,
      message: 'Invalid token'
    })
  }
}

module.exports = getProfile
