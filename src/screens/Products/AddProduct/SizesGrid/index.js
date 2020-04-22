import React, { useState } from 'react'
import { TextInput, ScrollView, View, Text } from 'react-native'

import { Colors } from '@stylesheets'

import styles from './styles'

function getColor(color) {
  if (color === Colors.WHITE) {
    return Colors.LIGHTER_GRAY
  }

  return color
}

function getName(size) {
  if (!isNaN(size)) { // eslint-disable-line no-restricted-globals
    return `T${size}`
  }

  return size
}

function renderColorCell(color) {
  return (
    <View
      key={color.id}
      style={[
        styles.column,
        styles.headerColumn,
        styles.colorColumn,
      ]}
    >
      <View
        style={[
          styles.colorCircle,
          { backgroundColor: getColor(color.color) },
        ]}
      />

      <Text
        style={[
          styles.colorName,
          { color: getColor(color.color) },
        ]}
      >
        {color.name}
      </Text>
    </View>
  )
}

const SizesGrid = ({ colors, sizes, onChange }) => {
  const [values, setValues] = useState({})

  function handleQuantityInputChange(colorId, sizeId, value) {
    const newValues = {
      ...values,
      [colorId]: {
        ...values[colorId] || {},
        [sizeId]: value,
      },
    }

    setValues(newValues)

    return onChange(newValues)
  }

  function getRenderQuantityInput(sizeId) {
    return function (color, colorIndex) {
      return (
        <View
          key={`${sizeId}${color.id}`}
          style={[
            styles.column,
            styles.colorColumn,
            ...colorIndex === colors.length - 1 ? [styles.lastColumn] : [],
          ]}
        >
          <TextInput
            style={styles.fieldControl}
            keyboardType="number-pad"
            onBlur={event => handleQuantityInputChange(color.id, sizeId, event.nativeEvent.text)}
          />
        </View>
      )
    }
  }

  function renderSizeRow(size, sizeIndex) {
    return (
      <View
        key={size.id}
        style={[
          styles.row,
          ...sizeIndex === sizes.length - 1 ? [styles.lastRow] : [],
        ]}
      >
        <View style={[styles.column, styles.sizeColumn]}>
          <Text style={styles.sizeName}>{getName(size.name)}</Text>
        </View>

        {colors.map(getRenderQuantityInput(size.id))}
      </View>
    )
  }

  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        ...colors.length > 2 ? [styles.contentWithPadding] : [],
      ]}
    >
      <View style={styles.header}>
        <View style={[styles.column, styles.sizeColumn]} />

        {colors.map(renderColorCell)}
      </View>

      <View style={styles.body}>
        {sizes.map(renderSizeRow)}
      </View>
    </ScrollView>
  )
}

export default SizesGrid
