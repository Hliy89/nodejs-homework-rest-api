const createUser = require('./createUser')
const login = require('./login')
const authorize = require('./authorize')
const getUsers = require('./getUsers')
const getUser = require('./getUser')
const validateId = require('./validateId')
const deleteUser = require('./deleteUser')
const logout = require('./logout')
const getCurrentUser = require('./getCurrentUser')

module.exports = {
  createUser,
  login,
  authorize,
  getUsers,
  getUser,
  validateId,
  deleteUser,
  logout,
  getCurrentUser
}
