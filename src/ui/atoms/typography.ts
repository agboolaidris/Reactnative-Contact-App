import React from "react";
import styled from "styled-components/native";
import { getColor, ColorType } from "../../assets/theme/colors";

interface Props {
  color: ColorType;
}

export const Typography = styled.Text<Props>`
  color: ${({ color }) => getColor(color || "black")};
`;
