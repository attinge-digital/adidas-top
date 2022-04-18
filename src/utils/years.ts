/* eslint-disable no-plusplus */
export function getYears() {
  const value = [];
  const date = new Date();

  for (let i = date.getFullYear(); i >= 1930; i--) {
    value.push(i);
  }

  return value;
}
