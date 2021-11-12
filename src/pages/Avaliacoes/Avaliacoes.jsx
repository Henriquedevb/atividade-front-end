import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AvaliacoesService from '../../sevices/motocicles/AvaliacoesService';

const Avaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const avaliacao = AvaliacoesService.getAll();
    setAvaliacoes(avaliacao);
  }, []);

  function excluir(index) {
    if (window.confirm('Deseja realmente excluir esse dado?')) {
      AvaliacoesService.delete(index);
      setAvaliacoes(AvaliacoesService.getAll());
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
                <th>Opniao</th>
              </tr>
            </thead>
            <tbody>
              {avaliacoes.map((avaliacao, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{avaliacao.modelo}</td>
                  <td>{avaliacao.opniao}</td>
                  <td>
                    <Link
                      to={`/avaliacaoForm/${index}`}
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
          <Link className="btn btn-success" to="/avaliacaoForm">
            Nova avaliacao
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Avaliacoes;
