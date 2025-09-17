import { useState } from 'react';

function Cofrinho() {
  const [preco, setPreco] = useState('');
  const [moedas, setMoedas] = useState({
    r1: 0, r050: 0, r025: 0, r010: 0, r005: 0,
  });
  const [resultado, setResultado] = useState('');

  const calcularTotal = () => {
    const total =
      moedas.r1 * 1 +
      moedas.r050 * 0.5 +
      moedas.r025 * 0.25 +
      moedas.r010 * 0.1 +
      moedas.r005 * 0.05;

    const valorProduto = parseFloat(preco);
    if (isNaN(valorProduto)) return;

    setResultado(
      total >= valorProduto
        ? `Você pode comprar! Total no cofrinho: R$ ${total.toFixed(2)}`
        : `Não dá! Total no cofrinho: R$ ${total.toFixed(2)}`
    );
  };

  const handleChange = (tipo, valor) => {
    setMoedas(prev => ({ ...prev, [tipo]: Number(valor) }));
  };

  return (
    <div>
      <h2>5.25 – Cofrinho</h2>
      <input type="number" placeholder="Preço do produto" value={preco} onChange={e => setPreco(e.target.value)} />
      <div>
        <label>Moedas de 1 real:</label>
        <input type="number" onChange={e => handleChange('r1', e.target.value)} />
        <label>50 centavos:</label>
        <input type="number" onChange={e => handleChange('r050', e.target.value)} />
        <label>25 centavos:</label>
        <input type="number" onChange={e => handleChange('r025', e.target.value)} />
        <label>10 centavos:</label>
        <input type="number" onChange={e => handleChange('r010', e.target.value)} />
        <label>5 centavos:</label>
        <input type="number" onChange={e => handleChange('r005', e.target.value)} />
      </div>
      <button onClick={calcularTotal}>Verificar</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Cofrinho;