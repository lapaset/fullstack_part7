import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

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
        <button id={props.buttonId} onClick={toggleVisibility} className="viewButton">{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        <button onClick={toggleVisibility} className="hideButton">{props.closeButtonLabel}</button>
        {props.children}
      </div>
    </div>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string.isRequired
}

export default Togglable