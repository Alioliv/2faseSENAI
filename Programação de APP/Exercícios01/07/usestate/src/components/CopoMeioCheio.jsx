import { useState } from 'react';

function CopoMeioCheio() {
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar = () => {
    const n = parseFloat(numero);
    if (isNaN(n)) return;

    if (n > 0) setMensagem('Positivo');
    else if (n < 0) setMensagem('Negativo');
    else setMensagem('Nulo');
  };

  return (
    <div>
      <h2>5.29 – Copo Meio Cheio</h2>
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
      <button onClick={verificar}>Verificar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CopoMeioCheio;