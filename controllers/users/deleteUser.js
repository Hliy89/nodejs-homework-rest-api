const User = require('../../models/schemas/user')

const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req
  const deletedUser = await User.findByIdAndDelete(id)
  if (!deletedUser) {
    return res.status(400).send("User isn't found")
  }
  res.json(deletedUser)
}

module.exports = deleteUser
