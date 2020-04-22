import axios from 'axios'
import APIConfig from '@config/api'

const api = axios.create({
  ...APIConfig,
  timeout: 5000,
})

const makeRequest = method => async (url, data) => {
  const response = await api.request({
    method,
    url,
    ...method === 'get' ? {
      params: data,
    } : {
      data,
    },
  })

  return response.data
}

export default {
  get: makeRequest('get'),
  post: makeRequest('post'),
  put: makeRequest('put'),
  delete: makeRequest('delete'),
}
