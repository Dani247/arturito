const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const vars = require('../../config/vars')

// * users controller
const Users = require('../../controllers/users')

// * PUBLIC login
router.post('/', async (req, res) => {
  let newUser = req.body

  // * validation
  const { password, email } = newUser
  if (!password || !email) res.status(400).json({ msg: 'Field missing', code: 400 })

  // ? check if there is a user with that email
  const user = await Users.getUserByEmail(newUser.email)

  if (user) {
    // * validate password
    const isMatch = await bycrypt.compare(password, user.password)
    if (!isMatch) res.status(400).json({ msg: 'Invalid credentials', code: 400 })

    // * sign a one hour token with the user id
    jwt.sign(
      { _id: user._id },
      vars.jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) res.status(500).json({ msg: err, code: 500 })

        res.status(200).json({ token, user })
      }
    )
  } else {
    res.status(404).json({ msg: 'Email not found', code: 404 })
  }
})

module.exports = router
