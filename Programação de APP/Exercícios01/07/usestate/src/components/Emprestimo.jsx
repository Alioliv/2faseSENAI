import { useState } from 'react';

function Emprestimo() {
  const [salario, setSalario] = useState('');
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificar = () => {
    const s = parseFloat(salario);
    const v = parseFloat(valor);
    const p = parseInt(parcelas);

    if (s <= 0 || v <= 0 || p <= 0) {
      setMensagem('Todos os valores devem ser positivos.');
      return;
    }

    const prestacao = v / p;
    const limite = s * 0.3;

    if (prestacao <= limite) {
      setMensagem(`Empréstimo aprovado! Prestação: R$ ${prestacao.toFixed(2)}`);
    } else {
      setMensagem(`Empréstimo negado. Prestação de R$ ${prestacao.toFixed(2)} excede 30% do salário.`);
    }
  };

  return (
    <div>
      <h2>5.31 – Empréstimo</h2>
      <input type="number" placeholder="Salário" value={salario} onChange={e => setSalario(e.target.value)} />
      <input type="number" placeholder="Valor do empréstimo" value={valor} onChange={e => setValor(e.target.value)} />
      <input type="number" placeholder="Número de parcelas" value={parcelas} onChange={e => setParcelas(e.target.value)} />
      <button onClick={verificar}>Verificar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Emprestimo;