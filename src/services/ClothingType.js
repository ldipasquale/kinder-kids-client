import apiClient from './_api'

async function get() {
  return apiClient.get('clothing_type')
}

async function create({ name }) {
  return apiClient.post('clothing_type', {
    name,
  })
}

export default {
  get,
  create,
}
