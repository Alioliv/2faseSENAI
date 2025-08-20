import './Textao.css'

function Textao(props) {
  return (
    <div className="textao-container">
        {props.textao}

        {console.log(props)}
    </div>
  )
}

export default Textao