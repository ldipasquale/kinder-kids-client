import apiClient from './_api'

async function get() {
  return apiClient.get('size')
}

export default {
  get,
}
