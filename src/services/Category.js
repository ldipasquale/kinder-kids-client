import apiClient from './_api'

async function get() {
  return apiClient.get('category')
}

export default {
  get,
}
