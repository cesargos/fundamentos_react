// componente não visual
import React, { useState } from 'react';

export const initialState = {
  number: 1234,
  text: 'Context API + Hooks',
};
export const AppContext = React.createContext(initialState);

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  // se passa funções individuais que não deixa alterar o state inteiro
  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState('number', n),
        setText: (t) => updateState('text', t),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
