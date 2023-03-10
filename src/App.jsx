import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc, Textdescparagraph } from './Textdesc.jsx'
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
        <Textdesc className='textdesc'>
            ¿Cansado de que te rastreen? Podemos ayudarte.
        </Textdesc>
        <Textdescparagraph className='textdesc'> 
          No almacenamos información personal. No te persegimos con anuncios. No te rastreamos nunca.
        </Textdescparagraph>
        <Input/>
        <CheckItem />
        <Button className="blue" > Añadir DuckDuckGo a Chrome</Button>
        <Button className="green">Instalar DuckDuckGo </Button>
        <Textdesc className='textdesc'>
            No guardamos tu información <br></br> personal. Y nunca lo haremos. 
        </Textdesc>
        <Textdescparagraph className='textdesc'>
        Nuestra política de privacidad es simple: No colectamos <br></br> o compartimos ninguna información personal tuya.
        </Textdescparagraph>

        <InfoCards/>
    </div>
  )
}

export default App
