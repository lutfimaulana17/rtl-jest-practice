import React from 'react'
import './textInput.css'

const TextInput = ({placeholder, ...rest}) => {
  return (
    <input className="input" type="text" placeholder={placeholder} data-testid="text-input" {...rest}/>
  )
}

export default TextInput