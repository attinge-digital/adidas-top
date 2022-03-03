/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Dispatch, SetStateAction } from "react";
import Skeleton from "react-loading-skeleton";

import { Slide, ColorsContainer } from "./styles";

type Product = {
  code: string;
  cor: string;
  img: string;
};

interface ProductSlideProps {
  name: string;
  colors: string[];
  variants: Product[];
  setCode: Dispatch<SetStateAction<string>>;
  onFocus: boolean;
}

export function ProductSlide({
  name,
  colors,
  variants,
  setCode,
  onFocus,
}: ProductSlideProps) {
  const [color, setColor] = React.useState(colors[0]);
  const [isLoading, setIsLoading] = React.useState(true);
  const variant = React.useMemo(() => {
    const value = variants.find((item) => item.cor === color);

    if (onFocus) setCode(value?.code);

    return value;
  }, [color, onFocus]);

  React.useEffect(() => {
    setIsLoading(true);
  }, [color]);

  return (
    <Slide className="embla__slide">
      <img
        src={variant?.img}
        alt={name}
        onLoad={() => {
          setIsLoading(false);
        }}
        style={{ height: isLoading ? 0 : "unset" }}
      />
      {isLoading && (
        <Skeleton
          style={{
            height: "10.25rem",
            width: "95%",
            margin: "0.875rem auto",
            maxWidth: "11.875rem",
            borderRadius: "3px",
          }}
          highlightColor="#dbc7b3"
          baseColor="#c1a891"
          className="react-loading-skeleton"
        />
      )}
      <h1>{name}</h1>
      <ColorsContainer>
        {colors?.map((item, index) => {
          return (
            <span
              role="button"
              key={`${name}-color-${index}`}
              className={item === color ? "color active" : "color"}
              style={{ backgroundColor: item }}
              onClick={() => setColor(item)}
            />
          );
        })}
      </ColorsContainer>
    </Slide>
  );
}
