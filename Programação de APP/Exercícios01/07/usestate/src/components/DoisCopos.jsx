import { useState } from 'react';

function DoisCopos() {
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar = () => {
    const n = parseInt(numero);
    if (isNaN(n)) return;

    if (n > 0 && n % 2 === 0) {
      setMensagem('O número é par e positivo!');
    } else {
      setMensagem('Não atende aos dois critérios.');
    }
  };

  return (
    <div>
      <h2>5.30 – Dois Copos Meio Cheios</h2>
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
      <button onClick={verificar}>Verificar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default DoisCopos;