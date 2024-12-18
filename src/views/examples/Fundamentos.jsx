import React from 'react';
import './Fundamentos.css';

import DiretaPai from '../../components/comunicacao/DiretaPai';
import IndiretaPai from '../../components/comunicacao/IndiretaPai';
import Primeiro from '../../components/basicos/Primeiro';
import ComParametro from '../../components/basicos/ComParametros';
import Fragmento from '../../components/basicos/Fragmento';
import Aleatorio from '../../components/basicos/Aleatorio';
import Familia from '../../components/basicos/Familia';
import FamiliaMembro from '../../components/basicos/FamiliaMembro';
import Card from '../../components/layout/Card';
import ListaAlunos from '../../components/repeticao/ListaAlunos';
import TabelaProdutos from '../../components/repeticao/TabelaProdutos';
import UsuarioInfo from '../../components/condicional/UsuarioInfo';
import ComponenteControlado from '../../components/formulario/ComponenteControlado';
import Contador from '../../components/contador/Contador';
import Mega from '../../components/mega/Mega';
import Calculator from '../../calculadora/Calculator';

// Utilizando Função arrow para retornar
export default () => (
  <div className="Fundamentos" id="Fundamentos">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - CALCULADOR" color="#904240">
        <Calculator />
      </Card>
      <Card titulo="#13 - Desafio Mega" color="#641568">
        <Mega />
      </Card>

      <Card titulo="#12 - Trabalando com CLASSES - Contador" color="blueviolet">
        <Contador numeroInicial={100} />
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#e45f56">
        <ComponenteControlado />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
        <IndiretaPai />
      </Card>

      <Card titulo="#9 - Comunicação Direta" color="#59323c">
        <DiretaPai />
      </Card>

      <Card titulo="#8 - Rendereização condicional" color="#982395">
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        <UsuarioInfo usuario={{ email: 'a@a.com' }} />
      </Card>

      <Card titulo="#7 - Desafio Repetição" color="#50acf5">
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
