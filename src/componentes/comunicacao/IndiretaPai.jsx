import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

// componente do tipo funcional
export default () => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  const fornecerInformacoes = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  };
  return (
    <div>
      <p>Comunicação do filho para o pai via função callback e Estado</p>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade} </strong>
        </span>
        <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
