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
            onClick={() => dispatch({ type: 'NUMBER_7TIMES' })} // se tiver mais de uma informação para passar se usa um objeto no payload
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'NUMBER_DIV25' })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'NUMBER_PARSEINT' })}
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
                  type: 'NUMBER_ADD',
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
          Se utiliza a pasta <b>data</b> contendo a pasta actions e reducers
        </li>
        <li>
          A partir de uma ação (action) se sabe quando será alterado o state
          para uma nova versão a partir da ação gerada
        </li>
        <ul>
          <li>
            Toda ação tem um tipo (um nome). <b>action.type</b>
          </li>
          <li>
            Para informar valores usar a propriedade actin<b>.payload</b>
          </li>
        </ul>
        <li>
          É melhor usar o reducer junto com o useCustom para não ter que passar
          sempre o dispacher
        </li>
        <li>O useReducer combina bem com o useContext (em vez do useState)</li>
      </ul>
    </div>
  );
};

export default UseReducer;
