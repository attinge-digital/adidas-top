import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [usedStored, setUsedStored] = React.useState(false);

  React.useEffect(() => {
    const seioType = localStorage.getItem("@AdidasTop:seio");

    if (!seioType) router.push("/seios");
  }, []);

  React.useEffect(() => {
    localStorage.setItem("@AdidasTop:busto", `${98}`);
    localStorage.setItem("@AdidasTop:torax", `${75}`);
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
          <img
            src="/static/images/img-medidas.png"
            alt="tutorial de medidas"
            className="img-medidas"
            style={isLoading ? { height: 0 } : {}}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <Skeleton
              style={{
                width: "80%",
                borderRadius: "3px",
              }}
              highlightColor="#dbc7b3"
              baseColor="#c1a891"
              className="react-loading-skeleton"
            />
          )}
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
        </ContentContainer>
        <Footer prev="/seios" next="/resultados" />
      </Main>
    </>
  );
}
