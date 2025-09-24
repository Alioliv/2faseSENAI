import { useState } from 'react';
import './App.css';

function App() {
  const [notaA, setNotaA] = useState('');
  const [notaB, setNotaB] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    const a = parseFloat(notaA);
    const b = parseFloat(notaB);

    if (isNaN(a) || isNaN(b) || a < 0 || b < 0 || a > 10 || b > 10) {
      setResultado('Insira notas válidas entre 0 e 10.');
      return;
    }

    const media = (a + b) / 2;

    if (media >= 7) {
      setResultado('Aprovado');
    } else if (media >= 4) {
      setResultado('Recuperacao');
    } else {
      setResultado('Reprovado');
    }
  };

  return (
    <div className="container">
      <h1>Sistema de Avaliação CNA</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Nota A"
          value={notaA}
          onChange={(e) => setNotaA(e.target.value)}
          step="0.1"
        />
        <input
          type="number"
          placeholder="Nota B"
          value={notaB}
          onChange={(e) => setNotaB(e.target.value)}
          step="0.1"
        />
      </div>
      <button onClick={calcularResultado}>Ver Resultado</button>
      <div className="resultado">{resultado}</div>
    </div>
  );
}

export default App;