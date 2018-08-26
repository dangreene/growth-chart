import React, { Component } from 'react'
import GrowthChart from './GrowthChart'
import growthData from './growth-data.json'
import cdcPercentileData from './cdc-percentile-data.json'
import WeightUnitSelector from './WeightUnitSelector'
import PercentileDataSelector from './PercentileDataSelector'
import { convertWeightRecord } from './weight-converter'
import whoPercentileData from './who-percentile-data.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      percentileData: whoPercentileData,
      growthData,
      weightUnit: 'kg'
    }
    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }
  handleDataChange (data) {
    const dataSet = data === 'who' ? whoPercentileData : cdcPercentileData
    this.setState({
      percentileData: dataSet.map(record =>
        convertWeightRecord(this.state.weightUnit, record)
      )
    })
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
        <PercentileDataSelector onDataChange={this.handleDataChange} />
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
