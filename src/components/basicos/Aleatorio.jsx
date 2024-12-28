import React from 'react';

// componente do tipo funcional
export default function Aleatorio() {
  const randomize = () => {
    const minValue = Number(document.getElementById('minValue')?.value) || 0;
    const maxValue = Number(document.getElementById('maxValue')?.value) || 0;
    const returnResponseElement = document.getElementById('randomValue');

    if (!maxValue || maxValue - minValue <= 0) {
      returnResponseElement.innerHTML = '0';
      return;
    }

    const randomValue = Math.round(
      Math.random() * (maxValue - minValue) + minValue,
    );

    returnResponseElement.innerHTML = randomValue;
  };

  return (
    <div>
      <h2>Sorteando um numero aleatoriamente</h2>
      <div>
        <p>
          Digite o valor inicial:&nbsp;
          <input id="minValue"></input>
        </p>
        <p>
          Digite o valor final:&nbsp;
          <input id="maxValue"></input>&nbsp;&nbsp;
        </p>
        <button onClick={randomize}>Calcular</button>
      </div>
      <p>
        O valor é: <strong id="randomValue"></strong>
      </p>
    </div>
  );
}
