import React from "react";
import styled from "@emotion/native";
import { getColor, ColorType } from "../../assets/theme/colors";

interface Props {
  color?: ColorType;
}

export const Typography = styled.Text<Props>`
  color: ${({ color }) => getColor(color || "black")};
`;
