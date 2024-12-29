import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
  number: 0, // foco no exercicio é o number
  other: '...',
  cart: [],
  user: null,
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Seu usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'login', payload: 'Cesar' })} // se tiver mais de uma informação para passar se usa um objeto no payload
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'number_add2' })}
          >
            +2
          </button>
        </div>
      </div>

      <SectionTitle title="Anotações" />
      <ul>
        <li>
          A partir de uma ação (action) se sabe quando será alterado o state
          para uma nova versão a partir da ação gerada
        </li>
        <ul>
          <li>Toda ação tem um tipo (um nome).</li>
        </ul>
      </ul>
    </div>
  );
};

export default UseReducer;
