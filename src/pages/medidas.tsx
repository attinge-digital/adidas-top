import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { RangeInput } from "../components/Range";

import { Main, ContentContainer, MedidasContainer } from "../styles/Medidas";

/**
 * Dados Page
 * @return {JSX.Element}
 */

export default function Medidas(): JSX.Element {
  const router = useRouter();
  const [busto, setBusto] = React.useState(0);
  const [torax, setTorax] = React.useState(0);
  const [selectedSlide, setSelectedSlide] = React.useState(0);
  const [usedStored, setUsedStored] = React.useState(false);

  const slides = [
    {
      img: "torax.png",
      value: "Como medir tórax",
      title: "POSIÇÃO DA FITA PARA MEDIR O TÓRAX",
      customStyle: { width: "85%" },
    },
    {
      img: "busto.png",
      value: "Como medir busto",
      title: "POSIÇÃO DA FITA PARA MEDIR O BUSTO",
      customStyle: { width: "85%" },
    },
  ];

  React.useEffect(() => {
    const seioType = localStorage.getItem("@AdidasTop:seio");

    if (!seioType) router.push("/seios");
  }, []);

  return (
    <>
      <Head>
        <title>Medidas | Adidas</title>
      </Head>
      <Main>
        <Header />
        <ContentContainer>
          <h1>AGORA NOS INFORME SUAS MEDIDAS</h1>
          <Carousel
            slides={slides}
            selectedSlide={selectedSlide}
            setSelectedSlide={setSelectedSlide}
          />
          <MedidasContainer>
            <div>
              <RangeInput
                title="BUSTO"
                min={62}
                max={134}
                step={1}
                storageKey="@AdidasTop:busto"
                setUsedStored={setUsedStored}
                setValue={(value) => {
                  if (usedStored)
                    localStorage.setItem("@AdidasTop:busto", `${value}`);
                  setBusto(value);
                }}
              />
              <RangeInput
                title="TÓRAX"
                min={48}
                max={102}
                step={1}
                storageKey="@AdidasTop:torax"
                setUsedStored={setUsedStored}
                setValue={(value) => {
                  if (usedStored)
                    localStorage.setItem("@AdidasTop:torax", `${value}`);
                  setTorax(value);
                }}
              />
            </div>
            <div className="medidas">
              <span className="top">
                <span className="left" />
                <span className="right" />
              </span>
              <div>
                <p>{busto} cm</p>
              </div>
              <div>
                <p>{torax} cm</p>
              </div>
              <span className="bottom" />
            </div>
          </MedidasContainer>
          <button
            type="button"
            className="primary"
            onClick={() => router.push("/resultados")}
          >
            CONTINUAR
            <img
              src="/static/images/seta-direita-branca.png"
              alt="Seta Branca"
            />
          </button>
          <button type="button" className="back" onClick={() => router.back()}>
            VOLTAR
          </button>
        </ContentContainer>
      </Main>
    </>
  );
}
