import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Landing from './components/Landing/landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing></Landing>
    </div>
  )
}

export default App
