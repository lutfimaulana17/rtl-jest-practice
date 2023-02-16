import React from 'react'
import './checkBox.css'

const CheckBox = ({
    label,
    ...rest
}) => {
    return (
        <label className="checkbox-container">
            <input type="checkbox" data-testid="check-box" {...rest}/>
            <span className="checkmark"></span>
            {label}
        </label>
    )
}

export default CheckBox