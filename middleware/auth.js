const vars = require('../config/vars')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.header('x-auth-token')

  // * check for token
  if (!token) {
    res.status(401).json({ msg: 'No token found', code: 401 })
  } else {
    try {
      // * verify token
      const decodeToken = jwt.verify(token, vars.jwtSecret)
      // * add user from payload
      req.user = decodeToken
      next()
    } catch (err) {
      res.status(400).json({ msg: 'Token not valid', code: 400 })
    }
  }
}

module.exports = auth
