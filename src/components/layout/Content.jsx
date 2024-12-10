import './Content.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importe esses arquivos

import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import About from '../../views/examples/About';
import Fundamentos from '../../views/examples/Fundamentos';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/hooksExamples/UseState';
import UseEffect from '../../views/hooksExamples/UseEffect';
import UseRef from '../../views/hooksExamples/UseRef';
import UseCallback from '../../views/hooksExamples/UseCallback';
import UseMemo from '../../views/hooksExamples/UseMemo';
import UseContext from '../../views/hooksExamples/UseContext';
import UseReducer from '../../views/hooksExamples/UseReducer';
import UseCustom from '../../views/hooksExamples/UseCustom';

const Content = () => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/fundamentos" element={<Fundamentos />} />

      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useCustom" element={<UseCustom />} />

      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
