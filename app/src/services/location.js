import axios from 'axios'

const url = 'https://uphere-space1.p.rapidapi.com/satellite/25544/location'

const headers = {
  'X-RapidAPI-Key': '122dae9462mshd1870d15ceb2542p1feaf4jsna1802fa2c764',
  'X-RapidAPI-Host': 'uphere-space1.p.rapidapi.com'
}
/*
const options = {
  method: 'GET',
  url: 'https://uphere-space1.p.rapidapi.com/satellite/25544/location',
  headers: {
    'X-RapidAPI-Key': '122dae9462mshd1870d15ceb2542p1feaf4jsna1802fa2c764',
    'X-RapidAPI-Host': 'uphere-space1.p.rapidapi.com'
  }
}
*/
const getLocation = async () => {
  const config = { headers }
  const response = await axios.get(url, config)
  return response.data
}

const locationService = { getLocation }

export default locationService