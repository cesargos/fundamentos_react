import React from 'react';
let teste = 0;
// componente do tipo funcional
export default (props) => {
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;
  teste++;
  return (
    <div>
      <div> Filho</div>
      <button
        onClick={() =>
          props.quandoClicar('João_' + teste, gerarIdade(), gerarNerd())
        }
      >
        Fornecer Informações
      </button>
    </div>
  );
};
