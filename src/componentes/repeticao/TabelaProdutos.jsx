import React from 'react';
import './TabelaProdutos.css';
import produtos from '../../data/produtos';

export default () => {
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr
              key={`produto_${produto.id}`}
              className={index % 2 == 0 ? 'Par' : 'Impar'}
            >
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco?.toFixed(2)?.replace('.', ',')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
