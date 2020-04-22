import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native'

import styles from './styles'

export default ({ visible, title, placeholder, onCancel, onSubmit }) => {
  const [value, setValue] = useState('')

  function handleSubmit() {
    return onSubmit(value)
  }

  function handleCancel() {
    setValue('')

    return onCancel()
  }

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={handleCancel}
    >
      <View style={styles.screenOverlay}>
        <View style={styles.dialogPrompt}>
          <Text style={styles.title}>{title}</Text>

          <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            onChangeText={setValue}
            onSubmitEditing={handleSubmit}
            autoFocus
          />

          <View style={styles.buttonsOuterView}>
            <View style={styles.buttonsInnerView}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <View style={styles.buttonsDivider} />
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
