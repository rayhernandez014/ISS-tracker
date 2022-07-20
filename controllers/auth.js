const authRouter = require('express').Router()
const config = require('../utils/config')

authRouter.get('/', async (request, response) => {
  const key = { key: config.UPHERE_SPACE_API_KEY }
  response.json(key)
})

module.exports = authRouter
