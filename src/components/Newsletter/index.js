import React from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Container, FormContent } from './styles';

export default function Newsletter() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('*Insira um email válido')
      .required('*O email é obrigatório'),
    user: Yup.string().required('*Insira o nome do seu amigo'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <h3>Compartilhe a novidade</h3>
      <h4>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h4>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FormContent>
          <div>
            <span>Nome do seu amigo:</span>
            <Input name="user" />
          </div>
          <div>
            <span>E-mail:</span>
            <Input name="email" />
          </div>
        </FormContent>
        <button type="submit">Enviar agora</button>
      </Form>
    </Container>
  );
}
