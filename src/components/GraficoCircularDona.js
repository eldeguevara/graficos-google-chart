import React from 'react';
import { data } from '../db/Productos'
import { Chart } from 'react-google-charts'

function GraficoCircularDona() {
  
  return (
    <Chart
      chartType='PieChart'
      data={data}
      options={{
        title: "Grafico Productos",
        pieHole: 0.3
      }}
    />
  )
}

export default GraficoCircularDona