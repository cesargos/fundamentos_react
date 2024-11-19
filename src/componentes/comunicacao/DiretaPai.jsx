import React from 'react';
import DiretaFilho from './DiretaFilho';

// componente do tipo funcional
export default () => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
    </div>
  );
};
