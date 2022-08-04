import axios from 'axios'

const BASE_URL = 'https://p01--devxp--devxp--f1f1-2x5g.code.run/api/'

const api = axios.create({
  baseURL: BASE_URL
})

export default api

