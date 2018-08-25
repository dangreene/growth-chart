import React, { Component } from 'react'
import GrowthChart from './GrowthChart'
import growthData from './growth-data.json'
import percentileData from './cdc-percentile-data.json'
import WeightUnitSelector from './WeightUnitSelector'

class App extends Component {
  constructor () {
    super()
    this.state = {
      percentileData,
      growthData,
      weightUnit: 'kg'
    }
  }
  render () {
    return (
      <div className='App'>
        <WeightUnitSelector />
        <GrowthChart
          growthData={this.state.growthData}
          percentileData={this.state.percentileData}
          weightUnit={this.state.weightUnit}
          width={800}
          height={800}
        />
      </div>
    )
  }
}

export default App
