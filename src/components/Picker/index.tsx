import React from "react";
import RMPicker from "rmc-picker";

import { Container } from "./styles";
import "rmc-picker/assets/index.css";

import { getYears } from "../../utils/years";

interface PickerProps {
  selectedValue: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (n: number) => void;
}

export function Picker({ selectedValue, onChange }: PickerProps) {
  const items = getYears();

  return (
    <Container>
      <RMPicker
        selectedValue={selectedValue}
        onValueChange={(value) => onChange(value)}
      >
        {items.map((i) => {
          return (
            <RMPicker.Item value={`${i}`} key={`ano-${i}`}>
              {i}
            </RMPicker.Item>
          );
        })}
      </RMPicker>
    </Container>
  );
}
