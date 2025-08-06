import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>pagina de React JS</h1>
      <MotivosParaUsarReact/>
    </>
  )
}

export default App
