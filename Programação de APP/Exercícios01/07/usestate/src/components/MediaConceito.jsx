import { useState } from 'react';

function MediaConceito() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(null);
  const [conceito, setConceito] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    if (isNaN(n1) || isNaN(n2)) return;

    const m = (n1 + n2) / 2;
    setMedia(m.toFixed(2));

    let c = '';
    if (m > 9.0) c = 'A';
    else if (m > 7.5) c = 'B';
    else if (m > 6.0) c = 'C';
    else if (m > 4.0) c = 'D';
    else c = 'E';

    setConceito(c);
  };

  return (
    <div>
      <h2>5.24 – Média e Conceito</h2>
      <input type="number" placeholder="Nota 1" value={nota1} onChange={e => setNota1(e.target.value)} />
      <input type="number" placeholder="Nota 2" value={nota2} onChange={e => setNota2(e.target.value)} />
      <button onClick={calcularMedia}>Calcular</button>
      {media && <p>Média: {media} | Conceito: {conceito}</p>}
    </div>
  );
}

export default MediaConceito;