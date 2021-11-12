import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <div className="home">
      <ul>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/modelos">
          Modelos
        </Link>
        <Link className="link" to="/maisVendidas">
          Mais vendidas
        </Link>
        <br />
        <Link className="link" to="/consumo">
          Consumo
        </Link>
        <br />
        <Link className="link" to="/precos">
          Preços
        </Link>
        <br />
        <Link className="link" to="/avaliacao">
          Avaliacao
        </Link>
        <br />
      </ul>
    </div>
  );
};

export default NavBar;
