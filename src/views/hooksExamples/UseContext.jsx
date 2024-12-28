import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = () => {
  const context = useContext(DataContext);

  function sumNumber(n) {
    context.setDataState({
      ...context.dataState,
      number: context.dataState.number + n,
    });
  }

  const { number, text, setNumber, setText } = useContext(AppContext);

  useEffect(() => {
    if (number > 1250) {
      setText('Eita!!!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <PageTitle subtitle="Comunicação compatilhada entre componentes FILHOS. Sem props do Pai e função de Callback (comunicação direta e indireta)" />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.dataState.text}</span>
        <span className="text">{context.dataState.number}</span>
        <div>
          <button className="btn" onClick={() => sumNumber(1)}>
            +1
          </button>
          <button className="btn" onClick={() => sumNumber(-1)}>
            -1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
        </div>
      </div>

      <SectionTitle title="Anotações" />
      <ul>
        <li>
          Deve ser utilizado no compontente de mais alto nível da aplicação para
          ser acessivel a todos os filhos internos. Normalmente no App.jsx
        </li>
        <li>
          A propriedade Provider do contexto (que foi criada a partir do
          <b> React.createContext()</b>) é uma tag a ser colocada envolvendo as
          demais deve ser o{'"Context.Provider"'}
          <ol>
            <li>
              A tag {'"Context.Provider"'} recebe uma propriedade chamada
              <b> value</b> que é responsável por passar o valor dela para as
              demais tags
            </li>
            <li>
              Não é necessário colocar um valor inicial na criação do contexto.
              Ao passar o value dentro da tag <b>Context.Provider</b> o contexto
              vai receber o valor de value. Mas o valor inicial vai ser um meio
              de tipar dentro do JS
            </li>
          </ol>
        </li>
        <li>
          O useContext recebe um contexto por parametro. Isso significa que
          deverá ser criado um contexto usando {'"createContext()"'} e depois
          importado esse contexto e injetado ele no <b>useContext</b>
        </li>
        <li>
          Para modificar o valor do contexto e fazer com que o mesmo renderize
          os componentes que utilizam ele é necessário que ele seja um state e
          um função que valida e altere o state
        </li>
        <li>
          <b>CUIDADO: </b>Para modificar o contexto é necessário modificar o
          contexto inteiro!
        </li>
        <li>
          Foi passado um state para alterar o context mas isso não é a maneira
          usual de se fazer
        </li>
      </ul>
    </div>
  );
};

export default UseContext;
