import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProfessorService from '../../sevices/academicos/ProfessorService';

const Professor = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function enviarDados(dados) {
    ProfessorService.create(dados);
    props.history.push('/professor');
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
              type="text"
              {...register('nome', { required: true })}
            />
            {errors.nome && (
              <span className="text-danger">Campo Obrigatório</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>Cpf: </Form.Label>
            <Form.Control
              type="number"
              {...register('cpf', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matricula: </Form.Label>
            <Form.Control
              type="number"
              {...register('matricula', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="salario">
            <Form.Label>Salario: </Form.Label>
            <Form.Control
              type="number"
              {...register('salario', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control
              type="email"
              {...register('email', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="number"
              {...register('telefone', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep: </Form.Label>
            <Form.Control
              type="number"
              {...register('cep', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="number"
              {...register('Logradouro', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              {...register('Complemento', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Numero">
            <Form.Label>Numero: </Form.Label>
            <Form.Control
              type="number"
              {...register('Numero', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              {...register('Bairro', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Adicionar
          </Button>
          <Link className="btn btn-danger" to="/professor">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Professor;
