import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from './styledComponents'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  return (
    <div>
      <div style={hideWhenVisible}>
        <Button id={props.buttonId} onClick={toggleVisibility} className="viewButton">{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <Button onClick={toggleVisibility} className="hideButton">{props.closeButtonLabel}</Button>
      </div>
    </div>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string.isRequired
}

export default Togglable