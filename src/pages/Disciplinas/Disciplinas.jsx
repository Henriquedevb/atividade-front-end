import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DisciplinaService from '../../sevices/academicos/DisciplinaService';

const Disciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const disciplinas = DisciplinaService.getAll();
    setDisciplinas(disciplinas);
  }, []);

  return (
    <div>
      <Container>
        <Form>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Curso</th>
              </tr>
            </thead>
            <tbody>
              {disciplinas.map((disciplina, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{disciplina.nome}</td>
                  <td>{disciplina.curso}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link className="btn btn-success" to="/disciplinaForm">
            Nova Disciplina
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Disciplinas;
