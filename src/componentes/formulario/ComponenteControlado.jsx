import React, { useState } from 'react';

// componente do tipo funcional
export default () => {
  const [valor, setValor] = useState('Inicial');
  const quandoMudar = (e) => setValor(e.target.value);
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <p>
        Não é possivel digitar sem charmar o setValor pois para mudar o front
        tem q vir via renderização e não do input do teclado
      </p>
      <p>
        Ele é um componente controlado pq esta amarrado a um determinado estado
      </p>
      <input value={valor} onChange={quandoMudar} />
      <input value={valor} readOnly />
    </div>
  );
};
