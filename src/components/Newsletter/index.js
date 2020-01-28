import React from 'react';

import {
  Container,
  InputNewsletter,
  SubmitButton,
  FormNewsletter,
} from './styles';

export default function Newsletter() {
  return (
    <Container>
      <h3>Compartilhe a novidade</h3>
      <h4>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h4>
      <FormNewsletter>
        <InputNewsletter>
          <span>Nome do seu amigo:</span>
          <input type="text" />
        </InputNewsletter>
        <InputNewsletter>
          <span>E-mail:</span>
          <input type="text" />
        </InputNewsletter>
      </FormNewsletter>
      <SubmitButton>Enviar agora</SubmitButton>
    </Container>
  );
}
