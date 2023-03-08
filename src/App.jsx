import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import { Textdesc } from './Textdesc.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={duckLogo} alt="react logo" />
      </div>
      <Textdesc />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
