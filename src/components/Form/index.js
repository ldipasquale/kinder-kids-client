import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import Step from './Step'

const Form = ({ steps, fields, onChange, onSubmit }) => {
  const [values, setValues] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const stepsLength = steps.length > 0 ? steps.length : 1
  const isLastStep = currentStepIndex === stepsLength - 1

  const handlePressNextStep = useCallback(async stepValues => {
    const newValues = {
      ...values,
      ...stepValues,
    }

    await setValues(newValues)

    if (isLastStep) {
      onSubmit(newValues)
    } else {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  })

  const handlePressPrevStep = useCallback(() => currentStepIndex > 0 && setCurrentStepIndex(currentStepIndex - 1))

  const currentStepFields = steps.length > 0 ? steps[currentStepIndex] : fields

  return (
    <Step
      initialValues={values}
      fields={currentStepFields}
      onChange={onChange}
      onSubmit={handlePressNextStep}
      {...currentStepIndex > 0 && {
        onBack: handlePressPrevStep,
      }}
      {...isLastStep && {
        submitButtonIcon: 'tick',
      }}
    />
  )
}

Form.propTypes = {
  steps: PropTypes.array,
  fields: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  steps: [],
  fields: [],
  onChange: null,
}

export default Form
