import apiClient from './_api'

async function get() {
  return apiClient.get('material')
}

async function create({ name }) {
  return apiClient.post('material', { name })
}

export default {
  get,
  create,
}
