import React, { useState } from 'react';

function Calculadora() {
  const [altura, setAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [precoBase, setPrecoBase] = useState(80);
  const [resultado, setResultado] = useState(null);

  const calcularOrcamento = () => {
    const area = parseFloat(altura) * parseFloat(largura + comprimento);
    const preco = area * parseFloat(precoBase);
    setResultado(preco.toFixed(2));
  };

  return (
    <div className="calculadora">
      <div>
        <label>Altura da grade (m):</label>
        <input type="number" value={altura} onChange={e => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Largura do terreno (m):</label>
        <input type="number" value={largura} onChange={e => setLargura(e.target.value)} />
      </div>
      <div>
        <label>Comprimento do terreno (m):</label>
        <input type="number" value={comprimento} onChange={e => setComprimento(e.target.value)} />
      </div>
      <div>
        <label>Preço base por m² (R$):</label>
        <input type="number" value={precoBase} onChange={e => setPrecoBase(e.target.value)} />
      </div>
      <button onClick={calcularOrcamento}>Calcular Orçamento</button>

      {resultado && (
        <div className="resultado">
          <h2>Valor estimado: R$ {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculadora;