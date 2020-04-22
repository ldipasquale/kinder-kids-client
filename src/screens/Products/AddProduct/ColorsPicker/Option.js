import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { Spinner } from '@components'

import { Colors } from '@stylesheets'
import { File } from '@services'

import Icons from '@assets/icons'

import styles from './styles'

function getBorderColor(color) {
  if (!color) {
    return Colors.GRAY
  }

  if (color === Colors.WHITE) {
    return Colors.LIGHTER_GRAY
  }

  return color
}

const ColorsPickerOption = ({ id, color, imageUrl, name, onChange }) => {
  const [isUploading, setIsUploading] = useState(false)

  async function handlePress() {
    if (imageUrl) {
      return onChange(id, null)
    }

    try {
      const newImageUrl = await File.uploadPhoto({
        onTakePhoto: () => setIsUploading(true),
      })

      return onChange(id, newImageUrl)
    } finally {
      setIsUploading(false)
    }
  }

  const selectedStyle = imageUrl ? [{
    borderColor: getBorderColor(color),
  }] : []

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.option, ...selectedStyle]}
    >
      <>
        {imageUrl && (
          <Image
            style={styles.crossIcon}
            source={Icons.CROSS}
          />
        )}

        <View style={[styles.optionBorder, ...selectedStyle]}>
          {isUploading ? (
            <Spinner />
          ) : (
            <>
              {imageUrl ? (
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.optionPicture}
                />
              ) : color && (
                <View
                  style={[
                    styles.optionColor,
                    { backgroundColor: color },
                  ]}
                />
              )}

              <View style={styles.optionColorName}>
                <Text style={styles.optionColorNameLabel}>{name}</Text>
              </View>
            </>
          )}
        </View>
      </>
    </TouchableOpacity>
  )
}

export default ColorsPickerOption
