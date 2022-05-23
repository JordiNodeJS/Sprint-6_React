import { useState } from 'react'
import './App.css'
import data from './data/data.js'

import Button from './components/button/Button'
import Escena from './components/escena/Escena'

function App() {
  const [index, setIndex] = useState(0)

  const handleClickPrevious = () => 
    setIndex( _ => (index > 0) ? index - 1 : setIndex(data.length - 1))

  const handleClickNext = () => 
    setIndex( _ => (index < data.length - 1) ? index + 1 : setIndex(0))
  

  return (
    <div className='App'>
      <Button onClick={handleClickPrevious} label='Anterior' />
      <Button onClick={handleClickNext} label='Siguiente' />
      <Escena phraseIndex={index} data={data} />
    </div>
  )
}

export default App
