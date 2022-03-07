/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useRouter } from "next/router";
import { Container, TextContainer } from "./styles";

export function Header() {
  const router = useRouter();

  return (
    <Container>
      <img
        src="/static/images/logo-adidas-claro.png"
        alt="Adidas Logo"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />
      <TextContainer>
        <h1>A EVOLUÇÃO DO TOP</h1>
        <h2>SUPORTE É TUDO</h2>
      </TextContainer>
    </Container>
  );
}
