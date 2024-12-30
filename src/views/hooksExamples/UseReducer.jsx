import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { initialState, reducer } from '../../store';
import { login, numberAdd2 } from '../../store/actions';

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
            onClick={() => login(dispatch, 'Cesar')} // se tiver mais de uma informação para passar se usa um objeto no payload
          >
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
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
