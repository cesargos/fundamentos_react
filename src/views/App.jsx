import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import Fundamentos from './examples/Fundamentos';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

export default () => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
);
