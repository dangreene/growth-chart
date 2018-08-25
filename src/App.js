import React, { Component } from 'react'
import GrowthChart from './GrowthChart'
import growthData from './growth-data.json'
import percentileData from './cdc-percentile-data.json'
import WeightUnitSelector from './WeightUnitSelector'
import { convertWeightRecord } from './weight-converter'

class App extends Component {
  constructor () {
    super()
    this.state = {
      percentileData,
      growthData,
      weightUnit: 'kg'
    }
    this.handleUnitChange = this.handleUnitChange.bind(this)
  }
  handleUnitChange (unit) {
    this.setState({
      percentileData: this.state.percentileData.map(record =>
        convertWeightRecord(unit, record)
      ),
      growthData: convertWeightRecord(unit, this.state.growthData),
      weightUnit: unit
    })
  }
  render () {
    return (
      <div className='App'>
        <WeightUnitSelector onUnitChange={this.handleUnitChange} />
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
