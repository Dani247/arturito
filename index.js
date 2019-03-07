const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// * dotEnv
require('dotenv').config()

// * config files
const db = require('./config/db')
const vars = require('./config/vars')

// * init server
const app = express()

// * middlewares
app.use(cors())
app.use(express.json())

// * -routes-
// * users
const userRoutes = require('./routes/api/users')
app.use('/api/v1/users', userRoutes)
// * auth
const authRoutes = require('./routes/api/auth')
app.use('/api/v1/auth', authRoutes)

// * connect to mongo
mongoose.connect(db.mongoUri, (err) => {
  err ? console.log(err) : console.log(`Connected to mongo!`)
})

// * run server
app.listen(vars.port, (err) => {
  err ? console.log(err) : console.log(`Server running on port [${vars.port}]`)
})
