import React from 'react'
import PropTypes from 'prop-types'

import { Dimensions, View, Image, Animated, Easing, TouchableOpacity } from 'react-native'

import Icons from '@assets/icons'
import { Others } from '@stylesheets'

import styles from './styles'

const HIDDEN_CONTENT_BOTTOM_POSITION = Dimensions.get('screen').height
const DEFAULT_OVERLAY_OPACITY = 0.3

class Modal extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      contentAnimation: new Animated.Value(HIDDEN_CONTENT_BOTTOM_POSITION),
      overlayAnimation: new Animated.Value(0),
    }

    this.animateContent = this.animateContent.bind(this)
    this.animateOverlay = this.animateOverlay.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    return this.animateOverlay(DEFAULT_OVERLAY_OPACITY).start(() => (
      this.animateContent(0).start()
    ))
  }

  handleClose() {
    const { navigation } = this.props

    return this.animateContent(HIDDEN_CONTENT_BOTTOM_POSITION).start(() => (
      this.animateOverlay(0).start(() => {
        navigation.goBack()
      })
    ))
  }

  animateContent(topPosition) {
    const { contentAnimation } = this.state

    return Animated.timing(contentAnimation, {
      toValue: topPosition,
      easing: Easing.cubic,
      duration: 700,
    })
  }

  animateOverlay(opacityValue) {
    const { overlayAnimation } = this.state

    return Animated.timing(overlayAnimation, {
      toValue: opacityValue,
      duration: 300,
    })
  }

  render() {
    const { renderContent } = this.props
    const { overlayAnimation, contentAnimation } = this.state

    return (
      <>
        <Animated.View
          style={[
            styles.fullScreenContainer,
            styles.container,
            { opacity: overlayAnimation },
          ]}
        />

        <Animated.View
          style={[
            styles.fullScreenContainer,
            styles.contentContainer,
            {
              transform: [{ translateY: contentAnimation }],
            },
          ]}
        >
          <View style={styles.content}>
            <TouchableOpacity
              onPress={this.handleClose}
              activeOpacity={0.8}
              style={styles.backIconContainer}
              hitSlop={Others.HIT_SLOP}
            >
              <Image source={Icons.PREV} />
            </TouchableOpacity>

            {renderContent({ handleClose: this.handleClose })}
          </View>
        </Animated.View>
      </>
    )
  }
}

Modal.propTypes = {
  renderContent: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Modal
