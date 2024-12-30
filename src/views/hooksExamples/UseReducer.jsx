import React, { useReducer, useState } from 'react';
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
    case 'number_7times':
      return { ...state, number: state.number * 7 };
    case 'number_divided25':
      return { ...state, number: state.number / 25 };
    case 'number_parseInt':
      return { ...state, number: parseInt(state.number) };
    case 'number_add':
      return { ...state, number: state.number + action.payload };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [inputNumber, setInputNumber] = useState('0');
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">
          {state.user ? state.user.name : 'Seu usuário'}
        </span>

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
          <button
            className="btn"
            onClick={() => dispatch({ type: 'number_7times' })} // se tiver mais de uma informação para passar se usa um objeto no payload
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'number_divided25' })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'number_parseInt' })}
          >
            ParseInt
          </button>
          <div>
            <input
              type="number"
              className="input"
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            />
            <button
              className="btn"
              onClick={() =>
                dispatch({
                  type: 'number_add',
                  payload: parseFloat(inputNumber || 0),
                })
              }
            >
              Add
            </button>
          </div>
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
