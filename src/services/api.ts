import axios from 'axios'

console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    key: process.env.REACT_APP_API_KEY
  }
})

export default api