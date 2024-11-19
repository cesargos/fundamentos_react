import React from 'react';
import alunos from '../../data/alunos';

export default () => {
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {alunos.map((aluno) => (
          <li key={`aluno_${aluno.id}`}>
            {aluno.id}) {aluno.nome} = {aluno.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};
