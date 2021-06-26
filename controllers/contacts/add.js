const { v4 } = require('uuid')

const { contactSchema } = require('../../utils/validateSchemas')
const writeContacts = require('./writeContacts')
const contacts = require('../../data/contacts.json')

const add = (req, res) => {
  const { error } = contactSchema.validate(req.body)
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 404,
      message: error.message,
    })
    return
  }
  const newContact = { ...req.body, id: v4() }
  contacts.push(newContact)
  writeContacts(contacts)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newContact,
    },
  })
//   const file = fs.readFile(contactsPath)
//   const data = JSON.parse(file)
//   const newContact = { ...req.body, id: v4() }
//   //   contacts.push(newContact)
//   const newContactsList = [...data, newContact]
//   const contactsStr = JSON.stringify(newContactsList)
//   fs.writeFile(contactsPath, contactsStr)
//   return res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: {
//       result: newContact,
//     },
//   })
}

module.exports = add
