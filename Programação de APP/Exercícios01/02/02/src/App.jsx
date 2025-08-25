
import { useState } from "react";
import Navbar from './components/Navbar'
import "./App.css";

function App() {
  const [valor, setValor] = useState("");
  const [moedaOrigem, setMoedaOrigem] = useState("real");
  const [moedaDestino, setMoedaDestino] = useState("dolar");
  const [resultado, setResultado] = useState("");

  // taxas fixas para exemplo
  const taxas = {
    real: { dolar: 0.20, euro: 0.18 },
    dolar: { real: 5.0, euro: 0.9 },
    euro: { real: 5.5, dolar: 1.1 },
  };

  function converter() {
    if (moedaOrigem === moedaDestino) {
      setResultado("As moedas são iguais, não há conversão.");
      return;
    }

    const taxa = taxas[moedaOrigem][moedaDestino];
    const valorConvertido = (valor * taxa).toFixed(2);

    setResultado(`${valor} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`);
  }

  return (
    <div className="app-container">
      <Navbar />
      <h1>Conversor de Moedas</h1>

      <input
        type="number"
        placeholder="Digite o valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <div className="selects">
        <select value={moedaOrigem} onChange={(e) => setMoedaOrigem(e.target.value)}>
          <option value="real">Real (BRL)</option>
          <option value="dolar">Dólar (USD)</option>
          <option value="euro">Euro (EUR)</option>
        </select>

        <span>➡️</span>

        <select value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)}>
          <option value="real">Real (BRL)</option>
          <option value="dolar">Dólar (USD)</option>
          <option value="euro">Euro (EUR)</option>
        </select>
      </div>

      <button onClick={converter}>Converter</button>

      <p className="resultado">{resultado}</p>
    </div>
  );
}

export default App;
