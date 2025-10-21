// Tailwind 안 쓸 때 App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h1>👋 Welcome to My React App</h1>
      <p>Click the button to increase the count.</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default App
