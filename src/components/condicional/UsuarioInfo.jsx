import React from 'react';
import If, { Else } from './if';
// Exercício #8 - Rendereização condicional
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div className="UsuarioInfo">
      <If test={usuario.nome}>
        <p>
          Seja bem vindo 111 <strong>{usuario.nome}</strong>1
        </p>
      </If>
      <If test={!usuario.nome}>
        <p>
          Seja bem vindo <strong>Amigão</strong> 2
        </p>
      </If>
      <If test={usuario.nome}>
        <p>
          Seja bem vindo <strong>{usuario.nome}</strong> if from IfElse
        </p>
        <Else>
          <p>
            Seja bem vindo <strong>Amigão </strong> from Else
          </p>
        </Else>
      </If>
    </div>
  );
};
