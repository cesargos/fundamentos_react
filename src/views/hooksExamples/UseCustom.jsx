import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const UseRef = () => {
  const [count, inc, dec] = useCounter();
  const url = 'http://files.cod3r.com.br/curso-react/estados.json';
  const response = useFetch(url);

  function showStates(states) {
    return states.map((state) => (
      <li key={state.nome + state.sigla}>
        {state.nome} - {state.sigla}
      </li>
    ));
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={dec}>
            -1
          </button>
          <button className="btn" onClick={inc}>
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        {!response.loading ? (
          <ul>{showStates(response.data)}</ul>
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>

      <SectionTitle title="Anotações" />
      <ul>
        <li>
          Usar a pasta chamada <b>hooks</b> para armazenar os custom hooks
        </li>
        <li>Dentro de um hook vc pode usar todos os outros hooks</li>
      </ul>
    </div>
  );
};

export default UseRef;
