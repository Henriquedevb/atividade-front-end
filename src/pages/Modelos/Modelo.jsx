import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlunoService from '../../sevices/motocicles/ModelosService';

const Modelo = () => {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    const modelos = AlunoService.getAll();
    setModelos(modelos);
  }, []);

  function excluir(index) {
    if (window.confirm('Deseja realmente excluir esse dado?')) {
      AlunoService.delete(index);
      setModelos(AlunoService.getAll());
    }
  }

  return (
    <div>
      <Container>
        <Table responsive="md">
          <thead sm={2}>
            <tr>
              <th>ID</th>
              <th>Ano</th>
              <th>Marca</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {modelos.map((modelo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{modelo.ano}</td>
                <td>{modelo.marca}</td>
                <td>{modelo.modelo}</td>
                <td>
                  <Link
                    to={`/modelosForm/${index}`}
                    className="btn btn-primary"
                  >
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
        <Link className="btn btn-success" to="/modelosForm">
          Novo modelo
        </Link>
      </Container>
    </div>
  );
};

export default Modelo;
