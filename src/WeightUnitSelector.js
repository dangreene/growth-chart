import React from 'react'

export default props => (
  <div>
    <label htmlFor='weight-unit-select'>Weight Unit:</label>
    <select
      id='weight-unit-select'
      onChange={e => props.onUnitChange(e.target.value)}
    >
      <option value='kg'>Kilograms (kg)</option>
      <option value='lb'>Pounds (lb)</option>
    </select>
  </div>
)
