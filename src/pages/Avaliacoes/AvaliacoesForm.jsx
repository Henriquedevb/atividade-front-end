import React from 'react';
import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AvaliacoesService from '../../sevices/motocicles/AvaliacoesService';

const AvaliacoesForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const avaliacao = AvaliacoesService.get(id);
      for (let campo in avaliacao) {
        setValue(campo, avaliacao[campo]);
      }
    }
  }, [props, setValue]);

  function enviarDados(dados) {
    const id = props.match.params.id;
    id ? AvaliacoesService.update(id, dados) : AvaliacoesService.create(dados);
    props.history.push('/avaliacao');
  }

  return (
    <div>
      <Container>
        <h1>Henrique Fontenele de jesus - 2014290022</h1>
        <hr />
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

          <Form.Group className="mb-3" controlId="opniao">
            <Form.Label>Opniao do proprietario: </Form.Label>
            <Form.Control
              type="text"
              {...register('opniao', { required: true })}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit(enviarDados)}>
            Salvar avaliacao
          </Button>
          <Link className="btn btn-danger" to="/avaliacao">
            Voltar
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default AvaliacoesForm;
