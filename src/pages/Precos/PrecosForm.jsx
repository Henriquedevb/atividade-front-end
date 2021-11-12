import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PrecoService from '../../sevices/motocicles/PrecoService';

const PrecosForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const preco = PrecoService.get(id);
      for (let campo in preco) {
        setValue(campo, preco[campo]);
      }
    }
  }, [props, setValue]);

  function enviarDados(dados) {
    const id = props.match.params.id;
    id ? PrecoService.update(id, dados) : PrecoService.create(dados);
    props.history.push('/precos');
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="modelo">
            <Form.Label>Modelo: </Form.Label>
            <Form.Control
              type="text"
              {...register('modelo', { required: true })}
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

          <Form.Group className="mb-3" controlId="ano">
            <Form.Label>Ano: </Form.Label>
            <Form.Control
              type="number"
              {...register('ano', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="preco">
            <Form.Label>Preço: </Form.Label>
            <Form.Control
              type="number"
              {...register('preco', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar
          </Button>
          <Link className="btn btn-danger" to="/precos">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default PrecosForm;
