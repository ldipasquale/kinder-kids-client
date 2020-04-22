import React from 'react'
import { Alert, TouchableOpacity, Image } from 'react-native'

import { Item } from '@services'

import Icons from '@assets/icons'

import styles from './styles'

export default ({ onFetchItems, onStartRemovingItem }) => {
  function handleRemoveItem(row) {
    return Alert.alert(
      'Eliminar artículo',
      `¿Estás seguro que querés eliminar ${row.name} (${row.clothingType.name} de ${row.category.name})?`,
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Eliminar',
          async onPress() {
            onStartRemovingItem()

            await Item.remove(row.id)

            await onFetchItems()
          },
        },
      ],
    )
  }

  return [
    {
      id: 'name',
      name: 'Modelo',
    },
    {
      id: 'clothingType',
      name: 'Prenda',
      format: row => `${row.clothingType.name} de ${row.category.name}`,
    },
    {
      id: 'manufacturer',
      name: 'Fabricante',
      format: row => `${row.manufacturer.name}`,
    },
    {
      id: 'material',
      name: 'Material',
      format: row => `${row.material.name}`,
    },
    {
      id: 'price',
      name: 'Precio',
      textAlign: 'right',
      format: row => `$${row.price.toFixed(2)}`,
    },
    {
      id: 'remove',
      name: '',
      width: 40,
      render(row) {
        return (
          <TouchableOpacity
            style={styles.crossIcon}
            onPress={() => handleRemoveItem(row)}
          >
            <Image source={Icons.CROSS} />
          </TouchableOpacity>
        )
      },
    },
  ]
}
