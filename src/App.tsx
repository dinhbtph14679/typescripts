import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  return (
    <div className="App">
      <ShowInfo name="Dinh" age={10} />
    </div>
  )
}

export default App
