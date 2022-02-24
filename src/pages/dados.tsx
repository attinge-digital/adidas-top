import React from "react";
import Head from "next/head";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Picker } from "../components/Picker";

import {
  Main,
  ContentContainer,
  ButtonsContainer,
  IconsContainer,
} from "../styles/Dados";

import { activities } from "../utils/activities";

/**
 * Dados Page
 * @return {JSX.Element}
 */

export default function Dados(): JSX.Element {
  const [icons, setIcons] = React.useState([]);
  const [birthyear, setBirthyear] = React.useState(null);
  const [impactLevel, setImpactLevel] = React.useState("MÉDIO");
  const [loadedImages, setLoadedImages] = React.useState(0);
  const [showImgs, setShowImgs] = React.useState(false);

  React.useEffect(() => {
    if (!impactLevel) setIcons([]);

    const updatedIcons = activities.filter((item) => item.type === impactLevel);

    setIcons(updatedIcons);
  }, [impactLevel]);

  React.useEffect(() => {
    const storedLevel = localStorage.getItem("@AdidasTop:impactLevel");
    const storedBirth = localStorage.getItem("@AdidasTop:birthyear");

    if (storedLevel) {
      setImpactLevel(storedLevel);

      if (storedBirth) {
        setBirthyear(storedBirth);
      }

      return;
    }

    localStorage.setItem("@AdidasTop:impactLevel", impactLevel);
    if (birthyear) localStorage.setItem("@AdidasTop:birthyear", birthyear);
  }, []);

  React.useEffect(() => {
    if (loadedImages === 6) {
      setTimeout(() => {
        setShowImgs(true);
      }, 550);
    }
  }, [loadedImages]);

  return (
    <>
      <Head>
        <title>Dados | Adidas</title>
      </Head>
      <Main>
        <Header />
        <ContentContainer>
          <h1>
            queremos saber um
            <br />
            pouco mais sobre você
          </h1>
          <h2>qual é o seu ano de nascimento?</h2>

          <Picker
            selectedValue={birthyear}
            onChange={(value) => {
              setBirthyear(value);
              localStorage.setItem("@AdidasTop:birthyear", `${value}`);
            }}
          />

          <h1>
            Qual é a intensidade e o tipo de
            <br />
            esporte que você pratica?
          </h1>

          <ButtonsContainer>
            <button
              type="button"
              className={`secondary${impactLevel === "LEVE" ? " active" : ""}`}
              onClick={() => {
                if (impactLevel !== "LEVE") {
                  setShowImgs(false);
                  setLoadedImages(0);
                }
                localStorage.setItem("@AdidasTop:impactLevel", "LEVE");
                setImpactLevel("LEVE");
              }}
            >
              LEVE IMPACTO
            </button>
            <button
              type="button"
              className={`secondary${impactLevel === "MÉDIO" ? " active" : ""}`}
              onClick={() => {
                if (impactLevel !== "MÉDIO") {
                  setShowImgs(false);
                  setLoadedImages(0);
                }
                localStorage.setItem("@AdidasTop:impactLevel", "MÉDIO");
                setImpactLevel("MÉDIO");
              }}
            >
              MÉDIO IMPACTO
            </button>
            <button
              type="button"
              className={`secondary${impactLevel === "ALTO" ? " active" : ""}`}
              onClick={() => {
                if (impactLevel !== "ALTO") {
                  setShowImgs(false);
                  setLoadedImages(0);
                }
                localStorage.setItem("@AdidasTop:impactLevel", "ALTO");
                setImpactLevel("ALTO");
              }}
            >
              ALTO IMPACTO
            </button>
          </ButtonsContainer>

          {!!icons?.length && (
            <>
              <h3>confira alguns exemplos</h3>

              <IconsContainer>
                {icons?.map((item) => (
                  <div className="item-container" key={item.name}>
                    {!showImgs && (
                      <Skeleton
                        style={{
                          height: "1.925rem",
                          borderRadius: "3px",
                        }}
                        highlightColor="#dbc7b3"
                        baseColor="#c1a891"
                        className="react-loading-skeleton"
                      />
                    )}
                    <img
                      src={`/static/images/${item.src}`}
                      alt={item.name}
                      onLoad={() => {
                        setLoadedImages(loadedImages + 1);
                      }}
                      style={{ display: showImgs ? "flex" : "none" }}
                    />
                    <h1 style={{ display: showImgs ? "flex" : "none" }}>
                      {item.name}
                    </h1>
                  </div>
                ))}
              </IconsContainer>
            </>
          )}
        </ContentContainer>
        <Footer prev="/" next="/seios" />
      </Main>
    </>
  );
}
