const mongoose = require('mongoose')

const {
  Schema,
  Types: { ObjectId },
} = mongoose

const TokenSchema = new Schema({
  token: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  userId: {
    type: ObjectId,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    expires: 12 * 60 * 60 * 1000
  }
})

const Token = mongoose.model('Token', TokenSchema)

module.exports = Token
