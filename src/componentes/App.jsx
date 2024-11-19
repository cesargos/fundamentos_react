import React from 'react';
import './App.css';

import Primeiro from './basicos/Primeiro';
import ComParametro from './basicos/ComParametros';
import Fragmento from './basicos/Fragmento';
import Aleatorio from './basicos/Aleatorio';
import Familia from './basicos/Familia';
import FamiliaMembro from './basicos/FamiliaMembro';
import Card from './layout/Card';
import ListaAlunos from './repeticao/ListaAlunos';
import TabelaProdutos from './repeticao/TabelaProdutos';
import UsuarioInfo from './condicional/UsuarioInfo';

// Utilizando Função arrow para retornar
export default () => (
  <div className="App" id="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#6 - Rendereização condicional" color="#af2">
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        <UsuarioInfo usuario={{ email: 'a@a.com' }} />
      </Card>

      <Card titulo="#7 - Repetição Desafio" color="#50acf5">
        <TabelaProdutos />
      </Card>

      <Card titulo="#6 - Repetição" color="#ff4c65">
        <ListaAlunos />
      </Card>

      <Card
        titulo="#5 - Passando paramentros de pai para filhos"
        color="#00c8f8"
      >
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Cesar" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Marta" />
        </Familia>
      </Card>

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
