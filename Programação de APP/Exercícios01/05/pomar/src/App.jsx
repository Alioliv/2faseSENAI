import { useState } from 'react';
import './App.css';

const frutas = [
  { nome: 'Maçã', preco: 1.5 },
  { nome: 'Laranja', preco: 2.0 },
  { nome: 'Bergamota', preco: 1.0 },
  { nome: 'Banana', preco: 1.2 },
  { nome: 'Pera', preco: 0.5 },
];

function App() {
  const [quantidades, setQuantidades] = useState({});
  const [recibo, setRecibo] = useState(null);

  const handleChange = (nome, valor) => {
    setQuantidades(prev => ({ ...prev, [nome]: Number(valor) }));
  };

  const gerarRecibo = () => {
    const itensColhidos = frutas
      .map(fruta => {
        const qtd = quantidades[fruta.nome] || 0;
        if (qtd > 0) {
          return {
            nome: fruta.nome,
            quantidade: qtd,
            subtotal: qtd * fruta.preco,
          };
        }
        return null;
      })
      .filter(item => item !== null);

    const total = itensColhidos.reduce((acc, item) => acc + item.subtotal, 0);

    setRecibo({ itens: itensColhidos, total });
  };

  return (
    <div className="container">
      <h1>🍎 Trajeto Pomar - Caixa</h1>

      <div className="form">
        {frutas.map(fruta => (
          <div key={fruta.nome} className="input-group">
            <label>{fruta.nome} (R$ {fruta.preco.toFixed(2)}):</label>
            <input
              type="number"
              min="0"
              value={quantidades[fruta.nome] || ''}
              onChange={e => handleChange(fruta.nome, e.target.value)}
            />
          </div>
        ))}
        <button onClick={gerarRecibo}>Gerar Recibo</button>
      </div>

      {recibo && (
        <div className="recibo">
          <h2>🧾 Recibo</h2>
          <ul>
            {recibo.itens.map(item => (
              <li key={item.nome}>
                {item.quantidade}x {item.nome} = R$ {item.subtotal.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: R$ {recibo.total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default App;