const convertWeight = (unit, value) => {
  switch (unit) {
    case 'kg':
      return value * 0.453592
    case 'lb':
      return value * 2.20462
    default:
      throw Error('invalid unit provided')
  }
}

export const convertWeightRecord = (unit, weightRecord) => {
  return Object.assign({}, weightRecord, {
    data: weightRecord.data.map(record => {
      return Object.assign({}, record, {
        weight: convertWeight(unit, record.weight)
      })
    })
  })
}
