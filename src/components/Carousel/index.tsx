/* eslint-disable react/require-default-props */
import React, { SetStateAction, Dispatch } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Skeleton from "react-loading-skeleton";

import { ProductSlide } from "../ProductSlide";

import { EmblaContainer } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

type Product = {
  code: string;
  cor: string;
  img: string;
};

type Slide = {
  value: string;
  img: string;
  title?: string;
  customStyle?: {};
};

interface CarouselProps {
  slides: Slide[] | Product[];
  maxHeight?: string;
  isProductSlide?: boolean;
  selectedSlide: number;
  setSelectedSlide: Dispatch<SetStateAction<number | null>>;
  setCode?: Dispatch<SetStateAction<string | null>>;
  storedSlide?: number;
}

export const Carousel = ({
  slides,
  maxHeight,
  isProductSlide,
  selectedSlide,
  setSelectedSlide,
  setCode,
  storedSlide,
}: CarouselProps) => {
  const [slideLoaded, setSlideLoaded] = React.useState(false);
  const [leftArrow, setLeftArrow] = React.useState(false);
  const [rightArrow, setRightArrow] = React.useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ draggable: true });

  React.useEffect(() => {
    emblaApi?.on("scroll", () =>
      setSelectedSlide(emblaApi?.slidesInView().pop())
    );
  }, [emblaApi]);

  React.useEffect(() => {
    if (storedSlide !== -1) emblaApi?.scrollTo(storedSlide);
  }, [storedSlide, emblaApi]);

  React.useEffect(() => {
    if (
      emblaApi &&
      !emblaApi?.slidesInView()?.some((item) => item === selectedSlide)
    )
      emblaApi?.scrollTo(selectedSlide);
  }, [selectedSlide]);

  return (
    <EmblaContainer style={{ maxHeight }}>
      <button
        type="button"
        className="embla__prev"
        disabled={!selectedSlide}
        onClick={() => {
          emblaApi?.scrollPrev();
          setSelectedSlide(selectedSlide - 1);
        }}
      >
        <img
          src="/static/images/seta-esquerda-primary.png"
          alt="Seta anterior"
          onLoad={() => setLeftArrow(true)}
          style={{ height: leftArrow ? "unset" : 0 }}
        />
        {!leftArrow && (
          <Skeleton
            highlightColor="#dbc7b3"
            baseColor="#c1a891"
            className="seta-loading-skeleton"
          />
        )}
      </button>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {!isProductSlide ? (
              <>
                {slides.map((item) => {
                  return (
                    <div key={item.value} className="embla__slide">
                      <img
                        src={`/static/images/${item.img}`}
                        alt={item.value}
                        style={{
                          ...item?.customStyle,
                          height: slideLoaded ? "unset" : 0,
                          maxHeight,
                        }}
                        onLoad={() => setSlideLoaded(true)}
                      />
                      {!slideLoaded && (
                        <Skeleton
                          highlightColor="#dbc7b3"
                          baseColor="#c1a891"
                          className="react-loading-skeleton"
                          style={
                            !item?.title
                              ? { margin: "1.90625rem 0", maxHeight }
                              : { maxHeight }
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {slides.map((item, index) => {
                  const inView = emblaApi?.slidesInView() || [];
                  const isOnFocus = inView?.some((i) => i === index);

                  return (
                    <ProductSlide
                      key={`slide-${item?.name}`}
                      name={item.name}
                      colors={item.colors}
                      variants={item.variants}
                      setCode={setCode}
                      onFocus={isOnFocus}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="embla__next"
        disabled={selectedSlide === slides?.length - 1}
        onClick={() => {
          emblaApi?.scrollNext();
          setSelectedSlide(selectedSlide + 1);
        }}
      >
        <img
          src="/static/images/seta-direita-primary.png"
          alt="Seta próxima"
          onLoad={() => setRightArrow(true)}
          style={{ height: rightArrow ? "unset" : 0 }}
        />
        {!rightArrow && (
          <Skeleton
            highlightColor="#dbc7b3"
            baseColor="#c1a891"
            className="seta-loading-skeleton"
          />
        )}
      </button>
    </EmblaContainer>
  );
};
