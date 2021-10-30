import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <div className="home">
      <ul>
        <Link className="link" to="/curso">
          Cursos
        </Link>
        <br />
        <Link className="link" to="/disciplina">
          Disciplinas
        </Link>
        <br />
        <Link className="link" to="/professor">
          Professor
        </Link>
        <br />
        <Link className="link" to="/aluno">
          Alunos
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
