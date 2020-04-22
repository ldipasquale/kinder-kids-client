import { StyleSheet } from 'react-native'
import { Colors, Spacings, Others } from '@stylesheets'

const SIZE = Spacings.XXXHUGE

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: Others.BORDER_RADIUS,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  icon: {
    width: Spacings.XLARGE,
    height: Spacings.XLARGE,
    resizeMode: 'contain',
  },
  bottomFixedContainer: {
    position: 'absolute',
    bottom: Spacings.HUGE,
    right: Spacings.HUGE,
  },
  leftBottomFixedContainer: {
    position: 'absolute',
    bottom: Spacings.HUGE,
    left: Spacings.HUGE,
    right: 'auto',
  },
})
