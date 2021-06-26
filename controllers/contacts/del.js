const contacts = require('../../data/contacts.json')

const writeContacts = require('./writeContacts')

const del = (req, res) => {
  const { contactId } = req.params
  const index = contacts.findIndex((item) => item.id === Number(contactId))
  const deleteContacts = contacts[index]
  contacts.splice(index, 1)
  writeContacts(contacts)
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: deleteContacts,
    },
  })
}

module.exports = del
