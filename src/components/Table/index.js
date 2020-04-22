import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './styles'

export default ({ columns, rows }) => {
  function getColumnStyles(column, columnIndex) {
    const columnStyles = []

    if (columnIndex === 0) {
      columnStyles.push(styles.firstColumn)
    } else if (columnIndex === columns.length - 1) {
      columnStyles.push(styles.lastColumn)
    }

    return columnStyles
  }

  function renderHeaderRow(column, columnIndex) {
    return (
      <View
        key={column.id}
        style={[styles.cell, styles.headerCell, ...getColumnStyles(column, columnIndex)]}
      >
        <Text
          style={[
            styles.cellLabel,
            ...column.textAlign === 'right' ? [styles.rightCellLabel] : [],
            styles.columnName,
          ]}
        >
          {column.name}
        </Text>
      </View>
    )
  }

  function renderCell(column, columnIndex, row) {
    return (
      <View
        key={`${column.id}${row.id}`}
        style={[styles.cell, ...getColumnStyles(column, columnIndex)]}
      >
        {column.render ? column.render(row) : (
          <Text
            style={[
              styles.cellLabel,
              ...column.textAlign === 'right' ? [styles.rightCellLabel] : [],
            ]}
          >
            {column.format ? column.format(row) : row[column.id]}
          </Text>
        )}
      </View>
    )
  }

  function renderColumn(column, columnIndex) {
    return (
      <View
        key={column.id}
        style={[
          styles.column,
          ...column.width ? [{
            minWidth: column.width,
          }] : [],
        ]}
      >
        {renderHeaderRow(column, columnIndex)}

        {rows.map(row => renderCell(column, columnIndex, row))}
      </View>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ScrollView horizontal>
        {columns.map(renderColumn)}
      </ScrollView>
    </ScrollView>
  )
}
