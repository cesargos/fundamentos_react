import React from 'react';

// componente do tipo funcional
export default (props) => {
  return (
    <div>
      <div> Filho</div>
      <button onClick={() => props.quandoClicar('João', 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
