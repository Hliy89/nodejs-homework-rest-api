const { Schema } = require('mongoose')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

module.exports = contactSchema

// const Joi = require('joi')

// const schemaCreateContact = Joi.object({
//   name: Joi.string().min(2).required(),
//   email: Joi.string().min(0).required(),
//   phone: Joi.string().min(0).required(),
// })

// const schemaUpdateContact = Joi.object({
//   name: Joi.string().min(2),
//   email: Joi.string().min(0),
//   phone: Joi.string().min(0),
// }).min(1)

// module.exports = { schemaCreateContact, schemaUpdateContact }
