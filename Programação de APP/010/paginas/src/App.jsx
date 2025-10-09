import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Sorveteria from './pages/Sorveteria'
import Borracharia from './pages/Borracharia'
import Bar from './pages/Bar'

function App() {
  

  return (
    <>
      <div>

        <h1>Páginas do Tião</h1>
        <Home/>
        <Bar/>
        <Sorveteria/>
        <Borracharia/>
      </div>
      
    </>
  )
}

export default App


