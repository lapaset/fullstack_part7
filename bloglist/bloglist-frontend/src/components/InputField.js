import React from 'react'

const InputField = ({ id, field, text }) => (
  <div>
    {text}
    <input {...field} id={id} />
  </div>
)

export default InputField