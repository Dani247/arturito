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
    lowercase: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  firstTime: {
    required: true,
    type: Boolean,
    default: true
  },
  budget: {
    required: true,
    type: Number,
    default: 0
  },
  incomes: [
    {
      label: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  ],
  expenses: [
    {
      label: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('user', userSchema)
