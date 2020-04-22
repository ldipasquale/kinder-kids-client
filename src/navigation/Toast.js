import Toast from 'react-native-root-toast'

import { Colors, Spacings, FontSizes } from '@stylesheets'

export default {
  show: message => Toast.show(message, {
    backgroundColor: Colors.BLACK,
    containerStyle: {
      paddingHorizontal: Spacings.MEDIUM,
      paddingVertical: Spacings.SMALL,
    },
    textStyle: {
      fontSize: FontSizes.STANDARD,
    },
  }),
}
