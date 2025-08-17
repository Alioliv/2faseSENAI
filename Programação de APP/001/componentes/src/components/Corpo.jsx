import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'

function Corpo() {
  return (
    <div className="corpo-container">
      <Titulo1 />
      <Titulo2 texto={"Primeira parte de página"} emoji={"😘"}/>
      <Texto />

      <Titulo2 texto={"Segunda parte de página"} />
      <Textao />
    </div>
  );
}

export default Corpo