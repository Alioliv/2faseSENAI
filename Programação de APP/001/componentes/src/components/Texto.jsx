import './Texto.css'


function Texto(props) {
  return (
    <div className="texto-container">
        {props.texto} {props.emoji}

        {console.log(props)}
    </div>
  )
}

export default Texto
/*function Texto() {
  return (
    <div className='texto-container'>
      
    </div>
  )
}

export default Texto*/