import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const gerarHoHoHo = () => {
    const n = parseInt(numero);
    if (isNaN(n) || n <= 0 || n > 1000000) {
      setResultado('Por favor, insira um número entre 1 e 1.000.000.');
      return;
    }
    const hoArray = Array(n).fill('Ho');
    setResultado(`${hoArray.join(' ')}!`);
  };

  return (
    <div className="container">
      <h1>Ho Ho Ho do Papai Noel</h1>
      <input
        type="number"
        placeholder="Digite um número (1 a 1.000.000)"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={gerarHoHoHo}>Gerar Ho Ho Ho</button>
      <div className="resultado">{resultado}</div>
    </div>
  );
}

export default App;