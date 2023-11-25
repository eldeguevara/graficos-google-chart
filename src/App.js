import React from 'react'
import './assets/css/App.css'
import { graficas } from './material/Graficos'

function App() {
  return (
    <div className='container'>
      {
        graficas.map((item,index)=>(
          <div key={ index } className='containerGrafica'>
            { item.grafica }
          </div>
        ))
      }
    </div>
  )
}

export default App