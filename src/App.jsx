import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc } from './Textdesc.jsx'
import { CheckItem } from './CheckItem'
import {InfoCards} from "./InfoCards.jsx";
import { Button } from './Button.jsx'
import { Input } from './Input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="logo">
            <img src={duckLogo} alt="DuckDuckGo logo" className="main_logo"/>
        </div>
        <div className='textdesc'>
            <h2>¿Cansado de que te rastreen? Podemos ayudarte.</h2>
            <p>Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:</p>
        </div>
        <Input/>
        <CheckItem />
        <Button className="blue" > Añadir DuckDuckGo a Chrome</Button>
        <Button className="green">Instalar DuckDuckGo </Button>
        <Textdesc className='textdesc'>
            <h2>No guardamos tu información <br></br> personal. Y nunca lo haremos.</h2>
            <p>Nuestra política de privacidad es simple: No colectamos <br></br> o compartimos ninguna información personal tuya.</p>
        </Textdesc>
        <InfoCards/>
    </div>
  )
}

export default App
