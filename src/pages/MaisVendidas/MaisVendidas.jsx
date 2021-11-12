import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaisVendidasService from '../../sevices/motocicles/MaisVendidasService';

const MaisVendidas = () => {
  const [maisVendidas, setMaisVendidas] = useState([]);

  useEffect(() => {
    const vendidas = MaisVendidasService.getAll();
    setMaisVendidas(vendidas);
  }, []);

  function excluir(index) {
    if (window.confirm('Deseja realmente excluir esse dado?')) {
      MaisVendidasService.delete(index);
      setMaisVendidas(MaisVendidasService.getAll());
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
              <th>Quantidade vendida</th>
            </tr>
          </thead>
          <tbody>
            {maisVendidas.map((vendidas, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{vendidas.modelo}</td>
                <td>{vendidas.marca}</td>
                <td>{vendidas.quantidade}</td>
                <td>
                  <Link
                    to={`/maisVendidasForm/${index}`}
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
        <Link className="btn btn-success" to="/maisVendidasForm">
          Nova moto
        </Link>
      </Container>
    </div>
  );
};

export default MaisVendidas;
