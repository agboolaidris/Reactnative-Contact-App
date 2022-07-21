import React from "react";
import styled from "@emotion/native";
import { getColor, ColorType } from "../../assets/theme/colors";

const size = {
  title: 21,
  subTitle: 17,
};
// 👇️ type Keys = "name" | "age" | "country"
export type SizeType = keyof typeof size;

// 👇️ type Values = string | number
type Values = typeof size[SizeType];

interface Props {
  color?: ColorType;
  varaint?: SizeType;
}

export const Typography = styled.Text<Props>`
  color: ${({ color }) => getColor(color || "black")};
  font-size: ${({ varaint }) => varaint && size[varaint] + "px"};
`;
