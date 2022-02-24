import React from "react";
import { useRouter } from "next/router";

import { Container } from "./styles";

interface FooterProps {
  prev: string;
  next: string;
}

export function Footer({ prev, next }: FooterProps) {
  const router = useRouter();

  return (
    <Container>
      <button
        type="button"
        className="primary"
        onClick={() => router.push(next)}
      >
        CONTINUAR
        <img src="/static/images/seta-direita-branca.png" alt="Seta Branca" />
      </button>
      <button type="button" className="back" onClick={() => router.push(prev)}>
        VOLTAR
      </button>
    </Container>
  );
}
