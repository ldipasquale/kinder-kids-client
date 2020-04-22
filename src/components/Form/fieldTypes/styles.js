import { StyleSheet } from 'react-native'
import { Colors, Spacings } from '@stylesheets'

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    paddingHorizontal: Spacings.STANDARD,
    paddingVertical: Spacings.MEDIUM,
  },
  invalidContainer: {
    borderBottomColor: Colors.RED,
  },
})
