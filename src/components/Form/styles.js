import { StyleSheet } from 'react-native'
import { Colors, Spacings } from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHTEN_GRAY,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: Spacings.HUGE * 2,
  },
  fieldsContainer: {
    marginBottom: Spacings.LARGE,
    padding: Spacings.LARGE,
  },
  field: {
    marginBottom: Spacings.MEDIUM,
  },
})
