const colors = {
  primary: "#4361ee",
  secondary: "#3f37c9",
  accent: "#4895ef",
  danger: "#f72585",
  success: "#4cc9f0",
  grey: "#adb5bd",
  white: "#ffffff",
  black: "#070606",
};

// 👇️ type Keys = "name" | "age" | "country"
export type ColorType = keyof typeof colors;

// 👇️ type Values = string | number
type Values = typeof colors[ColorType];

export const getColor = (value: ColorType): Values => {
  return colors[value];
};
