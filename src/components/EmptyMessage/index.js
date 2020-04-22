import React from 'react'
import PropTypes from 'prop-types'

import { View, Image, Text } from 'react-native'

import icons from '@assets/icons'

import styles from './styles'

const EmptyMessage = ({ icon, children }) => (
  <View style={styles.container}>
    <Image source={icon} />

    <View style={styles.content}>
      <Text style={styles.message}>{children}</Text>
    </View>
  </View>
)

EmptyMessage.propTypes = {
  icon: PropTypes.number,
  children: PropTypes.string,
}

EmptyMessage.defaultProps = {
  icon: icons.ghost,
  children: 'There are no items',
}

export default EmptyMessage
