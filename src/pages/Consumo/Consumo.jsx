import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConsumoService from '../../sevices/motocicles/ConsumoService';

const Consumo = () => {
  const [consumos, setConsumos] = useState([]);

  useEffect(() => {
    const consumo = ConsumoService.getAll();
    setConsumos(consumo);
  }, []);

  function excluir(index) {
    if (window.confirm('Deseja realmente excluir esse dado?')) {
      ConsumoService.delete(index);
      setConsumos(ConsumoService.getAll());
    }
  }
  return (
    <div>
      <Container>
        <Form>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Media Gasolina</th>
                <th>Media Alcool</th>
              </tr>
            </thead>
            <tbody>
              {consumos.map((consumo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{consumo.modelo}</td>
                  <td>{consumo.mediaGasolina}</td>
                  <td>{consumo.mediaAlcool}</td>
                  <td>
                    <Link
                      to={`/consumoForm/${index}`}
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
          <Link className="btn btn-success" to="/consumoForm">
            Novo consumo
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Consumo;
