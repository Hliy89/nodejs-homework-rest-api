const User = require('../../models/schemas/user')

const getUser = async(req, res) => {
  const {
    params: { id },
  } = req
  const user = await User.findById(id)
  if (!user) {
    return res.status(400).send("User isn't found")
  }
  res.json(user)
}

module.exports = getUser
