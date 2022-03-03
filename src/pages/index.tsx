import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { ContentContainer, Main, Section } from "../styles/Intro";

/**
 * Intro Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Intro | Adidas</title>
      </Head>
      <Main>
        <Section>
          <img
            src="/static/images/intro-top-left.png"
            alt="Mulher usando top preto"
            className="top-left"
          />
          <img
            src="/static/images/intro-bottom-left.png"
            alt="Mulher usando top preto"
            className="bottom-left"
          />
        </Section>
        <Section style={{ maxHeight: "90%" }}>
          <img
            src="/static/images/intro-top-right.png"
            alt="Mulher usando top vermelho"
            className="top-right"
          />
          <ContentContainer>
            <img src="/static/images/logo-adidas-claro.png" alt="Adidas Logo" />
            <h1 className="title">a evolução do top</h1>
            <h2 className="subtitle">SUPORTE É TUDO</h2>
            <button
              className="primary"
              type="button"
              onClick={() => router.push("/dados")}
            >
              DESCUBRA
              <img
                src="/static/images/seta-direita-branca.png"
                alt="Seta Branca"
              />
            </button>
          </ContentContainer>
        </Section>
      </Main>
    </>
  );
}
