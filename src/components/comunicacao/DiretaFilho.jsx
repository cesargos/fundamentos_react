import React from 'react';

// componente do tipo funcional
export default (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>{props.idade} </span>
      <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
    </div>
  );
};
