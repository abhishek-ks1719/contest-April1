import React from 'react'

const Input = ({label, type, name, value, onClick}) => {
  return (
    <div className="inputGroup">
    <div className="label">{label}</div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onClick}
    />
  </div>
  )
}

export default Input