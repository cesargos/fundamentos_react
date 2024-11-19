import React from 'react';
import './App.css';

import Primeiro from './basicos/Primeiro';
import ComParametro from './basicos/ComParametros';
import Fragmento from './basicos/Fragmento';
import Aleatorio from './basicos/Aleatorio';
import Card from './layout/Card';

// Utilizando Função arrow para retornar
export default () => (
  <div className="App" id="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#4 - Desafio números aleatórios" color="#FA6900">
        <Aleatorio />
      </Card>

      <Card titulo="#3 - Trabalhando com Fragmentos" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#2 - Com parametro" color="#E8B71A">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="passando parametros para o filho"
          numero={9.3}
        />
      </Card>

      <Card titulo="#1 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
