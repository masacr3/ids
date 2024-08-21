import './App.css'
import Pantalla from './componentes/Pantalla'
import teclado from './assets/teclado.png'
import Footer from './componentes/Footer'
import { useState } from 'react'

function App() {
  const [presionoPrompt, setPresionoPrompt] = useState(false)
  const [op, setOp] = useState(false)

  return (
    <>
      <Pantalla setPresionoPrompt={setPresionoPrompt} op={op} setOp={setOp}/>
      { presionoPrompt && <Footer setOp={setOp}/> }
    </>
  )
}

export default App
