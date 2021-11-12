import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ModelosService from '../../sevices/motocicles/ModelosService';

const ModelosForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const aluno = ModelosService.get(id);
      for (let campo in aluno) {
        setValue(campo, aluno[campo]);
      }
    }
  }, [props, setValue]);

  function enviarDados(dados) {
    const id = props.match.params.id;
    id ? ModelosService.update(id, dados) : ModelosService.create(dados);
    props.history.push('/modelos');
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="ano">
            <Form.Label>Ano: </Form.Label>
            <Form.Control
              type="text"
              {...register('ano', { required: true })}
            />
            {errors.ano && (
              <span className="text-danger">Campo Obrigatório</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="marca">
            <Form.Label>Marca: </Form.Label>
            <Form.Control
              type="text"
              {...register('marca', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modelo">
            <Form.Label>Modelo: </Form.Label>
            <Form.Control
              type="text"
              {...register('modelo', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar
          </Button>
          <Link className="btn btn-danger" to="/modelos">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default ModelosForm;
