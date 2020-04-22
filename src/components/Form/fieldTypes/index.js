import React from 'react'
import { TextInput } from 'react-native'
import Select from './Select'

import styles from './styles'

import FieldTypes from './list'

function renderText(field, { onChange, value, isInvalid }) {
  return (
    <TextInput
      placeholder={field.name}
      style={[
        styles.container,
        ...isInvalid ? [styles.invalidContainer] : [],
      ]}
      onChangeText={onChange}
      value={value}
      {...field.type === FieldTypes.NUMBER && {
        keyboardType: 'numeric',
      }}
    />
  )
}

function renderOptions(field, { onChange, value, isInvalid }) {
  return (
    <Select
      value={value}
      placeholder={field.name}
      options={field.options}
      style={[
        styles.container,
        ...isInvalid ? [styles.invalidContainer] : [],
      ]}
      onChange={onChange}
      onAddNewOption={field.onAddNewOption}
      isDisabled={field.isDisabled}
    />
  )
}

const renderByFieldType = {
  [FieldTypes.TEXT]: renderText,
  [FieldTypes.NUMBER]: renderText,
  [FieldTypes.OPTIONS]: renderOptions,
}

export default function (field, props) {
  if (field.render) {
    return field.render(field, props)
  }

  const renderField = renderByFieldType[field.type] || renderText

  return renderField(field, props)
}
