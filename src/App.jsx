import { useState } from 'react'
import './firebase'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="title-row">
      <h1>Mohamed's Recipes</h1>
      </div>
    </div>
  )
}

export default App
