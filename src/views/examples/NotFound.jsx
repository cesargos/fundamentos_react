import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/layout/PageTitle';

export default () => (
  <div className="NotFound">
    <PageTitle error title="404" subtitle="Opss... Página Não Encontrada!" />
    <p>
      <Link to="/">Clique aqui</Link> para ir para Home
    </p>
  </div>
);
