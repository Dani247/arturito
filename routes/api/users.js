const express = require('express')
const router = express.Router()

// * users controller
const Users = require('../../controllers/users')

// * gets all users
router.get('/', async (req, res) => {
  const result = await Users.getUsers()
  res.status(200).json(result)
})

// * gets user by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Users.getUserById(id)
  res.status(200).json(result)
})

// * post a new user
router.post('/', async (req, res) => {
  const result = await Users.addUser(req.body)
  res.status(200).json(result)
})

// * deletes user
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Users.removeUser(id)
  res.status(200).json(result)
})

// * modifies user
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Users.updateUser(id, req.body)
  res.status(200).json(result)
})

module.exports = router
