import React from "react";
import { Container, TextContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <img src="/static/images/logo-adidas-claro.png" alt="Adidas Logo" />
      <TextContainer>
        <h1>A EVOLUÇÃO DO TOP</h1>
        <h2>SUPORTE É TUDO</h2>
      </TextContainer>
    </Container>
  );
}
