import React from 'react';

function ListarVagas({ vagas, setVagas }) {
  const handleDelete = (vagaIndex) => {
    const novasVagas = vagas.filter((_, index) => index !== vagaIndex);
    setVagas(novasVagas);
  };

  return (
    <div>
      <h1>Vagas Cadastradas</h1>
      {vagas.length === 0 ? (
        <p>Nenhuma vaga cadastrada ainda.</p>
      ) : (
        <ul>
          {vagas.map((vaga, index) => (
            <li key={index}>
              <p>Placa: {vaga.placa} - Vaga: {vaga.vaga}</p>
              <button onClick={() => handleDelete(index)}>Deletar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarVagas;
