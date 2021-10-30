import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DisciplinaService from '../../sevices/academicos/DisciplinaService';

const Disciplinas = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function enviarDados(dados) {
    DisciplinaService.create(dados);
    props.history.push('/disciplina');
  }

  return (
    <div>
      <Container>
        <h1>Henrique Fontenele de jesus - 2014290022</h1>
        <hr />
        <Form>
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

          <Form.Group className="mb-3" controlId="curso">
            <Form.Label>Curso: </Form.Label>
            <Form.Control
              type="curso"
              {...register('curso', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Adicionar
          </Button>
          <Link className="btn btn-danger" to="/disciplina">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Disciplinas;
