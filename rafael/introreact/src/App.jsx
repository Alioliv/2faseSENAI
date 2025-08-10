import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import UsarReact from './components/UsarReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>pagina de React JS</h1>
      <UsarReact/>
    </>
  )
}

export default App
