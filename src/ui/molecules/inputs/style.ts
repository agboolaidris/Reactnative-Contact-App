import { ViewProps } from "react-native";
import styled from "@emotion/native";
import { getColor } from "../../../assets/theme/colors";

interface Props extends ViewProps {
  direction: "row" | "reverse";
  error: boolean;
}
export const TextInputWrapper = styled.View<Props>`
  border-color: ${({ error }) => getColor(error ? "danger" : "black")};
  border-width: 1px;
  flex-direction: ${({ direction }) =>
    direction === "reverse" ? "row-reverse" : "row"};
  align-items: center;
  padding: 5px;
  border-radius: 5px;
`;

export const TextInputStyled = styled.TextInput`
  padding-left: 10px;
  flex: 1;
  height: 40px;
`;
