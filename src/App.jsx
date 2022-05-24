import { useState } from 'react'
import './App.css'
import data from './data/data.js'

import Button from './components/button/Button'
import Escena from './components/escena/Escena'

const App = () => {
  const [index, setIndex] = useState(0)
  const [intro, setIntro] = useState(false)

  const handleClickPrevious = () => 
    setIndex( _ => (index > 0) ? index - 1 : setIndex(data.length - 1))

  const handleClickNext = () => 
    setIndex( _ => (index < data.length - 1) ? index + 1 : setIndex(0))
  

  return (
  <div className="App">
    { !intro ? (
      <div className="intro">
             <p>Intro</p>
             <p>
               Este proyecto consiste en una web de gestión empresarial desarrollada con React,
               que ha solicitado que desarrollemos un tutorial, en el que mediante dos botones los
               nuevos usuarios puedan avanzar y retroceder en los consejos, modificando el texto
               de ayuda y la imagen de fondo.
             </p>
             <Button onClick={() => setIntro(true)} label="Start" />
      </div>

    ): (
      <>
      
        <Button onClick={handleClickPrevious} label="Anterior" />
          <Button onClick={handleClickNext} label="Siguiente" />
         <Escena phraseIndex={index} data={data} />
       
      </>
    )}

  </div>

  )
}

export default App
