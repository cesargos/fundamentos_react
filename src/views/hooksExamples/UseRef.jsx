import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
let invertido = false;
function merger(s1 = '', s2 = '') {
  if (s1 === '' && s2 !== '') {
    invertido = true;
  }
  if (s2 === '' && s1 !== '') {
    invertido = false;
  }
  const str1 = invertido ? s2 : s1;
  const str2 = invertido ? s1 : s2;
  const inputValue = [...str1]
    .map((valor, index) => `${valor}${str2[index] || ''}`)
    .join('');
  return str1.length >= str2.length
    ? inputValue
    : inputValue + s2.slice(str1.length);
}
const UseRef = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);
  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [value1],
  );

  useEffect(
    function () {
      count.current++;

      myInput1.current.focus();
    },
    [value2],
  );
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <p>
        Contar a quantidade de vezes que um componente foi renderizado na tela.
      </p>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merger(value1, value2)}[</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          ref={myInput1}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          ref={myInput2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <SectionTitle title="Anotações" />
      <p>Dentro da propriedade .current que vc terá o seu estado.</p>
      <p>
        Ref = é a referencia de um objeto (tipo ponteiro - mesmo com variáveis
        primitivas).
      </p>
      <p>O parametro passado o useRef será o valor inicial da variável.</p>
      <p>
        Quando o Ref.current é alterado não há a necessidade de renderizar
        novamente o componente
      </p>
      <p>
        Dentro das tags HTML criadas com react, existe a propriedade ref na qual
        é passado um useRef que vai apontar para a tag criada. O current do Ref
        será igual as variaveis que usadas no getElementById do Dom.
      </p>
    </div>
  );
};

export default UseRef;
