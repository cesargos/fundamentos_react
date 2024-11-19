import React from 'react';
import IndiretaFilho from './IndiretaFilho';

// componente do tipo funcional
export default () => {
  const fornecerInformacoes = (nome, idade, nerd) => {
    console.log(nome, idade, nerd);
  };
  return (
    <div>
      <p>Comunicação do filho para o pai via função callback</p>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
