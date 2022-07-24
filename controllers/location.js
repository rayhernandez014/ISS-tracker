const locationRouter = require('express').Router()
const cronModule = require('../index')

locationRouter.get('/', (request, response) => {
  const location = { location: cronModule.location() }
  response.json(location)
})

module.exports = locationRouter
