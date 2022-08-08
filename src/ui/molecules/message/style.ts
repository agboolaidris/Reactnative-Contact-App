import { ViewProps } from "react-native";
import styled from "@emotion/native";
import { getColor, ColorType } from "../../../assets/theme/colors";

interface Props extends ViewProps {
  direction: "row" | "reverse";
  bgColor: ColorType;
}
export const MessageWrapper = styled.View<Props>`
  background-color: ${({ bgColor }) => getColor(bgColor)};
  flex-direction: ${({ direction }) =>
    direction === "reverse" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 5px;
`;
