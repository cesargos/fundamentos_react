import React from 'react';

import Primeiro from './basicos/Primeiro';
import ComParametro from './basicos/ComParametros';
import Fragmento from './basicos/Fragmento';
import Aleatorio from './basicos/Aleatorio';
import Card from './layout/Card';

// Utilizando Função arrow para retornar
export default () => (
  <div id="app">
    <Card />
    <Aleatorio />
    <Fragmento />
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="passando parametros para o filho"
      numero={9.3}
    />
    <Primeiro />
  </div>
);
