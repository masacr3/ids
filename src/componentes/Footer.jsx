import React from 'react'
import teclado from '../assets/teclado.png'

function Footer({setOp}) {
  return (
    <div className='flex-col-c down press-start-2p-regular text-align-c'>
      <img src={teclado} className='teclado' onClick={()=> setOp(true)}/>
      <p>Leonel R.</p>
      </div>
  )
}

export default Footer