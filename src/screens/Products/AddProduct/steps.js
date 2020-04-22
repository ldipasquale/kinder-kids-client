import React from 'react'
import FieldTypes from '@components/Form/fieldTypes/list'

import { ClothingType, Manufacturer, Material } from '@services'

import ColorsPicker from './ColorsPicker'
import SizesGrid from './SizesGrid'

function mapToOption(row) {
  return {
    value: row.id,
    label: row.name,
  }
}

export default (options, setOptions) => [
  [
    {
      id: 'categoryId',
      name: 'Categoría',
      type: FieldTypes.OPTIONS,
      options: options.categories.map(mapToOption),
      isRequired: true,
    },
    {
      id: 'clothingTypeId',
      name: 'Tipo de prenda',
      type: FieldTypes.OPTIONS,
      options: options.clothingTypes && options.clothingTypes.map(mapToOption),
      async onAddNewOption(name) {
        const newOption = await ClothingType.create({ name })

        setOptions({
          ...options,
          clothingTypes: [
            ...options.clothingTypes,
            newOption,
          ],
        })

        return newOption
      },
      isRequired: true,
    },
    {
      id: 'name',
      name: 'Modelo',
      isRequired: true,
    },
    {
      id: 'price',
      name: 'Precio',
      type: FieldTypes.NUMBER,
      isRequired: true,
    },
    {
      id: 'manufacturerId',
      name: 'Fabricante',
      type: FieldTypes.OPTIONS,
      options: options.manufacturers.map(mapToOption),
      async onAddNewOption(name) {
        const newOption = await Manufacturer.create({ name })

        setOptions({
          ...options,
          manufacturers: [
            ...options.manufacturers,
            newOption,
          ],
        })

        return newOption
      },
      isRequired: true,
    },
    {
      id: 'materialId',
      name: 'Material',
      type: FieldTypes.OPTIONS,
      options: options.materials.map(mapToOption),
      async onAddNewOption(name) {
        const newOption = await Material.create({ name })

        setOptions({
          ...options,
          materials: [
            ...options.materials,
            newOption,
          ],
        })

        return newOption
      },
      isRequired: true,
    },
  ],
  [
    {
      id: 'colors',
      render(field, { onChange, value }) {
        return (
          <ColorsPicker
            onChange={onChange}
            options={options.colors}
            value={value}
            onUpdateOptions={newColors => setOptions({
              ...options,
              colors: newColors,
            })}
          />
        )
      },
      validate(values) {
        return values && Object.keys(values).length > 0
      },
    },
  ],
  ({ values }) => {
    const selectedColorsId = Object.keys(values.colors)
    const selectedColors = options.colors.filter(color => selectedColorsId.includes(color.id.toString()))

    const selectedSizes = options.categories.find(category => category.id === parseInt(values.categoryId, 10)).sizes

    return [
      {
        id: 'quantities',
        render(field, { onChange }) {
          return (
            <SizesGrid
              onChange={onChange}
              colors={selectedColors}
              sizes={selectedSizes}
            />
          )
        },
        validate(quantities) {
          return quantities !== undefined
        },
      },
    ]
  },
]
