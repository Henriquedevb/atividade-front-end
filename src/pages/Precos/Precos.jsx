import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PrecoService from '../../sevices/motocicles/PrecoService';

const Precos = () => {
  const [precos, setPrecos] = useState([]);

  useEffect(() => {
    const preco = PrecoService.getAll();
    setPrecos(preco);
  }, []);

  function excluir(index) {
    if (window.confirm('Deseja realmente excluir esse dado?')) {
      PrecoService.delete(index);
      setPrecos(PrecoService.getAll());
    }
  }

  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {precos.map((curso, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curso.modelo}</td>
                <td>{curso.marca}</td>
                <td>{curso.ano}</td>
                <td>{curso.preco}</td>
                <td>
                  <Link to={`/precosForm/${index}`} className="btn btn-primary">
                    Alterar
                  </Link>
                  <Button
                    className="btn btn-danger"
                    onClick={() => excluir(index)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link className="btn btn-success" to="/precosForm">
          Novo Preço
        </Link>
      </Container>
    </div>
  );
};

export default Precos;
