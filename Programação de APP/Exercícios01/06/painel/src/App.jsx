import React, { useState } from 'react';

function App() {
  const [oracaoSelecionada, setOracaoSelecionada] = useState('');

  const oracoes = {
    'Oração do desenvolvedor Web': `Divino Stack Overflow, que estais na nuvem,
Santificado seja o nosso deploy.
Venha a nós o CSS alinhado,
Seja feita a responsividade,
Assim no Chrome como no Firefox.
O código nosso de cada dia nos dai hoje,
Perdoai os nossos console.log,
Assim como nós perdoamos os commits sem mensagem.
Não nos deixei cair em callback hell,
Mas livrai-nos dos bugs de produção.
Amém, amém, git commit -m "Aleluia".`,


    'Oração do Frontend': `Ave CSS, cheia de bugs,
O framework é convosco,
Bendita sois vós entre as telas,
E bendito é o fruto do vosso DOM: o pixel perfeito.
Santa Documentação, mãe da UI,
Rogai por nós, devs visuais,
Agora e na hora do push final.
Hover.`,


    'Oração do Backend': `Nosso código que está no servidor,
Santificado seja o teu endpoint,
Venha a nós o teu JSON,
Seja feita tua lógica,
Assim na API como no banco.
O token nosso de cada dia nos dai hoje,
Perdoai nossas queries mal otimizadas,
Assim como nós perdoamos quem nos envia POST sem body.
E não nos deixes cair em loops infinitos,
Mas livrai-nos do downtime.
Amém, amém, status 200.`,

  };

  const handleClick = (titulo) => {
    setOracaoSelecionada(oracoes[titulo]);
  };

  return (
    <div className="painel">
      <h1>Painel de Orações</h1>
      <div className="botoes">
        {Object.keys(oracoes).map((titulo) => (
          <button key={titulo} onClick={() => handleClick(titulo)}>
            {titulo}
          </button>
        ))}
      </div>

      <div className="oracao">
        <p>{oracaoSelecionada}</p>
      </div>
    </div>
  );
}

export default App;