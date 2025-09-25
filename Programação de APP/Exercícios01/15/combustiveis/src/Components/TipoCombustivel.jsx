import { useState } from 'react'

/*Escreva um algoritmo para ler o tipo de combustível abastecido 
(codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). 
Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código
 (até que seja válido). O programa será encerrado quando o código informado for o número 4.*/
/*function TipoCombustivel() {
    const [Abestecido, setAbastecido] = useState('');
    const [Alcool, setAlcool] = useState('');
    const [Gasolina, setGasolina] = useState('');
    const [Diesel, setDiesel] = useState('');
    
    


    
}*/
import React, { useState } from 'react';

function TipoCombustivel() {
  const [alcoolCount, setAlcoolCount] = useState(0);
  const [gasolinaCount, setGasolinaCount] = useState(0);
  const [dieselCount, setDieselCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    const code = parseInt(inputValue);

    if (isNaN(code)) {
      setErrorMessage('Por favor, digite um número válido.');
      return;
    }

    if (code === 4) {
      setIsFinished(true);
    } else if (code === 1) {
      setAlcoolCount(prev => prev + 1);
    } else if (code === 2) {
      setGasolinaCount(prev => prev + 1);
    } else if (code === 3) {
      setDieselCount(prev => prev + 1);
    } else {
      setErrorMessage('Código inválido. Tente novamente.');
      return;
    }

    // Limpa input e erro depois de cada entrada válida
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      {!isFinished ? (
        <>
          <h2>Digite o código do combustível:</h2>
          <p>1. Álcool | 2. Gasolina | 3. Diesel | 4. Fim</p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </>
      ) : (
        <div>
          <h2>MUITO OBRIGADO</h2>
          <p>Alcool: {alcoolCount}</p>
          <p>Gasolina: {gasolinaCount}</p>
          <p>Diesel: {dieselCount}</p>
        </div>
      )}
    </div>
  );
}

export default CombustivelApp;
