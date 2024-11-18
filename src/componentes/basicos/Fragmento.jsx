import React from 'react';
//  componentes funcionais
export default function Fragmento(props) {
  return (
    <React.Fragment key="1">
      <h2>Fragmento ={'>'} Cuidado com esse Erro!!!</h2>
      <p>
        Não é possivel passar mais de uma tag no retorno dos componentes
        (elementos adjacentes), por isso é necessario envolver eles em um
        componente. Mas para não criar uma div ou outra tag que vc não quer, se
        usa o React.Fragment para usar propriedades ou somente a tag vazia
        quando não se usa propriedades
      </p>
    </React.Fragment>
  );
}
