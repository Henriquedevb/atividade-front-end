import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Henrique Fontenele de jesus - 2014290022</h1>

      <ul>
        <Link to="/atividade-cursos">Cursos</Link>
        <br />
        <Link to="/atividade-disciplinas">Disciplinas</Link>
        <br />
        <Link to="/atividade-professor">Professor</Link>
        <br />
        <Link to="/atividade-alunos">Alunos</Link>
      </ul>
    </div>
  );
};

export default Home;
