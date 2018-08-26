import React from 'react'

export default props => (
  <div>
    <label htmlFor='percentile-data-select'>Percentile Data:</label>
    <select
      id='percentile-data-select'
      onChange={e => props.onDataChange(e.target.value)}
    >
      <option value='who'>WHO</option>
      <option value='cdc'>CDC</option>
    </select>
  </div>
)
