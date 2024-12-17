import React, { useEffect, useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [isPar, setIsPar] = useState('Ímpar');
  useEffect(() => {
    setIsPar(number % 2 === 0 ? 'Par' : 'Ímpar');
    setFatorial(calcFatorial(number));
  }, [number]);
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div>
        <span className="text">Status: </span>{' '}
        <span className="text red">{isPar}</span>
      </div>
      <SectionTitle title="Anotações" />
      <p>
        Ao mudar algo no projeto ele tem que causar um efeito colateral em outro
        lugar e assim modificar ele também.
      </p>
      <p>
        Caso o estado for alterado ele vai chamar novamente a função inteira.
        Por causa disso não pode alterar o estado ao chamar a função pois a
        mesma entrará num looping infinito. Para isso se usa o useEffect().
      </p>
      <p>useEffect(fn_calback, [lista de monitoramento])</p>
      <p>
        <ol>
          <li>
            O useEffect será executado sempre que o componente for criado.
          </li>
          <li>
            O useEffect será executado sempre que as variáveis que estão sendo
            monitoradas forem alteradas
          </li>
          <li>
            Caso a função passada no useEffect retornar uma função. Ela sera
            executada quando o componente for destruido.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default UseEffect;
