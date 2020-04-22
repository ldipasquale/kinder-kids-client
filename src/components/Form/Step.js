import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import { View, ScrollView } from 'react-native'

import Button from '../Button'

import renderFieldType from './fieldTypes'

import styles from './styles'

const getProcessedFields = fields => values => (typeof fields === 'function'
  ? fields({ values })
  : fields)

const FormStep = ({
  fields,
  submitButtonIcon,
  initialValues,
  onChange,
  onBack,
  onSubmit,
}) => {
  function validate(values) {
    const processedFields = getProcessedFields(fields)(values)

    const errors = processedFields.reduce((accumulator, field) => ({
      ...accumulator,
      ...field.isRequired && !values[field.id] && {
        [field.id]: 'required',
      },
      ...field.validate && !field.validate(values[field.id]) && {
        [field.id]: 'invalid',
      },
    }), {})

    return errors
  }

  function handleFieldChange({ setFieldValue, field }) {
    return function (value) {
      if (field.onChange) {
        field.onChange({ value, setFieldValue })
      }

      if (onChange) {
        onChange(field.id, value)
      }

      return setFieldValue(field.id, value)
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, handleSubmit, values, errors }) => {
          const processedFields = getProcessedFields(fields)(values)

          return (
            <>
              <ScrollView style={styles.fieldsContainer}>
                {processedFields.map(field => (
                  <View
                    key={field.id}
                    style={styles.field}
                  >
                    {renderFieldType(field, {
                      onChange: handleFieldChange({ setFieldValue, field }),
                      value: values[field.id],
                      isInvalid: errors[field.id],
                    })}
                  </View>
                ))}
              </ScrollView>

              {onBack && (
                <Button
                  bottomFixed
                  fixedPosition="left"
                  onPress={onBack}
                  icon="prev"
                />
              )}

              <Button
                bottomFixed
                onPress={handleSubmit}
                icon={submitButtonIcon}
              />
            </>
          )
        }}
      </Formik>
    </View>
  )
}

FormStep.propTypes = {
  fields: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  submitButtonIcon: PropTypes.string,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
}

FormStep.defaultProps = {
  submitButtonIcon: undefined,
  onBack: null,
}

export default FormStep
