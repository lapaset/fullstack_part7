import React from 'react'
import { Input } from './styledComponents'

const InputField = ({ id, field, text }) => (
  <div>
    {text}<br />
    <Input {...field} id={id} />
  </div>
)

export default InputField