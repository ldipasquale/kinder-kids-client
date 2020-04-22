import apiClient from './_api'

async function get() {
  return apiClient.get('color')
}

async function create(name) {
  return apiClient.post('color', { name })
}

export default {
  get,
  create,
}
