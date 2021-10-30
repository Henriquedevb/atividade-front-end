import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CursoService from '../../sevices/academicos/CursoService';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cursos = CursoService.getAll();
    setCursos(cursos);
  }, []);

  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Nome do curso</th>
              <th>Duração</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curso.nome}</td>
                <td>{curso.duracao}</td>
                <td>{curso.modalidade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link className="btn btn-success" to="/cursoForm">
          Novo curso
        </Link>
      </Container>
    </div>
  );
};

export default Cursos;
