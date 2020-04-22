import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors, Spacings, FontSizes } from '@stylesheets'

export default StyleSheet.create({
  screenOverlay: {
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
    opacity: 0.98,
  },
  dialogPrompt: {
    backgroundColor: Colors.LIGHTEN_GRAY,
    borderRadius: Spacings.XSMALL,
    marginTop: 128,
    marginHorizontal: Spacings.LARGE,
    padding: Spacings.MEDIUM,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSizes.XLARGE,
    color: Colors.BLACK,
  },
  textInput: {
    width: '100%',
    paddingHorizontal: Spacings.MEDIUM,
    paddingVertical: Spacings.STANDARD,
    textAlignVertical: 'bottom',
    margin: Spacings.XLARGE,
    borderRadius: Spacings.XLARGE,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  buttonsOuterView: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonsDivider: {
    ...Platform.select({
      ios: {
        width: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      android: {
        width: 20,
      },
    }),
  },
  buttonsInnerView: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        borderTopWidth: 0.5,
        flex: 1,
      },
    }),
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
    marginTop: Spacings.STANDARD,
    padding: Spacings.STANDARD,
  },
  cancelButtonText: {
    color: Colors.BLACK,
    fontSize: FontSizes.LARGE,
    fontWeight: '600',
  },
  submitButtonText: {
    color: Colors.BLUE,
    fontSize: FontSizes.LARGE,
    fontWeight: '600',
  },
})
