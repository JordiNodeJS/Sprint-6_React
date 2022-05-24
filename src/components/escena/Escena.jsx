import './escena.css'
import GlobalStyle from '../GlobalStyle'

const Escena = ({phraseIndex = 0, data}) => {
  const phrases = data.map((phrase, i) => (
    (phraseIndex === i) ? <p className='active' key={'phrase' + i}>{phrase}</p> :
    <p key={'phrase' + i}>{phrase}</p>))
  
  return (
   <>
    <GlobalStyle background = {phraseIndex} />
    {phrases}
   </>
  )
}

export default Escena
