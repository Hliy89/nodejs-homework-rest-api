const { contact: service } = require('../../services')

const getAll = async (req, res, next) => {
  try {
    const userContacts = await service.getAll({ owner: req.user._id })
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: userContacts
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
