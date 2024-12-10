import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="NotFound">
    <h1>404</h1>
    <h2>Não encontrei essa pagina ai não meu jovem!</h2>
    <p>
      <Link to="/">Clique aqui</Link> para ir para Home
    </p>
  </div>
);
