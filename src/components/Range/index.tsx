/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { SetStateAction, Dispatch } from "react";
import { Range, getTrackBackground } from "react-range";

import { Container } from "./styles";

interface RangeProps {
  title: string;
  max: number;
  min: number;
  step: number;
  setValue: Dispatch<SetStateAction<number>>;
  setUsedStored: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line react/require-default-props
  storageKey?: string;
}

export function RangeInput({
  title,
  max,
  min,
  step,
  setValue,
  storageKey,
  setUsedStored,
}: RangeProps) {
  const [values, setValues] = React.useState([(min + max) / 2]);

  React.useEffect(() => {
    if (setValue) setValue(values[0]);
  }, [values]);

  React.useEffect(() => {
    setUsedStored(true);

    if (storageKey) {
      const storedValue = localStorage.getItem(storageKey);

      if (storedValue) {
        setValues([parseInt(storedValue, 10)]);
      }
    }
  }, [storageKey]);

  return (
    <Container>
      <h1>{title}</h1>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(range) => {
          setValues(range);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "24px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                ...props.style,
                height: "1px",
                width: "100%",
                borderRadius: 0,
                background: getTrackBackground({
                  values,
                  colors: ["#473A35", "#473A35"],
                  min,
                  max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "14px",
              width: "14px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #473A35",
            }}
          />
        )}
      />
      <div className="labels">
        <p>MENOR</p>
        <p>MAIOR</p>
      </div>
    </Container>
  );
}
