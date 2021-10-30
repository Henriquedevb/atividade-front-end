import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CursoService from '../../sevices/academicos/CursoService';

const Cursos = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function enviarDados(dados) {
    CursoService.create(dados);
    props.history.push('/curso');
  }

  return (
    <div>
      <Container>
        <Form>
          <h4>Cursos</h4>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="nome"
              {...register('nome', { required: true })}
            />
            {errors.nome && (
              <span className="text-danger">Campo Obrigatório</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duracao: </Form.Label>
            <Form.Control
              type="duracao"
              {...register('duracao', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modalidade">
            <Form.Label>Modalidade: </Form.Label>
            <Form.Control
              type="modalidade"
              {...register('modalidade', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Adicionar
          </Button>
          <Link className="btn btn-danger" to="/curso">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Cursos;
