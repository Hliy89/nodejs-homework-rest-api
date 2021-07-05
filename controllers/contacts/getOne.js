const { contact: service } = require('../../services')

const getOne = async (req, res, next) => {
  const { contactId } = req.params
  const { user } = req
  try {
    const contact = await service.getOne({ _id: contactId, owner: user._id })
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contact
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getOne
