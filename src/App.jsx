import { useState } from 'react'
import './App.css'
import data from './data/data.js'

import Button from './components/button/Button'
import Escena from './components/escena/Escena'

function App() {
  const [index, setIndex] = useState(0)

  const handleClickPrevious = () => setIndex( _ => (index < data.length) ? index + 1 : setIndex(0))

  const handleClickNext = () => {
    console.log('next button clicked')
    setIndex( _ => (index < data.length - 1) ? index + 1 : setIndex(0))
    // setIndex( _ => index + 1)

  }

  return (
    <div className='App'>
      <Button onClick={handleClickPrevious} label='Anterior' />
      <Button onClick={handleClickNext} label='Siguiente' />
      <Escena fraseIndex={index} data={data} />
    </div>
  )
}

export default App
