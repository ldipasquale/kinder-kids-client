import { StyleSheet } from 'react-native'
import { Colors, Spacings, FontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.LIGHTER_GRAY,
    width: '30%',
    marginBottom: Spacings.XLARGE,
    borderRadius: Spacings.XSMALL,
    height: 120,
  },
  newOption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyOption: {
    width: '30%',
    marginBottom: Spacings.XLARGE,
  },
  optionBorder: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: Spacings.TINY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionColor: {
    width: Spacings.XHUGE,
    height: Spacings.XHUGE,
    borderRadius: Spacings.XHUGE,
    borderWidth: 1,
    borderColor: Colors.LIGHTEN_GRAY,
    marginBottom: Spacings.XSMALL,
  },
  optionColorName: {
    backgroundColor: Colors.WHITE,
    borderRadius: Spacings.XSMALL,
    padding: Spacings.XSMALL,
  },
  optionColorNameLabel: {
    textTransform: 'uppercase',
    fontSize: FontSizes.XXSMALL,
    fontWeight: '500',
    textAlign: 'center',
  },
  optionPicture: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  crossIcon: {
    position: 'absolute',
    right: Spacings.STANDARD,
    top: Spacings.STANDARD,
    zIndex: 2,
  },
  plusIcon: {
  },
})
