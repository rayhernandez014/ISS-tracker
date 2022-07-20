require('dotenv').config()

const PORT = process.env.PORT
const UPHERE_SPACE_API_KEY = process.env.UPHERE_SPACE_API_KEY

module.exports = {
  PORT,
  UPHERE_SPACE_API_KEY
}