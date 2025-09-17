// Estilos
//import './App.css';

// Componentes
import Cofrinho from './components/Cofrinho';
import CopoMeioCheio from './components/CopoMeioCheio';
import DoisCopos from './components/DoisCopos';
import Emprestimo from './components/Emprestimo';
import LucroProduto from './components/LucroProduto';
import MediaConceito from './components/MediaConceito';

/*const componentes = {
  'Lucro do Produto': <LucroProduto />,
  'Média e Conceito': <MediaConceito />,
  'Cofrinho': <Cofrinho />,
  'Copo Meio Cheio': <CopoMeioCheio />,
  'Dois Copos': <DoisCopos />,
  'Empréstimo': <Emprestimo />,
};*/

function App() {
  const [ativo, setAtivo] = useState('Lucro do Produto');

  return (

    <div style={{ padding: '2rem' }}>
      <Cofrinho />
      <CopoMeioCheio />
      <DoisCopos />
      <Emprestimo />
      <LucroProduto />
      <MediaConceito />
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