import { StyleSheet } from 'react-native'
import { Spacings, FontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: Spacings.XLARGE,
  },
  message: {
    fontSize: FontSizes.LARGE,
  },
})
