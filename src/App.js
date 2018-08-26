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
    const percentileData = this.state.weightUnit === 'kg'
      ? dataSet
      : dataSet.map(record =>
          convertWeightRecord(this.state.weightUnit, record)
        )
    this.setState({
      percentileData
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
        <h2>Growth Chart</h2>
        <GrowthChart
          growthData={this.state.growthData}
          percentileData={this.state.percentileData}
          weightUnit={this.state.weightUnit}
          width={800}
          height={800}
        />
        <h2>Settings</h2>
        <PercentileDataSelector onDataChange={this.handleDataChange} />
        <WeightUnitSelector onUnitChange={this.handleUnitChange} />
        <h2>Growth Data</h2>
        <table>
          <thead>
            <tr>
              <th>Age</th><th>Weight ({this.state.weightUnit})</th>
            </tr>
          </thead>
          <tbody>
            {this.state.growthData.data.map((record, index) => (
              <tr key={index}>
                <td>{record.age}</td>
                <td>{record.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
