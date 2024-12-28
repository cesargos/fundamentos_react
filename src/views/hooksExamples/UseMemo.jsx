import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseMemo = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const hasDelay = useRef(false);

  const sum = useCallback((a, b) => {
    if (!hasDelay.current) return Number(a) + Number(b);
    const future = Date.now() + 2000;
    // eslint-disable-next-line no-empty
    while (Date.now() < future) {} // espera de 2s (processamento pesado simulação)
    return Number(a) + Number(b);
  }, []);

  //1 - ¹const result = sum(n1, n2);

  // 2 - const [result, setResult] = useState(0);
  // useEffect(() => {
  //   setResult(sum(n1, n2));
  // }, [n1, n2]);

  //3
  const result = useMemo(() => sum(n1, n2), [n1, n2, sum]);

  useEffect(() => {
    hasDelay.current = true;
  }, []);

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memorizado!
        Para React.memo e useState+useEffect"
      />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <span className="text">{result}</span>
      </div>
      <SectionTitle title="Anotações" />
      <ul>
        <li>
          Quando usamos apenas o useState. Ao chamar novamente a função de
          rendereização, caso ela rode uma função demorada, ele vai travar a
          tela ate ser finalizada. E o input N3 vai ficar congelado e travando
          com a chamada da função demorada indevidamente mesmo ele não fazendo
          parte da função.¹
          <ul>
            <li>
              Podemos utilizar o useEffect e colocar a função que demora nele².
              Mas assim só vai deixar de travar quando usar o n3 caso use os
              outros 2 ele vai continuar travando
            </li>
            <li>
              Podemos usar o useMemo para resolver de forma mais profissional³.
              Assim não teremos que usar o useEffect junto com o useState. Mas
              continua travando
            </li>
          </ul>
        </li>
        <li>
          É um falor em cache que só vai chamar a função novamente. Caso os
          valores que estão no array se modifique
        </li>
      </ul>
    </div>
  );
};

export default UseMemo;
