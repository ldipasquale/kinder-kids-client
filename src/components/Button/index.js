import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Image } from 'react-native'

import icons from '@assets/icons'
import { Others } from '@stylesheets'

import styles from './styles'

const Button = ({ icon, style, bottomFixed, fixedPosition, onPress }) => (
  <TouchableOpacity
    style={[
      styles.container,
      ...bottomFixed ? [
        styles.bottomFixedContainer,
        ...fixedPosition === 'left' ? [styles.leftBottomFixedContainer] : [],
      ] : [],
      ...style !== null ? [style] : [],
    ]}
    onPress={onPress}
    activeOpacity={0.8}
    hitSlop={Others.HIT_SLOP}
    testID="Button"
  >
    <Image
      source={icons[icon.toUpperCase()]}
      style={styles.icon}
    />
  </TouchableOpacity>
)

Button.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.object,
  bottomFixed: PropTypes.bool,
  fixedPosition: PropTypes.oneOf(['left', 'right']),
  onPress: PropTypes.func.isRequired,
}

Button.defaultProps = {
  icon: 'next',
  style: null,
  bottomFixed: false,
  fixedPosition: 'right',
}

export default Button
