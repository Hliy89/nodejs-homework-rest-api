const contacts = require('../../data/contacts.json')

const getOne = (req, res, next) => {
  const { contactId } = req.params
  const contact = contacts.find((item) => item.id === Number(contactId))
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
}

module.exports = getOne
