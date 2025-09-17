import { useState } from 'react';
import LucroProduto from './LucroProduto';
import MediaConceito from './MediaConceito';
import Cofrinho from './Cofrinho';
import CopoMeioCheio from './CopoMeioCheio';
import DoisCopos from './DoisCopos';
import Emprestimo from './Emprestimo';

const componentes = {
  'Lucro do Produto': <LucroProduto />,
  'Média e Conceito': <MediaConceito />,
  'Cofrinho': <Cofrinho />,
  'Copo Meio Cheio': <CopoMeioCheio />,
  'Dois Copos': <DoisCopos />,
  'Empréstimo': <Emprestimo />,
};

function App() {
  const [ativo, setAtivo] = useState('Lucro do Produto');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Exercícios em React</h1>
      <nav>
        {Object.keys(componentes).map(nome => (
          <button key={nome} onClick={() => setAtivo(nome)} style={{ margin: '0.5rem' }}>
            {nome}
          </button>
        ))}
      </nav>
      <hr />
      {componentes[ativo]}
    </div>
  );
}

export default App;