import React, { useRef, useState } from 'react'
import { Toast } from '@navigation'

import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import Prompt from '@components/Prompt'

import styles from './styles'

const otherOption = {
  label: 'Otro',
  value: -1,
}

const Select = ({ value, onChange, onAddNewOption, options, placeholder, style, isDisabled }) => {
  const inputRef = useRef(null)
  const [internalValue, setInternalValue] = useState(value)
  const [isPromptVisisble, setIsPromptVisible] = useState(false)

  function handleChange(newValue) {
    setInternalValue(newValue)

    const isANumberValue = /^\d+$/.test(newValue)
    onChange(isANumberValue ? newValue.toString() : newValue)

    if (newValue === otherOption.value) {
      inputRef.current.togglePicker()

      setIsPromptVisible(true)
    }
  }

  async function handleAddNewOption(name) {
    setIsPromptVisible(false)

    try {
      const newOption = await onAddNewOption(name)

      handleChange(newOption.id)
    } catch (error) {
      Toast.show('Hubo un error al crear la nueva opción')
    }
  }

  function handleCancelAddNewOption() {
    setIsPromptVisible(false)

    return handleChange(null)
  }

  return (
    <>
      <View
        style={[
          ...style,
          ...isDisabled ? [styles.disabledContainer] : [],
        ]}
      >
        <RNPickerSelect
          ref={inputRef}
          items={[
            ...options || [],
            ...onAddNewOption ? [otherOption] : [],
          ]}
          onValueChange={handleChange}
          value={internalValue}
          placeholder={{
            value: '',
            label: placeholder,
          }}
          disabled={isDisabled}
        />
      </View>

      <Prompt
        visible={isPromptVisisble}
        title={`Agregar ${placeholder.toLowerCase()}`}
        placeholder={`Nombre de ${placeholder.toLowerCase()}`}
        onCancel={handleCancelAddNewOption}
        onSubmit={handleAddNewOption}
      />
    </>
  )
}

export default Select
