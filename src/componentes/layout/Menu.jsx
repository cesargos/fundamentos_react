import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default () => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/fundamentos">Fundamentos React</Link>
        </li>
        <li>
          <Link to="/param/01">Param # 01</Link>
        </li>
        <li>
          <Link to="/param/02">Param # 02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/not-found">Não Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
);
