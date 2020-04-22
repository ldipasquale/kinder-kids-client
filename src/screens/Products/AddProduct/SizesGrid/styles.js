import { StyleSheet } from 'react-native'
import { Colors, Spacings, FontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: Spacings.XSMALL,
    padding: Spacings.LARGER,
  },
  content: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  contentWithPadding: {
    paddingRight: Spacings.XHUGE,
  },
  column: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: Colors.LIGHTER_GRAY,
    padding: Spacings.STANDARD,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTER_GRAY,
    flex: 1,
    alignItems: 'center',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTER_GRAY,
  },
  headerColumn: {
    alignItems: 'center',
  },
  sizeColumn: {
    flex: 0.3,
    borderLeftWidth: 0,
    minWidth: 50,
  },
  sizeName: {
    textAlign: 'right',
  },
  fieldControl: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    paddingVertical: Spacings.XSMALL,
    paddingHorizontal: Spacings.XSMALL,
    marginHorizontal: Spacings.SMALL,
    textAlign: 'center',
  },
  colorColumn: {
    flex: 1,
    minWidth: 80,
  },
  colorCircle: {
    width: Spacings.LARGE,
    height: Spacings.LARGE,
    borderRadius: Spacings.LARGE,
  },
  colorName: {
    textTransform: 'uppercase',
    fontSize: FontSizes.XXSMALL,
    marginTop: Spacings.XSMALL,
  },
})
