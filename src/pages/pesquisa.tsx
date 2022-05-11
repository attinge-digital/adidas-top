/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Lottie from "react-lottie";

import { Header } from "../components/Header";

import { pesquisa } from "../api/endpoints";

import { Main, ContentContainer, LevelsContainer } from "../styles/Pesquisa";

import loadingJson from "../assets/loading.json";

/**
 * Dados Page
 * @return {JSX.Element}
 */

export default function Medidas(): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [level, setLevel] = React.useState(-1);
  const [message, setMessage] = React.useState("");
  const [invalid, setInvalid] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [emailString, setEmail] = React.useState<string | string[] | undefined>(
    ""
  );

  async function handleSubmit() {
    if (isLoading || typeof emailString !== "string") return;

    if (message === "" || level === -1) {
      setInvalid(true);
      return;
    }

    setIsLoading(true);

    try {
      await pesquisa(level, emailString, message);

      setIsLoading(false);
      setFinished(true);
    } catch {
      setFinished(true);
      setError(true);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    const { email } = router.query;

    if (email) setEmail(email);
  }, [router.query]);

  React.useEffect(() => {
    if (emailString === "") return;
    if (typeof emailString !== "string") router.back();
  }, [emailString]);

  return (
    <>
      <Head>
        <title>Pesquisa | Adidas</title>
      </Head>
      <Main>
        <Header />
        <ContentContainer>
          <h1>PESQUISA DE SATISFAÇÃO</h1>
          {finished ? (
            <>
              {error ? (
                <>
                  <h2>
                    ERRO!
                    <br /> SUA MENSAGEM NÃO FOI ENVIADA
                  </h2>
                  <button
                    type="button"
                    onClick={() => router.reload()}
                    className="primary"
                    style={{ width: "50%", marginTop: "1rem" }}
                  >
                    TENTAR NOVAMENTE
                  </button>
                </>
              ) : (
                <>
                  <h2>
                    RESPOSTA ENVIADA,
                    <br /> AGRADECEMOS A PARTICIPAÇÃO!
                  </h2>
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="primary"
                    style={{ width: "50%", marginTop: "1rem" }}
                  >
                    FINALIZAR
                    <img
                      src="/static/images/seta-direita-branca.png"
                      alt="seta branca apontando para a direita"
                    />
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <h2>
                De 0 A 10, o quanto o portal te auxiliou a encontrar o seu top
                ideal?
              </h2>
              <h3>Sendo 0 muito insatisfeito e 10 muito satisfeito</h3>
              <LevelsContainer>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  let className = `level-${item}`;

                  if (level !== -1 && item !== level)
                    className += " not-selected";
                  if (invalid && level === -1) className += " invalid";

                  return (
                    <div
                      key={`item-${item}`}
                      className={className}
                      onClick={() => setLevel(item)}
                      role="button"
                    >
                      <p>{item}</p>
                    </div>
                  );
                })}
              </LevelsContainer>
              <h2>
                Deixe um comentário adicional à sua nota. Queremos oferecer a
                melhor experiência para você consumidora!
              </h2>
              <div
                className={
                  invalid && message === ""
                    ? "textarea-wrapper invalid"
                    : "textarea-wrapper"
                }
              >
                <textarea
                  placeholder="Escreva aqui..."
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                />
                <p>PREENCHIMENTO OBRIGATÓRIO</p>
              </div>
              <button
                className="primary"
                type="button"
                onClick={() => handleSubmit()}
              >
                {!isLoading ? (
                  <>
                    ENVIAR
                    <img
                      src="/static/images/seta-direita-branca.png"
                      alt="seta branca apontando para a direita"
                    />
                  </>
                ) : (
                  <Lottie
                    height={24}
                    width={24}
                    options={{
                      loop: true,
                      autoPlay: true,
                      animationData: loadingJson,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    isStopped={false}
                    isPaused={false}
                  />
                )}
              </button>
              <button
                type="button"
                className="back"
                onClick={() => router.back()}
              >
                VOLTAR
              </button>
            </>
          )}
        </ContentContainer>
      </Main>
    </>
  );
}
