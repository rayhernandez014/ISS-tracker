const locationRouter = require('express').Router()
const cronModule = require('../index')

locationRouter.get('/', (request, response) => {
  const consultedLocation = cronModule.location()
  //const consultedLocation = undefined
  if (consultedLocation) {
    const location = { location: consultedLocation }
    response.json(location)
  }
  else {
    response.status(503).json({ error: 'Location information unavailable' })
  }

})

module.exports = locationRouter
