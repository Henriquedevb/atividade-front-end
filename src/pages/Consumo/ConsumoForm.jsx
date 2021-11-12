import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ConsumoService from '../../sevices/motocicles/ConsumoService';

const ConsumoForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const consumo = ConsumoService.get(id);
      for (let campo in consumo) {
        setValue(campo, consumo[campo]);
      }
    }
  }, [props, setValue]);

  function enviarDados(dados) {
    const id = props.match.params.id;
    id ? ConsumoService.update(id, dados) : ConsumoService.create(dados);
    props.history.push('/consumo');
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

          <Form.Group className="mb-3" controlId="curso">
            <Form.Label>Media de gasto km/l gasolina: </Form.Label>
            <Form.Control
              type="number"
              {...register('mediaGasolina', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="curso">
            <Form.Label>Media de gasto km/l alcool: </Form.Label>
            <Form.Control
              type="number"
              {...register('mediaAlcool', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar consumo
          </Button>
          <Link className="btn btn-danger" to="/consumo">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default ConsumoForm;
