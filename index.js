const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// * config files
const db = require('./config/db')
const vars = require('./config/vars')

// * init server
const app = express()

// * middlewares
app.use(cors())
app.use(bodyParser())

// * -routes-
// * users
const userRoutes = require('./routes/api/users')
app.use('/api/v1/users', userRoutes)

// * connect to mongo
mongoose.connect(db.mongoUri, (err) => {
  err ? console.log(err) : console.log(`Connected to mongo!`)
})

// * run server
app.listen(vars.port, (err) => {
  err ? console.log(err) : console.log(`Server running on port [${vars.port}]`)
})
