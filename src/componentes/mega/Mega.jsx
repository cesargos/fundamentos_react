import React, { useState } from 'react';

export default () => {
  const [qt, setQt] = useState(7);
  const [numeros, setNumeros] = useState('Click em Gerar para ver os números');

  const numbersGenerator = (quantidade = 0) => {
    if (quantidade > 30) {
      quantidade = 30;
      setQt(30);
    }
    if (quantidade < 1) {
      quantidade = 1;
      setQt(1);
    }
    const numeros = [];
    while (numeros.length < quantidade) {
      const numero = Math.round(Math.random() * 99)
        .toString()
        .padStart(2, '0');
      if (numeros.includes(numero)) continue;
      numeros.push(numero);
    }

    setNumeros(numeros.sort());
  };

  return (
    <>
      <div>
        <label htmlFor="qtInput">Qt: </label>
        <input
          id="qtInput"
          type="number"
          max={20}
          min={1}
          value={qt}
          onChange={(el) => parseInt(setQt(+el.target.value))}
        />
        <button onClick={() => numbersGenerator(qt)} style={{ margin: '10px' }}>
          Gerar
        </button>
      </div>
      <div>
        <h2>
          <tt>{numeros?.join ? numeros.join(', ') + '.' : numeros}</tt>
        </h2>
      </div>
    </>
  );
};
