import { useState } from 'react'
import TipoCombustivel from './components/TipoCombustivel'
import CorridaLesmas from './Components/CorridaLesmas'
import FilmeVovo from './Components/FilmeVovo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Exercicios de Imputs</h1>
        <TipoCombustivel/>
        <CorridaLesmas/>
        <FilmeVovo/>
      </div>
      
    </>
  )
}

export default App
