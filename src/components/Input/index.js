import React from 'react'
import PropTypes from 'prop-types';

export default function Input({type, name, value, onChange}) {
  return (
    <div>
        <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  )
}

Input.defaultProps = {
  name: 'name'
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
