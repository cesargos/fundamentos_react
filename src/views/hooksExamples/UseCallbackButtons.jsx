import React from 'react';

const UseCallbackButtons = (props) => {
  return (
    <div>
      <button onClick={() => props.inc(6)} className="btn">
        +6
      </button>
      <button onClick={() => props.inc(12)} className="btn">
        +12
      </button>
      <button onClick={() => props.inc(18)} className="btn">
        +18
      </button>
    </div>
  );
};

// Por exportar como memo ele só vai renderizar quando as props forem alteradas
export default React.memo(UseCallbackButtons);
