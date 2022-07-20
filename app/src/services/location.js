import axios from 'axios'

const url = 'https://uphere-space1.p.rapidapi.com/satellite/25544/location'

const params = { units: 'metric' }

const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_UPHERE_SPACE_API_KEY,
  'X-RapidAPI-Host': 'uphere-space1.p.rapidapi.com'
}

const getLocation = async () => {
  const config = { params, headers }
  const response = await axios.get(url, config)
  return response.data
}

const locationService = { getLocation }

export default locationService