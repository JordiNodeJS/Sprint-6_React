// import data from '../../data/data'
import './escena.css'


const Escena = ({fraseIndex = 0, data}) => {
  const frases = data.map(frase => <p>{frase}</p>)
  return <div>{frases[fraseIndex]}</div>
}

export default Escena
