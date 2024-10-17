import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CadastroReserva from './CadastroReserva';
import ListarVagas from './ListarVagas';
import './App.css';

function App() {
  const [vagas, setVagas] = useState([]);

  return (
    <Router>
      <div>
        {/* Título */}
        <header className="header">
          <h1>Sistema de Controle de Estacionamento</h1>
        </header>

        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Cadastro de Reserva</Link>
            </li>
            <li>
              <Link to="/listar-vagas">Listar Vagas</Link>
            </li>
          </ul>
        </nav>

        {/* Conteúdo principal */}
        <div className="container">
          <Routes>
            <Route path="/" element={<CadastroReserva vagas={vagas} setVagas={setVagas} />} />
            <Route path="/listar-vagas" element={<ListarVagas vagas={vagas} setVagas={setVagas} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
