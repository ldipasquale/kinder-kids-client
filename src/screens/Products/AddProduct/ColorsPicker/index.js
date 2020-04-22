import React, { useState } from 'react'

import { TouchableOpacity, View, Image } from 'react-native'
import { Prompt, Spinner } from '@components'

import { Color, File } from '@services'
import { sleep } from '@utils'

import Icons from '@assets/icons'

import Option from './Option'

import styles from './styles'

const ColorsPicker = ({ value, onChange, options: initialOptions, onUpdateOptions }) => {
  const [values, setValues] = useState(value || [])
  const [options, setOptions] = useState(initialOptions)
  const [isPromptVisisble, setIsPromptVisible] = useState(false)
  const [isUploadingNewFile, setIsUploadingNewFile] = useState(false)

  function handleChange(optionId, imageUrl) {
    let newValues

    if (imageUrl === null) {
      newValues = { ...values }
      delete newValues[optionId]
    } else {
      newValues = {
        ...values,
        [optionId]: imageUrl,
      }
    }

    setValues(newValues)
    onChange(newValues)
  }

  async function handleAddNewOption(name) {
    try {
      setIsPromptVisible(false)
      setIsUploadingNewFile(true)

      const color = await Color.create(name)

      await sleep(500)
      const imageUrl = await File.uploadPhoto()

      const newOptions = [
        ...options,
        color,
      ]

      setOptions(newOptions)
      onUpdateOptions(newOptions)

      return handleChange(color.id, imageUrl)
    } finally {
      setIsUploadingNewFile(false)
    }
  }

  return (
    <>
      <View style={styles.container}>
        {options.map(option => (
          <Option
            key={option.id}
            id={option.id}
            color={option.color}
            name={option.name}
            onChange={handleChange}
            imageUrl={values[option.id]}
          />
        ))}

        <TouchableOpacity
          style={[styles.option, styles.newOption]}
          onPress={() => setIsPromptVisible(true)}
        >
          {isUploadingNewFile ? (
            <Spinner />
          ) : (
            <Image source={Icons.BIG_PLUS} />
          )}
        </TouchableOpacity>

        {(options.length + 1) % 3 === 2 && (
          <View style={styles.emptyOption} />
        )}
      </View>

      <Prompt
        visible={isPromptVisisble}
        title="Agregar nuevo color"
        placeholder="Nombre del color"
        onCancel={() => setIsPromptVisible(false)}
        onSubmit={handleAddNewOption}
      />
    </>
  )
}

export default ColorsPicker
