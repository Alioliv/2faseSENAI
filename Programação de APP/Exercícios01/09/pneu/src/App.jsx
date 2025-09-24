import { useState } from 'react';
import './App.css';

function App() {
  const [pressaoDesejada, setPressaoDesejada] = useState('');
  const [pressaoLida, setPressaoLida] = useState('');
  const [diferenca, setDiferenca] = useState(null);

  const calcularDiferenca = () => {
    const N = parseInt(pressaoDesejada);
    const M = parseInt(pressaoLida);

    if (isNaN(N) || isNaN(M) || N < 1 || N > 40 || M < 1 || M > 40) {
      alert('Insira valores válidos entre 1 e 40.');
      return;
    }

    setDiferenca(N - M);
  };

  return (
    <div className="App">
      <h1>Verificador de Pressão do Pneu</h1>
      <div>
        <label>Pressão desejada (N): </label>
        <input
          type="number"
          value={pressaoDesejada}
          onChange={(e) => setPressaoDesejada(e.target.value)}
        />
      </div>
      <div>
        <label>Pressão lida pela bomba (M): </label>
        <input
          type="number"
          value={pressaoLida}
          onChange={(e) => setPressaoLida(e.target.value)}
        />
      </div>
      <button onClick={calcularDiferenca}>Calcular Diferença</button>
      {diferenca !== null && (
        <p>🔧 Diferença: {diferenca}</p>
      )}
    </div>
  );
}

export default App;