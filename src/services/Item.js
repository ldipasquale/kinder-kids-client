import apiClient from './_api'

async function get() {
  return apiClient.get('item')
}

async function remove(id) {
  return apiClient.delete(`item/${id}`)
}

async function create(values) {
  const {
    name,
    categoryId,
    clothingTypeId,
    manufacturerId,
    materialId,
    price,
    colors,
    quantities,
  } = values

  const variations = Object.entries(quantities).reduce((accumulator, [colorId, quantitiesBySizeId]) => [
    ...accumulator,
    ...Object.entries(quantitiesBySizeId).reduce((colorAccumulator, [sizeId, quantity]) => [
      ...colorAccumulator,
      {
        sizeId,
        colorId,
        imageUrl: colors[colorId],
        quantity,
      },
    ], []),
  ], [])

  return apiClient.post('item', {
    name,
    categoryId,
    clothingTypeId,
    manufacturerId,
    materialId,
    price,
    variations,
  })
}

export default {
  get,
  remove,
  create,
}
