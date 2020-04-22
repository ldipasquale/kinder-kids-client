import apiClient from './_api'

async function get() {
  return apiClient.get('manufacturer')
}

async function create({ name }) {
  return apiClient.post('manufacturer', { name })
}

export default {
  get,
  create,
}
