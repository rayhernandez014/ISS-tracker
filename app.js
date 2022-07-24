const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const locationRouter = require('./controllers/location')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/api/location', locationRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app