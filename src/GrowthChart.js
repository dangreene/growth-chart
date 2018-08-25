import React from 'react'
import {
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'

export default props => {
  return (
    <div>
      <ScatterChart width={props.width} height={props.height}>
        <CartesianGrid />
        <XAxis
          dataKey='age'
          type='number'
          name='age'
          unit='mo'
          tickCount={10}
        />
        <YAxis
          dataKey='weight'
          type='number'
          name='weight'
          unit={props.weightUnit}
          tickCount={10}
        />
        <Tooltip />
        <Legend />
        {props.percentileData.map((set, index) => (
          <Scatter
            key={index}
            name={set.description}
            data={set.data}
            line
            fill='black'
          />
        ))}
        <Scatter
          name={props.growthData.description}
          data={props.growthData.data}
          line
          fill='blue'
        />
      </ScatterChart>
    </div>
  )
}
