import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlunoService from '../../sevices/academicos/AlunoService';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const alunos = AlunoService.getAll();
    setAlunos(alunos);
  }, []);

  return (
    <div>
      <Container>
        <Table responsive="md">
          <thead sm={2}>
            <tr>
              <th></th>
              <th>Nome do aluno</th>
              <th>matricula</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Bairro</th>
              <th>Complemento</th>
              <th>Logradouro</th>
              <th>Numero</th>
              <th>CEP</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((curso, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curso.nome}</td>
                <td>{curso.matricula}</td>
                <td>{curso.cpf}</td>
                <td>{curso.email}</td>
                <td>{curso.telefone}</td>
                <td>{curso.Bairro}</td>
                <td>{curso.Complemento}</td>
                <td>{curso.Logradouro}</td>
                <td>{curso.Numero}</td>
                <td>{curso.cep}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link className="btn btn-success" to="/alunoForm">
          Novo curso
        </Link>
      </Container>
    </div>
  );
};

export default Alunos;
