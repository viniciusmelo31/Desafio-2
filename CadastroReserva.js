import React, { useState } from 'react';

function CadastroReserva({ vagas, setVagas }) {
  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setVagas([...vagas, formData]);
    alert('Cadastro realizado com sucesso!');
    setFormData({
      placa: '',
      nome: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Cadastro de Vagas de Estacionamento</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="placa"
          placeholder="Placa do Veículo"
          value={formData.placa}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome do Proprietário"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apartamento"
          placeholder="Número do Apartamento"
          value={formData.apartamento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloco"
          placeholder="Bloco do Apartamento"
          value={formData.bloco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo do Veículo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cor"
          placeholder="Cor do Veículo"
          value={formData.cor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vaga"
          placeholder="Número da Vaga"
          value={formData.vaga}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroReserva;
