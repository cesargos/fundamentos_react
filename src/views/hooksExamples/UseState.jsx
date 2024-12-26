import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 1000)}
          >
            +1000
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02 - Componente Controlado" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <SectionTitle title="Anotações" />
      <p>
        <b>UseState:</b> setCount(count + 1) === setCount((current) ={'>'}{' '}
        current+1)
      </p>
      <p>
        O useState retorna um array com o primeiro retorno sendo a variavel e o
        segundo retorno do array sendo a função para alterar a variavel e
        renderizar o front.
      </p>
      <p>
        O parametro passado ao chamar o useState será o valor inicial do state
      </p>
      <p>
        A função set do useState (segundo retorno) pode receber uma função como
        parametro. Na qual o parametro dessa função será o valor atual do state
      </p>
    </div>
  );
};

export default UseState;
