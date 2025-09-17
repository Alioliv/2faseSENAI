import { useState } from 'react';

function LucroProduto() {
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState(null);

  const calcularVenda = () => {
    const compra = parseFloat(valorCompra);
    if (isNaN(compra) || compra <= 0) return;

    const lucro = compra < 20 ? 0.45 : 0.30;
    const venda = compra * (1 + lucro);
    setValorVenda(venda.toFixed(2));
  };

  return (
    <div>
      <h2>5.23 – Lucro do Produto</h2>
      <input
        type="number"
        placeholder="Valor de compra"
        value={valorCompra}
        onChange={e => setValorCompra(e.target.value)}
      />
      <button onClick={calcularVenda}>Calcular Venda</button>
      {valorVenda && <p>Valor de venda: R$ {valorVenda}</p>}
    </div>
  );
}

export default LucroProduto;