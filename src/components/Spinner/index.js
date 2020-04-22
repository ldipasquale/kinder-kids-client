import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { Colors } from '@stylesheets'
import styles from './styles'

export default () => (
  <View style={styles.container} testID="Spinner">
    <ActivityIndicator
      size="large"
      color={Colors.BLUE}
    />
  </View>
)
