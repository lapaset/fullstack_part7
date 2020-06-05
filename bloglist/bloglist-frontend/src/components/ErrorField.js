import React from 'react'
import { useSelector } from 'react-redux'

const ErrorField = () => {
  const errorMessage = useSelector(s => s.errorMessage)

  return errorMessage
    ? <div className="errorField">
        Error: {errorMessage}
      </div>
    : <div />
}

export default ErrorField