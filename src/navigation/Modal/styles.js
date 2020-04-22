import { StyleSheet } from 'react-native'
import { Colors, Spacings, Others } from '@stylesheets'

export default StyleSheet.create({
  fullScreenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: Colors.BLACK,
    zIndex: 2,
  },
  contentContainer: {
    zIndex: 3,
    padding: Spacings.LARGE,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: Colors.WHITE,
    borderRadius: Others.BIG_BORDER_RADIUS,
    padding: Spacings.XLARGE,
  },
  backIconContainer: {
    marginBottom: Spacings.XLARGE,
  },
})
