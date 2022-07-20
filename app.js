const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const authRouter = require('./controllers/auth')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/api/auth', authRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app