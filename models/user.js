const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('user', userSchema)
