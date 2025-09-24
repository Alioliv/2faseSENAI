import { useState } from 'react';
import './App.css';

function App() {
  const [alunos, setAlunos] = useState('');
  const [monitores, setMonitores] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarBondinho = () => {
    const a = parseInt(alunos);
    const m = parseInt(monitores);

    if (isNaN(a) || isNaN(m) || a < 1 || a > 50 || m < 1 || m > 50) {
      setResultado('Insira valores válidos entre 1 e 50.');
      return;
    }

    const total = a + m;
    setResultado(total <= 50 ? 'S possivel' : 'N não é possivel');
  };

  return (
    <div className="container">
      <h1> Verificador de Bondinho</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Número de alunos"
          value={alunos}
          onChange={(e) => setAlunos(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número de monitores"
          value={monitores}
          onChange={(e) => setMonitores(e.target.value)}
        />
      </div>
      <button onClick={verificarBondinho}>Verificar</button>
      <div className="resultado">{resultado}</div>
    </div>
  );
}

export default App;
