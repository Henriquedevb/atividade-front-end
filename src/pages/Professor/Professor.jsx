import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfessorService from '../../sevices/academicos/ProfessorService';

const Professor = () => {
  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    const professor = ProfessorService.getAll();
    setProfessor(professor);
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
                <th>CPF</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Salario</th>
                <th>Bairro</th>
                <th>Complemento</th>
                <th>Logradouro</th>
                <th>CEP</th>
                <th>Numero</th>
              </tr>
            </thead>
            <tbody>
              {professor.map((curso, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{curso.nome}</td>
                  <td>{curso.cpf}</td>
                  <td>{curso.email}</td>
                  <td>{curso.telefone}</td>
                  <td>{curso.salario}</td>
                  <td>{curso.Bairro}</td>
                  <td>{curso.Complemento}</td>
                  <td>{curso.Logradouro}</td>
                  <td>{curso.cep}</td>
                  <td>{curso.Numero}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link className="btn btn-success" to="/professorForm">
            Novo Professor
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Professor;
