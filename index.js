const config = require('./utils/config')
const app = require('./app')
const logger = require('./utils/logger')
const axios = require('axios')
const cron = require('node-cron')

let location = null

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

cron.schedule('*/5 * * * * *', async () => {

  const options = {
    method: 'GET',
    url: 'https://uphere-space1.p.rapidapi.com/satellite/25544/location',
    headers: {
      'X-RapidAPI-Key': config.UPHERE_SPACE_API_KEY,
      'X-RapidAPI-Host': 'uphere-space1.p.rapidapi.com'
    }
  }
  try{
    const response = await axios.request(options)
    location = response.data
  }
  catch (exception) {
    logger.error(exception)
  }

})

const getLocation = () => {
  return location
}

exports.location = getLocation
