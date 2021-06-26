const contacts = require('../../data/contacts.json')

const getAll = (req, res, next) => {
  console.log(contacts)
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = getAll
