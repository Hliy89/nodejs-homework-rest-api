const User = require('../../models/schemas/user')

const logout = async (req, res, next) => {
  const { _id } = req.user
  try {
    const update = (id, user) => {
      return User.findByIdAndUpdate(id, user)
    }
    await update(_id, { ...req.user, token: null })
    res.json({
      status: 'success',
      code: 200,
      message: 'Logout success',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logout
