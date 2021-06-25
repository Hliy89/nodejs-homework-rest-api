const contacts = require('../../data/contacts.json')

const getOne = (req, res, next) => {
  const { contactId } = req.params
  const contactStr = JSON.parse(contacts)
  console.log(contactStr)
  const contact = contactStr.find((item) => item.id === contactId)
  // const contact = contacts.find((item) => item.id === contactId)
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

// const fs = require('fs').promises
// const path = require('path')

// const contactsPath = path.join(__dirname, 'data', 'contacts.json')

// const getOne = (req, res, next) => {
//   const file = fs.readFile(contactsPath)
//   const { contactId } = req.params
//   const contactStr = JSON.parse(file)
//   const contact = contactStr.find((item) => item.id === contactId)
//   // const contact = contacts.find((item) => item.id === contactId)
//   if (!contact) {
//     return res.status(404).json({
//       status: 'error',
//       code: 404,
//       message: 'Not found'
//     })
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       result: contact
//     },
//   })
// }

module.exports = getOne
