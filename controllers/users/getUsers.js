const User = require('../../models/schemas/user')

const getUsers = async (req, res, next) => {
  const users = await User.find()
  res.json(users)
}
module.exports = getUsers
