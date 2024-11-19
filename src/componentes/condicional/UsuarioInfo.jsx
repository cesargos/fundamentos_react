import React from 'react';
import If, { Else } from './if';

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong> 1
      </If>
      <If test={!usuario.nome}>
        Seja bem vindo <strong>Amigão</strong> 2
      </If>
      <If test={usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong> 3
        <Else>
          Seja bem vindo <strong>Amigão </strong> from Else
        </Else>
      </If>
    </div>
  );
};
