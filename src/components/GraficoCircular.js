import React from 'react'
import { Chart} from 'react-google-charts'
import { data } from '../db/Productos'

function GraficoCircular() {
  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={{
        title: "Grafico Productos",
      }}
    />
  )
}

export default GraficoCircular