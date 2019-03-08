const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const vars = require('../../config/vars')

// * auth middleware
const auth = require('../../middleware/auth')

// * users controller
const Users = require('../../controllers/users')

// * PRIVATE gets all users
router.get('/', auth, async (req, res) => {
  const result = await Users.getUsers()
  res.status(200).json(result)
})

// * PRIVATE gets user by id
router.get('/:id', auth, async (req, res) => {
  const { id } = req.params
  const result = await Users.getUserById(id)
  res.status(200).json(result)
})

// * PUBLIC post a new user
router.post('/', async (req, res) => {
  let newUser = req.body
  const { name, lastName, password, email, phone } = newUser

  // * validation
  if (!name || !lastName || !password || !email || !phone) res.status(400).json({ msg: 'Field missing', code: 400 })

  // ? check if email already there
  const isUser = await Users.getUserByEmail(newUser.email)

  if (!isUser) {
    // * create salt and hash
    bycrypt.genSalt(10, (err, salt) => {
      if (err) res.status(500).json({ msg: err, code: 500 })

      bycrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) res.status(500).json({ msg: err, code: 500 })

        // * got hash correctly
        newUser.password = hash

        // * add user
        const result = await Users.addUser(newUser)

        // * sign a one hour token with the user id
        jwt.sign(
          { _id: result._id },
          vars.jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) res.status(500).json({ msg: err, code: 500 })

            res.status(200).json({ token, user: result })
          }
        )
      })
    })
  } else {
    res.status(409).json({ msg: 'Email already taken', code: 409 })
  }
})

// * PRIVATE deletes user
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params
  const result = await Users.removeUser(id)
  res.status(200).json(result)
})

// * PRIVATE modifies user
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params
  const result = await Users.updateUser(id, req.body)
  res.status(200).json(result)
})

module.exports = router
