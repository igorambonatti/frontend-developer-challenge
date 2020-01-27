import React from 'react';

import { Container, NavButtons, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h3>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
      </div>
      <NavButtons>
        <Button>Conheça a Linx</Button>
        <Button>Ajude o algorítimo</Button>
        <Button>Seus produtos</Button>
        <Button>Compartilhe</Button>
      </NavButtons>
    </Container>
  );
}
