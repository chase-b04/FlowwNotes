import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Floww Notes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Money: {count}
        </button>
        <p>
          Uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </p>
      </div>
      <p className="read-the-docs">
        :3
      </p>
    </>
  )
}

export default App
