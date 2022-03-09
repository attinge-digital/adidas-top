import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Typed from "react-typed";
import Skeleton from "react-loading-skeleton";
import Lottie from "react-lottie";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import { getProducts, newsLetter } from "../api/endpoints";

import { Main, ContentContainer, ResultsContainer } from "../styles/Resultados";

import loadingJson from "../assets/loading.json";

/**
 * Dados Page
 * @return {JSX.Element}
 */

export default function Medidas(): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [code, setCode] = React.useState(null);
  const [isCodeLoading, setIsCodeLoading] = React.useState(false);
  const [results, setResults] = React.useState(null);
  const [selectedSlide, setSelectedSlide] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState(null);
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [borderColor, setBorderColor] = React.useState("rgba(71, 58, 53, 0.5)");

  async function handleNewsLetter() {
    if (borderColor !== "green") {
      setBorderColor("red");
      return;
    }

    try {
      setEmailLoading(true);
      await newsLetter(email)
        .then(() => {
          setEmailLoading(false);
          setMsg("E-MAIL ENVIADO COM SUCESSO");
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    } catch (err) {
      setEmailLoading(false);
      setMsg("HOUVE UM ERRO NO ENVIO DO E-MAIL.");
      setTimeout(() => {
        setMsg("");
        setBorderColor("rgba(71, 58, 53, 0.5)");
      }, 3000);
    }
  }

  React.useEffect(() => {
    (async () => {
      try {
        const intensidade = localStorage.getItem("@AdidasTop:impactLevel");
        const ano = localStorage.getItem("@AdidasTop:birthyear");
        const busto = localStorage.getItem("@AdidasTop:busto");
        const torax = localStorage.getItem("@AdidasTop:torax");
        const seio = localStorage.getItem("@AdidasTop:seio");

        if (!intensidade || !ano) router.push("/dados");
        if (!seio) router.push("/seios");
        if (!busto || !torax) router.push("/medidas");

        const res = await getProducts(
          parseInt(ano, 10),
          intensidade,
          seio,
          busto,
          torax
        );

        if (!res.products?.length) {
          setError("Não encontramos peças ideias para você :(");
        }

        setResults(res);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (err) {
        setError("Houve um erro na busca pelas peças :(");
        setTimeout(() => setIsLoading(false), 1000);
      }
    })();
  }, []);

  React.useEffect(() => {
    setIsCodeLoading(true);
    setTimeout(() => setIsCodeLoading(false), 500);
  }, [code]);

  React.useEffect(() => {
    if (email === "") {
      setBorderColor("rgba(71, 58, 53, 0.5)");
      return;
    }

    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );

    if (validateEmail) {
      setBorderColor("green");
    } else {
      setBorderColor("red");
    }
  }, [email]);

  return (
    <>
      <Head>
        <title>Produtos | Adidas</title>
      </Head>
      <Main>
        <Header />
        <ContentContainer>
          <h1>RECOMENDADOS ESSES TOPS</h1>
          {!isLoading && !error ? (
            <>
              {results && (
                <>
                  <Carousel
                    isProductSlide
                    slides={results?.products}
                    setCode={setCode}
                    selectedSlide={selectedSlide}
                    setSelectedSlide={setSelectedSlide}
                  />
                  <ResultsContainer>
                    <div>
                      <h1>TAMANHOS</h1>
                      <div className="tamanhos">
                        <div>
                          <h1>{results.tamanhoA}</h1>
                        </div>
                        <div>
                          <h1>{results.tamanhoB}</h1>
                        </div>
                      </div>
                    </div>
                    <div style={{ alignItems: "center" }}>
                      <h1>IMPACTO</h1>
                      <div className="impact-container">
                        <h1>{results.intensidade}</h1>
                      </div>
                      <h1>CÓDIGO DO PRODUTO</h1>
                      {!!code && (
                        <>
                          {!isCodeLoading ? (
                            <>
                              <div className="code-container">
                                <h1>{code}</h1>
                              </div>
                            </>
                          ) : (
                            <Skeleton
                              style={{
                                height: "1.5rem",
                                borderRadius: "3px",
                                maxWidth: "5.1875rem",
                              }}
                              highlightColor="#dbc7b3"
                              baseColor="#c1a891"
                              className="react-loading-skeleton"
                            />
                          )}
                        </>
                      )}
                    </div>
                  </ResultsContainer>
                </>
              )}
            </>
          ) : (
            <>
              {error ? (
                <div className="loading-txt">
                  <span>{error}</span>
                </div>
              ) : (
                <Typed
                  className="loading-txt"
                  strings={["Buscando . . ."]}
                  typeSpeed={120}
                  backSpeed={20}
                  loop
                />
              )}
            </>
          )}
          <button
            type="button"
            className="primary"
            onClick={() => {
              const intensidade = localStorage.getItem(
                "@AdidasTop:impactLevel"
              );

              switch (intensidade) {
                case "ALTO":
                  window.open(
                    "https://www.adidas.com.br/alto_suporte-tops_esportivos_e_de_suporte-mulher"
                  );
                  break;
                case "LEVE":
                  window.open(
                    "https://www.adidas.com.br/baixo_suporte-tops_esportivos_e_de_suporte-mulher"
                  );
                  break;
                case "MÉDIO":
                default:
                  window.open(
                    "https://www.adidas.com.br/medio_suporte-tops_esportivos_e_de_suporte-mulher"
                  );
                  break;
              }
            }}
          >
            SAIBA MAIS
            <img
              src="/static/images/seta-direita-branca.png"
              alt="seta branca apontando para a direita"
            />
          </button>
          {!msg ? (
            <>
              <h1 className="mail-call">
                Desejo receber informações sobre a adidas no meu e-mail
              </h1>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="email@email.com"
                  onChange={({ target }) => {
                    setEmail(target.value);
                  }}
                  style={{ borderColor }}
                />
                <button
                  type="button"
                  className="primary"
                  onClick={() => handleNewsLetter()}
                >
                  {!emailLoading ? (
                    <img
                      src="/static/images/seta-direita-branca.png"
                      alt="seta branca apontando para a direita"
                    />
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
              </div>
            </>
          ) : (
            <h1 style={{ marginTop: "0.5rem" }}>{msg}</h1>
          )}
          <button type="button" className="back" onClick={() => router.back()}>
            VOLTAR
          </button>
        </ContentContainer>
      </Main>
    </>
  );
}
