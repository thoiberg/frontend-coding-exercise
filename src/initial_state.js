import initialData from './data.json'

export default () => {
  const data = {results: {}, saved: {}}

  initialData.results.forEach(datum => {
    data.results[datum.id] = datum
  })

  initialData.saved.forEach(datum => {
    data.saved[datum.id] = datum
  })

  return {properties: data}
}