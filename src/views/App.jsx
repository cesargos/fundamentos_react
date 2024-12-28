import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import Fundamentos from './examples/Fundamentos';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import DataContext, { data } from '../data/DataContext';
import Store from '../data/Store';

export default () => {
  const [dataState, setDataState] = useState(data);
  return (
    <div className="App">
      <Store>
        <DataContext.Provider value={{ dataState, setDataState }}>
          <BrowserRouter>
            <Menu />
            <Content />
          </BrowserRouter>
        </DataContext.Provider>
      </Store>
    </div>
  );
};
