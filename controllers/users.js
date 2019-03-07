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

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  getOneUser,
  addUser,
  removeUser,
  updateUser
}
