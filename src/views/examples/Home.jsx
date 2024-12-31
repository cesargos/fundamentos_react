import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
export default () => (
  <div className="Home">
    <h1>Fundamentos React</h1>
    <h2>Inicio</h2>

    <PageTitle
      title="Módulo Hooks"
      subtitle="Hooks são uma nova adição ao React 16.8."
    />
    <h2>
      <b>Documentação: </b>
      <a target="_blank" href="https://pt-br.react.dev/learn" rel="noreferrer">
        React.dev
      </a>
    </h2>
  </div>
);
