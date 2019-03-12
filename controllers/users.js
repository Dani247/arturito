const UserModel = require('../models/user')

// * returns all users
const getUsers = () => {
  return UserModel.find()
}

// * returns user by id
const getUserById = id => {
  return UserModel.findById(id)
}

// * returns user by email
const getUserByEmail = email => {
  return UserModel.findOne({ email })
}

// * returns user by document
const getOneUser = body => {
  return UserModel.findOne({ ...body })
}

// * post new user
const addUser = body => {
  const NewUser = new UserModel(body)
  return NewUser.save()
}

// * deletes user
const removeUser = id => {
  return UserModel.findByIdAndRemove({ _id: id })
}

// * modifies user
const updateUser = (id, body) => {
  return UserModel.findOneAndUpdate({ _id: id }, body)
}

// * adds incomes
const addIncome = (id, income) => {
  return UserModel.updateOne({ _id: id }, { $push: {
    incomes: income
  } })
}

// * removes expense
const removeIncome = (id, income) => {
  return UserModel.updateOne({ _id: id }, { $pull: {
    incomes: income
  } })
}

// * updates expense
const updateIncome = (id, income) => {
  const { _id, label, value, type } = income
  return UserModel.updateOne({ _id: id, 'incomes._id': _id }, { $set: {
    'incomes.$.label': label,
    'incomes.$.value': value,
    'incomes.$.type': type
  }
  })
}

// * adds expenses
const addExpense = (id, expense) => {
  return UserModel.updateOne({ _id: id }, { $push: {
    expenses: expense
  } })
}

// * removes expense
const removeExpense = (id, expense) => {
  return UserModel.updateOne({ _id: id }, { $pull: {
    expenses: expense
  } })
}

// * updates expense
const updateExpense = (id, expense) => {
  const { _id, label, value, type } = expense
  return UserModel.updateOne({ _id: id, 'expenses._id': _id }, { $set: {
    'expenses.$.label': label,
    'expenses.$.value': value,
    'expenses.$.type': type
  }
  })
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  getOneUser,
  addUser,
  removeUser,
  updateUser,
  addIncome,
  removeIncome,
  updateIncome,
  addExpense,
  removeExpense,
  updateExpense
}
