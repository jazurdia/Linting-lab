import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc } from './Textdesc.jsx'
import { CheckItem } from './CheckItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
            <img src={duckLogo} alt="react logo" />
        </div>
        <Textdesc />
        <CheckItem />
    </div>
  )
}

export default App
