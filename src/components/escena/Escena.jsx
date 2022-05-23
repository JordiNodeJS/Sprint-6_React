import data from '../../data/data'
import './escena.css'

const Escena = () => {
  const frases = data.map(frase => <p>{frase}</p>)
  return <div>{frases}</div>
}

export default Escena
