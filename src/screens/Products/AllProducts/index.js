import React, { useState, useCallback } from 'react'
import { useFocusEffect } from 'react-navigation-hooks'

import { SafeAreaView, Image, View } from 'react-native'
import { Button, Table, Spinner } from '@components'

import { Item } from '@services'
import Icons from '@assets/icons'

import Screens from '@screens/list'

import getColumns from './columns'
import styles from './styles'

const AllProducts = ({ navigation }) => {
  const [items, setItems] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  async function onFetchItems() {
    try {
      setIsFetching(true)

      const newItems = await Item.get()

      setItems(newItems)
    } finally {
      setIsFetching(false)
    }
  }


  useFocusEffect(useCallback(() => {
    onFetchItems()
  }, []))

  return (
    <SafeAreaView style={styles.container}>
      {isFetching ? (
        <Spinner />
      ) : items.length === 0 ? (
        <View style={styles.logoContainer}>
          <Image source={Icons.LOGO} />
        </View>
      ) : (
        <Table
          columns={getColumns({
            onFetchItems,
            onStartRemovingItem: () => setIsFetching(true),
          })}
          rows={items}
        />
      )}

      <Button
        bottomFixed
        icon="plus"
        onPress={() => navigation.navigate(Screens.ADD_PRODUCT)}
      />
    </SafeAreaView>
  )
}

AllProducts.navigationOptions = {
  id: Screens.ALL_PRODUCTS,
  header: null,
}

export default AllProducts
