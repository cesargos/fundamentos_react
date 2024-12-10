import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Menu.css';

export default () => {
  const [showHooksMenu, setShowHooksMenu] = useState(false);

  return (
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
          <li className="hooks">
            <h3 onClick={() => setShowHooksMenu(!showHooksMenu)}>
              Módulo Hooks
            </h3>
            <CSSTransition
              in={showHooksMenu}
              timeout={500} // Tempo da animação em ms
              classNames="submenu"
              unmountOnExit // Remove o elemento do DOM quando oculto
            >
              <ul className="submenu">
                <li>
                  <Link to="/useState">useState()</Link>
                </li>
                <li>
                  <Link to="/useEffect">useEffect()</Link>
                </li>
                <li>
                  <Link to="/useRef">useRef()</Link>
                </li>
                <li>
                  <Link to="/useMemo">useMemo()</Link>
                </li>
                <li>
                  <Link to="/useCallback">useCallback()</Link>
                </li>
                <li>
                  <Link to="/useContext">useContext()</Link>
                </li>
                <li>
                  <Link to="/useReducer">useReducer()</Link>
                </li>
                <li>
                  <Link to="/useCustom">useMyHook()</Link>
                </li>
              </ul>
            </CSSTransition>
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
};
