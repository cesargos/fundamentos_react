import React from 'react';
//  componentes funcionais
export default function ComParametro(props) {
  // as propriedades passadas nos component são somente de leitura (erro ao tentar alterar)
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.subtitulo}</p>
      <p>Numero: {props.numero}</p>
    </div>
  );
}
