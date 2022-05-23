import './escena.css'

const Escena = ({phraseIndex = 0, data}) => {
  const phrases = data.map((phrase, i) => (
    (phraseIndex === i) ? <p className='active' key={'phrase' + i}>{phrase}</p> :
    <p key={'phrase' + i}>{phrase}</p>))
  
  return (
   <>
    {phrases}
   </>
  )
}

export default Escena
