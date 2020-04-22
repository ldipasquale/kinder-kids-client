import { StyleSheet } from 'react-native'
import { Colors, Spacings, FontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    marginTop: Spacings.STANDARD,
  },
  content: {
    paddingBottom: Spacings.HUGE * 3,
    flex: 1,
  },
  column: {
    minWidth: 80,
  },
  firstColumn: {
    paddingLeft: Spacings.XLARGE,
  },
  lastColumn: {
    paddingRight: Spacings.XLARGE,
  },
  cell: {
    paddingHorizontal: Spacings.MEDIUM,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTER_GRAY,
    height: Spacings.XXHUGE,
    justifyContent: 'center',
  },
  headerCell: {
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  columnName: {
    fontSize: FontSizes.XSMALL,
    fontWeight: '500',
    color: Colors.GRAY,
  },
  cellLabel: {
    textAlign: 'left',
    color: Colors.DARK_GRAY,
    fontSize: FontSizes.SMALL,
  },
  rightCellLabel: {
    textAlign: 'right',
  },
})
