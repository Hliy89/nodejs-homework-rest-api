const {
  Types: { ObjectId },
} = require('mongoose')

const validateId = (req, res, next) => {
  const {
    params: { id },
  } = req

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('Your id is not valid')
  }

  next()
}

module.exports = validateId
