import React, { useState, useCallback } from 'react'
import { Toast } from '@navigation'
import { useFocusEffect } from 'react-navigation-hooks'

import { Item, Category, ClothingType, Color, Manufacturer, Material } from '@services'

import { Spinner, Form } from '@components'

import Screens from '@screens/list'

import getSteps from './steps'

const AddProduct = ({ navigation }) => {
  const [options, setOptions] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useFocusEffect(useCallback(() => {
    const fetchOptions = async () => {
      try {
        setIsFetching(true)

        const categories = await Category.get()
        const clothingTypes = await ClothingType.get()
        const manufacturers = await Manufacturer.get()
        const materials = await Material.get()
        const colors = await Color.get()

        const newOptions = {
          categories,
          clothingTypes,
          manufacturers,
          materials,
          colors,
        }

        setOptions(newOptions)

        setIsFetching(false)
      } catch (error) {
        Toast.show('Hubo un error al cargar las opciones')
      }
    }

    fetchOptions()
  }, []))

  async function handleSubmit(values) {
    if (!values || !values.name) {
      return
    }

    setIsFetching(true)

    try {
      const createdItem = await Item.create(values)

      if (!createdItem.id) {
        throw new Error()
      }

      Toast.show('El artículo fue creado correctamente')
      navigation.navigate(Screens.ALL_PRODUCTS)
    } catch (error) {
      Toast.show('Hubo un error al crear el artículo')
    } finally {
      setIsFetching(false)
    }
  }

  if (isFetching) {
    return (
      <Spinner />
    )
  }

  return (
    <Form
      steps={getSteps(options, setOptions)}
      onSubmit={handleSubmit}
    />
  )
}

AddProduct.navigationOptions = {
  id: Screens.ADD_PRODUCT,
  title: 'Agregar producto',
}

export default AddProduct
