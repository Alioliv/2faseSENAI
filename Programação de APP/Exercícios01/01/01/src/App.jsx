
import Navbar from "./components/Navbar"; // Import da pasta components

import { useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  function mostrarPreco(tamanho) {
    let preco;

    if (tamanho === "pequeno") {
      preco = 35;
    } else if (tamanho === "medio") {
      preco = 45;
    } else if (tamanho === "grande") {
      preco = 60;
    }

    setMensagem(`O preço da pizza ${tamanho} é R$ ${preco}`);
  }

  return (
  
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <Navbar />
      <h1>Escolha o tamanho da pizza</h1>
      <button onClick={() => mostrarPreco("pequeno")}>Pequeno</button>
      <button onClick={() => mostrarPreco("medio")}>Médio</button>
      <button onClick={() => mostrarPreco("grande")}>Grande</button>

      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {mensagem}
      </div>
    </div>
  );
}

export default App;
