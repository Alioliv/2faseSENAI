import { useState } from 'react'

//import './App.css'
import Navbar from './componentns/Navbar'
import Corpo from './componentns/Corpo'
import Corpo from './componentns/Texto'
import Corpo from './componentns/Textao'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="app-container">
      <Navbar/>
      <Corpo/>
      <Texto/>
      <Textao/>
    </div>
      
  )
}

export default App
