import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'

function Corpo() {
  function logar() {
    let usuario = prompt("Digite seu nome de usuario:")
     if (usuario === "123") {
      alert("logado com sucesso")
     }else{
      alert("Errou, o usuario era 123")
     }
  }
  return (
    <div className="corpo-container">
      <Titulo1 />
      <Titulo2 texto={"Primeira parte de página"} emoji={"😘"}/>
      <Texto texto= {"Texto enviado para o componente via promp"}/>

      <Titulo2 texto={"Segunda parte de página"} />
      <Textao textao={"Textão enviado para o components........................"}/>

      <img src="./imagens/react.png" alt="" className= "imagem-corpo"  />

      <button onClick={logar}>logar</button>
      
    </div>
    
  );
}

export default Corpo