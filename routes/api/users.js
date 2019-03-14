const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const vars = require('../../config/vars')

// * auth middleware
const auth = require('../../middleware/auth')

// * users controller
const Users = require('../../controllers/users')
const {
  getUsers,
  getUserById,
  getUserByEmail,
  addUser,
  removeUser,
  updateUser,
  addIncome,
  removeIncome,
  updateIncome,
  addExpense,
  removeExpense,
  updateExpense,
  updateBudget
} = Users

// * PRIVATE gets all users
router.get('/', auth, async (req, res) => {
  try {
    const result = await getUsers()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE gets user by id
router.get('/:id', auth, async (req, res) => {
  const { id } = req.params

  // !validation
  if (!id) return res.status(400).json({ msg: 'Missing ID', code: 400 })

  try {
    const result = await getUserById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PUBLIC post a new user
router.post('/', async (req, res) => {
  let newUser = req.body
  const { name, lastName, password, email, phone } = newUser

  // !validation
  if (!name || !lastName || !password || !email || !phone) return res.status(400).json({ msg: 'Field missing', code: 400 })

  // ? check if email already there
  const isUser = await getUserByEmail(newUser.email)

  if (!isUser) {
    // * create salt and hash
    bycrypt.genSalt(10, (err, salt) => {
      if (err) res.status(500).json({ msg: err, code: 500 })

      bycrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) res.status(500).json({ msg: err, code: 500 })

        // * got hash correctly
        newUser.password = hash

        // * add user
        try {
          const result = await addUser(newUser)

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
        } catch (error) {
          res.status(500).json({ msg: 'Internal server error', error })
        }
      })
    })
  } else {
    res.status(409).json({ msg: 'Email already taken', code: 409 })
  }
})

// * PRIVATE deletes user
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params

  // !validation
  if (!id) return res.status(400).json({ msg: 'Missing ID', code: 400 })

  try {
    const result = await removeUser(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE modifies user
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params

  // !validation
  if (!id) return res.status(400).json({ msg: 'Missing ID', code: 400 })

  try {
    const result = await updateUser(id, req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE add income
router.post('/income/:id', auth, async (req, res) => {
  const { id } = req.params
  const income = req.body

  // !validation
  if (!income || !income.label || !income.value || !income.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await addIncome(id, income)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE remove income
router.delete('/income/:id', auth, async (req, res) => {
  const { id } = req.params
  const income = req.body

  // !validation
  if (!income || !income.label || !income.value || !income.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await removeIncome(id, income)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE updates income
router.put('/income/:id', auth, async (req, res) => {
  const { id } = req.params
  const income = req.body

  // !validation
  if (!income || !income.label || !income.value || !income.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await updateIncome(id, income)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE add expense
router.post('/expense/:id', auth, async (req, res) => {
  const { id } = req.params
  const expense = req.body

  // !validation
  if (!expense || !expense.label || !expense.value || !expense.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await addExpense(id, expense)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE remove expense
router.delete('/expense/:id', auth, async (req, res) => {
  const { id } = req.params
  const expense = req.body

  // !validation
  if (!expense || !expense.label || !expense.value || !expense.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await removeExpense(id, expense)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE updates expense
router.put('/expense/:id', auth, async (req, res) => {
  const { id } = req.params
  const expense = req.body

  // !validation
  if (!expense || !expense.label || !expense.value || !expense.type || !id) return res.status(400).json({ msg: 'A field is missing', code: 400 })

  try {
    const result = await updateExpense(id, expense)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

// * PRIVATE updates budget
router.put('/budget/:id', auth, async (req, res) => {
  const { id } = req.params
  const { budget } = req.body

  if (!id || !budget) return res.status(400).json({ msg: 'fields missing', code: 400 })

  try {
    const result = await updateBudget(id, budget)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error', error })
  }
})

module.exports = router
