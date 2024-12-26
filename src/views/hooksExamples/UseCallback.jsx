import React, { useCallback, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    (n) => {
      // se utiliza o setState com uso de função par não precisar colocar o count ns dependencias
      setCount((curr) => curr + n);
    },
    [setCount],
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada! Para uso do React.memo"
      />

      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>

      <SectionTitle title="Anotações" />
      <ul>
        <li>
          O React.memo vai criar um componente Cacheado. Se as props utilizadas
          no componente não forem alteradas ele não precisa ser renderizado
          novamente. Ainda mais se ele for estático como no caso do
          UseCallbackButtons. E no caso toda as vezes q aperatem os botoes eles
          vão ser redenrizado indevidamente.
          <ol>
            <li>
              Então para o componente PAI não renderizar o filho sem necessidade
              a gente passa a usar o useCallback. Para renderizar somente quando
              alterar as props
            </li>
            <li>
              Caso uma função for passar atraves das props ele sempre vai
              renderizar o filho novamente, independente se tiver usando o
              React.memo ou não. Pois toda vez que o componente é renderizado
              ele roda a função de onde esta o useState monitorando e dentro
              dessa função ele criar novamente a função a ser passada pela
              props. Isso gera uma nova assinatura na função da props e faz o
              FILHO renderizar indevidamente
            </li>
          </ol>
        </li>
        <li>
          Semelhante ao useMemo. O useMemo retorna um valor que esta em cache
          (memorizável) quando alguma das dependencias forem modificadas. E o
          useCallback fará a mesma coisa mas retornando uma função e não um
          valor
        </li>
        <li>
          O useCallback vai retornar sempre a mesma função caso os parametros de
          dependencias não forem alterados. Assim não vai acionar um componente
          do tipo React.memo que esteja recebendo uma função por parametro
        </li>
        <li>
          Se utiliza o setState com uso de função par não precisar colocar a
          variavel setada nas dependencias do useCallback. Isso faria que o
          componente React.memo fosse renderizado todas as vezes
        </li>
      </ul>
    </div>
  );
};

export default UseCallback;
