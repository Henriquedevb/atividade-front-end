import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MaisVendidasService from '../../sevices/motocicles/MaisVendidasService';

const MaisVendidasForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const vendidas = MaisVendidasService.get(id);
      for (let campo in vendidas) {
        setValue(campo, vendidas[campo]);
      }
    }
  }, [props, setValue]);

  function enviarDados(dados) {
    const id = props.match.params.id;
    id
      ? MaisVendidasService.update(id, dados)
      : MaisVendidasService.create(dados);
    props.history.push('/maisVendidas');
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
            {errors.nome && (
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

          <Form.Group className="mb-3" controlId="quantidade">
            <Form.Label>Quantidade vendida: </Form.Label>
            <Form.Control
              type="number"
              {...register('quantidade', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar
          </Button>
          <Link className="btn btn-danger" to="/maisVendidas">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default MaisVendidasForm;
