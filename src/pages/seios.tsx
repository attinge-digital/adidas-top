import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import { Main, ContentContainer } from "../styles/Seios";

import { getSeios } from "../utils/seios";

type Slide = {
  value: string;
  img: string;
};

/**
 * Seios Page
 * @return {JSX.Element}
 */

export default function Dados(): JSX.Element {
  const router = useRouter();
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [storedSlide, setStoredSlide] = useState<number>(-1);

  const slides: Slide[] = React.useMemo(() => {
    const value = getSeios();
    return value;
  }, []);

  React.useEffect(() => {
    const storedType = localStorage.getItem("@AdidasTop:seio");

    if (storedType) {
      const index = slides.map((item) => item.value).indexOf(storedType);

      setStoredSlide(index);
    }
  }, []);

  React.useEffect(() => {
    if (slides[selectedSlide]?.value)
      localStorage.setItem("@AdidasTop:seio", slides[selectedSlide]?.value);
  }, [selectedSlide]);

  React.useEffect(() => {
    const impact = localStorage.getItem("@AdidasTop:impactLevel");
    // const year = localStorage.getItem("@AdidasTop:birthyear");

    if (!impact) router.push("/dados");
  }, []);

  return (
    <>
      <Head>
        <title>Dados | Adidas</title>
      </Head>
      <Main>
        <Header />
        <ContentContainer>
          <h1>
            qual seu <br />
            tipo de <br />
            seio?
          </h1>
          <Carousel
            slides={slides}
            selectedSlide={selectedSlide}
            setSelectedSlide={setSelectedSlide}
            storedSlide={storedSlide}
          />
          <button
            type="button"
            className="primary"
            onClick={() => router.push("/medidas")}
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
